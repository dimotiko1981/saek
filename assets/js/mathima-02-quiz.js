const lessonDeck = document.querySelector("[data-lesson-deck]");

if (lessonDeck) {
  const quizData = [
    {
      question: "Τι ονομάζουμε δεδομένο σε ένα ηλεκτρονικό σύστημα οχήματος;",
      options: ["Την τελική επισκευή που επέλεξε ο τεχνικός", "Μια καταγεγραμμένη τιμή ή κατάσταση", "Μόνο έναν κωδικό βλάβης", "Κάθε ηλεκτρικό καλώδιο του οχήματος"],
      correct: 1,
      feedback: "Δεδομένο είναι μια καταγεγραμμένη τιμή ή κατάσταση, όπως 92 °C, 40% θέση πεντάλ ή ανοιχτή πόρτα.",
    },
    {
      question: "Ο αισθητήρας δείχνει θερμοκρασία ψυκτικού 112 °C. Πότε η τιμή αυτή γίνεται χρήσιμη πληροφορία;",
      options: ["Όταν αποθηκευτεί χωρίς μονάδα μέτρησης", "Όταν περάσει μόνο από ένα καλώδιο", "Όταν μετατραπεί υποχρεωτικά σε κωδικό βλάβης", "Όταν ερμηνευτεί σε σχέση με τη λειτουργία του κινητήρα"],
      correct: 3,
      feedback: "Η τιμή αποκτά νόημα όταν η ECU ή ο τεχνικός την ερμηνεύσει ως φυσιολογική, υψηλή ή παράλογη για τις συγκεκριμένες συνθήκες.",
    },
    {
      question: "Ποια σειρά περιγράφει σωστά τη διαδρομή της πληροφορίας όταν ο οδηγός πατά το πεντάλ;",
      options: ["Πάτημα πεντάλ → αισθητήρας → ηλεκτρικό σήμα → ECU → εντολή", "Πάτημα πεντάλ → ενεργοποιητής → αισθητήρας → μπαταρία", "ECU → πεντάλ → καλώδιο → οδηγός → αισθητήρας", "Μπαταρία → διαγνωστικό → πεντάλ → ECU"],
      correct: 0,
      feedback: "Ο αισθητήρας μετρά τη θέση του πεντάλ, τη μετατρέπει σε ηλεκτρικό σήμα και η ECU επεξεργάζεται την πληροφορία πριν δώσει εντολή.",
    },
    {
      question: "Ποιο παράδειγμα περιγράφει αναλογικό σήμα;",
      options: ["Μήνυμα που περιέχει μόνο τον αριθμό 0", "Διακόπτης που είναι μόνο ανοικτός ή κλειστός", "Τάση αισθητήρα που αλλάζει συνεχώς από 0 έως 5 V", "Κωδικός βλάβης που αποθηκεύτηκε στη μνήμη"],
      correct: 2,
      feedback: "Ένα αναλογικό σήμα μπορεί να πάρει συνεχόμενες ενδιάμεσες τιμές, όπως μια τάση από 0 έως 5 V.",
    },
    {
      question: "Ποιο είναι το βασικό χαρακτηριστικό ενός ψηφιακού σήματος;",
      options: ["Μεταβάλλεται πάντα ομαλά", "Χρησιμοποιεί διακριτές καταστάσεις, όπως 0 και 1", "Μεταφέρεται μόνο ασύρματα", "Δεν επηρεάζεται ποτέ από βλάβες"],
      correct: 1,
      feedback: "Το ψηφιακό σήμα εκφράζεται με διακριτές καταστάσεις. Στα απλά παραδείγματα αυτές παριστάνονται ως 0 και 1.",
    },
    {
      question: "Ένας αισθητήρας στέλνει στην ECU αναλογική τάση 2,3 V. Τι χρειάζεται πριν χρησιμοποιηθεί ως ψηφιακός αριθμός;",
      options: ["Ενισχυτής ήχου", "Αντίσταση τερματισμού", "Κεραία ασύρματης μετάδοσης", "Μετατροπέας αναλογικού σήματος σε ψηφιακό"],
      correct: 3,
      feedback: "Ο μετατροπέας A/D δειγματοληπτεί την αναλογική τάση και την αποδίδει ως αριθμό που μπορεί να επεξεργαστεί η ECU.",
    },
    {
      question: "Τι είναι ένα bit;",
      options: ["Ομάδα οκτώ μηνυμάτων", "Μονάδα μέτρησης της τάσης", "Η μικρότερη ψηφιακή μονάδα με δύο δυνατές καταστάσεις", "Ένα πλήρες διαγνωστικό αρχείο"],
      correct: 2,
      feedback: "Ένα bit έχει δύο δυνατές καταστάσεις, συνήθως 0 ή 1, και αποτελεί τη μικρότερη μονάδα ψηφιακής πληροφορίας.",
    },
    {
      question: "Πόσα bit περιέχει ένα byte;",
      options: ["8 bit", "2 bit", "16 bit", "256 bit"],
      correct: 0,
      feedback: "Ένα byte αποτελείται από 8 bit και μπορεί να σχηματίσει 256 διαφορετικούς συνδυασμούς.",
    },
    {
      question: "Θέλουμε να αποθηκεύσουμε τιμή στροφών κινητήρα 6.500 rpm. Γιατί ένα byte συνήθως δεν αρκεί;",
      options: ["Επειδή το byte μεταφέρει μόνο γράμματα", "Επειδή οι στροφές είναι αναλογικό μέγεθος", "Επειδή ένα byte δεν λειτουργεί μέσα σε ECU", "Επειδή ένα byte χωρίς μετατροπή παριστά τιμές μόνο από 0 έως 255"],
      correct: 3,
      feedback: "Με 8 bit έχουμε 256 συνδυασμούς. Για μεγαλύτερο αριθμητικό εύρος χρησιμοποιούνται περισσότερα byte ή κατάλληλη κωδικοποίηση.",
    },
    {
      question: "Το διαγνωστικό διαβάζει ωμή τιμή A = 132 και ο κανόνας είναι θερμοκρασία = A − 40. Ποια είναι η θερμοκρασία;",
      options: ["172 °C", "92 °C", "132 °C", "40 °C"],
      correct: 1,
      feedback: "Εφαρμόζουμε τον κανόνα αποκωδικοποίησης: 132 − 40 = 92 °C.",
    },
    {
      question: "Γιατί τα σύγχρονα οχήματα χρησιμοποιούν δίκτυα επικοινωνίας;",
      options: ["Για να καταργήσουν όλους τους αισθητήρες", "Για να λειτουργούν χωρίς ηλεκτρική τροφοδοσία", "Για να μοιράζονται δεδομένα με λιγότερη και οργανωμένη καλωδίωση", "Για να έχει κάθε πληροφορία αποκλειστικό καλώδιο"],
      correct: 2,
      feedback: "Το δίκτυο επιτρέπει σε πολλές μονάδες να χρησιμοποιούν κοινό δίαυλο και κοινές πληροφορίες, περιορίζοντας την περιττή καλωδίωση.",
    },
    {
      question: "Δύο δίκτυα μεταδίδουν για ένα δευτερόλεπτο. Το πρώτο λειτουργεί στα 500 kbit/s και το δεύτερο στα 125 kbit/s. Ποιο μεταφέρει περισσότερα bit;",
      options: ["Το δίκτυο των 500 kbit/s", "Το δίκτυο των 125 kbit/s", "Μεταφέρουν ακριβώς τα ίδια", "Δεν μπορεί να γίνει σύγκριση χωρίς τάση μπαταρίας"],
      correct: 0,
      feedback: "Ο ρυθμός 500 kbit/s δηλώνει περισσότερα bit ανά δευτερόλεπτο από τον ρυθμό 125 kbit/s.",
    },
    {
      question: "Γιατί δεν χρησιμοποιούμε πάντα τη μεγαλύτερη δυνατή ταχύτητα μετάδοσης σε κάθε σύστημα;",
      options: ["Επειδή οι μεγάλες ταχύτητες απαγορεύονται στα οχήματα", "Επειδή επιλέγεται ισορροπία ανάμεσα σε ανάγκη, κόστος και αξιοπιστία", "Επειδή οι αισθητήρες δεν δημιουργούν δεδομένα", "Επειδή η ταχύτητα μετάδοσης δεν έχει καμία σημασία"],
      correct: 1,
      feedback: "Η απαιτούμενη ταχύτητα εξαρτάται από την εφαρμογή. Ένα απλό σύστημα άνεσης δεν χρειάζεται το ίδιο εύρος ζώνης με κάμερες ή συστήματα υποβοήθησης.",
    },
    {
      question: "Ποια ομάδα περιλαμβάνει πραγματικά μέσα μετάδοσης δεδομένων στο όχημα;",
      options: ["Μόνο ασφάλειες και ρελέ", "Μόνο σωλήνες καυσίμου", "Μόνο μηχανικούς συνδέσμους", "Χάλκινο καλώδιο, οπτική ίνα και ασύρματη ζεύξη"],
      correct: 3,
      feedback: "Τα δεδομένα μπορούν να μεταφερθούν ηλεκτρικά μέσω χαλκού, οπτικά μέσω ίνας ή με ραδιοκύματα σε ασύρματες συνδέσεις.",
    },
    {
      question: "Γιατί τα δύο καλώδια ενός διαφορικού δικτύου είναι συνήθως στριμμένα μεταξύ τους;",
      options: ["Για να επηρεάζονται παρόμοια από τις παρεμβολές και να απορρίπτεται ο κοινός θόρυβος", "Για να αυξάνεται η τάση της μπαταρίας", "Για να μεταφέρει το ένα καλώδιο δεδομένα και το άλλο καύσιμο", "Για να μη χρειάζονται συνδέσεις στις ECU"],
      correct: 0,
      feedback: "Η συστροφή βοηθά τις δύο γραμμές να δέχονται παρόμοια παρεμβολή. Ο δέκτης εξετάζει τη διαφορά τους και περιορίζει τον κοινό θόρυβο.",
    },
    {
      question: "Τι είναι πιθανότερο να προκαλέσει μια πλήρης διακοπή σε καλώδιο επικοινωνίας;",
      options: ["Υψηλότερο ρυθμό μετάδοσης", "Ακριβέστερη μέτρηση αισθητήρα", "Απώλεια επικοινωνίας με μονάδες μετά το σημείο της διακοπής", "Αυτόματη επισκευή του δικτύου"],
      correct: 2,
      feedback: "Η διακοπή ανοίγει την ηλεκτρική διαδρομή και μπορεί να απομονώσει μία μονάδα ή τμήμα του δικτύου.",
    },
    {
      question: "Μια γραμμή δεδομένων βραχυκυκλώνεται προς τη γείωση. Ποιο αποτέλεσμα περιμένουμε;",
      options: ["Η τάση ανεβαίνει σταθερά πάνω από την τροφοδοσία", "Το σήμα γίνεται ισχυρότερο και καθαρότερο", "Η ECU αυξάνει μόνη της τον ρυθμό μετάδοσης", "Η γραμμή τραβιέται χαμηλά και η επικοινωνία μπορεί να διακοπεί"],
      correct: 3,
      feedback: "Το βραχυκύκλωμα προς γείωση καθηλώνει τη γραμμή σε χαμηλό δυναμικό και παραμορφώνει ή σταματά τη μετάδοση.",
    },
    {
      question: "Τι συμβαίνει συνήθως αν οι γραμμές CAN High και CAN Low βραχυκυκλωθούν μεταξύ τους;",
      options: ["Διπλασιάζεται η διαφορά τάσης", "Μειώνεται η διαφορά μεταξύ των γραμμών και καταρρέει το διαφορικό σήμα", "Το δίκτυο γίνεται ασύρματο", "Η αντίσταση κάθε αισθητήρα μηδενίζεται"],
      correct: 1,
      feedback: "Το CAN βασίζεται στη διαφορά τάσης ανάμεσα στις δύο γραμμές. Αν ενωθούν, ο δέκτης δυσκολεύεται να ξεχωρίσει τις λογικές καταστάσεις.",
    },
    {
      question: "Ένα αλλοιωμένο bit μετατρέπει την τιμή 178 σε 162. Τι αποδεικνύει αυτό;",
      options: ["Ένα μόνο λανθασμένο bit μπορεί να αλλάξει ολόκληρη την αριθμητική τιμή", "Τα bit δεν επηρεάζουν τους αριθμούς", "Κάθε μήνυμα χρειάζεται μόνο ένα bit", "Η ECU αγνοεί πάντα τα ψηφιακά δεδομένα"],
      correct: 0,
      feedback: "Κάθε bit έχει συγκεκριμένο βάρος μέσα στον δυαδικό αριθμό. Η αλλαγή ενός bit μπορεί να δημιουργήσει διαφορετική τιμή.",
    },
    {
      question: "Ποιος είναι ο ρόλος του CRC σε ένα μήνυμα επικοινωνίας;",
      options: ["Να αυξάνει την τάση του σήματος", "Να επισκευάζει μηχανικά το καλώδιο", "Να βοηθά τον δέκτη να εντοπίσει αλλοίωση των δεδομένων", "Να αντικαθιστά το διαγνωστικό εργαλείο"],
      correct: 2,
      feedback: "Ο αποστολέας και ο δέκτης υπολογίζουν τιμή ελέγχου. Διαφορά στο CRC δείχνει ότι το μήνυμα αλλοιώθηκε κατά τη μετάδοση.",
    },
    {
      question: "Μια μονάδα ανιχνεύει λανθασμένο πλαίσιο δεδομένων. Ποια είναι η σωστή γενική αντίδραση του δικτύου;",
      options: ["Χρησιμοποιεί το πλαίσιο χωρίς έλεγχο", "Απορρίπτει το προβληματικό πλαίσιο και γίνεται νέα μετάδοση σύμφωνα με το πρωτόκολλο", "Διαγράφει όλες τις ECU από το δίκτυο", "Αυξάνει μόνιμα την τάση της μπαταρίας"],
      correct: 1,
      feedback: "Ένα πλαίσιο με σφάλμα δεν πρέπει να χρησιμοποιηθεί ως έγκυρη πληροφορία. Το πρωτόκολλο οργανώνει την αναφορά του σφάλματος και την επανάληψη.",
    },
    {
      question: "Τι περιγράφουν οι καταστάσεις error active, error passive και bus-off στο CAN;",
      options: ["Τον περιορισμό μιας μονάδας ανάλογα με τον αριθμό σφαλμάτων που καταγράφει", "Τρεις διαφορετικούς τύπους αισθητήρων", "Τρεις βαθμίδες φόρτισης της μπαταρίας", "Τη μηχανική κατάσταση των φρένων"],
      correct: 0,
      feedback: "Το CAN παρακολουθεί τα σφάλματα κάθε κόμβου και περιορίζει μια προβληματική μονάδα ώστε να μην καταρρεύσει ολόκληρο το δίκτυο.",
    },
    {
      question: "Ανάβουν πολλές προειδοποιητικές λυχνίες και το διαγνωστικό δεν επικοινωνεί με αρκετές μονάδες. Ποια υπόθεση ελέγχεται πρώτη;",
      options: ["Χάλασαν ταυτόχρονα όλοι οι αισθητήρες", "Χρειάζεται αλλαγή λαδιών", "Κάηκαν όλες οι ενδεικτικές λυχνίες", "Υπάρχει κοινό πρόβλημα τροφοδοσίας, γείωσης ή δικτύου"],
      correct: 3,
      feedback: "Πολλά ταυτόχρονα συμπτώματα δείχνουν συχνά κοινή αιτία. Ελέγχουμε πρώτα ό,τι μοιράζονται οι επηρεαζόμενες μονάδες.",
    },
    {
      question: "Ποια σειρά ελέγχου είναι πιο σωστή όταν υπάρχει βλάβη επικοινωνίας;",
      options: ["Αλλαγή ECU → διαγραφή κωδικών → δοκιμή", "Παλμογράφος → αλλαγή καλωδίωσης → έλεγχος ασφαλειών", "Επιβεβαίωση συμπτώματος → τροφοδοσία και γείωση → τοπολογία → οπτικός έλεγχος → μετρήσεις", "Αντικατάσταση αισθητήρα → αλλαγή μπαταρίας → μέτρηση"],
      correct: 2,
      feedback: "Η διάγνωση ξεκινά με επιβεβαίωση και βασικούς ελέγχους. Οι πιο ειδικές μετρήσεις ακολουθούν όταν γνωρίζουμε ποιο τμήμα εξετάζουμε.",
    },
    {
      question: "Ποια πληροφορία δίνει κυρίως ένα διαγνωστικό εργαλείο;",
      options: ["Κωδικούς βλάβης, ζωντανά δεδομένα και κατάσταση επικοινωνίας", "Μόνο τη μηχανική συμπίεση του κινητήρα", "Το ακριβές σημείο κοπής κάθε καλωδίου χωρίς μέτρηση", "Την αντίσταση ενός αποσυνδεδεμένου καλωδίου χωρίς πολύμετρο"],
      correct: 0,
      feedback: "Το διαγνωστικό δείχνει τι αναφέρουν οι μονάδες και αν επικοινωνούν. Δεν αποδεικνύει μόνο του την ακριβή φυσική αιτία.",
    },
    {
      question: "Για ποιον έλεγχο είναι καταλληλότερο το πολύμετρο;",
      options: ["Για να εμφανίσει ολόκληρη την κυματομορφή με τον χρόνο", "Για να αποκωδικοποιήσει κάθε πλαίσιο CAN", "Για να προγραμματίσει όλες τις ECU", "Για μέτρηση τάσης, αντίστασης και συνέχειας"],
      correct: 3,
      feedback: "Το πολύμετρο μετρά βασικά ηλεκτρικά μεγέθη. Είναι χρήσιμο για τροφοδοσίες, γειώσεις, αντιστάσεις και έλεγχο συνέχειας.",
    },
    {
      question: "Για ποιον έλεγχο είναι καταλληλότερος ο παλμογράφος;",
      options: ["Για ανάγνωση της στάθμης καυσίμου από το καντράν", "Για παρατήρηση της μορφής του σήματος, του θορύβου και των παραμορφώσεων", "Για μέτρηση της πίεσης ελαστικών χωρίς αισθητήρα", "Για διαγραφή μηχανικής φθοράς"],
      correct: 1,
      feedback: "Ο παλμογράφος δείχνει πώς μεταβάλλεται η τάση στον χρόνο και αποκαλύπτει θόρυβο, παραμορφώσεις και προβλήματα χρονισμού.",
    },
    {
      question: "Η BCM δεν απαντά στο διαγνωστικό. Ποιος είναι ο σωστός πρώτος κύκλος ελέγχων;",
      options: ["Αλλαγή της BCM χωρίς μέτρηση", "Αλλαγή όλων των διακοπτών θυρών", "Έλεγχος ασφαλειών, τροφοδοσίας, γείωσης και γραμμών επικοινωνίας", "Διαγραφή όλων των κωδικών των άλλων μονάδων"],
      correct: 2,
      feedback: "Μια μονάδα χωρίς σωστή τροφοδοσία ή γείωση δεν μπορεί να επικοινωνήσει. Αυτά ελέγχονται πριν θεωρήσουμε ελαττωματική τη BCM.",
    },
    {
      question: "Ανάβουν ταυτόχρονα ABS, ESP και άλλες λυχνίες μετά από απώλεια δεδομένων ταχύτητας τροχού. Ποια εξήγηση είναι πιθανότερη;",
      options: ["Κάθε λυχνία έχει ανεξάρτητη και άσχετη βλάβη", "Το όχημα χρειάζεται μόνο περισσότερο καύσιμο", "Η οθόνη του καντράν δημιούργησε όλες τις βλάβες", "Πολλά συστήματα χρησιμοποιούν την ίδια πληροφορία ή το ίδιο δίκτυο"],
      correct: 3,
      feedback: "Μία κοινή πληροφορία μπορεί να χρησιμοποιείται από πολλές ECU. Η απώλειά της δημιουργεί πολλαπλές ενδείξεις χωρίς να έχουν χαλάσει όλες οι μονάδες.",
    },
    {
      question: "Ποια είναι η βασική αρχή του μαθήματος όταν εμφανίζεται μια βλάβη επικοινωνίας;",
      options: ["Παρατηρώ, ελέγχω, μετρώ και μετά συμπεραίνω", "Αντικαθιστώ πρώτα την ακριβότερη μονάδα", "Μαντεύω το πιθανότερο εξάρτημα και σταματώ", "Διαγράφω τον κωδικό και θεωρώ ότι επισκευάστηκε"],
      correct: 0,
      feedback: "Η ασφαλής διάγνωση βασίζεται σε στοιχεία και μετρήσεις. Το συμπέρασμα έρχεται μετά τον έλεγχο, όχι πριν από αυτόν.",
    },
  ];

  const moduleData = [
    { title: "Δεδομένα και σήματα", meta: "δεδομένο · πληροφορία · αισθητήρας · αναλογικό · ψηφιακό", start: 0, end: 6 },
    { title: "Bit, byte και μετάδοση", meta: "δυαδικές τιμές · κωδικοποίηση · ρυθμός μετάδοσης", start: 6, end: 12 },
    { title: "Μέσα μετάδοσης και καλωδίωση", meta: "ταχύτητα · μέσα · συνεστραμμένο ζεύγος · βλάβες", start: 12, end: 18 },
    { title: "Σφάλματα επικοινωνίας", meta: "αλλοίωση bit · CRC · επανάληψη · bus-off", start: 18, end: 24 },
    { title: "Εργαλεία και διάγνωση", meta: "διαγνωστικό · πολύμετρο · παλμογράφος · μεθοδικός έλεγχος", start: 24, end: 30 },
  ];

  const letters = ["Α", "Β", "Γ", "Δ"];
  const slidesView = lessonDeck.querySelector("[data-lesson-slides-view]");
  const quizView = lessonDeck.querySelector("[data-lesson-quiz-view]");
  const quizToggle = lessonDeck.querySelector("[data-lesson-test-toggle]");
  const quizToggleLabel = lessonDeck.querySelector("[data-lesson-test-toggle-label]");
  const slideCounter = lessonDeck.querySelector(".intro-slide-counter");
  const title = lessonDeck.querySelector("[data-slide-title]");
  const currentSlide = lessonDeck.querySelector("[data-slide-current]");
  const quiz = lessonDeck.querySelector("[data-lesson-quiz]");
  const questionsContainer = lessonDeck.querySelector("[data-lesson-quiz-questions]");

  const showQuiz = (open, updateHash = true) => {
    slidesView.hidden = open;
    quizView.hidden = !open;
    lessonDeck.classList.toggle("is-quiz-mode", open);
    quizToggle.setAttribute("aria-expanded", String(open));
    quizToggleLabel.textContent = open ? "Επιστροφή στις διαφάνειες" : "Τεστ 30 ερωτήσεων";
    slideCounter.hidden = open;
    title.textContent = open
      ? "Τεστ Μαθήματος 2"
      : `Δεδομένα και βασικές αρχές μετάδοσης · Διαφάνεια ${currentSlide.textContent}`;
    if (updateHash) {
      history.replaceState(null, "", open ? "#test" : `#slide-${currentSlide.textContent}`);
    }
  };

  moduleData.forEach((module, moduleIndex) => {
    const section = document.createElement("section");
    section.className = "intro-quiz-module";
    section.setAttribute("aria-labelledby", `lesson-module-${moduleIndex + 1}`);

    const heading = document.createElement("header");
    heading.className = "intro-quiz-module-heading";
    heading.innerHTML = `<span>${moduleIndex + 1}</span><div><h3 id="lesson-module-${moduleIndex + 1}">${module.title}</h3><p>${module.meta}</p></div>`;
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
        input.name = `lesson-q${index + 1}`;
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

  lessonDeck.querySelector("[data-lesson-quiz-loading]")?.remove();
  const questions = [...lessonDeck.querySelectorAll("[data-lesson-question]")];
  const modules = [...lessonDeck.querySelectorAll(".intro-quiz-module")];
  const mobileQuery = window.matchMedia("(max-width: 700px)");
  const previousQuestion = lessonDeck.querySelector("[data-lesson-question-prev]");
  const nextQuestion = lessonDeck.querySelector("[data-lesson-question-next]");
  const questionPosition = lessonDeck.querySelector("[data-lesson-question-position]");
  const quizScroll = lessonDeck.querySelector("[data-lesson-quiz-scroll]");
  const warning = lessonDeck.querySelector("[data-lesson-quiz-warning]");
  const result = lessonDeck.querySelector("[data-lesson-quiz-result]");
  const scoreTarget = lessonDeck.querySelector("[data-lesson-score]");
  const gradeTarget = lessonDeck.querySelector("[data-lesson-grade]");
  const percentageTarget = lessonDeck.querySelector("[data-lesson-percentage]");
  const statusTarget = lessonDeck.querySelector("[data-lesson-result-status]");
  const resultMessage = lessonDeck.querySelector("[data-lesson-result-message]");
  const progressCurrent = lessonDeck.querySelector("[data-lesson-progress-current]");
  const progressBar = lessonDeck.querySelector("[data-lesson-progress-bar]");
  const resetButton = lessonDeck.querySelector("[data-lesson-quiz-reset]");
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

  quizToggle.addEventListener("click", () => showQuiz(quizView.hidden));
  previousQuestion.addEventListener("click", () => showMobileQuestion(mobileQuestionIndex - 1, true));
  nextQuestion.addEventListener("click", () => showMobileQuestion(mobileQuestionIndex + 1, true));
  mobileQuery.addEventListener?.("change", () => showMobileQuestion(mobileQuestionIndex));

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
      question.querySelector("[data-lesson-feedback]").hidden = false;
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
      resultMessage.textContent = "Κατανοείς με σαφήνεια τη διαδρομή των δεδομένων, τα σφάλματα μετάδοσης και τη σωστή διαγνωστική σειρά.";
    } else if (score >= 24) {
      statusTarget.textContent = "Επιτυχής ολοκλήρωση";
      resultMessage.textContent = "Πέρασες το τεστ. Δες τις εξηγήσεις στις λανθασμένες απαντήσεις πριν προχωρήσεις.";
    } else if (score >= 18) {
      statusTarget.textContent = "Χρειάζεται στοχευμένη επανάληψη";
      resultMessage.textContent = "Επανέλαβε τις διαφάνειες που αφορούν τις ερωτήσεις στις οποίες έκανες λάθος.";
    } else {
      statusTarget.textContent = "Χρειάζεται επανάληψη του μαθήματος";
      resultMessage.textContent = "Δες ξανά τις 30 διαφάνειες και ακολούθησε τη διαδρομή της πληροφορίας σε κάθε παράδειγμα.";
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
      question.querySelector("[data-lesson-feedback]").hidden = true;
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

  showMobileQuestion(0);
  showQuiz(window.location.hash === "#test", false);
}
