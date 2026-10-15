/* SAEK quick diagnostic panels. All cases are fictional teaching situations. */
(()=>{
'use strict';
const CASES={
  golf:[
    {tab:'ABS / ESC',title:'Πορτοκαλί λυχνία ABS',lamp:'ABS · κίτρινο',level:'amber',story:'Golf 8: η λυχνία ABS παραμένει αναμμένη μετά την εκκίνηση. Δεν υπάρχει κόκκινη προειδοποίηση φρένων. Το σενάριο είναι υποθετικό.',ecu:'ABS/ESC ECU · αισθητήρες ταχύτητας τροχών · CAN / Gateway',steps:[
      {question:'Ποια είναι η σωστή πρώτη ενέργεια;',options:['Ανάγνωση DTC από ABS/ESC και έλεγχος μηνυμάτων.','Άμεση αντικατάσταση μονάδας ABS.','Διαγραφή των σφαλμάτων χωρίς καταγραφή.'],answer:0,why:'Η μόνιμη ένδειξη ABS χρειάζεται διάγνωση. Δεν τεκμηριώνει από μόνη της ότι έχει χαλάσει η μονάδα.'},
      {question:'Ποια δεδομένα θα διασταυρώσεις;',options:['Μόνο τη θερμοκρασία του ραδιοφώνου.','Live ταχύτητες τροχών, τροφοδοσία και συνδεσιμότητα της μονάδας.','Μόνο τη στάθμη υγρών υαλοκαθαριστήρων.'],answer:1,why:'Τα δεδομένα αισθητήρων, τροφοδοσίας και δικτύου βοηθούν να ξεχωρίσουμε αισθητήρα, καλωδίωση και επικοινωνία.'}
    ]},
    {tab:'Τροφοδοσία 12 V',title:'Προειδοποίηση φόρτισης',lamp:'Μπαταρία · κόκκινο',level:'red',story:'Κατά την οδήγηση εμφανίζεται κόκκινη προειδοποίηση φόρτισης και τα ηλεκτρικά συστήματα παρουσιάζουν προβλήματα.',ecu:'Διαχείριση φόρτισης / 12 V · ECU κινητήρα · Gateway',steps:[
      {question:'Τι προηγείται από τη διάγνωση;',options:['Συνεχίζεις τη διαδρομή έως να σβήσει μόνη της.','Ακινητοποιείς με ασφάλεια και ακολουθείς την κρίσιμη προειδοποίηση του οχήματος.','Αποσυνδέεις τη μπαταρία ενώ οδηγείς.'],answer:1,why:'Σοβαρή κόκκινη ηλεκτρική προειδοποίηση απαιτεί προτεραιότητα στην ασφάλεια και στις οδηγίες του κατασκευαστή.'},
      {question:'Τι εξετάζεις όταν το όχημα είναι ασφαλές;',options:['Μετρήσεις συστήματος φόρτισης/τροφοδοσίας 12 V και σχετικά DTC.','Άμεση αλλαγή όλων των ECU.','Μόνο την ένταση των ηχείων.'],answer:0,why:'Η μέτρηση τάσης και ο έλεγχος βλαβών αποτρέπουν αυθαίρετες αντικαταστάσεις.'}
    ]},
    {tab:'Lane Assist',title:'Βοηθήματα οδήγησης μη διαθέσιμα',lamp:'ADAS · πορτοκαλί',level:'amber',story:'Μετά από έντονη βροχή το Lane Assist αναφέρει περιορισμένη λειτουργία. Δεν υπάρχει άλλο κρίσιμο μήνυμα.',ecu:'Εμπρόσθια κάμερα / ADAS · Gateway · CAN',steps:[
      {question:'Ποιον έλεγχο κάνεις πρώτα;',options:['Αντικαθιστάς αμέσως την κάμερα.','Αγνοείς κάθε προειδοποίηση.','Ελέγχεις ορατότητα κάμερας, παρμπρίζ και ακριβές μήνυμα.'],answer:2,why:'Βροχή και περιορισμένη ορατότητα μπορούν να μειώσουν τη διαθεσιμότητα ADAS, χωρίς να αποδεικνύουν βλάβη.'},
      {question:'Αν η ένδειξη επιμένει σε καλές συνθήκες;',options:['Διαγράφεις τους DTC χωρίς ανάγνωση.','Ελέγχεις DTC, live data και τις εργοστασιακές απαιτήσεις ρύθμισης.','Αλλάζεις λάδια στον κινητήρα.'],answer:1,why:'Η συνέχιση της βλάβης απαιτεί συστηματικό έλεγχο της μονάδας ADAS και των εξαρτήσεών της.'}
    ]}
  ],
  civic:[
    {tab:'ABS / VSA',title:'ABS και VSA παραμένουν αναμμένα',lamp:'ABS / VSA · πορτοκαλί',level:'amber',story:'Honda Civic 2018: παραμένουν αναμμένες οι προειδοποιήσεις ABS και VSA. Δεν υπάρχει κόκκινη προειδοποίηση πέδησης.',ecu:'ABS/VSA ECU · αισθητήρες τροχών · CAN',steps:[
      {question:'Ποιο είναι το πρώτο τεχνικό βήμα;',options:['Αλλάζεις αισθητήρα χωρίς μέτρηση.','Διαβάζεις DTC του ABS/VSA και καταγράφεις τα συμπτώματα.','Καλύπτεις τη λυχνία με ταινία.'],answer:1,why:'Δύο σχετικές προειδοποιήσεις μπορεί να έχουν κοινή αιτία, αλλά απαιτείται αρχικά διαγνωστική τεκμηρίωση.'},
      {question:'Πώς ελέγχεις πιθανό αισθητήρα τροχού;',options:['Με live data ταχυτήτων, συνδέσεις και τροφοδοσία, σύμφωνα με τη διαδικασία.','Αλλάζοντας την μπαταρία του τηλεχειριστηρίου.','Πατώντας επανειλημμένα την κόρνα.'],answer:0,why:'Η σύγκριση σημάτων τροχών και ο ηλεκτρικός έλεγχος μπορούν να εντοπίσουν ασυμφωνία.'}
    ]},
    {tab:'EPS',title:'Βαριά υποβοήθηση τιμονιού',lamp:'EPS · προειδοποίηση',level:'red',story:'Ο οδηγός αναφέρει ξαφνικά πολύ βαρύ τιμόνι και σχετική ένδειξη EPS. Η σοβαρότητα κρίνεται και από την πραγματική δυνατότητα διεύθυνσης.',ecu:'EPS ECU · τροφοδοσία 12 V · σήματα αισθητήρων · CAN',steps:[
      {question:'Ποια είναι η ασφαλής πρώτη επιλογή;',options:['Δοκιμή σε υψηλή ταχύτητα.','Ασφαλής ακινητοποίηση και έλεγχος πριν από συνέχιση πορείας.','Άμεση διαγραφή του συμβάντος.'],answer:1,why:'Όταν δυσκολεύει η διεύθυνση, προηγείται ο έλεγχος ασφάλειας και όχι μια δοκιμή οδήγησης.'},
      {question:'Ποιος έλεγχος έχει νόημα στη συνέχεια;',options:['Μόνο η πίεση του ραδιοφώνου.','Αλλαγή τιμονιού χωρίς στοιχεία.','DTC EPS, τροφοδοσία/γειώσεις και επικοινωνία μονάδων.'],answer:2,why:'Η δυσλειτουργία EPS μπορεί να έχει ηλεκτρική, αισθητηριακή ή επικοινωνιακή αιτία.'}
    ]},
    {tab:'Honda Sensing',title:'Προσωρινά μη διαθέσιμη υποβοήθηση',lamp:'Κάμερα / ADAS',level:'amber',story:'Μετά από πολύ ισχυρή βροχή, λειτουργίες Honda Sensing εμφανίζονται προσωρινά μη διαθέσιμες.',ecu:'Μπροστινή κάμερα / ADAS · CAN · συναφή συστήματα',steps:[
      {question:'Τι εξετάζεις αρχικά;',options:['Ορατότητα κάμερας/παρμπρίζ, καιρικές συνθήκες και μήνυμα.','Άμεση αντικατάσταση της μονάδας.','Απενεργοποίηση των φρένων.'],answer:0,why:'Η κάμερα μπορεί να περιορίζεται από καιρικές συνθήκες. Δεν ταυτίζεται αυτομάτως με ελάττωμα.'},
      {question:'Αν το πρόβλημα δεν υποχωρεί;',options:['Αγνοείς το πρόβλημα για πάντα.','Ελέγχεις σχετικά DTC και προβλεπόμενη βαθμονόμηση, αν απαιτείται.','Αλλάζεις τα φλας.'],answer:1,why:'Η σωστή διάγνωση λαμβάνει υπόψη δεδομένα της μονάδας και τις οδηγίες του κατασκευαστή.'}
    ]}
  ],
  clio:[
    {tab:'STOP / λάδι',title:'Κόκκινο STOP και πίεση λαδιού',lamp:'STOP · κόκκινο',level:'red',story:'Renault Clio 2024: εν κινήσει ανάβει η λυχνία πίεσης λαδιού μαζί με STOP και ηχητική προειδοποίηση.',ecu:'ECU κινητήρα · αισθητήρας/διακόπτης πίεσης λαδιού · πίνακας οργάνων',steps:[
      {question:'Ποια είναι η ενέργεια του οδηγού;',options:['Σταματά με ασφάλεια, σβήνει τον κινητήρα και δεν τον επανεκκινεί.','Αυξάνει στροφές για να φύγει το μήνυμα.','Συνεχίζει έως το επόμενο πρατήριο.'],answer:0,why:'Το manual του Clio απαιτεί άμεση ασφαλή στάση και σβήσιμο κινητήρα για STOP με προειδοποίηση πίεσης λαδιού.'},
      {question:'Ποια είναι σωστή επόμενη προσέγγιση;',options:['Εκκίνηση ξανά χωρίς έλεγχο.','Έλεγχος στάθμης όταν είναι ασφαλές και τεχνική διερεύνηση πριν λειτουργήσει ξανά.','Διαγραφή της λυχνίας μέσω εφαρμογής.'],answer:1,why:'Η στάθμη δεν ισοδυναμεί με πίεση. Αν είναι φυσιολογική, η αιτία εξακολουθεί να χρειάζεται διερεύνηση.'}
    ]},
    {tab:'ABS',title:'Η λυχνία ABS μένει αναμμένη',lamp:'ABS · πορτοκαλί',level:'amber',story:'Μετά τον αυτοέλεγχο, η λυχνία ABS παραμένει αναμμένη χωρίς κόκκινη προειδοποίηση φρένων.',ecu:'ABS/ESC ECU · αισθητήρες τροχών · CAN',steps:[
      {question:'Ποιο συμπέρασμα είναι σωστό;',options:['Δεν επηρεάζεται καμία λειτουργία πέδησης.','Το ABS ενδέχεται να μην λειτουργεί· χρειάζεται σύντομος διαγνωστικός έλεγχος.','Η λυχνία βεβαιώνει ότι χάλασε ολόκληρη η ECU.'],answer:1,why:'Το εγχειρίδιο επισημαίνει ότι η κανονική πέδηση παραμένει, αλλά χωρίς αντιμπλοκαριστική λειτουργία ABS.'},
      {question:'Ποια στοιχεία αναζητά ο τεχνικός;',options:['DTC ABS, live data τροχών και κατάσταση συνδεσμολογίας.','Μόνο τη συχνότητα ραδιοφώνου.','Μόνο την ποσότητα AdBlue σε βενζινοκίνητο.'],answer:0,why:'Προηγείται τεκμηριωμένος έλεγχος αισθητήρων, μονάδας και καλωδίωσης.'}
    ]},
    {tab:'E-Tech Hybrid',title:'Χαμηλή φόρτιση μπαταρίας κίνησης',lamp:'Υβριδικό · κίτρινο',level:'amber',story:'Στην έκδοση E-Tech Hybrid, μετά από παρατεταμένη καταπόνηση σε πολύ χαμηλή ταχύτητα εμφανίζεται κίτρινη ένδειξη χαμηλής φόρτισης της μπαταρίας κίνησης.',ecu:'Υβριδικό σύστημα · BMS / διαχείριση ενέργειας · επικοινωνία μονάδων',steps:[
      {question:'Τι σημαίνει αρχικά αυτή η ένδειξη;',options:['Ότι χάλασε σίγουρα η μπαταρία υψηλής τάσης.','Ότι η μπαταρία 12 V πρέπει αμέσως να αντικατασταθεί.','Ότι η μπαταρία κίνησης έχει χαμηλή φόρτιση και απαιτείται τήρηση των οδηγιών του οχήματος.'],answer:2,why:'Το manual περιγράφει κίτρινη προειδοποίηση χαμηλής φόρτισης από παρατεταμένη χρήση υπό συγκεκριμένες συνθήκες.'},
      {question:'Αν εμφανιστεί κόκκινη προειδοποίηση και επικείμενη ακινητοποίηση;',options:['Ακολουθείς τις οδηγίες του ταμπλό και σταματάς σε ασφαλές σημείο, χωρίς επέμβαση σε HV κυκλώματα.','Ανοίγεις τα πορτοκαλί καλώδια υψηλής τάσης.','Αγνοείς τον ήχο και συνεχίζεις μέχρι να ακινητοποιηθεί.'],answer:0,why:'Η κόκκινη προειδοποίηση έχει διαφορετική βαρύτητα. Εργασίες υψηλής τάσης εκτελούν μόνο κατάλληλα εκπαιδευμένοι τεχνικοί.'}
    ]}
  ]
};
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
document.querySelectorAll('[data-quickdiag-model]').forEach(panel=>{
  const model=panel.dataset.quickdiagModel;
  const cases=CASES[model];
  if(!cases) return;
  let selected=0, stage=0;
  const picks={}; // one first-attempt grade per question, kept while changing cases
  const current=()=>cases[selected];
  const id=()=>`${selected}:${stage}`;
  const score=()=>Object.values(picks).filter(x=>x.correct).length;
  const gradeCount=()=>Object.keys(picks).length;
  const active=(si,j)=>picks[`${si}:${j}`];
  const completed=(si)=>Boolean(active(si,0)&&active(si,1));
  function render(){
    const item=current(),q=item.steps[stage],picked=picks[id()];
    const feedback=picked ? `<div class="qd-feedback" data-correct="${picked.correct}" role="status"><strong>${picked.correct?'✓ Σωστή διαγνωστική απόφαση':'! Χρειάζεται άλλη προσέγγιση'}</strong>${esc(q.why)}</div>`:'';
    panel.innerHTML=`<div class="qd-head"><div><div class="qd-eyebrow">LIVE TRAINING · SAEK</div><h2 class="qd-heading">Διαγνωστικός πίνακας</h2></div><div class="qd-power">SIM ACTIVE</div></div>
    <div class="qd-case-tabs" role="group" aria-label="Επιλογή διαγνωστικού περιστατικού">${cases.map((c,i)=>`<button type="button" class="qd-case-tab" data-case="${i}" aria-pressed="${i===selected}">${esc(c.tab)}${completed(i)?'<span class="qd-complete" aria-label="ολοκληρώθηκε">✓</span>':''}</button>`).join('')}</div>
    <div class="qd-display"><div class="qd-reading"><span>ΔΕΔΟΜΕΝΑ ΠΕΡΙΣΤΑΤΙΚΟΥ</span><span class="qd-indicator" data-level="${esc(item.level)}"><i class="qd-led" aria-hidden="true"></i>${esc(item.lamp)}</span></div><h3 class="qd-case-title">${esc(item.title)}</h3><p class="qd-story">${esc(item.story)}</p></div>
    <div class="qd-progression" aria-label="Βήμα ${stage+1} από 2"><span class="qd-step" data-state="${stage===0?'current':'done'}"></span><span class="qd-step" data-state="${stage===1?'current':'next'}"></span><span class="qd-progress-label">ΕΛΕΓΧΟΣ ${stage+1}/2</span></div>
    <p class="qd-question">${esc(q.question)}</p><div class="qd-options" role="group" aria-label="Επιλογές απάντησης">${q.options.map((opt,i)=>`<button type="button" class="qd-choice" data-choice="${i}" ${picked?'disabled':''} ${picked&&i===q.answer?'data-correct="true"':''} ${picked&&i===picked.chosen&&i!==q.answer?'data-wrong="true"':''}><span class="qd-letter">${'ΑΒΓ'[i]}</span><span>${esc(opt)}</span></button>`).join('')}</div>
    ${feedback}
    ${picked?`<div class="qd-module"><b>ECU / ΔΙΚΤΥΟ · ΕΚΠΑΙΔΕΥΤΙΚΟ ΣΕΝΑΡΙΟ</b>${esc(item.ecu)}</div><button type="button" class="qd-action" data-next>${stage===0?'Επόμενο βήμα →':(selected<cases.length-1?'Επόμενο περιστατικό →':'Επιστροφή στο 1ο περιστατικό ↺')}</button>`:''}
    <div class="qd-footer"><span>Πρόοδος: <b>${gradeCount()}/6</b> · σωστές πρώτες επιλογές: <b>${score()}</b></span><button type="button" class="qd-reset" data-reset aria-label="Επανεκκίνηση σύντομης άσκησης">Επανεκκίνηση</button></div>
    <p class="qd-disclaimer">Υποθετικές εκπαιδευτικές περιπτώσεις, όχι διάγνωση πραγματικού οχήματος. Σε κόκκινη κρίσιμη προειδοποίηση προέχει η ασφαλής ακινητοποίηση.</p>`;
    panel.querySelectorAll('[data-case]').forEach(b=>b.addEventListener('click',()=>{
      selected=Number(b.dataset.case);stage=active(selected,0)&&!active(selected,1)?1:0;render();
    }));
    panel.querySelectorAll('[data-choice]').forEach(b=>b.addEventListener('click',()=>{
      if(active(selected,stage))return;
      const chosen=Number(b.dataset.choice);
      picks[id()]={chosen,correct:chosen===q.answer};render();
      const f=panel.querySelector('.qd-feedback');if(f)f.focus?.({preventScroll:true});
    }));
    panel.querySelector('[data-next]')?.addEventListener('click',()=>{
      if(stage===0)stage=1; else {selected=(selected+1)%cases.length;stage=0};render();
    });
    panel.querySelector('[data-reset]').addEventListener('click',()=>{
      Object.keys(picks).forEach(k=>delete picks[k]);selected=0;stage=0;render();
    });
  }
  render();
});
})();
