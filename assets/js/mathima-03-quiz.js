const lessonTest = document.querySelector("[data-lesson-deck]");

if (lessonTest) {
  const quizData = [
    {
      question: "Τι περιγράφει η αρχιτεκτονική δικτύου ενός σύγχρονου οχήματος;",
      options: [
        "Μόνο τη φυσική θέση των ηλεκτρονικών μονάδων μέσα στο όχημα",
        "Την οργάνωση των μονάδων, των δικτύων, των συνδέσεων και των Gateway",
        "Μόνο τις εκδόσεις λογισμικού που έχουν εγκατασταθεί στις μονάδες",
        "Τον κατάλογο των χρωμάτων που χρησιμοποιούνται στην καλωδίωση",
      ],
      correct: 1,
      feedback: "Η αρχιτεκτονική είναι ο συνολικός χάρτης επικοινωνίας: ποιες μονάδες υπάρχουν, πώς συνδέονται, σε ποια υποδίκτυα ανήκουν και πώς επικοινωνούν μεταξύ τους.",
    },
    {
      question: "Πότε μια ηλεκτρονική μονάδα χαρακτηρίζεται ως κόμβος ενός δικτύου;",
      options: [
        "Όταν τροφοδοτεί αποκλειστικά έναν αισθητήρα",
        "Όταν βρίσκεται κοντά στην κεντρική ασφαλειοθήκη",
        "Όταν έχει περισσότερες από μία ηλεκτρικές φίσες",
        "Όταν συμμετέχει στο δίκτυο στέλνοντας ή λαμβάνοντας μηνύματα",
      ],
      correct: 3,
      feedback: "Κόμβος είναι κάθε μονάδα που συμμετέχει στην επικοινωνία του δικτύου, όπως ECU κινητήρα, ABS, EPS ή BCM.",
    },
    {
      question: "Τι είναι ο δίαυλος (bus) σε ένα δίκτυο οχήματος;",
      options: [
        "Η κοινή διαδρομή επικοινωνίας πάνω στην οποία μεταφέρονται μηνύματα",
        "Η μονάδα που υπολογίζει αποκλειστικά την ταχύτητα του οχήματος",
        "Η τροφοδοσία 12 V που χρησιμοποιούν όλες οι ηλεκτρονικές μονάδες",
        "Η διαγνωστική συσκευή που συνδέεται στην πρίζα OBD",
      ],
      correct: 0,
      feedback: "Ο δίαυλος είναι ο κοινός δρόμος μεταφοράς δεδομένων. Δεν είναι ούτε τροφοδοσία ούτε διαγνωστική συσκευή.",
    },
    {
      question: "Ποια αλλαγή χαρακτηρίζει τη μετάβαση από την παλιά στην πιο σύγχρονη ηλεκτρική αρχιτεκτονική;",
      options: [
        "Κάθε λειτουργία απέκτησε περισσότερα ανεξάρτητα καλώδια από πριν",
        "Οι ηλεκτρονικές μονάδες σταμάτησαν να ανταλλάσσουν δεδομένα",
        "Πολλές μονάδες άρχισαν να μοιράζονται πληροφορίες μέσω κοινών δικτύων",
        "Οι αισθητήρες συνδέθηκαν όλοι απευθείας στον πίνακα οργάνων",
      ],
      correct: 2,
      feedback: "Στη σύγχρονη αρχιτεκτονική μία πληροφορία μπορεί να μεταδοθεί στο δίκτυο και να αξιοποιηθεί από πολλές μονάδες, περιορίζοντας την περιττή καλωδίωση.",
    },
    {
      question: "Μια μονάδα μεταδίδει στο δίκτυο την ταχύτητα του οχήματος. Τι συμβαίνει με το μήνυμα;",
      options: [
        "Φτάνει υποχρεωτικά μόνο στη μονάδα που βρίσκεται πιο κοντά στον αποστολέα",
        "Οι κόμβοι μπορούν να το δουν, αλλά το αξιοποιούν μόνο όσοι το χρειάζονται",
        "Χρησιμοποιείται από όλους τους κόμβους για την ίδια ακριβώς λειτουργία",
        "Διαγράφεται μόλις το λάβει ο πρώτος κόμβος του δικτύου",
      ],
      correct: 1,
      feedback: "Σε έναν κοινό δίαυλο πολλά μέλη λαμβάνουν το μήνυμα. Κάθε μονάδα αναγνωρίζει αν η συγκεκριμένη πληροφορία την αφορά.",
    },
    {
      question: "Τι ονομάζουμε τοπολογία δικτύου;",
      options: [
        "Τον τρόπο με τον οποίο συνδέονται και σχετίζονται οι κόμβοι και οι γραμμές επικοινωνίας",
        "Τη σειρά με την οποία τοποθετήθηκαν οι μονάδες στο εργοστάσιο",
        "Τη φυσική απόσταση κάθε αισθητήρα από την μπαταρία",
        "Τη μέγιστη τάση τροφοδοσίας που αντέχουν οι μονάδες",
      ],
      correct: 0,
      feedback: "Η τοπολογία περιγράφει τη μορφή σύνδεσης του δικτύου, όπως γραμμική, αστέρα, δακτυλίου ή υβριδική.",
    },
    {
      question: "Ποια περιγραφή ταιριάζει σε γραμμική τοπολογία (bus);",
      options: [
        "Κάθε κόμβος συνδέεται με όλους τους υπόλοιπους μέσω ξεχωριστών γραμμών",
        "Όλοι οι κόμβοι συνδέονται μόνο σε ένα κεντρικό σημείο",
        "Κάθε κόμβος συνδέεται αποκλειστικά με τον προηγούμενο και τον επόμενο",
        "Οι κόμβοι μοιράζονται έναν κοινό κορμό, συνήθως με τερματισμό στα δύο άκρα",
      ],
      correct: 3,
      feedback: "Στη γραμμική τοπολογία οι κόμβοι συνδέονται στον ίδιο κοινό κορμό. Στα άκρα του διαύλου υπάρχουν συνήθως οι κατάλληλοι τερματισμοί.",
    },
    {
      question: "Ποια περιγραφή ταιριάζει σε τοπολογία αστέρα;",
      options: [
        "Οι μονάδες σχηματίζουν κλειστό βρόχο χωρίς κεντρικό σημείο",
        "Όλες οι μονάδες συνδέονται διαδοχικά πάνω στον ίδιο κορμό",
        "Οι επιμέρους γραμμές συγκεντρώνονται σε ένα κεντρικό σημείο ή μονάδα",
        "Κάθε μονάδα διαθέτει απευθείας γραμμή προς κάθε άλλη μονάδα",
      ],
      correct: 2,
      feedback: "Στον αστέρα κάθε κλάδος καταλήγει σε κεντρικό σημείο, το οποίο μπορεί να είναι ένας διανομέας ή Gateway.",
    },
    {
      question: "Ποια περιγραφή ταιριάζει σε τοπολογία δακτυλίου;",
      options: [
        "Όλοι οι κόμβοι συνδέονται παράλληλα σε έναν κοινό κορμό",
        "Οι κόμβοι συνδέονται διαδοχικά και σχηματίζουν κλειστή διαδρομή",
        "Κάθε κλάδος ξεκινά ανεξάρτητα από ένα κεντρικό Gateway",
        "Δεν υπάρχει συγκεκριμένη διαδρομή για τη ροή των δεδομένων",
      ],
      correct: 1,
      feedback: "Στον δακτύλιο η επικοινωνία περνά από κόμβο σε κόμβο μέσα σε μια κλειστή διαδρομή. Η διακοπή της μπορεί να επηρεάσει ολόκληρο τον βρόχο.",
    },
    {
      question: "Τι σημαίνει ότι ένα όχημα έχει υβριδική ή μικτή τοπολογία;",
      options: [
        "Ότι όλες οι μονάδες χρησιμοποιούν ακριβώς το ίδιο πρωτόκολλο και την ίδια ταχύτητα",
        "Ότι το δίκτυο λειτουργεί ταυτόχρονα μόνο με καλώδιο και οπτική ίνα",
        "Ότι κάθε μονάδα είναι συνδεδεμένη χωρίς καμία οργάνωση",
        "Ότι συνδυάζονται διαφορετικές τοπολογίες ή υποδίκτυα ανάλογα με τις ανάγκες",
      ],
      correct: 3,
      feedback: "Τα σύγχρονα οχήματα συνδυάζουν συχνά γραμμικά δίκτυα, αστέρα και διαφορετικά υποδίκτυα. Αυτό αποτελεί υβριδική αρχιτεκτονική.",
    },
    {
      question: "Ποιος είναι ο βασικός ρόλος ενός Gateway στο όχημα;",
      options: [
        "Να διασυνδέει δίκτυα και να προωθεί ή να μεταφράζει τις απαραίτητες πληροφορίες",
        "Να αντικαθιστά τις αντιστάσεις τερματισμού σε κάθε δίαυλο",
        "Να τροφοδοτεί απευθείας όλους τους ενεργοποιητές του οχήματος",
        "Να αποθηκεύει αποκλειστικά τους κωδικούς βλάβης του κινητήρα",
      ],
      correct: 0,
      feedback: "Το Gateway λειτουργεί σαν ελεγχόμενη γέφυρα μεταξύ δικτύων, για παράδειγμα μεταξύ δικτύου κινητήρα, αμαξώματος και πολυμέσων.",
    },
    {
      question: "Τι είναι πιθανότερο να συμβεί αν κοπεί ο κοινός κορμός μιας γραμμικής τοπολογίας;",
      options: [
        "Θα χαθεί μόνο ο κόμβος που βρίσκεται πλησιέστερα στην μπαταρία",
        "Το Gateway θα μετατρέψει αυτόματα τον δίαυλο σε αστέρα",
        "Μπορεί να χαθεί η επικοινωνία με πολλούς κόμβους ή με ολόκληρο τμήμα του δικτύου",
        "Οι κόμβοι θα συνεχίσουν υποχρεωτικά να επικοινωνούν με την ίδια διαδρομή",
      ],
      correct: 2,
      feedback: "Επειδή πολλοί κόμβοι μοιράζονται τον ίδιο κορμό, μία διακοπή σε κρίσιμο σημείο μπορεί να απομονώσει ολόκληρο τμήμα.",
    },
    {
      question: "Σε τοπολογία αστέρα κόβεται μόνο ο κλάδος μιας μονάδας. Ποιο αποτέλεσμα είναι πιθανότερο;",
      options: [
        "Θα σταματήσει υποχρεωτικά κάθε δίκτυο του οχήματος",
        "Θα απομονωθεί κυρίως η συγκεκριμένη μονάδα, ενώ οι άλλοι κλάδοι μπορεί να λειτουργούν",
        "Θα μετατραπεί η σύνδεση σε δακτύλιο χωρίς καμία επέμβαση",
        "Θα αυξηθεί ο ρυθμός μετάδοσης των υπόλοιπων κλάδων",
      ],
      correct: 1,
      feedback: "Ένα βασικό πλεονέκτημα του αστέρα είναι ότι μια τοπική διακοπή κλάδου συνήθως περιορίζεται στον αντίστοιχο κόμβο.",
    },
    {
      question: "Τι μπορεί να προκαλέσει βλάβη στο κεντρικό σημείο μιας τοπολογίας αστέρα;",
      options: [
        "Απομόνωση μόνο της μονάδας που βρίσκεται μακρύτερα",
        "Αύξηση της αντίστασης μόνο σε έναν τυχαίο αισθητήρα",
        "Καμία επίδραση, επειδή οι κλάδοι επικοινωνούν απευθείας μεταξύ τους",
        "Απώλεια επικοινωνίας σε πολλούς ή όλους τους κλάδους που εξαρτώνται από αυτό",
      ],
      correct: 3,
      feedback: "Το κεντρικό σημείο είναι κοινό για όλους τους κλάδους. Αν αυτό αστοχήσει, η επίδραση μπορεί να είναι γενικευμένη.",
    },
    {
      question: "Τι μπορεί να συμβεί αν διακοπεί ένας δακτύλιος που δεν διαθέτει εναλλακτική διαδρομή;",
      options: [
        "Η ροή δεδομένων μπορεί να σταματήσει επειδή δεν ολοκληρώνεται η διαδρομή του δακτυλίου",
        "Η επικοινωνία μεταφέρεται πάντα αυτόματα σε ξεχωριστό κοινό κορμό",
        "Επηρεάζεται μόνο η τροφοδοσία της μονάδας πριν από το σημείο διακοπής",
        "Οι μονάδες αυξάνουν την ισχύ εκπομπής και παρακάμπτουν το κενό",
      ],
      correct: 0,
      feedback: "Χωρίς εφεδρική διαδρομή, μια διακοπή στον δακτύλιο μπορεί να εμποδίσει τη συνέχεια της ροής και να επηρεάσει πολλούς κόμβους.",
    },
    {
      question: "Γιατί η ίδια ηλεκτρική διακοπή μπορεί να προκαλεί διαφορετικά συμπτώματα σε δύο οχήματα;",
      options: [
        "Επειδή κάθε όχημα χρησιμοποιεί διαφορετικό χρώμα καλωδίων",
        "Επειδή το διαγνωστικό αλλάζει αυτόματα το είδος της βλάβης",
        "Επειδή η επίδραση εξαρτάται από την τοπολογία και από το αν το σημείο είναι κοινό ή τοπικό",
        "Επειδή κάθε διακοπή επηρεάζει υποχρεωτικά μόνο μία μονάδα",
      ],
      correct: 2,
      feedback: "Η θέση μιας βλάβης μέσα στη συγκεκριμένη τοπολογία καθορίζει πόσοι κόμβοι και ποια τμήματα θα επηρεαστούν.",
    },
    {
      question: "Ποια είναι η σωστότερη πρώτη ενέργεια πριν αρχίσουν οι μετρήσεις σε βλάβη επικοινωνίας;",
      options: [
        "Να αντικατασταθεί η πρώτη μονάδα που δεν απαντά",
        "Να μελετηθεί το διάγραμμα και η τοπολογία του συγκεκριμένου οχήματος",
        "Να αποσυνδεθούν ταυτόχρονα όλες οι μονάδες του δικτύου",
        "Να μετρηθεί μόνο η τάση της μπαταρίας και να ολοκληρωθεί η διάγνωση",
      ],
      correct: 1,
      feedback: "Το διάγραμμα δείχνει ποιοι κόμβοι μοιράζονται κλάδο, τροφοδοσία, Gateway ή κορμό. Έτσι οι μετρήσεις γίνονται στοχευμένα.",
    },
    {
      question: "Το διαγνωστικό δεν επικοινωνεί με πολλές μονάδες του ίδιου τμήματος. Πού κατευθύνεται πρώτα η υποψία;",
      options: [
        "Σε κοινό σημείο, όπως τροφοδοσία, γείωση, κορμός, ασφάλεια ή Gateway",
        "Σε ανεξάρτητη εσωτερική βλάβη όλων των μονάδων ταυτόχρονα",
        "Στον αισθητήρα που έχει τη μικρότερη τάση εξόδου",
        "Στην ανάγκη επαναπρογραμματισμού κάθε μονάδας χωρίς προηγούμενο έλεγχο",
      ],
      correct: 0,
      feedback: "Πολλές ταυτόχρονες απώλειες δείχνουν πρώτα κοινή αιτία. Η αντικατάσταση πολλών μονάδων χωρίς έλεγχο θα ήταν λανθασμένη προσέγγιση.",
    },
    {
      question: "Μόνο μία μονάδα δεν επικοινωνεί, ενώ όλες οι άλλες λειτουργούν κανονικά. Ποιος έλεγχος προηγείται;",
      options: [
        "Αντικατάσταση του κεντρικού Gateway χωρίς μέτρηση",
        "Έλεγχος όλων των τερματισμών κάθε δικτύου του οχήματος",
        "Αποσύνδεση όλων των μονάδων που συνεχίζουν να επικοινωνούν",
        "Έλεγχος τροφοδοσίας, γείωσης, φίσας και τοπικού κλάδου της συγκεκριμένης μονάδας",
      ],
      correct: 3,
      feedback: "Όταν λείπει μόνο ένας κόμβος, η βλάβη είναι συχνότερα τοπική. Πρώτα ελέγχονται όσα χρειάζεται η ίδια η μονάδα για να λειτουργήσει και να επικοινωνήσει.",
    },
    {
      question: "Γιατί οι μονάδες οργανώνονται συχνά σε διαφορετικά υποδίκτυα;",
      options: [
        "Για να μην μπορεί καμία πληροφορία να περάσει από το ένα σύστημα στο άλλο",
        "Για να έχει κάθε μονάδα αποκλειστικά δική της πρίζα διάγνωσης",
        "Για να ομαδοποιούνται λειτουργίες με παρόμοιες ανάγκες, όπως κίνηση, αμάξωμα και πολυμέσα",
        "Για να χρησιμοποιούν όλες οι λειτουργίες την ίδια ταχύτητα και το ίδιο μέσο μετάδοσης",
      ],
      correct: 2,
      feedback: "Τα υποδίκτυα οργανώνουν τις λειτουργίες και επιτρέπουν διαφορετικές ταχύτητες, κόστη και απαιτήσεις. Το Gateway μεταφέρει τις πληροφορίες που χρειάζονται μεταξύ τους.",
    },
    {
      question: "Γιατί δεν υπάρχει μία τοπολογία που να είναι καλύτερη για κάθε εφαρμογή;",
      options: [
        "Επειδή οι τοπολογίες επιλέγονται μόνο από το χρώμα του καλωδίου",
        "Επειδή κάθε επιλογή έχει διαφορετικούς συμβιβασμούς σε κόστος, αξιοπιστία και πολυπλοκότητα",
        "Επειδή η τοπολογία δεν επηρεάζει καθόλου τη λειτουργία ή τη διάγνωση",
        "Επειδή όλα τα δίκτυα καταλήγουν πρακτικά στην ίδια μορφή",
      ],
      correct: 1,
      feedback: "Ο κατασκευαστής επιλέγει ή συνδυάζει τοπολογίες ανάλογα με τις απαιτήσεις ταχύτητας, αξιοπιστίας, κόστους και διάγνωσης.",
    },
    {
      question: "Ποια στοιχεία πρέπει να δείχνει ένας πλήρης χάρτης αρχιτεκτονικής δικτύου;",
      options: [
        "Μόνο τις θέσεις των ασφαλειών και των ρελέ",
        "Μόνο τους αριθμούς ανταλλακτικών των ηλεκτρονικών μονάδων",
        "Μόνο το μήκος και το χρώμα κάθε καλωδίου",
        "Τους κόμβους, τις συνδέσεις, τα υποδίκτυα και τα σημεία διασύνδεσης όπως το Gateway",
      ],
      correct: 3,
      feedback: "Ο χρήσιμος χάρτης δείχνει ποιος επικοινωνεί με ποιον, μέσω ποιας διαδρομής και πού ενώνονται τα επιμέρους δίκτυα.",
    },
    {
      question: "Τέσσερις μονάδες του ίδιου υποδικτύου δεν εμφανίζονται στο διαγνωστικό. Ποια είναι η πιο λογική αρχική προσέγγιση;",
      options: [
        "Έλεγχος του κοινού κλάδου, της κοινής τροφοδοσίας και του Gateway πριν από αντικατάσταση μονάδων",
        "Αντικατάσταση και των τεσσάρων μονάδων επειδή δεν απαντούν",
        "Έλεγχος μόνο της τελευταίας μονάδας στη λίστα του διαγνωστικού",
        "Διαγραφή των κωδικών του κινητήρα ώστε να επανέλθει το υποδίκτυο",
      ],
      correct: 0,
      feedback: "Η ταυτόχρονη απώλεια σχετικών κόμβων κατευθύνει τη διάγνωση σε ό,τι μοιράζονται, όχι σε τέσσερις ανεξάρτητες βλάβες.",
    },
    {
      question: "Αποσυνδέεται μία ύποπτη μονάδα και αμέσως επανέρχεται η επικοινωνία των υπόλοιπων. Τι δείχνει περισσότερο αυτό το αποτέλεσμα;",
      options: [
        "Ότι όλες οι υπόλοιπες μονάδες έχουν λανθασμένο λογισμικό",
        "Ότι η αντίσταση τερματισμού αυξήθηκε υποχρεωτικά στη σωστή τιμή",
        "Ότι η μονάδα ή ο κλάδος της πιθανόν φόρτωνε ή βραχυκύκλωνε το δίκτυο",
        "Ότι το Gateway δεν χρειάζεται πλέον τροφοδοσία",
      ],
      correct: 2,
      feedback: "Η επαναφορά μετά την αποσύνδεση είναι ισχυρή ένδειξη ότι η συγκεκριμένη μονάδα ή η καλωδίωσή της επηρέαζε τον κοινό δίαυλο. Ακολουθούν στοχευμένες μετρήσεις.",
    },
    {
      question: "Το δίκτυο κινητήρα λειτουργεί, αλλά όλες οι μονάδες του δικτύου αμαξώματος έχουν χαθεί. Ποια περιοχή ελέγχεται πρώτη;",
      options: [
        "Οι αισθητήρες του κινητήρα που συνεχίζουν να δίνουν κανονικά δεδομένα",
        "Η τροφοδοσία, οι συνδέσεις και η πλευρά αμαξώματος του Gateway ή του αντίστοιχου υποδικτύου",
        "Κάθε μονάδα αμαξώματος ξεχωριστά με άμεση αντικατάσταση",
        "Το κύκλωμα φόρτισης μόνο, ανεξάρτητα από τις μετρήσεις του δικτύου",
      ],
      correct: 1,
      feedback: "Η σαφής διαχωριστική γραμμή μεταξύ λειτουργικού και μη λειτουργικού υποδικτύου οδηγεί πρώτα στο Gateway, στις τροφοδοσίες του και στις κοινές συνδέσεις της προβληματικής πλευράς.",
    },
    {
      question: "Η επικοινωνία με μονάδα πόρτας χάνεται μόνο όταν η πόρτα ανοίγει ή κλείνει. Ποιο σημείο ελέγχεται πρώτα;",
      options: [
        "Η πλεξούδα στο κινητό πέρασμα της πόρτας και οι σύνδεσμοί της",
        "Οι κεντρικές συνδέσεις του Gateway, χωρίς να ελεγχθεί πρώτα ο κλάδος της πόρτας",
        "Οι τερματισμοί του κύριου διαύλου, παρότι το σύμπτωμα ακολουθεί την κίνηση της πόρτας",
        "Η διαμόρφωση λογισμικού της μονάδας, πριν από κάθε έλεγχο καλωδίωσης",
      ],
      correct: 0,
      feedback: "Το σύμπτωμα ακολουθεί την κίνηση της πόρτας. Αυτό δείχνει πιθανή διακοπή, φθορά ή κακή επαφή στην πλεξούδα και στους συνδέσμους της.",
    },
    {
      question: "Τι πρέπει να θυμόμαστε όταν διαβάζουμε ένα σχηματικό διάγραμμα δικτύου;",
      options: [
        "Η μικρή απόσταση στο χαρτί σημαίνει πάντα ότι οι μονάδες είναι δίπλα στο όχημα",
        "Η σειρά των συμβόλων δείχνει υποχρεωτικά τη σειρά μετάδοσης όλων των μηνυμάτων",
        "Το μέγεθος του συμβόλου δείχνει την ηλεκτρική ισχύ της μονάδας",
        "Το διάγραμμα δείχνει κυρίως λογικές συνδέσεις και όχι πραγματικές φυσικές αποστάσεις",
      ],
      correct: 3,
      feedback: "Το σχηματικό οργανώνει τις ηλεκτρικές και λογικές σχέσεις. Για τη φυσική θέση των μονάδων και των φισών χρειάζονται τα αντίστοιχα διαγράμματα θέσης.",
    },
    {
      question: "Πώς εντοπίζουμε μεθοδικά το όριο μιας βλάβης επικοινωνίας;",
      options: [
        "Μετράμε τυχαία κάθε καλώδιο μέχρι να αλλάξει το σύμπτωμα",
        "Αντικαθιστούμε διαδοχικά όλες τις μονάδες του οχήματος",
        "Χωρίζουμε τους κόμβους σε όσους επικοινωνούν και όσους όχι και ελέγχουμε το κοινό σημείο μετάβασης",
        "Ελέγχουμε μόνο τον πρώτο κωδικό βλάβης και αγνοούμε την τοπολογία",
      ],
      correct: 2,
      feedback: "Η σύγκριση των λειτουργικών και μη λειτουργικών κόμβων αποκαλύπτει το πιθανό όριο. Εκεί κατευθύνονται οι επόμενοι έλεγχοι και μετρήσεις.",
    },
    {
      question: "Ποια πέντε στοιχεία συνοψίζουν καλύτερα τη λογική του Μαθήματος 3;",
      options: [
        "Κόμβος, τροφοδοσία, αισθητήρας, ενεργοποιητής, κωδικός βλάβης",
        "Κόμβος, δίαυλος, τοπολογία, Gateway, μεθοδική διάγνωση",
        "CAN High, CAN Low, dominant, recessive, bit",
        "Ρυθμός μετάδοσης, κωδικοποίηση, CRC, bus-off, παλμογράφος",
      ],
      correct: 1,
      feedback: "Οι πέντε βασικές ιδέες είναι ποιος επικοινωνεί, από ποιον δρόμο, με ποια μορφή σύνδεσης, μέσω ποιου σημείου διασύνδεσης και πώς χρησιμοποιούμε αυτόν τον χάρτη στη διάγνωση.",
    },
    {
      question: "Οι μονάδες ABS και EPS δεν επικοινωνούν, ενώ οι υπόλοιπες μονάδες λειτουργούν. Ποιο είναι το σωστό πρώτο διαγνωστικό σχέδιο;",
      options: [
        "Μελέτη της τοπολογίας για κοινό κλάδο, τροφοδοσία ή Gateway και μετά στοχευμένοι έλεγχοι",
        "Άμεση αντικατάσταση ABS και EPS επειδή εμφανίζονται και οι δύο εκτός δικτύου",
        "Έλεγχος μόνο του πίνακα οργάνων επειδή εμφανίζει τις προειδοποιητικές λυχνίες",
        "Διαγραφή όλων των κωδικών και παράδοση του οχήματος χωρίς επανέλεγχο",
      ],
      correct: 0,
      feedback: "Δύο χαμένοι κόμβοι μπορεί να μοιράζονται διαδρομή, τροφοδοσία ή σημείο διασύνδεσης. Το διάγραμμα καθορίζει τι είναι κοινό πριν γίνουν μετρήσεις ή αντικαταστάσεις.",
    },
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
    { title: "Βασικά στοιχεία αρχιτεκτονικής", meta: "κόμβος · δίαυλος · μήνυμα · τοπολογία", start: 0, end: 6 },
    { title: "Τοπολογίες και Gateway", meta: "γραμμική · αστέρας · δακτύλιος · υβριδική", start: 6, end: 12 },
    { title: "Επίδραση μιας βλάβης", meta: "κοινός κορμός · κλάδος · κεντρικό σημείο · δακτύλιος", start: 12, end: 18 },
    { title: "Υποδίκτυα και διαγνωστικός χάρτης", meta: "οργάνωση · κοινά σημεία · όριο βλάβης", start: 18, end: 24 },
    { title: "Εφαρμογή στη διάγνωση", meta: "Gateway · διαλείπουσα βλάβη · διαγνωστικά σενάρια", start: 24, end: 30 },
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
      ? "Τεστ Μαθήματος 3"
      : "Αρχιτεκτονική και τοπολογίες δικτύων · Διαφάνεια " + currentSlide.textContent;
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
      resultMessage.textContent = "Κατανοείς με σαφήνεια την αρχιτεκτονική, τις τοπολογίες και τη διαγνωστική σημασία τους.";
    } else if (score >= 24) {
      statusTarget.textContent = "Επιτυχής ολοκλήρωση";
      resultMessage.textContent = "Πέρασες το τεστ. Δες τις εξηγήσεις στις λανθασμένες απαντήσεις πριν προχωρήσεις.";
    } else if (score >= 18) {
      statusTarget.textContent = "Χρειάζεται στοχευμένη επανάληψη";
      resultMessage.textContent = "Επανέλαβε τις διαφάνειες για τις τοπολογίες, το Gateway και τον εντοπισμό κοινών σημείων βλάβης.";
    } else {
      statusTarget.textContent = "Χρειάζεται επανάληψη του μαθήματος";
      resultMessage.textContent = "Δες ξανά τις 30 διαφάνειες και προσπάθησε να συνδέσεις κάθε σύμπτωμα με τον χάρτη του δικτύου.";
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
