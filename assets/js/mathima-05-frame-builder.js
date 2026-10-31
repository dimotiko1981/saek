/* Εργαστήριο 5 · CAN Frame Builder · Classic CAN 2.0A, 11-bit DATA frames */
(() => {
  "use strict";
  const root = document.querySelector('[data-frame-builder]');
  if (!root) return;
  const q = (selector) => root.querySelector(selector);
  const CONTROL = [
    { id: 'abs', name: 'ABS · ταχύτητα τροχών' },
    { id: 'ecu', name: 'ECU κινητήρα · στροφές' },
    { id: 'bcm', name: 'BCM · κατάσταση θυρών' },
    { id: 'dash', name: 'Πίνακας οργάνων' },
    { id: 'media', name: 'Πολυμέσα' }
  ];
  const FIELDS = [
    { key: 'sof', label: 'SOF', hint: 'Έναρξη πλαισίου' },
    { key: 'id', label: 'ID', hint: 'Αναγνωριστικό 11 bit' },
    { key: 'rtr', label: 'RTR', hint: '0 = πλαίσιο δεδομένων' },
    { key: 'ide', label: 'IDE', hint: '0 = βασικό αναγνωριστικό' },
    { key: 'r0', label: 'r0', hint: 'Δεσμευμένο bit, 0' },
    { key: 'dlc', label: 'DLC', hint: 'Μήκος δεδομένων σε bytes' },
    { key: 'data', label: 'DATA', hint: 'Περιεχόμενο 0–8 bytes' },
    { key: 'crc', label: 'CRC-15', hint: 'Έλεγχος σφαλμάτων' },
    { key: 'crcDel', label: 'CRC DEL', hint: 'Διαχωριστικό CRC' },
    { key: 'ack', label: 'ACK', hint: 'Επιβεβαίωση λήψης' },
    { key: 'ackDel', label: 'ACK DEL', hint: 'Διαχωριστικό ACK' },
    { key: 'eof', label: 'EOF', hint: 'Τέλος πλαισίου' }
  ];
  const REQUIRED_ORDER = FIELDS.map((field) => field.key);
  // Όλα τα IDs και σήματα είναι επινοημένα για τις εκπαιδευτικές αποστολές.
  const GUIDED = [
    { ecu: 'abs', id: 0x080, bytes: [0x1A, 0x00], heading: 'Μήνυμα ABS', task: 'Το ABS στέλνει ενδεικτικά δύο bytes: 1A 00. Επίλεξε ABS, ID 0x080 και DLC 2.' },
    { ecu: 'ecu', id: 0x120, bytes: [0x0C, 0xA0, 0x05], heading: 'Μήνυμα ECU κινητήρα', task: 'Η ECU στέλνει τρία bytes: 0C A0 05 με αναγνωριστικό 0x120.' },
    { ecu: 'bcm', id: 0x320, bytes: [0x01], heading: 'Μήνυμα BCM', task: 'Το BCM εκπέμπει ένα byte: 01, με αναγνωριστικό 0x320.' }
  ];
  const REPAIR = [
    { ecu: 'abs', id: 0x080, bytes: [0x1A, 0x00], start: { ecu: 'abs', id: '0x800', dlc: 2, bytes: ['1A', '00'] }, heading: 'Λανθασμένο αναγνωριστικό', task: 'Ο τεχνικός κατέγραψε ID 0x800. Για βασικό CAN με 11-bit ID, διόρθωσέ το σε 0x080.' },
    { ecu: 'ecu', id: 0x120, bytes: [0x0C, 0xA0], start: { ecu: 'ecu', id: '0x120', dlc: 3, bytes: ['0C', 'A0', '00'] }, heading: 'Ασυμφωνία DLC / δεδομένων', task: 'Το ζητούμενο μήνυμα έχει δύο bytes, 0C A0. Διόρθωσε το DLC και έλεγξε τη σειρά πεδίων.' },
    { ecu: 'bcm', id: 0x320, bytes: [0x01, 0xFF], start: { ecu: 'bcm', id: '0x320', dlc: 2, bytes: ['FF', '01'] }, heading: 'Αντεστραμμένα bytes', task: 'Η συμφωνημένη ακολουθία είναι 01 FF και όχι FF 01. Διόρθωσε τα DATA.' }
  ];
  const $ = (s) => q(`[data-frame-${s}]`);
  const modeButtons = [...root.querySelectorAll('[data-frame-mode]')];
  const ecuInput = $('ecu'), idInput = $('id'), dlcInput = $('dlc'), byteArea = $('bytes');
  const orderSlots = $('order-slots'), orderChoices = $('order-choices');
  let mode = 'guided';
  let index = 0;
  let solved = { guided: new Set(), repair: new Set() };
  let order = [];
  let ackPresent = true;
  let runNumber = 0;

  /** Pure routines also exposed for unit testing. */
  function bits(value, count) { return value.toString(2).padStart(count, '0'); }
  function crc15(input) {
    let reg = 0;
    for (const char of input) {
      const feedback = ((reg >> 14) & 1) ^ (char === '1' ? 1 : 0);
      reg = (reg << 1) & 0x7fff;
      if (feedback) reg ^= 0x4599;
    }
    return reg;
  }
  function stuffedCount(sequence) {
    let last = null, streak = 0, extra = 0;
    for (const bit of sequence) {
      streak = bit === last ? streak + 1 : 1;
      last = bit;
      if (streak === 5) { extra += 1; last = bit === '0' ? '1' : '0'; streak = 1; }
    }
    return extra;
  }
  function parseID(raw) {
    const normalized = String(raw).trim().replace(/^0x/i, '');
    if (!/^[\da-f]{1,3}$/i.test(normalized)) return null;
    const number = Number.parseInt(normalized, 16);
    return number >= 0 && number <= 0x7ff ? number : null;
  }
  function frameFor(id, data, ack = true) {
    if (!Number.isInteger(id) || id < 0 || id > 0x7ff || !Array.isArray(data) || data.length > 8 || data.some(x => !Number.isInteger(x) || x < 0 || x > 255)) throw Error('Invalid CAN frame parameters');
    const dlc = data.length;
    const preCRC = '0' + bits(id, 11) + '000' + bits(dlc, 4) + data.map(x => bits(x, 8)).join('');
    const checksum = crc15(preCRC);
    const stuff = stuffedCount(preCRC + bits(checksum, 15));
    // ACK slot becomes dominant only if a receiving node acknowledges the frame.
    const raw = preCRC + bits(checksum, 15) + '1' + (ack ? '0' : '1') + '1' + '1111111';
    return { id, dlc, data: data.slice(), crc: checksum, stuff, bits: raw.length + stuff, rawBits: raw.length, ack };
  }
  window.SaekCanFrame = Object.freeze({ bits, crc15, stuffedCount, parseID, frameFor });

  function hex(n, width = 2) { return n.toString(16).toUpperCase().padStart(width, '0'); }
  function makeElement(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }
  function setMessage(text, type = 'info') {
    const feedback = $('feedback');
    feedback.className = `frame-feedback frame-feedback--${type}`;
    feedback.textContent = text;
  }
  function byteValues() { return [...byteArea.querySelectorAll('input')].map((input) => input.value); }
  function renderBytes(values = []) {
    const dlc = Number(dlcInput.value);
    byteArea.replaceChildren();
    for (let i = 0; i < dlc; i += 1) {
      const label = makeElement('label', 'frame-byte');
      label.append(makeElement('span', '', `BYTE ${i}`));
      const input = document.createElement('input');
      input.type = 'text'; input.autocomplete = 'off'; input.spellcheck = false;
      input.maxLength = 2; input.inputMode = 'text';
      input.placeholder = '00'; input.value = values[i] ?? '';
      input.setAttribute('aria-label', `Byte ${i} σε hexadecimal`);
      label.append(input); byteArea.append(label);
    }
    $('empty-bytes').hidden = dlc !== 0;
  }
  function readFrame() {
    const id = parseID(idInput.value);
    if (id === null) return { error: 'Το ID πρέπει να είναι hexadecimal από 0x000 έως 0x7FF (11 bit).' };
    const dlc = Number(dlcInput.value);
    if (!Number.isInteger(dlc) || dlc < 0 || dlc > 8) return { error: 'Το DLC επιτρέπεται να είναι 0–8.' };
    const entries = byteValues();
    if (entries.length !== dlc) return { error: 'Το πλήθος bytes πρέπει να είναι ίσο με το DLC.' };
    if (entries.some((byte) => !/^[\da-f]{2}$/i.test(byte.trim()))) return { error: 'Συμπλήρωσε κάθε byte με ακριβώς δύο hexadecimal ψηφία (00–FF).' };
    return { id, dlc, data: entries.map((byte) => Number.parseInt(byte, 16)), ecu: ecuInput.value };
  }
  function renderOrder() {
    orderSlots.replaceChildren(); orderChoices.replaceChildren();
    order.forEach((key, position) => {
      const field = FIELDS.find(x => x.key === key);
      const pill = makeElement('button', 'frame-order-pill', `${position + 1}. ${field.label} ×`);
      pill.type = 'button'; pill.title = `Αφαίρεση ${field.label}`;
      pill.addEventListener('click', () => { order.splice(position, 1); renderOrder(); });
      orderSlots.append(pill);
    });
    if (!order.length) orderSlots.append(makeElement('span', 'frame-order-placeholder', 'Πάτησε τα πεδία από κάτω με τη σωστή σειρά.'));
    FIELDS.filter(field => !order.includes(field.key)).forEach((field) => {
      const button = makeElement('button', 'frame-field-choice', field.label);
      button.type = 'button'; button.title = field.hint;
      button.setAttribute('aria-label', `Προσθήκη πεδίου ${field.label}: ${field.hint}`);
      button.addEventListener('click', () => { order.push(field.key); renderOrder(); });
      orderChoices.append(button);
    });
    $('order-count').textContent = `${order.length} / ${FIELDS.length}`;
  }
  function setScenario(message) {
    $('scenario-title').textContent = message.heading;
    $('scenario-text').textContent = message.task;
    $('scenario-label').textContent = mode === 'guided' ? `ΒΗΜΑ ${index + 1} / ${GUIDED.length}` : `ΣΦΑΛΜΑ ${index + 1} / ${REPAIR.length}`;
    $('scenario').hidden = false;
    $('next').hidden = true;
    $('scenario-result').textContent = '';
    $('progress').textContent = `${solved[mode].size} / ${mode === 'guided' ? GUIDED.length : REPAIR.length}`;
  }
  function resetSequence(wrong = false) {
    order = wrong ? ['id', 'sof', 'rtr', 'ide', 'r0', 'dlc', 'data', 'crc', 'crcDel', 'ack', 'ackDel', 'eof'] : [];
    renderOrder();
  }
  function loadScenario() {
    const scenario = mode === 'guided' ? GUIDED[index] : REPAIR[index];
    setScenario(scenario);
    $('ack').checked = true; ackPresent = true;
    if (mode === 'guided') {
      ecuInput.value = 'media'; idInput.value = ''; dlcInput.value = '0'; renderBytes(); resetSequence();
    } else {
      const start = scenario.start;
      ecuInput.value = start.ecu; idInput.value = start.id;
      dlcInput.value = String(start.dlc); renderBytes(start.bytes); resetSequence(true);
    }
    setMessage('Συμπλήρωσε τα πεδία και κατασκεύασε τη σωστή ακολουθία του πλαισίου.');
    updatePreview();
  }
  function resetFree() {
    $('scenario').hidden = true;
    $('progress').textContent = 'ΕΛΕΥΘΕΡΟ';
    $('scenario-result').textContent = '';
    $('next').hidden = true;
    ecuInput.value = 'ecu'; idInput.value = '0x120';
    dlcInput.value = '2'; renderBytes(['0C', 'A0']);
    resetSequence(); $('ack').checked = true; ackPresent = true;
    setMessage('Φτιάξε οποιοδήποτε έγκυρο πλαίσιο CAN 2.0A. Τα πεδία τοποθετούνται με τα κουμπιά τους.');
    updatePreview();
  }
  function setMode(next) {
    mode = next; index = 0;
    modeButtons.forEach(button => {
      const on = button.dataset.frameMode === mode;
      button.classList.toggle('is-active', on);
      button.setAttribute('aria-pressed', String(on));
    });
    $('mode-description').textContent = {
      guided: 'Ακολούθησε τις οδηγίες για 3 μηνύματα και μάθε πώς σχηματίζεται το πλαίσιο.',
      repair: 'Διόρθωσε 3 εσκεμμένα λανθασμένα μηνύματα και ανασύνθεσε τα πεδία.',
      free: 'Επίλεξε εσύ ID, DLC και DATA και μετά προσπάθησε να μεταδώσεις το μήνυμα.'
    }[mode];
    if (mode === 'free') resetFree(); else loadScenario();
  }
  function updatePreview() {
    const parsed = readFrame();
    const preview = $('live-preview');
    if (parsed.error) {
      preview.textContent = parsed.error;
      $('live-binary').textContent = '—';
      return;
    }
    const result = frameFor(parsed.id, parsed.data, ackPresent);
    preview.textContent = `ID 0x${hex(result.id, 3)} · DLC ${result.dlc} · DATA ${result.data.length ? result.data.map(x => hex(x)).join(' ') : '—'}`;
    $('live-binary').textContent = `ID bits: ${bits(result.id, 11)} · CRC-15: 0x${hex(result.crc, 4)}`;
  }
  function paintTimeline(result, parsed) {
    const timeline = $('timeline'); timeline.replaceChildren();
    const items = [
      ['SOF', '0'], ['ID', bits(result.id, 11)], ['RTR', '0'], ['IDE', '0'], ['r0', '0'],
      ['DLC', bits(result.dlc, 4)], ['DATA', parsed.data.length ? parsed.data.map(v => hex(v)).join(' ') : '—'],
      ['CRC-15', bits(result.crc, 15)], ['CRC DEL', '1'], ['ACK', result.ack ? '0' : '1'], ['ACK DEL', '1'], ['EOF', '1111111']
    ];
    items.forEach(([label, value], idx) => {
      const cell = makeElement('div', 'frame-timeline-item');
      cell.style.setProperty('--frame-i', idx);
      cell.append(makeElement('b', '', label), makeElement('code', '', value));
      timeline.append(cell);
    });
    $('transmission').hidden = false;
    $('tx-summary').textContent = `0x${hex(result.id, 3)} · ${result.dlc} byte${result.dlc === 1 ? '' : 's'} · CRC 0x${hex(result.crc, 4)} · ${result.stuff} stuff bits · ${result.bits} bit (χωρίς IFS)`;
    const flow = $('bus-flow');
    flow.classList.remove('is-running');
    void flow.offsetWidth;
    flow.classList.add('is-running');
    $('sender-name').textContent = CONTROL.find(x => x.id === parsed.ecu)?.name.split(' · ')[0] ?? 'ECU';
    $('receiver-name').textContent = result.ack ? 'ΔΕΚΤΗΣ · ACK' : 'ΔΕΚΤΗΣ · ΧΩΡΙΣ ACK';
    $('receiver-name').classList.toggle('is-no-ack', !result.ack);
    $('frame-details').textContent = result.ack
      ? `Ο δέκτης επιβεβαίωσε την ορθή λήψη με dominant ACK (0). Στον CAN δίαυλο το μήνυμα είναι broadcast· το ACK δεν αποδεικνύει ότι το επεξεργάστηκε συγκεκριμένη μονάδα.`
      : 'Κανένας δέκτης δεν επιβεβαίωσε λήψη: το ACK slot παραμένει recessive (1). Ο πομπός ανιχνεύει ACK error και το CAN controller συνήθως επιχειρεί επαναμετάδοση.';
  }
  function send() {
    const parsed = readFrame();
    if (parsed.error) { setMessage(parsed.error, 'error'); return; }
    if (order.length !== REQUIRED_ORDER.length || order.some((key, i) => key !== REQUIRED_ORDER[i])) {
      setMessage('Η σειρά πεδίων δεν είναι σωστή. Ξεκίνα με SOF, μετά ID, RTR, IDE, r0, DLC, DATA, CRC, CRC DEL, ACK, ACK DEL και EOF.', 'error');
      return;
    }
    let correctScenario = true;
    let scenario;
    if (mode !== 'free') {
      scenario = (mode === 'guided' ? GUIDED : REPAIR)[index];
      const issues = [];
      if (parsed.ecu !== scenario.ecu) issues.push('μονάδα αποστολής');
      if (parsed.id !== scenario.id) issues.push(`ID (ζητείται 0x${hex(scenario.id, 3)})`);
      if (parsed.dlc !== scenario.bytes.length) issues.push(`DLC (ζητούνται ${scenario.bytes.length} bytes)`);
      if (parsed.data.join(',') !== scenario.bytes.join(',')) issues.push(`DATA (ζητείται ${scenario.bytes.map(n => hex(n)).join(' ')})`);
      if (issues.length) {
        correctScenario = false;
        setMessage(`Το πλαίσιο είναι συντακτικά έγκυρο, αλλά δεν ταιριάζει με την αποστολή. Έλεγξε: ${issues.join(' · ')}.`, 'error');
      }
    }
    const packet = frameFor(parsed.id, parsed.data, ackPresent);
    runNumber += 1;
    paintTimeline(packet, parsed);
    if (!packet.ack) {
      setMessage('Το μήνυμα σχηματίστηκε, αλλά δεν επιβεβαιώθηκε η λήψη (ACK error). Ενεργοποίησε τον δέκτη και δοκίμασε ξανά.', 'warning');
      return;
    }
    if (!correctScenario) return;
    if (mode === 'free') {
      setMessage(`Επιτυχής κατασκευή! Πλαίσιο ${packet.bits} bit μαζί με τα stuff bits. Δοκίμασε άλλο ID ή νέα δεδομένα.`, 'success');
      return;
    }
    const fresh = !solved[mode].has(index);
    solved[mode].add(index);
    $('progress').textContent = `${solved[mode].size} / ${mode === 'guided' ? GUIDED.length : REPAIR.length}`;
    $('scenario-result').textContent = fresh ? '✓ Ολοκληρώθηκε σωστά η αποστολή!' : '✓ Η αποστολή είχε ολοκληρωθεί.';
    $('next').hidden = false;
    $('next').textContent = index === (mode === 'guided' ? GUIDED.length : REPAIR.length) - 1 ? 'Επιστροφή στην πρώτη αποστολή ↻' : 'Επόμενη αποστολή →';
    setMessage(`Σωστά! Το ${scenario.heading.toLowerCase()} μεταδόθηκε με ACK. Η σειρά των πεδίων και τα δεδομένα συμφωνούν με την αποστολή.`, 'success');
  }
  dlcInput.addEventListener('change', () => { renderBytes(byteValues()); updatePreview(); });
  for (const input of [ecuInput, idInput, dlcInput]) input.addEventListener('input', updatePreview);
  byteArea.addEventListener('input', updatePreview);
  $('ack').addEventListener('change', () => { ackPresent = $('ack').checked; updatePreview(); });
  $('order-reset').addEventListener('click', () => { resetSequence(); setMessage('Τοποθέτησε τα πεδία στη σωστή σειρά.'); });
  $('send').addEventListener('click', send);
  $('next').addEventListener('click', () => {
    const length = mode === 'guided' ? GUIDED.length : REPAIR.length;
    index = (index + 1) % length;
    loadScenario();
  });
  $('reset').addEventListener('click', () => { if (mode === 'free') resetFree(); else loadScenario(); $('transmission').hidden = true; });
  modeButtons.forEach(button => button.addEventListener('click', () => { $('transmission').hidden = true; setMode(button.dataset.frameMode); }));
  CONTROL.forEach(item => {
    const opt = makeElement('option', '', item.name); opt.value = item.id; ecuInput.append(opt);
  });
  setMode('guided');
})();
