const lessonTest = document.querySelector("[data-lesson-deck]");

if (lessonTest) {
  const quizData = [
  {
    "question": "Ποια είναι η σωστή σειρά των βασικών πεδίων ενός κλασικού πλαισίου CAN?",
    "options": [
      "SOF, ID, DLC, DATA, CRC, ACK, EOF",
      "ID, SOF, DATA, ACK, DLC, EOF, CRC",
      "SOF, DATA, ID, CRC, DLC, EOF, ACK",
      "DLC, ID, SOF, DATA, EOF, ACK, CRC"
    ],
    "correct": 0,
    "feedback": "Το πλαίσιο ξεκινά με SOF, ακολουθούν ID και DLC, έπειτα τα δεδομένα και οι έλεγχοι μέχρι το EOF."
  },
  {
    "question": "Τι δηλώνει το πεδίο SOF?",
    "options": [
      "Την αρχή του πλαισίου",
      "Το μήκος των δεδομένων",
      "Την επιβεβαίωση λήψης",
      "Τον έλεγχο σφαλμάτων"
    ],
    "correct": 0,
    "feedback": "Το SOF (Start of Frame) σηματοδοτεί την έναρξη νέου πλαισίου CAN."
  },
  {
    "question": "Τι εκφράζει κυρίως το αναγνωριστικό (ID) ενός μηνύματος CAN?",
    "options": [
      "Τον τύπο ή το περιεχόμενο του μηνύματος και την προτεραιότητά του",
      "Τη διεύθυνση ενός μοναδικού παραλήπτη",
      "Την τάση τροφοδοσίας της μονάδας",
      "Πόσες μονάδες έλαβαν το μήνυμα"
    ],
    "correct": 0,
    "feedback": "Το ID χαρακτηρίζει το μήνυμα και συμμετέχει στη διαιτησία· δεν είναι απλή διεύθυνση συγκεκριμένου παραλήπτη."
  },
  {
    "question": "Δύο μονάδες θέλουν να μεταδώσουν ταυτόχρονα. Ποιος μηχανισμός αποφασίζει ποιο μήνυμα θα συνεχίσει?",
    "options": [
      "Η διαιτησία βάσει των ID",
      "Η σειρά σύνδεσης των μονάδων στην πρίζα OBD",
      "Η τάση της μπαταρίας",
      "Η απόσταση κάθε μονάδας από το gateway"
    ],
    "correct": 0,
    "feedback": "Η διαιτησία συγκρίνει τα bit των αναγνωριστικών και επιτρέπει στο μήνυμα υψηλότερης προτεραιότητας να συνεχίσει."
  },
  {
    "question": "Ποιο από δύο ID έχει συνήθως υψηλότερη προτεραιότητα στο CAN?",
    "options": [
      "Το μικρότερο αριθμητικά ID",
      "Το μεγαλύτερο αριθμητικά ID",
      "Το ID με τα περισσότερα ψηφία",
      "Το ID που στάλθηκε πρώτο στον προηγούμενο κύκλο"
    ],
    "correct": 0,
    "feedback": "Το μικρότερο αριθμητικά ID προηγείται, επειδή τα bit μεταδίδονται από το σημαντικότερο και το dominant 0 υπερισχύει του recessive 1."
  },
  {
    "question": "Ποιες λογικές τιμές αντιστοιχούν συνήθως στα dominant και recessive bit?",
    "options": [
      "Dominant 0, recessive 1",
      "Dominant 1, recessive 0",
      "Και τα δύο είναι 0",
      "Και τα δύο είναι 1"
    ],
    "correct": 0,
    "feedback": "Στο CAN το dominant bit είναι λογικό 0 και το recessive bit λογικό 1."
  },
  {
    "question": "Ένας κόμβος στέλνει recessive 1 αλλά διαβάζει dominant 0 κατά τη διαιτησία. Τι κάνει?",
    "options": [
      "Αποσύρεται από τη μετάδοση επειδή έχασε τη διαιτησία",
      "Αλλάζει το ID του σε μεγαλύτερο",
      "Διακόπτει όλο το δίκτυο",
      "Συνεχίζει και αλλοιώνει το πλαίσιο του νικητή"
    ],
    "correct": 0,
    "feedback": "Ο κόμβος καταλαβαίνει ότι άλλο μήνυμα έχει υψηλότερη προτεραιότητα και σταματά να μεταδίδει."
  },
  {
    "question": "Γιατί η διαιτησία CAN χαρακτηρίζεται μη καταστροφική?",
    "options": [
      "Το μήνυμα με υψηλότερη προτεραιότητα συνεχίζει χωρίς να αλλοιώνεται",
      "Κανένας κόμβος δεν σταματά τη μετάδοση",
      "Τα μηνύματα δεν έχουν αναγνωριστικό",
      "Το δίκτυο επισκευάζει αυτόματα κάθε βλάβη"
    ],
    "correct": 0,
    "feedback": "Οι κόμβοι που χάνουν αποσύρονται και το πλαίσιο του νικητή συνεχίζεται κανονικά."
  },
  {
    "question": "Τι κάνει συνήθως ένας κόμβος αφού χάσει τη διαιτησία?",
    "options": [
      "Περιμένει να ελευθερωθεί ο δίαυλος και επιχειρεί ξανά",
      "Αλλάζει μόνιμα την ταχύτητα δικτύου",
      "Στέλνει το πλαίσιό του ταυτόχρονα με του νικητή",
      "Απενεργοποιεί τους τερματισμούς"
    ],
    "correct": 0,
    "feedback": "Ο κόμβος περιμένει την ολοκλήρωση του ενεργού πλαισίου και ξαναπροσπαθεί."
  },
  {
    "question": "Πόσα bit έχει το βασικό ID CAN και πόσα το εκτεταμένο?",
    "options": [
      "11 bit το βασικό και 29 bit το εκτεταμένο",
      "8 bit το βασικό και 16 το εκτεταμένο",
      "16 bit το βασικό και 32 το εκτεταμένο",
      "29 bit το βασικό και 11 το εκτεταμένο"
    ],
    "correct": 0,
    "feedback": "Το standard ID έχει 11 bit, ενώ το extended ID έχει 29 bit."
  },
  {
    "question": "Τι δηλώνει το πεδίο DLC?",
    "options": [
      "Το μήκος των δεδομένων του πλαισίου",
      "Την προτεραιότητα του ACK",
      "Τον αριθμό των μονάδων στο δίκτυο",
      "Το τέλος της μετάδοσης"
    ],
    "correct": 0,
    "feedback": "Το DLC (Data Length Code) περιγράφει πόσα byte δεδομένων περιέχει το πλαίσιο."
  },
  {
    "question": "Στο κλασικό CAN, πόσα byte δεδομένων μπορεί να έχει ένα πλαίσιο?",
    "options": [
      "Έως 8 byte",
      "Πάντα ακριβώς 8 byte",
      "Έως 29 byte",
      "Έως 64 byte"
    ],
    "correct": 0,
    "feedback": "Στο κλασικό CAN μεταφέρονται έως 8 byte ανά πλαίσιο. Το CAN FD επιτρέπει μεγαλύτερο payload."
  },
  {
    "question": "Ποιος είναι ο ρόλος του πεδίου DATA?",
    "options": [
      "Μεταφέρει τις πληροφορίες του μηνύματος",
      "Ορίζει την αρχή του πλαισίου",
      "Δηλώνει ότι ο δίαυλος είναι ελεύθερος",
      "Επιβεβαιώνει ότι δεν υπάρχει σφάλμα"
    ],
    "correct": 0,
    "feedback": "Το DATA είναι το payload, όπως τιμές ταχύτητας ή θερμοκρασίας."
  },
  {
    "question": "Ποιος είναι ο βασικός ρόλος του CRC?",
    "options": [
      "Να βοηθά στον εντοπισμό σφαλμάτων μετάδοσης",
      "Να επιλέγει τη μονάδα παραλήπτη",
      "Να ορίζει τον χρόνο κύκλου",
      "Να αυξάνει το πλήθος των byte δεδομένων"
    ],
    "correct": 0,
    "feedback": "Το CRC επιτρέπει στον δέκτη να εντοπίσει αλλοίωση bit· δεν επισκευάζει τα δεδομένα ή την καλωδίωση."
  },
  {
    "question": "Τι δηλώνει το πεδίο ACK?",
    "options": [
      "Ότι τουλάχιστον ένας κόμβος επιβεβαίωσε σωστή λήψη του πλαισίου",
      "Ποια μονάδα δημιούργησε το μήνυμα",
      "Πόσα byte έχει το DATA",
      "Ότι το πλαίσιο μόλις ξεκινά"
    ],
    "correct": 0,
    "feedback": "Στη θέση ACK ένας ή περισσότεροι δέκτες επιβεβαιώνουν σωστή λήψη σε επίπεδο CAN."
  },
  {
    "question": "Τι δείχνει το EOF?",
    "options": [
      "Το τέλος του πλαισίου CAN",
      "Την αρχή της διαιτησίας",
      "Το πλήθος των byte δεδομένων",
      "Την προτεραιότητα του ID"
    ],
    "correct": 0,
    "feedback": "Το EOF (End of Frame) σηματοδοτεί την ολοκλήρωση του πλαισίου."
  },
  {
    "question": "Ποιος είναι ο σκοπός του intermission ανάμεσα σε διαδοχικά πλαίσια?",
    "options": [
      "Να διαχωρίζει τα πλαίσια πριν αρχίσει η επόμενη μετάδοση",
      "Να μεταφέρει τα δεδομένα του προηγούμενου μηνύματος",
      "Να αλλάζει το ID του κόμβου που έχασε",
      "Να επιβεβαιώνει την τροφοδοσία των ECU"
    ],
    "correct": 0,
    "feedback": "Το intermission είναι το προβλεπόμενο διάστημα μετά το EOF πριν ξεκινήσει νέο πλαίσιο."
  },
  {
    "question": "Τι περιγράφει ο χρόνος κύκλου (cycle time) ενός περιοδικού μηνύματος?",
    "options": [
      "Το διάστημα ανάμεσα σε διαδοχικές αποστολές του ίδιου μηνύματος",
      "Τον χρόνο μιας μέτρησης με πολύμετρο",
      "Το μήκος του καλωδίου CAN",
      "Τη διάρκεια ζωής της ECU"
    ],
    "correct": 0,
    "feedback": "Ο χρόνος κύκλου δείχνει κάθε πότε επαναλαμβάνεται ένα περιοδικό μήνυμα."
  },
  {
    "question": "Μήνυμα με cycle time 20 ms μεταδίδεται κατά κανόνα πόσο συχνά?",
    "options": [
      "Περίπου κάθε 20 ms",
      "Μία φορά ανά δευτερόλεπτο",
      "20 φορές σε 20 δευτερόλεπτα",
      "Μόνο όταν πατηθεί το φρένο"
    ],
    "correct": 0,
    "feedback": "Κύκλος 20 ms σημαίνει περίπου 50 επαναλήψεις ανά δευτερόλεπτο."
  },
  {
    "question": "Ποια πρόταση ξεχωρίζει σωστά τον χρόνο κύκλου από τη διάρκεια πλαισίου?",
    "options": [
      "Ο κύκλος είναι το διάστημα επανάληψης· η διάρκεια πλαισίου είναι ο χρόνος μετάδοσής του",
      "Είναι δύο ονομασίες της ίδιας μέτρησης",
      "Η διάρκεια πλαισίου καθορίζει τη χωρητικότητα της μπαταρίας",
      "Ο κύκλος μετριέται μόνο με σβηστό όχημα"
    ],
    "correct": 0,
    "feedback": "Η διάρκεια πλαισίου αφορά τη μετάδοση των bit του, ενώ ο χρόνος κύκλου αφορά την επανάληψη του μηνύματος."
  },
  {
    "question": "Γιατί ένα μήνυμα κρίσιμο για την ασφάλεια μπορεί να έχει υψηλότερη προτεραιότητα?",
    "options": [
      "Για να αποκτά νωρίτερα πρόσβαση στον δίαυλο όταν υπάρχει ανταγωνισμός",
      "Για να παρακάμπτει το CRC",
      "Για να αλλάζει όλους τους χρόνους κύκλου",
      "Για να μεταδίδεται χωρίς CAN-L"
    ],
    "correct": 0,
    "feedback": "Η προτεραιότητα σχεδιάζεται ώστε τα κρίσιμα μηνύματα να κερδίζουν τη διαιτησία και να περιορίζεται η καθυστέρηση."
  },
  {
    "question": "Τι μπορεί να συμβεί σε μήνυμα χαμηλότερης προτεραιότητας όταν ο δίαυλος έχει πολλή κίνηση?",
    "options": [
      "Να περιμένει περισσότερο μέχρι να ελευθερωθεί ο δίαυλος",
      "Να αποκτήσει αυτόματα μικρότερο ID",
      "Να παρακάμψει τη διαιτησία",
      "Να μετατραπεί σε μήνυμα LIN"
    ],
    "correct": 0,
    "feedback": "Τα μηνύματα χαμηλότερης προτεραιότητας μπορεί να καθυστερήσουν όταν προηγούνται άλλα πλαίσια."
  },
  {
    "question": "Ποιο είναι πιθανό αποτέλεσμα υπερβολικά μεγάλου φόρτου στο CAN?",
    "options": [
      "Μεγαλύτερες καθυστερήσεις και δυσκολία έγκαιρης μετάδοσης ορισμένων μηνυμάτων",
      "Αυτόματη αύξηση του μήκους ID",
      "Μείωση της τάσης της μπαταρίας σε κάθε bit",
      "Κατάργηση της ανάγκης για ACK"
    ],
    "correct": 0,
    "feedback": "Με αυξημένο bus load μειώνεται ο διαθέσιμος χρόνος και τα μηνύματα μπορεί να περιμένουν περισσότερο."
  },
  {
    "question": "Δύο πλαίσια ξεκινούν ταυτόχρονα: ID 0x120 και ID 0x320. Ποιο συνεχίζει πρώτο?",
    "options": [
      "Το 0x120",
      "Το 0x320",
      "Και τα δύο αλλοιώνονται υποχρεωτικά",
      "Κανένα, επειδή τα ID είναι δεκαεξαδικά"
    ],
    "correct": 0,
    "feedback": "Το 0x120 είναι μικρότερο αριθμητικά από το 0x320 και έχει υψηλότερη προτεραιότητα."
  },
  {
    "question": "Αν αλλάξει το ID ενός μηνύματος, ποια συνέπεια μπορεί να προκύψει?",
    "options": [
      "Μπορεί να αλλάξει η προτεραιότητα και ο τρόπος αναγνώρισής του",
      "Αλλάζει η διάμετρος του καλωδίου",
      "Αλλάζει υποχρεωτικά η τάση της μπαταρίας",
      "Δεν επηρεάζεται τίποτα στο δίκτυο"
    ],
    "correct": 0,
    "feedback": "Το ID χρησιμοποιείται για αναγνώριση και διαιτησία· αλλαγή του μπορεί να επηρεάσει το δίκτυο."
  },
  {
    "question": "Μονάδα μεταδίδει μήνυμα με την ταχύτητα οχήματος. Πώς διανέμεται στο CAN?",
    "options": [
      "Οι κόμβοι μπορούν να το λάβουν και κάθε μονάδα το αξιοποιεί αν την αφορά",
      "Πηγαίνει μόνο στη φυσικά διπλανή μονάδα",
      "Το ID είναι πάντα η διεύθυνση IP του παραλήπτη",
      "Μόνο η ECU κινητήρα μπορεί να το διαβάσει"
    ],
    "correct": 0,
    "feedback": "Το CAN είναι κοινός δίαυλος: οι κόμβοι λαμβάνουν τα πλαίσια και χρησιμοποιούν όσα τους αφορούν."
  },
  {
    "question": "Ο δέκτης ανιχνεύει σφάλμα CRC. Ποιο συμπέρασμα είναι σωστό?",
    "options": [
      "Το πλαίσιο είναι εσφαλμένο και δεν πρέπει να χρησιμοποιηθεί ως έγκυρο μήνυμα",
      "Το CRC διορθώνει μόνο του τα αλλοιωμένα bit",
      "Το ID αλλάζει αυτόματα",
      "Ο δέκτης επιβεβαιώνει υποχρεωτικά με ACK"
    ],
    "correct": 0,
    "feedback": "Το CRC ανιχνεύει σφάλμα. Ένα πλαίσιο με σφάλμα δεν γίνεται έγκυρο από το ACK."
  },
  {
    "question": "Ο πομπός δεν λαμβάνει επιβεβαίωση ACK. Τι δείχνει αυτό σε επίπεδο CAN?",
    "options": [
      "Κανένας κόμβος δεν επιβεβαίωσε σωστή λήψη του πλαισίου",
      "Το DATA έχει σίγουρα λανθασμένο περιεχόμενο",
      "Το μήνυμα έχει τη χαμηλότερη προτεραιότητα",
      "Το EOF δεν χρειάζεται"
    ],
    "correct": 0,
    "feedback": "Απουσία ACK σημαίνει ότι δεν υπήρξε επιβεβαίωση δέκτη· από μόνη της δεν δείχνει ποιο εξάρτημα ευθύνεται."
  },
  {
    "question": "Σε έλεγχο βλέπεις σωστό ID, αλλά μεγαλύτερο cycle time από το αναμενόμενο. Τι ελέγχεις?",
    "options": [
      "Τις συνθήκες λειτουργίας και τις προδιαγραφές του οχήματος για τον ρυθμό αποστολής",
      "Μόνο την αντίσταση αισθητήρα θερμοκρασίας",
      "Την πίεση των ελαστικών",
      "Αν το ID γράφεται δεκαδικά ή δεκαεξαδικά"
    ],
    "correct": 0,
    "feedback": "Ο ρυθμός μπορεί να εξαρτάται από τις συνθήκες λειτουργίας. Συγκρίνουμε με τις προδιαγραφές του συγκεκριμένου οχήματος."
  },
  {
    "question": "Μια λειτουργία δεν λαμβάνει το αναμενόμενο μήνυμα CAN. Ποια αρχική προσέγγιση είναι σωστή?",
    "options": [
      "Ελέγχω αν το μήνυμα υπάρχει, το ID, τα δεδομένα και τον χρόνο κύκλου με κατάλληλο εργαλείο",
      "Αλλάζω αμέσως όλες τις μονάδες",
      "Αυξάνω την τάση στο CAN-H",
      "Καταργώ το ACK για δοκιμή"
    ],
    "correct": 0,
    "feedback": "Ελέγχουμε παρουσία, αναγνωριστικό, περιεχόμενο και χρονισμό του μηνύματος πριν προχωρήσουμε σε επέμβαση."
  }
];

  const shuffleQuizItems = (items) => {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  };

  const longestAnswerRun = (slots) => slots.reduce((state, slot) => {
    const run = slot === state.previous ? state.run + 1 : 1;
    return { previous: slot, run, longest: Math.max(state.longest, run) };
  }, { previous: -1, run: 0, longest: 0 }).longest;

  const balancedAnswerSlots = (count, optionCount) => {
    const base = Array.from({ length: count }, (_, index) => index % optionCount);
    let slots = shuffleQuizItems(base);
    let attempts = 0;
    while (longestAnswerRun(slots) > 2 && attempts < 40) {
      slots = shuffleQuizItems(base);
      attempts += 1;
    }
    return slots;
  };

  const answerSlots = balancedAnswerSlots(quizData.length, 4);
  quizData.forEach((item, questionIndex) => {
    const correctText = item.options[item.correct];
    const distractors = shuffleQuizItems(item.options.filter((_, optionIndex) => optionIndex !== item.correct));
    const target = answerSlots[questionIndex];
    item.options = [...distractors];
    item.options.splice(target, 0, correctText);
    item.correct = target;
  });

  const moduleData = [
    { title: "Δομή και πεδία πλαισίου", meta: "SOF · ID · DLC · DATA · CRC · ACK · EOF", start: 0, end: 6 },
    { title: "ID και διαιτησία", meta: "standard/extended · dominant 0 · προτεραιότητα", start: 6, end: 12 },
    { title: "Δεδομένα και έλεγχος", meta: "DLC · payload · CRC · ACK · intermission", start: 12, end: 18 },
    { title: "Χρόνος κύκλου και φόρτος", meta: "περιοδικά μηνύματα · bus load · καθυστερήσεις", start: 18, end: 24 },
    { title: "Εφαρμογή στη λειτουργία", meta: "σύγκριση ID · έλεγχος μηνυμάτων · διάγνωση", start: 24, end: 30 },
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
      ? "Τεστ Μαθήματος 5"
      : "CAN: Μηνύματα και προτεραιότητα · Διαφάνεια " + currentSlide.textContent;
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
      resultMessage.textContent = "Κατανοείς τη δομή των πλαισίων, την προτεραιότητα και τη διαιτησία στο CAN.";
    } else if (score >= 24) {
      statusTarget.textContent = "Επιτυχής ολοκλήρωση";
      resultMessage.textContent = "Πέρασες το τεστ. Δες τις εξηγήσεις στις λανθασμένες απαντήσεις πριν προχωρήσεις.";
    } else if (score >= 18) {
      statusTarget.textContent = "Χρειάζεται στοχευμένη επανάληψη";
      resultMessage.textContent = "Επανέλαβε τα πεδία του πλαισίου, τα ID, τη διαιτησία και τον χρόνο κύκλου.";
    } else {
      statusTarget.textContent = "Χρειάζεται επανάληψη του μαθήματος";
      resultMessage.textContent = "Δες ξανά τις διαφάνειες για ID, CRC, ACK και τη συμπεριφορά των μηνυμάτων στο δίκτυο.";
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
