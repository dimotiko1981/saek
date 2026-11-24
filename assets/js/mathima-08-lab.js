/* SAEK · Μάθημα 8 — διαδραστικό εργαστήριο. Όλα τα παραδείγματα είναι υποθετικά. */
(() => {
  'use strict';
  const mode = document.body.dataset.lab8Mode;
  if (!mode) return;
  const stage = document.getElementById('lab8-work');
  const counter = document.getElementById('lab8-counter');
  const points = document.getElementById('lab8-points');
  const progress = document.getElementById('lab8-progress');
  const next = document.getElementById('lab8-next');
  if (!(stage && counter && points && progress && next)) return;
  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length-1; i>0; i--) {
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  };
  const escapeHTML = (s) => String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const choiceNames = ['Α','Β','Γ','Δ','Ε'];
  let index = 0, score = 0, answered = false;
  const updateStatus = (total, current = index+1) => {
    counter.textContent = `${Math.min(current,total)} / ${total}`;
    points.textContent = String(score);
    progress.style.width = `${Math.round(Math.min(current-1,total)/total*100)}%`;
  };
  function finish(total, possible = total) {
    counter.textContent = `${total} / ${total}`;
    progress.style.width = '100%';
    next.hidden = true;
    stage.innerHTML = `<section class="lab8-panel lab8-result"><span class="lab8-kicker">ΟΛΟΚΛΗΡΩΣΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑΣ</span><strong>${score} / ${possible}</strong><h2>Αξιολόγησε τις αποφάσεις σου</h2><p>Οι σωστές επιλογές βασίζονται στις απαιτήσεις της εφαρμογής και στα στοιχεία που πράγματι έχουν μετρηθεί. Σε πραγματικό όχημα, επιβεβαίωσε πάντα τη διαμόρφωση με τεχνικές οδηγίες κατασκευαστή.</p><a href="ergastirio-mathima-08.html">Επιστροφή στο εργαστήριο</a><button class="lab8-action" type="button" id="lab8-replay">Ξανά από την αρχή</button></section>`;
    document.getElementById('lab8-replay').addEventListener('click',()=>location.reload());
  }
  function simpleChoice(item, total, overrideChoices) {
    answered = false;
    next.hidden = true;
    next.textContent = index===total-1 ? 'Ολοκλήρωση →' : 'Επόμενη αποστολή →';
    updateStatus(total);
    const list = shuffle((overrideChoices || item.options).map((option,originalIndex)=>({option, correct: (overrideChoices ? option===item.correctText : originalIndex===item.correct)})));
    stage.innerHTML = `<div class="lab8-grid"><section class="lab8-panel"><span class="micro">ΠΕΡΙΣΤΑΤΙΚΟ ${String(index+1).padStart(2,'0')} / ${total}</span><h2>${escapeHTML(item.title)}</h2><p>${escapeHTML(item.description)}</p><div class="lab8-evidence"><b>ΣΤΟΙΧΕΙΑ ΠΕΡΙΣΤΑΤΙΚΟΥ</b>${escapeHTML(item.evidence)}</div>${item.diagram ? `<div class="lab8-diagram">${item.diagram}</div>`:''}</section><section class="lab8-panel"><span class="micro">ΑΠΟΦΑΣΗ ΤΕΧΝΙΚΟΥ</span><h2>${escapeHTML(item.question)}</h2><div class="lab8-answers" role="group" aria-label="Επιλογές απάντησης">${list.map((ch,i)=>`<button type="button" class="lab8-choice" data-correct="${ch.correct?'1':'0'}"><span>${choiceNames[i]}</span><span>${escapeHTML(ch.option)}</span></button>`).join('')}</div><div id="lab8-feedback" class="lab8-feedback" role="status" hidden></div></section></div>`;
    const buttons=[...stage.querySelectorAll('.lab8-choice')];
    buttons.forEach(btn=>btn.addEventListener('click',()=>{
      if (answered) return;
      answered=true;
      const correct=btn.dataset.correct==='1';
      if (correct) score++;
      buttons.forEach(b=>{
        b.disabled=true;
        if (b.dataset.correct==='1') b.classList.add('correct');
      });
      if (!correct) btn.classList.add('wrong');
      const fb=stage.querySelector('#lab8-feedback');
      fb.hidden=false;
      fb.classList.toggle('bad',!correct);
      fb.innerHTML=`<b>${correct?'Σωστή απόφαση':'Χρειάζεται επανεξέταση'}</b>${escapeHTML(item.explain)}`;
      points.textContent=String(score);
      next.hidden=false;
    }));
    next.onclick=()=>{if(!answered)return;index++;index===total ? finish(total) : draw();};
  }
  const networkOptions=['MOST','FlexRay','Automotive Ethernet','CAN','LIN'];
  const protocolCases = [
    ['Σύστημα ήχου προηγούμενης γενιάς','Σε εκπαιδευτικό όχημα ο ενισχυτής, η μονάδα πολυμέσων και ο δέκτης συνδέονται διαδοχικά σε δακτύλιο.','Απαιτείται συγχρονισμένη μεταφορά ήχου.','MOST','Το MOST σχεδιάστηκε για πολυμέσα και χρησιμοποιήθηκε συχνά σε δακτυλιοειδή τοπολογία.'],
    ['Οπτική ίνα στα πολυμέσα','Στο διάγραμμα πολυμέσων εμφανίζεται πλαστική οπτική ίνα ανάμεσα στη μονάδα και τον ενισχυτή.','Παλαιότερο σύστημα infotainment με κοινό δίκτυο ήχου.','MOST','Η πλαστική οπτική ίνα είναι χαρακτηριστική υλοποίηση του MOST25.'],
    ['Επαναλαμβανόμενοι χρονικοί κύκλοι','Μονάδες ελέγχου πρέπει να στέλνουν μηνύματα σε προκαθορισμένες θέσεις κάθε κύκλου.','Ο χρονισμός των μηνυμάτων έχει μεγάλη σημασία.','FlexRay','Το στατικό τμήμα του FlexRay ορίζει προκαθορισμένα χρονικά slots.'],
    ['Δύο κανάλια ελέγχου','Το διάγραμμα προβλέπει τα κανάλια A και B με κατάλληλη διαμόρφωση ανοχής σε βλάβες.','Απαιτείται προβλεψιμότητα και σχεδιασμένος πλεονασμός.','FlexRay','Το FlexRay μπορεί να χρησιμοποιεί δύο κανάλια A/B για πλεονασμό όταν αυτό προβλέπεται από τη διαμόρφωση.'],
    ['Κάμερα υψηλής ανάλυσης','Μία κάμερα μεταφέρει μεγάλες ποσότητες εικόνας σε κεντρική μονάδα επεξεργασίας.','Μεγάλος ρυθμός μεταφοράς δεδομένων.','Automotive Ethernet','Το Automotive Ethernet παρέχει εκδόσεις υψηλού εύρους ζώνης για δεδομένα αισθητήρων και ECU.'],
    ['Κεντρικός Ethernet switch','Πολλαπλές ECU συνδέονται με ανεξάρτητες ζεύξεις σε Ethernet switch.','Απαιτείται δίκτυο μεταφοράς και προώθησης πλαισίων.','Automotive Ethernet','Οι συνδέσεις 100/1000BASE-T1 χρησιμοποιούν συχνά switched τοπολογία.'],
    ['Διακόπτης καθρέφτη πόρτας','Απλές μικρές συσκευές επικοινωνούν με μία κύρια μονάδα.','Χαμηλό κόστος, μικρός όγκος δεδομένων και προγραμματισμένη επικοινωνία master–slave.','LIN','Το LIN ταιριάζει σε απλές λειτουργίες αμαξώματος.'],
    ['Τυπικά μηνύματα ECU','Πολλές ECU ανταλλάσσουν περιοδικά μικρά μηνύματα ελέγχου, με προτεραιότητα βάσει αναγνωριστικού.','Διαιτησία αναγνωριστικών στον κοινό δίαυλο.','CAN','Η μη καταστροφική διαιτησία βάσει ID χαρακτηρίζει το κλασικό CAN.'],
    ['Χειρισμός καθίσματος','Πολλοί μικροί ενεργοποιητές δέχονται απλές εντολές από μονάδα αμαξώματος.','Δεν ζητείται μετάδοση βίντεο ή υψηλός ρυθμός δεδομένων.','LIN','Το LIN είναι συχνή λύση χαμηλού κόστους για περιφερειακούς μηχανισμούς.'],
    ['Ζεύξη 100BASE-T1','Δύο μονάδες συνδέονται με ένα συνεστραμμένο ζεύγος μέσω κατάλληλων πομποδεκτών.','Ονομαστικός ρυθμός 100 Mbit/s.','Automotive Ethernet','Το 100BASE-T1 είναι φυσική έκδοση Ethernet για σύνδεση 100 Mbit/s σε ένα ζεύγος.'],
    ['Static και dynamic segment','Ένας επαναλαμβανόμενος κύκλος περιλαμβάνει στατικά και δυναμικά χρονικά τμήματα.','Προκαθορισμένη σειρά με πρόσθετη ευελιξία όταν επιτρέπεται.','FlexRay','Ο κύκλος FlexRay οργανώνεται σε static/dynamic segment και άλλες προαιρετικές περιοχές.'],
    ['Ενισχυτής και μονάδα πλοήγησης','Ένα παλαιότερο σύστημα αυτοκινήτου μεταφέρει συγχρονισμένο ήχο μεταξύ ανεξάρτητων μονάδων multimedia.','Ειδικό ιστορικό δίκτυο υπηρεσιών πολυμέσων.','MOST','Το MOST αναπτύχθηκε για υπηρεσίες ήχου, βίντεο και ελέγχου πολυμέσων.']
  ].map(c=>({title:c[0],description:c[1],evidence:c[2],question:'Ποιο δίκτυο ανταποκρίνεται καλύτερα στα στοιχεία που δίνονται;',options:networkOptions,correct:networkOptions.indexOf(c[3]),explain:c[4]}));

  const diagramSVG = (type) => {
    const node=(x,y,s) => `<rect x="${x-42}" y="${y-20}" width="84" height="40" rx="8" fill="#123b49" stroke="#57d6e5" stroke-width="2"/><text x="${x}" y="${y+5}" text-anchor="middle">${s}</text>`;
    const line=(x1,y1,x2,y2,color='#aed284')=>`<path d="M${x1} ${y1} L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>`;
    let drawing='';
    if(type==='ring' || type==='break') {
      drawing += line(120,75,300,75)+line(343,96,343,227)+line(300,250,120,250)+line(78,227,78,96);
      if(type==='break') drawing=drawing.replace('M343 96 L343 227','M343 96 L343 142').replace('M343 96 L343 142','M343 96 L343 142');
      drawing += node(120,75,'MEDIA')+node(300,75,'AMP')+node(300,250,'NAVI')+node(120,250,'DSP');
      if(type==='break') drawing += '<text x="360" y="186" fill="#ff938c">✕</text>';
    } else if(type==='star' || type==='activestar') {
      drawing += line(210,156,80,70)+line(210,156,340,70)+line(210,156,80,270)+line(210,156,340,270);
      drawing += node(210,156,type==='star'?'SWITCH':'COUPLER')+node(80,70,'ECU 1')+node(340,70,'ECU 2')+node(80,270,'ECU 3')+node(340,270,'ECU 4');
    } else if(type==='dual') {
      drawing += line(80,125,345,125,'#4ed2e9')+line(80,220,345,220,'#b7d884');
      drawing += node(80,125,'A1')+node(345,125,'A2')+node(80,220,'B1')+node(345,220,'B2');
      drawing += '<text x="210" y="106" text-anchor="middle">ΚΑΝΑΛΙ A</text><text x="210" y="204" text-anchor="middle">ΚΑΝΑΛΙ B</text>';
    } else if(type==='bus' || type==='multidrop') {
      drawing += line(40,175,380,175);
      for(const x of [80,210,340]){drawing+=line(x,175,x,105)+node(x,82, type==='bus'?'ECU':'PHY');}
    } else if(type==='pair') {
      drawing += line(122,145,300,145,'#4ed2e9')+line(122,159,300,159,'#b7d884')+node(80,152,'PHY A')+node(342,152,'PHY B');
      drawing += '<text x="210" y="195" text-anchor="middle">ΕΝΑ ΖΕΥΓΟΣ</text>';
    }
    return `<svg viewBox="0 0 420 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Εκπαιδευτικό σχηματικό διάγραμμα δικτύου"><rect width="420" height="330" rx="20" fill="transparent"/>${drawing}</svg>`;
  };
  const topologyDefinitions = [
    ['Διαδοχικός δακτύλιος πολυμέσων','Τέσσερις κόμβοι συνδέονται σε κλειστή ακολουθία.','Σχηματική διαδοχική μετάδοση μεταξύ μονάδων πολυμέσων.','ring','Κλασική τοπολογία δακτυλίου MOST','Ο δακτύλιος είναι συνηθισμένη υλοποίηση MOST.'],
    ['Κεντρικός switch και πολλαπλές ζεύξεις','Όλες οι ECU επικοινωνούν με κεντρικό στοιχείο προώθησης.','Κάθε συσκευή έχει δική της φυσική ζεύξη.','star','Switched Automotive Ethernet (αστέρας)','Ο κεντρικός switch προωθεί πλαίσια μεταξύ ξεχωριστών ζεύξεων Ethernet.'],
    ['Δύο κανάλια επικοινωνίας','Διακρίνεις δύο ξεχωριστές φυσικές διαδρομές A και B.','Η διπλή αρχιτεκτονική μπορεί να αξιοποιηθεί για πλεονασμό.','dual','FlexRay με κανάλια A και B','Η διπλή ζεύξη αφορά τα δύο κανάλια του FlexRay και απαιτεί κατάλληλη διαμόρφωση.'],
    ['Κοινή γραμμή με πολλαπλές ECU','Τρεις ECU συνδέονται σε κοινή φυσική γραμμή.','Προκαθορισμένος κύκλος στατικών μηνυμάτων.','bus','FlexRay με τοπολογία διαύλου','Το FlexRay υποστηρίζει διαύλους αλλά και αστέρες.'],
    ['Απευθείας σύνδεση PHY','Δύο Ethernet PHY επικοινωνούν με ζεύγος αγωγών.','Σημείο-προς-σημείο, χωρίς ενδιάμεσο κοινό δίαυλο.','pair','100BASE-T1 / 1000BASE-T1 point-to-point','Οι εκδόσεις 100/1000BASE-T1 χρησιμοποιούν μεμονωμένη point-to-point ζεύξη.'],
    ['Πολλοί PHY στην ίδια γραμμή','Πολλές συσκευές Ethernet μοιράζονται ένα κοινό μέσο.','Χαμηλότερος ρυθμός, 10 Mbit/s και υποστήριξη multidrop.','multidrop','10BASE-T1S multidrop','Το 10BASE-T1S επιτρέπει κοινή γραμμή με πολλαπλούς κόμβους.'],
    ['Ενεργός συζευκτής FlexRay','Πολλαπλές ECU συνδέονται σε ενεργό κεντρικό στοιχείο.','Στο διάγραμμα αναφέρεται σύζευξη FlexRay και όχι Ethernet switching.','activestar','FlexRay ενεργός αστέρας','Το FlexRay μπορεί να χρησιμοποιεί ενεργό αστέρα με star coupler.'],
    ['Διακοπή μέσα σε δακτύλιο','Το σύστημα πολυμέσων έχει 4 κόμβους και μια ασυνέχεια μεταξύ τους.','Ελέγχουμε φυσική σύνδεση πριν αντικατάσταση μονάδων.','break','Δακτύλιος MOST με πιθανή ασυνέχεια','Σε κλασικό MOST ring μια φυσική ασυνέχεια μπορεί να επηρεάζει τη ροή.']
  ];
  const topolOptions = topologyDefinitions.map(x=>x[4]);
  const topologyCases = topologyDefinitions.map(t=>({title:t[0],description:t[1],evidence:t[2],diagram:diagramSVG(t[3]),question:'Ποια περιγραφή του σχηματικού δικτύου είναι η ακριβέστερη;',options:topolOptions,correct:topolOptions.indexOf(t[4]),explain:t[5]}));

  const slotOptions=['Αισθητήρας','ECU ελέγχου','Μονάδα πλαισίου','Gateway','Ενεργοποιητής','Μονάδα διάγνωσης'];
  const flexMissions=[
    ['Πρώτος στατικός κύκλος','Ο αισθητήρας μεταδίδει πριν από την ECU, έπειτα η μονάδα πλαισίου και τέλος το gateway.',[0,1,2,3]],
    ['Προτεραιότητα στη διαδικασία ελέγχου','Πρώτα η ECU, έπειτα ο αισθητήρας, μετά το gateway και τελευταία η μονάδα πλαισίου.',[1,0,3,2]],
    ['Ανάδραση ενεργοποιητή','ECU → ενεργοποιητής → αισθητήρας → gateway.',[1,4,0,3]],
    ['Αποστολή δεδομένων πλαισίου','Μονάδα πλαισίου → ECU → gateway → ενεργοποιητής.',[2,1,3,4]],
    ['Εναλλακτική στατική ανάθεση','Gateway → αισθητήρας → ECU → μονάδα πλαισίου.',[3,0,1,2]],
    ['Επαναλαμβανόμενος κύκλος','Αισθητήρας → μονάδα πλαισίου → ECU → μονάδα διάγνωσης.',[0,2,1,5]]
  ].map((m,i)=>({title:m[0],description:m[1],solution:m[2],channel:i>=4?'Κανάλι B (εκπαιδευτικό σενάριο)':'Κανάλι A (εκπαιδευτικό σενάριο)'}));

  // Τα δελτία περιγράφουν επινοημένα περιστατικά — όχι χαρακτηριστικές βλάβες κατασκευαστή.
  // [πρωτόκολλο, τίτλος, σύμπτωμα, επιβεβαιωμένο στοιχείο, επόμενο βήμα, ασφαλές συμπέρασμα]
  const diagnosticData = [
    ['MOST','Σιγή στο ηχοσύστημα','Η οθόνη λειτουργεί αλλά δεν υπάρχει ήχος.','Η μονάδα πολυμέσων αναφέρει απώλεια επικοινωνίας με ενισχυτή.','Έλεγχος τροφοδοσίας, γείωσης και σύνδεσης ενισχυτή.','Η απώλεια επικοινωνίας δεν αποδεικνύει από μόνη της βλάβη ενισχυτή.'],
    ['MOST','Διακοπές ήχου','Ο ήχος διακόπτεται κατά διαστήματα.','Το σύμπτωμα εμφανίζεται όταν κινείται ο σύνδεσμος στο εκπαιδευτικό κύκλωμα.','Επιθεώρηση και έλεγχος του συνδέσμου με ασφαλή διαδικασία.','Η επαφή του συνδέσμου είναι ύποπτη αλλά χρειάζεται επαλήθευση.'],
    ['MOST','Πλοήγηση χωρίς φωνή','Ο χάρτης εμφανίζεται αλλά η φωνητική καθοδήγηση δεν ακούγεται.','Δεν έχουν καταγραφεί ακόμη μετρήσεις φυσικού δικτύου.','Καταγραφή ρυθμίσεων ήχου και κατάστασης των μονάδων MOST.','Μόνο το σύμπτωμα δεν απομονώνει τη βασική αιτία.'],
    ['MOST','Οπτικός σύνδεσμος','Μια εκπαιδευτική ζεύξη οπτικής ίνας δεν λειτουργεί.','Διακρίνεται μηχανική φθορά σε σύνδεσμο της οπτικής διαδρομής.','Έλεγχος οπτικής διαδρομής με κατάλληλη μέθοδο και οδηγίες ασφαλείας.','Η φθορά χρειάζεται τεχνική επιβεβαίωση πριν συνδεθεί αιτιωδώς με τη βλάβη.'],
    ['MOST','Απώλεια επικοινωνίας μετά από εργασία','Μετά από επέμβαση στο ταμπλό, οι υπηρεσίες ήχου δεν ξεκινούν.','Ένας σύνδεσμος του δικτύου έχει μείνει αποσυνδεδεμένος.','Ασφαλής επανασύνδεση και επανέλεγχος δικτύου σύμφωνα με οδηγίες.','Η φυσική ασυνέχεια είναι τεκμηριωμένο εύρημα που πρέπει να διορθωθεί.'],
    ['MOST','Ενισχυτής χωρίς τροφοδοσία','Ο ενισχυτής δεν ανταποκρίνεται.','Στο δοκιμαστικό κύκλωμα μετράται απουσία της προβλεπόμενης τροφοδοσίας.','Έλεγχος τροφοδοσίας, ασφάλειας και καλωδίωσης.','Η απουσία τροφοδοσίας επιβάλλει έλεγχο της παροχής πριν αλλάξουμε ECU.'],
    ['MOST','Δακτύλιος χωρίς συνέχεια','Πολλά στοιχεία infotainment δεν ανταποκρίνονται.','Έλεγχος επιβεβαίωσε ασυνέχεια σε μία θέση του εκπαιδευτικού δακτυλίου.','Αποκατάσταση της διαδρομής και επαναληπτική δοκιμή.','Η ασυνέχεια αποτελεί συγκεκριμένο εύρημα, αλλά απαιτείται έλεγχος μετά την επισκευή.'],
    ['MOST','Μονάδα gateway εκτός επικοινωνίας','Η διαγνωστική συσκευή δεν βρίσκει τμήμα του infotainment.','Η επικοινωνία με το gateway δεν έχει ελεγχθεί ανεξάρτητα.','Έλεγχος κατάστασης gateway και διασύνδεσης με το δίκτυο.','Δεν έχει τεκμηριωθεί ότι όλες οι μονάδες πολυμέσων είναι ελαττωματικές.'],
    ['MOST','Αναγνώριση μετά από αντικατάσταση','Μια νέα μονάδα ήχου δεν συνεργάζεται με το υπόλοιπο σύστημα.','Δεν επιβεβαιώθηκε συμβατότητα ή παραμετροποίηση της μονάδας.','Έλεγχος συμβατότητας και διαδικασίας παραμετροποίησης.','Η αποτυχία επικοινωνίας δεν δικαιολογεί νέα αντικατάσταση χωρίς ελέγχους.'],
    ['FlexRay','Ασυμφωνία χρονισμού','Κόμβος δεν εντάσσεται στον επαναλαμβανόμενο κύκλο.','Η ένδειξη καταγραφής αναφέρει αποτυχία συγχρονισμού.','Έλεγχος ρυθμίσεων χρονισμού, καλωδίωσης και συμμετεχόντων κόμβων.','Το πρόβλημα συγχρονισμού δεν ταυτοποιεί κατ’ ανάγκη βλάβη ECU.'],
    ['FlexRay','Κανάλι A εκτός','Η εκπαιδευτική μονάδα δεν βλέπει μηνύματα στο κανάλι A.','Στο κανάλι B καταγράφεται κανονική κίνηση.','Έλεγχος φυσικής διαδρομής και διαμόρφωσης καναλιού A.','Η λειτουργία του B δεν αποδεικνύει ότι το A είναι ακέραιο.'],
    ['FlexRay','Απουσία στατικού slot','Το σύστημα αναφέρει ότι ένα μήνυμα δεν εμφανίζεται στο αναμενόμενο slot.','Το μήνυμα απουσιάζει από δύο επαναλήψεις καταγεγραμμένου κύκλου.','Έλεγχος εκπομπού, αντιστοίχισης slot και κατάστασης κόμβου.','Η απουσία μηνύματος χρειάζεται συσχέτιση με τον εκπομπό και τον προγραμματισμό.'],
    ['FlexRay','Μη εγκεκριμένη παραμετροποίηση','Η επικοινωνία διακόπηκε μετά από αλλαγή παραμέτρων δικτύου.','Καταγράφεται απόκλιση του cycle configuration από την προδιαγραφή άσκησης.','Επαναφορά των εγκεκριμένων παραμέτρων και δοκιμή.','Η λανθασμένη διαμόρφωση είναι τεκμηριωμένο πρόβλημα στην άσκηση.'],
    ['FlexRay','Ενεργός αστέρας','Πολλοί κόμβοι πίσω από συζευκτή δεν επικοινωνούν.','Η τροφοδοσία του ενεργού συζευκτή δεν έχει ακόμη μετρηθεί.','Έλεγχος τροφοδοσίας και ζεύξεων του συζευκτή.','Δεν τεκμηριώνεται άμεσα ταυτόχρονη βλάβη όλων των ECU.'],
    ['FlexRay','Πιθανή παρεμβολή','Στην καταγραφή υπάρχουν σποραδικά επικοινωνιακά σφάλματα.','Το πρόβλημα εμφανίζεται παράλληλα με λειτουργία άλλου ηλεκτρικού συστήματος.','Έλεγχος θωράκισης, γείωσης και κυματομορφής με κατάλληλο εξοπλισμό.','Η χρονική σύμπτωση δεν τεκμηριώνει μόνη της αιτία παρεμβολής.'],
    ['FlexRay','Πρόβλημα μετά από σύνδεσμο','Μια ECU χάνει πρόσβαση στον κύκλο σε κραδασμούς.','Παρατηρείται μεταβολή της επικοινωνίας όταν κινείται καλώδιο.','Έλεγχος καλωδίου και επαφών με ασφαλή μέθοδο.','Η σύνδεση είναι ύποπτη αλλά απαιτείται επιβεβαίωση.'],
    ['FlexRay','Αντικατάσταση μονάδας','Μια νέα ECU δεν εμφανίζεται στα αναμενόμενα slots.','Η διαμόρφωση της νέας ECU δεν έχει διασταυρωθεί με το πρόγραμμα του δικτύου.','Επαλήθευση διαμόρφωσης ECU, κύκλου και slot assignment.','Η αντικατάσταση χωρίς συμβατό χρονισμό δεν εγγυάται λειτουργία.'],
    ['Automotive Ethernet','Καμία εικόνα από κάμερα','Η μονάδα επεξεργασίας δεν λαμβάνει ροή εικόνας.','Η διαγνωστική ένδειξη PHY δείχνει link down.','Έλεγχος τροφοδοσίας, καλωδίου και συνδέσμων της συγκεκριμένης ζεύξης.','Το link down δεν αποδεικνύει αυτόματα βλάβη κάμερας.'],
    ['Automotive Ethernet','Αστάθεια ζεύξης','Τα δεδομένα εικόνας φθάνουν με διακοπές.','Ο Ethernet switch καταγράφει συχνά link flaps.','Έλεγχος φυσικού μέσου και καταγραφών των θυρών switch.','Η διακοπή της ζεύξης χρειάζεται απομόνωση θύρας και καλωδίου.'],
    ['Automotive Ethernet','Μεγάλος φόρτος','Οι ενημερώσεις εικόνας καθυστερούν.','Καταγράφεται υψηλός φόρτος ζεύξης κατά την εκτέλεση του σεναρίου.','Ανάλυση χωρητικότητας, ουρών και πολιτικής κυκλοφορίας.','Η υψηλή χρήση μπορεί να προκαλεί καθυστέρηση, όχι απαραίτητα βλάβη καλωδίου.'],
    ['Automotive Ethernet','Link up χωρίς εφαρμογή','Ο PHY αναφέρει ενεργή σύνδεση, αλλά η εφαρμογή δεν παίρνει δεδομένα.','Το φυσικό επίπεδο δείχνει link up.','Έλεγχος διευθύνσεων, ροών, θύρας και διαγνωστικών εφαρμογής.','Το link up δεν αποδεικνύει σωστή λειτουργία της εφαρμογής.'],
    ['Automotive Ethernet','Μηχανική βλάβη ζεύξης','Μετά από εργασία σε πλεξούδα, μια Ethernet σύνδεση δεν λειτουργεί.','Η συνέχεια του ζεύγους βρέθηκε διακομμένη στο εκπαιδευτικό καλώδιο.','Αποκατάσταση του καλωδίου κατά τις προδιαγραφές και επανέλεγχος.','Η διακοπή αποτελεί πραγματικό εύρημα στην εκπαιδευτική ζεύξη.'],
    ['Automotive Ethernet','Λανθασμένη θύρα switch','Μονάδα συνδέθηκε σε διαφορετική φυσική θύρα από το εγκεκριμένο σχέδιο.','Η διάταξη συνδέσεων αποκλίνει από το τεχνικό διάγραμμα της άσκησης.','Έλεγχος σωστής αντιστοίχισης θυρών και ρυθμίσεων.','Η φυσική σύνδεση πρέπει να συμβαδίζει με τη σχεδιασμένη αρχιτεκτονική.'],
    ['Automotive Ethernet','Δίκτυο 10BASE-T1S','Πολλοί κόμβοι χαμηλού ρυθμού μοιράζονται μια γραμμή.','Ανιχνεύτηκε διπλή παραμετροποίηση node ID στην εκπαιδευτική άσκηση PLCA.','Έλεγχος και διόρθωση των μοναδικών node IDs της PLCA.','Η λανθασμένη ρύθμιση PLCA μπορεί να επηρεάσει τη λειτουργία του multidrop.'],
    ['Automotive Ethernet','Δεδομένα μετά από gateway','Μια μονάδα σε διαφορετικό υποδίκτυο δεν λαμβάνει δεδομένα.','Η ζεύξη προς το Ethernet gateway είναι ενεργή αλλά η ροή δεν φθάνει στον προορισμό.','Έλεγχος διαδρομής προώθησης, ρυθμίσεων gateway και εφαρμογής.','Η φυσική ζεύξη δεν αρκεί για να επιβεβαιωθεί διασύνδεση των υποδικτύων.']
  ];
  const otherNetworks = ['MOST','FlexRay','Automotive Ethernet'];
  const diagnostics = diagnosticData.flatMap((d,caseIndex) => {
    const [net,title,symptom,evidence,nextStep,conclusion] = d;
    const genericWrongEvidence = ['Έχει αποδειχθεί ότι η κύρια ECU καταστράφηκε.','Όλες οι μονάδες είναι οριστικά ελαττωματικές.','Το πρόβλημα οφείλεται με βεβαιότητα στο λογισμικό.'];
    const wrongNext = ['Αντικατάσταση της πρώτης ECU χωρίς μέτρηση','Διαγραφή DTC και παράβλεψη της βλάβης','Αποσύνδεση όλων των συνδέσμων χωρίς καταγραφή'];
    const wrongConclusion = ['Η συγκεκριμένη ECU χρειάζεται οπωσδήποτε αντικατάσταση.','Όλες οι συνδέσεις είναι απολύτως υγιείς χωρίς έλεγχο.','Το σύμπτωμα αποδεικνύει μία και μοναδική αιτία.'];
    const domainQuestion = {title:`Δελτίο ${caseIndex+1}: ${title}`,description:symptom,evidence:`${evidence}\nΕκπαιδευτικό σενάριο — όχι πραγματική βλάβη μοντέλου.`,question:'1/4 · Σε ποια οικογένεια δικτύου ανήκουν τα στοιχεία;',options:otherNetworks,correct:otherNetworks.indexOf(net),explain:`Το δελτίο εξετάζει ${net}. Μην μεταφέρεις αυτόματα τις διαγνωστικές τιμές σε διαφορετικό πρωτόκολλο.`};
    const evidenceQuestion={...domainQuestion,question:'2/4 · Ποιο από τα παρακάτω είναι πράγματι τεκμηριωμένο;',options:[evidence,...genericWrongEvidence],correct:0,explain:'Διαχωρίζουμε πάντα τα καταγεγραμμένα στοιχεία από τις πιθανές υποθέσεις.'};
    const nextQuestion={...domainQuestion,question:'3/4 · Ποιος είναι ο καταλληλότερος επόμενος έλεγχος;',options:[nextStep,...wrongNext],correct:0,explain:`Προτεινόμενο βήμα: ${nextStep}`};
    const endQuestion={...domainQuestion,question:'4/4 · Ποιο συμπέρασμα μπορείς να υποστηρίξεις;',options:[conclusion,...wrongConclusion],correct:0,explain:'Η διάγνωση διατυπώνεται μόνο μέχρι το επίπεδο βεβαιότητας που επιτρέπουν οι ενδείξεις.'};
    return [domainQuestion,evidenceQuestion,nextQuestion,endQuestion];
  });

  function renderFlexRay() {
    const total=flexMissions.length;
    if(index>=total){ finish(total);return; }
    const mission=flexMissions[index];
    answered=false;next.hidden=true;updateStatus(total);
    stage.innerHTML=`<div class="lab8-grid"><section class="lab8-panel"><span class="micro">ΣΤΑΤΙΚΟΣ ΚΥΚΛΟΣ ${index+1} / ${total}</span><h2>${escapeHTML(mission.title)}</h2><p>${escapeHTML(mission.description)}</p><div class="lab8-evidence"><b>ΕΚΠΑΙΔΕΥΤΙΚΗ ΣΥΜΠΕΡΙΦΟΡΑ</b>${escapeHTML(mission.channel)}. Οι τέσσερις θέσεις παρακάτω ανήκουν στο static segment και έχουν ήδη καθορισμένη διάρκεια. Το παράδειγμα δεν αναπαριστά πλήρη πραγματικό κύκλο.</div><div class="lab8-timeline" aria-label="Θέσεις στατικού κύκλου">${[1,2,3,4].map(i=>`<span data-slot-view="${i}">SLOT ${i}</span>`).join('')}</div><p class="lab8-note">Το static segment επαναλαμβάνεται σε συγχρονισμένους κύκλους. Τα μηνύματα σε πραγματικό σύστημα ακολουθούν την εγκεκριμένη διαμόρφωση του cluster.</p></section><section class="lab8-panel"><span class="micro">ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΓΡΑΜΜΑΤΟΣ</span><h2>Ανάθεσε τις τέσσερις χρονικές θέσεις</h2><div class="lab8-slot-list">${[0,1,2,3].map(i=>`<label><span>Static slot ${i+1}</span><select data-slot="${i}" aria-label="Μονάδα για slot ${i+1}"><option value="">— Επιλογή ECU —</option>${slotOptions.map((name,j)=>`<option value="${j}">${escapeHTML(name)}</option>`).join('')}</select></label>`).join('')}</div><div class="lab8-controls"><button type="button" class="lab8-action" id="lab8-check-slots">Έλεγχος κύκλου</button><button type="button" class="lab8-action" id="lab8-play-slots" hidden>Αναπαραγωγή κύκλου ▶</button></div><div id="lab8-feedback" class="lab8-feedback" role="status" hidden></div></section></div>`;
    const check=stage.querySelector('#lab8-check-slots');
    const play=stage.querySelector('#lab8-play-slots');
    const selects=[...stage.querySelectorAll('select[data-slot]')];
    const feedback=stage.querySelector('#lab8-feedback');
    let timer=null;
    check.addEventListener('click',()=>{
      if(answered)return;
      const values=selects.map(el=>el.value===''?null:Number(el.value));
      if(values.some(x=>x===null)){feedback.hidden=false;feedback.classList.add('bad');feedback.textContent='Επέλεξε μονάδα και για τις τέσσερις θέσεις πριν από τον έλεγχο.';return;}
      const success=values.every((val,i)=>val===mission.solution[i]);
      answered=true;
      if(success)score++;
      feedback.hidden=false;
      feedback.classList.toggle('bad',!success);
      feedback.innerHTML=`<b>${success?'Ο κύκλος διαμορφώθηκε σωστά':'Διόρθωση διαμόρφωσης'}</b>${escapeHTML(success?'Οι τέσσερις θέσεις αντιστοιχούν στην απαιτούμενη ακολουθία.':'Η αναμενόμενη σειρά είναι: '+mission.solution.map(j=>slotOptions[j]).join(' → ')+'.')}`;
      selects.forEach(s=>s.disabled=true);
      check.disabled=true;play.hidden=false;next.hidden=false;
      next.textContent=index===total-1?'Ολοκλήρωση →':'Επόμενη αποστολή →';
      points.textContent=String(score);
    });
    play.addEventListener('click',()=>{
      if(!answered)return;
      if(timer) clearInterval(timer);
      let n=0;
      const items=[...stage.querySelectorAll('[data-slot-view]')];
      items.forEach((el,i)=>{el.textContent='SLOT '+(i+1)+' · '+slotOptions[mission.solution[i]];el.classList.remove('ok','active')});
      items[0].classList.add('active');
      play.disabled=true;
      timer=setInterval(()=>{
        items.forEach(el=>el.classList.remove('active'));
        items[n].classList.add('ok');n++;
        if(n===items.length){clearInterval(timer);timer=null;play.disabled=false;return;}
        items[n].classList.add('active');
      },650);
    });
    next.onclick=()=>{if(!answered)return;if(timer)clearInterval(timer);index++;index===total?finish(total):draw();};
  }
  function draw() {
    if(mode==='protocols') return index===protocolCases.length ? finish(protocolCases.length) : simpleChoice(protocolCases[index],protocolCases.length);
    if(mode==='topologies') {
      if (index===topologyCases.length) return finish(topologyCases.length);
      const item=topologyCases[index];
      const distractors=shuffle(item.options.filter((_,i)=>i!==item.correct)).slice(0,3);
      return simpleChoice({...item,correctText:item.options[item.correct]},topologyCases.length,[item.options[item.correct],...distractors]);
    }
    if(mode==='diagnosis') return index===diagnostics.length ? finish(diagnostics.length,diagnostics.length) : simpleChoice(diagnostics[index],diagnostics.length);
    if(mode==='flexray') return renderFlexRay();
  }
  draw();
})();
