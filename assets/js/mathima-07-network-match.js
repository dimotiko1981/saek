(() => {
  const root = document.querySelector('[data-network-match]');
  if (!root) return;

  const networks = ['LIN', 'I²C', 'CAN', 'SAE J1850 VPW', 'Chrysler PCI Bus'];
  const cases = [
    {
      label: 'Μονάδα παραθύρου',
      scenario: 'Ένας master στέλνει προγραμματισμένη επικεφαλίδα για την κατάσταση του παραθύρου. Μόνο η slave μονάδα που έχει οριστεί για αυτό το μήνυμα απαντά.',
      network: 'LIN',
      compare: [
        {text:'Στο LIN ο master οργανώνει το πρόγραμμα και τις επικεφαλίδες· στο CAN η πρόσβαση μπορεί να διεκδικηθεί από πολλούς κόμβους μέσω διαιτησίας.', correct:true},
        {text:'Στο LIN όλες οι slave μονάδες εκπέμπουν όποτε θέλουν· στο CAN υπάρχει πάντα ένας master.', correct:false},
        {text:'Το LIN και το CAN χρησιμοποιούν πάντα την ίδια φυσική γραμμή CAN-H/CAN-L.', correct:false}
      ],
      explain: 'Το βασικό στοιχείο είναι ότι ο master προγραμματίζει την επικοινωνία και ορίζει ποια slave απαντά.'
    },
    {
      label: 'Δύο ολοκληρωμένα κυκλώματα στην ίδια πλακέτα',
      scenario: 'Δύο κοντινά ηλεκτρονικά στοιχεία ανταλλάσσουν δεδομένα με δύο κοινές γραμμές, SDA και SCL. Η συσκευή επιλέγεται με διεύθυνση και οι γραμμές χρησιμοποιούν pull-up αντιστάσεις.',
      network: 'I²C',
      compare: [
        {text:'Το I²C είναι τοπικός δίαυλος δύο γραμμών SDA/SCL· το CAN χρησιμοποιείται για επικοινωνία μεταξύ μονάδων οχήματος και έχει διαφορετικό πλαίσιο πρόσβασης.', correct:true},
        {text:'Το I²C αναγνωρίζεται επειδή χρησιμοποιεί CAN ID 11 bit και CAN-H/CAN-L.', correct:false},
        {text:'Το I²C απαιτεί master να στέλνει LIN break και sync byte σε κάθε μήνυμα.', correct:false}
      ],
      explain: 'Οι γραμμές SDA και SCL, μαζί με τις διευθύνσεις συσκευών, είναι χαρακτηριστικές ενδείξεις για I²C.'
    },
    {
      label: 'Πολλές μονάδες διεκδικούν τον δίαυλο',
      scenario: 'Δύο μονάδες αρχίζουν να στέλνουν ταυτόχρονα. Συγκρίνουν τα ID bit προς bit· η μονάδα που χάνει τη διαιτησία σταματά χωρίς να καταστρέψει το μήνυμα που συνεχίζει.',
      network: 'CAN',
      compare: [
        {text:'Στο CAN η προτεραιότητα προκύπτει από τη διαιτησία των ID· στο LIN ο master καθορίζει πότε ξεκινά κάθε προγραμματισμένο μήνυμα.', correct:true},
        {text:'Στο CAN κάθε slave περιμένει να λάβει επικεφαλίδα από έναν μοναδικό master.', correct:false},
        {text:'Στο CAN οι μονάδες επιλέγονται αποκλειστικά από διεύθυνση SDA/SCL.', correct:false}
      ],
      explain: 'Η διαιτησία βάσει ID επιτρέπει σε πολλούς κόμβους CAN να ξεκινήσουν μαζί, χωρίς ηττημένο πομπό να αλλοιώσει το πλαίσιο.'
    },
    {
      label: 'Καταγραφή SAE J1850',
      scenario: 'Ο αναλυτής έχει ρυθμιστεί συγκεκριμένα στην παραλλαγή SAE J1850 VPW. Η καταγραφή δείχνει μετάδοση με παλμούς μεταβλητού πλάτους πάνω σε μία γραμμή σήματος.',
      network: 'SAE J1850 VPW',
      compare: [
        {text:'Η περιγραφή VPW και η μονή γραμμή δείχνουν την παραλλαγή SAE J1850 VPW· στο κλασικό high-speed CAN της θεωρίας εξετάζουμε διαφορικό ζεύγος CAN-H/CAN-L.', correct:true},
        {text:'Κάθε πρωτόκολλο μίας γραμμής είναι αυτομάτως I²C.', correct:false},
        {text:'Το SAE J1850 VPW χρησιμοποιεί προγραμματισμένες επικεφαλίδες LIN και master/slave.', correct:false}
      ],
      explain: 'Η περίπτωση κατονομάζει τη μορφή VPW και δίνει τα χαρακτηριστικά της. Η ένδειξη μίας γραμμής μόνη της δεν αρκεί για να αναγνωρίσει κάθε πρωτόκολλο.'
    },
    {
      label: 'Αναγνώριση Chrysler PCI Bus',
      scenario: 'Σε εκπαιδευτικό δελτίο παλαιότερου Chrysler, το εγχειρίδιο ονομάζει το δίκτυο Programmable Communication Interface (PCI) Bus και το περιγράφει ως μονόγραμμο πολυπλεγμένο δίαυλο.',
      network: 'Chrysler PCI Bus',
      compare: [
        {text:'Είναι ονομασία δικτύου επικοινωνίας οχήματος στο συγκεκριμένο δελτίο· δεν είναι η υποδοχή PCI ενός υπολογιστή και δεν πρέπει να βαφτιστεί CAN χωρίς στοιχεία.', correct:true},
        {text:'Η λέξη PCI αποδεικνύει ότι πρόκειται για δίαυλο επέκτασης μητρικής πλακέτας.', correct:false},
        {text:'Κάθε μονόγραμμο δίκτυο είναι υποχρεωτικά SAE J1850 VPW.', correct:false}
      ],
      explain: 'Εδώ η ονομασία και τα στοιχεία δίνονται από το εγχειρίδιο του σεναρίου. Το ακρωνύμιο PCI από μόνο του δεν αρκεί για να ταυτοποιήσει ένα δίκτυο.'
    }
  ];

  const card = root.querySelector('[data-match-card]');
  const complete = root.querySelector('[data-match-complete]');
  const number = root.querySelector('[data-match-number]');
  const scoreNode = root.querySelector('[data-match-score]');
  let index = 0;
  let score = 0;
  let submitted = false;
  const shuffle = values => [...values].map(value => ({value, sort:Math.random()})).sort((a,b)=>a.sort-b.sort).map(item=>item.value);

  function render() {
    const item = cases[index];
    number.textContent = String(index + 1);
    card.innerHTML = `<div class="match-scenario-head"><div><span class="eyebrow">ΣΕΝΑΡΙΟ ${String(index+1).padStart(2,'0')} · 5</span><h2>${item.label}</h2><p>Περίπτωση ${index+1} από ${cases.length}</p></div></div>
      <p style="margin:0 0 16px;color:#c4d2de;font-size:13px;line-height:1.75">${item.scenario}</p>
      <form data-match-form novalidate>
        <fieldset class="match-question"><legend>1. Ποιο δίκτυο ταιριάζει καλύτερα στα στοιχεία;</legend><div class="match-choices">${shuffle(networks).map((name,i)=>`<label class="match-choice"><input type="radio" name="network" value="${name}" data-correct="${name===item.network}"><span>${name}</span></label>`).join('')}</div></fieldset>
        <fieldset class="match-question"><legend>2. Ποια σύγκριση με το CAN είναι σωστή;</legend><div class="match-choices compare">${shuffle(item.compare).map((option,i)=>`<label class="match-choice"><input type="radio" name="compare" value="${i}" data-correct="${option.correct}"><span>${option.text}</span></label>`).join('')}</div></fieldset>
        <p class="form-error" data-match-error hidden>Επίλεξε απάντηση και στις δύο ερωτήσεις.</p>
        <div class="match-actions"><button class="primary-button" type="submit">Έλεγξε τις επιλογές →</button></div>
      </form>
      <div class="match-feedback" data-match-feedback hidden aria-live="polite"></div>
      <div class="match-bottom"><small>Συζήτησε την επιλογή σου πριν πατήσεις έλεγχο.</small><button class="secondary-button" type="button" data-match-next hidden>${index === cases.length-1 ? 'Ολοκλήρωση δραστηριότητας' : 'Επόμενο σενάριο →'}</button></div>`;
    card.querySelector('[data-match-form]').addEventListener('submit', check);
    card.querySelector('[data-match-next]').addEventListener('click', next);
    submitted = false;
  }

  function check(event) {
    event.preventDefault();
    if (submitted) return;
    const form = event.currentTarget;
    const chosen = [...form.querySelectorAll('input:checked')];
    if (chosen.length !== 2) { form.querySelector('[data-match-error]').hidden = false; return; }
    submitted = true;
    const correct = chosen.filter(input => input.dataset.correct === 'true').length;
    score += correct; scoreNode.textContent = String(score);
    form.querySelector('[data-match-error]').hidden = true;
    form.querySelectorAll('input').forEach(input => { input.disabled = true; });
    const feedback = card.querySelector('[data-match-feedback]');
    feedback.hidden = false;
    feedback.innerHTML = `<div class="audit-feedback${correct===2?'':' is-review'}"><h3>${correct===2?'Και οι δύο επιλογές είναι σωστές.':`${correct}/2 σωστές επιλογές.`}</h3><p>${itemExplain()}</p><p class="model-answer"><b>Δίκτυο:</b> ${cases[index].network}</p></div>`;
    card.querySelector('[data-match-next]').hidden = false;
  }

  function itemExplain() { return cases[index].explain; }

  function next() {
    if (index < cases.length - 1) { index++; render(); return; }
    card.hidden = true;
    complete.hidden = false;
    complete.innerHTML = `<span class="eyebrow">ΟΛΟΚΛΗΡΩΘΗΚΑΝ ΤΑ 5 ΣΕΝΑΡΙΑ</span><h2>Συζητήσατε τα χαρακτηριστικά των δικτύων.</h2><p>Συνολικό αποτέλεσμα: <strong>${score}/10 βαθμοί</strong></p><p>Ενδεικτικές αντιστοιχίσεις:</p><ul class="match-answer-list">${cases.map(item=>`<li><b>${item.label}:</b> ${item.network}. ${item.explain}</li>`).join('')}</ul><div class="match-actions"><button class="secondary-button" type="button" data-match-restart>Νέα προσπάθεια</button><a class="secondary-button" href="ergastirio-mathima-07.html">Επιστροφή στις δραστηριότητες</a></div>`;
    complete.querySelector('[data-match-restart]').addEventListener('click', () => {index=0;score=0;scoreNode.textContent='0';complete.hidden=true;card.hidden=false;render();window.scrollTo({top:0,behavior:'smooth'});});
    complete.scrollIntoView({behavior:'smooth',block:'center'});
  }

  render();
})();
