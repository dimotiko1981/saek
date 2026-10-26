(() => {
  const root = document.querySelector("[data-traffic-lab]");
  const panel = root?.querySelector('[data-panel="diagnosis"]');
  if (!panel) return;

  const cases = [
    {
      id: "focus",
      car: "Ford Focus RS",
      image: "assets/images/mathima-05-diagnosis/ford-focus-rs.webp",
      level: "01 · ΒΑΣΙΚΟ",
      symptom: "Μετά από εργασία σε φίσα, εμφανίζονται κατά διαστήματα σφάλματα επικοινωνίας σε αρκετές μονάδες.",
      readings: ["Δίκτυο σβηστό και απομονωμένο", "Αντίσταση CAN-H ↔ CAN-L: 120 Ω", "Συνήθης ένδειξη σε απλό εκπαιδευτικό δίκτυο με δύο τερματισμούς: περίπου 60 Ω"],
      question: "Ποια είναι η πιθανότερη αιτία;",
      options: [
        "Η αντίσταση είναι φυσιολογική· υπάρχουν και οι δύο τερματισμοί.",
        "Λείπει ένας τερματισμός ή έχει διακοπεί η σύνδεσή του.",
        "Οι γραμμές CAN-H και CAN-L είναι βραχυκυκλωμένες μεταξύ τους.",
        "Υπάρχει επιπλέον τερματισμός στο δίκτυο."
      ],
      answer: 1,
      explanation: "Δύο αντιστάσεις τερματισμού των 120 Ω συνδέονται παράλληλα και δίνουν περίπου 60 Ω. Ένδειξη 120 Ω ταιριάζει με έναν μόνο τερματισμό που παραμένει συνδεδεμένος.",
      next: "Έλεγξε τη συνέχεια μέχρι τους δύο τερματισμούς και επιθεώρησε την περιοχή της φίσας που επισκευάστηκε."
    },
    {
      id: "bmw",
      car: "BMW M2",
      image: "assets/images/mathima-05-diagnosis/bmw-m2.webp",
      level: "02 · ΒΑΣΙΚΟ",
      symptom: "Μετά την προσθήκη εξοπλισμού, το δίκτυο εμφανίζει σφάλματα και η επικοινωνία δεν είναι σταθερή.",
      readings: ["Δίκτυο σβηστό και απομονωμένο", "Αντίσταση CAN-H ↔ CAN-L: περίπου 40 Ω", "Στο απλοποιημένο παράδειγμα, οι τερματισμοί είναι 120 Ω"],
      question: "Τι δείχνει καλύτερα η μέτρηση των 40 Ω;",
      options: [
        "Λείπουν και οι δύο τερματισμοί.",
        "Υπάρχει διακοπή και στις δύο γραμμές.",
        "Υπάρχει πιθανότατα επιπλέον τερματισμός παράλληλα με τους δύο σωστούς.",
        "Η αντίσταση είναι η αναμενόμενη τιμή των δύο τερματισμών."
      ],
      answer: 2,
      explanation: "Τρεις αντιστάσεις των 120 Ω παράλληλα δίνουν περίπου 40 Ω. Αυτό μπορεί να συμβεί αν μια πρόσθετη μονάδα ή προσαρμογή προσθέτει τερματισμό εκεί που δεν πρέπει.",
      next: "Απομόνωσε με τη σωστή διαδικασία τον πρόσθετο εξοπλισμό και μέτρησε ξανά. Μην αφαιρείς τερματισμό χωρίς να γνωρίζεις τη διάταξη του δικτύου."
    },
    {
      id: "honda",
      car: "Honda Civic Type R FK8",
      image: "assets/images/mathima-05-diagnosis/honda-civic-type-r.webp",
      level: "03 · ΜΕΣΑΙΟ",
      symptom: "Πολλές μονάδες δεν επικοινωνούν μετά από πιθανή φθορά της πλεξούδας.",
      readings: ["Δίκτυο σβηστό και απομονωμένο", "Αντίσταση CAN-H ↔ CAN-L: περίπου 0,5 Ω", "Η μέτρηση έγινε αφού αποκλείστηκε η επίδραση των μονάδων"],
      question: "Ποια βλάβη ταιριάζει περισσότερο;",
      options: [
        "Βραχυκύκλωμα μεταξύ CAN-H και CAN-L.",
        "Ένας τερματισμός λείπει.",
        "Ανοιχτό κύκλωμα σε έναν κλάδο προς μία μονάδα.",
        "Φυσιολογική αντίσταση τερματισμού."
      ],
      answer: 0,
      explanation: "Σχεδόν μηδενική αντίσταση μεταξύ των δύο γραμμών δείχνει πιθανό βραχυκύκλωμα μεταξύ τους, εφόσον η μέτρηση έγινε με το δίκτυο σωστά απομονωμένο.",
      next: "Έλεγξε την πλεξούδα για σύνθλιψη, τριβή ή ένωση των αγωγών. Απομόνωσε τμήματα του κυκλώματος με βάση το διάγραμμα του οχήματος."
    },
    {
      id: "yaris",
      car: "Toyota Yaris GR",
      image: "assets/images/mathima-05-diagnosis/toyota-yaris-gr.webp",
      level: "04 · ΠΡΟΧΩΡΗΜΕΝΟ",
      symptom: "Οι περισσότερες μονάδες επικοινωνούν κανονικά, αλλά μία συγκεκριμένη μονάδα παραμένει εκτός δικτύου.",
      readings: ["Στην κεντρική γραμμή CAN-H ↔ CAN-L: περίπου 60 Ω", "Στον σύνδεσμο της μονάδας: συνέχεια CAN-L προς την ένωση: 0,4 Ω", "CAN-H προς την ίδια ένωση: πάνω από 1 MΩ"],
      question: "Ποιο τμήμα χρειάζεται πρώτο έλεγχο;",
      options: [
        "Οι δύο κεντρικοί τερματισμοί του δικτύου.",
        "Ο κλάδος CAN-H ανάμεσα στην ένωση και στη συγκεκριμένη μονάδα.",
        "Βραχυκύκλωμα μεταξύ CAN-H και CAN-L σε όλο το δίκτυο.",
        "Ο κλάδος CAN-L, επειδή έχει χαμηλή αντίσταση συνέχειας."
      ],
      answer: 1,
      explanation: "Η κεντρική γραμμή έχει την αναμενόμενη συνολική αντίσταση στο εκπαιδευτικό παράδειγμα. Στον σύνδεσμο, όμως, μόνο η CAN-L έχει συνέχεια προς την ένωση· η CAN-H φαίνεται ανοικτή.",
      next: "Με το κύκλωμα απομονωμένο, έλεγξε τον αγωγό CAN-H, τις ακίδες και τις ενώσεις του συγκεκριμένου κλάδου."
    },
    {
      id: "tesla",
      car: "Tesla Model 3",
      image: "assets/images/mathima-05-diagnosis/tesla-model-3.webp",
      level: "05 · ΠΡΟΧΩΡΗΜΕΝΟ",
      symptom: "Στο εκπαιδευτικό σενάριο χαμηλής τάσης, το δίκτυο ενεργοποιείται αλλά καταγράφει συνεχώς σφάλματα επικοινωνίας.",
      readings: ["Με το δίκτυο ενεργό και μετά από εντολή επικοινωνίας", "CAN-H: περίπου 2,5 V χωρίς μεταβολή", "CAN-L: περίπου 0,1 V χωρίς μεταβολή"],
      question: "Ποια αιτία ταιριάζει περισσότερο στα στοιχεία;",
      options: [
        "Η CAN-L φαίνεται βραχυκυκλωμένη προς γείωση.",
        "Η CAN-H και η CAN-L έχουν φυσιολογική διαφορική επικοινωνία.",
        "Λείπει ένας τερματισμός, άρα η CAN-L είναι σίγουρα στο 0,1 V.",
        "Υπάρχει επιπλέον αντίσταση τερματισμού."
      ],
      answer: 0,
      explanation: "Στο συγκεκριμένο απλοποιημένο σενάριο, η CAN-L παραμένει κοντά στα 0 V ενώ η CAN-H δεν παρουσιάζει την αναμενόμενη εναλλαγή. Αυτό δείχνει πιθανό βραχυκύκλωμα της CAN-L προς γείωση.",
      next: "Επιβεβαίωσε τη μέτρηση με την εγκεκριμένη διαδικασία του κατασκευαστή και έλεγξε για βραχυκύκλωμα προς γείωση. Το περιστατικό αφορά μόνο χαμηλής τάσης CAN· δεν αγγίζουμε το σύστημα υψηλής τάσης."
    }
  ];

  const caseList = panel.querySelector("[data-diagnosis-cases]");
  const caseView = panel.querySelector("[data-diagnosis-case]");
  const count = panel.querySelector("[data-diagnosis-count]");
  const completion = panel.querySelector("[data-diagnosis-complete]");
  const state = new Map(cases.map((item) => [item.id, { selected: null, attempts: 0, solved: false }]));
  let activeId = cases[0].id;

  function renderList() {
    caseList.replaceChildren();
    cases.forEach((item, index) => {
      const status = state.get(item.id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "diagnosis-case-choice";
      button.classList.toggle("is-active", item.id === activeId);
      button.classList.toggle("is-solved", status.solved);
      button.setAttribute("aria-pressed", String(item.id === activeId));
      button.innerHTML = `<span class="case-number">0${index + 1}</span><span class="case-title"><strong>${item.car}</strong><small>${item.level}</small></span><span class="case-state">${status.solved ? "Λύθηκε ✓" : "Εκκρεμεί"}</span>`;
      button.addEventListener("click", () => { activeId = item.id; render(); });
      caseList.append(button);
    });
  }

  function render() {
    const item = cases.find((entry) => entry.id === activeId);
    const status = state.get(item.id);
    count.textContent = String([...state.values()].filter((entry) => entry.solved).length);
    completion.hidden = ![...state.values()].every((entry) => entry.solved);
    renderList();
    caseView.replaceChildren();

    const top = document.createElement("div");
    top.className = "diagnosis-case-top";
    const photo = document.createElement("img");
    photo.className = "diagnosis-car-photo";
    photo.src = item.image;
    photo.alt = item.car;
    photo.loading = "lazy";
    const details = document.createElement("div");
    details.className = "diagnosis-case-details";
    details.innerHTML = `<span class="panel-kicker">ΠΕΡΙΣΤΑΤΙΚΟ · ${item.level}</span><h3>${item.car}</h3><p>${item.symptom}</p>`;
    top.append(photo, details);
    caseView.append(top);

    const evidence = document.createElement("div");
    evidence.className = "diagnosis-readings";
    const title = document.createElement("h4");
    title.textContent = "Στοιχεία από τον έλεγχο";
    evidence.append(title);
    item.readings.forEach((reading, index) => {
      const row = document.createElement("div");
      row.className = "diagnosis-reading";
      row.innerHTML = `<b>0${index + 1}</b><span>${reading}</span>`;
      evidence.append(row);
    });
    caseView.append(evidence);

    const form = document.createElement("fieldset");
    form.className = "diagnosis-options";
    const legend = document.createElement("legend");
    legend.textContent = item.question;
    form.append(legend);
    item.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "diagnosis-option";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "diagnosis-answer";
      radio.value = String(index);
      radio.checked = status.selected === index;
      radio.disabled = status.solved;
      radio.addEventListener("change", () => { status.selected = index; });
      const text = document.createElement("span");
      text.textContent = option;
      label.append(radio, text);
      form.append(label);
    });
    caseView.append(form);

    const actions = document.createElement("div");
    actions.className = "diagnosis-actions";
    const check = document.createElement("button");
    check.type = "button";
    check.className = "primary-button";
    check.textContent = status.solved ? "Ολοκληρωμένο" : "Έλεγξε τη διάγνωση →";
    check.disabled = status.solved;
    const feedback = document.createElement("div");
    feedback.className = "diagnosis-feedback";
    feedback.setAttribute("role", "status");
    if (status.solved) showSuccess(item, feedback);
    check.addEventListener("click", () => {
      if (status.selected === null) {
        feedback.className = "diagnosis-feedback is-warning";
        feedback.textContent = "Διάλεξε πρώτα μία πιθανή αιτία.";
        return;
      }
      if (status.selected === item.answer) {
        status.solved = true;
        check.disabled = true;
        check.textContent = "Ολοκληρωμένο ✓";
        showSuccess(item, feedback);
        count.textContent = String([...state.values()].filter((entry) => entry.solved).length);
        completion.hidden = ![...state.values()].every((entry) => entry.solved);
        renderList();
      } else {
        status.attempts += 1;
        feedback.className = "diagnosis-feedback is-error";
        feedback.textContent = status.attempts === 1
          ? "Δεν ταιριάζει με όλα τα στοιχεία. Ξανακοίτα τη μέτρηση και δοκίμασε ξανά."
          : "Δεν είναι αυτή η αιτία. Σύγκρινε την ένδειξη με τις αναμενόμενες τιμές του περιστατικού και δοκίμασε ξανά.";
      }
    });
    actions.append(check);
    caseView.append(actions, feedback);
  }

  function showSuccess(item, target) {
    target.className = "diagnosis-feedback is-success";
    target.replaceChildren();
    const heading = document.createElement("strong");
    heading.textContent = "Σωστή διάγνωση";
    const explanation = document.createElement("p");
    explanation.textContent = item.explanation;
    const next = document.createElement("p");
    next.innerHTML = `<b>Επόμενος έλεγχος:</b> ${item.next}`;
    target.append(heading, explanation, next);
  }

  render();
})();
