(() => {
  const root = document.querySelector('[data-audit-lab]');
  if (!root) return;
  const cases = [
    {
      car:'Alfa Romeo 8C Competizione', image:'alfa-romeo-8c.webp',
      symptom:'Ο οδηγός αναφέρει ότι κάποιες φορές δεν εμφανίζονται δεδομένα από τον κινητήρα στο διαγνωστικό.',
      evidence:['Η αρχική σάρωση καταγράφει U0100 ως αποθηκευμένο κωδικό επικοινωνίας.','Δεν αναφέρονται μετρήσεις τροφοδοσίας ή γείωσης στην ECU κινητήρα.','Δεν υπάρχει έλεγχος συνδέσμου ή σήματος στο συγκεκριμένο κλάδο.'],
      report:'«Η ECU κινητήρα έχει χαλάσει. Προτείνεται αντικατάσταση.»', status:'unsupported',
      reasons:[
        {text:'Ο κωδικός δείχνει απώλεια επικοινωνίας, αλλά δεν αποδεικνύει μόνος του εσωτερική βλάβη της ECU.',correct:true},
        {text:'Κάθε U0100 σημαίνει υποχρεωτικά ότι η ECU πρέπει να αντικατασταθεί.',correct:false},
        {text:'Αφού η ECU δεν απαντά, δεν χρειάζεται έλεγχος τροφοδοσίας ή καλωδίωσης.',correct:false}
      ],
      review:'Χρειάζεται έλεγχος τροφοδοσίας, γείωσης, συνδέσμου και δικτύου σύμφωνα με τη διαδικασία του οχήματος πριν καταδικαστεί η ECU.',
      model:'«Καταγράφηκε U0100. Η αιτία δεν έχει επιβεβαιωθεί· απαιτούνται έλεγχοι τροφοδοσίας, γείωσης και επικοινωνίας της ECU.»'
    },
    {
      car:'Alpine A110', image:'alpine-a110.webp',
      symptom:'Μετά από δυσκολία εκκίνησης, εμφανίζονται αποθηκευμένοι κωδικοί επικοινωνίας σε περισσότερες από μία μονάδες.',
      evidence:['Η τάση της μπαταρίας κατά την εκκίνηση πέφτει κάτω από την προδιαγραφή που αναφέρει το δελτίο του σεναρίου.','Ο έλεγχος της μπαταρίας καταγράφεται ως αποτυχημένος.','Μετά την αποκατάσταση της τροφοδοσίας, οι μονάδες επικοινωνούν και οι κωδικοί δεν επανέρχονται στη δοκιμή.'],
      report:'«Η αρχική αιτία ήταν ανεπαρκής τροφοδοσία 12 V. Δεν επιβεβαιώθηκε βλάβη στην καλωδίωση CAN.»', status:'supported',
      reasons:[
        {text:'Η χαμηλή τάση μετρήθηκε, αποκαταστάθηκε και τα συμπτώματα δεν επανήλθαν στον επανέλεγχο.',correct:true},
        {text:'Οι πολλοί κωδικοί αποδεικνύουν ότι υπήρχε βραχυκύκλωμα CAN.',correct:false},
        {text:'Δεν μπορεί να εξαχθεί κανένα συμπέρασμα από επανέλεγχο μετά την επισκευή.',correct:false}
      ],
      review:'Η ακολουθία ευρημάτων και επανελέγχου στηρίζει το συμπέρασμα για το συγκεκριμένο εκπαιδευτικό περιστατικό.',
      model:'«Η βλάβη τροφοδοσίας 12 V επιβεβαιώθηκε από τη μέτρηση και την αποτυχία ελέγχου μπαταρίας. Μετά την αποκατάσταση, η επικοινωνία επανήλθε και οι κωδικοί δεν επανεμφανίστηκαν.»'
    },
    {
      car:'Dodge Challenger SRT', image:'dodge-challenger-srt.webp',
      symptom:'Κατά διαστήματα αποθηκεύεται σφάλμα επικοινωνίας, χωρίς σταθερή απώλεια λειτουργίας.',
      evidence:['Το δελτίο γράφει «μέτρηση αντίστασης εντός φυσιολογικού εύρους».','Δεν καταγράφονται σημείο μέτρησης, κατάσταση οχήματος ή προϋποθέσεις που χρησιμοποιήθηκαν.','Δεν αναφέρεται έλεγχος όταν εμφανίζεται το σύμπτωμα.'],
      report:'«Το φυσικό δίκτυο CAN είναι εντάξει, άρα η βλάβη βρίσκεται στο λογισμικό.»', status:'partly',
      reasons:[
        {text:'Η καταγραφή δεν έχει αρκετές λεπτομέρειες για να ερμηνευτεί η μέτρηση ή να αποκλειστεί διακοπτόμενο πρόβλημα.',correct:true},
        {text:'Η φράση «εντός φυσιολογικού εύρους» αποδεικνύει ότι φταίει το λογισμικό.',correct:false},
        {text:'Μια μέτρηση αντίστασης αποκλείει κάθε βλάβη δικτύου σε όλες τις συνθήκες.',correct:false}
      ],
      review:'Η μέτρηση πρέπει να συνδεθεί με συγκεκριμένο σημείο και τις προβλεπόμενες συνθήκες. Χρειάζεται επίσης προσπάθεια αναπαραγωγής του διακοπτόμενου συμπτώματος.',
      model:'«Η διαθέσιμη μέτρηση δεν αρκεί για να αποκλειστεί βλάβη στο CAN ή να αποδοθεί το σύμπτωμα στο λογισμικό. Απαιτείται επανάληψη με καταγεγραμμένο σημείο και συνθήκες ελέγχου.»'
    },
    {
      car:'Honda Civic Type R FK8', image:'honda-civic-type-r-fk8.webp',
      symptom:'Ο παλμογράφος δείχνει ακανόνιστη κυματομορφή κατά τη διάρκεια μιας σύντομης διακοπής επικοινωνίας.',
      evidence:['Η καταγραφή αφορά μόνο τη γραμμή CAN-H.','Δεν υπάρχει ταυτόχρονη καταγραφή CAN-L ή διαφορικού σήματος.','Δεν σημειώνονται σημείο ελέγχου και συνθήκες λήψης.'],
      report:'«Η CAN-L έχει βλάβη και πρέπει να επισκευαστεί.»', status:'unsupported',
      reasons:[
        {text:'Η καταγραφή μιας γραμμής δεν αποδεικνύει ότι η άλλη γραμμή είναι η αιτία.',correct:true},
        {text:'Ο παλμογράφος δείχνει πάντα ποια γραμμή έχει βλάβη ακόμη κι όταν δεν έχει μετρηθεί.',correct:false},
        {text:'Ακανόνιστη κυματομορφή σημαίνει ότι πρέπει να αλλαχτεί η μονάδα ABS.',correct:false}
      ],
      review:'Χρειάζεται κατάλληλη καταγραφή και των δύο γραμμών στο σωστό σημείο και συσχέτιση με το σύμπτωμα και τις προδιαγραφές του οχήματος.',
      model:'«Παρατηρήθηκε ακανόνιστη κυματομορφή στην CAN-H. Η αιτία δεν έχει εντοπιστεί· απαιτείται συμπληρωματικός έλεγχος CAN-H/CAN-L και επανάληψη στις συνθήκες εμφάνισης.»'
    },
    {
      car:'Hyundai Ioniq 6', image:'hyundai-ioniq-6.webp',
      symptom:'Το διαγνωστικό δεν επικοινωνεί με μονάδες σε δύο τμήματα χαμηλής τάσης του δικτύου.',
      evidence:['Υπάρχει κωδικός επικοινωνίας που σχετίζεται με το gateway.','Δεν έχει καταγραφεί έλεγχος τροφοδοσίας και γείωσης του gateway.','Δεν υπάρχουν ξεχωριστά αποτελέσματα επικοινωνίας από τις δύο πλευρές του gateway.'],
      report:'«Το gateway είναι ελαττωματικό και πρέπει να αντικατασταθεί.»', status:'partly',
      reasons:[
        {text:'Ο κωδικός κάνει το gateway σχετικό με τη διάγνωση, αλλά δεν αποδεικνύει βλάβη του χωρίς ελέγχους τροφοδοσίας και των συνδεδεμένων τμημάτων.',correct:true},
        {text:'Κάθε κωδικός gateway αποδεικνύει ότι το ίδιο το gateway έχει χαλάσει.',correct:false},
        {text:'Αφού λείπουν μονάδες από δύο τμήματα, το gateway δεν χρειάζεται έλεγχο.',correct:false}
      ],
      review:'Χρειάζεται να ελεγχθούν οι τροφοδοσίες και οι γειώσεις του gateway και να διαπιστωθεί ποια δίκτυα επικοινωνούν σε κάθε πλευρά, βάσει της διαδικασίας του οχήματος.',
      model:'«Καταγράφηκε κωδικός σχετικός με το gateway και απώλεια επικοινωνίας σε δύο τμήματα. Η βλάβη του gateway δεν έχει επιβεβαιωθεί· εκκρεμούν έλεγχοι τροφοδοσίας και επικοινωνίας ανά τμήμα.»'
    },
    {
      car:'Lamborghini Huracán LP 610-4', image:'lamborghini-huracan.webp',
      symptom:'Η επικοινωνία διακόπτεται όταν κινείται η καλωδίωση κοντά σε έναν σύνδεσμο.',
      evidence:['Η διακοπή αναπαράγεται επανειλημμένα με ήπια κίνηση της καλωδίωσης.','Οπτικός έλεγχος εντοπίζει ακροδέκτη που δεν έχει ασφαλίσει σωστά στον σύνδεσμο.','Μετά τη σωστή αποκατάσταση, η δοκιμή επαναλαμβάνεται χωρίς διακοπή και η πλήρης σάρωση ολοκληρώνεται.'],
      report:'«Η διακοπτόμενη επαφή στον σύνδεσμο επιβεβαιώθηκε και αποκαταστάθηκε. Η επικοινωνία παρέμεινε σταθερή στον επανέλεγχο.»', status:'supported',
      reasons:[
        {text:'Το σύμπτωμα αναπαράχθηκε, εντοπίστηκε συγκεκριμένο εύρημα και ο ίδιος έλεγχος πέρασε μετά την επισκευή.',correct:true},
        {text:'Η αναφορά δεν έχει κανένα εύρημα που να συνδέεται με την επισκευή.',correct:false},
        {text:'Η επιτυχής σάρωση από μόνη της αποδεικνύει ότι άλλαξε εσωτερική μονάδα.',correct:false}
      ],
      review:'Η αναφορά συνδέει αναπαραγώγιμο σύμπτωμα, εντοπισμένο εύρημα, επισκευή και επανέλεγχο.',
      model:'«Η διακοπτόμενη επαφή στον σύνδεσμο επιβεβαιώθηκε με αναπαραγωγή του συμπτώματος και οπτικό εύρημα. Μετά την ασφάλιση του ακροδέκτη, η επικοινωνία παρέμεινε σταθερή στην επαναληπτική δοκιμή.»'
    },
    {
      car:'Lexus LFA', image:'lexus-lfa.webp',
      symptom:'Μετά την εγκατάσταση πρόσθετης συσκευής ήχου εμφανίστηκαν κωδικοί επικοινωνίας.',
      evidence:['Η χρονική συσχέτιση με την εγκατάσταση καταγράφεται.','Δεν έχει γίνει έλεγχος στη νέα σύνδεση ή στις ενώσεις της καλωδίωσης.','Δεν υπάρχει σύγκριση της επικοινωνίας πριν και μετά την αποσύνδεση της συσκευής.'],
      report:'«Η πρόσθετη συσκευή προκαλεί τη βλάβη CAN.»', status:'unsupported',
      reasons:[
        {text:'Η χρονική σειρά δημιουργεί υπόθεση, αλλά χωρίς έλεγχο της σύνδεσης δεν αποδεικνύει αιτιότητα.',correct:true},
        {text:'Οτιδήποτε εγκαθίσταται τελευταίο είναι πάντα η αιτία.',correct:false},
        {text:'Οι κωδικοί επικοινωνίας δεν σχετίζονται ποτέ με πρόσθετες συνδέσεις.',correct:false}
      ],
      review:'Η υπόθεση είναι λογική αλλά χρειάζεται έλεγχο της εγκατάστασης και συγκριτική δοκιμή, σύμφωνα με τις οδηγίες του οχήματος.',
      model:'«Οι κωδικοί εμφανίστηκαν μετά την εγκατάσταση πρόσθετης συσκευής. Η συσχέτιση δεν αποδεικνύει αιτία· εκκρεμεί έλεγχος της σύνδεσης και συγκριτική δοκιμή.»'
    },
    {
      car:'Mercedes-AMG C 63', image:'mercedes-amg-c63.webp',
      symptom:'Μία μονάδα δεν απαντά, ενώ οι υπόλοιπες μονάδες που εξετάστηκαν επικοινωνούν.',
      evidence:['Η σάρωση δείχνει μία μονάδα εκτός επικοινωνίας και τις υπόλοιπες διαθέσιμες.','Η τροφοδοσία και η γείωση ελέγχθηκαν μόνο χωρίς φορτίο.','Δεν έχει ελεγχθεί ο σύνδεσμος ή ο κλάδος κοντά στη μονάδα.'],
      report:'«Υπάρχει βραχυκύκλωμα σε όλο το δίκτυο CAN.»', status:'unsupported',
      reasons:[
        {text:'Η απώλεια μίας μονάδας, με άλλες μονάδες διαθέσιμες, δεν τεκμηριώνει βραχυκύκλωμα σε όλο το δίκτυο.',correct:true},
        {text:'Κάθε μονάδα εκτός δικτύου σημαίνει ότι έχει βραχυκυκλώσει ολόκληρο το CAN.',correct:false},
        {text:'Ο έλεγχος τροφοδοσίας χωρίς φορτίο αποκλείει οριστικά κάθε πρόβλημα τροφοδοσίας.',correct:false}
      ],
      review:'Πρέπει να ελεγχθούν η τροφοδοσία και η γείωση υπό τις προβλεπόμενες συνθήκες, καθώς και ο σύνδεσμος και ο κλάδος της συγκεκριμένης μονάδας.',
      model:'«Μία μονάδα δεν απαντά, ενώ οι υπόλοιπες ελέγχθηκαν ως διαθέσιμες. Δεν τεκμηριώνεται βλάβη σε όλο το δίκτυο· εκκρεμούν έλεγχοι τροφοδοσίας υπό φορτίο και του τοπικού κλάδου.»'
    },
    {
      car:'Mitsubishi Lancer Evolution', image:'mitsubishi-lancer-evolution.webp',
      symptom:'Μετά από επισκευή, το διαγνωστικό δεν εμφανίζει ενεργό κωδικό σε άμεση επανασάρωση.',
      evidence:['Οι κωδικοί διαγράφηκαν μετά την επισκευή.','Έγινε μία άμεση σάρωση και δεν βρέθηκε ενεργός κωδικός.','Δεν επαναλήφθηκαν οι συνθήκες οδήγησης στις οποίες εμφανιζόταν το αρχικό σύμπτωμα.'],
      report:'«Η επισκευή ολοκληρώθηκε με επιτυχία και το πρόβλημα λύθηκε.»', status:'partly',
      reasons:[
        {text:'Η άμεση σάρωση είναι χρήσιμη, αλλά δεν ελέγχει αν το διακοπτόμενο σύμπτωμα επανέρχεται στις αρχικές συνθήκες.',correct:true},
        {text:'Η διαγραφή κωδικών αποδεικνύει πάντα ότι η βλάβη διορθώθηκε.',correct:false},
        {text:'Δεν χρειάζεται έλεγχος μετά από επισκευή δικτύου.',correct:false}
      ],
      review:'Χρειάζεται λειτουργική δοκιμή στις συνθήκες εμφάνισης και νέα σάρωση μετά τη δοκιμή.',
      model:'«Μετά τη διαγραφή δεν εμφανίστηκε ενεργός κωδικός στην άμεση σάρωση. Η επισκευή δεν έχει ακόμη επιβεβαιωθεί υπό τις αρχικές συνθήκες εμφάνισης· εκκρεμεί δοκιμή και νέα σάρωση.»'
    },
    {
      car:'Nissan GT-R Nismo', image:'nissan-gt-r-nismo.webp',
      symptom:'Μία μονάδα δεν επικοινωνεί σταθερά, ενώ τα υπόλοιπα συστήματα λειτουργούν.',
      evidence:['Η τροφοδοσία και η γείωση της μονάδας ελέγχθηκαν υπό φορτίο και συμφωνούν με τις προδιαγραφές του σεναρίου.','Οι ακροδέκτες και η καλωδίωση ελέγχθηκαν σύμφωνα με τη διαδικασία του κατασκευαστή.','Το προβλεπόμενο διαγνωστικό τεστ απομόνωσε εσωτερική αστοχία της μονάδας. Μετά την επισκευή, η επικοινωνία και η λειτουργία επιβεβαιώθηκαν στις αρχικές συνθήκες.'],
      report:'«Η εσωτερική αστοχία της μονάδας επιβεβαιώθηκε μετά τον αποκλεισμό τροφοδοσίας και καλωδίωσης. Η επισκευή επαληθεύτηκε με νέα σάρωση και λειτουργική δοκιμή.»', status:'supported',
      reasons:[
        {text:'Η αιτία στηρίζεται σε ελέγχους που απέκλεισαν τα εξωτερικά κυκλώματα και σε τελικό επανέλεγχο στις ίδιες συνθήκες.',correct:true},
        {text:'Η μονάδα αντικαταστάθηκε, άρα η διάγνωση είναι αυτόματα σωστή.',correct:false},
        {text:'Η σάρωση από μόνη της αρκεί, ακόμη κι αν δεν είχαν ελεγχθεί τροφοδοσία και καλωδίωση.',correct:false}
      ],
      review:'Το συμπέρασμα συνδέει τα ευρήματα, την προβλεπόμενη διαδικασία και την επιβεβαίωση μετά την επισκευή.',
      model:'«Η εσωτερική αστοχία επιβεβαιώθηκε αφού ελέγχθηκαν τροφοδοσία, γείωση και καλωδίωση και εφαρμόστηκε το προβλεπόμενο διαγνωστικό τεστ. Η αποκατάσταση επιβεβαιώθηκε με νέα σάρωση και λειτουργική δοκιμή στις αρχικές συνθήκες.»'
    }
  ];

  const cards = root.querySelector('[data-audit-cards]');
  const panel = root.querySelector('[data-audit-case]');
  const finish = root.querySelector('[data-audit-finish]');
  const doneCount = root.querySelector('[data-audit-done]');
  const scoreNode = root.querySelector('[data-audit-score]');
  const progress = root.querySelector('[data-audit-progress]');
  const scoreByCase = new Map();
  let activeIndex = -1;
  const shuffle = (items) => [...items].map((item) => ({item, sort:Math.random()})).sort((a,b)=>a.sort-b.sort).map(({item})=>item);
  const statusLabels = {supported:'Τεκμηριωμένο', partly:'Μερικώς τεκμηριωμένο', unsupported:'Ατεκμηρίωτο'};

  const renderCards = () => {
    cards.innerHTML = cases.map((item,index)=>{
      const solved=scoreByCase.has(index),active=index===activeIndex;
      return `<button class="dossier-card${solved?' is-done':''}${active?' is-active':''}" type="button" data-open-case="${index}" aria-current="${active?'true':'false'}">
        <img src="assets/images/lab6-audit/${item.image}" width="1280" height="960" loading="lazy" alt="${item.car}">
        <span class="dossier-card-body"><small>ΔΕΛΤΙΟ ${String(index+1).padStart(2,'0')}</small><strong>${item.car}</strong><span>${solved?'Ολοκληρώθηκε · '+scoreByCase.get(index)+'/2':'Προς έλεγχο'}</span></span>
      </button>`;
    }).join('');
    cards.querySelectorAll('[data-open-case]').forEach(button=>button.addEventListener('click',()=>openCase(Number(button.dataset.openCase))));
  };

  const optionMarkup = (group, options) => shuffle(options).map((option,index)=>`<label class="audit-option"><input type="radio" name="${group}" value="${index}" data-correct="${option.correct}"><span>${option.text}</span></label>`).join('');

  function openCase(index){
    activeIndex=index;
    const item=cases[index];
    const already=scoreByCase.has(index);
    const statusOptions=[
      {text:'Τεκμηριωμένο',correct:item.status==='supported'},
      {text:'Μερικώς τεκμηριωμένο',correct:item.status==='partly'},
      {text:'Ατεκμηρίωτο',correct:item.status==='unsupported'}
    ];
    const reasonOptions=item.reasons.map(option=>({text:option.text,correct:option.correct}));
    panel.innerHTML=`<div class="case-heading"><div><span class="eyebrow">ΔΕΛΤΙΟ ${String(index+1).padStart(2,'0')} · ΕΛΕΓΧΟΣ ΤΕΚΜΗΡΙΩΣΗΣ</span><h2>${item.car}</h2><p>Διάβασε πρώτα τα ευρήματα και την απόφαση του τεχνικού. Μετά συμπλήρωσε τον έλεγχο.</p></div><span class="case-number">${String(index+1).padStart(2,'0')} / 10</span></div>
      <div class="case-grid"><article class="vehicle-card"><img src="assets/images/lab6-audit/${item.image}" width="1280" height="960" alt="${item.car}"><div class="vehicle-caption"><strong>${item.car}</strong><span>Εκπαιδευτικό δελτίο · υποθετικό περιστατικό</span></div></article>
      <div class="report-stack"><section class="report-card"><h3>ΑΝΑΦΟΡΑ ΟΔΗΓΟΥ</h3><p>${item.symptom}</p></section><section class="report-card"><h3>ΚΑΤΑΓΕΓΡΑΜΜΕΝΑ ΣΤΟΙΧΕΙΑ</h3><ul class="evidence-list">${item.evidence.map((line,i)=>`<li><b>${i+1}</b><span>${line}</span></li>`).join('')}</ul></section><section class="report-card tech-report"><h3>ΣΥΜΠΕΡΑΣΜΑ ΤΕΧΝΙΚΟΥ</h3><p>${item.report}</p></section></div></div>
      ${already?`<div class="audit-feedback"><h3>Το δελτίο έχει ήδη ελεγχθεί · ${scoreByCase.get(index)}/2 βαθμοί</h3><p><b>Αξιολόγηση:</b> ${statusLabels[item.status]}. ${item.review}</p><p class="model-answer"><b>Ενδεικτική καταγραφή:</b> ${item.model}</p></div>`:`<form class="audit-form" data-audit-form novalidate>
        <fieldset class="audit-question"><legend>1. Πόσο τεκμηριώνεται η απόφαση του τεχνικού;</legend><div class="audit-options">${optionMarkup('audit-status',statusOptions)}</div></fieldset>
        <fieldset class="audit-question"><legend>2. Ποια κρίση περιγράφει καλύτερα το βασικό σημείο;</legend><div class="audit-options">${optionMarkup('audit-reason',reasonOptions)}</div></fieldset>
        <label class="rewrite-label">Προαιρετικά: πώς θα έγραφες εσύ το συμπέρασμα;<textarea name="rewrite" placeholder="Γράψε μόνο όσα στηρίζονται στα καταγεγραμμένα στοιχεία."></textarea></label>
        <p class="form-error" data-form-error hidden>Επίλεξε απάντηση και στις δύο ερωτήσεις.</p>
        <div class="button-row"><button class="primary-button" type="submit">Υποβολή ελέγχου</button><button class="secondary-button" type="button" data-next-case>Επόμενο δελτίο →</button></div>
      </form>`}`;
    panel.hidden=false;
    panel.scrollIntoView({behavior:'smooth',block:'start'});
    panel.querySelector('[data-next-case]')?.addEventListener('click',()=>openCase((index+1)%cases.length));
    panel.querySelector('[data-audit-form]')?.addEventListener('submit',(event)=>submitAudit(event,index));
    renderCards();
  }

  function submitAudit(event,index){
    event.preventDefault();
    const form=event.currentTarget;
    const selected=[...form.querySelectorAll('input[type="radio"]:checked')];
    if(selected.length!==2){form.querySelector('[data-form-error]').hidden=false;return;}
    form.querySelector('[data-form-error]').hidden=true;
    const points=selected.filter(input=>input.dataset.correct==='true').length;
    scoreByCase.set(index,points);
    const item=cases[index];
    const feedback=document.createElement('section');
    feedback.className='audit-feedback'+(points===2?'':' is-review');
    feedback.setAttribute('aria-live','polite');
    feedback.innerHTML=`<h3>${points===2?'Ο έλεγχος είναι σωστός.':`Έλεγξε ξανά την τεκμηρίωση. ${points}/2 σωστές κρίσεις.`}</h3><p><b>Αξιολόγηση δελτίου:</b> ${statusLabels[item.status]}. ${item.review}</p><p class="model-answer"><b>Ενδεικτική καταγραφή:</b> ${item.model}</p>`;
    form.replaceWith(feedback);
    updateProgress();
    renderCards();
  }

  function updateProgress(){
    const done=scoreByCase.size;
    const score=[...scoreByCase.values()].reduce((sum,value)=>sum+value,0);
    doneCount.textContent=String(done);
    scoreNode.textContent=String(score);
    progress.style.width=`${done*10}%`;
    finish.hidden=done!==cases.length;
    if(done===cases.length){root.querySelector('[data-audit-final-score]').textContent=String(score);finish.scrollIntoView({behavior:'smooth',block:'center'});}
  }

  root.querySelector('[data-audit-restart]').addEventListener('click',()=>{
    scoreByCase.clear();activeIndex=-1;panel.hidden=true;finish.hidden=true;updateProgress();renderCards();
    root.querySelector('.dossier-section').scrollIntoView({behavior:'smooth',block:'start'});
  });
  renderCards();
})();
