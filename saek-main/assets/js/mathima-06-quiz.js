const lessonTest = document.querySelector("[data-lesson-deck]");

if (lessonTest) {
  const quizData = [
  {
    "question": "Ποιο είναι το πρώτο βήμα πριν ξεκινήσει η διάγνωση βλάβης στο CAN;",
    "options": [
      "Επιβεβαιώνω το σύμπτωμα και τις συνθήκες εμφάνισής του",
      "Αλλάζω τη μονάδα που εμφανίζει κωδικό",
      "Αποσυνδέω όλες τις μονάδες",
      "Σβήνω όλους τους κωδικούς χωρίς καταγραφή"
    ],
    "correct": 0,
    "feedback": "Ξεκινάμε επιβεβαιώνοντας το σύμπτωμα και πότε εμφανίζεται, ώστε η διάγνωση να βασιστεί σε πραγματικά στοιχεία."
  },
  {
    "question": "Τι μας δείχνει συνήθως ένας κωδικός επικοινωνίας μιας μονάδας;",
    "options": [
      "Ότι υπάρχει πρόβλημα επικοινωνίας, χωρίς να προσδιορίζει μόνος του την αιτία",
      "Ποια ακριβώς μονάδα πρέπει να αντικατασταθεί",
      "Ότι ο αισθητήρας της μονάδας είναι οπωσδήποτε χαλασμένος",
      "Ότι χρειάζεται πάντα επαναπρογραμματισμός"
    ],
    "correct": 0,
    "feedback": "Ο κωδικός κατευθύνει τη διάγνωση, αλλά χρειάζονται πρόσθετοι έλεγχοι για να βρούμε την αιτία."
  },
  {
    "question": "Γιατί καταγράφουμε τους κωδικούς πριν τους διαγράψουμε;",
    "options": [
      "Για να κρατήσουμε τις αρχικές ενδείξεις και τα στοιχεία της βλάβης",
      "Για να αυξηθεί η τάση του δικτύου",
      "Για να σταματήσει η επικοινωνία των μονάδων",
      "Για να επιλέξει το διαγνωστικό τυχαία μονάδα"
    ],
    "correct": 0,
    "feedback": "Η αρχική καταγραφή διατηρεί χρήσιμες πληροφορίες, όπως κωδικούς και συνθήκες εμφάνισης."
  },
  {
    "question": "Αν δεν επικοινωνούν πολλές μονάδες μαζί, τι εξετάζουμε ως πιθανότητα;",
    "options": [
      "Κοινό τμήμα δικτύου, τροφοδοσία ή gateway",
      "Μόνο έναν αισθητήρα τροχού",
      "Μόνο την οθόνη του πίνακα οργάνων",
      "Την πίεση των ελαστικών"
    ],
    "correct": 0,
    "feedback": "Πολλές μονάδες με το ίδιο σύμπτωμα μπορεί να δείχνουν κοινή αιτία στο δίκτυο ή στην τροφοδοσία."
  },
  {
    "question": "Ποιο εργαλείο βοηθά να διαβάσουμε τους κωδικούς και την κατάσταση των μονάδων;",
    "options": [
      "Διαγνωστικό εργαλείο",
      "Πολύμετρο σε λειτουργία αμπερομέτρου",
      "Λαμπτήρας δοκιμής συνδεδεμένος στις γραμμές CAN",
      "Μετρητής πίεσης"
    ],
    "correct": 0,
    "feedback": "Το διαγνωστικό εργαλείο επικοινωνεί με τις μονάδες και εμφανίζει κωδικούς και διαθέσιμα δεδομένα."
  },
  {
    "question": "Τι είναι χρήσιμο να σημειώσουμε μαζί με το σύμπτωμα;",
    "options": [
      "Πότε εμφανίζεται και αν είναι σταθερό ή διακοπτόμενο",
      "Το χρώμα του οχήματος",
      "Τη μάρκα των ελαστικών",
      "Την εξωτερική θερμοκρασία μόνο"
    ],
    "correct": 0,
    "feedback": "Οι συνθήκες και η συχνότητα εμφάνισης βοηθούν να αναπαράγουμε και να εντοπίσουμε τη βλάβη."
  },
  {
    "question": "Ποιος είναι ένας ασφαλής πρώτος οπτικός έλεγχος;",
    "options": [
      "Ελέγχω συνδέσμους, καλωδίωση και σημάδια υγρασίας ή φθοράς",
      "Τραβάω δυνατά κάθε καλώδιο",
      "Βραχυκυκλώνω CAN-H με CAN-L",
      "Ανοίγω κάθε μονάδα χωρίς λόγο"
    ],
    "correct": 0,
    "feedback": "Ελέγχουμε προσεκτικά για χαλαρούς συνδέσμους, διάβρωση, τριβή ή άλλη εμφανή φθορά."
  },
  {
    "question": "Τι μπορεί να προκαλέσει ένας χαλαρός σύνδεσμος στο δίκτυο;",
    "options": [
      "Διακοπτόμενη επικοινωνία",
      "Μόνιμη αύξηση της χωρητικότητας μπαταρίας",
      "Αλλαγή του αριθμού των μονάδων",
      "Αυτόματη επιδιόρθωση των κωδικών"
    ],
    "correct": 0,
    "feedback": "Η επαφή μπορεί να χάνεται περιστασιακά και να δημιουργεί διακοπτόμενα συμπτώματα."
  },
  {
    "question": "Γιατί συμβουλευόμαστε το διάγραμμα καλωδίωσης του συγκεκριμένου οχήματος;",
    "options": [
      "Για να βρούμε τη διαδρομή, τα σημεία σύνδεσης και τα τμήματα του δικτύου",
      "Για να παρακάμψουμε όλους τους ελέγχους",
      "Για να μαντέψουμε την αντίσταση χωρίς μέτρηση",
      "Για να αλλάξουμε το λογισμικό κάθε μονάδας"
    ],
    "correct": 0,
    "feedback": "Το διάγραμμα δείχνει πώς είναι οργανωμένο το δίκτυο του συγκεκριμένου μοντέλου."
  },
  {
    "question": "Πριν ελέγξουμε αντίσταση σε κύκλωμα, τι πρέπει να ακολουθήσουμε;",
    "options": [
      "Τη διαδικασία και τις προϋποθέσεις μέτρησης του κατασκευαστή",
      "Να μετράμε πάντα με το κύκλωμα ενεργό",
      "Να επιλέγουμε τυχαία ακροδέκτες",
      "Να συνδέουμε το πολύμετρο παράλληλα στη μπαταρία"
    ],
    "correct": 0,
    "feedback": "Οι μετρήσεις αντίστασης γίνονται με τις συνθήκες που ορίζει ο κατασκευαστής, συνήθως σε απενεργοποιημένο κύκλωμα."
  },
  {
    "question": "Ποια είναι τα δύο καλώδια του διαφορικού ζεύγους CAN;",
    "options": [
      "CAN-H και CAN-L",
      "B+ και B−",
      "LIN-H και LIN-L",
      "TX και RX"
    ],
    "correct": 0,
    "feedback": "Το διαφορικό ζεύγος ονομάζεται CAN-H και CAN-L."
  },
  {
    "question": "Τι κάνουμε αν μια μέτρηση δεν συμφωνεί με την αναμενόμενη τιμή;",
    "options": [
      "Ελέγχω ξανά τα σημεία σύνδεσης και τις συνθήκες μέτρησης",
      "Αντικαθιστώ αμέσως όλες τις μονάδες",
      "Αγνοώ τη μέτρηση",
      "Αυξάνω την τάση τροφοδοσίας"
    ],
    "correct": 0,
    "feedback": "Επιβεβαιώνουμε πρώτα ότι η μέτρηση έγινε σωστά και στο κατάλληλο σημείο."
  },
  {
    "question": "Ποια χρήση του πολύμετρου είναι κατάλληλη σε βασικό έλεγχο καλωδίωσης;",
    "options": [
      "Έλεγχος συνέχειας ή αντίστασης σύμφωνα με τη διαδικασία",
      "Καταγραφή της μορφής του σήματος στον χρόνο",
      "Αποκωδικοποίηση μηνυμάτων CAN",
      "Έλεγχος προτεραιότητας ID"
    ],
    "correct": 0,
    "feedback": "Το πολύμετρο μπορεί να ελέγξει συνέχεια ή αντίσταση, αλλά δεν εμφανίζει τη μορφή του σήματος στον χρόνο."
  },
  {
    "question": "Ποιο όργανο εμφανίζει τη μορφή του σήματος CAN στον χρόνο;",
    "options": [
      "Παλμογράφος",
      "Θερμόμετρο",
      "Μανόμετρο",
      "Δοκιμαστική λυχνία"
    ],
    "correct": 0,
    "feedback": "Ο παλμογράφος δείχνει πώς μεταβάλλεται το ηλεκτρικό σήμα στον χρόνο."
  },
  {
    "question": "Γιατί εξετάζουμε ταυτόχρονα CAN-H και CAN-L στον παλμογράφο;",
    "options": [
      "Για να αξιολογήσουμε τη διαφορική συμπεριφορά των δύο γραμμών",
      "Για να μετρήσουμε την πίεση καυσίμου",
      "Για να διαβάσουμε απευθείας τους κωδικούς βλάβης",
      "Για να εντοπίσουμε το χρώμα των καλωδίων"
    ],
    "correct": 0,
    "feedback": "Οι δύο γραμμές λειτουργούν ως ζεύγος και η σύγκρισή τους βοηθά στην αξιολόγηση του σήματος."
  },
  {
    "question": "Τι μπορεί να υποδηλώνουν παραμορφωμένοι ή ασταθείς παλμοί;",
    "options": [
      "Πιθανή διαταραχή στο δίκτυο ή στις συνδέσεις που χρειάζεται περαιτέρω έλεγχο",
      "Ότι το δίκτυο λειτουργεί σίγουρα σωστά",
      "Ότι η μπαταρία είναι πλήρως φορτισμένη",
      "Ότι δεν υπάρχουν μονάδες στο δίκτυο"
    ],
    "correct": 0,
    "feedback": "Η κυματομορφή αποτελεί ένδειξη και πρέπει να συσχετιστεί με τους υπόλοιπους ελέγχους."
  },
  {
    "question": "Τι χρειάζεται πριν συνδέσουμε τα όργανα μέτρησης;",
    "options": [
      "Να επιλέξουμε σωστό σημείο και να ακολουθήσουμε τις οδηγίες του οχήματος",
      "Να τρυπήσουμε οποιοδήποτε καλώδιο",
      "Να συνδέσουμε τους ακροδέκτες χωρίς αναφορά στο διάγραμμα",
      "Να αφαιρέσουμε όλες τις ασφάλειες"
    ],
    "correct": 0,
    "feedback": "Το σωστό σημείο μέτρησης και η προβλεπόμενη διαδικασία προστατεύουν το όχημα και δίνουν αξιόπιστα αποτελέσματα."
  },
  {
    "question": "Γιατί ένα φυσιολογικό σήμα σε ένα σημείο δεν αρκεί πάντα;",
    "options": [
      "Η βλάβη μπορεί να βρίσκεται σε άλλο τμήμα ή σύνδεση του δικτύου",
      "Ο παλμογράφος μετρά μόνο τη θερμοκρασία",
      "Το CAN δεν χρησιμοποιεί καλώδια",
      "Το σήμα αλλάζει πάντα σε κάθε μονάδα"
    ],
    "correct": 0,
    "feedback": "Ένα σημείο ελέγχου δεν αποκλείει πρόβλημα σε διαφορετικό κλάδο ή τμήμα."
  },
  {
    "question": "Πώς μπορεί να βοηθήσει ο τμηματικός έλεγχος του δικτύου;",
    "options": [
      "Να περιορίσει την περιοχή όπου βρίσκεται η βλάβη",
      "Να αλλάξει τις προτεραιότητες των μηνυμάτων",
      "Να αυξήσει τον αριθμό των μονάδων",
      "Να διαγράψει αυτόματα τους κωδικούς"
    ],
    "correct": 0,
    "feedback": "Η απομόνωση και ο έλεγχος τμημάτων βοηθούν να εντοπιστεί σε ποια περιοχή βρίσκεται το πρόβλημα."
  },
  {
    "question": "Αν το πρόβλημα εμφανίζεται μετά την εγκατάσταση πρόσθετης συσκευής, τι ελέγχουμε;",
    "options": [
      "Τη σύνδεση και την επίδραση της πρόσθετης συσκευής στο δίκτυο",
      "Μόνο τα ελαστικά",
      "Την πίεση λαδιού χωρίς άλλα στοιχεία",
      "Την αντικατάσταση όλων των μονάδων"
    ],
    "correct": 0,
    "feedback": "Η χρονική σύνδεση με μια εγκατάσταση είναι χρήσιμη ένδειξη και δικαιολογεί έλεγχο της νέας σύνδεσης."
  },
  {
    "question": "Ποια ένδειξη μπορεί να υποστηρίζει ότι επηρεάζεται κοινή τροφοδοσία;",
    "options": [
      "Πολλές μονάδες εμφανίζουν προβλήματα ταυτόχρονα",
      "Ένας διακόπτης έχει διαφορετικό χρώμα",
      "Μία μόνο λάμπα είναι καμένη",
      "Το όχημα έχει καινούρια ελαστικά"
    ],
    "correct": 0,
    "feedback": "Κοινή τροφοδοσία ή γείωση μπορεί να επηρεάσει περισσότερες από μία μονάδες."
  },
  {
    "question": "Πότε εξετάζουμε ειδικά τη λειτουργία ενός gateway;",
    "options": [
      "Όταν υπάρχουν ενδείξεις προβλήματος επικοινωνίας μεταξύ δικτύων ή πολλών τμημάτων",
      "Όταν χρειάζεται μέτρηση πίεσης ελαστικών",
      "Σε κάθε αλλαγή λαδιών",
      "Μόνο όταν δεν ξεκινά ο κινητήρας"
    ],
    "correct": 0,
    "feedback": "Το gateway συνδέει δίκτυα ή τμήματα και μπορεί να είναι σχετικό όταν η επικοινωνία μεταξύ τους επηρεάζεται."
  },
  {
    "question": "Τι συμπέρασμα βγάζουμε από κωδικούς που εμφανίστηκαν πρώτοι;",
    "options": [
      "Είναι χρήσιμα στοιχεία για τη σειρά και τις συνθήκες της βλάβης",
      "Αποδεικνύουν πάντα ποια μονάδα είναι χαλασμένη",
      "Πρέπει να διαγραφούν χωρίς καταγραφή",
      "Δεν έχουν καμία διαγνωστική αξία"
    ],
    "correct": 0,
    "feedback": "Η σειρά εμφάνισης μπορεί να βοηθήσει, αλλά δεν αποδεικνύει μόνη της την αιτία."
  },
  {
    "question": "Γιατί αποφεύγουμε να αντικαταστήσουμε μονάδα μόνο από έναν κωδικό επικοινωνίας;",
    "options": [
      "Επειδή η αιτία μπορεί να είναι τροφοδοσία, καλωδίωση, σύνδεση ή άλλο τμήμα του δικτύου",
      "Επειδή οι μονάδες δεν χαλάνε ποτέ",
      "Επειδή οι κωδικοί αφορούν μόνο τα φρένα",
      "Επειδή το CAN λειτουργεί χωρίς καλώδια"
    ],
    "correct": 0,
    "feedback": "Πρώτα ελέγχουμε τις πιθανές αιτίες στο κύκλωμα και στο δίκτυο πριν καταδικάσουμε μια μονάδα."
  },
  {
    "question": "Πότε δικαιολογείται η αντικατάσταση μιας μονάδας;",
    "options": [
      "Όταν οι έλεγχοι και η προβλεπόμενη διαδικασία δείξουν ότι αυτή είναι η αιτία",
      "Όταν εμφανιστεί οποιοσδήποτε κωδικός",
      "Όταν η μονάδα είναι η πιο εύκολη να αφαιρεθεί",
      "Πριν γίνει μέτρηση ή οπτικός έλεγχος"
    ],
    "correct": 0,
    "feedback": "Η αντικατάσταση πρέπει να βασίζεται σε τεκμηριωμένη διάγνωση."
  },
  {
    "question": "Μετά την επισκευή, ποιο είναι το επόμενο σωστό βήμα;",
    "options": [
      "Ελέγχω ξανά το σύστημα και επιβεβαιώνω ότι το σύμπτωμα δεν επανέρχεται",
      "Παραδίδω το όχημα χωρίς επανέλεγχο",
      "Αποσυνδέω μόνιμα το gateway",
      "Διαγράφω τα στοιχεία χωρίς δοκιμή"
    ],
    "correct": 0,
    "feedback": "Ο επανέλεγχος επιβεβαιώνει ότι η επισκευή αντιμετώπισε το πρόβλημα."
  },
  {
    "question": "Αν ο ίδιος κωδικός επιστρέψει μετά την επισκευή, τι κάνουμε;",
    "options": [
      "Συνεχίζουμε τη διάγνωση με βάση τα νέα στοιχεία",
      "Αλλάζουμε τυχαία δεύτερη μονάδα",
      "Θεωρούμε ότι το διαγνωστικό είναι πάντα λάθος",
      "Αφαιρούμε την ασφάλεια του δικτύου"
    ],
    "correct": 0,
    "feedback": "Η επανεμφάνιση σημαίνει ότι χρειάζεται να επανεξετάσουμε τη διάγνωση και τα αποτελέσματα."
  },
  {
    "question": "Ποια είναι η πιο ολοκληρωμένη σειρά εργασίας;",
    "options": [
      "Επιβεβαίωση συμπτώματος, καταγραφή, έλεγχοι και μετρήσεις, επισκευή, επαλήθευση",
      "Αντικατάσταση μονάδας, διαγραφή κωδικών, παράδοση",
      "Διαγραφή κωδικών, παράκαμψη καλωδίωσης, δοκιμή",
      "Μέτρηση χωρίς διάγραμμα και αλλαγή εξαρτημάτων"
    ],
    "correct": 0,
    "feedback": "Η συστηματική σειρά συνδέει το σύμπτωμα με μετρήσεις, τεκμηριωμένη επισκευή και τελικό έλεγχο."
  },
  {
    "question": "Γιατί συγκρίνουμε με τις προδιαγραφές του συγκεκριμένου μοντέλου;",
    "options": [
      "Οι τιμές και η διάταξη μπορεί να διαφέρουν ανά όχημα",
      "Όλα τα οχήματα έχουν ακριβώς ίδια καλωδίωση",
      "Οι προδιαγραφές αφορούν μόνο το χρώμα",
      "Για να αποφύγουμε τη χρήση οργάνων"
    ],
    "correct": 0,
    "feedback": "Ακολουθούμε τα στοιχεία του κατασκευαστή για το συγκεκριμένο όχημα και τη συγκεκριμένη διαμόρφωση."
  },
  {
    "question": "Τι σημαίνει πρακτικά «τεκμηριώνω τη διάγνωση»;",
    "options": [
      "Καταγράφω ευρήματα, μετρήσεις και το αποτέλεσμα της επισκευής",
      "Αλλάζω εξαρτήματα χωρίς σημειώσεις",
      "Κρατώ μόνο τον τελευταίο κωδικό",
      "Βασίζομαι αποκλειστικά στη μνήμη μου"
    ],
    "correct": 0,
    "feedback": "Η καταγραφή των ευρημάτων επιτρέπει να αιτιολογηθεί η επισκευή και να γίνει σωστός επανέλεγχος."
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
    { title: "Διαδικασία και κωδικοί βλάβης", meta: "σύμπτωμα · καταγραφή · αρχικός έλεγχος", start: 0, end: 6 },
    { title: "Οπτικός και ηλεκτρικός έλεγχος", meta: "συνδέσεις · καλωδίωση · τροφοδοσία · γείωση", start: 6, end: 12 },
    { title: "Μετρήσεις και κυματομορφή", meta: "CAN-H · CAN-L · πολύμετρο · παλμογράφος", start: 12, end: 18 },
    { title: "Εντοπισμός της περιοχής βλάβης", meta: "διάγραμμα · τμηματικός έλεγχος · gateway", start: 18, end: 24 },
    { title: "Επισκευή και επαλήθευση", meta: "τεκμηρίωση · επανέλεγχος · επιβεβαίωση", start: 24, end: 30 },
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
      ? "Τεστ Μαθήματος 6"
      : "CAN: Βλάβες και διάγνωση · Διαφάνεια " + currentSlide.textContent;
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
