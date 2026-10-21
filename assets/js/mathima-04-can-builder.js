const builder = document.querySelector('[data-can-builder]');

if (builder) {
  const state = {
    modules: { engine: false, abs: false, body: false, cluster: false },
    terminators: { left: false, right: false },
    pins: { '6': false, '14': false }
  };

  const moduleLabels = {
    engine: 'ECU κινητήρα',
    abs: 'ABS',
    body: 'ECU αμαξώματος',
    cluster: 'Πίνακας οργάνων'
  };
  const feedback = builder.querySelector('[data-feedback]');

  function isComplete() {
    return Object.values(state.modules).every(Boolean)
      && state.terminators.left && state.terminators.right
      && state.pins['6'] && state.pins['14'];
  }

  function updateView() {
    Object.entries(state.modules).forEach(([key, connected]) => {
      const button = builder.querySelector(`[data-module="${key}"]`);
      const node = builder.querySelector(`[data-module-node="${key}"]`);
      button.setAttribute('aria-pressed', String(connected));
      button.lastChild.textContent = connected ? `${moduleLabels[key]} · συνδεδεμένη` : moduleLabels[key];
      node.classList.toggle('is-connected', connected);
      node.querySelector('small').textContent = connected ? 'ΣΥΝΔΕΔΕΜΕΝΗ' : 'ΑΠΟΣΥΝΔΕΔΕΜΕΝΗ';
    });

    Object.entries(state.terminators).forEach(([side, connected]) => {
      const graphic = builder.querySelector(`[data-terminator="${side}"]`);
      const control = builder.querySelector(`[data-terminator-control="${side}"]`);
      graphic.classList.toggle('is-connected', connected);
      graphic.setAttribute('aria-pressed', String(connected));
      control.classList.toggle('is-connected', connected);
      control.setAttribute('aria-pressed', String(connected));
      control.lastChild.textContent = `${side === 'left' ? 'Αριστερός' : 'Δεξιός'} 120 Ω${connected ? ' · τοποθετημένος' : ''}`;
    });

    Object.entries(state.pins).forEach(([pin, connected]) => {
      const control = builder.querySelector(`[data-pin="${pin}"]`);
      control.classList.toggle('is-connected', connected);
      control.setAttribute('aria-pressed', String(connected));
      control.lastChild.textContent = `Ακίδα ${pin} → CAN-${pin === '6' ? 'H' : 'L'}${connected ? ' · συνδεδεμένη' : ''}`;
    });

    const moduleCount = Object.values(state.modules).filter(Boolean).length;
    const terminatorCount = Object.values(state.terminators).filter(Boolean).length;
    const obdReady = state.pins['6'] && state.pins['14'];
    const complete = isComplete();
    builder.querySelector('.network-board').classList.toggle('has-terminators', terminatorCount > 0);
    builder.querySelectorAll('[data-check]').forEach((item) => {
      const key = item.dataset.check;
      const done = key === 'modules' ? moduleCount === 4 : key === 'terminators' ? terminatorCount === 2 : obdReady;
      item.classList.toggle('is-complete', done);
    });

    const resistance = builder.querySelector('[data-resistance]');
    const meterNote = builder.querySelector('[data-meter-note]');
    resistance.textContent = terminatorCount === 2 ? '≈ 60 Ω' : terminatorCount === 1 ? '≈ 120 Ω' : 'OL';
    meterNote.textContent = terminatorCount === 2
      ? 'Οι δύο αντιστάσεις 120 Ω είναι παράλληλα: συνολικά περίπου 60 Ω.'
      : terminatorCount === 1
        ? 'Φαίνεται ένας τερματισμός 120 Ω. Χρειάζεται και ο δεύτερος στο απέναντι άκρο.'
        : 'Δεν έχει συνδεθεί τερματισμός ανάμεσα στις γραμμές.';

    builder.querySelector('[data-obd-node]').classList.toggle('is-connected', obdReady);
    builder.querySelector('[data-obd-status]').textContent = obdReady ? 'Ακίδα 6 → H · ακίδα 14 → L' : 'Δεν έχει συνδεθεί';
    const buildState = builder.querySelector('[data-build-state]');
    buildState.textContent = complete ? 'ΕΤΟΙΜΟ ΓΙΑ ΕΛΕΓΧΟ' : 'ΥΠΟ ΚΑΤΑΣΚΕΥΗ';
    buildState.classList.toggle('is-ready', complete);
    builder.querySelector('[data-scope-preview]').hidden = !complete;
  }

  function clearFeedback() {
    feedback.hidden = true;
    feedback.classList.remove('is-success');
  }

  builder.querySelectorAll('[data-module]').forEach((button) => {
    button.addEventListener('click', () => {
      state.modules[button.dataset.module] = !state.modules[button.dataset.module];
      clearFeedback();
      updateView();
    });
  });

  builder.querySelectorAll('[data-terminator], [data-terminator-control]').forEach((button) => {
    button.addEventListener('click', () => {
      const side = button.dataset.terminator || button.dataset.terminatorControl;
      state.terminators[side] = !state.terminators[side];
      clearFeedback();
      updateView();
    });
  });

  builder.querySelectorAll('[data-pin]').forEach((button) => {
    button.addEventListener('click', () => {
      state.pins[button.dataset.pin] = !state.pins[button.dataset.pin];
      clearFeedback();
      updateView();
    });
  });

  builder.querySelector('[data-check-build]').addEventListener('click', () => {
    const missing = [];
    if (!Object.values(state.modules).every(Boolean)) missing.push('Σύνδεσε και τις τέσσερις ECU παράλληλα στις γραμμές του διαύλου.');
    if (!state.terminators.left || !state.terminators.right) missing.push('Τοποθέτησε από μία αντίσταση 120 Ω σε κάθε άκρο του διαύλου.');
    if (!state.pins['6'] || !state.pins['14']) missing.push('Ολοκλήρωσε τη σύνδεση OBD: ακίδα 6 στο CAN-H και ακίδα 14 στο CAN-L.');

    feedback.hidden = false;
    if (missing.length === 0) {
      feedback.classList.add('is-success');
      feedback.textContent = 'Σωστά! Οι μονάδες είναι συνδεδεμένες στον δίαυλο, οι τερματισμοί βρίσκονται στα δύο άκρα και η OBD συνδέεται στις σωστές γραμμές. Με το κύκλωμα απενεργοποιημένο, η μέτρηση είναι περίπου 60 Ω.';
    } else {
      feedback.classList.remove('is-success');
      feedback.innerHTML = `<strong>Χρειάζονται ακόμη ${missing.length} έλεγχοι:</strong><ul>${missing.map((item) => `<li>${item}</li>`).join('')}</ul>`;
    }
  });

  builder.querySelector('[data-reset-build]').addEventListener('click', () => {
    Object.keys(state.modules).forEach((key) => { state.modules[key] = false; });
    Object.keys(state.terminators).forEach((key) => { state.terminators[key] = false; });
    Object.keys(state.pins).forEach((key) => { state.pins[key] = false; });
    clearFeedback();
    updateView();
  });

  updateView();
}
