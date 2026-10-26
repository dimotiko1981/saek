(() => {
  const root = document.querySelector('[data-panel="decoder"]');
  if (!root) return;

  const questions = [
    {
      prompt: 'Ποιο ID εμφανίζεται και στις τρεις γραμμές;',
      options: ['0x120', '0x250', '0x320', '0x520'],
      answer: 1,
      hint: 'Σύγκρινε τη στήλη ID και στις τρεις χρονικές στιγμές.',
      explanation: 'Και στις τρεις γραμμές βλέπουμε το ID 0x250. Άρα παρακολουθούμε επαναλήψεις του ίδιου μηνύματος.',
    },
    {
      prompt: 'Ποιος είναι ο χρόνος κύκλου αυτού του μηνύματος;',
      options: ['5 ms', '10 ms', '20 ms', '30 ms'],
      answer: 1,
      hint: 'Βρες τη διαφορά ανάμεσα σε δύο διαδοχικούς χρόνους.',
      explanation: 'Οι χρονικές στιγμές απέχουν 10 ms: από 0 σε 10 και από 10 σε 20 ms.',
    },
    {
      prompt: 'Στη γραμμή των 0 ms, τι δεκαδική τιμή έχει το πρώτο byte 0x10;',
      options: ['10', '16', '32', '256'],
      answer: 1,
      hint: 'Στο δεκαεξαδικό, 0x10 σημαίνει 1 × 16 + 0.',
      explanation: 'Το 0x10 είναι 16 στο δεκαδικό σύστημα. Αυτή είναι η αρχική τιμή πριν εφαρμόσουμε τον πολλαπλασιαστή του λεξικού.',
    },
    {
      prompt: 'Με βάση το λεξικό, ποια ταχύτητα μεταφέρει το 0x10 στη γραμμή των 0 ms;',
      options: ['16 km/h', '20 km/h', '32 km/h', '42 km/h'],
      answer: 2,
      hint: 'Μετέτρεψε πρώτα το 0x10 σε 16 και μετά πολλαπλασίασε επί 2.',
      explanation: 'Το byte έχει τιμή 16. Το λεξικό ορίζει ταχύτητα = τιμή byte × 2, άρα 16 × 2 = 32 km/h.',
    },
    {
      prompt: 'Ποια ταχύτητα προκύπτει στη γραμμή των 20 ms, όπου το πρώτο byte είναι 0x12;',
      options: ['18 km/h', '24 km/h', '36 km/h', '42 km/h'],
      answer: 2,
      hint: 'Το 0x12 είναι 18 στο δεκαδικό. Εφάρμοσε τον ίδιο πολλαπλασιαστή ×2.',
      explanation: 'Το 0x12 είναι 18. Άρα 18 × 2 = 36 km/h.',
    },
    {
      prompt: 'Το δεύτερο byte είναι 0x03. Τι δείχνει για το Cruise το bit 0;',
      options: ['Cruise OFF', 'Cruise ON', 'Βλάβη Cruise', 'Δεν μπορεί να αποκωδικοποιηθεί'],
      answer: 1,
      hint: 'Το λεξικό λέει ότι το bit 0 είναι 1 για ON και 0 για OFF. Το 0x03 τελειώνει σε bit 1.',
      explanation: 'Το bit 0 του 0x03 είναι 1. Σύμφωνα με το λεξικό σημάτων, το Cruise είναι ON και στις τρεις γραμμές.',
    },
    {
      prompt: 'Αν δεν είχαμε το λεξικό σημάτων, τι θα μπορούσαμε να πούμε με σιγουριά;',
      options: [
        'Ότι το 0x10 σημαίνει πάντα 32 km/h σε κάθε αυτοκίνητο.',
        'Ότι το Cruise είναι ενεργό σε κάθε μήνυμα με DATA 03.',
        'Ότι το ID 0x250 ανήκει οπωσδήποτε στο ABS.',
        'Ότι βλέπουμε αριθμητικά bytes, αλλά δεν γνωρίζουμε με βεβαιότητα τη φυσική τους σημασία.',
      ],
      answer: 3,
      hint: 'Το ID και τα bytes από μόνα τους δεν δίνουν μονάδες ή περιγραφή σήματος.',
      explanation: 'Σωστά. Χωρίς περιγραφή, όπως ένα DBC, μπορούμε να καταγράψουμε τα bytes και τις αλλαγές τους, αλλά όχι να ξέρουμε με βεβαιότητα ποια φυσική τιμή παριστάνουν.',
    },
  ];

  const prompt = root.querySelector('[data-decoder-prompt]');
  const optionsBox = root.querySelector('[data-decoder-options]');
  const feedback = root.querySelector('[data-decoder-feedback]');
  const nextButton = root.querySelector('[data-decoder-next]');
  const resetButton = root.querySelector('[data-decoder-reset]');
  const stepLabel = root.querySelector('[data-decoder-step]');
  const track = root.querySelector('[data-decoder-track]');
  const scoreOutput = root.querySelector('[data-decoder-score]');
  const completion = root.querySelector('[data-decoder-complete]');

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
      if (questionIndex < questions.length - 1) {
        questionIndex += 1;
        renderQuestion();
      }
      return;
    }
    if (selectedIndex === null) return;

    const question = questions[questionIndex];
    if (selectedIndex !== question.answer) {
      feedback.textContent = `Όχι ακόμη. ${question.hint} Διάλεξε ξανά.`;
      feedback.className = 'decoder-feedback is-error';
      optionsBox.children[selectedIndex]?.classList.add('is-wrong');
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
    feedback.textContent = `Σωστά. ${question.explanation}`;
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
