const lessonTest = document.querySelector("[data-lesson-deck]");

if (lessonTest) {
  const quizData = [
  {
    "question": "Ποια είναι η κύρια εκπαιδευτική χρήση του MOST;",
    "options": [
      "Μεταφορά ήχου και υπηρεσιών πολυμέσων",
      "Διαιτησία προτεραιότητας CAN",
      "Εκκίνηση μίζας χωρίς ECU",
      "Μετάδοση μόνο θερμοκρασίας"
    ],
    "correct": 0,
    "feedback": "Το MOST αναπτύχθηκε για επικοινωνία πολυμέσων εντός οχήματος."
  },
  {
    "question": "Τι σημαίνει το ακρωνύμιο MOST;",
    "options": [
      "Media Oriented Systems Transport",
      "Motor Output Sensor Terminal",
      "Multiple Optical Speed Trigger",
      "Main Onboard Security Tool"
    ],
    "correct": 0,
    "feedback": "MOST: Media Oriented Systems Transport."
  },
  {
    "question": "Ποια τοπολογία συναντάται συχνά σε κλασικά MOST;",
    "options": [
      "Δακτύλιος με διαδοχικά συνδεδεμένους κόμβους",
      "Ασύρματο πλέγμα σε κάθε πόρτα",
      "Δύο γραμμές CAN-H και CAN-L υποχρεωτικά",
      "Μόνο USB point-to-point"
    ],
    "correct": 0,
    "feedback": "Ο δακτύλιος ήταν χαρακτηριστική μορφή σε πολλά MOST δίκτυα."
  },
  {
    "question": "Ποια ταχύτητα αντιστοιχεί ονομαστικά στο MOST150;",
    "options": [
      "150 Mbit/s",
      "150 kbit/s",
      "1,5 Mbit/s",
      "10 Gbit/s"
    ],
    "correct": 0,
    "feedback": "Οι ονομασίες MOST25/50/150 αντιστοιχούν σε 25/50/150 Mbit/s."
  },
  {
    "question": "Ποιο φυσικό μέσο χρησιμοποιήθηκε ευρέως στο MOST25;",
    "options": [
      "Πλαστική οπτική ίνα",
      "Μόνο ομοαξονικό υψηλής τάσης",
      "Καλώδιο CAN-L μόνο",
      "Ασύρματη σύνδεση Bluetooth"
    ],
    "correct": 0,
    "feedback": "Το MOST25 χρησιμοποιήθηκε ευρέως με πλαστική οπτική ίνα (POF)."
  },
  {
    "question": "Τι ελέγχουμε πρώτα όταν δεν λειτουργεί η ροή MOST;",
    "options": [
      "Τροφοδοσίες, συνδέσεις και συνέχεια του συγκεκριμένου δικτύου",
      "Αλλάζουμε αμέσως ενισχυτή",
      "Αντικαθιστούμε την μπαταρία χωρίς έλεγχο",
      "Αποσυνδέουμε όλες τις ECU"
    ],
    "correct": 0,
    "feedback": "Η διάγνωση αρχίζει με τεκμηριωμένη επιθεώρηση και μετρήσεις."
  },
  {
    "question": "Τι χαρακτηρίζει κυρίως το FlexRay;",
    "options": [
      "Προγραμματισμένη επικοινωνία με προβλέψιμο χρονισμό",
      "Αποκλειστικά αναλογικό σήμα ήχου",
      "Ασύρματη σύνδεση κινητού",
      "Μόνο πρόσβαση στο διαδίκτυο"
    ],
    "correct": 0,
    "feedback": "Το FlexRay υποστηρίζει καθορισμένα χρονικά slots και συγχρονισμό."
  },
  {
    "question": "Ποιος είναι ο μέγιστος ονομαστικός ρυθμός του FlexRay ανά κανάλι;",
    "options": [
      "10 Mbit/s",
      "100 Gbit/s",
      "125 kbit/s",
      "150 Mbit/s"
    ],
    "correct": 0,
    "feedback": "Η προδιαγραφή FlexRay φθάνει έως 10 Mbit/s ανά κανάλι."
  },
  {
    "question": "Τι σημαίνει static segment στο FlexRay;",
    "options": [
      "Προκαθορισμένες χρονικές θέσεις για μετάδοση",
      "Τυχαίο μήκος πακέτου χωρίς χρονισμό",
      "Μετάδοση μόνο οπτικής ίνας",
      "Φυσικό τερματισμό Ethernet"
    ],
    "correct": 0,
    "feedback": "Στο static segment τα slots ανατίθενται και είναι προβλέψιμα."
  },
  {
    "question": "Σε τι χρησιμεύει το dynamic segment του FlexRay;",
    "options": [
      "Ευέλικτη αποστολή μηνυμάτων μέσα στο πρόγραμμα κύκλου",
      "Μόνιμη απενεργοποίηση των ECU",
      "Αποκλειστικά φόρτιση μπαταρίας",
      "Αφαίρεση της ανάγκης συγχρονισμού"
    ],
    "correct": 0,
    "feedback": "Το dynamic segment προσφέρει ευελιξία με minislot."
  },
  {
    "question": "Πώς ονομάζονται τα δύο προαιρετικά κανάλια του FlexRay;",
    "options": [
      "A και B",
      "SDA και SCL",
      "P και N της μπαταρίας",
      "USB 1 και USB 2"
    ],
    "correct": 0,
    "feedback": "Το FlexRay μπορεί να χρησιμοποιεί δύο ανεξάρτητα φυσικά κανάλια A και B."
  },
  {
    "question": "Πότε τα δύο κανάλια FlexRay προσφέρουν πλεονασμό;",
    "options": [
      "Όταν η αρχιτεκτονική έχει διαμορφωθεί να διατηρεί επικοινωνία και σε αστοχία ενός καναλιού",
      "Πάντα χωρίς καμία πρόσθετη σχεδίαση",
      "Μόνο όταν συνδεθούν στο internet",
      "Όταν απενεργοποιηθεί ο συγχρονισμός"
    ],
    "correct": 0,
    "feedback": "Η πραγματική ανοχή σε σφάλματα εξαρτάται από τη διαμόρφωση του συστήματος."
  },
  {
    "question": "Ποια φυσική διάταξη υποστηρίζεται στο FlexRay;",
    "options": [
      "Δίαυλος και τοπολογίες αστέρα",
      "Μόνο ένας δακτύλιος οπτικών ινών",
      "Μόνο ασύρματο δίκτυο",
      "Μόνο σύνδεσμος RJ45 γραφείου"
    ],
    "correct": 0,
    "feedback": "Το FlexRay μπορεί να υλοποιηθεί με bus, star και συνδυασμούς."
  },
  {
    "question": "Τι πρέπει να συμβεί ώστε οι ECU FlexRay να συνεργάζονται σωστά;",
    "options": [
      "Να ακολουθούν συμβατό χρονισμό και διαμόρφωση επικοινωνίας",
      "Να μεταδίδουν διαρκώς χωρίς πρόγραμμα",
      "Να έχουν όλες την ίδια μάρκα",
      "Να διαθέτουν Bluetooth"
    ],
    "correct": 0,
    "feedback": "Ο χρονικός συγχρονισμός είναι βασική απαίτηση FlexRay."
  },
  {
    "question": "Ποια δήλωση για το FlexRay και το CAN είναι ορθή;",
    "options": [
      "Το FlexRay διαθέτει προκαθορισμένα slots, ενώ το κλασικό CAN χρησιμοποιεί διαιτησία βάσει ID",
      "Το CAN έχει πάντα δύο κανάλια A/B",
      "Το FlexRay είναι οπτικό δίκτυο πολυμέσων",
      "Και τα δύο είναι αποκλειστικά ασύρματα"
    ],
    "correct": 0,
    "feedback": "Διαφορετικοί μηχανισμοί πρόσβασης εξυπηρετούν διαφορετικές εφαρμογές."
  },
  {
    "question": "Αν μία ECU FlexRay δεν επικοινωνεί, ποια είναι η σωστή προσέγγιση;",
    "options": [
      "Έλεγχος τροφοδοσίας, καλωδίωσης, χρονισμού και κατάστασης δικτύου",
      "Άμεση αντικατάσταση της ECU χωρίς μέτρηση",
      "Αλλαγή πρωτοκόλλου σε LIN",
      "Διαγραφή όλων των DTC χωρίς καταγραφή"
    ],
    "correct": 0,
    "feedback": "Η διάγνωση απαιτεί συστηματικό έλεγχο και κατάλληλο εξοπλισμό."
  },
  {
    "question": "Γιατί χρησιμοποιείται Automotive Ethernet;",
    "options": [
      "Για υψηλό ρυθμό δεδομένων μεταξύ μονάδων οχήματος",
      "Μόνο για να ανοίγουν ηλεκτρικά παράθυρα",
      "Αποκλειστικά για MOST δακτύλιους",
      "Για μηχανική κίνηση των τροχών"
    ],
    "correct": 0,
    "feedback": "Το Automotive Ethernet υποστηρίζει εφαρμογές με αυξημένες απαιτήσεις εύρους ζώνης."
  },
  {
    "question": "Ποια είναι η ονομαστική ταχύτητα του 100BASE-T1;",
    "options": [
      "100 Mbit/s",
      "100 kbit/s",
      "1 Mbit/s",
      "10 Gbit/s"
    ],
    "correct": 0,
    "feedback": "Το 100BASE-T1 ορίζεται για 100 Mbit/s."
  },
  {
    "question": "Ποια είναι η ονομαστική ταχύτητα του 1000BASE-T1;",
    "options": [
      "1 Gbit/s",
      "100 kbit/s",
      "150 Mbit/s",
      "10 Mbit/s"
    ],
    "correct": 0,
    "feedback": "Το 1000BASE-T1 ορίζεται για 1 Gbit/s."
  },
  {
    "question": "Ποια είναι η χαρακτηριστική δυνατότητα του 10BASE-T1S;",
    "options": [
      "Μετάδοση 10 Mbit/s με δυνατότητα multidrop",
      "Μόνο δακτύλιος οπτικής ίνας",
      "Υποχρεωτικά δύο κανάλια A/B",
      "Μόνο δίκτυα ήχου MOST"
    ],
    "correct": 0,
    "feedback": "Το 10BASE-T1S προσφέρει 10 Mbit/s και υποστηρίζει multidrop διαμορφώσεις."
  },
  {
    "question": "Τι καλώδιο χρησιμοποιούν συχνά οι συνδέσεις 100BASE-T1;",
    "options": [
      "Ένα συνεστραμμένο ζεύγος αγωγών",
      "Οπτική ίνα σε κάθε περίπτωση",
      "Τέσσερα ζεύγη RJ45 υποχρεωτικά",
      "Μονή γραμμή LIN"
    ],
    "correct": 0,
    "feedback": "Πρόκειται για single-pair Ethernet φυσικό επίπεδο."
  },
  {
    "question": "Ποιος είναι ένας τυπικός ρόλος Ethernet switch σε όχημα;",
    "options": [
      "Διασύνδεση και προώθηση πλαισίων μεταξύ ζεύξεων",
      "Μετατροπή ρεύματος σε κίνηση",
      "Καθορισμός master για κάθε LIN",
      "Ανάφλεξη καυσίμου"
    ],
    "correct": 0,
    "feedback": "Ο switch διασυνδέει Ethernet συσκευές και προωθεί πλαίσια."
  },
  {
    "question": "Ποια εφαρμογή μπορεί να απαιτεί Automotive Ethernet;",
    "options": [
      "Μεταφορά δεδομένων από κάμερα σε ECU επεξεργασίας",
      "Διακόπτης χωρίς δεδομένα",
      "Μηχανικό χειρόφρενο χωρίς ηλεκτρονικά",
      "Μόνο αναλογικό όργανο καυσίμου"
    ],
    "correct": 0,
    "feedback": "Οι αισθητήρες εικόνας μπορούν να παράγουν σημαντικό όγκο δεδομένων."
  },
  {
    "question": "Τι σημαίνει TSN στην τεχνολογία Ethernet;",
    "options": [
      "Time-Sensitive Networking",
      "Total Sensor Number",
      "Twisted Serial Node",
      "Transmission Safety Null"
    ],
    "correct": 0,
    "feedback": "Το TSN είναι οικογένεια μηχανισμών για επικοινωνία με απαιτήσεις χρονισμού."
  },
  {
    "question": "Η υψηλή ταχύτητα Ethernet εγγυάται από μόνη της χρονική παράδοση;",
    "options": [
      "Όχι, απαιτούνται κατάλληλοι μηχανισμοί χρονισμού και διαχείρισης κυκλοφορίας",
      "Ναι, πάντα",
      "Μόνο όταν είναι RJ45",
      "Ναι, με οποιοδήποτε switch"
    ],
    "correct": 0,
    "feedback": "Ο χρονισμός είναι ξεχωριστή απαίτηση από το διαθέσιμο εύρος ζώνης."
  },
  {
    "question": "Ποιο δίκτυο ταιριάζει περισσότερο σε κλασικό δακτύλιο infotainment;",
    "options": [
      "MOST",
      "FlexRay static segment",
      "LIN μίας γραμμής",
      "CAN για κάθε ηχείο"
    ],
    "correct": 0,
    "feedback": "Το MOST σχεδιάστηκε για πολυμέσα και χρησιμοποιήθηκε συχνά σε δακτύλιο."
  },
  {
    "question": "Ποιο δίκτυο ταιριάζει σε προκαθορισμένο κύκλο ελέγχου με slots;",
    "options": [
      "FlexRay",
      "MOST25 ως μόνο κριτήριο",
      "Bluetooth",
      "Chrysler PCI"
    ],
    "correct": 0,
    "feedback": "Η δυνατότητα time-triggered στατικού τμήματος διακρίνει το FlexRay."
  },
  {
    "question": "Ποιο δίκτυο επιλέγεται συνήθως για σύνδεση υψηλού εύρους ζώνης μεταξύ ECU;",
    "options": [
      "Automotive Ethernet",
      "Μόνο LIN",
      "MOST25 ανεξαρτήτως απαιτήσεων",
      "Σειριακή αναλογική σύνδεση"
    ],
    "correct": 0,
    "feedback": "Το Ethernet διαθέτει εκδόσεις για υψηλούς ρυθμούς δεδομένων."
  },
  {
    "question": "Τι καθορίζει ορθότερα την επιλογή δικτύου;",
    "options": [
      "Ο ρυθμός δεδομένων, ο χρονισμός, η αξιοπιστία, το κόστος και η εφαρμογή",
      "Αποκλειστικά το χρώμα του καλωδίου",
      "Μόνο ο κυβισμός κινητήρα",
      "Η δημοτικότητα της μάρκας"
    ],
    "correct": 0,
    "feedback": "Οι πραγματικές προδιαγραφές του συστήματος υπαγορεύουν τη δικτύωση."
  },
  {
    "question": "Ποια είναι η ασφαλέστερη αρχή διάγνωσης δικτύου;",
    "options": [
      "Επιβεβαίωση συμπτωμάτων και μετρήσεων πριν από αντικατάσταση εξαρτήματος",
      "Άμεση αλλαγή ECU μόλις χαθεί ένα μήνυμα",
      "Αγνόηση διαγραμμάτων",
      "Διαγραφή στοιχείων χωρίς καταγραφή"
    ],
    "correct": 0,
    "feedback": "Η αιτία πρέπει να τεκμηριώνεται με ελέγχους στο συγκεκριμένο όχημα."
  }
];

  const moduleData = [
  {
    "title": "MOST: χρήσεις και δακτύλιος",
    "meta": "πολυμέσα · τοπολογία · φυσικά μέσα",
    "start": 0,
    "end": 6
  },
  {
    "title": "FlexRay: χρονισμός και τμήματα",
    "meta": "static · dynamic · κανάλια A/B",
    "start": 6,
    "end": 12
  },
  {
    "title": "FlexRay: τοπολογίες και διάγνωση",
    "meta": "bus · star · συγχρονισμός",
    "start": 12,
    "end": 16
  },
  {
    "title": "Automotive Ethernet: φυσικό επίπεδο",
    "meta": "T1S · 100BASE-T1 · 1000BASE-T1",
    "start": 16,
    "end": 25
  },
  {
    "title": "Επιλογή δικτύου και διάγνωση",
    "meta": "MOST · FlexRay · Ethernet",
    "start": 25,
    "end": 30
  }
];

  const letters = ["Α", "Β", "Γ", "Δ"];
  const slidesView = lessonTest.querySelector("[data-lesson-slides-view]");
  const quizView = lessonTest.querySelector("[data-lesson-quiz-view]");
  const quizToggle = lessonTest.querySelector("[data-lesson-test-toggle]");
  const quizToggleLabel = lessonTest.querySelector("[data-lesson-test-toggle-label]");
  const slideCounter = lessonTest.querySelector(".intro-slide-counter");
  const title = lessonTest.querySelector("[data-slide-title]");
  const currentSlide = lessonTest.querySelector("[data-slide-current]");
  const quiz = lessonTest.querySelector("[data-lesson-quiz]");
  const questionsContainer = lessonTest.querySelector("[data-lesson-quiz-questions]");

  const showQuiz = (open, updateHash = true) => {
    slidesView.hidden = open;
    quizView.hidden = !open;
    lessonTest.classList.toggle("is-quiz-mode", open);
    quizToggle.setAttribute("aria-expanded", String(open));
    quizToggleLabel.textContent = open ? "Επιστροφή στις διαφάνειες" : "Τεστ 30 ερωτήσεων";
    slideCounter.hidden = open;
    title.textContent = open
      ? "Τεστ Μαθήματος 7"
      : "LIN και άλλα δίκτυα επικοινωνίας · Διαφάνεια " + currentSlide.textContent;
    if (updateHash) {
      history.replaceState(null, "", open ? "#test" : "#slide-" + currentSlide.textContent);
    }
  };

  moduleData.forEach((module, moduleIndex) => {
    const section = document.createElement("section");
    section.className = "intro-quiz-module";
    section.setAttribute("aria-labelledby", "lesson-module-" + (moduleIndex + 1));

    const heading = document.createElement("header");
    heading.className = "intro-quiz-module-heading";
    const moduleNumber = document.createElement("span");
    moduleNumber.textContent = String(moduleIndex + 1);
    const headingText = document.createElement("div");
    const headingTitle = document.createElement("h3");
    headingTitle.id = "lesson-module-" + (moduleIndex + 1);
    headingTitle.textContent = module.title;
    const headingMeta = document.createElement("p");
    headingMeta.textContent = module.meta;
    headingText.append(headingTitle, headingMeta);
    heading.append(moduleNumber, headingText);
    section.append(heading);

    quizData.slice(module.start, module.end).forEach((item, localIndex) => {
      const index = module.start + localIndex;
      const fieldset = document.createElement("fieldset");
      fieldset.className = "intro-quiz-question";
      fieldset.dataset.lessonQuestion = "";
      // Ανακατεύουμε μόνο τις επιλογές, κρατώντας την αντιστοίχιση της σωστής απάντησης.
      const shuffledOptions = item.options.map((option, originalIndex) => ({ option, originalIndex }));
      for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
      }
      fieldset.dataset.correct = String(shuffledOptions.findIndex((entry) => entry.originalIndex === item.correct));

      const legend = document.createElement("legend");
      const number = document.createElement("span");
      number.textContent = String(index + 1);
      const questionText = document.createElement("strong");
      questionText.textContent = item.question;
      legend.append(number, questionText);
      fieldset.append(legend);

      shuffledOptions.forEach(({ option }, optionIndex) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "lesson-q" + (index + 1);
        input.value = String(optionIndex);
        const letter = document.createElement("b");
        letter.textContent = letters[optionIndex];
        const optionText = document.createElement("span");
        optionText.textContent = option;
        label.append(input, letter, optionText);
        fieldset.append(label);
      });

      const feedback = document.createElement("p");
      feedback.className = "intro-question-feedback";
      feedback.dataset.lessonFeedback = "";
      feedback.textContent = item.feedback;
      feedback.hidden = true;
      fieldset.append(feedback);
      section.append(fieldset);
    });

    questionsContainer.append(section);
  });

  lessonTest.querySelector("[data-lesson-quiz-loading]")?.remove();
  const questions = [...lessonTest.querySelectorAll("[data-lesson-question]")];
  const modules = [...lessonTest.querySelectorAll(".intro-quiz-module")];
  const mobileQuery = window.matchMedia("(max-width: 700px)");
  const previousQuestion = lessonTest.querySelector("[data-lesson-question-prev]");
  const nextQuestion = lessonTest.querySelector("[data-lesson-question-next]");
  const questionPosition = lessonTest.querySelector("[data-lesson-question-position]");
  const quizScroll = lessonTest.querySelector("[data-lesson-quiz-scroll]");
  const warning = lessonTest.querySelector("[data-lesson-quiz-warning]");
  const result = lessonTest.querySelector("[data-lesson-quiz-result]");
  const scoreTarget = lessonTest.querySelector("[data-lesson-score]");
  const gradeTarget = lessonTest.querySelector("[data-lesson-grade]");
  const percentageTarget = lessonTest.querySelector("[data-lesson-percentage]");
  const statusTarget = lessonTest.querySelector("[data-lesson-result-status]");
  const resultMessage = lessonTest.querySelector("[data-lesson-result-message]");
  const progressCurrent = lessonTest.querySelector("[data-lesson-progress-current]");
  const progressBar = lessonTest.querySelector("[data-lesson-progress-bar]");
  const resetButton = lessonTest.querySelector("[data-lesson-quiz-reset]");
  const submitButton = quiz.querySelector('button[type="submit"]');
  let mobileQuestionIndex = 0;

  const showMobileQuestion = (index, focus = false) => {
    mobileQuestionIndex = Math.max(0, Math.min(index, questions.length - 1));
    const mobile = mobileQuery.matches;
    const activeQuestion = questions[mobileQuestionIndex];
    quiz.classList.toggle("is-mobile-paged", mobile);
    quiz.classList.toggle("is-mobile-last", mobile && mobileQuestionIndex === questions.length - 1);
    modules.forEach((module) => {
      const active = module.contains(activeQuestion);
      module.classList.toggle("is-mobile-active", mobile && active);
      module.hidden = mobile && !active;
    });
    questions.forEach((question, questionIndex) => {
      const active = !mobile || questionIndex === mobileQuestionIndex;
      question.classList.toggle("is-mobile-active", mobile && active);
      question.hidden = !active;
    });
    questionPosition.textContent = String(mobileQuestionIndex + 1);
    previousQuestion.disabled = mobileQuestionIndex === 0;
    nextQuestion.disabled = mobileQuestionIndex === questions.length - 1;
    if (mobile) {
      quizScroll.scrollTop = 0;
      if (focus) activeQuestion.querySelector("input")?.focus({ preventScroll: true });
    }
  };

  const updateProgress = () => {
    const answered = questions.filter((question) => question.querySelector("input:checked")).length;
    progressCurrent.textContent = String(answered);
    progressBar.style.width = Math.round((answered / questions.length) * 100) + "%";
  };

  previousQuestion.addEventListener("click", () => showMobileQuestion(mobileQuestionIndex - 1, true));
  nextQuestion.addEventListener("click", () => showMobileQuestion(mobileQuestionIndex + 1, true));
  quizToggle.addEventListener("click", () => showQuiz(quizView.hidden));
  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener("change", () => showMobileQuestion(mobileQuestionIndex));
  } else {
    mobileQuery.addListener(() => showMobileQuestion(mobileQuestionIndex));
  }

  quiz.addEventListener("change", (event) => {
    event.target.closest("[data-lesson-question]")?.classList.remove("needs-answer");
    warning.hidden = true;
    updateProgress();
  });

  quiz.addEventListener("submit", (event) => {
    event.preventDefault();
    const unanswered = questions.find((question) => !question.querySelector("input:checked"));
    if (unanswered) {
      warning.hidden = false;
      unanswered.classList.add("needs-answer");
      if (mobileQuery.matches) {
        showMobileQuestion(questions.indexOf(unanswered), true);
      } else {
        unanswered.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    let score = 0;
    warning.hidden = true;
    questions.forEach((question) => {
      const selected = question.querySelector("input:checked");
      const correct = question.dataset.correct;
      const isCorrect = selected?.value === correct;
      const correctInput = question.querySelector('input[value="' + correct + '"]');
      question.classList.toggle("is-correct", isCorrect);
      question.classList.toggle("is-incorrect", !isCorrect);
      selected?.closest("label")?.classList.add("selected-answer");
      correctInput?.closest("label")?.classList.add("correct-answer");
      question.querySelector("[data-lesson-feedback]").hidden = false;
      question.querySelectorAll("input").forEach((input) => {
        input.disabled = true;
      });
      if (isCorrect) score += 1;
    });

    const percentage = Math.round((score / questions.length) * 100);
    const grade = ((score / questions.length) * 20).toFixed(1).replace(".0", "");
    scoreTarget.textContent = score + "/" + questions.length;
    gradeTarget.textContent = grade + "/20";
    percentageTarget.textContent = percentage + "%";
    result.classList.toggle("is-pass", score >= 24);
    result.classList.toggle("is-review", score < 24);

    if (score >= 27) {
      statusTarget.textContent = "Εξαιρετική επίδοση";
      resultMessage.textContent = "Κατανοείς τη δομή, τον χρονισμό, την τοπολογία και τις εφαρμογές των MOST, FlexRay και Automotive Ethernet.";
    } else if (score >= 24) {
      statusTarget.textContent = "Επιτυχής ολοκλήρωση";
      resultMessage.textContent = "Πέρασες το τεστ. Δες τις εξηγήσεις στις λανθασμένες απαντήσεις πριν προχωρήσεις.";
    } else if (score >= 18) {
      statusTarget.textContent = "Χρειάζεται στοχευμένη επανάληψη";
      resultMessage.textContent = "Επανέλαβε MOST, τον κύκλο FlexRay και τα βασικά πρότυπα Automotive Ethernet.";
    } else {
      statusTarget.textContent = "Χρειάζεται επανάληψη του μαθήματος";
      resultMessage.textContent = "Δες ξανά τις διαφάνειες για MOST, FlexRay και Automotive Ethernet.";
    }

    result.hidden = false;
    resetButton.hidden = false;
    submitButton.disabled = true;
  });

  resetButton.addEventListener("click", () => {
    window.location.reload();
  });

  showMobileQuestion(0);
  updateProgress();
  showQuiz(window.location.hash === "#test", false);
}
