const tour = document.querySelector('[data-tool-tour]');

if (tour) {
  const tabs = [...tour.querySelectorAll('[data-tour-tab]')];
  const panels = [...tour.querySelectorAll('[data-tour-panel]')];
  tabs.forEach((tab) => tab.addEventListener('click', () => {
    tabs.forEach((item) => item.setAttribute('aria-selected', String(item === tab)));
    panels.forEach((panel) => { panel.hidden = panel.dataset.tourPanel !== tab.dataset.tourTab; });
  }));

  const resistors = [...tour.querySelectorAll('[data-demo-resistor]')];
  const power = tour.querySelector('[data-demo-power]');
  const meterReading = tour.querySelector('[data-demo-reading]');
  const meterNote = tour.querySelector('[data-demo-reading-note]');
  const meterExplain = tour.querySelector('[data-demo-explain]');

  function invalidateMeter() {
    meterReading.textContent = '— —';
    meterNote.textContent = power.checked ? 'Κύκλωμα ενεργό · η μέτρηση Ω δεν είναι διαθέσιμη' : 'Κύκλωμα απενεργοποιημένο · έτοιμο για μέτρηση';
    meterExplain.textContent = 'Πάτησε «Μέτρηση» για να δεις την ένδειξη.';
  }
  resistors.forEach((input) => input.addEventListener('change', () => {
    const marker = tour.querySelector(`[data-demo-term="${input.dataset.demoResistor}"]`);
    marker.classList.toggle('is-off', !input.checked);
    marker.textContent = input.checked ? '120 Ω' : '—';
    invalidateMeter();
  }));
  power.addEventListener('change', invalidateMeter);

  tour.querySelector('[data-demo-measure]').addEventListener('click', () => {
    if (power.checked) {
      meterReading.textContent = '— —';
      meterNote.textContent = 'Πρώτα απενεργοποίησε το κύκλωμα.';
      meterExplain.textContent = 'Η μέτρηση αντίστασης γίνεται με το δίκτυο χωρίς τροφοδοσία.';
      return;
    }
    const count = resistors.filter((input) => input.checked).length;
    if (count === 0) {
      meterReading.textContent = 'OL';
      meterExplain.textContent = 'Δεν υπάρχει τερματισμός ανάμεσα στις γραμμές, οπότε το πολύμετρο δεν βρίσκει διαδρομή.';
    } else if (count === 1) {
      meterReading.textContent = '≈ 120 Ω';
      meterExplain.textContent = 'Μία αντίσταση 120 Ω βρίσκεται ανάμεσα στις γραμμές.';
    } else {
      meterReading.textContent = '≈ 60 Ω';
      meterExplain.textContent = 'Οι δύο αντιστάσεις 120 Ω είναι παράλληλες: η συνολική αντίσταση είναι περίπου η μισή.';
    }
    meterNote.textContent = 'Μέτρηση ανάμεσα στις γραμμές CAN-H και CAN-L';
  });

  const placementControls = [...tour.querySelectorAll('[data-placement]')];
  const topologyReading = tour.querySelector('[data-topology-reading]');
  const topologyNote = tour.querySelector('[data-topology-note]');
  function updateTopology() {
    const positions = placementControls.map((control) => control.value).filter((value) => value !== 'none');
    const counts = {};
    positions.forEach((position) => { counts[position] = (counts[position] || 0) + 1; });
    tour.querySelectorAll('[data-topology-slot]').forEach((slot) => {
      const count = counts[slot.dataset.topologySlot] || 0;
      slot.classList.toggle('has-resistor', count > 0);
      slot.querySelector('span').textContent = count ? (count === 1 ? '120 Ω' : '2 × 120 Ω') : '—';
    });
    topologyReading.textContent = positions.length === 0 ? 'OL' : positions.length === 1 ? '≈ 120 Ω' : '≈ 60 Ω';
    const properEnds = positions.length === 2 && counts.left === 1 && counts.right === 1;
    if (positions.length === 0) topologyNote.textContent = 'Δεν υπάρχουν τερματισμοί στο δίκτυο.';
    else if (positions.length === 1) topologyNote.textContent = 'Ένας τερματισμός 120 Ω: η ένδειξη είναι περίπου 120 Ω.';
    else if (properEnds) topologyNote.textContent = 'Σωστά: μία αντίσταση σε κάθε άκρο του κύριου κορμού.';
    else topologyNote.textContent = 'Η ένδειξη είναι ≈60 Ω, αλλά δεν επιβεβαιώνει τη σωστή θέση. Οι αντιστάσεις πρέπει να είναι στα δύο άκρα του κύριου κορμού.';
  }
  placementControls.forEach((control) => control.addEventListener('change', updateTopology));
  updateTopology();

  const pinControls = [...tour.querySelectorAll('[data-obd-pin]')];
  const ecuNodes = [...tour.querySelectorAll('[data-demo-ecu]')];
  const scanResult = tour.querySelector('[data-demo-scan-result]');
  pinControls.forEach((control) => control.addEventListener('change', () => {
    scanResult.textContent = 'Οι συνδέσεις άλλαξαν. Κάνε νέα σάρωση.';
    ecuNodes.forEach((node) => node.classList.remove('is-online'));
  }));
  tour.querySelector('[data-demo-scan]').addEventListener('click', () => {
    const map = Object.fromEntries(pinControls.map((control) => [control.dataset.obdPin, control.value]));
    const connected = map['6'] === 'H' && map['14'] === 'L';
    ecuNodes.forEach((node) => node.classList.toggle('is-online', connected));
    scanResult.textContent = connected
      ? 'Απάντησαν και οι 4 μονάδες. Το διαγνωστικό επικοινωνεί με το δίκτυο.'
      : 'Δεν απάντησαν μονάδες. Έλεγξε αν το διαγνωστικό συνδέεται και στις δύο γραμμές CAN.';
  });
}
