(() => {
  const root = document.querySelector('[data-panel="can-review"]');
  if (!root) return;

  const questions = [
    {
      prompt: 'Τι σημαίνει το DLC 3 στην καταγραφή;',
      options: ['Το μήνυμα έχει 3 bytes δεδομένων.', 'Το μήνυμα στάλθηκε 3 φορές.', 'Το ID έχει 3 ψηφία.', 'Η μετάδοση διαρκεί 3 ms.'],
      answer: 0,
      hint: 'Το DLC δηλώνει πόσα bytes δεδομένων περιέχει το πλαίσιο.',
      explanation: 'Σωστά. DLC 3 σημαίνει ότι το πεδίο δεδομένων περιέχει 3 bytes: 2A, 01 και 7F.',
    },
    {
      prompt: 'Τι μας λέει από μόνο του το ID 0x120;',
      options: ['Τις στροφές του κινητήρα.', 'Την ταυτότητα/κατηγορία του μηνύματος, όχι με βεβαιότητα ποια μονάδα το έστειλε.', 'Ότι το μήνυμα έχει 120 bytes.', 'Ποια βλάβη έχει το αυτοκίνητο.'],
      answer: 1,
      hint: 'Το ID αναγνωρίζει το μήνυμα στο δίκτυο· δεν αποτελεί από μόνο του όνομα αποστολέα.',
      explanation: 'Το ID βοηθά να ξεχωρίζουμε και να ιεραρχούμε τα μηνύματα. Δεν αποδεικνύει μόνο του ποια ECU το έστειλε.',
    },
    {
      prompt: 'Το byte 0x2A είναι 42 στο δεκαδικό. Μπορούμε να πούμε ότι σημαίνει 42 rpm;',
      options: ['Ναι, κάθε byte CAN είναι απευθείας rpm.', 'Ναι, επειδή το ID είναι 0x120.', 'Όχι. Χρειάζεται ο ορισμός του σήματος και ο τρόπος αποκωδικοποίησης.', 'Όχι, γιατί τα bytes δεν μετατρέπονται σε δεκαδικούς αριθμούς.'],
      answer: 2,
      hint: 'Η αριθμητική τιμή ενός byte δεν περιλαμβάνει από μόνη της μονάδα μέτρησης.',
      explanation: 'Το 0x2A ισούται με 42, αλλά η φυσική σημασία του προκύπτει μόνο από την περιγραφή του σήματος.',
    },
    {
      prompt: 'Πού βρίσκεται το DBC σε σχέση με το μήνυμα CAN;',
      options: ['Είναι ένα υποχρεωτικό πεδίο μέσα σε κάθε μήνυμα.', 'Είναι ξεχωριστό αρχείο/λεξικό που περιγράφει πώς αποκωδικοποιούνται τα μηνύματα.', 'Είναι το τελευταίο byte του DATA.', 'Είναι άλλο όνομα για το CAN-H.'],
      answer: 1,
      hint: 'Σκέψου το DBC σαν λεξικό που χρησιμοποιούμε για να ερμηνεύσουμε μια καταγραφή.',
      explanation: 'Το DBC είναι ξεχωριστή περιγραφή. Δεν μεταδίδεται μέσα σε κάθε πλαίσιο CAN.',
    },
    {
      prompt: 'Με little-endian σειρά, ποια ακατέργαστη τιμή σχηματίζουν τα bytes 2A 01;',
      options: ['0x2A01 = 10.753', '0x012A = 298', '0x012A = 1.042', '0x2A = 42'],
      answer: 1,
      hint: 'Το πρώτο byte είναι το χαμηλό: το 01 μπαίνει μπροστά από το 2A για να σχηματιστεί το 0x012A.',
      explanation: 'Η σειρά γίνεται 0x012A. Σε δεκαδική μορφή είναι 1×256 + 2×16 + 10 = 298.',
    },
    {
      prompt: 'Τι μπορούμε να συμπεράνουμε για το byte 0x7F, αφού δεν έχει οριστεί στο λεξικό;',
      options: ['Ότι είναι σίγουρα θερμοκρασία 127 °C.', 'Ότι δηλώνει πάντα βλάβη.', 'Μόνο ότι η καταγραφή περιέχει την τιμή 0x7F· δεν ξέρουμε τη φυσική σημασία της.', 'Ότι πρέπει να αφαιρεθεί από το μήνυμα.'],
      answer: 2,
      hint: 'Χωρίς αντιστοίχιση σήματος δεν γνωρίζουμε μονάδα ή σημασία.',
      explanation: 'Βλέπουμε το byte 0x7F, αλλά χωρίς ορισμό δεν μπορούμε να το αποδώσουμε με βεβαιότητα σε φυσική τιμή.',
    },
    {
      prompt: 'Πώς μεταδίδεται το σήμα στο CAN-H και στο CAN-L;',
      options: ['Το CAN-H μεταφέρει όλο το μήνυμα και το CAN-L μόνο το ID.', 'Τα δύο καλώδια λειτουργούν μαζί ως διαφορικό ζεύγος και μεταφέρουν το ίδιο bit stream.', 'Το CAN-L είναι πάντα γείωση.', 'Κάθε καλώδιο συνδέεται μόνο με μία μονάδα.'],
      answer: 1,
      hint: 'Ο δέκτης συγκρίνει τις τάσεις των δύο γραμμών.',
      explanation: 'CAN-H και CAN-L συνεργάζονται ως διαφορικό ζεύγος για τη μεταφορά της ίδιας επικοινωνίας.',
    },
    {
      prompt: 'Ποια πρόταση περιγράφει σωστά τα SOF και EOF στο κλασικό CAN;',
      options: ['Το SOF αρχίζει με dominant 0 και το EOF αποτελείται από 7 recessive 1.', 'Το SOF είναι 7 recessive 1 και το EOF ένα dominant 0.', 'Και τα δύο είναι πεδία δεδομένων.', 'Το SOF και το EOF μεταφέρουν το ID.'],
      answer: 0,
      hint: 'SOF σημαίνει αρχή πλαισίου· EOF σημαίνει τέλος πλαισίου.',
      explanation: 'Στο κλασικό CAN το SOF είναι ένα dominant bit 0, ενώ το EOF είναι επτά recessive bits 1.',
    },
    {
      prompt: 'Αν το ίδιο μήνυμα μεταδίδεται κάθε 20 ms, πόσες μεταδόσεις γίνονται περίπου σε 1 δευτερόλεπτο;',
      options: ['5', '20', '50', '200'],
      answer: 2,
      hint: 'Ένα δευτερόλεπτο είναι 1000 ms. Υπολόγισε 1000 ÷ 20.',
      explanation: '1000 ÷ 20 = 50. Άρα ο ρυθμός είναι 50 μεταδόσεις ανά δευτερόλεπτο.',
    },
  ];

  const prompt = root.querySelector('[data-review-prompt]');
  const optionsBox = root.querySelector('[data-review-options]');
  const feedback = root.querySelector('[data-review-feedback]');
  const nextButton = root.querySelector('[data-review-next]');
  const resetButton = root.querySelector('[data-review-reset]');
  const stepLabel = root.querySelector('[data-review-step]');
  const track = root.querySelector('[data-review-track]');
  const scoreOutput = root.querySelector('[data-review-score]');
  const completion = root.querySelector('[data-review-complete]');

  let questionIndex = 0;
  let selectedIndex = null;
  let score = 0;
  let solved = false;
  let finished = false;

  function renderTrack() {
    track.replaceChildren();
    questions.forEach((_, index) => {
      const dot = document.createElement('i');
      dot.textContent = index < questionIndex || finished ? '●' : index === questionIndex ? '◉' : '○';
      dot.className = index < questionIndex || finished ? 'is-done' : index === questionIndex ? 'is-current' : '';
      track.append(dot);
    });
  }

  function renderQuestion() {
    if (finished) return;
    const question = questions[questionIndex];
    selectedIndex = null;
    solved = false;
    prompt.textContent = question.prompt;
    stepLabel.textContent = `ΕΡΩΤΗΣΗ ${questionIndex + 1} ΑΠΟ ${questions.length}`;
    feedback.textContent = '';
    feedback.className = 'decoder-feedback';
    nextButton.disabled = true;
    nextButton.innerHTML = 'Έλεγξε την απάντηση <span aria-hidden="true">→</span>';
    optionsBox.replaceChildren();
    question.options.forEach((text, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'decoder-option';
      button.textContent = text;
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        if (solved) return;
        selectedIndex = index;
        [...optionsBox.children].forEach((option) => {
          option.classList.remove('is-wrong');
          option.classList.toggle('is-selected', option === button);
          option.setAttribute('aria-pressed', option === button ? 'true' : 'false');
        });
        feedback.textContent = '';
        feedback.className = 'decoder-feedback';
        nextButton.disabled = false;
      });
      optionsBox.append(button);
    });
    renderTrack();
  }

  nextButton.addEventListener('click', () => {
    if (finished) return;
    if (solved) {
      questionIndex += 1;
      renderQuestion();
      return;
    }
    if (selectedIndex === null) return;

    const question = questions[questionIndex];
    if (selectedIndex !== question.answer) {
      feedback.textContent = `Όχι ακόμη. ${question.hint} Διάλεξε ξανά.`;
      feedback.className = 'decoder-feedback is-error';
      optionsBox.children[selectedIndex]?.classList.add('is-wrong');
      nextButton.disabled = true;
      return;
    }

    solved = true;
    score += 1;
    scoreOutput.textContent = String(score);
    [...optionsBox.children].forEach((option, index) => {
      option.disabled = true;
      if (index === question.answer) option.classList.add('is-correct');
      option.classList.remove('is-selected');
    });
    feedback.textContent = question.explanation;
    feedback.className = 'decoder-feedback is-success';

    if (questionIndex === questions.length - 1) {
      finished = true;
      completion.hidden = false;
      nextButton.textContent = 'Ολοκληρώθηκε';
      nextButton.disabled = true;
      renderTrack();
    } else {
      nextButton.innerHTML = 'Επόμενη ερώτηση <span aria-hidden="true">→</span>';
    }
  });

  resetButton.addEventListener('click', () => {
    questionIndex = 0;
    score = 0;
    finished = false;
    scoreOutput.textContent = '0';
    completion.hidden = true;
    renderQuestion();
  });

  renderQuestion();
})();
