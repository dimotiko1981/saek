(() => {
  const root = document.querySelector('[data-lab7-cases]');
  if (!root) return;

  const cases = [
    {
      car: 'Volvo ηλεκτρικό SUV', network: 'LIN · master και slave', image: 'assets/images/mathima-07-cases/volvo-electric-suv.webp',
      symptom: 'Ο οδηγός αναφέρει ότι το παράθυρο συνοδηγού κάποιες φορές δεν ανταποκρίνεται στην εντολή.',
      evidence: ['Στο υποθετικό πρόγραμμα LIN, ο master στέλνει το προγραμματισμένο πλαίσιο για την κατάσταση παραθύρου.', 'Η τροφοδοσία και η γείωση της slave μονάδας μετρήθηκαν εντός των ορίων του σεναρίου.', 'Στην καταγραφή, η slave μονάδα δεν έστειλε απάντηση σε τρεις επαναλήψεις του πλαισίου.'],
      report: '«Η slave μονάδα έχει εσωτερική βλάβη και πρέπει να αντικατασταθεί.»', status: 'unsupported',
      reasons: [
        { text: 'Η απουσία απάντησης δεν αρκεί μόνη της· χρειάζεται έλεγχος της γραμμής, της επικεφαλίδας και της μονάδας με την προβλεπόμενη διαδικασία.', correct: true },
        { text: 'Στο LIN ο master στέλνει και τα δεδομένα κάθε απάντησης, άρα η slave δεν ελέγχεται.', correct: false },
        { text: 'Τρεις αποτυχημένες αποκρίσεις αποδεικνύουν πάντα εσωτερική βλάβη.', correct: false }
      ], review: 'Η καταγραφή δείχνει απουσία απόκρισης, όχι ακόμη την αιτία της. Απαιτούνται οι υπόλοιποι έλεγχοι του σεναρίου.',
      model: '«Δεν καταγράφηκε απόκριση της slave μονάδας σε τρεις επαναλήψεις. Η αιτία δεν έχει επιβεβαιωθεί· συνεχίζεται ο έλεγχος της επικεφαλίδας, της γραμμής και της μονάδας.»'
    },
    {
      car: 'Alfa Romeo Tonale', network: 'SAE J1850 · παρατήρηση διαύλου', image: 'assets/images/mathima-07-cases/alfa-romeo-tonale.webp',
      symptom: 'Η διαγνωστική συσκευή καταγράφει διακοπτόμενη απώλεια επικοινωνίας στο υποθετικό περιστατικό.',
      evidence: ['Η εκπαιδευτική καταγραφή αναγνωρίζει πλαίσια SAE J1850 VPW πριν και κατά την εμφάνιση του συμπτώματος.', 'Στο διάστημα του συμπτώματος, η κυματομορφή χάνεται στο ίδιο σημείο της γραμμής.', 'Μετά την επισκευή του συγκεκριμένου συνδέσμου, η κυματομορφή και η επικοινωνία επανήλθαν σε επαναλαμβανόμενες δοκιμές.'],
      report: '«Η κακή επαφή στον σύνδεσμο διέκοπτε τη μετάδοση. Η επισκευή επιβεβαιώθηκε με επανέλεγχο.»', status: 'supported',
      reasons: [
        { text: 'Εντοπίστηκε σημείο διακοπής, επισκευάστηκε και η ίδια δοκιμή επαναλήφθηκε επιτυχώς.', correct: true },
        { text: 'Κάθε απώλεια επικοινωνίας αποδεικνύει ότι χάλασε η μονάδα ελέγχου.', correct: false },
        { text: 'Η SAE J1850 είναι πάντα δίκτυο δύο συρμάτων CAN-H/CAN-L.', correct: false }
      ], review: 'Η συγκεκριμένη απόφαση στηρίζεται στο μετρημένο εύρημα και στην επιτυχή επανάληψη της ίδιας δοκιμής.',
      model: '«Στο εκπαιδευτικό σενάριο εντοπίστηκε διακοπή στον σύνδεσμο. Μετά την επισκευή, η κυματομορφή και η επικοινωνία αποκαταστάθηκαν στις επαναλαμβανόμενες δοκιμές.»'
    },
    {
      car: 'Audi Q3', network: 'I²C · γραμμές SDA και SCL', image: 'assets/images/mathima-07-cases/audi-q3.webp',
      symptom: 'Ένας αισθητήρας σε υποθετικό κύκλωμα χαμηλής τάσης εμφανίζει κατά διαστήματα τιμή μη έγκυρη.',
      evidence: ['Στο σενάριο, η επικοινωνία γίνεται σε μικρή τοπική σύνδεση I²C με γραμμές SDA και SCL.', 'Η γραμμή SCL έχει κανονικούς παλμούς, αλλά η SDA παραμένει χαμηλή ακόμη και όταν οι συσκευές δεν εκπέμπουν.', 'Δεν έγινε αποσύνδεση του αισθητήρα ούτε έλεγχος της καλωδίωσης για να εντοπιστεί ποιο στοιχείο κρατά τη γραμμή χαμηλά.'],
      report: '«Ο αισθητήρας έχει χαλάσει. Η αντικατάστασή του θα λύσει το πρόβλημα.»', status: 'unsupported',
      reasons: [
        { text: 'Η χαμηλή SDA δείχνει πρόβλημα στην επικοινωνία, αλλά χωρίς απομόνωση δεν αποδεικνύεται ότι φταίει ο αισθητήρας.', correct: true },
        { text: 'Στο I²C η SDA μεταφέρει μόνο τροφοδοσία, άρα δεν χρειάζεται έλεγχος.', correct: false },
        { text: 'Όταν η SCL έχει παλμούς, ο αισθητήρας είναι οπωσδήποτε χαλασμένος.', correct: false }
      ], review: 'Η ένδειξη εντοπίζει πρόβλημα στη γραμμή δεδομένων, αλλά δεν ξεχωρίζει αισθητήρα, σύνδεση ή άλλο στοιχείο του διαύλου.',
      model: '«Η SDA παρέμεινε χαμηλή ενώ η SCL λειτουργούσε. Η αιτία δεν έχει εντοπιστεί· απαιτείται απομόνωση των συσκευών και έλεγχος της γραμμής.»'
    },
    {
      car: 'BMW XM', network: 'Chrysler PCI Bus · έλεγχος γραμμής', image: 'assets/images/mathima-07-cases/bmw-xm.webp',
      symptom: 'Στο υποθετικό δελτίο, μία μονάδα εμφανίζεται εκτός επικοινωνίας μετά από εργασία σε σύνδεσμο.',
      evidence: ['Ο εξομοιωτής του εκπαιδευτικού περιστατικού δηλώνει ρητά ότι εξετάζεται Chrysler PCI Bus.', 'Η τροφοδοσία και η γείωση της μονάδας ελέγχθηκαν υπό φορτίο και ήταν εντός ορίων.', 'Στον σύνδεσμο βρέθηκε ακροδέκτης που δεν είχε ασφαλίσει· μετά την ασφάλισή του, η μονάδα απάντησε σε πέντε διαδοχικές σαρώσεις.'],
      report: '«Η χαλαρή επαφή στον σύνδεσμο προκαλούσε την απώλεια επικοινωνίας. Μετά την ασφάλιση, η λειτουργία επαληθεύτηκε.»', status: 'supported',
      reasons: [
        { text: 'Υπάρχει συγκεκριμένο εύρημα και η επικοινωνία αποκαταστάθηκε στην επαναληπτική δοκιμή.', correct: true },
        { text: 'Το PCI Bus είναι η ίδια επέκταση υπολογιστή που τοποθετείται σε μητρική πλακέτα.', correct: false },
        { text: 'Η απουσία επικοινωνίας αποδεικνύει ότι χάλασε ολόκληρος ο δίαυλος.', correct: false }
      ], review: 'Η διάγνωση τεκμηριώνεται από το εύρημα στον σύνδεσμο και από την επιτυχή επανάληψη της σάρωσης.',
      model: '«Εντοπίστηκε μη ασφαλισμένος ακροδέκτης. Μετά την ασφάλισή του, η μονάδα απάντησε σε πέντε διαδοχικές σαρώσεις.»'
    },
    {
      car: 'Dacia Duster', network: 'LIN · επικεφαλίδα και απόκριση', image: 'assets/images/mathima-07-cases/dacia-duster.webp',
      symptom: 'Μία μονάδα φωτισμού δεν αλλάζει κατάσταση κάθε φορά που δίνεται εντολή.',
      evidence: ['Το υποθετικό πρόγραμμα ορίζει ότι ο master ξεκινά το πλαίσιο και επιλέγει ποια slave μονάδα θα απαντήσει.', 'Η επικεφαλίδα με το ID της εντολής εμφανίζεται κανονικά στην καταγραφή.', 'Δεν καταγράφηκε απάντηση από την slave, αλλά δεν μετρήθηκαν τροφοδοσία, γείωση ή τάση στη γραμμή κοντά στη μονάδα.'],
      report: '«Ο master δεν στέλνει σωστά το μήνυμα.»', status: 'unsupported',
      reasons: [
        { text: 'Η επικεφαλίδα καταγράφηκε κανονικά· η απουσία απάντησης δεν αποδεικνύει βλάβη του master.', correct: true },
        { text: 'Στο LIN ο master δεν ξεκινά ποτέ την επικοινωνία.', correct: false },
        { text: 'Η slave απάντησε κανονικά, άρα το δίκτυο λειτουργεί.', correct: false }
      ], review: 'Η καταγραφή επιβεβαιώνει ότι στάλθηκε η επικεφαλίδα. Χρειάζονται έλεγχοι στην απόκριση και στα κυκλώματα της slave.',
      model: '«Η επικεφαλίδα με το ID καταγράφηκε, αλλά δεν εμφανίστηκε απόκριση της slave. Η αιτία δεν έχει αποδειχθεί· απαιτούνται επιπλέον μετρήσεις.»'
    },
    {
      car: 'Honda HR-V', network: 'Σύγκριση δικτύων · χαμηλή τάση', image: 'assets/images/mathima-07-cases/honda-hr-v.webp',
      symptom: 'Στην εκπαιδευτική διάταξη, ένα απλό χειριστήριο δεν στέλνει την κατάστασή του σε τοπική μονάδα.',
      evidence: ['Το συγκεκριμένο σενάριο χαμηλής τάσης περιγράφει επικοινωνία I²C μεταξύ δύο κοντινών ηλεκτρονικών στοιχείων.', 'Καταγράφηκαν παλμοί SCL και αλλαγές στην SDA, αλλά δεν εμφανίστηκε η αναμενόμενη επιβεβαίωση από τη συσκευή.', 'Μετά τη διόρθωση της διεύθυνσης της συσκευής στο εκπαιδευτικό πρόγραμμα, η επιβεβαίωση εμφανίστηκε και η εντολή λειτούργησε.'],
      report: '«Η λανθασμένη διεύθυνση στη ρύθμιση του σεναρίου εμπόδιζε την αναγνώριση της συσκευής. Η αλλαγή επαληθεύτηκε με επιτυχή επικοινωνία.»', status: 'supported',
      reasons: [
        { text: 'Η αιτία διορθώθηκε και αμέσως μετά εμφανίστηκε η αναμενόμενη επιβεβαίωση και λειτουργία.', correct: true },
        { text: 'Το I²C χρησιμοποιεί ID CAN για να επιλέγει συσκευή.', correct: false },
        { text: 'Ένα ηλεκτρικό όχημα δεν μπορεί να έχει δίκτυα χαμηλής τάσης.', correct: false }
      ], review: 'Η μεταβολή της ρύθμισης οδήγησε σε αναγνώριση και η λειτουργία επιβεβαιώθηκε. Το παράδειγμα αφορά μόνο το υποθετικό κύκλωμα χαμηλής τάσης.',
      model: '«Η διεύθυνση της συσκευής στη ρύθμιση δεν ταίριαζε με το σενάριο. Μετά τη διόρθωση, καταγράφηκε επιβεβαίωση και επιτυχής λειτουργία.»'
    },
    {
      car: 'Hyundai Tucson Hybrid', network: 'Σύγκριση CAN και LIN', image: 'assets/images/mathima-07-cases/hyundai-tucson-hybrid.webp',
      symptom: 'Σε ένα υποθετικό σύστημα άνεσης, μια περιφερειακή μονάδα καθρέφτη δεν αλλάζει θέση.',
      evidence: ['Ο master στέλνει την προγραμματισμένη επικεφαλίδα LIN για την κατάσταση του καθρέφτη.', 'Η slave αποκρίνεται με τα ίδια δεδομένα σε κάθε επανάληψη, αλλά η ένδειξη θέσης παραμένει αμετάβλητη.', 'Δεν ελέγχθηκαν το μοτέρ, η τροφοδοσία του ή η μηχανική κίνηση του καθρέφτη.'],
      report: '«Η επικοινωνία LIN διακόπτεται και γι’ αυτό δεν κινείται ο καθρέφτης.»', status: 'unsupported',
      reasons: [
        { text: 'Τα δεδομένα LIN φτάνουν κανονικά· χρειάζονται έλεγχοι στην έξοδο, στο μοτέρ και στη μηχανική κίνηση.', correct: true },
        { text: 'Το LIN απαιτεί κάθε slave να στέλνει συνεχώς μηνύματα χωρίς master.', correct: false },
        { text: 'Αν η θέση δεν αλλάζει, η επικοινωνία έχει οπωσδήποτε διακοπεί.', correct: false }
      ], review: 'Η επιτυχής απόκριση δείχνει ότι υπάρχει επικοινωνία στο συγκεκριμένο μήνυμα, όχι ότι λειτουργεί το φορτίο.',
      model: '«Η slave αποκρίνεται κανονικά, αλλά η θέση δεν αλλάζει. Η επικοινωνία δεν τεκμηριώνεται ως αιτία· απαιτούνται έλεγχοι στο μοτέρ και στην τροφοδοσία του.»'
    },
    {
      car: 'Suzuki Vitara', network: 'SAE J1850 · πλαίσιο και σφάλμα', image: 'assets/images/mathima-07-cases/suzuki-vitara.webp',
      symptom: 'Μία εκπαιδευτική καταγραφή δείχνει σφάλμα σε μήνυμα μετάδοσης κατά την εκκίνηση.',
      evidence: ['Στο υποθετικό εργαστηριακό παράδειγμα, ο αναλυτής έχει ρυθμιστεί για SAE J1850 PWM.', 'Το μήνυμα δεν ολοκληρώνεται και η καταγραφή σταματά πριν από έγκυρο τέλος πλαισίου.', 'Δεν αναφέρονται έλεγχοι τροφοδοσίας, καλωδίωσης ή ρυθμίσεων του αναλυτή.'],
      report: '«Η μονάδα μετάδοσης έχει εσωτερική βλάβη.»', status: 'unsupported',
      reasons: [
        { text: 'Το ημιτελές πλαίσιο δεν εντοπίζει αν φταίει η μονάδα, η γραμμή, η τροφοδοσία ή η ρύθμιση του αναλυτή.', correct: true },
        { text: 'Η SAE J1850 δεν έχει πλαίσια ή κανόνες μετάδοσης.', correct: false },
        { text: 'Κάθε μήνυμα χωρίς EOF αποδεικνύει βλάβη της μονάδας που το έστειλε.', correct: false }
      ], review: 'Η καταγραφή εντοπίζει μη ολοκληρωμένη μετάδοση, αλλά χρειάζονται έλεγχοι πριν αποδοθεί σε συγκεκριμένη μονάδα.',
      model: '«Καταγράφηκε μη ολοκληρωμένο πλαίσιο. Η αιτία δεν έχει εντοπιστεί· ελέγχονται οι ρυθμίσεις μέτρησης, η γραμμή και οι τροφοδοσίες.»'
    },
    {
      car: 'Toyota Yaris Cross', network: 'Chrysler PCI Bus · επιβεβαίωση επισκευής', image: 'assets/images/mathima-07-cases/toyota-yaris-cross.webp',
      symptom: 'Στο υποθετικό περιστατικό, η επικοινωνία διακόπτεται όταν κινείται ελαφρά ο συγκεκριμένος σύνδεσμος.',
      evidence: ['Η διακοπή αναπαράγεται κάθε φορά που κινείται ο σύνδεσμος του εκπαιδευτικού πάγκου.', 'Βρέθηκε χαλαρός ακροδέκτης στην επαφή της γραμμής του σεναρίου PCI Bus.', 'Μετά την ασφάλιση του ακροδέκτη, η ίδια δοκιμή κίνησης και η σάρωση ολοκληρώθηκαν χωρίς διακοπή.'],
      report: '«Η χαλαρή επαφή προκαλούσε τη διακοπτόμενη επικοινωνία και η αποκατάσταση επαληθεύτηκε.»', status: 'supported',
      reasons: [
        { text: 'Το σύμπτωμα αναπαράχθηκε, εντοπίστηκε χαλαρός ακροδέκτης και η ίδια δοκιμή πέρασε μετά την επισκευή.', correct: true },
        { text: 'Η δοκιμή κίνησης δεν μπορεί να βοηθήσει σε διακοπτόμενο πρόβλημα.', correct: false },
        { text: 'Κάθε σφάλμα σε δίαυλο PCI σημαίνει ότι πρέπει να αλλαχθεί ο εγκέφαλος.', correct: false }
      ], review: 'Το εύρημα και ο επανέλεγχος συνδέουν την επισκευή με την αποκατάσταση στο συγκεκριμένο εκπαιδευτικό περιστατικό.',
      model: '«Εντοπίστηκε χαλαρός ακροδέκτης. Μετά την ασφάλισή του, η δοκιμή κίνησης και η σάρωση ολοκληρώθηκαν χωρίς διακοπή.»'
    },
    {
      car: 'Volkswagen T-Roc', network: 'Σύγκριση LIN και CAN', image: 'assets/images/mathima-07-cases/volkswagen-t-roc.webp',
      symptom: 'Σε υποθετικό σύστημα άνεσης, ένα κουμπί δεν αλλάζει την ένδειξη κατάστασης στην οθόνη.',
      evidence: ['Το δελτίο αναφέρει πλαίσιο CAN μεταξύ δύο μονάδων, χωρίς καταγεγραμμένο σφάλμα μετάδοσης.', 'Η μονάδα λήψης καταγράφει το μήνυμα και την τιμή του κουμπιού σωστά.', 'Δεν έγινε έλεγχος της οθόνης, της λογικής εφαρμογής ή της αντίστοιχης εξόδου.'],
      report: '«Το δίκτυο CAN έχει βλάβη, επειδή η οθόνη δεν αλλάζει ένδειξη.»', status: 'unsupported',
      reasons: [
        { text: 'Το μήνυμα καταγράφεται σωστά· η απουσία αλλαγής στην οθόνη απαιτεί έλεγχο μετά τη λήψη του μηνύματος.', correct: true },
        { text: 'Κάθε CAN μήνυμα πρέπει να μεταφέρει εικόνα στην οθόνη.', correct: false },
        { text: 'Το LIN και το CAN είναι ίδια δίκτυα και έχουν πάντα τον ίδιο ρόλο.', correct: false }
      ], review: 'Η καταγραφή επιβεβαιώνει τη μετάδοση και τη λήψη του μηνύματος. Η αιτία μπορεί να βρίσκεται στην επεξεργασία ή στην ένδειξη.',
      model: '«Το μήνυμα CAN και η τιμή του κουμπιού καταγράφονται σωστά. Η αιτία της μη αλλαγής στην οθόνη δεν τεκμηριώνεται ως βλάβη δικτύου· συνεχίζεται ο έλεγχος της μονάδας λήψης και της ένδειξης.»'
    }
  ];

  const cards = root.querySelector('[data-l7-cards]');
  const panel = root.querySelector('[data-l7-case]');
  const finish = root.querySelector('[data-l7-finish]');
  const doneNode = root.querySelector('[data-l7-done]');
  const scoreNode = root.querySelector('[data-l7-score]');
  const storageKey = 'saek-lab7-case-scores-v1';
  let scoreByCase = new Map();
  try {
    const stored = JSON.parse(sessionStorage.getItem(storageKey) || '{}');
    Object.entries(stored).forEach(([index, points]) => {
      const n = Number(index);
      if (Number.isInteger(n) && n >= 0 && n < cases.length && Number.isInteger(points) && points >= 0 && points <= 2) scoreByCase.set(n, points);
    });
  } catch {}
  let activeIndex = -1;
  const statusLabels = { supported: 'Τεκμηριωμένο', unsupported: 'Ατεκμηρίωτο' };
  const shuffle = values => [...values].map(value => ({value, sort: Math.random()})).sort((a,b) => a.sort-b.sort).map(item => item.value);

  function updateProgress(scroll = false) {
    const done = scoreByCase.size;
    const score = [...scoreByCase.values()].reduce((sum, points) => sum + points, 0);
    doneNode.textContent = String(done); scoreNode.textContent = String(score);
    finish.hidden = done !== cases.length;
    root.querySelector('[data-l7-final-score]').textContent = String(score);
    if (done === cases.length && scroll) finish.scrollIntoView({behavior:'smooth', block:'center'});
  }

  function renderCards() {
    cards.innerHTML = cases.map((item, index) => {
      const points = scoreByCase.get(index), active = index === activeIndex;
      return `<button class="dossier-card${points !== undefined ? ' is-done' : ''}${active ? ' is-active' : ''}" type="button" data-l7-open="${index}" aria-current="${active ? 'true' : 'false'}">
        <img src="${item.image}" width="1280" height="960" loading="lazy" alt="${item.car}">
        <span class="dossier-card-body"><small>ΔΕΛΤΙΟ ${String(index+1).padStart(2,'0')} · ${item.network}</small><strong>${item.car}</strong><span>${points !== undefined ? `Ολοκληρώθηκε · ${points}/2` : 'Προς έλεγχο'}</span></span>
      </button>`;
    }).join('');
    cards.querySelectorAll('[data-l7-open]').forEach(button => button.addEventListener('click', () => openCase(Number(button.dataset.l7Open))));
  }

  function openCase(index) {
    activeIndex = index;
    finish.hidden = true;
    const item = cases[index], priorScore = scoreByCase.get(index);
    const statusOptions = [
      {text:'Τεκμηριωμένο', correct:item.status === 'supported'},
      {text:'Ατεκμηρίωτο', correct:item.status === 'unsupported'}
    ];
    const reasonOptions = shuffle(item.reasons).map((option, i) => ({...option, key:String(i)}));
    panel.innerHTML = `<div class="case-heading"><div><span class="eyebrow">ΔΕΛΤΙΟ ${String(index+1).padStart(2,'0')} · ${item.network}</span><h2>${item.car}</h2><p>Διάβασε τα στοιχεία και έλεγξε αν η απόφαση στηρίζεται στα ευρήματα.</p></div><span class="case-number">${String(index+1).padStart(2,'0')} / ${cases.length}</span></div>
      <div class="case-grid"><article class="vehicle-card"><img src="${item.image}" width="1280" height="720" alt="${item.car}"><div class="vehicle-caption"><strong>${item.car}</strong><span>Εκπαιδευτικό δελτίο · υποθετικό περιστατικό</span></div></article>
      <div class="report-stack"><section class="report-card"><h3>ΑΝΑΦΟΡΑ ΟΔΗΓΟΥ</h3><p>${item.symptom}</p></section><section class="report-card"><h3>ΚΑΤΑΓΕΓΡΑΜΜΕΝΑ ΣΤΟΙΧΕΙΑ</h3><ul class="evidence-list">${item.evidence.map((line,i)=>`<li><b>${i+1}</b><span>${line}</span></li>`).join('')}</ul></section><section class="report-card tech-report"><h3>ΣΥΜΠΕΡΑΣΜΑ ΤΕΧΝΙΚΟΥ</h3><p>«${item.report.replace(/^«|»$/g,'')}»</p></section></div></div>
      ${priorScore !== undefined ? `<div class="audit-feedback"><h3>Το δελτίο έχει ήδη ελεγχθεί · ${priorScore}/2 βαθμοί</h3><p><b>Αξιολόγηση:</b> ${statusLabels[item.status]}. ${item.review}</p><p class="model-answer"><b>Ενδεικτική καταγραφή:</b> ${item.model}</p></div><div class="button-row"><button class="primary-button" type="button" data-l7-next>Επόμενο δελτίο →</button></div>` : `<form class="audit-form" data-l7-form novalidate>
        <fieldset class="audit-question"><legend>1. Πόσο τεκμηριώνεται η απόφαση του τεχνικού;</legend><div class="audit-options">${statusOptions.map((option,i)=>`<label class="audit-option"><input type="radio" name="l7-status" value="${i}" data-correct="${option.correct}"><span>${option.text}</span></label>`).join('')}</div></fieldset>
        <fieldset class="audit-question"><legend>2. Ποια κρίση περιγράφει καλύτερα το βασικό σημείο;</legend><div class="audit-options">${reasonOptions.map((option,i)=>`<label class="audit-option"><input type="radio" name="l7-reason" value="${i}" data-correct="${option.correct}"><span>${option.text}</span></label>`).join('')}</div></fieldset>
        <p class="form-error" data-l7-error hidden>Επίλεξε απάντηση και στις δύο ερωτήσεις.</p><div class="button-row"><button class="primary-button" type="submit">Υποβολή ελέγχου</button><button class="secondary-button" type="button" data-l7-next>Επόμενο δελτίο →</button></div>
      </form>`}`;
    panel.hidden = false;
    panel.scrollIntoView({behavior:'smooth', block:'start'});
    panel.querySelector('[data-l7-next]').addEventListener('click', () => openNext(index));
    panel.querySelector('[data-l7-form]')?.addEventListener('submit', event => submit(event, index));
    renderCards();
  }

  function openNext(after) {
    for (let offset = 1; offset <= cases.length; offset++) {
      const candidate = (after + offset) % cases.length;
      if (!scoreByCase.has(candidate)) return openCase(candidate);
    }
    panel.hidden = true; updateProgress(true);
  }

  function submit(event, index) {
    event.preventDefault();
    const form = event.currentTarget;
    const selected = [...form.querySelectorAll('input[type="radio"]:checked')];
    if (selected.length !== 2) { form.querySelector('[data-l7-error]').hidden = false; return; }
    const points = selected.filter(input => input.dataset.correct === 'true').length;
    scoreByCase.set(index, points);
    try { sessionStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(scoreByCase))); } catch {}
    const item = cases[index];
    const feedback = document.createElement('section');
    feedback.className = `audit-feedback${points === 2 ? '' : ' is-review'}`;
    feedback.setAttribute('aria-live','polite');
    feedback.innerHTML = `<h3>${points === 2 ? 'Ο έλεγχος είναι σωστός.' : `Έλεγξε ξανά την τεκμηρίωση. ${points}/2 σωστές κρίσεις.`}</h3><p><b>Αξιολόγηση δελτίου:</b> ${statusLabels[item.status]}. ${item.review}</p><p class="model-answer"><b>Ενδεικτική καταγραφή:</b> ${item.model}</p>`;
    form.replaceWith(feedback);
    updateProgress(true); renderCards();
    const next = document.createElement('button');
    next.type = 'button'; next.className = 'secondary-button'; next.textContent = 'Επόμενο δελτίο →'; next.addEventListener('click', () => openNext(index));
    feedback.after(next);
  }

  root.querySelector('[data-l7-back]').addEventListener('click', () => { root.querySelector('.dossier-grid').scrollIntoView({behavior:'smooth',block:'start'}); });
  root.querySelector('[data-l7-restart]').addEventListener('click', () => {
    scoreByCase.clear(); activeIndex = -1;
    try { sessionStorage.removeItem(storageKey); } catch {}
    panel.hidden = true; finish.hidden = true; updateProgress(); renderCards();
    root.querySelector('.dossier-grid').scrollIntoView({behavior:'smooth',block:'start'});
  });
  renderCards(); updateProgress();
})();
