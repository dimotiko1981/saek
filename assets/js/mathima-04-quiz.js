const lessonTest = document.querySelector("[data-lesson-deck]");

if (lessonTest) {
  const quizData = [
    {"question": "Γιατί τα CAN-H και CAN-L σχηματίζουν συνεστραμμένο ζεύγος;", "options": ["Για να μειώνεται η επίδραση ηλεκτρομαγνητικών παρεμβολών στις δύο γραμμές", "Για να λειτουργεί η μία γραμμή ως τροφοδοσία της άλλης", "Για να αυξάνεται το μήκος του καλωδίου χωρίς συνδέσεις", "Για να μεταφέρεται διπλάσια τάση στην ECU"], "correct": 0, "feedback": "Οι δύο αγωγοί μεταφέρουν συμπληρωματικές μεταβολές. Η συστροφή βοηθά να δέχονται παρόμοια εξωτερική παρεμβολή, την οποία ο δέκτης απορρίπτει σε μεγάλο βαθμό."},
    {"question": "Τι αξιολογεί κυρίως ο δέκτης σε ένα διαφορικό σήμα CAN;", "options": ["Τη διαφορά τάσης ανάμεσα στα CAN-H και CAN-L", "Μόνο την τάση του CAN-H ως προς το αμάξωμα", "Το συνολικό μήκος του συνεστραμμένου ζεύγους", "Τη διαφορά αντίστασης ανάμεσα στις δύο τερματικές αντιστάσεις"], "correct": 0, "feedback": "Ο δέκτης αποφασίζει με βάση τη διαφορά τάσης των δύο γραμμών. Αυτό βοηθά να απορρίπτονται παρεμβολές που επηρεάζουν και τις δύο παρόμοια."},
    {"question": "Σε τυπικό high-speed CAN, ποια εικόνα τάσεων περιγράφει περίπου τη recessive κατάσταση;", "options": ["CAN-H και CAN-L βρίσκονται κοντά στα 2,5 V και η διαφορά τους είναι μικρή", "CAN-H είναι 5 V και CAN-L 0 V", "CAN-H είναι 0 V και CAN-L 12 V", "Και οι δύο γραμμές είναι σταθερά στα 0 V"], "correct": 0, "feedback": "Στην recessive κατάσταση οι δύο γραμμές μένουν κοντά στην ίδια τάση, περίπου 2,5 V σε τυπικό high-speed CAN. Οι ονομαστικές τιμές εξαρτώνται από τον πομποδέκτη."},
    {"question": "Τι συμβαίνει τυπικά στις τάσεις όταν το CAN μεταδίδει dominant bit;", "options": ["Το CAN-H ανεβαίνει και το CAN-L κατεβαίνει, δημιουργώντας διαφορική τάση", "Και οι δύο γραμμές ανεβαίνουν ακριβώς το ίδιο", "Και οι δύο γραμμές αποσυνδέονται από τον πομποδέκτη", "Το CAN-H πέφτει και το CAN-L ανεβαίνει"], "correct": 0, "feedback": "Στην dominant κατάσταση το CAN-H ανεβαίνει περίπου προς 3,5 V και το CAN-L πέφτει περίπου προς 1,5 V, δημιουργώντας χαρακτηριστική διαφορά τάσης."},
    {"question": "Ποιο πλεονέκτημα έχει η διαφορική μετάδοση σε σχέση με μία μόνο γραμμή σήματος;", "options": ["Μπορεί να απορρίψει μέρος του θορύβου που εμφανίζεται παρόμοια και στους δύο αγωγούς", "Δεν χρειάζεται τερματισμό στα άκρα του δικτύου", "Εξαλείφει κάθε πιθανότητα βλάβης καλωδίωσης", "Επιτρέπει τη χρήση οποιασδήποτε τάσης τροφοδοσίας"], "correct": 0, "feedback": "Η κοινή παρεμβολή στις δύο γραμμές επηρεάζει λιγότερο τη διαφορά τους. Δεν σημαίνει ότι το δίκτυο είναι απρόσβλητο από κάθε βλάβη ή θόρυβο."},
    {"question": "Ένας τεχνικός βλέπει στο διάγραμμα δύο γραμμές CAN-H και CAN-L. Πώς πρέπει να τις αντιμετωπίσει;", "options": ["Ως ζεύγος σημάτων που αξιολογούνται μαζί, σύμφωνα με το εγχειρίδιο του οχήματος", "Ως δύο ανεξάρτητα καλώδια τροφοδοσίας 12 V", "Ως γραμμή επικοινωνίας και γραμμή γείωσης", "Ως εφεδρικές γραμμές που πρέπει πάντα να γεφυρώνονται"], "correct": 0, "feedback": "Οι CAN-H και CAN-L αποτελούν το διαφορικό ζεύγος. Η μέτρηση και η ερμηνεία τους χρειάζεται να ακολουθούν το διάγραμμα και τις οδηγίες του συγκεκριμένου οχήματος."},
    {"question": "Σε CAN, τι σημαίνει ότι η dominant κατάσταση υπερισχύει της recessive;", "options": ["Ένας dominant bit μπορεί να καθορίσει την κατάσταση του διαύλου όταν άλλος κόμβος στέλνει recessive", "Ο κόμβος με τη μεγαλύτερη μπαταρία κερδίζει την επικοινωνία", "Η recessive κατάσταση απενεργοποιεί μόνιμα τους άλλους κόμβους", "Το δίκτυο σταματά κάθε φορά που δύο μονάδες μεταδίδουν μαζί"], "correct": 0, "feedback": "Η ηλεκτρική συμπεριφορά του CAN επιτρέπει σε dominant bit να υπερισχύσει ενός recessive. Αυτή η ιδιότητα χρησιμοποιείται και στη διαιτησία μηνυμάτων."},
    {"question": "Ποια λογική τιμή αντιστοιχεί συνήθως στην dominant κατάσταση του CAN;", "options": ["Λογικό 0", "Λογικό 1", "Λογικό 2", "Δεν αντιστοιχεί σε bit"], "correct": 0, "feedback": "Στο CAN η dominant κατάσταση αντιστοιχεί συνήθως στο λογικό 0 και η recessive στο λογικό 1."},
    {"question": "Ποια λογική τιμή αντιστοιχεί συνήθως στη recessive κατάσταση;", "options": ["Λογικό 1", "Λογικό 0", "Λογικό 10", "Δεν έχει λογική τιμή"], "correct": 0, "feedback": "Η recessive κατάσταση αντιστοιχεί συνήθως στο λογικό 1. Οι τάσεις στις γραμμές βρίσκονται κοντά μεταξύ τους."},
    {"question": "Δύο μονάδες ξεκινούν ταυτόχρονα μετάδοση. Γιατί το CAN μπορεί να συνεχίσει χωρίς απλή σύγκρουση που να σταματά το δίκτυο;", "options": ["Οι κόμβοι παρακολουθούν τον δίαυλο και η διαιτησία ευνοεί το μήνυμα με dominant bit στην πρώτη διαφορά", "Το Gateway αποσυνδέει τυχαία τη μία μονάδα", "Κάθε κόμβος χρησιμοποιεί διαφορετική τάση τροφοδοσίας", "Το CAN μετατρέπει αυτόματα όλα τα μηνύματα σε ασύρματα"], "correct": 0, "feedback": "Η διαιτησία bit προς bit επιτρέπει σε ένα μήνυμα να συνεχίσει, ενώ ο κόμβος που χάνει τη διαιτησία σταματά να μεταδίδει και μπορεί να προσπαθήσει αργότερα."},
    {"question": "Κατά τη recessive κατάσταση, τι περιμένουμε γενικά να συμβαίνει με τη διαφορά CAN-H προς CAN-L;", "options": ["Να είναι μικρή, κοντά στο μηδέν", "Να είναι σταθερά 12 V", "Να είναι πάντα μεγαλύτερη από 10 V", "Να είναι ίση με την αντίσταση του τερματισμού"], "correct": 0, "feedback": "Στη recessive κατάσταση οι δύο γραμμές είναι κοντά στην ίδια τάση, άρα η διαφορική τάση είναι μικρή."},
    {"question": "Σε έναν παλμογράφο, οι κυματομορφές CAN-H και CAN-L κινούνται σε αντίθετες κατευθύνσεις κατά τη μετάδοση. Τι υποδηλώνει αυτό;", "options": ["Τη φυσιολογική διαφορική συμπεριφορά κατά τη dominant κατάσταση", "Βέβαιη αντιστροφή πολικότητας της μπαταρίας", "Ότι οι δύο γραμμές έχουν βραχυκυκλώσει μεταξύ τους", "Ότι το δίκτυο δεν έχει κανένα τερματισμό"], "correct": 0, "feedback": "Κατά τη dominant κατάσταση το CAN-H ανεβαίνει ενώ το CAN-L κατεβαίνει. Η αξιολόγηση γίνεται με σωστή σύνδεση και αναφορά στις προδιαγραφές του οχήματος."},
    {"question": "Ποιος είναι ο ρόλος των αντιστάσεων τερματισμού σε έναν δίαυλο CAN;", "options": ["Να περιορίζουν τις ανακλάσεις του σήματος στα άκρα του δικτύου", "Να τροφοδοτούν τις ηλεκτρονικές μονάδες με 12 V", "Να μετατρέπουν τα δεδομένα CAN σε LIN", "Να αυξάνουν τη διαφορική τάση όσο χρειάζεται"], "correct": 0, "feedback": "Οι τερματισμοί προσαρμόζουν τα άκρα του διαύλου και μειώνουν ανακλάσεις που μπορούν να αλλοιώσουν την επικοινωνία."},
    {"question": "Ποια τιμή έχει συνήθως κάθε μία από τις δύο τερματικές αντιστάσεις high-speed CAN;", "options": ["120 Ω", "12 Ω", "60 Ω", "1,2 kΩ"], "correct": 0, "feedback": "Σε πολλά high-speed CAN χρησιμοποιούνται δύο τερματισμοί των 120 Ω, ένας σε κάθε άκρο. Ακολουθούμε πάντα τις εργοστασιακές πληροφορίες του οχήματος."},
    {"question": "Με το δίκτυο απενεργοποιημένο και σύμφωνα με τη διαδικασία του κατασκευαστή, μετράς περίπου 60 Ω μεταξύ CAN-H και CAN-L. Ποια είναι η πιθανότερη ερμηνεία;", "options": ["Οι δύο τερματισμοί των 120 Ω είναι παράλληλα και εμφανίζονται ως περίπου 60 Ω", "Υπάρχει υποχρεωτικά βραχυκύκλωμα προς τη γείωση", "Η αντίσταση της μπαταρίας είναι 60 Ω", "Λείπουν και οι δύο τερματισμοί"], "correct": 0, "feedback": "Δύο αντιστάσεις 120 Ω σε παράλληλη σύνδεση δίνουν περίπου 60 Ω. Η μέτρηση γίνεται μόνο με το κύκλωμα απενεργοποιημένο και με την προβλεπόμενη διαδικασία."},
    {"question": "Μετά από έλεγχο, βρίσκεις περίπου 120 Ω μεταξύ CAN-H και CAN-L, ενώ το εγχειρίδιο αναμένει περίπου 60 Ω. Τι ελέγχεις ως πιθανή αιτία;", "options": ["Έναν τερματισμό που λείπει ή διακοπή σε τμήμα του δικτύου", "Υπερβολικά χαμηλή στάθμη καυσίμου", "Αντίσταση 12 V στη μίζα", "Ασφάλεια υαλοκαθαριστήρων"], "correct": 0, "feedback": "Μία μόνο αντίσταση 120 Ω μπορεί να παραμένει ορατή όταν έχει χαθεί η άλλη λόγω αποσύνδεσης ή διακοπής. Χρειάζεται επιβεβαίωση από το διάγραμμα και τα σημεία μέτρησης."},
    {"question": "Γιατί δεν μετράμε αντίσταση σε κύκλωμα CAN που βρίσκεται υπό τάση;", "options": ["Η μέτρηση αντίστασης απαιτεί απενεργοποιημένο κύκλωμα και η τάση μπορεί να δώσει λανθασμένο αποτέλεσμα ή να προκαλέσει βλάβη στο όργανο", "Η αντίσταση αλλάζει μόνο όταν λειτουργεί ο κινητήρας", "Το πολύμετρο δεν μπορεί να μετρήσει πάνω από 1 Ω", "Η μέτρηση αντίστασης στέλνει μήνυμα CAN"], "correct": 0, "feedback": "Η λειτουργία Ω του πολυμέτρου δεν προορίζεται για ενεργό κύκλωμα. Ακολουθούμε τις οδηγίες απενεργοποίησης και αναμονής του κατασκευαστή."},
    {"question": "Η μέτρηση τερματισμού δεν συμφωνεί με τις προδιαγραφές. Ποια είναι η σωστή επόμενη κίνηση;", "options": ["Επιβεβαίωσε το ακριβές δίκτυο, τα σημεία μέτρησης και τη διαδικασία του κατασκευαστή πριν αποσυνδέσεις ή αντικαταστήσεις εξαρτήματα", "Αντικατάστησε αμέσως όλες τις ECU", "Γέφυρωσε CAN-H και CAN-L για να πέσει η αντίσταση", "Πρόσθεσε μία αντίσταση 120 Ω όπου βολεύει"], "correct": 0, "feedback": "Η τιμή εξαρτάται από το συγκεκριμένο δίκτυο και τα σημεία μέτρησης. Πριν από κάθε επέμβαση επιβεβαιώνουμε το διάγραμμα, τις συνθήκες και τα δεδομένα του κατασκευαστή."},
    {"question": "Ποιο όργανο βοηθά να δεις τη μορφή και τις μεταβολές του σήματος CAN στον χρόνο;", "options": ["Παλμογράφος", "Δοκιμαστική λυχνία υψηλής ισχύος", "Μανόμετρο καυσίμου", "Θερμόμετρο υπερύθρων"], "correct": 0, "feedback": "Ο παλμογράφος εμφανίζει τις μεταβολές τάσης στον χρόνο. Η σωστή σύνδεση και ρύθμιση είναι απαραίτητες για αξιόπιστη ερμηνεία."},
    {"question": "Το διαγνωστικό δείχνει απώλεια επικοινωνίας με πολλές μονάδες. Ποια είναι η πιο χρήσιμη πρώτη προσέγγιση;", "options": ["Χαρτογράφησε ποιες μονάδες επηρεάζονται και έλεγξε τα κοινά τμήματα σύμφωνα με το διάγραμμα", "Αντικατάστησε όλες τις μονάδες που δεν απαντούν", "Σβήσε τους κωδικούς χωρίς να κρατήσεις αναφορά", "Ξεκίνα αλλάζοντας την μπαταρία χωρίς μετρήσεις"], "correct": 0, "feedback": "Η κατανομή των μονάδων που απαντούν και δεν απαντούν βοηθά να εντοπιστεί κοινό τμήμα, τροφοδοσία ή σύνδεση πριν από πιο ειδικές μετρήσεις."},
    {"question": "Πριν συνδέσεις πολύμετρο ή παλμογράφο στη γραμμή CAN, τι χρειάζεται να κάνεις;", "options": ["Να συμβουλευτείς το διάγραμμα, τη διαδικασία και τα σωστά σημεία σύνδεσης του οχήματος", "Να τρυπήσεις οποιοδήποτε καλώδιο του συνεστραμμένου ζεύγους", "Να γεφυρώσεις τις ακίδες της διαγνωστικής πρίζας", "Να αφαιρέσεις τυχαία τη μία τερματική αντίσταση"], "correct": 0, "feedback": "Τα σωστά σημεία σύνδεσης και οι συνθήκες δοκιμής διαφέρουν ανά όχημα. Τα τεχνικά δεδομένα αποτρέπουν λάθος μέτρηση ή ζημιά."},
    {"question": "Ένας τεχνικός θέλει να μετρήσει ταυτόχρονα CAN-H και CAN-L ως προς γείωση. Τι πρέπει να προσέξει;", "options": ["Να ερμηνεύσει τις δύο τάσεις μαζί και να ελέγξει τη διαφορική σχέση τους", "Να αγνοήσει τελείως τη μία γραμμή", "Να θεωρήσει κάθε μεταβολή ως βραχυκύκλωμα", "Να συνδέσει τις εισόδους του οργάνου μεταξύ τους χωρίς οδηγίες"], "correct": 0, "feedback": "Οι μεμονωμένες τάσεις ως προς γείωση δίνουν χρήσιμες πληροφορίες, αλλά το CAN είναι διαφορικό. Η σχέση CAN-H/CAN-L και το εγχειρίδιο καθορίζουν την ερμηνεία."},
    {"question": "Η μέτρηση τάσης δείχνει ότι CAN-H και CAN-L παραμένουν σχεδόν ίδιες ενώ αναμένεται επικοινωνία. Ποια είναι σωστή συνέχεια;", "options": ["Επιβεβαίωσε σύνδεση οργάνου και συνθήκες λειτουργίας και έλεγξε αν υπάρχει δραστηριότητα με κατάλληλη μέθοδο", "Συμπέρανε αμέσως ότι όλες οι μονάδες είναι καμένες", "Τοποθέτησε αντίσταση 60 Ω παράλληλα στο δίκτυο", "Αύξησε την τάση τροφοδοσίας των ECU"], "correct": 0, "feedback": "Μία στατική ένδειξη δεν αρκεί για συμπέρασμα. Ελέγχουμε συνθήκες, σύνδεση και δραστηριότητα με το κατάλληλο εργαλείο και τη διαδικασία του κατασκευαστή."},
    {"question": "Ποια πληροφορία προσφέρει το διάγραμμα καλωδίωσης κατά τη διάγνωση CAN;", "options": ["Τη διαδρομή των γραμμών, τις συνδέσεις, τις μονάδες και τα σημεία τερματισμού", "Μόνο το λογισμικό που είναι εγκατεστημένο στις ECU", "Την ακριβή κυματομορφή κάθε στιγμής χωρίς μέτρηση", "Την κατάσταση φόρτισης της μπαταρίας"], "correct": 0, "feedback": "Το διάγραμμα δείχνει πώς είναι συνδεδεμένο το συγκεκριμένο δίκτυο και πού βρίσκονται μονάδες, ενώσεις και τερματισμοί."},
    {"question": "Ποιο είναι ένα ασφαλές κριτήριο για να επιλέξεις τιμές σύγκρισης σε μέτρηση CAN;", "options": ["Οι προδιαγραφές και οι συνθήκες δοκιμής του κατασκευαστή για το συγκεκριμένο όχημα", "Μία τυχαία τιμή από οποιοδήποτε άλλο μοντέλο", "Η ένδειξη που εμφανίστηκε την πρώτη φορά, χωρίς επανάληψη", "Η τάση που προτείνει ο τεχνικός χωρίς τεχνικά δεδομένα"], "correct": 0, "feedback": "Οι τυπικές τιμές βοηθούν στην κατανόηση, αλλά τα τεχνικά δεδομένα του συγκεκριμένου οχήματος ορίζουν πού, πότε και τι μετράμε."},
    {"question": "Αν το CAN-H βραχυκυκλωθεί προς γείωση, ποια ενέργεια είναι σωστότερη;", "options": ["Ακολούθησε το διάγραμμα και τη διαδικασία απομόνωσης για να εντοπίσεις το σημείο του βραχυκυκλώματος", "Αύξησε την ασφάλεια του κυκλώματος", "Σύνδεσε CAN-H απευθείας στην μπαταρία", "Αντικατέστησε πρώτα κάθε μονάδα του δικτύου"], "correct": 0, "feedback": "Βραχυκύκλωμα προς γείωση μπορεί να αλλοιώσει το σήμα ή να διακόψει την επικοινωνία. Εντοπίζουμε το σημείο με εγκεκριμένες μετρήσεις και μεθοδική απομόνωση."},
    {"question": "Το CAN-H και το CAN-L φαίνονται ενωμένα μεταξύ τους σε έλεγχο καλωδίωσης. Τι μπορεί να προκαλέσει αυτό;", "options": ["Μείωση ή απώλεια της διαφορικής τάσης και διαταραχή της επικοινωνίας", "Αύξηση της ταχύτητας μετάδοσης", "Αυτόματη μετατροπή του CAN σε LIN", "Κανονική λειτουργία χωρίς καμία επίδραση"], "correct": 0, "feedback": "Ένα βραχυκύκλωμα μεταξύ των δύο γραμμών εμποδίζει τη σωστή διαφορική μεταβολή και μπορεί να προκαλέσει σφάλματα ή απώλεια επικοινωνίας."},
    {"question": "Μετά την επισκευή καλωδίου, ποιος έλεγχος επιβεβαιώνει καλύτερα ότι το πρόβλημα λύθηκε;", "options": ["Επανέλεγχος επικοινωνίας, κωδικών και σήματος στις προβλεπόμενες συνθήκες λειτουργίας", "Μόνο οπτικός έλεγχος της μόνωσης", "Διαγραφή κωδικών και άμεση παράδοση χωρίς δοκιμή", "Μέτρηση τάσης μπαταρίας χωρίς έλεγχο δικτύου"], "correct": 0, "feedback": "Η επισκευή επιβεβαιώνεται με επαναληπτικούς ελέγχους που αφορούν το σύμπτωμα: επικοινωνία, σχετικούς κωδικούς και, όταν απαιτείται, κυματομορφή."},
    {"question": "Μία ECU δεν επικοινωνεί, ενώ οι υπόλοιπες μονάδες CAN λειτουργούν. Ποιο είναι λογικό να ελεγχθεί πρώτα;", "options": ["Η τροφοδοσία, η γείωση, η φίσα και ο τοπικός κλάδος της συγκεκριμένης ECU", "Και οι δύο τερματισμοί σε όλο το όχημα με άμεση αντικατάσταση", "Ο αισθητήρας θερμοκρασίας καμπίνας", "Η μονάδα πολυμέσων ανεξάρτητα από το διάγραμμα"], "correct": 0, "feedback": "Όταν το πρόβλημα αφορά μόνο έναν κόμβο, ξεκινάμε από όσα είναι κοινά στη λειτουργία και σύνδεσή του και συνεχίζουμε σύμφωνα με το διάγραμμα."},
    {"question": "Ποιο σύμπτωμα μπορεί να συνδέεται με διακοπή στο συνεστραμμένο ζεύγος CAN;", "options": ["Διαλείπουσα ή χαμένη επικοινωνία με μία ή περισσότερες μονάδες του αντίστοιχου δικτύου", "Αύξηση της πίεσης λαδιού χωρίς άλλες ενδείξεις", "Αυτόματη αλλαγή της χωρητικότητας της μπαταρίας", "Μόνιμη αύξηση της στάθμης καυσίμου"], "correct": 0, "feedback": "Η διακοπή σε ένα σημείο μπορεί να απομονώσει κόμβους ή τμήμα του δικτύου. Το ποιοι επηρεάζονται εξαρτάται από την τοπολογία."}
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
    { title: "Καλωδίωση και διαφορικό σήμα", meta: "συνεστραμμένο ζεύγος · CAN-H · CAN-L · ΔV", start: 0, end: 6 },
    { title: "Dominant και recessive", meta: "στάθμες τάσης · λογικό 0 και 1 · κοινός δίαυλος", start: 6, end: 12 },
    { title: "Τερματισμός δικτύου", meta: "120 Ω · μέτρηση περίπου 60 Ω · ανακλάσεις", start: 12, end: 18 },
    { title: "Μετρήσεις και εργαλεία", meta: "πολύμετρο · παλμογράφος · τεχνικά δεδομένα", start: 18, end: 24 },
    { title: "Εφαρμογή στη διάγνωση", meta: "βραχυκύκλωμα · διακοπή · επιβεβαίωση επισκευής", start: 24, end: 30 },
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
      ? "Τεστ Μαθήματος 4"
      : "CAN: Φυσικό επίπεδο · Διαφάνεια " + currentSlide.textContent;
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
      resultMessage.textContent = "Επανέλαβε τις διαφάνειες για το CAN-H/CAN-L, τον τερματισμό και τις μετρήσεις.";
    } else {
      statusTarget.textContent = "Χρειάζεται επανάληψη του μαθήματος";
      resultMessage.textContent = "Δες ξανά τις 30 διαφάνειες και σύνδεσε τις μετρήσεις με το σήμα και την καλωδίωση CAN.";
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
