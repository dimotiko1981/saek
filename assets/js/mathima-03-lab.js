const lessonThreeVehicles = {
  focus: {
    code: "FRS",
    name: "Ford Focus RS",
    image: "assets/images/lab-m3-ford-focus-rs.webp",
    alt: "Μπλε Ford Focus RS σε σκούρο φόντο",
    ecu: "ECU ΚΙΝΗΤΗΡΑ",
    abs: "ABS/ESC",
    eps: "EPS",
    gateway: "GATEWAY",
    body: "BCM",
    display: "ΟΡΓΑΝΑ",
    featureNode: "AWD CTRL",
    inputNode: "ΔΙΑΚΟΠΤΗΣ MODE",
    featureName: "τετρακίνηση AWD και τα προγράμματα οδήγησης",
    featureComplaint: "Το πρόγραμμα οδήγησης επιλέγεται, αλλά η απόκριση της τετρακίνησης και του ESC δεν αλλάζει.",
    localModule: "AWD CTRL",
    localEffect: "δεν ενεργοποιείται σωστά η επιλεγμένη λειτουργία οδήγησης",
  },
  civic: {
    code: "CTR",
    name: "Honda Civic Type R FL5",
    image: "assets/images/lab-m3-honda-civic-type-r.webp",
    alt: "Λευκό Honda Civic Type R FL5 σε σκούρο φόντο",
    ecu: "ECU ΚΙΝΗΤΗΡΑ",
    abs: "ABS/VSA",
    eps: "EPS",
    gateway: "GATEWAY",
    body: "BCM",
    display: "ΟΡΓΑΝΑ",
    featureNode: "ADS / EPS",
    inputNode: "ΔΙΑΚΟΠΤΗΣ MODE",
    featureName: "τετραπλό σύστημα οδήγησης, EPS και προσαρμοζόμενη απόσβεση",
    featureComplaint: "Η ένδειξη +R εμφανίζεται, αλλά το τιμόνι και η απόσβεση δεν αποκτούν τη ζητούμενη ρύθμιση.",
    localModule: "ADS CTRL",
    localEffect: "δεν εφαρμόζεται η επιλεγμένη ρύθμιση οδήγησης",
  },
  peugeot: {
    code: "P208",
    name: "Peugeot 208 GTi",
    image: "assets/images/lab-m3-peugeot-208-gti.webp",
    alt: "Κόκκινο Peugeot 208 GTi σε σκούρο φόντο",
    ecu: "ECU ΚΙΝΗΤΗΡΑ",
    abs: "ABS/ESP",
    eps: "EPS",
    gateway: "GATEWAY / BSI",
    body: "BSI",
    display: "ΟΡΓΑΝΑ",
    featureNode: "ABS/ESP",
    inputNode: "ΕΝΤΟΛΗ ΟΔΗΓΟΥ",
    featureName: "έλεγχο ευστάθειας και πληροφόρηση του πίνακα οργάνων",
    featureComplaint: "Ανάβουν μαζί οι ενδείξεις ESP και ABS και ο πίνακας χάνει στιγμιαία την ταχύτητα οχήματος.",
    localModule: "BSI",
    localEffect: "χάνονται λειτουργίες αμαξώματος και μηνύματα προς τον πίνακα οργάνων",
  },
  megane: {
    code: "MRS",
    name: "Renault Mégane R.S.",
    image: "assets/images/lab-m3-renault-megane-rs.webp",
    alt: "Λευκό Renault Mégane R.S. σε σκούρο φόντο",
    ecu: "ECU ΚΙΝΗΤΗΡΑ",
    abs: "ABS/ESC",
    eps: "EPS",
    gateway: "GATEWAY",
    body: "UCH",
    display: "ΟΡΓΑΝΑ",
    featureNode: "ABS/ESC",
    inputNode: "ΕΝΤΟΛΗ SPORT",
    featureName: "λειτουργία Sport, έλεγχο ευστάθειας και πληροφόρηση οργάνων",
    featureComplaint: "Η εντολή Sport εμφανίζεται στον πίνακα, αλλά η απόκριση κινητήρα και ESC μένει αμετάβλητη.",
    localModule: "UCH",
    localEffect: "εμφανίζονται διαλείπουσες απώλειες λειτουργιών αμαξώματος",
  },
  tesla: {
    code: "TM3",
    name: "Tesla Model 3",
    image: "assets/images/lab-m3-tesla-model-3.webp",
    alt: "Λευκό Tesla Model 3 σε σκούρο φόντο",
    ecu: "ECU ΚΙΝΗΣΗΣ",
    abs: "ABS/ESC",
    eps: "EPS",
    gateway: "GATEWAY",
    body: "BODY CTRL",
    display: "ΚΕΝΤΡΙΚΗ ΟΘΟΝΗ",
    featureNode: "ECU ΚΙΝΗΣΗΣ",
    inputNode: "ΠΕΝΤΑΛ / ΕΝΤΟΛΗ",
    featureName: "ηλεκτρική κίνηση, έλεγχο ευστάθειας και ανάκτηση ενέργειας",
    featureComplaint: "Εμφανίζεται περιορισμός ανάκτησης και ταυτόχρονα προειδοποίηση ευστάθειας, χωρίς μηχανικό θόρυβο.",
    localModule: "INVERTER",
    localEffect: "περιορίζεται η ανάκτηση και η ροπή κίνησης",
  },
  yaris: {
    code: "GRY",
    name: "Toyota GR Yaris",
    image: "assets/images/lab-m3-toyota-gr-yaris.webp",
    alt: "Κόκκινο Toyota GR Yaris σε σκούρο φόντο",
    ecu: "ECU ΚΙΝΗΤΗΡΑ",
    abs: "ABS/VSC",
    eps: "EPS",
    gateway: "GATEWAY",
    body: "BODY ECU",
    display: "ΟΡΓΑΝΑ",
    featureNode: "ECU GR-FOUR",
    inputNode: "ΔΙΑΚΟΠΤΗΣ 4WD",
    featureName: "σύστημα τετρακίνησης GR-FOUR και επιλογή λειτουργίας",
    featureComplaint: "Η επιλογή λειτουργίας τετρακίνησης αλλάζει στην οθόνη, αλλά η κατανομή ροπής δεν ακολουθεί.",
    localModule: "ECU GR-FOUR",
    localEffect: "το σύστημα τετρακίνησης περνά σε περιορισμένη λειτουργία",
  },
  golf: {
    code: "GTI",
    name: "Volkswagen Golf GTI",
    image: "assets/images/lab-m3-volkswagen-golf-gti.webp",
    alt: "Λευκό Volkswagen Golf GTI σε σκούρο φόντο",
    ecu: "ECU ΚΙΝΗΤΗΡΑ",
    abs: "ABS/ESC",
    eps: "EPS",
    gateway: "GATEWAY",
    body: "BCM",
    display: "ΟΡΓΑΝΑ",
    featureNode: "ABS/ESC",
    inputNode: "DRIVE MODE",
    featureName: "έλεγχο ευστάθειας, XDS και πρόγραμμα οδήγησης",
    featureComplaint: "Ανάβει η ένδειξη ESC και η λειτουργία XDS δεν επεμβαίνει όπως αναμένεται στη στροφή.",
    localModule: "DRIVE MODE",
    localEffect: "δεν αλλάζει το επιλεγμένο πρόγραμμα οδήγησης",
  },
  bmw: {
    code: "M2",
    name: "BMW M2 Competition",
    image: "assets/images/lab-m3-bmw-m2.webp",
    alt: "Λευκή BMW M2 Competition σε σκούρο φόντο",
    ecu: "ECU ΚΙΝΗΤΗΡΑ",
    abs: "DSC/ABS",
    eps: "EPS",
    gateway: "GATEWAY",
    body: "BODY CTRL",
    display: "ΟΡΓΑΝΑ",
    featureNode: "M DIFFERENTIAL",
    inputNode: "M MODE",
    featureName: "DSC, ηλεκτρομηχανικό τιμόνι και Active M Differential",
    featureComplaint: "Η επιλογή M mode καταγράφεται, αλλά η ρύθμιση DSC και του διαφορικού δεν εφαρμόζεται σωστά.",
    localModule: "M DIFFERENTIAL",
    localEffect: "η διαχείριση πρόσφυσης περνά σε ασφαλή λειτουργία",
  },
};

const lessonThreeNode = (label, state = "online", role = "") => ({ label, state, role });

const lessonThreeMergeNodes = (items) => {
  const statePriority = { online: 0, suspect: 1, offline: 2 };
  return items.reduce((merged, item) => {
    const existing = merged.find((candidate) => candidate.label === item.label);
    if (!existing) {
      merged.push({ ...item });
    } else {
      if (statePriority[item.state] > statePriority[existing.state]) existing.state = item.state;
      if (item.role === "gateway") existing.role = "gateway";
    }
    return merged;
  }, []);
};

const lessonThreeTopologyCatalog = {
  bus: {
    label: "Τοπολογία διαύλου (bus)",
    explanation: "Πολλοί κόμβοι μοιράζονται μία κοινή βασική γραμμή επικοινωνίας.",
    nodes: (vehicle) => [
      lessonThreeNode(vehicle.ecu),
      lessonThreeNode(vehicle.abs),
      lessonThreeNode(vehicle.eps),
      lessonThreeNode(vehicle.display),
    ],
  },
  star: {
    label: "Τοπολογία αστέρα",
    explanation: "Οι κλάδοι συναντιούνται σε ένα κεντρικό σημείο, εδώ στο Gateway.",
    nodes: (vehicle) => [
      lessonThreeNode(vehicle.gateway, "online", "gateway"),
      lessonThreeNode(vehicle.ecu),
      lessonThreeNode(vehicle.abs),
      lessonThreeNode(vehicle.eps),
      lessonThreeNode(vehicle.display),
    ],
  },
  ring: {
    label: "Τοπολογία δακτυλίου",
    explanation: "Οι κόμβοι σχηματίζουν κλειστή διαδρομή που επιστρέφει στο αρχικό σημείο.",
    nodes: (vehicle) => [
      lessonThreeNode(vehicle.display),
      lessonThreeNode(vehicle.body),
      lessonThreeNode("MEDIA"),
      lessonThreeNode("ΧΕΙΡΙΣΤΗΡΙΟ"),
    ],
  },
  hybrid: {
    label: "Υβριδική τοπολογία με Gateway",
    explanation: "Δύο ομάδες κόμβων ή υποδίκτυα συνδέονται μέσω της πύλης Gateway.",
    nodes: (vehicle) => [
      lessonThreeNode(vehicle.ecu),
      lessonThreeNode(vehicle.abs),
      lessonThreeNode(vehicle.gateway, "online", "gateway"),
      lessonThreeNode(vehicle.body),
      lessonThreeNode(vehicle.display),
    ],
  },
};

const lessonThreeTopologyOrder = ["bus", "star", "hybrid", "ring"];
const lessonThreeTopologyAnswers = Object.values(lessonThreeTopologyCatalog).map((item) => item.label);

const lessonThreeScenarioTemplates = [
  {
    code: "MAP",
    category: "Ανάγνωση τοπολογίας",
    difficulty: "easy",
    build: (vehicle, vehicleIndex) => {
      const topology = lessonThreeTopologyOrder[vehicleIndex % lessonThreeTopologyOrder.length];
      const map = lessonThreeTopologyCatalog[topology];
      return {
        topology,
        title: vehicle.name + ": διάβασε τον εκπαιδευτικό χάρτη",
        symptom: "Δεν υπάρχει ενεργή βλάβη. Σου δίνεται απλοποιημένος χάρτης του " + vehicle.name + " για να αναγνωρίσεις τη μορφή σύνδεσης πριν αρχίσει η διάγνωση.",
        scan: "Όλοι οι εικονιζόμενοι κόμβοι απαντούν κανονικά. Η άσκηση αφορά μόνο την ανάγνωση της δομής.",
        question: "Στο σενάριο του " + vehicle.name + ", ποια τοπολογία παρουσιάζει ο εκπαιδευτικός χάρτης;",
        correct: map.label,
        wrong: lessonThreeTopologyAnswers.filter((answer) => answer !== map.label),
        explanation: map.explanation + " Ο χάρτης είναι εκπαιδευτικός και όχι εργοστασιακό σχέδιο του οχήματος.",
        hint: "Ακολούθησε τις γραμμές: κοινή γραμμή, κεντρικό σημείο, κλειστός κύκλος ή συνδυασμός υποδικτύων;",
        nodes: map.nodes(vehicle),
      };
    },
  },
  {
    code: "FLOW",
    category: "Ροή δεδομένων",
    difficulty: "easy",
    build: (vehicle) => ({
      topology: "star",
      title: "Από την εντολή του οδηγού έως τη λειτουργία",
      symptom: "Στο " + vehicle.name + " εξετάζεις τη ροή πληροφορίας για " + vehicle.featureName + ". Θέλεις πρώτα να βάλεις τα βήματα στη σωστή σειρά.",
      scan: vehicle.inputNode + ", " + vehicle.gateway + ", " + vehicle.featureNode + " και " + vehicle.display + ": online.",
      question: "Στο " + vehicle.name + ", ποια πορεία περιγράφει καλύτερα τη λογική ανταλλαγής δεδομένων για " + vehicle.featureName + ";",
      correct: vehicle.inputNode + " → " + vehicle.gateway + " → " + vehicle.featureNode + " → επιβεβαίωση στα " + vehicle.display,
      wrong: [
        vehicle.featureNode + " → ασφάλεια → " + vehicle.inputNode + " χωρίς ανταλλαγή μηνυμάτων",
        vehicle.display + " → τροχός → " + vehicle.gateway + " → " + vehicle.inputNode,
        vehicle.gateway + " → μπαταρία → " + vehicle.display + " χωρίς συμμετοχή της μονάδας λειτουργίας",
      ],
      explanation: "Η εντολή δημιουργείται στην είσοδο, δρομολογείται στο κατάλληλο δίκτυο, εκτελείται από τη σχετική μονάδα και η κατάσταση επιστρέφει για ένδειξη.",
      hint: "Ξεκίνα από αυτό που αγγίζει ο οδηγός και τελείωσε στην επιβεβαίωση που βλέπει.",
      nodes: [
        lessonThreeNode(vehicle.gateway, "online", "gateway"),
        lessonThreeNode(vehicle.inputNode),
        lessonThreeNode(vehicle.featureNode),
        lessonThreeNode(vehicle.display),
        lessonThreeNode(vehicle.abs),
      ],
    }),
  },
  {
    code: "LOCAL",
    category: "Τοπική απώλεια κόμβου",
    difficulty: "medium",
    build: (vehicle) => ({
      topology: "bus",
      title: "Ένας μόνο κόμβος δεν απαντά",
      symptom: "Στο " + vehicle.name + " " + vehicle.localEffect + ". Οι υπόλοιπες βασικές λειτουργίες του οχήματος παραμένουν διαθέσιμες.",
      scan: vehicle.ecu + ", " + vehicle.abs + ", " + vehicle.eps + " και " + vehicle.gateway + ": online. " + vehicle.localModule + ": χωρίς επικοινωνία.",
      question: "Με μόνο τη μονάδα " + vehicle.localModule + " offline στο " + vehicle.name + ", ποια είναι η σωστή πρώτη διαγνωστική κατεύθυνση;",
      correct: "Έλεγχος τροφοδοσίας, γείωσης, φίσα και τοπικού κλάδου CAN της μονάδας " + vehicle.localModule,
      wrong: [
        "Αντικατάσταση του " + vehicle.gateway + " επειδή συμμετέχει σε πολλές επικοινωνίες",
        "Έλεγχος και των δύο τερματικών αντιστάσεων ως πρώτη ενέργεια, χωρίς τοπικές μετρήσεις",
        "Επαναπρογραμματισμός όλων των online μονάδων πριν ελεγχθεί η καλωδίωση",
      ],
      explanation: "Όταν λείπει μόνο ένας κόμβος και οι γειτονικοί επικοινωνούν, ξεκινάμε από τα τοπικά του βασικά: τροφοδοσία, γείωση, φίσα και κλάδο επικοινωνίας.",
      hint: "Μία κοινή βλάβη του διαύλου θα επηρέαζε συνήθως περισσότερους κόμβους.",
      nodes: [
        lessonThreeNode(vehicle.ecu),
        lessonThreeNode(vehicle.abs),
        lessonThreeNode(vehicle.localModule, "offline"),
        lessonThreeNode(vehicle.gateway),
        lessonThreeNode(vehicle.display),
      ],
    }),
  },
  {
    code: "SUBNET",
    category: "Gateway και υποδίκτυα",
    difficulty: "medium",
    build: (vehicle) => ({
      topology: "hybrid",
      title: "Ολόκληρη ομάδα μονάδων χάθηκε",
      symptom: "Στο " + vehicle.name + " ο κινητήρας και το φρενάρισμα λειτουργούν, αλλά μαζί χάνονται οι ενδείξεις οργάνων και λειτουργίες αμαξώματος.",
      scan: vehicle.ecu + " και " + vehicle.abs + ": online. " + vehicle.body + " και " + vehicle.display + ": χωρίς επικοινωνία. Το όριο των δύο ομάδων περνά από το " + vehicle.gateway + ".",
      question: "Στο " + vehicle.name + ", ποιο κοινό σημείο πρέπει να ελεγχθεί πριν εξεταστεί κάθε offline μονάδα χωριστά;",
      correct: "Η τροφοδοσία, η γείωση και ο κλάδος του " + vehicle.gateway + " προς το offline υποδίκτυο",
      wrong: [
        "Η τροφοδοσία της " + vehicle.ecu + ", παρότι η μονάδα απαντά κανονικά",
        "Η κωδικοποίηση μόνο του " + vehicle.display + ", χωρίς έλεγχο της υπόλοιπης offline ομάδας",
        "Το τοπικό κύκλωμα ενός αισθητήρα τροχού, χωρίς συσχέτιση με το όριο του χάρτη",
      ],
      explanation: "Όταν χάνεται ολόκληρη ομάδα και η άλλη πλευρά παραμένει online, ψάχνουμε πρώτα το κοινό πέρασμα: Gateway, τροφοδοσία ή κοινό κλάδο του υποδικτύου.",
      hint: "Βρες το μοναδικό σημείο από το οποίο περνούν όλες οι μονάδες που χάθηκαν.",
      nodes: [
        lessonThreeNode(vehicle.ecu),
        lessonThreeNode(vehicle.abs),
        lessonThreeNode(vehicle.gateway, "suspect", "gateway"),
        lessonThreeNode(vehicle.body, "offline"),
        lessonThreeNode(vehicle.display, "offline"),
      ],
      lineState: "suspect",
    }),
  },
  {
    code: "COMMAND",
    category: "Συντονισμός συστημάτων",
    difficulty: "medium",
    build: (vehicle) => ({
      topology: "star",
      title: "Η επιλογή φαίνεται, αλλά δεν εφαρμόζεται",
      symptom: vehicle.featureComplaint + " Το περιστατικό αφορά το " + vehicle.name + ".",
      scan: vehicle.inputNode + ": η εντολή αλλάζει στο live data. " + vehicle.display + ": δείχνει την επιλογή. " + vehicle.featureNode + ": η ζητούμενη κατάσταση δεν αλλάζει.",
      question: "Στο " + vehicle.name + ", ποια μέτρηση ξεχωρίζει αν το πρόβλημα είναι στη μεταφορά ή στην εκτέλεση της εντολής;",
      correct: "Ταυτόχρονη σύγκριση της εντολής στην πηγή, του μηνύματος μετά το Gateway και της κατάστασης στο " + vehicle.featureNode,
      wrong: [
        "Αλλαγή της μονάδας " + vehicle.featureNode + " μόνο επειδή η λειτουργία δεν εφαρμόζεται",
        "Διαγραφή όλων των DTC και δοκιμή χωρίς να παρακολουθηθούν τα αντίστοιχα live data",
        "Μέτρηση μόνο της τάσης μπαταρίας με σβηστή ανάφλεξη, χωρίς έλεγχο της εντολής",
      ],
      explanation: "Η σύγκριση source–Gateway–δέκτη δείχνει πού σταματά η πληροφορία. Αν το μήνυμα φτάνει αλλά δεν εκτελείται, τότε εξετάζουμε τη μονάδα και τις προϋποθέσεις λειτουργίας.",
      hint: "Μην υποθέσεις ότι επειδή η ένδειξη αλλάζει, η εντολή έφτασε και στον τελικό δέκτη.",
      nodes: [
        lessonThreeNode(vehicle.gateway, "online", "gateway"),
        lessonThreeNode(vehicle.inputNode),
        lessonThreeNode(vehicle.featureNode, "suspect"),
        lessonThreeNode(vehicle.display),
        lessonThreeNode(vehicle.abs),
      ],
    }),
  },
  {
    code: "INTERMITTENT",
    category: "Διαλείπουσα επικοινωνία",
    difficulty: "medium",
    build: (vehicle) => ({
      topology: "bus",
      title: "Η βλάβη εμφανίζεται μόνο με κραδασμό",
      symptom: "Μετά από εργασία κοντά στην πλεξούδα του " + vehicle.name + ", ανάβουν στιγμιαία πολλές ενδείξεις όταν περνά από ανωμαλία. Μετά όλα επανέρχονται.",
      scan: "Ιστορικοί κωδικοί U σε " + vehicle.abs + ", " + vehicle.eps + " και " + vehicle.display + ". Στο ρελαντί όλες οι μονάδες είναι online.",
      question: "Ποια δοκιμή στο " + vehicle.name + " έχει τη μεγαλύτερη πιθανότητα να αναπαράγει και να εντοπίσει τη διαλείπουσα βλάβη;",
      correct: "Παρακολούθηση επικοινωνίας και τροφοδοσιών ενώ κινείται ελεγχόμενα η ύποπτη πλεξούδα και οι φίσες",
      wrong: [
        "Αλλαγή της πρώτης μονάδας που αποθήκευσε κωδικό U χωρίς αναπαραγωγή του φαινομένου",
        "Διαγραφή κωδικών και παράδοση του οχήματος επειδή τώρα όλες οι μονάδες απαντούν",
        "Μέτρηση αντίστασης με συνδεδεμένο και ενεργό δίκτυο χωρίς καμία δοκιμή κραδασμού",
      ],
      explanation: "Η ελεγχόμενη δοκιμή κίνησης της πλεξούδας, μαζί με live data ή παλμογράφο, συνδέει το σύμπτωμα με συγκεκριμένο σημείο αντί να βασίζεται μόνο σε ιστορικούς κωδικούς.",
      hint: "Το κλειδί είναι να παρακολουθείς το δίκτυο τη στιγμή που προκαλείς ξανά το σύμπτωμα.",
      nodes: [
        lessonThreeNode(vehicle.ecu),
        lessonThreeNode(vehicle.abs),
        lessonThreeNode(vehicle.gateway, "suspect"),
        lessonThreeNode(vehicle.eps),
        lessonThreeNode(vehicle.display),
      ],
      lineState: "suspect",
    }),
  },
  {
    code: "TERM",
    category: "Φυσικό επίπεδο CAN",
    difficulty: "hard",
    build: (vehicle) => ({
      topology: "bus",
      title: "Ασταθές δίκτυο και ανακλάσεις",
      symptom: "Στο " + vehicle.name + " πολλές μονάδες χάνονται στιγμιαία όταν αυξάνει η κυκλοφορία δεδομένων. Η κυματομορφή έχει παραμορφωμένες ακμές.",
      scan: "Πολλοί παροδικοί κωδικοί U. Με απενεργοποιημένο και ασφαλώς απομονωμένο δίκτυο, η συνολική αντίσταση δεν είναι η αναμενόμενη για σωστά τερματισμένο δίαυλο.",
      question: "Στο δίκτυο του " + vehicle.name + ", ποια αιτία ταιριάζει περισσότερο στον συνδυασμό αντίστασης, ανακλάσεων και πολλών χαμένων κόμβων;",
      correct: "Ανοικτή ή κακή σύνδεση σε τερματισμό ή σε κοινό τμήμα του κύριου διαύλου",
      wrong: [
        "Αστοχία ενός αισθητήρα που στέλνει λανθασμένη τιμή αλλά δεν επηρεάζει ηλεκτρικά τον δίαυλο",
        "Λάθος βασική ρύθμιση του " + vehicle.eps + " με κανονική φυσική επικοινωνία",
        "Εσφαλμένη κωδικοποίηση μόνο του " + vehicle.display + " χωρίς παραμόρφωση της κυματομορφής",
      ],
      explanation: "Λανθασμένος τερματισμός ή πρόβλημα στο κοινό μέσο μπορεί να προκαλέσει ανακλάσεις και σφάλματα σε πολλές μονάδες. Η μέτρηση γίνεται μόνο με τη σωστή, ασφαλή διαδικασία του κατασκευαστή.",
      hint: "Σύνδεσε ταυτόχρονα τρία στοιχεία: πολλές μονάδες, λάθος συνολική αντίσταση και αλλοιωμένη κυματομορφή.",
      nodes: [
        lessonThreeNode("TERM", "suspect"),
        lessonThreeNode(vehicle.ecu),
        lessonThreeNode(vehicle.abs),
        lessonThreeNode(vehicle.gateway),
        lessonThreeNode("TERM"),
      ],
      lineState: "suspect",
    }),
  },
  {
    code: "LOADER",
    category: "Απομόνωση ύποπτου κόμβου",
    difficulty: "hard",
    build: (vehicle) => ({
      topology: "bus",
      title: "Μία μονάδα ρίχνει ολόκληρο το δίκτυο",
      symptom: "Στο " + vehicle.name + " η σύνδεση της μονάδας " + vehicle.featureNode + " κάνει πολλές άλλες μονάδες να σταματούν να επικοινωνούν. Με αποσύνδεσή της, το δίκτυο επανέρχεται.",
      scan: "Με " + vehicle.featureNode + " συνδεδεμένο: πολλοί κόμβοι offline και παραμορφωμένο σήμα. Αποσυνδεδεμένο: " + vehicle.ecu + ", " + vehicle.abs + ", " + vehicle.eps + " και " + vehicle.gateway + " online.",
      question: "Για το " + vehicle.name + ", ποιο συμπέρασμα και ποιος επόμενος έλεγχος είναι σωστότερα;",
      correct: "Η μονάδα ή ο κλάδος της φορτώνει τον δίαυλο· ελέγχονται πρώτα καλωδίωση, φίσα, τροφοδοσίες και οι γραμμές CAN του κλάδου",
      wrong: [
        "Το " + vehicle.gateway + " είναι οπωσδήποτε ελαττωματικό και αντικαθίσταται χωρίς άλλη μέτρηση",
        "Η ανάκαμψη μετά την αποσύνδεση αποδεικνύει ότι χρειάζεται μόνο νέα κωδικοποίηση της μονάδας",
        "Αφαιρούνται οι τερματικές αντιστάσεις για να μειωθεί το ηλεκτρικό φορτίο του δικτύου",
      ],
      explanation: "Η ανάκαμψη του δικτύου οριοθετεί τη βλάβη στη μονάδα ή στον κλάδο της, όχι υποχρεωτικά στην ίδια τη μονάδα. Πριν από αντικατάσταση ελέγχουμε φίσα, καλωδίωση, τροφοδοσία και γείωση.",
      hint: "Η αποσύνδεση απομόνωσε μία περιοχή. Δεν ξεχώρισε ακόμη αν φταίει η μονάδα ή το καλώδιό της.",
      nodes: [
        lessonThreeNode(vehicle.ecu),
        lessonThreeNode(vehicle.abs),
        lessonThreeNode(vehicle.featureNode, "suspect"),
        lessonThreeNode(vehicle.eps, "offline"),
        lessonThreeNode(vehicle.gateway, "offline"),
      ],
      lineState: "offline",
    }),
  },
  {
    code: "COMMON",
    category: "Κοινή αιτία πολλών ενδείξεων",
    difficulty: "hard",
    build: (vehicle) => ({
      topology: "hybrid",
      title: "Πολλές προειδοποιήσεις, μία κοινή αιτία",
      symptom: "Στο " + vehicle.name + " ανάβουν μαζί προειδοποίηση πέδησης, ευστάθειας και υποβοήθησης. Παράλληλα επηρεάζεται " + vehicle.featureName + ".",
      scan: vehicle.abs + ": χωρίς επικοινωνία. Οι υπόλοιπες μονάδες απαντούν και καταγράφουν απώλεια μηνυμάτων από το " + vehicle.abs + ".",
      question: "Στο " + vehicle.name + ", ποια κοινή υπόθεση πρέπει να ελεγχθεί πριν αντιμετωπιστεί κάθε ένδειξη ως ξεχωριστή βλάβη;",
      correct: "Κοινή απώλεια του " + vehicle.abs + ": τροφοδοσία, γείωση, φίσα και επικοινωνία της μονάδας",
      wrong: [
        "Τρεις ανεξάρτητες βλάβες σε φρένα, τιμόνι και σύστημα επίδοσης που συνέβησαν ταυτόχρονα",
        "Αστοχία του " + vehicle.display + " επειδή αυτό εμφανίζει όλες τις προειδοποιήσεις",
        "Βλάβη του " + vehicle.ecu + " παρότι απαντά και δεν είναι η πηγή των χαμένων μηνυμάτων",
      ],
      explanation: "Μία offline μονάδα μπορεί να στερήσει κοινά δεδομένα από πολλά συστήματα. Οι πολλαπλές ενδείξεις είναι συχνά συνέπειες της ίδιας απώλειας επικοινωνίας.",
      hint: "Δες ποια μονάδα λείπει από τη σάρωση και ποια μονάδα αναφέρουν όλες οι άλλες.",
      nodes: [
        lessonThreeNode(vehicle.ecu),
        lessonThreeNode(vehicle.abs, "offline"),
        lessonThreeNode(vehicle.gateway, "online", "gateway"),
        lessonThreeNode(vehicle.eps, "suspect"),
        lessonThreeNode(vehicle.featureNode, "suspect"),
      ],
    }),
  },
  {
    code: "VERIFY",
    category: "Επιβεβαίωση επισκευής",
    difficulty: "hard",
    build: (vehicle) => ({
      topology: "star",
      title: "Η επισκευή τελείωσε — αποδείχθηκε όμως;",
      symptom: "Στο " + vehicle.name + " επισκευάστηκε οξειδωμένη επαφή στον κλάδο του " + vehicle.gateway + ". Οι προειδοποιήσεις έσβησαν και το όχημα φαίνεται φυσιολογικό.",
      scan: "Μετά τη διαγραφή των DTC όλες οι μονάδες είναι online. Δεν έχει ακόμη γίνει δοκιμή υπό τις συνθήκες που εμφάνιζαν τη βλάβη.",
      question: "Μετά την επισκευή του " + vehicle.name + ", ποια διαδικασία επιβεβαιώνει πληρέστερα ότι η αιτία αποκαταστάθηκε;",
      correct: "Πλήρης σάρωση, έλεγχος live data/σήματος, λειτουργική δοκιμή όλων των επηρεασμένων συστημάτων και επανάληψη στις αρχικές συνθήκες",
      wrong: [
        "Μόνο διαγραφή των DTC, αφού προς το παρόν δεν υπάρχει προειδοποιητική λυχνία",
        "Μόνο οπτικός έλεγχος της επισκευασμένης φίσας χωρίς νέα συνολική σάρωση",
        "Μόνο δοκιμή του " + vehicle.featureNode + " στο ρελαντί, χωρίς έλεγχο των υπόλοιπων κόμβων",
      ],
      explanation: "Η επιτυχής επισκευή αποδεικνύεται όταν δεν επιστρέφουν οι κωδικοί, τα δεδομένα και το σήμα είναι σωστά και το σύμπτωμα δεν αναπαράγεται στις αρχικές συνθήκες.",
      hint: "Η σβηστή λυχνία είναι μόνο ένα στοιχείο. Χρειάζονται σάρωση, μέτρηση και λειτουργική δοκιμή.",
      nodes: [
        lessonThreeNode(vehicle.gateway, "online", "gateway"),
        lessonThreeNode(vehicle.ecu),
        lessonThreeNode(vehicle.abs),
        lessonThreeNode(vehicle.eps),
        lessonThreeNode(vehicle.featureNode),
      ],
    }),
  },
];

const lessonThreeScenarioBank = Object.entries(lessonThreeVehicles).flatMap(
  ([vehicleKey, vehicle], vehicleIndex) => lessonThreeScenarioTemplates.map((template, templateIndex) => {
    const scenario = template.build(vehicle, vehicleIndex);
    const answers = [scenario.correct, ...scenario.wrong];
    return {
      id: vehicle.code + "-" + String(templateIndex + 1).padStart(2, "0"),
      concept: vehicleKey + "-" + template.code,
      vehicleKey,
      category: template.category,
      difficulty: template.difficulty,
      topology: scenario.topology,
      title: scenario.title,
      symptom: scenario.symptom,
      scan: scenario.scan,
      question: scenario.question,
      answers,
      correctAnswer: scenario.correct,
      explanation: scenario.explanation,
      hint: scenario.hint,
      nodes: lessonThreeMergeNodes(scenario.nodes),
      lineState: scenario.lineState || "online",
    };
  }),
);

const lessonThreeLab = document.querySelector("[data-topology-lab]");

if (lessonThreeLab) {
  const screens = Object.fromEntries(
    [...lessonThreeLab.querySelectorAll("[data-topology-screen]")].map((screen) => [screen.dataset.topologyScreen, screen]),
  );
  const $ = (selector) => lessonThreeLab.querySelector(selector);
  const alphabet = ["Α", "Β", "Γ", "Δ"];
  const difficultyLabels = { easy: "ΕΥΚΟΛΟ", medium: "ΜΕΤΡΙΟ", hard: "ΔΥΣΚΟΛΟ" };
  const topologyLabels = {
    bus: "Κοινός δίαυλος",
    star: "Τοπολογία αστέρα",
    ring: "Τοπολογία δακτυλίου",
    hybrid: "Υβριδικό δίκτυο",
  };

  let mode = "training";
  let session = [];
  let currentIndex = 0;
  let correctCount = 0;
  let earnedPoints = 0;
  let hintUsed = false;
  let locked = false;
  let currentOptions = [];
  let answerSlots = [];
  let results = [];

  const shuffle = (items) => {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  };

  const escapeXml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

  const createSession = (selectedMode) => {
    if (selectedMode === "all") return shuffle(lessonThreeScenarioBank);
    const vehicleKeys = shuffle(Object.keys(lessonThreeVehicles));
    const usedConcepts = new Set();
    const selected = [];
    const addForVehicle = (difficulty, vehicleKey) => {
      const candidates = shuffle(lessonThreeScenarioBank.filter((item) => (
        item.difficulty === difficulty
        && item.vehicleKey === vehicleKey
        && !usedConcepts.has(item.concept)
      )));
      if (!candidates.length) return;
      selected.push(candidates[0]);
      usedConcepts.add(candidates[0].concept);
    };

    vehicleKeys.slice(0, 5).forEach((vehicleKey) => addForVehicle("easy", vehicleKey));
    vehicleKeys.forEach((vehicleKey) => addForVehicle("medium", vehicleKey));
    vehicleKeys.slice(4).concat(vehicleKeys.slice(0, 4)).slice(0, 4).forEach((vehicleKey) => addForVehicle("medium", vehicleKey));
    vehicleKeys.forEach((vehicleKey) => addForVehicle("hard", vehicleKey));
    return shuffle(selected);
  };

  const showScreen = (name) => {
    Object.entries(screens).forEach(([key, screen]) => {
      screen.hidden = key !== name;
    });
  };

  const svgNode = (item, x, y, shape = "rect") => {
    const stateClass = item.state === "offline" ? "is-offline" : item.state === "suspect" ? "is-suspect" : "";
    const roleClass = item.role === "gateway" ? "is-gateway" : "";
    const safeLabel = escapeXml(item.label.length > 14 ? `${item.label.slice(0, 13)}…` : item.label);
    if (shape === "circle") {
      return `<g class="topology-map-node ${stateClass} ${roleClass}" transform="translate(${x} ${y})"><circle r="31"/><text y="4">${safeLabel}</text></g>`;
    }
    return `<g class="topology-map-node ${stateClass} ${roleClass}" transform="translate(${x - 39} ${y - 20})"><rect width="78" height="40" rx="9"/><text x="39" y="25">${safeLabel}</text></g>`;
  };

  const renderBus = (scenario) => {
    const count = scenario.nodes.length;
    const positions = scenario.nodes.map((_, index) => 42 + index * (276 / Math.max(1, count - 1)));
    const nodes = scenario.nodes.map((item, index) => {
      const y = index % 2 === 0 ? 66 : 198;
      const branchEnd = index % 2 === 0 ? 86 : 178;
      return `<line class="topology-map-line ${item.state === "suspect" ? "is-suspect" : item.state === "offline" ? "is-offline" : ""}" x1="${positions[index]}" y1="130" x2="${positions[index]}" y2="${branchEnd}"/>${svgNode(item, positions[index], y)}`;
    }).join("");
    return `<svg viewBox="0 0 360 260" role="img" aria-label="Απλοποιημένος χάρτης τοπολογίας διαύλου"><text class="topology-map-caption" x="180" y="20">ΚΟΙΝΟΣ ΔΙΑΥΛΟΣ</text><line class="topology-map-line ${scenario.lineState === "suspect" ? "is-suspect" : scenario.lineState === "offline" ? "is-offline" : ""}" x1="24" y1="130" x2="336" y2="130"/>${nodes}</svg>`;
  };

  const renderStar = (scenario) => {
    const centerIndex = Math.max(0, scenario.nodes.findIndex((item) => item.role === "gateway"));
    const center = scenario.nodes[centerIndex];
    const outer = scenario.nodes.filter((_, index) => index !== centerIndex);
    const positions = [[180, 42], [315, 130], [180, 218], [45, 130], [70, 45], [290, 215]];
    const lines = outer.map((item, index) => `<line class="topology-map-line ${item.state === "suspect" ? "is-suspect" : item.state === "offline" ? "is-offline" : ""}" x1="180" y1="130" x2="${positions[index][0]}" y2="${positions[index][1]}"/>`).join("");
    const nodes = outer.map((item, index) => svgNode(item, positions[index][0], positions[index][1], "circle")).join("");
    return `<svg viewBox="0 0 360 260" role="img" aria-label="Απλοποιημένος χάρτης τοπολογίας αστέρα"><text class="topology-map-caption" x="180" y="16">ΚΕΝΤΡΙΚΟ ΣΗΜΕΙΟ ΚΑΙ ΚΛΑΔΟΙ</text>${lines}${svgNode(center, 180, 130)}${nodes}</svg>`;
  };

  const renderRing = (scenario) => {
    const positions = [[180, 48], [306, 130], [180, 212], [54, 130], [95, 55], [265, 205]];
    const used = positions.slice(0, scenario.nodes.length);
    const points = used.map(([x, y]) => `${x},${y}`).join(" ");
    const nodes = scenario.nodes.map((item, index) => svgNode(item, used[index][0], used[index][1], "circle")).join("");
    return `<svg viewBox="0 0 360 260" role="img" aria-label="Απλοποιημένος χάρτης τοπολογίας δακτυλίου"><text class="topology-map-caption" x="180" y="17">ΚΛΕΙΣΤΗ ΔΙΑΔΡΟΜΗ</text><polygon class="topology-map-line ${scenario.lineState === "suspect" ? "is-suspect" : scenario.lineState === "offline" ? "is-offline" : ""}" points="${points}"/>${nodes}</svg>`;
  };

  const renderHybrid = (scenario) => {
    const gatewayIndex = Math.max(0, scenario.nodes.findIndex((item) => item.role === "gateway"));
    const gateway = scenario.nodes[gatewayIndex];
    const others = scenario.nodes.filter((_, index) => index !== gatewayIndex);
    const left = others.slice(0, Math.ceil(others.length / 2));
    const right = others.slice(Math.ceil(others.length / 2));
    const leftPos = [[70, 62], [70, 190], [70, 126]];
    const rightPos = [[290, 62], [290, 190], [290, 126]];
    const side = (items, positions, edgeX) => items.map((item, index) => `<polyline class="topology-map-line ${item.state === "suspect" ? "is-suspect" : item.state === "offline" ? "is-offline" : ""}" points="180,130 ${edgeX},130 ${edgeX},${positions[index][1]} ${positions[index][0]},${positions[index][1]}"/>${svgNode(item, positions[index][0], positions[index][1])}`).join("");
    return `<svg viewBox="0 0 360 260" role="img" aria-label="Απλοποιημένος χάρτης υβριδικού δικτύου"><text class="topology-map-caption" x="75" y="22">ΥΠΟΔΙΚΤΥΟ Α</text><text class="topology-map-caption" x="285" y="22">ΥΠΟΔΙΚΤΥΟ Β</text>${side(left, leftPos, 125)}${side(right, rightPos, 235)}${svgNode(gateway, 180, 130)}</svg>`;
  };

  const renderNetwork = (scenario) => {
    const renderers = { bus: renderBus, star: renderStar, ring: renderRing, hybrid: renderHybrid };
    $("[data-topology-network]").innerHTML = renderers[scenario.topology](scenario);
  };

  const updateLiveScore = () => {
    $("[data-topology-correct]").textContent = String(correctCount);
    $("[data-topology-score]").textContent = mode === "assessment"
      ? "—"
      : `${results.length ? Math.round((earnedPoints / (results.length * 4)) * 100) : 0}%`;
  };

  const renderScenario = () => {
    const scenario = session[currentIndex];
    const vehicle = lessonThreeVehicles[scenario.vehicleKey];
    hintUsed = false;
    locked = false;
    const correctOption = { text: scenario.correctAnswer, correct: true };
    const wrongOptions = shuffle(scenario.answers
      .filter((text) => text !== scenario.correctAnswer)
      .map((text) => ({ text, correct: false })));
    currentOptions = [...wrongOptions];
    currentOptions.splice(answerSlots[currentIndex], 0, correctOption);

    $("[data-topology-mode-label]").textContent = mode === "assessment" ? "ΔΙΑΓΝΩΣΤΙΚΗ ΔΟΚΙΜΑΣΙΑ" : mode === "all" ? "ΠΛΗΡΗΣ ΤΡΑΠΕΖΑ" : "ΕΚΠΑΙΔΕΥΣΗ";
    $("[data-topology-current]").textContent = String(currentIndex + 1);
    $("[data-topology-total]").textContent = String(session.length);
    $("[data-topology-progress-bar]").style.width = `${((currentIndex + 1) / session.length) * 100}%`;
    $("[data-topology-vehicle]").textContent = vehicle.name;
    const image = $("[data-topology-vehicle-image]");
    image.src = vehicle.image;
    image.alt = vehicle.alt;
    $("[data-topology-case-id]").textContent = `ΠΕΡΙΣΤΑΤΙΚΟ ${scenario.id}`;
    const difficulty = $("[data-topology-difficulty]");
    difficulty.textContent = difficultyLabels[scenario.difficulty];
    difficulty.dataset.level = difficultyLabels[scenario.difficulty];
    $("[data-topology-case-title]").textContent = scenario.title;
    $("[data-topology-symptom]").textContent = scenario.symptom;
    $("[data-topology-scan]").textContent = scenario.scan;
    $("[data-topology-name]").textContent = topologyLabels[scenario.topology];
    $("[data-topology-category]").textContent = scenario.category.toUpperCase();
    $("[data-topology-question-tag]").textContent = scenario.difficulty === "easy" ? "ΑΝΑΓΝΩΡΙΣΗ" : scenario.difficulty === "medium" ? "ΔΙΑΓΝΩΣΤΙΚΗ ΚΑΤΕΥΘΥΝΣΗ" : "ΣΥΝΘΕΤΗ ΔΙΑΓΝΩΣΗ";
    $("[data-topology-question]").textContent = scenario.question;

    const options = $("[data-topology-options]");
    options.innerHTML = "";
    currentOptions.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "topology-option";
      button.dataset.optionIndex = String(index);
      button.innerHTML = `<span>${alphabet[index]}</span><strong></strong>`;
      button.querySelector("strong").textContent = option.text;
      button.addEventListener("click", () => chooseAnswer(index));
      options.append(button);
    });

    const feedback = $("[data-topology-feedback]");
    feedback.hidden = true;
    feedback.className = "topology-feedback";
    feedback.querySelector("strong").textContent = "";
    feedback.querySelector("p").textContent = "";
    const hint = $("[data-topology-hint]");
    hint.hidden = mode === "assessment";
    hint.disabled = false;
    hint.innerHTML = 'Βοήθεια <span>−1 μονάδα</span>';
    $("[data-topology-next]").hidden = true;
    renderNetwork(scenario);
    updateLiveScore();
    $("[data-topology-case-scroll]").scrollTop = 0;
  };

  function chooseAnswer(optionIndex) {
    if (locked) return;
    locked = true;
    const scenario = session[currentIndex];
    const selected = currentOptions[optionIndex];
    const isCorrect = selected.correct;
    if (isCorrect) {
      correctCount += 1;
      earnedPoints += hintUsed ? 3 : 4;
    }

    const buttons = [...$("[data-topology-options]").querySelectorAll("button")];
    buttons.forEach((button, index) => {
      button.disabled = true;
      if (mode === "assessment") {
        if (index === optionIndex) button.classList.add("is-selected");
      } else {
        if (currentOptions[index].correct) button.classList.add("is-correct");
        if (index === optionIndex && !isCorrect) button.classList.add("is-wrong");
      }
    });

    results.push({
      scenario,
      selected: selected.text,
      correctAnswer: scenario.correctAnswer,
      isCorrect,
      hintUsed,
    });

    const feedback = $("[data-topology-feedback]");
    feedback.hidden = false;
    if (mode === "assessment") {
      feedback.classList.add("is-neutral");
      feedback.querySelector("strong").textContent = "Η απάντηση καταχωρίστηκε";
      feedback.querySelector("p").textContent = "Η σωστή επιλογή και η εξήγηση θα εμφανιστούν στην ανασκόπηση στο τέλος.";
    } else {
      feedback.classList.toggle("is-wrong", !isCorrect);
      feedback.querySelector("strong").textContent = isCorrect ? "Σωστή διαγνωστική απόφαση" : "Όχι ακόμη — δες το όριο της βλάβης";
      feedback.querySelector("p").textContent = scenario.explanation;
    }

    $("[data-topology-hint]").disabled = true;
    const next = $("[data-topology-next]");
    next.hidden = false;
    next.innerHTML = currentIndex === session.length - 1 ? 'Ολοκλήρωση βάρδιας <span aria-hidden="true">→</span>' : 'Επόμενο περιστατικό <span aria-hidden="true">→</span>';
    updateLiveScore();
  }

  const showHint = () => {
    if (locked || mode === "assessment") return;
    hintUsed = true;
    const hintButton = $("[data-topology-hint]");
    hintButton.disabled = true;
    hintButton.textContent = "Η βοήθεια χρησιμοποιήθηκε";
    const feedback = $("[data-topology-feedback]");
    feedback.hidden = false;
    feedback.className = "topology-feedback is-neutral";
    feedback.querySelector("strong").textContent = "Διαγνωστική βοήθεια";
    feedback.querySelector("p").textContent = session[currentIndex].hint;
  };

  const finishSession = () => {
    const maxPoints = session.length * 4;
    const score = Math.round((earnedPoints / Math.max(1, maxPoints)) * 100);
    $("[data-topology-final-score]").textContent = `${score}%`;
    $("[data-topology-final-correct]").textContent = String(correctCount);
    $("[data-topology-final-total]").textContent = String(session.length);

    const resultTitle = $("[data-topology-result-title]");
    const resultMessage = $("[data-topology-result-message]");
    if (score >= 85) {
      resultTitle.textContent = "Διαβάζεις τον χάρτη σαν τεχνικός δικτύων";
      resultMessage.textContent = "Ξεχώρισες τοπικές από κοινές βλάβες και περιόρισες σωστά τα περισσότερα διαγνωστικά όρια.";
    } else if (score >= 65) {
      resultTitle.textContent = "Καλή διαγνωστική βάση — χρειάζεται λίγη ακόμη εξάσκηση";
      resultMessage.textContent = "Η λογική σου είναι σωστή. Δες στην ανασκόπηση ποια είδη τοπολογίας ή κοινού σημείου σε δυσκόλεψαν.";
    } else {
      resultTitle.textContent = "Ξαναδούλεψε τον χάρτη πριν αλλάξεις εξάρτημα";
      resultMessage.textContent = "Εστίασε στο όριο online/offline κόμβων, στα κοινά σημεία και στους βασικούς ελέγχους τροφοδοσίας και γείωσης.";
    }

    const categories = [...new Set(session.map((item) => item.category))];
    $("[data-topology-result-bars]").innerHTML = categories.map((category) => {
      const categoryResults = results.filter((item) => item.scenario.category === category);
      const categoryCorrect = categoryResults.filter((item) => item.isCorrect).length;
      const categoryScore = Math.round((categoryCorrect / Math.max(1, categoryResults.length)) * 100);
      return `<div class="topology-result-bar"><span>${escapeXml(category)}</span><b>${categoryCorrect}/${categoryResults.length}</b><i style="--bar:${categoryScore}%"></i></div>`;
    }).join("");

    const wrongResults = results.filter((item) => !item.isCorrect);
    const review = $("[data-topology-review-list]");
    review.innerHTML = wrongResults.length
      ? wrongResults.map((item) => `<article class="topology-review-item"><span>${escapeXml(item.scenario.id)} · ${escapeXml(lessonThreeVehicles[item.scenario.vehicleKey].name)}</span><strong>${escapeXml(item.scenario.question)}</strong><p>Επέλεξες: ${escapeXml(item.selected)}</p><p><b>Σωστό:</b> ${escapeXml(item.correctAnswer)} — ${escapeXml(item.scenario.explanation)}</p></article>`).join("")
      : '<article class="topology-review-item"><strong>Καμία λανθασμένη απάντηση.</strong><p>Ολοκλήρωσες τη βάρδια χωρίς λάθος.</p></article>';
    review.hidden = true;
    const toggle = $("[data-topology-review-toggle]");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = wrongResults.length ? `Προβολή λαθών (${wrongResults.length})` : "Προβολή αποτελέσματος";
    showScreen("result");
  };

  const nextScenario = () => {
    if (!locked) return;
    if (currentIndex >= session.length - 1) {
      finishSession();
      return;
    }
    currentIndex += 1;
    renderScenario();
  };

  const startSession = (selectedMode) => {
    mode = selectedMode;
    session = createSession(mode);
    answerSlots = shuffle(Array.from({ length: session.length }, (_, index) => index % 4));
    currentIndex = 0;
    correctCount = 0;
    earnedPoints = 0;
    results = [];
    showScreen("mission");
    renderScenario();
  };

  lessonThreeLab.querySelectorAll("[data-topology-start]").forEach((button) => {
    button.addEventListener("click", () => startSession(button.dataset.topologyStart));
  });
  $("[data-topology-hint]").addEventListener("click", showHint);
  $("[data-topology-next]").addEventListener("click", nextScenario);
  $("[data-topology-restart]").addEventListener("click", () => startSession(mode));
  $("[data-topology-review-toggle]").addEventListener("click", (event) => {
    const review = $("[data-topology-review-list]");
    const willOpen = review.hidden;
    review.hidden = !willOpen;
    event.currentTarget.setAttribute("aria-expanded", String(willOpen));
    event.currentTarget.textContent = willOpen ? "Απόκρυψη ανασκόπησης" : `Προβολή λαθών (${results.filter((item) => !item.isCorrect).length})`;
  });

  document.addEventListener("keydown", (event) => {
    if (screens.mission.hidden || locked || event.altKey || event.ctrlKey || event.metaKey) return;
    const keyIndex = ["a", "b", "c", "d", "α", "β", "γ", "δ", "1", "2", "3", "4"].indexOf(event.key.toLowerCase());
    if (keyIndex === -1) return;
    const normalizedIndex = keyIndex % 4;
    const option = $("[data-topology-options]").querySelectorAll("button")[normalizedIndex];
    if (option) option.click();
  });
}

