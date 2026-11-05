const lessonTest = document.querySelector("[data-lesson-deck]");

if (lessonTest) {
  const quizData = [
  {
    "question": "Ποιος οργανώνει συνήθως την επικοινωνία σε ένα δίκτυο LIN;",
    "options": [
      "Η κύρια μονάδα (master)",
      "Κάθε μονάδα όποτε θέλει",
      "Μόνο η μπαταρία",
      "Το διαγνωστικό εργαλείο"
    ],
    "correct": 0,
    "feedback": "Η κύρια μονάδα ελέγχει πότε ξεκινά κάθε επικοινωνία στο LIN."
  },
  {
    "question": "Πώς ονομάζονται οι μονάδες που απαντούν στα μηνύματα LIN;",
    "options": [
      "Slave μονάδες",
      "Τερματιστές CAN",
      "Αισθητήρες ID",
      "Gateways PCI"
    ],
    "correct": 0,
    "feedback": "Οι slave μονάδες απαντούν όταν η κύρια μονάδα ζητήσει τα δεδομένα τους."
  },
  {
    "question": "Τι κάνει ο master σε ένα τυπικό δίκτυο LIN;",
    "options": [
      "Στέλνει την επικεφαλίδα και καθορίζει τη σειρά επικοινωνίας",
      "Απαντά μόνο όταν τον ρωτήσει ένας slave",
      "Μετατρέπει το LIN σε I²C",
      "Μετρά την τάση της μπαταρίας"
    ],
    "correct": 0,
    "feedback": "Ο master ξεκινά τα πλαίσια και καθορίζει το πρόγραμμα επικοινωνίας."
  },
  {
    "question": "Τι περιλαμβάνει συνήθως η επικεφαλίδα ενός πλαισίου LIN;",
    "options": [
      "Σήμα έναρξης και αναγνωριστικό",
      "Μόνο τα δεδομένα του αισθητήρα",
      "Μόνο επιβεβαίωση ACK",
      "Κωδικό βλάβης OBD"
    ],
    "correct": 0,
    "feedback": "Η επικεφαλίδα αρχίζει την επικοινωνία και δείχνει ποιο μήνυμα ζητείται."
  },
  {
    "question": "Ποιος στέλνει συνήθως την απόκριση/δεδομένα στο πλαίσιο LIN;",
    "options": [
      "Η slave μονάδα που έχει οριστεί για το συγκεκριμένο αναγνωριστικό",
      "Οποιαδήποτε μονάδα τυχαία",
      "Μόνο ο master",
      "Η ασφάλεια του κυκλώματος"
    ],
    "correct": 0,
    "feedback": "Η μονάδα που έχει ανατεθεί στο μήνυμα στέλνει την απόκριση."
  },
  {
    "question": "Τι περιγράφει ο χρονοπρογραμματισμός (schedule) στο LIN;",
    "options": [
      "Πότε ξεκινά κάθε μήνυμα και ποια μονάδα απαντά",
      "Ποια ασφάλεια θα καεί πρώτη",
      "Την τάση φόρτισης του εναλλάκτη",
      "Τη σειρά εκκίνησης του κινητήρα"
    ],
    "correct": 0,
    "feedback": "Το πρόγραμμα ορίζει τη σειρά και τους χρόνους των μηνυμάτων."
  },
  {
    "question": "Γιατί ο προγραμματισμένος τρόπος επικοινωνίας βοηθά να αποφεύγονται συγκρούσεις στο LIN;",
    "options": [
      "Επειδή οι μονάδες απαντούν στις καθορισμένες χρονικές θέσεις",
      "Επειδή όλες στέλνουν ταυτόχρονα",
      "Επειδή το καλώδιο δεν μεταφέρει δεδομένα",
      "Επειδή κάθε μήνυμα έχει διαφορετική τάση"
    ],
    "correct": 0,
    "feedback": "Οι απαντήσεις είναι οργανωμένες από το πρόγραμμα του master."
  },
  {
    "question": "Ποια είναι συνήθης χρήση του LIN σε ένα αυτοκίνητο;",
    "options": [
      "Επικοινωνία με απλούστερες περιφερειακές λειτουργίες, όπως χειριστήρια ή μηχανισμούς θυρών",
      "Κύρια επικοινωνία όλων των μονάδων υψηλής ταχύτητας",
      "Σύνδεση του αυτοκινήτου στο διαδίκτυο",
      "Έλεγχος της πίεσης των ελαστικών με μηχανικό τρόπο"
    ],
    "correct": 0,
    "feedback": "Το LIN χρησιμοποιείται συχνά σε τοπικές, σχετικά απλές λειτουργίες αμαξώματος."
  },
  {
    "question": "Ποιο χαρακτηριστικό ταιριάζει περισσότερο στο LIN σε σύγκριση με το CAN;",
    "options": [
      "Απλούστερο και χαμηλότερου κόστους δίκτυο για λιγότερο απαιτητικές λειτουργίες",
      "Πάντα ταχύτερο από το CAN",
      "Χρησιμοποιεί περισσότερα καλώδια από το CAN",
      "Δεν έχει κύρια μονάδα"
    ],
    "correct": 0,
    "feedback": "Το LIN είναι σχεδιασμένο για απλούστερες και οικονομικές εφαρμογές."
  },
  {
    "question": "Τι συμβαίνει αν μια slave μονάδα LIN δεν έχει δεδομένα να στείλει σε έναν κύκλο;",
    "options": [
      "Δεν στέλνει απόκριση για το μήνυμα εκείνου του κύκλου",
      "Αναλαμβάνει μόνιμα τον ρόλο master",
      "Στέλνει όλα τα δεδομένα του δικτύου",
      "Αλλάζει το αναγνωριστικό όλων των μονάδων"
    ],
    "correct": 0,
    "feedback": "Η slave απαντά μόνο όταν έχει οριστεί να απαντήσει για το συγκεκριμένο μήνυμα."
  },
  {
    "question": "Τι αναγνωρίζει το αναγνωριστικό (ID) σε ένα πλαίσιο LIN;",
    "options": [
      "Ποιο μήνυμα ή ποια πληροφορία ζητείται",
      "Τον αριθμό πλαισίου του οχήματος",
      "Την τάση της μπαταρίας",
      "Τη διεύθυνση IP του αυτοκινήτου"
    ],
    "correct": 0,
    "feedback": "Το ID διακρίνει το είδος του μηνύματος στο πρόγραμμα επικοινωνίας."
  },
  {
    "question": "Ποια είναι μια πρακτική συνέπεια της ύπαρξης master στο LIN;",
    "options": [
      "Οι slave μονάδες δεν ξεκινούν αυθαίρετα την επικοινωνία",
      "Όλες οι μονάδες έχουν πάντα ίδια προτεραιότητα",
      "Δεν χρειάζεται καθόλου καλωδίωση",
      "Κάθε slave επιλέγει το δικό της πρόγραμμα"
    ],
    "correct": 0,
    "feedback": "Ο master ξεκινά τους κύκλους και οι slave ακολουθούν το πρόγραμμα."
  },
  {
    "question": "Τι είναι το SAE J1850;",
    "options": [
      "Οικογένεια προτύπων επικοινωνίας που χρησιμοποιήθηκε σε οχήματα",
      "Τύπος αισθητήρα θερμοκρασίας",
      "Πρωτόκολλο ασύρματης φόρτισης",
      "Μονάδα ελέγχου κινητήρα"
    ],
    "correct": 0,
    "feedback": "Το SAE J1850 ορίζει τρόπους σειριακής επικοινωνίας που χρησιμοποιήθηκαν σε οχήματα."
  },
  {
    "question": "Ποιες είναι δύο γνωστές μορφές του SAE J1850;",
    "options": [
      "VPW και PWM",
      "CAN-H και CAN-L",
      "SDA και SCL",
      "RX και TX"
    ],
    "correct": 0,
    "feedback": "Οι VPW και PWM είναι δύο μορφές του SAE J1850."
  },
  {
    "question": "Ποια πρόταση περιγράφει σωστά το Chrysler PCI Bus;",
    "options": [
      "Είναι δίκτυο επικοινωνίας που χρησιμοποιήθηκε σε οχήματα Chrysler",
      "Είναι υποδοχή επέκτασης υπολογιστή μέσα στο αυτοκίνητο",
      "Είναι αισθητήρας πίεσης ελαστικών",
      "Είναι διαφορετική ονομασία του I²C"
    ],
    "correct": 0,
    "feedback": "Το Chrysler PCI Bus είναι δίκτυο επικοινωνίας οχημάτων, όχι υποδοχή PCI υπολογιστή."
  },
  {
    "question": "Γιατί το όνομα PCI Bus μπορεί να προκαλέσει σύγχυση;",
    "options": [
      "Μοιάζει με το PCI των υπολογιστών, αλλά εδώ αναφέρεται σε δίκτυο οχήματος Chrysler",
      "Είναι η ονομασία του CAN-H",
      "Είναι τύπος μπαταρίας",
      "Είναι ο κωδικός βλάβης του LIN"
    ],
    "correct": 0,
    "feedback": "Το ίδιο ακρωνύμιο χρησιμοποιείται σε διαφορετικά συμφραζόμενα."
  },
  {
    "question": "Τι κοινό έχουν γενικά τα SAE J1850, Chrysler PCI και CAN;",
    "options": [
      "Είναι τρόποι επικοινωνίας μεταξύ ηλεκτρονικών μονάδων οχήματος",
      "Είναι όλα αισθητήρες θερμοκρασίας",
      "Είναι όλα μηχανικά εξαρτήματα",
      "Χρησιμοποιούνται μόνο σε υπολογιστές γραφείου"
    ],
    "correct": 0,
    "feedback": "Και τα τρία σχετίζονται με ανταλλαγή δεδομένων σε συστήματα οχημάτων."
  },
  {
    "question": "Τι πρέπει να κάνει ο τεχνικός όταν συναντά διαφορετικό δίκτυο σε όχημα;",
    "options": [
      "Να συμβουλεύεται το διάγραμμα και τα τεχνικά στοιχεία του συγκεκριμένου μοντέλου",
      "Να θεωρεί ότι έχει ίδια καλωδίωση με το CAN",
      "Να ενώνει τις γραμμές για δοκιμή",
      "Να αλλάζει όλες τις μονάδες"
    ],
    "correct": 0,
    "feedback": "Η τοπολογία και οι διαδικασίες διαφέρουν ανά όχημα και δίκτυο."
  },
  {
    "question": "Ποιος είναι σωστός τρόπος να ξεχωρίζουμε το PCI οχήματος από το PCI υπολογιστή;",
    "options": [
      "Εξετάζουμε το πλαίσιο: Chrysler PCI είναι δίκτυο επικοινωνίας οχήματος",
      "Τα θεωρούμε πάντα το ίδιο πράγμα",
      "Το PCI οχήματος είναι καλώδιο USB",
      "Το PCI υπολογιστή είναι αισθητήρας CAN"
    ],
    "correct": 0,
    "feedback": "Το πλαίσιο και η εφαρμογή δείχνουν ποια έννοια εννοείται."
  },
  {
    "question": "Ποια είναι τα δύο βασικά σήματα/καλώδια του I²C;",
    "options": [
      "SDA και SCL",
      "CAN-H και CAN-L",
      "VPW και PWM",
      "B+ και γείωση"
    ],
    "correct": 0,
    "feedback": "Το I²C χρησιμοποιεί τη γραμμή δεδομένων SDA και τη γραμμή ρολογιού SCL."
  },
  {
    "question": "Τι μεταφέρει συνήθως η γραμμή SCL στο I²C;",
    "options": [
      "Το σήμα ρολογιού που συγχρονίζει την επικοινωνία",
      "Τα δεδομένα τροφοδοσίας του κινητήρα",
      "Το σήμα CAN-H",
      "Την εντολή εκκίνησης του οχήματος"
    ],
    "correct": 0,
    "feedback": "Το SCL είναι η γραμμή ρολογιού του I²C."
  },
  {
    "question": "Τι μεταφέρει συνήθως η γραμμή SDA στο I²C;",
    "options": [
      "Τα δεδομένα",
      "Το ρολόι",
      "Την τάση μίζας",
      "Το σήμα PWM του J1850"
    ],
    "correct": 0,
    "feedback": "Το SDA είναι η γραμμή δεδομένων του I²C."
  },
  {
    "question": "Σε τι είδους εφαρμογές συναντάται συχνά το I²C;",
    "options": [
      "Σε επικοινωνία μικρών αποστάσεων μεταξύ ολοκληρωμένων κυκλωμάτων/εξαρτημάτων",
      "Σε δίκτυο μεγάλων αποστάσεων μεταξύ πόλεων",
      "Σε μηχανική μετάδοση κίνησης",
      "Μόνο σε ασύρματες συνδέσεις"
    ],
    "correct": 0,
    "feedback": "Το I²C σχεδιάστηκε κυρίως για σύνδεση κυκλωμάτων σε κοντινή απόσταση."
  },
  {
    "question": "Ποιο ζεύγος περιγράφει καλύτερα τη βασική λειτουργία I²C;",
    "options": [
      "Δεδομένα SDA και ρολόι SCL",
      "Δύο γραμμές CAN-H/CAN-L",
      "Μία γραμμή VPW και μία PWM",
      "Τροφοδοσία και σωλήνας κενού"
    ],
    "correct": 0,
    "feedback": "Η βασική σύνδεση I²C βασίζεται στις SDA και SCL."
  },
  {
    "question": "Ποια διαφορά βοηθά να ξεχωρίσουμε το I²C από το CAN αυτοκινήτου;",
    "options": [
      "Το I²C συναντάται κυρίως σε κοντινές συνδέσεις κυκλωμάτων, ενώ το CAN συνδέει μονάδες μέσω δικτύου οχήματος",
      "Το I²C είναι πάντα ασύρματο",
      "Το CAN δεν μεταφέρει δεδομένα",
      "Το I²C χρησιμοποιεί μόνο οπτικές ίνες"
    ],
    "correct": 0,
    "feedback": "Τα δύο δίκτυα έχουν διαφορετικές συνήθεις εφαρμογές και φυσική υλοποίηση."
  },
  {
    "question": "Πώς διαφέρει γενικά η πρόσβαση στο δίκτυο LIN από το CAN;",
    "options": [
      "Στο LIN ο master προγραμματίζει τις επικοινωνίες, ενώ το CAN επιτρέπει σε μονάδες να διεκδικήσουν πρόσβαση με διαιτησία",
      "Στο CAN υπάρχει πάντα ένας master και όλοι οι άλλοι είναι slave",
      "Στο LIN όλες οι μονάδες εκπέμπουν ταυτόχρονα",
      "Δεν υπάρχει καμία διαφορά"
    ],
    "correct": 0,
    "feedback": "Το LIN είναι προγραμματισμένο από master, ενώ το CAN χρησιμοποιεί διαιτησία όταν χρειάζεται."
  },
  {
    "question": "Τι βοηθά το CAN να κάνει όταν δύο μονάδες ξεκινούν ταυτόχρονα;",
    "options": [
      "Η διαιτησία βάσει ID επιτρέπει να συνεχίσει το σημαντικότερο μήνυμα χωρίς απλή σύγκρουση",
      "Ο master LIN επιλέγει τυχαία νικητή",
      "Η γραμμή SCL σταματά το δίκτυο",
      "Οι μονάδες αλλάζουν φυσικά θέση"
    ],
    "correct": 0,
    "feedback": "Στο CAN η διαιτησία βάσει ID επιλύει την ταυτόχρονη προσπάθεια μετάδοσης."
  },
  {
    "question": "Ποιο δίκτυο είναι συνήθως καταλληλότερο για απλές λειτουργίες άνεσης με χαμηλές απαιτήσεις δεδομένων;",
    "options": [
      "LIN",
      "CAN υψηλής ταχύτητας σε κάθε περίπτωση",
      "I²C σε όλο το όχημα",
      "Ethernet σε κάθε μικρό διακόπτη"
    ],
    "correct": 0,
    "feedback": "Το LIN προσφέρει απλούστερη και οικονομική λύση για απλές τοπικές λειτουργίες."
  },
  {
    "question": "Ποια δήλωση για τα δίκτυα οχημάτων είναι σωστή;",
    "options": [
      "Η επιλογή δικτύου εξαρτάται από τις απαιτήσεις ταχύτητας, κόστους και εφαρμογής",
      "Όλα τα δίκτυα έχουν ίδια ταχύτητα και καλωδίωση",
      "Κάθε όχημα χρησιμοποιεί μόνο ένα δίκτυο",
      "Το όνομα του δικτύου αρκεί για να βρούμε τη βλάβη"
    ],
    "correct": 0,
    "feedback": "Διαφορετικά δίκτυα εξυπηρετούν διαφορετικές ανάγκες και μπορεί να συνυπάρχουν."
  },
  {
    "question": "Τι είναι χρήσιμο να συγκρίνουμε όταν μελετάμε LIN, CAN, J1850, PCI και I²C;",
    "options": [
      "Ρόλους μονάδων, τρόπο χρονισμού, καλωδίωση και εφαρμογή",
      "Μόνο το χρώμα του οχήματος",
      "Μόνο την ισχύ του κινητήρα",
      "Την πίεση των ελαστικών"
    ],
    "correct": 0,
    "feedback": "Η σύγκριση γίνεται με βάση τον τρόπο επικοινωνίας και τη χρήση κάθε δικτύου."
  }
];

  const moduleData = [
    { title: "LIN: master, slave και πλαίσια", meta: "επικεφαλίδα · απόκριση · αναγνωριστικό", start: 0, end: 6 },
    { title: "Χρονοπρογραμματισμός LIN", meta: "κύριος κόμβος · πρόγραμμα · χρονικές θέσεις", start: 6, end: 12 },
    { title: "SAE J1850 και Chrysler PCI", meta: "VPW · PWM · δίκτυα οχημάτων", start: 12, end: 18 },
    { title: "I²C: γραμμές και εφαρμογές", meta: "SDA · SCL · κοντινές συνδέσεις κυκλωμάτων", start: 18, end: 24 },
    { title: "Σύγκριση δικτύων", meta: "ρόλοι · χρονισμός · χρήση · CAN", start: 24, end: 30 },
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
      fieldset.dataset.correct = String(item.correct);

      const legend = document.createElement("legend");
      const number = document.createElement("span");
      number.textContent = String(index + 1);
      const questionText = document.createElement("strong");
      questionText.textContent = item.question;
      legend.append(number, questionText);
      fieldset.append(legend);

      item.options.forEach((option, optionIndex) => {
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
      resultMessage.textContent = "Κατανοείς τη δομή των πλαισίων, την προτεραιότητα και τη διαιτησία στα LIN, SAE J1850, Chrysler PCI, I²C και CAN.";
    } else if (score >= 24) {
      statusTarget.textContent = "Επιτυχής ολοκλήρωση";
      resultMessage.textContent = "Πέρασες το τεστ. Δες τις εξηγήσεις στις λανθασμένες απαντήσεις πριν προχωρήσεις.";
    } else if (score >= 18) {
      statusTarget.textContent = "Χρειάζεται στοχευμένη επανάληψη";
      resultMessage.textContent = "Επανέλαβε τους ρόλους master/slave, τον χρονοπρογραμματισμό και τα βασικά χαρακτηριστικά των δικτύων.";
    } else {
      statusTarget.textContent = "Χρειάζεται επανάληψη του μαθήματος";
      resultMessage.textContent = "Δες ξανά τις διαφάνειες για LIN, SAE J1850, Chrysler PCI, I²C και τη σύγκρισή τους με το CAN.";
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
