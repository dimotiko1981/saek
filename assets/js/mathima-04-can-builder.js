const builder = document.querySelector('[data-can-builder]');

if (builder) {
  const state = {
    modules: { engine: true, abs: true, body: true, cluster: false },
    resistors: { a: 'left', b: 'branch-a' },
    pins: { '6': 'L', '14': 'H' },
    measured: false,
    scanned: false
  };

  const labels = { engine: 'ECU κινητήρα', abs: 'ABS', body: 'Αμάξωμα', cluster: 'Πίνακας οργάνων' };
  const feedback = builder.querySelector('[data-feedback]');
  const moduleControls = builder.querySelectorAll('[data-module]');
  const resistorControls = builder.querySelectorAll('[data-resistor]');
  const pinControls = builder.querySelectorAll('[data-pin]');

  function placements() { return Object.values(state.resistors).filter((p) => p !== 'none'); }
  function bothEnds() {
    const p = placements();
    return p.length === 2 && p.includes('left') && p.includes('right');
  }
  function pinPairAcrossBus() {
    const [a, b] = [state.pins['6'], state.pins['14']];
    return (a === 'H' && b === 'L') || (a === 'L' && b === 'H');
  }
  function obdCorrect() { return state.pins['6'] === 'H' && state.pins['14'] === 'L'; }
  function resistanceReading() {
    if (!pinPairAcrossBus()) return '— —';
    const count = placements().length;
    return count === 0 ? 'OL' : count === 1 ? '≈ 120 Ω' : '≈ 60 Ω';
  }
  function setFeedback(message, success = false) {
    feedback.hidden = false;
    feedback.classList.toggle('is-success', success);
    feedback.innerHTML = message;
  }
  function clearFeedback() {
    feedback.hidden = true;
    feedback.classList.remove('is-success');
  }
  function updateView() {
    Object.entries(state.modules).forEach(([key, connected]) => {
      const button = builder.querySelector(`[data-module="${key}"]`);
      const node = builder.querySelector(`[data-module-node="${key}"]`);
      button.setAttribute('aria-pressed', String(connected));
      button.lastChild.textContent = connected ? `${labels[key]} · συνδεδεμένη` : labels[key];
      node.classList.toggle('is-connected', connected);
      node.querySelector('small').textContent = connected ? 'ΣΥΝΔΕΔΕΜΕΝΗ' : 'ΑΠΟΣΥΝΔΕΔΕΜΕΝΗ';
    });

    const slotCounts = {};
    placements().forEach((p) => { slotCounts[p] = (slotCounts[p] || 0) + 1; });
    builder.querySelectorAll('[data-slot]').forEach((slot) => {
      const count = slotCounts[slot.dataset.slot] || 0;
      slot.classList.toggle('has-resistor', count > 0);
      slot.querySelector('small').textContent = count ? (count === 1 ? '120 Ω' : `${count} × 120 Ω`) : '—';
    });

    Object.entries(state.pins).forEach(([pin, value]) => {
      const display = builder.querySelector(`[data-pin-state="${pin}"]`);
      display.textContent = value === 'none' ? '—' : value;
      display.classList.toggle('is-assigned', value !== 'none');
    });

    const pair = pinPairAcrossBus();
    builder.querySelector('[data-obd-node]').classList.toggle('is-connected', pair);
    builder.querySelector('[data-obd-status]').textContent = pair
      ? 'Οι ακίδες καταλήγουν στις δύο γραμμές'
      : 'Η διαγνωστική σύνδεση δεν είναι πλήρης';

    const reading = resistanceReading();
    builder.querySelector('[data-resistance]').textContent = state.measured ? reading : '— —';
    builder.querySelector('[data-meter-note]').textContent = state.measured
      ? (reading === '— —' ? 'Δεν προκύπτει μέτρηση ανάμεσα στις ακίδες της φίσα.' : 'Μέτρηση καταγράφηκε. Ερμήνευσε την ένδειξη με βάση το κύκλωμα.')
      : 'Το δίκτυο είναι απενεργοποιημένο. Πάρε μέτρηση όταν είσαι έτοιμος.';

    builder.querySelector('[data-build-state]').textContent = state.scanned ? 'ΕΛΕΓΧΟΣ ΟΛΟΚΛΗΡΩΘΗΚΕ' : 'ΥΠΟ ΔΙΕΡΕΥΝΗΣΗ';
    builder.querySelector('[data-scope-preview]').hidden = !(state.scanned && obdCorrect() && bothEnds() && Object.values(state.modules).every(Boolean));
  }

  moduleControls.forEach((button) => button.addEventListener('click', () => {
    state.modules[button.dataset.module] = !state.modules[button.dataset.module];
    state.scanned = false;
    clearFeedback();
    updateView();
  }));
  resistorControls.forEach((select) => select.addEventListener('change', () => {
    state.resistors[select.dataset.resistor] = select.value;
    state.measured = false;
    state.scanned = false;
    clearFeedback();
    updateView();
  }));
  pinControls.forEach((select) => select.addEventListener('change', () => {
    state.pins[select.dataset.pin] = select.value;
    state.measured = false;
    state.scanned = false;
    clearFeedback();
    updateView();
  }));

  builder.querySelector('[data-measure]').addEventListener('click', () => {
    state.measured = true;
    clearFeedback();
    updateView();
  });

  builder.querySelector('[data-scan]').addEventListener('click', () => {
    state.scanned = true;
    const reachable = Object.entries(state.modules).filter(([, connected]) => connected).map(([key]) => labels[key]);
    const validPath = obdCorrect() && bothEnds();
    let result;
    if (!obdCorrect()) {
      result = '<strong>Καμία μονάδα δεν απαντά.</strong><br>Η φίσα δεν επικοινωνεί με το δίκτυο.';
    } else if (!reachable.length) {
      result = '<strong>Καμία μονάδα δεν απαντά.</strong><br>Δεν εντοπίστηκαν ενεργές μονάδες.';
    } else if (!validPath) {
      result = `<strong>Ασταθής επικοινωνία · ${reachable.length}/4 μονάδες.</strong><br>Απαντούν: ${reachable.join(', ')}.`;
    } else {
      result = `<strong>Απαντούν ${reachable.length}/4 μονάδες.</strong><br>${reachable.length === 4 ? 'Όλες οι μονάδες είναι προσβάσιμες από το διαγνωστικό.' : `Εντοπίστηκαν: ${reachable.join(', ')}.`}`;
    }
    builder.querySelector('[data-scan-result]').innerHTML = result;
    clearFeedback();
    updateView();
  });

  builder.querySelector('[data-submit-build]').addEventListener('click', () => {
    if (!state.measured || !state.scanned) {
      setFeedback('Πριν υποβάλεις την κατασκευή, χρησιμοποίησε το πολύμετρο και τον διαγνωστικό εξοπλισμό.');
      return;
    }
    const connectedModules = Object.values(state.modules).filter(Boolean).length;
    const checks = [
      { ok: connectedModules === 4, text: 'Πρόσβαση και στις τέσσερις μονάδες' },
      { ok: bothEnds(), text: 'Μία αντίσταση σε κάθε άκρο του κύριου κορμού' },
      { ok: obdCorrect(), text: 'Σωστή επικοινωνία από τη διαγνωστική φίσα' },
      { ok: resistanceReading() === '≈ 60 Ω', text: 'Εύλογη αντίσταση μεταξύ των γραμμών' }
    ];
    const score = checks.filter((c) => c.ok).length;
    const lines = checks.map((c) => `<li>${c.ok ? '✓' : '○'} ${c.text}</li>`).join('');
    if (score === checks.length) {
      setFeedback(`<strong>Η κατασκευή λειτουργεί.</strong><ul>${lines}</ul><p>Οι μετρήσεις και η σάρωση συμφωνούν με ένα λειτουργικό δίκτυο.</p>`, true);
    } else {
      const placementHint = bothEnds()
        ? 'Έλεγξε ξανά τις συνδέσεις και τις ενδείξεις πριν από νέα υποβολή.'
        : 'Ακόμη κι αν το πολύμετρο δείχνει ≈60 Ω, αυτό δεν επιβεβαιώνει τη θέση τους. Βάλε μία αντίσταση σε κάθε άκρο της κύριας γραμμής, όχι στους κλάδους.';
      setFeedback(`<strong>Αποτέλεσμα: ${score}/4 κριτήρια.</strong><ul>${lines}</ul><p>${placementHint}</p>`);
    }
  });

  builder.querySelector('[data-reset-build]').addEventListener('click', () => {
    Object.keys(state.modules).forEach((key) => { state.modules[key] = false; });
    state.resistors = { a: 'none', b: 'none' };
    state.pins = { '6': 'none', '14': 'none' };
    resistorControls.forEach((control) => { control.value = 'none'; });
    pinControls.forEach((control) => { control.value = 'none'; });
    state.measured = false;
    state.scanned = false;
    builder.querySelector('[data-scan-result]').textContent = 'Ο διαγνωστικός εξοπλισμός δεν έχει συνδεθεί.';
    clearFeedback();
    updateView();
  });

  updateView();
}
