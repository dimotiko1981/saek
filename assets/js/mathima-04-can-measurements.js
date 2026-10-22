const bench = document.querySelector('[data-measurement-bench]');

if (bench) {
  const cases = [
    {
      title: 'Έλεγχος τερματισμού',
      symptom: 'Ο κινητήρας και οι υπόλοιπες μονάδες επικοινωνούν. Θέλεις να επιβεβαιώσεις τη συνολική αντίσταση του απενεργοποιημένου εκπαιδευτικού δικτύου.',
      task: 'Ρύθμισε το όργανο και μέτρησε ανάμεσα στις δύο γραμμές CAN.',
      rule: 'Μέτρηση αντίστασης γίνεται με το κύκλωμα απενεργοποιημένο.',
      setup: { tool: 'meter', mode: 'ohms', power: 'off', points: 'hl' },
      reading: '≈ 60 Ω',
      readingNote: 'Η μέτρηση λαμβάνεται ανάμεσα στις CAN-H και CAN-L με το δίκτυο απενεργοποιημένο.',
      diagnosis: 'Ποιο συμπέρασμα ταιριάζει στην ένδειξη;',
      options: ['Η συνολική αντίσταση είναι συμβατή με δύο τερματισμούς των 120 Ω σε παράλληλη σύνδεση.', 'Λείπουν και οι δύο αντιστάσεις τερματισμού.', 'Οι γραμμές CAN-H και CAN-L είναι βραχυκυκλωμένες.'],
      correct: 0,
      explanation: 'Στο απλουστευμένο κύκλωμα, δύο αντιστάσεις τερματισμού των 120 Ω σε παράλληλη σύνδεση δίνουν περίπου 60 Ω.',
      kind: 'resistance'
    },
    {
      title: 'Μία γραμμή τερματισμού λείπει',
      symptom: 'Σε αυτό το εκπαιδευτικό κύκλωμα υπάρχει υποψία ότι ένας τερματισμός δεν είναι συνδεδεμένος. Πρέπει να ελέγξεις την αντίσταση ανάμεσα στις δύο γραμμές.',
      task: 'Επίλεξε τη σωστή μέτρηση και βρες τι δείχνει η ένδειξη.',
      rule: 'Πριν από μέτρηση Ω, βεβαιώσου ότι το δίκτυο είναι απενεργοποιημένο.',
      setup: { tool: 'meter', mode: 'ohms', power: 'off', points: 'hl' },
      reading: '≈ 120 Ω',
      readingNote: 'Το μοντέλο προσομοίωσης εμφανίζει έναν μόνο τερματισμό 120 Ω στο κύκλωμα.',
      diagnosis: 'Ποια εξήγηση ελέγχεις πρώτη;',
      options: ['Ένας από τους δύο τερματισμούς ή η σύνδεσή του είναι ανοικτή.', 'Η αντίσταση είναι φυσιολογική για δύο τερματισμούς.', 'Η τάση της μπαταρίας είναι υπερβολικά χαμηλή.'],
      correct: 0,
      explanation: 'Στο συγκεκριμένο εκπαιδευτικό κύκλωμα, ένδειξη περίπου 120 Ω δείχνει ότι μετράται ένας τερματισμός αντί για δύο.',
      kind: 'resistance'
    },
    {
      title: 'Έλεγχος για βραχυκύκλωμα γραμμών',
      symptom: 'Το δίκτυο είναι απενεργοποιημένο και υπάρχει υποψία επαφής ανάμεσα στις CAN-H και CAN-L. Επίλεξε πρώτα τον σωστό τρόπο ελέγχου.',
      task: 'Μέτρησε την αντίσταση ανάμεσα στις CAN-H και CAN-L με ασφαλή συνθήκη μέτρησης.',
      rule: 'Δεν μετράμε αντίσταση σε κύκλωμα που τροφοδοτείται.',
      setup: { tool: 'meter', mode: 'ohms', power: 'off', points: 'hl' },
      reading: '< 1 Ω',
      readingNote: 'Η προσομοίωση εμφανίζει πολύ μικρή αντίσταση ανάμεσα στις δύο γραμμές.',
      diagnosis: 'Ποιο εύρημα περιγράφει καλύτερα την ένδειξη;',
      options: ['Υπάρχει πιθανό βραχυκύκλωμα ανάμεσα στις CAN-H και CAN-L.', 'Υπάρχουν δύο σωστοί τερματισμοί.', 'Το σήμα CAN είναι φυσιολογικό επειδή η αντίσταση είναι μικρή.'],
      correct: 0,
      explanation: 'Στο εκπαιδευτικό σενάριο, σχεδόν μηδενική αντίσταση ανάμεσα στις γραμμές δείχνει πιθανό βραχυκύκλωμα. Σε όχημα επιβεβαιώνουμε πάντα με την προβλεπόμενη διαδικασία.',
      kind: 'resistance'
    },
    {
      title: 'Ανάγνωση φυσιολογικού σήματος',
      symptom: 'Οι μονάδες επικοινωνούν. Θέλεις να παρατηρήσεις πώς μεταβάλλονται οι δύο γραμμές όταν μεταδίδονται δεδομένα.',
      task: 'Επίλεξε όργανο και ρύθμιση ώστε να παρατηρήσεις ταυτόχρονα τις CAN-H και CAN-L.',
      rule: 'Για να δεις τη μεταβολή του σήματος στον χρόνο, χρησιμοποιείς παλμογράφο με το δίκτυο ενεργό.',
      setup: { tool: 'scope', mode: 'wave', power: 'on', points: 'hl' },
      reading: 'Συμπληρωματική κυματομορφή',
      readingNote: 'Στο ενδεικτικό σήμα, όταν η CAN-H ανεβαίνει, η CAN-L κατεβαίνει.',
      diagnosis: 'Τι παρατηρείς στο ενδεικτικό σήμα;',
      options: ['Οι δύο γραμμές μεταβάλλονται αντίθετα μεταξύ τους στα bits κυριαρχίας.', 'Οι δύο γραμμές είναι μόνιμα στο μηδέν.', 'Η CAN-H και η CAN-L έχουν πάντα ακριβώς την ίδια τάση.'],
      correct: 0,
      explanation: 'Στο απλουστευμένο διάγραμμα, οι CAN-H και CAN-L κινούνται συμπληρωματικά. Οι ακριβείς στάθμες εξαρτώνται από το δίκτυο και τις συνθήκες μέτρησης.',
      kind: 'healthy-wave'
    },
    {
      title: 'Εντοπισμός ασυμμετρίας',
      symptom: 'Το διαγνωστικό καταγράφει διακοπτόμενη επικοινωνία. Στην προσομοίωση, θέλεις να συγκρίνεις τις δύο γραμμές την ώρα που το δίκτυο λειτουργεί.',
      task: 'Ρύθμισε τον παλμογράφο για να δεις τις CAN-H και CAN-L μαζί.',
      rule: 'Σύγκρινε τις δύο γραμμές· μια κυματομορφή μόνη της μπορεί να μην αρκεί για συμπέρασμα.',
      setup: { tool: 'scope', mode: 'wave', power: 'on', points: 'hl' },
      reading: 'Ασύμμετρη κυματομορφή',
      readingNote: 'Η CAN-H μεταβάλλεται, ενώ η CAN-L παραμένει σχεδόν επίπεδη στο ενδεικτικό διάγραμμα.',
      diagnosis: 'Ποιο είναι το ασφαλές διαγνωστικό συμπέρασμα;',
      options: ['Υπάρχει ασυμμετρία στο σήμα· ελέγχω τη CAN-L, τις συνδέσεις και τον συγκεκριμένο κλάδο.', 'Το δίκτυο λειτουργεί κανονικά, επειδή η CAN-H μεταβάλλεται.', 'Αντικαθιστώ αμέσως τον εγκέφαλο ABS χωρίς άλλο έλεγχο.'],
      correct: 0,
      explanation: 'Η ένδειξη δείχνει ότι οι δύο γραμμές δεν έχουν την αναμενόμενη συμπληρωματική εικόνα. Χρειάζεται εντοπισμός και επιβεβαίωση της αιτίας με τα δεδομένα του κατασκευαστή.',
      kind: 'asymmetric-wave'
    }
  ];

  const $ = (selector) => bench.querySelector(selector);
  const views = [...bench.querySelectorAll('[data-view]')];
  let caseIndex = 0;
  let score = 0;
  let setupAttempts = 0;
  let diagnosisAttempts = 0;
  let locked = false;

  function show(view) {
    views.forEach((section) => { section.hidden = section.dataset.view !== view; });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderCase() {
    const current = cases[caseIndex];
    $('[data-case-label]').textContent = `ΠΕΡΙΣΤΑΤΙΚΟ ${caseIndex + 1} / ${cases.length}`;
    $('[data-case-title]').textContent = current.title;
    $('[data-symptom]').textContent = current.symptom;
    $('[data-task]').textContent = current.task;
    $('[data-rule]').textContent = current.rule;
    $('[data-progress]').style.width = `${(caseIndex / cases.length) * 100}%`;
    $('[data-score]').textContent = `${score} / ${cases.length * 2}`;
    $('[data-reading]').hidden = true;
    $('[data-diagnosis]').hidden = true;
    $('[data-setup-feedback]').hidden = true;
    $('[data-diagnosis-feedback]').hidden = true;
    $('[data-next]').hidden = true;
    $('[data-measure]').disabled = false;
    $('[data-tool]').value = '';
    $('[data-mode]').value = '';
    $('[data-power]').value = '';
    $('[data-points]').value = '';
    $('[data-tool-label]').textContent = 'ΠΟΛΥΜΕΤΡΟ / ΠΑΛΜΟΓΡΑΦΟΣ';
    setupAttempts = 0;
    diagnosisAttempts = 0;
    locked = false;
  }

  function setupIsCorrect(current) {
    return Object.entries(current.setup).every(([key, value]) => $(`[data-${key}]`).value === value);
  }

  function setupMessage(current) {
    const tool = $('[data-tool]').value;
    const mode = $('[data-mode]').value;
    const power = $('[data-power]').value;
    const points = $('[data-points]').value;
    if (!tool || !mode || !power || !points) return 'Συμπλήρωσε και τις τέσσερις ρυθμίσεις πριν ξεκινήσεις τη μέτρηση.';
    if (mode === 'ohms' && power === 'on') return 'Η μέτρηση αντίστασης δεν γίνεται σε ενεργό κύκλωμα. Απενεργοποίησε το δίκτυο και έλεγξε ξανά τη διαδικασία.';
    if (current.setup.tool === 'meter' && tool !== 'meter') return 'Για αυτή τη μέτρηση χρειάζεσαι πολύμετρο.';
    if (current.setup.tool === 'scope' && tool !== 'scope') return 'Για να παρατηρήσεις κυματομορφή χρειάζεσαι παλμογράφο.';
    if (mode !== current.setup.mode) return current.setup.mode === 'ohms' ? 'Διάλεξε τη λειτουργία μέτρησης αντίστασης (Ω).' : 'Διάλεξε λειτουργία παρατήρησης κυματομορφής.';
    if (power !== current.setup.power) return current.setup.power === 'off' ? 'Το συγκεκριμένο τεστ αντίστασης απαιτεί απενεργοποιημένο δίκτυο.' : 'Για την παρατήρηση σήματος το δίκτυο πρέπει να είναι ενεργό.';
    if (points !== current.setup.points) return 'Μετέφερε τα σημεία μέτρησης στις δύο γραμμές CAN, ώστε να τις συγκρίνεις.';
    return 'Έλεγξε ξανά τις ρυθμίσεις του οργάνου.';
  }

  function renderOptions(current) {
    const container = $('[data-options]');
    container.replaceChildren();
    current.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'bench-option';
      button.textContent = option;
      button.addEventListener('click', () => chooseDiagnosis(index));
      container.append(button);
    });
  }

  function takeMeasurement() {
    if (locked) return;
    const current = cases[caseIndex];
    setupAttempts += 1;
    if (!setupIsCorrect(current)) {
      const feedback = $('[data-setup-feedback]');
      feedback.textContent = setupMessage(current);
      feedback.hidden = false;
      feedback.classList.remove('is-success');
      return;
    }

    if (setupAttempts === 1) score += 1;
    $('[data-score]').textContent = `${score} / ${cases.length * 2}`;
    $('[data-tool-label]').textContent = current.setup.tool === 'meter' ? 'ΠΟΛΥΜΕΤΡΟ · ΜΕΤΡΗΣΗ Ω' : 'ΠΑΛΜΟΓΡΑΦΟΣ · CAN-H / CAN-L';
    $('[data-reading-label]').textContent = current.kind.includes('wave') ? 'ΕΝΔΕΙΚΤΙΚΗ ΚΥΜΑΤΟΜΟΡΦΗ' : 'ΕΝΔΕΙΞΗ ΠΟΛΥΜΕΤΡΟΥ';
    $('[data-reading-value]').textContent = current.reading;
    $('[data-reading-note]').textContent = current.readingNote;
    $('[data-reading]').hidden = false;
    $('[data-wave="healthy"]').hidden = current.kind !== 'healthy-wave';
    $('[data-wave="asymmetric"]').hidden = current.kind !== 'asymmetric-wave';
    $('[data-setup-feedback]').hidden = true;
    $('[data-measure]').disabled = true;
    $('[data-diagnosis]').hidden = false;
    $('[data-diagnosis] h2').textContent = current.diagnosis;
    renderOptions(current);
  }

  function chooseDiagnosis(selected) {
    if (locked) return;
    diagnosisAttempts += 1;
    const current = cases[caseIndex];
    const feedback = $('[data-diagnosis-feedback]');
    if (selected !== current.correct) {
      feedback.textContent = 'Δεν επιβεβαιώνεται από την ένδειξη. Ξανακοίτα τη μέτρηση και δοκίμασε άλλη ερμηνεία.';
      feedback.hidden = false;
      feedback.classList.remove('is-success');
      return;
    }

    locked = true;
    if (diagnosisAttempts === 1) score += 1;
    $('[data-score]').textContent = `${score} / ${cases.length * 2}`;
    feedback.textContent = current.explanation;
    feedback.hidden = false;
    feedback.classList.add('is-success');
    bench.querySelectorAll('.bench-option').forEach((button) => { button.disabled = true; });
    $('[data-next]').textContent = caseIndex === cases.length - 1 ? 'Δες το αποτέλεσμα' : 'Επόμενο περιστατικό →';
    $('[data-next]').hidden = false;
  }

  function showResult() {
    $('[data-final-score]').textContent = `${score} / ${cases.length * 2}`;
    const message = score === 10
      ? 'Ρύθμισες σωστά τα όργανα και τεκμηρίωσες κάθε συμπέρασμα με την ένδειξη.'
      : score >= 7
        ? 'Καλή δουλειά. Ξαναδές τις ρυθμίσεις που χρειάστηκαν δεύτερη προσπάθεια και σύνδεσε κάθε ένδειξη με το συμπέρασμα.'
        : 'Οι μετρήσεις θέλουν εξάσκηση. Δοκίμασε ξανά, ελέγχοντας πρώτα το όργανο, τη λειτουργία και την κατάσταση του κυκλώματος.';
    $('[data-result-message]').textContent = message;
    const list = $('[data-result-list]');
    list.replaceChildren();
    cases.forEach((current, index) => {
      const item = document.createElement('div');
      item.className = 'bench-result-item';
      const title = document.createElement('strong');
      title.textContent = `${String(index + 1).padStart(2, '0')} · ${current.title}`;
      const detail = document.createElement('span');
      detail.textContent = `${current.reading} — ${current.explanation}`;
      item.append(title, detail);
      list.append(item);
    });
    show('result');
  }

  $('[data-begin]').addEventListener('click', () => { show('work'); renderCase(); });
  $('[data-measure]').addEventListener('click', takeMeasurement);
  $('[data-next]').addEventListener('click', () => {
    if (caseIndex === cases.length - 1) { showResult(); return; }
    caseIndex += 1;
    renderCase();
  });
  $('[data-restart]').addEventListener('click', () => {
    caseIndex = 0;
    score = 0;
    show('work');
    renderCase();
  });
}
