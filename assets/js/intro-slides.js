const deck = document.querySelector("[data-intro-deck]");

if (deck) {
  const slides = [
    "Γνωριμία με το μάθημα",
    "Γιατί υπάρχει αυτό το μάθημα",
    "Το σύγχρονο όχημα είναι ένα δίκτυο",
    "Η πορεία των 15 μαθημάτων",
    "Ενότητα 1 — Βασικές αρχές",
    "Ενότητα 2 — CAN Bus",
    "Ενότητα 3 — Άλλα δίκτυα και δεδομένα",
    "Ενότητα 4 — OBD και διάγνωση",
    "Ενότητα 5 — Συνδεδεμένο όχημα",
    "Πώς θα δουλεύουμε κάθε εβδομάδα",
    "Τι θα μπορείτε να κάνετε",
    "Τι γνωρίζουμε ήδη;",
  ];

  const quizData = [
    {
      question: "Ποιος είναι ο βασικός σκοπός του μαθήματος;",
      options: ["Να απομνημονεύσουμε όλες τις μάρκες αυτοκινήτων", "Να κατανοήσουμε πώς επικοινωνούν οι ηλεκτρονικές μονάδες και πώς γίνεται η διάγνωση", "Να μάθουμε μόνο μηχανικές επισκευές κινητήρα", "Να αντικαθιστούμε κάθε ECU που εμφανίζει βλάβη"],
      correct: 1,
      feedback: "Το μάθημα συνδέει τη λειτουργία των δικτύων με τη σωστή και μεθοδική διάγνωση.",
    },
    {
      question: "Ποια περιγραφή ταιριάζει καλύτερα σε ένα δίκτυο οχήματος;",
      options: ["Μία μόνο γραμμή τροφοδοσίας για όλα τα φώτα", "Ένα σύστημα ανταλλαγής δεδομένων ανάμεσα σε ηλεκτρονικές μονάδες", "Ένα σύνολο αισθητήρων χωρίς ECU", "Μόνο η σύνδεση του διαγνωστικού με την πρίζα OBD"],
      correct: 1,
      feedback: "Το δίκτυο επιτρέπει σε πολλές ECU να στέλνουν και να λαμβάνουν πληροφορίες με κοινούς κανόνες.",
    },
    {
      question: "Ο αισθητήρας θερμοκρασίας ψυκτικού τι κάνει πρώτα;",
      options: ["Μετρά μια φυσική ποσότητα και τη μετατρέπει σε ηλεκτρικό σήμα", "Ανάβει απευθείας τον ανεμιστήρα χωρίς καμία ECU", "Αποθηκεύει όλους τους κωδικούς βλάβης", "Τροφοδοτεί με ρεύμα το ABS"],
      correct: 0,
      feedback: "Ο αισθητήρας μετρά. Η ECU επεξεργάζεται τη μέτρηση και αποφασίζει την επόμενη ενέργεια.",
    },
    {
      question: "Ποιος είναι ο βασικός ρόλος μιας ECU;",
      options: ["Να λειτουργεί μόνο ως ασφάλεια", "Να επεξεργάζεται δεδομένα και να δίνει εντολές", "Να αντικαθιστά όλους τους αισθητήρες", "Να αυξάνει πάντα την τάση της μπαταρίας"],
      correct: 1,
      feedback: "Η ECU λαμβάνει εισόδους, εφαρμόζει τη λογική του προγράμματός της και ελέγχει εξόδους.",
    },
    {
      question: "Ποιο από τα παρακάτω είναι ενεργοποιητής;",
      options: ["Αισθητήρας στροφών", "Αισθητήρας θερμοκρασίας", "Ηλεκτρικός ανεμιστήρας ψυγείου", "Διαγνωστική πρίζα"],
      correct: 2,
      feedback: "Ο ενεργοποιητής εκτελεί μια εντολή. Παραδείγματα είναι ο ανεμιστήρας, ένα μπεκ, ένα ρελέ ή ένα μοτέρ παραθύρου.",
    },
    {
      question: "Ποια σειρά είναι σωστή στο παράδειγμα αυτόματου ανεμιστήρα;",
      options: ["Ανεμιστήρας → ECU → αισθητήρας", "ECU → αισθητήρας → οδηγός", "Αισθητήρας → ECU → ανεμιστήρας", "OBD → μπαταρία → αισθητήρας"],
      correct: 2,
      feedback: "Η βασική αλυσίδα είναι μέτρηση, απόφαση, εκτέλεση: αισθητήρας → ECU → ενεργοποιητής.",
    },
    {
      question: "Γιατί οι ECU ανταλλάσσουν πληροφορίες αντί να έχουν όλες δικό τους ίδιο αισθητήρα;",
      options: ["Για να αυξηθεί η καλωδίωση", "Για να χρησιμοποιούν κοινά δεδομένα με λιγότερα καλώδια και εξαρτήματα", "Για να μην χρειάζονται πρωτόκολλα", "Για να λειτουργεί μόνο μία ECU κάθε φορά"],
      correct: 1,
      feedback: "Η κοινή χρήση μιας μέτρησης μειώνει την περιττή καλωδίωση και επιτρέπει συνεργασία πολλών συστημάτων.",
    },
    {
      question: "Παράδειγμα: το ABS γνωρίζει την ταχύτητα των τροχών. Ποια άλλη μονάδα μπορεί να αξιοποιήσει αυτή την πληροφορία;",
      options: ["Ο πίνακας οργάνων για την ένδειξη ταχύτητας", "Μόνο η κόρνα", "Καμία άλλη μονάδα", "Μόνο ο φορτιστής μπαταρίας του συνεργείου"],
      correct: 0,
      feedback: "Η ίδια πληροφορία μπορεί να μεταδοθεί στο καντράν, στο ESP, στην ECU κινητήρα ή σε άλλα συστήματα.",
    },
    {
      question: "Παράδειγμα: ο οδηγός στρίβει το τιμόνι σε χαμηλή ταχύτητα. Τι μπορεί να κάνει το EPS;",
      options: ["Να μετρήσει μόνο τη θερμοκρασία κινητήρα", "Να υπολογίσει και να προσφέρει ηλεκτρική υποβοήθηση στο τιμόνι", "Να κλειδώσει όλες τις πόρτες", "Να διαγράψει τους κωδικούς OBD"],
      correct: 1,
      feedback: "Το EPS είναι η ηλεκτρική υποβοήθηση διεύθυνσης και προσαρμόζει τη βοήθεια ανάλογα με τις συνθήκες.",
    },
    {
      question: "Η BCM (Body Control Module) σχετίζεται συνήθως με ποια λειτουργία;",
      options: ["Έλεγχο φώτων, κλειδαριών, υαλοκαθαριστήρων και παραθύρων", "Μηχανική λίπανση κινητήρα", "Ζυγοστάθμιση τροχών", "Μέτρηση συμπίεσης κυλίνδρων"],
      correct: 0,
      feedback: "Η BCM είναι η μονάδα ελέγχου αμαξώματος και συντονίζει πολλές λειτουργίες άνεσης και αμαξώματος.",
    },
    {
      question: "Τι εννοούμε με τον όρο κοινός δίαυλος επικοινωνίας;",
      options: ["Κοινή διαδρομή από την οποία περνούν μηνύματα πολλών μονάδων", "Κοινό σωλήνα καυσίμου", "Ξεχωριστό καλώδιο για κάθε πιθανό ζεύγος ECU", "Μία δεύτερη μπαταρία για τα ηλεκτρονικά"],
      correct: 0,
      feedback: "Ο δίαυλος είναι η κοινή διαδρομή μεταφοράς δεδομένων, όπως ένας δρόμος που χρησιμοποιούν πολλά οχήματα.",
    },
    {
      question: "Τι καθορίζει ένα πρωτόκολλο επικοινωνίας;",
      options: ["Το χρώμα του αυτοκινήτου", "Τους κανόνες με τους οποίους σχηματίζονται, μεταδίδονται και ελέγχονται τα μηνύματα", "Μόνο τη θέση της πρίζας OBD", "Τη μηχανική σχέση μετάδοσης"],
      correct: 1,
      feedback: "Το πρωτόκολλο είναι η κοινή “γλώσσα” και οι κανόνες που πρέπει να ακολουθούν όλες οι μονάδες.",
    },
    {
      question: "Τι σημαίνουν τα αρχικά CAN;",
      options: ["Central Automotive Number", "Controller Area Network", "Computer Access Node", "Control Actuator Navigation"],
      correct: 1,
      feedback: "CAN σημαίνει Controller Area Network και είναι βασικό δίκτυο επικοινωνίας μεταξύ ECU.",
    },
    {
      question: "Δύο μηνύματα ζητούν να μεταδοθούν ταυτόχρονα στο CAN. Ποιο πρέπει να έχει μεγαλύτερη προτεραιότητα;",
      options: ["Η αλλαγή ραδιοφωνικού σταθμού", "Η πληροφορία ολίσθησης τροχού από το ABS", "Η ρύθμιση φωτισμού καμπίνας", "Η αποθήκευση αγαπημένου σταθμού"],
      correct: 1,
      feedback: "Τα μηνύματα που σχετίζονται με ασφάλεια και άμεσο έλεγχο πρέπει να εξυπηρετούνται πριν από λειτουργίες άνεσης.",
    },
    {
      question: "Πού ταιριάζει συνήθως ένα απλό και οικονομικό δίκτυο LIN;",
      options: ["Σε διακόπτες, καθρέφτες ή μοτέρ παραθύρων", "Στη μετάδοση εικόνας από πολλές κάμερες υψηλής ανάλυσης", "Στην κύρια επικοινωνία πολύ υψηλής ταχύτητας όλων των ECU", "Σε υδραυλικό κύκλωμα φρένων χωρίς ηλεκτρονικά"],
      correct: 0,
      feedback: "Το LIN χρησιμοποιείται συχνά σε τοπικές, απλούστερες λειτουργίες όπου δεν απαιτείται η ταχύτητα του CAN ή του Ethernet.",
    },
    {
      question: "Τα SAE J1850 και PCI Bus τα συναντάμε κυρίως ως τι;",
      options: ["Παλαιότερες τεχνολογίες επικοινωνίας σε οχήματα συγκεκριμένων κατασκευαστών", "Σύγχρονες γραμμές καυσίμου", "Αισθητήρες πίεσης ελαστικών", "Τύπους μηχανικού κιβωτίου"],
      correct: 0,
      feedback: "Είναι παλαιότερα συστήματα/πρωτόκολλα που έχουν αξία στη διάγνωση οχημάτων προηγούμενων γενεών.",
    },
    {
      question: "Ποιο δίκτυο συνδέθηκε ιδιαίτερα με συστήματα πολυμέσων και ήχου;",
      options: ["MOST", "LIN", "I²C", "K-line τροφοδοσίας"],
      correct: 0,
      feedback: "Το MOST χρησιμοποιήθηκε για μετάδοση δεδομένων πολυμέσων, όπως ήχος και εικόνα.",
    },
    {
      question: "Ένα όχημα έχει πολλές κάμερες και μεταφέρει μεγάλο όγκο δεδομένων. Ποια τεχνολογία είναι κατάλληλη;",
      options: ["Automotive Ethernet", "Μόνο ένας απλός διακόπτης", "Μία αναλογική λυχνία", "Μόνο LIN χαμηλής ταχύτητας"],
      correct: 0,
      feedback: "Το Automotive Ethernet προσφέρει υψηλό ρυθμό μετάδοσης για κάμερες, ADAS και άλλα δεδομένα μεγάλου όγκου.",
    },
    {
      question: "Τι μας προσφέρει το OBD στο συνεργείο;",
      options: ["Πρόσβαση σε κωδικούς βλάβης και δεδομένα λειτουργίας", "Αυτόματη επισκευή κάθε βλάβης", "Μόνο φόρτιση της μπαταρίας", "Μηχανική ευθυγράμμιση τροχών"],
      correct: 0,
      feedback: "Το OBD είναι εργαλείο πρόσβασης σε διαγνωστικές πληροφορίες· δεν αντικαθιστά τη σκέψη και τους ελέγχους.",
    },
    {
      question: "Τι είναι ένας DTC;",
      options: ["Κωδικός διαγνωστικής βλάβης που δείχνει περιοχή ή συνθήκη προς έλεγχο", "Εντολή για άμεση αντικατάσταση ECU", "Τύπος καλωδίου CAN", "Κωδικός χρώματος αμαξώματος"],
      correct: 0,
      feedback: "Ο DTC είναι αφετηρία διάγνωσης. Δεν αποδεικνύει μόνος του ποιο εξάρτημα πρέπει να αντικατασταθεί.",
    },
    {
      question: "Στο live data η θερμοκρασία ψυκτικού δείχνει −40 °C με ζεστό κινητήρα. Ποιο είναι λογικό συμπέρασμα;",
      options: ["Η ένδειξη είναι φυσιολογική", "Χρειάζεται έλεγχος αισθητήρα, φίς και καλωδίωσης", "Πρέπει να αλλαχθεί αμέσως η ECU", "Το ABS έχει σίγουρα βλάβη"],
      correct: 1,
      feedback: "Μια παράλογη ζωντανή τιμή μάς κατευθύνει σε έλεγχο του αισθητήρα και της ηλεκτρικής του διαδρομής.",
    },
    {
      question: "Τι είναι το Freeze Frame;",
      options: ["Στιγμιότυπο τιμών τη στιγμή που καταγράφηκε μια βλάβη", "Φωτογραφία του οχήματος από κάμερα", "Πάγωμα της οθόνης του διαγνωστικού", "Μόνιμη διαγραφή των DTC"],
      correct: 0,
      feedback: "Το Freeze Frame βοηθά να δούμε τις συνθήκες λειτουργίας που υπήρχαν όταν εμφανίστηκε ο κωδικός.",
    },
    {
      question: "Το διαγνωστικό γράφει “καμία επικοινωνία με ABS”. Ποιος έλεγχος πρέπει να γίνει νωρίς;",
      options: ["Τροφοδοσία, γείωση, ασφάλεια, φίς και γραμμές δικτύου του ABS", "Αλλαγή ελαστικών", "Αντικατάσταση ραδιοφώνου", "Βαφή της μονάδας"],
      correct: 0,
      feedback: "Χωρίς σωστή τροφοδοσία ή γείωση η μονάδα δεν μπορεί να επικοινωνήσει, ακόμη κι αν το δίκτυο είναι καλό.",
    },
    {
      question: "Γιατί δεν αντικαθιστούμε αμέσως μια ECU όταν εμφανίζεται κωδικός επικοινωνίας;",
      options: ["Επειδή μπορεί να φταίνε τροφοδοσία, γείωση, καλωδίωση, φίς ή άλλη μονάδα", "Επειδή οι ECU δεν χαλάνε ποτέ", "Επειδή το διαγνωστικό είναι πάντα λάθος", "Επειδή δεν επιτρέπεται να ελέγχουμε καλώδια"],
      correct: 0,
      feedback: "Η σωστή διάγνωση εξετάζει ολόκληρη τη διαδρομή πριν οδηγήσει σε ακριβή αντικατάσταση εξαρτήματος.",
    },
    {
      question: "Τι χαρακτηρίζει ένα συνδεδεμένο όχημα;",
      options: ["Μπορεί να ανταλλάσσει δεδομένα με εξωτερικά συστήματα ή υπηρεσίες", "Δεν διαθέτει καμία ECU", "Λειτουργεί μόνο χωρίς αισθητήρες", "Δεν χρειάζεται προστασία δεδομένων"],
      correct: 0,
      feedback: "Το συνδεδεμένο όχημα επικοινωνεί πέρα από το εσωτερικό του δίκτυο, για υπηρεσίες, ενημερώσεις ή τηλεματική.",
    },
    {
      question: "Παράδειγμα: μια κάμερα ADAS στέλνει εικόνα για αναγνώριση λωρίδας. Τι απαιτείται ιδιαίτερα;",
      options: ["Μεγάλο εύρος ζώνης και έγκαιρη μετάδοση", "Μόνο ένας μηχανικός διακόπτης", "Καμία προστασία δεδομένων", "Μικρότερη ταχύτητα από κάθε άλλο σύστημα"],
      correct: 0,
      feedback: "Η εικόνα έχει μεγάλο όγκο δεδομένων και οι λειτουργίες υποβοήθησης απαιτούν αξιόπιστη, έγκαιρη επικοινωνία.",
    },
    {
      question: "Γιατί η κυβερνοασφάλεια αφορά και τον τεχνικό οχημάτων;",
      options: ["Επειδή τα συνδεδεμένα συστήματα και οι ενημερώσεις πρέπει να προστατεύονται από μη εξουσιοδοτημένη πρόσβαση", "Επειδή αντικαθιστά τον ηλεκτρικό έλεγχο", "Επειδή αφορά μόνο το χρώμα της οθόνης", "Επειδή καταργεί την ανάγκη για διάγνωση"],
      correct: 0,
      feedback: "Όσο αυξάνονται οι εξωτερικές συνδέσεις, τόσο σημαντικότερες γίνονται η ασφαλής πρόσβαση και οι σωστές διαδικασίες.",
    },
    {
      question: "Ποια σειρά ταιριάζει στον τρόπο εργασίας του μαθήματος;",
      options: ["Θεωρία → παράδειγμα → εργαστηριακή εφαρμογή → έλεγχος κατανόησης", "Τεστ χωρίς διδασκαλία → αποστήθιση", "Αντικατάσταση εξαρτημάτων χωρίς μετρήσεις", "Μόνο διάβασμα ορισμών"],
      correct: 0,
      feedback: "Κάθε θέμα συνδέεται με εφαρμογή και έλεγχο κατανόησης, ώστε η θεωρία να αποκτά πρακτικό νόημα.",
    },
    {
      question: "Ποιο από τα παρακάτω είναι αναμενόμενο μαθησιακό αποτέλεσμα;",
      options: ["Να αναγνωρίζεις βασικά δίκτυα και να ακολουθείς λογική διαγνωστικών ελέγχων", "Να μαντεύεις ποια ECU φταίει", "Να αλλάζεις εξαρτήματα χωρίς διάγραμμα", "Να αγνοείς τους κανόνες ασφαλείας"],
      correct: 0,
      feedback: "Στόχος είναι να μπορείς να εξηγείς, να αναγνωρίζεις, να μετράς και να διαγιγνώσκεις με σειρά.",
    },
    {
      question: "Παράδειγμα: ένας αισθητήρας τροχού στέλνει σωστή μέτρηση στο ABS και αυτή εμφανίζεται και στο καντράν. Τι δείχνει το παράδειγμα;",
      options: ["Μια πληροφορία μπορεί να παραχθεί σε ένα σημείο και να αξιοποιηθεί από πολλές μονάδες μέσω δικτύου", "Κάθε μονάδα χρειάζεται πάντα δικό της αισθητήρα", "Το δίκτυο μεταφέρει μόνο ρεύμα", "Η BCM είναι αισθητήρας ταχύτητας"],
      correct: 0,
      feedback: "Αυτό είναι το βασικό πλεονέκτημα της δικτύωσης: κοινή χρήση χρήσιμων δεδομένων από διαφορετικά συστήματα.",
    },
  ];

  const image = deck.querySelector("[data-slide-image]");
  const title = deck.querySelector("[data-slide-title]");
  const current = deck.querySelector("[data-slide-current]");
  const slideCounter = deck.querySelector(".intro-slide-counter");
  const previousButtons = [...deck.querySelectorAll("[data-slide-prev]")];
  const nextButtons = [...deck.querySelectorAll("[data-slide-next]")];
  const dotsContainer = deck.querySelector("[data-slide-dots]");
  const frame = deck.querySelector(".intro-slide-frame");
  const slidesView = deck.querySelector("[data-intro-slides-view]");
  const quizView = deck.querySelector("[data-intro-quiz-view]");
  const quizToggle = deck.querySelector("[data-intro-test-toggle]");
  const quizToggleLabel = deck.querySelector("[data-intro-test-toggle-label]");
  let currentIndex = 0;
  let touchStartX = 0;

  const dots = slides.map((slideTitle, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = String(index + 1);
    button.setAttribute("aria-label", `Διαφάνεια ${index + 1}: ${slideTitle}`);
    button.addEventListener("click", () => showSlide(index));
    dotsContainer.append(button);
    return button;
  });

  const preloadAdjacent = () => {
    [currentIndex - 1, currentIndex + 1]
      .filter((index) => index >= 0 && index < slides.length)
      .forEach((index) => {
        const preload = new Image();
        preload.src = `assets/slides/intro/slide-${index + 1}.webp`;
      });
  };

  function showSlide(index, updateHash = true) {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    const slideNumber = currentIndex + 1;
    image.classList.add("is-changing");
    image.src = `assets/slides/intro/slide-${slideNumber}.webp`;
    image.alt = `Διαφάνεια ${slideNumber} από ${slides.length}: ${slides[currentIndex]}`;
    title.textContent = slides[currentIndex];
    current.textContent = String(slideNumber);
    previousButtons.forEach((button) => { button.disabled = currentIndex === 0; });
    nextButtons.forEach((button) => { button.disabled = currentIndex === slides.length - 1; });
    dots.forEach((button, dotIndex) => {
      const active = dotIndex === currentIndex;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-current", active ? "true" : "false");
    });
    dots[currentIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    if (updateHash && quizView.hidden) history.replaceState(null, "", `#slide-${slideNumber}`);
    preloadAdjacent();
  }

  const showQuiz = (open, updateHash = true) => {
    slidesView.hidden = open;
    quizView.hidden = !open;
    deck.classList.toggle("is-quiz-mode", open);
    quizToggle.setAttribute("aria-expanded", String(open));
    quizToggleLabel.textContent = open ? "Επιστροφή στις διαφάνειες" : "Τεστ 30 ερωτήσεων";
    slideCounter.hidden = open;
    title.textContent = open ? "Τεστ εισαγωγικού μαθήματος" : slides[currentIndex];
    if (updateHash) history.replaceState(null, "", open ? "#test" : `#slide-${currentIndex + 1}`);
  };

  image.addEventListener("load", () => image.classList.remove("is-changing"));
  previousButtons.forEach((button) => button.addEventListener("click", () => showSlide(currentIndex - 1)));
  nextButtons.forEach((button) => button.addEventListener("click", () => showSlide(currentIndex + 1)));
  quizToggle.addEventListener("click", () => showQuiz(quizView.hidden));

  document.addEventListener("keydown", (event) => {
    if (!quizView.hidden) return;
    if (event.key === "ArrowLeft") showSlide(currentIndex - 1);
    if (event.key === "ArrowRight") showSlide(currentIndex + 1);
    if (event.key === "Home") showSlide(0);
    if (event.key === "End") showSlide(slides.length - 1);
  });

  frame.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.clientX || 0;
  }, { passive: true });
  frame.addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0]?.clientX || 0;
    const distance = touchEndX - touchStartX;
    if (Math.abs(distance) < 45) return;
    showSlide(currentIndex + (distance < 0 ? 1 : -1));
  }, { passive: true });

  const quiz = deck.querySelector("[data-intro-quiz]");
  const questionsContainer = deck.querySelector("[data-intro-quiz-questions]");
  const moduleData = [
    { title: "Αισθητήρας – ECU – ενεργοποιητής", meta: "Βασική λογική λειτουργίας", start: 0, end: 6 },
    { title: "Δίκτυο και κοινά δεδομένα", meta: "ABS • EPS • BCM • δίαυλος", start: 6, end: 12 },
    { title: "Πρωτόκολλα επικοινωνίας", meta: "CAN • LIN • J1850 • MOST • Ethernet", start: 12, end: 18 },
    { title: "OBD και μεθοδική διάγνωση", meta: "DTC • live data • Freeze Frame • έλεγχοι", start: 18, end: 24 },
    { title: "Εφαρμογή και σύγχρονο όχημα", meta: "Συνδεσιμότητα • ασφάλεια • μαθησιακοί στόχοι", start: 24, end: 30 },
  ];
  const letters = ["Α", "Β", "Γ", "Δ"];

  moduleData.forEach((module, moduleIndex) => {
    const section = document.createElement("section");
    section.className = "intro-quiz-module";
    section.setAttribute("aria-labelledby", `intro-module-${moduleIndex + 1}`);
    const heading = document.createElement("header");
    heading.className = "intro-quiz-module-heading";
    heading.innerHTML = `<span>${moduleIndex + 1}</span><div><h3 id="intro-module-${moduleIndex + 1}">${module.title}</h3><p>${module.meta}</p></div>`;
    section.append(heading);

    quizData.slice(module.start, module.end).forEach((item, localIndex) => {
      const index = module.start + localIndex;
      const fieldset = document.createElement("fieldset");
      fieldset.className = "intro-quiz-question";
      fieldset.dataset.introQuestion = "";
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
        input.name = `intro-q${index + 1}`;
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
      feedback.dataset.introFeedback = "";
      feedback.textContent = item.feedback;
      feedback.hidden = true;
      fieldset.append(feedback);
      section.append(fieldset);
    });
    questionsContainer.append(section);
  });

  deck.querySelector("[data-intro-quiz-loading]")?.remove();
  const questions = [...deck.querySelectorAll("[data-intro-question]")];
  const modules = [...deck.querySelectorAll(".intro-quiz-module")];
  const mobileQuery = window.matchMedia("(max-width: 700px)");
  const previousQuestion = deck.querySelector("[data-intro-question-prev]");
  const nextQuestion = deck.querySelector("[data-intro-question-next]");
  const questionPosition = deck.querySelector("[data-intro-question-position]");
  const quizScroll = deck.querySelector("[data-intro-quiz-scroll]");
  const warning = deck.querySelector("[data-intro-quiz-warning]");
  const result = deck.querySelector("[data-intro-quiz-result]");
  const scoreTarget = deck.querySelector("[data-intro-score]");
  const gradeTarget = deck.querySelector("[data-intro-grade]");
  const percentageTarget = deck.querySelector("[data-intro-percentage]");
  const statusTarget = deck.querySelector("[data-intro-result-status]");
  const resultMessage = deck.querySelector("[data-intro-result-message]");
  const progressCurrent = deck.querySelector("[data-intro-progress-current]");
  const progressBar = deck.querySelector("[data-intro-progress-bar]");
  const resetButton = deck.querySelector("[data-intro-quiz-reset]");
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
    progressBar.style.width = `${Math.round((answered / questions.length) * 100)}%`;
  };

  previousQuestion.addEventListener("click", () => showMobileQuestion(mobileQuestionIndex - 1, true));
  nextQuestion.addEventListener("click", () => showMobileQuestion(mobileQuestionIndex + 1, true));
  mobileQuery.addEventListener?.("change", () => showMobileQuestion(mobileQuestionIndex));
  quiz.addEventListener("change", (event) => {
    event.target.closest("[data-intro-question]")?.classList.remove("needs-answer");
    warning.hidden = true;
    updateProgress();
  });

  quiz.addEventListener("submit", (event) => {
    event.preventDefault();
    const unanswered = questions.find((question) => !question.querySelector("input:checked"));
    if (unanswered) {
      warning.hidden = false;
      unanswered.classList.add("needs-answer");
      if (mobileQuery.matches) showMobileQuestion(questions.indexOf(unanswered), true);
      else unanswered.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    let score = 0;
    warning.hidden = true;
    questions.forEach((question) => {
      const selected = question.querySelector("input:checked");
      const correct = question.dataset.correct;
      const isCorrect = selected?.value === correct;
      const correctInput = question.querySelector(`input[value="${correct}"]`);
      question.classList.toggle("is-correct", isCorrect);
      question.classList.toggle("is-incorrect", !isCorrect);
      selected?.closest("label")?.classList.add("selected-answer");
      correctInput?.closest("label")?.classList.add("correct-answer");
      question.querySelector("[data-intro-feedback]").hidden = false;
      question.querySelectorAll("input").forEach((input) => { input.disabled = true; });
      if (isCorrect) score += 1;
    });

    const percentage = Math.round((score / questions.length) * 100);
    const grade = ((score / questions.length) * 20).toFixed(1).replace(".0", "");
    scoreTarget.textContent = `${score}/${questions.length}`;
    gradeTarget.textContent = `${grade}/20`;
    percentageTarget.textContent = `${percentage}%`;
    result.classList.toggle("is-pass", score >= 24);
    result.classList.toggle("is-review", score < 24);
    if (score >= 27) {
      statusTarget.textContent = "Εξαιρετική επίδοση";
      resultMessage.textContent = "Έχεις πολύ καθαρή εικόνα των βασικών εννοιών και των πρακτικών παραδειγμάτων.";
    } else if (score >= 24) {
      statusTarget.textContent = "Επιτυχής ολοκλήρωση";
      resultMessage.textContent = "Πέρασες το τεστ. Δες τις εξηγήσεις στις λανθασμένες απαντήσεις για να κλείσεις τα κενά.";
    } else if (score >= 18) {
      statusTarget.textContent = "Χρειάζεται στοχευμένη επανάληψη";
      resultMessage.textContent = "Επανέλαβε τις ενότητες στις οποίες έκανες λάθη και δοκίμασε ξανά.";
    } else {
      statusTarget.textContent = "Χρειάζεται επανάληψη της παρουσίασης";
      resultMessage.textContent = "Δες ξανά τις 12 διαφάνειες και χρησιμοποίησε την ανατροφοδότηση κάθε ερώτησης.";
    }
    result.hidden = false;
    resetButton.hidden = false;
    submitButton.disabled = true;
  });

  resetButton.addEventListener("click", () => {
    quiz.reset();
    questions.forEach((question) => {
      question.classList.remove("is-correct", "is-incorrect", "needs-answer");
      question.querySelectorAll("label").forEach((label) => label.classList.remove("selected-answer", "correct-answer"));
      question.querySelector("[data-intro-feedback]").hidden = true;
      question.querySelectorAll("input").forEach((input) => { input.disabled = false; });
    });
    result.hidden = true;
    resetButton.hidden = true;
    submitButton.disabled = false;
    warning.hidden = true;
    scoreTarget.textContent = "0/30";
    gradeTarget.textContent = "0/20";
    percentageTarget.textContent = "0%";
    statusTarget.textContent = "";
    resultMessage.textContent = "";
    updateProgress();
    showMobileQuestion(0);
  });

  const hashSlide = Number(window.location.hash.match(/^#slide-(\d+)$/)?.[1]);
  showSlide(Number.isInteger(hashSlide) ? hashSlide - 1 : 0, false);
  showMobileQuestion(0);
  showQuiz(window.location.hash === "#test", false);
}
