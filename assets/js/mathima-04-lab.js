const lab = document.querySelector('[data-can-lab]');

if (lab) {
  const cases = [
    {
      title: 'Έλεγχος φυσιολογικού δικτύου',
      symptom: 'Δεν υπάρχει ενεργό παράπονο επικοινωνίας. Ζητείται βασικός έλεγχος του φυσικού επιπέδου πριν από την παράδοση.',
      scan: 'Οι βασικές μονάδες απαντούν. Δεν εμφανίζονται τρέχοντες κωδικοί επικοινωνίας.',
      steps: [
        { tag: 'ΒΗΜΑ 1 / 3', topic: 'ΕΠΙΛΟΓΗ ΜΕΤΡΗΣΗΣ', question: 'Θέλεις να ελέγξεις τον τερματισμό του δικτύου. Ποιο είναι το σωστό πρώτο βήμα;', tool: 'ΕΠΙΛΟΓΗ ΟΡΓΑΝΟΥ', label: 'Πριν από τη μέτρηση', reading: 'Απενεργοποίησε το δίκτυο', note: 'Ακολούθησε τη διαδικασία και τον χρόνο αναμονής του κατασκευαστή.', choices: ['Πολύμετρο στη θέση Ω, αφού απενεργοποιηθεί το κύκλωμα σύμφωνα με τη διαδικασία', 'Παλμογράφος με ενεργό κύκλωμα και τυχαία ακίδα μέτρησης', 'Δοκιμαστική λυχνία συνδεδεμένη ανάμεσα σε CAN-H και CAN-L', 'Γέφυρα των δύο γραμμών για να φανεί αν αλλάζει η ένδειξη'], correct: 0, feedback: 'Η μέτρηση αντίστασης γίνεται σε απενεργοποιημένο κύκλωμα, στο προβλεπόμενο σημείο και σύμφωνα με το εγχειρίδιο.' },
        { tag: 'ΒΗΜΑ 2 / 3', topic: 'ΕΡΜΗΝΕΙΑ ΜΕΤΡΗΣΗΣ', question: 'Στο συγκεκριμένο εκπαιδευτικό δίκτυο η ένδειξη είναι περίπου 60 Ω. Πώς την ερμηνεύεις;', tool: 'ΠΟΛΥΜΕΤΡΟ · Ω', label: 'CAN-H ↔ CAN-L', reading: '≈ 60 Ω', note: 'Ενδεικτική τιμή δύο τερματισμών 120 Ω σε παράλληλη σύνδεση.', choices: ['Είναι συμβατή με δύο τερματισμούς των 120 Ω παράλληλα', 'Δείχνει ότι το CAN-H έχει βραχυκυκλώσει στη γείωση', 'Αποδεικνύει ότι λείπουν και οι δύο τερματισμοί', 'Σημαίνει ότι η μπαταρία έχει τάση 60 V'], correct: 0, feedback: 'Δύο αντιστάσεις 120 Ω σε παράλληλη σύνδεση δίνουν περίπου 60 Ω. Η τιμή είναι εκπαιδευτική και επιβεβαιώνεται πάντα από το διάγραμμα του συγκεκριμένου δικτύου.' },
        { tag: 'ΒΗΜΑ 3 / 3', topic: 'ΕΠΙΒΕΒΑΙΩΣΗ', question: 'Η αντίσταση συμφωνεί με την αναμενόμενη τιμή και όλες οι μονάδες απαντούν. Ποιο βήμα ολοκληρώνει σωστά τον έλεγχο;', tool: 'ΣΥΝΟΨΗ ΕΛΕΓΧΟΥ', label: 'ΑΠΟΤΕΛΕΣΜΑ', reading: 'Τερματισμός: συμβατός', note: 'Ο έλεγχος αντίστασης είναι ένα μέρος της διάγνωσης.', choices: ['Επανενεργοποίησε το δίκτυο όπως προβλέπεται και επιβεβαίωσε επικοινωνία και λειτουργία', 'Αντικατάστησε προληπτικά τις δύο τερματικές αντιστάσεις', 'Παράδωσε το όχημα χωρίς να επανασυνδέσεις ό,τι αποσυνδέθηκε', 'Συμπέρανε ότι όλες οι βλάβες CAN αποκλείονται από μία μέτρηση'], correct: 0, feedback: 'Η μέτρηση τερματισμού είναι συμβατή, αλλά η ολοκλήρωση περιλαμβάνει επαναφορά, έλεγχο επικοινωνίας και επιβεβαίωση του αρχικού αιτήματος.' }
      ]
    },
    {
      title: 'Ένας τερματισμός δεν φαίνεται',
      symptom: 'Υπάρχουν διαλείπουσες απώλειες επικοινωνίας μετά από εργασία σε καλωδίωση. Το δίκτυο έχει απενεργοποιηθεί με την προβλεπόμενη διαδικασία.',
      scan: 'Καταγράφονται περιστασιακοί κωδικοί απώλειας επικοινωνίας από περισσότερες από μία μονάδες.',
      steps: [
        { tag: 'ΒΗΜΑ 1 / 3', topic: 'ΕΠΙΛΟΓΗ ΜΕΤΡΗΣΗΣ', question: 'Ποια μέτρηση ελέγχει πρώτα αν οι δύο τερματισμοί φαίνονται από το σημείο δοκιμής;', tool: 'ΕΠΙΛΟΓΗ ΟΡΓΑΝΟΥ', label: 'Συνθήκη δοκιμής', reading: 'Δίκτυο απενεργοποιημένο', note: 'Επιβεβαίωσε το σημείο μέτρησης στο διάγραμμα.', choices: ['Μέτρηση αντίστασης ανάμεσα σε CAN-H και CAN-L με το δίκτυο απενεργοποιημένο', 'Μέτρηση ρεύματος στην ασφάλεια με το πολύμετρο σε Ω', 'Έλεγχος αντίστασης με τον κινητήρα σε λειτουργία', 'Αντικατάσταση της ECU που έδωσε πρώτη κωδικό'], correct: 0, feedback: 'Η αντίσταση μεταξύ των γραμμών μπορεί να ελέγξει τον τερματισμό, μόνο με τις σωστές συνθήκες και στο προβλεπόμενο σημείο.' },
        { tag: 'ΒΗΜΑ 2 / 3', topic: 'ΕΡΜΗΝΕΙΑ ΜΕΤΡΗΣΗΣ', question: 'Η ένδειξη είναι περίπου 120 Ω, ενώ το εκπαιδευτικό διάγραμμα αναμένει περίπου 60 Ω. Τι υποψιάζεσαι;', tool: 'ΠΟΛΥΜΕΤΡΟ · Ω', label: 'CAN-H ↔ CAN-L', reading: '≈ 120 Ω', note: 'Μία αντίσταση τερματισμού μπορεί να είναι η μόνη που φαίνεται.', choices: ['Έναν τερματισμό που λείπει ή δεν συνδέεται μέσω του ελεγχόμενου τμήματος', 'Δύο τερματισμούς 120 Ω σε παράλληλη σύνδεση', 'Κανονική μέτρηση που αποκλείει κάθε πρόβλημα', 'Βλάβη στον αισθητήρα θερμοκρασίας κινητήρα'], correct: 0, feedback: 'Περίπου 120 Ω μπορεί να σημαίνει ότι από το σημείο μέτρησης φαίνεται μόνο ένας τερματισμός. Το διάγραμμα και η τοπολογία δείχνουν πού συνεχίζεται ο έλεγχος.' },
        { tag: 'ΒΗΜΑ 3 / 3', topic: 'ΕΠΟΜΕΝΟΣ ΕΛΕΓΧΟΣ', question: 'Ποια είναι η σωστή επόμενη ενέργεια πριν τοποθετήσεις εξάρτημα;', tool: 'ΣΤΟΧΕΥΜΕΝΟΣ ΕΛΕΓΧΟΣ', label: 'ΕΛΕΓΧΟΣ ΔΙΑΓΡΑΜΜΑΤΟΣ', reading: 'Εντόπισε τα άκρα του διαύλου', note: 'Μην προσθέτεις τερματισμό σε τυχαίο σημείο.', choices: ['Έλεγξε τα άκρα, τις ενώσεις και τον τερματισμό που προβλέπει το σχέδιο του συγκεκριμένου δικτύου', 'Πρόσθεσε 120 Ω παράλληλα στο σημείο που βολεύει', 'Αντικατάστησε όλες τις ECU που κατέγραψαν κωδικό', 'Βραχυκύκλωσε CAN-H με CAN-L για να πέσει η ένδειξη'], correct: 0, feedback: 'Πρώτα εντοπίζεις από το διάγραμμα ποιο τμήμα ή ποιος τερματισμός λείπει. Δεν προσθέτουμε αντίσταση χωρίς να επιβεβαιώσουμε την αρχιτεκτονική.' }
      ]
    },
    {
      title: 'CAN-H παραμένει χαμηλά',
      symptom: 'Το όχημα παρουσιάζει προειδοποιήσεις και κάποιες μονάδες δεν επικοινωνούν. Η βλάβη εμφανίστηκε μετά από επέμβαση στην πλεξούδα.',
      scan: 'Πολλαπλές μονάδες καταγράφουν απώλεια επικοινωνίας στο ίδιο δίκτυο.',
      steps: [
        { tag: 'ΒΗΜΑ 1 / 3', topic: 'ΕΠΙΛΟΓΗ ΟΡΓΑΝΟΥ', question: 'Θέλεις να δεις τι κάνουν οι δύο γραμμές όσο υπάρχει επικοινωνιακή δραστηριότητα. Ποιο όργανο επιλέγεις;', tool: 'ΕΠΙΛΟΓΗ ΟΡΓΑΝΟΥ', label: 'Έλεγχος υπό τάση', reading: 'Παρατήρησε CAN-H και CAN-L', note: 'Χρησιμοποίησε κατάλληλο παλμογράφο και ασφαλή σημεία σύνδεσης.', choices: ['Παλμογράφο, με σύνδεση και ρυθμίσεις σύμφωνα με την τεχνική διαδικασία', 'Πολύμετρο στη θέση Ω ενώ το δίκτυο λειτουργεί', 'Δοκιμαστική λυχνία υψηλής ισχύος πάνω στις γραμμές', 'Αμπερόμετρο σε σειρά με CAN-H χωρίς οδηγία'], correct: 0, feedback: 'Ο παλμογράφος δείχνει τη μεταβολή των σημάτων στον χρόνο. Η σύνδεση γίνεται μόνο στα επιτρεπόμενα σημεία και με κατάλληλο εξοπλισμό.' },
        { tag: 'ΒΗΜΑ 2 / 3', topic: 'ΕΡΜΗΝΕΙΑ ΚΥΜΑΤΟΜΟΡΦΗΣ', question: 'Η κυματομορφή δείχνει το CAN-H καθηλωμένο κοντά στο 0 V, ενώ το CAN-L δεν σχηματίζει το αναμενόμενο συμπληρωματικό σήμα. Τι δείχνει αυτό;', tool: 'ΠΑΛΜΟΓΡΑΦΟΣ · ΕΝΔΕΙΚΤΙΚΟ', label: 'CAN-H', reading: 'Παραμένει χαμηλά', note: 'Το μοτίβο υποδεικνύει πιθανό ηλεκτρικό πρόβλημα στη γραμμή ή στο δίκτυο.', choices: ['Πιθανό βραχυκύκλωμα ή άλλη βλάβη που κρατά τη γραμμή χαμηλά· χρειάζεται επιβεβαίωση', 'Φυσιολογική recessive κατάσταση σε κάθε χρονική στιγμή', 'Απόδειξη ότι ο τερματισμός είναι ακριβώς 60 Ω', 'Βλάβη που διορθώνεται με αύξηση της τάσης μπαταρίας'], correct: 0, feedback: 'Μια γραμμή καθηλωμένη χαμηλά δεν αρκεί לבדה για να καταδικάσει ECU. Ελέγχουμε καλωδίωση, συνδέσεις και πιθανό βραχυκύκλωμα με την προβλεπόμενη διαδικασία.' },
        { tag: 'ΒΗΜΑ 3 / 3', topic: 'ΕΠΟΜΕΝΟΣ ΕΛΕΓΧΟΣ', question: 'Πώς συνεχίζεις για να επιβεβαιώσεις την πιθανή βλάβη της γραμμής;', tool: 'ΔΙΑΓΝΩΣΗ ΚΑΛΩΔΙΩΣΗΣ', label: 'ΑΠΟΜΟΝΩΣΗ ΤΜΗΜΑΤΟΣ', reading: 'Ακολούθησε το διάγραμμα', note: 'Απενεργοποίησε και απομόνωσε μόνο όπως ορίζει η διαδικασία.', choices: ['Έλεγξε τη συνέχεια και πιθανό βραχυκύκλωμα προς γείωση στα προβλεπόμενα τμήματα', 'Αντικατάστησε αμέσως την ECU κινητήρα', 'Τοποθέτησε δεύτερο καλώδιο παράλληλα χωρίς έλεγχο', 'Διέγραψε τους κωδικούς και επέστρεψε το όχημα'], correct: 0, feedback: 'Η επιβεβαίωση γίνεται με έλεγχο καλωδίωσης και συνδέσεων στο σωστό τμήμα. Η αντικατάσταση μονάδας έρχεται μόνο αν οι έλεγχοι το τεκμηριώσουν.' }
      ]
    },
    {
      title: 'Διαλείπουσα επικοινωνία και ανακλάσεις',
      symptom: 'Η επικοινωνία χάνεται περιστασιακά σε κραδασμούς. Μετά την επαναφορά, οι μονάδες ξαναφαίνονται στο διαγνωστικό.',
      scan: 'Υπάρχουν αποθηκευμένοι, μη τρέχοντες κωδικοί επικοινωνίας. Το σύμπτωμα αναπαράγεται σε κίνηση της πλεξούδας.',
      steps: [
        { tag: 'ΒΗΜΑ 1 / 3', topic: 'ΕΠΙΛΟΓΗ ΟΡΓΑΝΟΥ', question: 'Ποιο εργαλείο βοηθά να παρατηρήσεις το σήμα όταν εμφανίζεται η διακοπή;', tool: 'ΕΠΙΛΟΓΗ ΟΡΓΑΝΟΥ', label: 'Διαλείπουσα βλάβη', reading: 'Κατέγραψε τη στιγμή του συμπτώματος', note: 'Χρειάζεται κατάλληλη σύνδεση για καταγραφή της κυματομορφής.', choices: ['Παλμογράφος, ώστε να καταγραφεί η κυματομορφή όσο αναπαράγεται το σύμπτωμα', 'Πολύμετρο στη θέση Ω με το δίκτυο ενεργό', 'Μόνο οπτικός έλεγχος χωρίς λειτουργία του δικτύου', 'Μανόμετρο συνδεδεμένο στη γραμμή CAN-L'], correct: 0, feedback: 'Η καταγραφή του σήματος κατά την εμφάνιση του συμπτώματος βοηθά να εντοπιστεί διακοπτόμενη επαφή ή αλλοίωση της κυματομορφής.' },
        { tag: 'ΒΗΜΑ 2 / 3', topic: 'ΕΡΜΗΝΕΙΑ ΚΥΜΑΤΟΜΟΡΦΗΣ', question: 'Στην καταγραφή φαίνονται έντονες ανακλάσεις και παραμορφωμένες ακμές. Ποια περιοχή έχει προτεραιότητα για έλεγχο;', tool: 'ΠΑΛΜΟΓΡΑΦΟΣ · ΕΝΔΕΙΚΤΙΚΟ', label: 'ΚΥΜΑΤΟΜΟΡΦΗ', reading: 'Ανακλάσεις / ασταθές σήμα', note: 'Επιβεβαίωσε πρώτα σωστή γείωση, σημείο λήψης και κλίμακα οργάνου.', choices: ['Τερματισμούς, ενώσεις και καλωδίωση του διαύλου, σύμφωνα με το διάγραμμα', 'Πίεση ελαστικών και στάθμη λαδιού', 'Κωδικοποίηση του κλειδιού χωρίς έλεγχο δικτύου', 'Την ένδειξη θερμοκρασίας του πίνακα οργάνων'], correct: 0, feedback: 'Οι ανακλάσεις μπορεί να σχετίζονται με τερματισμό ή καλωδίωση. Πρώτα αποκλείουμε λάθος σύνδεση ή ρύθμιση του οργάνου.' },
        { tag: 'ΒΗΜΑ 3 / 3', topic: 'ΕΠΙΒΕΒΑΙΩΣΗ ΕΠΙΣΚΕΥΗΣ', question: 'Επισκεύασες κακή σύνδεση. Πώς επιβεβαιώνεις ότι αποκαταστάθηκε το πρόβλημα;', tool: 'ΤΕΛΙΚΟΣ ΕΛΕΓΧΟΣ', label: 'ΕΠΑΝΑΛΗΨΗ ΔΟΚΙΜΗΣ', reading: 'Σήμα σταθερό · μονάδες απαντούν', note: 'Επανέλεγξε στις συνθήκες που προκαλούσαν το αρχικό σύμπτωμα.', choices: ['Επανάλαβε την καταγραφή και τον έλεγχο επικοινωνίας στις ίδιες συνθήκες και κατέγραψε το αποτέλεσμα', 'Διέγραψε τους κωδικούς χωρίς επανέλεγχο', 'Αντικατάστησε και τις δύο τερματικές αντιστάσεις προληπτικά', 'Σταμάτησε μόλις η κυματομορφή φαίνεται καλύτερη σε μία στιγμιαία μέτρηση'], correct: 0, feedback: 'Η επισκευή επιβεβαιώνεται όταν η επικοινωνία και το σήμα μένουν σωστά και το αρχικό σύμπτωμα δεν επανεμφανίζεται στις κατάλληλες συνθήκες.' }
      ]
    }
  ];

  const welcome = lab.querySelector('[data-screen="welcome"]');
  const work = lab.querySelector('[data-screen="work"]');
  const result = lab.querySelector('[data-screen="result"]');
  const startButton = lab.querySelector('[data-start]');
  const nextButton = lab.querySelector('[data-next]');
  const optionsContainer = lab.querySelector('[data-options]');
  const feedback = lab.querySelector('[data-feedback]');
  let position = 0;
  let score = 0;
  const answersByCase = [0, 0, 0, 0];

  function renderStep() {
    const caseIndex = Math.floor(position / 3);
    const stepIndex = position % 3;
    const currentCase = cases[caseIndex];
    const step = currentCase.steps[stepIndex];
    lab.querySelector('[data-case-label]').textContent = `ΠΕΡΙΣΤΑΤΙΚΟ ${caseIndex + 1} · ${currentCase.title.toLocaleUpperCase('el-GR')}`;
    lab.querySelector('[data-current]').textContent = String(position + 1);
    lab.querySelector('[data-score]').textContent = String(score);
    lab.querySelector('[data-progress]').style.width = `${(position / 12) * 100}%`;
    lab.querySelector('[data-case-number]').textContent = `0${caseIndex + 1} / 04`;
    lab.querySelector('[data-title]').textContent = currentCase.title;
    lab.querySelector('[data-symptom]').textContent = currentCase.symptom;
    lab.querySelector('[data-scan]').textContent = currentCase.scan;
    lab.querySelector('[data-step-tag]').textContent = step.tag;
    lab.querySelector('[data-topic]').textContent = step.topic;
    lab.querySelector('[data-question]').textContent = step.question;
    lab.querySelector('[data-tool]').textContent = step.tool;
    lab.querySelector('[data-reading-label]').textContent = step.label;
    lab.querySelector('[data-reading]').textContent = step.reading;
    lab.querySelector('[data-reading-note]').textContent = step.note;
    optionsContainer.replaceChildren();
    feedback.hidden = true;
    nextButton.hidden = true;
    const randomizedChoices = step.choices.map((text, index) => ({ text, correct: index === step.correct }));
    for (let index = randomizedChoices.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [randomizedChoices[index], randomizedChoices[swapIndex]] = [randomizedChoices[swapIndex], randomizedChoices[index]];
    }
    const correctChoice = randomizedChoices.findIndex((choice) => choice.correct);
    randomizedChoices.forEach((choice, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'answer-option';
      button.innerHTML = `<b>${'ΑΒΓΔ'[index]}</b><span></span>`;
      button.querySelector('span').textContent = choice.text;
      button.addEventListener('click', () => chooseAnswer(button, index, step, caseIndex, correctChoice));
      optionsContainer.append(button);
    });
  }

  function chooseAnswer(selectedButton, selected, step, caseIndex, correctChoice) {
    const buttons = [...optionsContainer.querySelectorAll('button')];
    buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === correctChoice) button.classList.add('is-correct');
    });
    const correct = selected === correctChoice;
    if (correct) {
      score += 1;
      answersByCase[caseIndex] += 1;
      lab.querySelector('[data-score]').textContent = String(score);
    } else {
      selectedButton.classList.add('is-wrong');
    }
    feedback.hidden = false;
    feedback.querySelector('strong').textContent = correct ? 'Σωστά — προχώρα στη διάγνωση.' : 'Δες την ένδειξη και ξανασκέψου το βήμα.';
    feedback.querySelector('p').textContent = step.feedback;
    nextButton.hidden = false;
    nextButton.innerHTML = position === 11 ? 'Ολοκλήρωση εργαστηρίου ✓' : 'Επόμενο βήμα <span aria-hidden="true">→</span>';
  }

  function finishLab() {
    work.hidden = true;
    result.hidden = false;
    lab.querySelector('[data-progress]').style.width = '100%';
    lab.querySelector('[data-final-score]').textContent = `${score}/12`;
    lab.querySelector('[data-result-message]').textContent = score >= 10
      ? 'Καλή δουλειά. Συνδύασες σωστά τις μετρήσεις με τα επόμενα διαγνωστικά βήματα.'
      : 'Δες ξανά τις επεξηγήσεις και επανάλαβε τα περιστατικά για να εξασκηθείς στην επιλογή μέτρησης και στην ερμηνεία του σήματος.';
    const summary = lab.querySelector('[data-case-summary]');
    summary.replaceChildren();
    cases.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'case-result';
      const title = document.createElement('b');
      title.textContent = `Περιστατικό ${index + 1}`;
      const detail = document.createElement('span');
      detail.textContent = `${answersByCase[index]}/3 σωστά`;
      card.append(title, detail);
      summary.append(card);
    });
  }

  startButton.addEventListener('click', () => {
    welcome.hidden = true;
    work.hidden = false;
    renderStep();
  });
  nextButton.addEventListener('click', () => {
    if (position === 11) return finishLab();
    position += 1;
    renderStep();
  });
  lab.querySelector('[data-restart]').addEventListener('click', () => {
    position = 0;
    score = 0;
    answersByCase.fill(0);
    result.hidden = true;
    work.hidden = true;
    welcome.hidden = false;
    lab.querySelector('[data-progress]').style.width = '0%';
    lab.querySelector('[data-score]').textContent = '0';
  });
}
