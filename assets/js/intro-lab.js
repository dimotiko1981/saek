const introLab = document.querySelector("[data-intro-lab]");

if (introLab) {
  const steps = [
    {
      kicker: "Βασική λογική λειτουργίας",
      title: "Ποια είναι η σωστή σειρά λειτουργίας;",
      description: "Η θερμοκρασία του ψυκτικού ανεβαίνει και πρέπει να ενεργοποιηθεί ο ηλεκτρικός ανεμιστήρας.",
      hint: "Σκέψου τη σειρά: πρώτα μέτρηση, μετά απόφαση και τέλος εκτέλεση.",
      options: [
        { text: "Αισθητήρας θερμοκρασίας → ECU κινητήρα → ανεμιστήρας", meta: "Μέτρηση → απόφαση → εκτέλεση", correct: true },
        { text: "Ανεμιστήρας → αισθητήρας θερμοκρασίας → ECU", meta: "Η ενέργεια τοποθετείται πριν από τη μέτρηση", penalty: 9 },
        { text: "ECU → ανεμιστήρας → αισθητήρας θερμοκρασίας", meta: "Η είσοδος πρέπει να προηγηθεί της απόφασης", penalty: 8 },
      ],
      success: "Σωστά. Ο αισθητήρας μετρά, η ECU επεξεργάζεται και ο ενεργοποιητής εκτελεί την εντολή.",
      console: {
        icon: "→",
        label: "ΡΟΗ ΠΛΗΡΟΦΟΡΙΑΣ",
        value: "ΑΙΣΘΗΤΗΡΑΣ → ECU → ΕΝΕΡΓΟΠΟΙΗΤΗΣ",
        detail: "Η ίδια βασική λογική εμφανίζεται σε πολλά ηλεκτρονικά συστήματα του οχήματος.",
        chips: ["ΜΕΤΡΗΣΗ", "ΑΠΟΦΑΣΗ", "ΕΚΤΕΛΕΣΗ"],
      },
      rule: "Για να βρεις μια βλάβη, ξεκαθάρισε πρώτα ποιο στοιχείο δίνει είσοδο, ποιο αποφασίζει και ποιο εκτελεί.",
      log: "Ολοκληρώθηκε η αλυσίδα αισθητήρας → ECU → ενεργοποιητής.",
    },
    {
      kicker: "Συνεργασία ηλεκτρονικών μονάδων",
      title: "Πώς αξιοποιείται η ταχύτητα ενός τροχού;",
      description: "Ο αισθητήρας τροχού στέλνει τη μέτρηση στη μονάδα ABS. Το όχημα διαθέτει επίσης ESP και ηλεκτρονικό πίνακα οργάνων.",
      hint: "Στο δίκτυο μία χρήσιμη πληροφορία μπορεί να μεταδοθεί σε περισσότερες από μία μονάδες.",
      options: [
        { text: "Η μονάδα ABS μπορεί να μεταδώσει την πληροφορία σε ESP και πίνακα οργάνων", meta: "Κοινή χρήση δεδομένων μέσω δικτύου", correct: true },
        { text: "Κάθε μονάδα χρειάζεται υποχρεωτικά δικό της δεύτερο αισθητήρα στον ίδιο τροχό", meta: "Περισσότερα εξαρτήματα και καλωδίωση", penalty: 9 },
        { text: "Η πληροφορία παραμένει μόνο μέσα στον αισθητήρα και δεν μεταδίδεται", meta: "Δεν αξιοποιείται η δυνατότητα του δικτύου", penalty: 8 },
      ],
      success: "Σωστά. Το δίκτυο επιτρέπει σε διαφορετικές μονάδες να αξιοποιούν την ίδια μέτρηση χωρίς περιττούς αισθητήρες.",
      console: {
        icon: "↔",
        label: "ΚΟΙΝΗ ΧΡΗΣΗ ΔΕΔΟΜΕΝΩΝ",
        value: "ΑΙΣΘΗΤΗΡΑΣ ΤΡΟΧΟΥ → ABS → ESP / IPC",
        detail: "Το ABS λαμβάνει τη μέτρηση και άλλες μονάδες τη χρησιμοποιούν μέσω του κοινού διαύλου.",
        chips: ["ABS", "ESP", "IPC"],
      },
      rule: "Στο δικτυωμένο όχημα αναζητούμε ποιος παράγει την πληροφορία και ποιοι τη χρησιμοποιούν.",
      log: "Η μέτρηση ταχύτητας τροχού μοιράστηκε σε ABS, ESP και πίνακα οργάνων.",
    },
    {
      kicker: "Πρόσβαση στον κοινό δίαυλο",
      title: "Ποιο μήνυμα πρέπει να μεταδοθεί πρώτο στο CAN;",
      description: "Τέσσερις μονάδες προσπαθούν να στείλουν μήνυμα την ίδια στιγμή.",
      hint: "Η λειτουργία που επηρεάζει άμεσα την ασφάλεια και τον έλεγχο του οχήματος έχει μεγαλύτερη προτεραιότητα.",
      options: [
        { text: "Το ABS αναφέρει ολίσθηση τροχού κατά το φρενάρισμα", meta: "Κρίσιμη πληροφορία ενεργητικής ασφάλειας", correct: true },
        { text: "Το ραδιόφωνο αποθηκεύει έναν αγαπημένο σταθμό", meta: "Λειτουργία άνεσης χωρίς άμεσο κίνδυνο", penalty: 8 },
        { text: "Η BCM αλλάζει τον διακοσμητικό φωτισμό καμπίνας", meta: "Μη κρίσιμη λειτουργία αμαξώματος", penalty: 8 },
      ],
      success: "Σωστά. Στο CAN τα κρίσιμα μηνύματα ασφαλείας πρέπει να εξυπηρετούνται πριν από λειτουργίες άνεσης.",
      console: {
        icon: "!",
        label: "ΔΙΑΙΤΗΣΙΑ CAN",
        value: "ΠΡΩΤΑ ΤΟ ΚΡΙΣΙΜΟ ΜΗΝΥΜΑ",
        detail: "Η κοινή γραμμή δεν σημαίνει χάος. Το πρωτόκολλο καθορίζει κανόνες και προτεραιότητες.",
        chips: ["ABS", "BCM", "RADIO"],
      },
      rule: "Στο CAN προτεραιότητα δεν σημαίνει ποια μονάδα είναι ακριβότερη, αλλά ποιο μήνυμα είναι κρισιμότερο.",
      log: "Δόθηκε σωστά προτεραιότητα στο μήνυμα ολίσθησης από το ABS.",
    },
    {
      kicker: "Διαφορετική ανάγκη, διαφορετικό δίκτυο",
      title: "Ποια αντιστοίχιση δικτύων είναι σωστή;",
      description: "Το όχημα χρειάζεται έλεγχο παραθύρου, επικοινωνία μονάδων πέδησης και μεταφορά εικόνας από κάμερες ADAS.",
      hint: "LIN για απλές τοπικές λειτουργίες, CAN για αξιόπιστη επικοινωνία ECU και Ethernet για μεγάλο όγκο δεδομένων.",
      options: [
        { text: "LIN: παράθυρο • CAN: πέδηση • Automotive Ethernet: κάμερες", meta: "Η τεχνολογία ταιριάζει στις απαιτήσεις", correct: true },
        { text: "Ethernet: παράθυρο • LIN: κάμερες • CAN: διακοσμητικός φωτισμός", meta: "Το εύρος ζώνης και η κρισιμότητα δεν ταιριάζουν", penalty: 10 },
        { text: "LIN για όλες τις λειτουργίες, επειδή είναι το απλούστερο δίκτυο", meta: "Ένα δίκτυο δεν καλύπτει κάθε απαίτηση", penalty: 9 },
      ],
      success: "Σωστά. Η επιλογή δικτύου εξαρτάται από ταχύτητα, κόστος, όγκο δεδομένων και κρισιμότητα.",
      console: {
        icon: "≋",
        label: "ΕΠΙΛΟΓΗ ΤΕΧΝΟΛΟΓΙΑΣ",
        value: "LIN • CAN • AUTOMOTIVE ETHERNET",
        detail: "Από έναν διακόπτη παραθύρου έως πολλές κάμερες, οι ανάγκες επικοινωνίας αλλάζουν σημαντικά.",
        chips: ["ΑΠΛΟ", "ΑΞΙΟΠΙΣΤΟ", "ΥΨΗΛΗ ΤΑΧΥΤΗΤΑ"],
      },
      rule: "Δεν υπάρχει “καλύτερο” δίκτυο για όλα· υπάρχει το κατάλληλο δίκτυο για τη συγκεκριμένη εργασία.",
      log: "Αντιστοιχίστηκαν LIN, CAN και Automotive Ethernet στις σωστές εφαρμογές.",
    },
    {
      kicker: "Τα δεδομένα είναι στοιχεία, όχι έτοιμη επισκευή",
      title: "Τι ελέγχεις όταν το live data δείχνει −40 °C;",
      description: "Ο κινητήρας είναι ζεστός, αλλά το διαγνωστικό εμφανίζει θερμοκρασία ψυκτικού −40 °C.",
      hint: "Μια παράλογη τιμή κατευθύνει τον έλεγχο προς το εξάρτημα που μετρά και την ηλεκτρική διαδρομή του.",
      options: [
        { text: "Αισθητήρα θερμοκρασίας, φίσα και καλωδίωση πριν αποφασίσω για αντικατάσταση", meta: "Μεθοδικός έλεγχος της εισόδου", correct: true },
        { text: "Αντικαθιστώ αμέσως την ECU επειδή εμφανίζει λάθος αριθμό", meta: "Ακριβή απόφαση χωρίς επιβεβαίωση", penalty: 12 },
        { text: "Διαγράφω τους κωδικούς και αγνοώ τη ζωντανή τιμή", meta: "Χάνεται ένα σημαντικό διαγνωστικό στοιχείο", penalty: 9 },
      ],
      success: "Σωστά. Το live data μάς δείχνει πού να εστιάσουμε, αλλά η αιτία επιβεβαιώνεται με ηλεκτρικούς ελέγχους.",
      console: {
        icon: "−40°",
        label: "OBD / LIVE DATA",
        value: "ΘΕΡΜΟΚΡΑΣΙΑ ΨΥΚΤΙΚΟΥ: −40 °C",
        detail: "Η τιμή δεν συμφωνεί με την πραγματική κατάσταση του κινητήρα και χρειάζεται διερεύνηση.",
        chips: ["ΑΙΣΘΗΤΗΡΑΣ", "ΦΙΣΑ", "ΚΑΛΩΔΙΩΣΗ"],
      },
      rule: "Ο DTC και το live data δείχνουν κατεύθυνση ελέγχου· δεν αποτελούν από μόνα τους εντολή αλλαγής εξαρτήματος.",
      log: "Η παράλογη τιμή −40 °C οδήγησε σε έλεγχο αισθητήρα και καλωδίωσης.",
    },
    {
      kicker: "Συνδεσιμότητα με υπευθυνότητα",
      title: "Ποια είναι η ασφαλής ενέργεια του τεχνικού;",
      description: "Κατά την εργασία εμφανίζεται άγνωστο αρχείο ενημέρωσης ECU σε μη εξουσιοδοτημένο USB.",
      hint: "Οι ενημερώσεις λογισμικού επηρεάζουν κρίσιμες λειτουργίες και πρέπει να προέρχονται από ελεγμένη πηγή.",
      options: [
        { text: "Σταματώ και ακολουθώ μόνο την εγκεκριμένη διαδικασία με επαληθευμένο λογισμικό", meta: "Ασφαλής και ιχνηλάσιμη πρόσβαση", correct: true },
        { text: "Εγκαθιστώ το αρχείο για να δω αν λειτουργεί", meta: "Κίνδυνος αλλοίωσης ή μη εξουσιοδοτημένης πρόσβασης", penalty: 14 },
        { text: "Απενεργοποιώ την προστασία του διαγνωστικού για να ολοκληρωθεί γρηγορότερα", meta: "Παράκαμψη κρίσιμων μέτρων ασφαλείας", penalty: 14 },
      ],
      success: "Σωστά. Το συνδεδεμένο όχημα απαιτεί επαληθευμένες πηγές, εξουσιοδοτημένη πρόσβαση και τήρηση διαδικασιών.",
      console: {
        icon: "⌾",
        label: "ΚΥΒΕΡΝΟΑΣΦΑΛΕΙΑ ΟΧΗΜΑΤΟΣ",
        value: "ΕΛΕΓΜΕΝΗ ΠΡΟΣΒΑΣΗ • ΕΠΑΛΗΘΕΥΜΕΝΟ ΛΟΓΙΣΜΙΚΟ",
        detail: "Η ασφάλεια δεδομένων είναι μέρος της σύγχρονης τεχνικής εργασίας.",
        chips: ["ΠΗΓΗ", "ΕΞΟΥΣΙΟΔΟΤΗΣΗ", "ΔΙΑΔΙΚΑΣΙΑ"],
      },
      rule: "Δεν συνδέουμε άγνωστα μέσα και δεν εγκαθιστούμε μη επαληθευμένο λογισμικό σε ηλεκτρονικές μονάδες.",
      log: "Επιλέχθηκε ασφαλής, εγκεκριμένη διαδικασία ενημέρωσης λογισμικού.",
    },
  ];

  const screens = {
    welcome: introLab.querySelector('[data-intro-screen="welcome"]'),
    mission: introLab.querySelector('[data-intro-screen="mission"]'),
    result: introLab.querySelector('[data-intro-screen="result"]'),
  };
  const startButton = introLab.querySelector("[data-intro-start]");
  const restartButton = introLab.querySelector("[data-intro-restart]");
  const optionsContainer = introLab.querySelector("[data-intro-options]");
  const feedback = introLab.querySelector("[data-intro-feedback]");
  const continueButton = introLab.querySelector("[data-intro-continue]");
  const hintButton = introLab.querySelector("[data-intro-hint]");
  const scoreTarget = introLab.querySelector("[data-intro-score]");
  const timerTarget = introLab.querySelector("[data-intro-timer]");
  const stepCurrent = introLab.querySelector("[data-intro-step-current]");
  const progressBar = introLab.querySelector("[data-intro-progress]");
  const stepTag = introLab.querySelector("[data-intro-step-tag]");
  const kicker = introLab.querySelector("[data-intro-kicker]");
  const title = introLab.querySelector("[data-intro-title]");
  const description = introLab.querySelector("[data-intro-description]");
  const consoleIcon = introLab.querySelector("[data-intro-icon]");
  const consoleLabel = introLab.querySelector("[data-intro-console-label]");
  const consoleValue = introLab.querySelector("[data-intro-console-value]");
  const consoleDetail = introLab.querySelector("[data-intro-console-detail]");
  const consoleChips = introLab.querySelector("[data-intro-console-chips]");
  const rule = introLab.querySelector("[data-intro-rule]");
  const stationItems = [...introLab.querySelectorAll("[data-intro-stations] li")];
  const missionLog = introLab.querySelector("[data-intro-log]");
  const finalScore = introLab.querySelector("[data-intro-final-score]");
  const resultTitle = introLab.querySelector("[data-intro-result-title]");
  const resultMessage = introLab.querySelector("[data-intro-result-message]");
  const letters = ["Α", "Β", "Γ"];

  let stepIndex = 0;
  let score = 100;
  let elapsedSeconds = 0;
  let timerId = null;
  let resolved = false;
  let hintUsed = false;
  let attempted = new Set();

  const showScreen = (name) => {
    Object.entries(screens).forEach(([screenName, screen]) => {
      screen.hidden = screenName !== name;
    });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const remainder = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainder}`;
  };

  const shuffleOptions = (options) => {
    const shuffled = [...options];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled;
  };

  const updateScore = (penalty = 0) => {
    score = Math.max(0, score - penalty);
    scoreTarget.textContent = String(score);
  };

  const addLog = (message) => {
    const item = document.createElement("li");
    item.textContent = message;
    missionLog.append(item);
    while (missionLog.children.length > 4) missionLog.firstElementChild?.remove();
  };

  const showFeedback = (heading, copy, wrong = false) => {
    feedback.hidden = false;
    feedback.classList.toggle("is-wrong", wrong);
    feedback.querySelector("strong").textContent = heading;
    feedback.querySelector("p").textContent = copy;
  };

  const updateConsole = (step) => {
    consoleIcon.textContent = step.console.icon;
    consoleLabel.textContent = step.console.label;
    consoleValue.textContent = step.console.value;
    consoleDetail.textContent = step.console.detail;
    consoleChips.replaceChildren();
    step.console.chips.forEach((chip) => {
      const item = document.createElement("span");
      item.textContent = chip;
      consoleChips.append(item);
    });
    rule.textContent = step.rule;
  };

  const updateStations = () => {
    stationItems.forEach((item, index) => {
      item.classList.toggle("is-active", index === stepIndex);
      item.classList.toggle("is-done", index < stepIndex);
    });
  };

  const chooseOption = (button, option, optionIndex) => {
    if (resolved || attempted.has(optionIndex)) return;
    attempted.add(optionIndex);

    if (!option.correct) {
      button.classList.add("is-wrong");
      button.disabled = true;
      const penalty = option.penalty || 8;
      updateScore(penalty);
      showFeedback("Δεν είναι η καλύτερη επιλογή", `Αφαιρούνται ${penalty} βαθμοί. Διάβασε ξανά τα στοιχεία και σκέψου ποια αρχή του μαθήματος εφαρμόζεται.`, true);
      addLog(`Λανθασμένη επιλογή στον σταθμό ${stepIndex + 1} (−${penalty}).`);
      return;
    }

    resolved = true;
    button.classList.add("is-correct");
    optionsContainer.querySelectorAll("button").forEach((optionButton) => { optionButton.disabled = true; });
    showFeedback("Σωστή εφαρμογή της έννοιας", steps[stepIndex].success);
    addLog(steps[stepIndex].log);
    hintButton.disabled = true;
    continueButton.textContent = stepIndex === steps.length - 1 ? "Ολοκλήρωση εργαστηρίου →" : "Επόμενος σταθμός →";
    continueButton.hidden = false;
    continueButton.focus({ preventScroll: true });
  };

  const renderStep = () => {
    const step = steps[stepIndex];
    resolved = false;
    hintUsed = false;
    attempted = new Set();
    feedback.hidden = true;
    feedback.classList.remove("is-wrong");
    continueButton.hidden = true;
    hintButton.disabled = false;
    stepCurrent.textContent = String(stepIndex + 1);
    stepTag.textContent = `ΣΤΑΘΜΟΣ ${stepIndex + 1}`;
    kicker.textContent = step.kicker;
    title.textContent = step.title;
    description.textContent = step.description;
    progressBar.style.width = `${(stepIndex / steps.length) * 100}%`;
    updateConsole(step);
    updateStations();
    optionsContainer.replaceChildren();

    shuffleOptions(step.options).forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "decision-option";
      button.innerHTML = `<span>${letters[optionIndex]}</span><strong></strong><small></small>`;
      button.querySelector("strong").textContent = option.text;
      button.querySelector("small").textContent = option.meta;
      button.addEventListener("click", () => chooseOption(button, option, optionIndex));
      optionsContainer.append(button);
    });
  };

  const finishLab = () => {
    window.clearInterval(timerId);
    timerId = null;
    progressBar.style.width = "100%";
    finalScore.textContent = String(score);
    if (score >= 90) {
      resultTitle.textContent = "Άριστη κατανόηση της μεγάλης εικόνας";
      resultMessage.textContent = `Ολοκλήρωσες τους έξι σταθμούς σε ${formatTime(elapsedSeconds)} και συνέδεσες σωστά τις βασικές έννοιες της εισαγωγής.`;
    } else if (score >= 75) {
      resultTitle.textContent = "Πολύ καλή πρώτη διαδρομή";
      resultMessage.textContent = `Ολοκλήρωσες το εργαστήριο σε ${formatTime(elapsedSeconds)}. Είσαι έτοιμος να περάσεις από τη γενική εικόνα στις λεπτομέρειες του Μαθήματος 1.`;
    } else if (score >= 60) {
      resultTitle.textContent = "Η βασική εικόνα σχηματίστηκε";
      resultMessage.textContent = `Ολοκλήρωσες τους σταθμούς σε ${formatTime(elapsedSeconds)}, αλλά αξίζει να επαναλάβεις τις έννοιες των δικτύων και της διάγνωσης.`;
    } else {
      resultTitle.textContent = "Χρειάζεται μία ακόμη προσπάθεια";
      resultMessage.textContent = "Δες ξανά τις εισαγωγικές διαφάνειες και επανάλαβε το εργαστήριο εστιάζοντας στις εξηγήσεις κάθε σταθμού.";
    }
    showScreen("result");
  };

  const startLab = () => {
    window.clearInterval(timerId);
    stepIndex = 0;
    score = 100;
    elapsedSeconds = 0;
    scoreTarget.textContent = "100";
    timerTarget.textContent = "00:00";
    missionLog.innerHTML = "<li>Το εργαστήριο ξεκίνησε. Παρατήρησε τα στοιχεία του πρώτου σταθμού.</li>";
    renderStep();
    showScreen("mission");
    timerId = window.setInterval(() => {
      elapsedSeconds += 1;
      timerTarget.textContent = formatTime(elapsedSeconds);
    }, 1000);
  };

  hintButton.addEventListener("click", () => {
    if (hintUsed || resolved) return;
    hintUsed = true;
    updateScore(4);
    showFeedback("Βοήθεια", steps[stepIndex].hint);
    addLog(`Χρησιμοποιήθηκε βοήθεια στον σταθμό ${stepIndex + 1} (−4).`);
    hintButton.disabled = true;
  });

  continueButton.addEventListener("click", () => {
    if (!resolved) return;
    if (stepIndex === steps.length - 1) {
      finishLab();
      return;
    }
    stepIndex += 1;
    renderStep();
  });

  startButton.addEventListener("click", startLab);
  restartButton.addEventListener("click", startLab);
}
