(() => {
  const root = document.querySelector("[data-traffic-lab]");
  if (!root) return;

  const messages = [
    { key: "abs", name: "ABS · ταχύτητα τροχών", short: "ABS", color: "#54e4b2" },
    { key: "engine", name: "ECU κινητήρα · στροφές", short: "ECU", color: "#2bd9fe" },
    { key: "body", name: "BCM · κατάσταση αμαξώματος", short: "BCM", color: "#ffd07d" },
    { key: "media", name: "Πολυμέσα · πληροφορίες", short: "MEDIA", color: "#a491ff" },
  ];
  const idChoices = ["040", "080", "120", "200", "320", "540", "600", "700"];
  const periods = [2, 5, 10, 20, 50, 100];
  const FRAME_MS = 0.8;
  const HORIZON_MS = 100;
  const sandboxStart = {
    abs: { id: "080", period: 10 },
    engine: { id: "120", period: 10 },
    body: { id: "320", period: 50 },
    media: { id: "600", period: 100 },
  };
  const missionStart = {
    abs: { id: "320", period: 10 },
    engine: { id: "120", period: 10 },
    body: { id: "200", period: 20 },
    media: { id: "080", period: 2 },
  };
  let sandboxConfig = clone(sandboxStart);
  let missionConfig = clone(missionStart);
  let missionLoaded = false;
  let activeTab = "arbitration";
  let bitIndex = 0;
  let contenders = [];
  let roundDone = false;
  let score = 0;

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  const welcome = root.querySelector("[data-welcome]");
  const simulator = root.querySelector("[data-simulator]");
  const tabs = [...root.querySelectorAll("[data-tab]")];
  const panels = [...root.querySelectorAll("[data-panel]")];

  const exampleMessages = [
    { name: "ABS", hex: "080", id: 0x080 },
    { name: "ECU κινητήρα", hex: "120", id: 0x120 },
    { name: "Πολυμέσα", hex: "320", id: 0x320 },
  ].map((item) => ({ ...item, binary: item.id.toString(2).padStart(11, "0") }));
  contenders = [...exampleMessages];

  function setTab(tabName) {
    activeTab = tabName;
    tabs.forEach((button) => {
      const active = button.dataset.tab === tabName;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-current", active ? "step" : "false");
    });
    panels.forEach((panel) => { panel.hidden = panel.dataset.panel !== tabName; });
    if (tabName === "network") renderConfig(root.querySelector("[data-config-rows]"), sandboxConfig, "sandbox");
    if (tabName === "mission") {
      if (!missionLoaded) {
        missionConfig = clone(missionStart);
        missionLoaded = true;
      }
      renderConfig(root.querySelector("[data-mission-config-rows]"), missionConfig, "mission");
    }
  }

  root.querySelector("[data-start]").addEventListener("click", () => {
    welcome.hidden = true;
    simulator.hidden = false;
    setTab("arbitration");
    simulator.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  tabs.forEach((button) => button.addEventListener("click", () => setTab(button.dataset.tab)));

  function renderRuler() {
    const ruler = root.querySelector("[data-bit-ruler]");
    ruler.replaceChildren();
    const label = document.createElement("span");
    label.textContent = "ΜΟΝΑΔΑ / ID";
    ruler.append(label);
    for (let bit = 10; bit >= 0; bit -= 1) {
      const cell = document.createElement("span");
      cell.textContent = String(bit);
      cell.dataset.rulerBit = String(10 - bit);
      ruler.append(cell);
    }
  }

  function renderContenders() {
    const container = root.querySelector("[data-contenders]");
    container.replaceChildren();
    const activeNames = new Set(contenders.filter((item) => !item.out).map((item) => item.name));
    contenders.forEach((item) => {
      const row = document.createElement("div");
      row.className = "contender" + (item.out ? " is-out" : "") + (roundDone && !item.out ? " is-winner" : "");
      const info = document.createElement("div");
      info.className = "contender-info";
      const icon = document.createElement("span");
      icon.className = "ecu-icon";
      icon.textContent = item.name === "ECU κινητήρα" ? "ECU" : item.name;
      const copy = document.createElement("span");
      const title = document.createElement("strong");
      title.textContent = item.name;
      const id = document.createElement("small");
      id.textContent = "ID 0x" + item.hex;
      copy.append(title, id);
      info.append(icon, copy);
      row.append(info);
      [...item.binary].forEach((bit, index) => {
        const cell = document.createElement("span");
        cell.className = "bit-cell " + (bit === "0" ? "bit-zero" : "bit-one");
        if (index === bitIndex && !roundDone) cell.classList.add("is-current");
        if (item.out) cell.classList.add("is-lost");
        cell.textContent = bit;
        cell.setAttribute("aria-label", `Bit ${10 - index}: ${bit}`);
        row.append(cell);
      });
      container.append(row);
    });
    const currentBit = root.querySelector("[data-bit-number]");
    const bitNumber = root.querySelector("[data-bus-bit]");
    const state = root.querySelector("[data-bus-state]");
    const survivorText = root.querySelector("[data-survivors]");
    const title = root.querySelector("[data-arbitration-title]");
    const copy = root.querySelector("[data-arbitration-copy]");
    const step = root.querySelector("[data-arbitration-step]");

    if (roundDone) {
      const winner = contenders.find((item) => !item.out);
      currentBit.textContent = "ΟΛΟΚΛΗΡΩΘΗΚΕ";
      bitNumber.textContent = "0";
      state.textContent = `Κερδίζει ${winner?.name ?? "—"} · ID 0x${winner?.hex ?? "---"}`;
      survivorText.textContent = winner?.name ?? "—";
      title.textContent = "Το μικρότερο ID κέρδισε";
      copy.textContent = "Οι υπόλοιπες μονάδες σταμάτησαν χωρίς να αλλοιώσουν το πλαίσιο. Θα ξαναδοκιμάσουν όταν ελευθερωθεί ο δίαυλος.";
      step.innerHTML = "Νέος γύρος <span aria-hidden=\"true\">↻</span>";
    } else {
      currentBit.textContent = `${Math.min(bitIndex + 1, 11)} / 11`;
      const active = contenders.filter((item) => !item.out);
      survivorText.textContent = active.map((item) => item.name).join(" · ");
      if (bitIndex === 0) {
        state.textContent = "Τα μηνύματα ξεκινούν μαζί";
        bitNumber.textContent = "—";
        title.textContent = "Τα μηνύματα ξεκινούν μαζί";
        copy.textContent = "Στο CAN οι μονάδες ελέγχουν τον δίαυλο ταυτόχρονα. Η σύγκριση αρχίζει από το πιο σημαντικό bit του ID.";
        step.textContent = "Έλεγξε το πρώτο bit →";
      }
    }
    root.querySelectorAll("[data-ruler-bit]").forEach((cell) => {
      cell.classList.toggle("is-current", Number(cell.dataset.rulerBit) === bitIndex && !roundDone);
    });
  }

  function resetArbitration() {
    bitIndex = 0;
    roundDone = false;
    contenders = exampleMessages.map((item) => ({ ...item, out: false }));
    root.querySelector("[data-arbitration-step]").textContent = "Έλεγξε το πρώτο bit →";
    root.querySelector("[data-bus-bit]").textContent = "—";
    renderContenders();
  }

  root.querySelector("[data-arbitration-step]").addEventListener("click", () => {
    if (roundDone) { resetArbitration(); return; }
    const live = contenders.filter((item) => !item.out);
    if (live.length <= 1) { roundDone = true; renderContenders(); return; }
    const bits = live.map((item) => item.binary[bitIndex]);
    const busBit = bits.includes("0") ? "0" : "1";
    live.forEach((item) => { if (item.binary[bitIndex] !== busBit) item.out = true; });
    const active = contenders.filter((item) => !item.out);
    const someWithdrew = active.length < live.length;
    root.querySelector("[data-bus-bit]").textContent = busBit;
    root.querySelector("[data-bus-state]").textContent = someWithdrew
      ? "Dominant 0: οι μονάδες με 1 αποσύρονται"
      : busBit === "0" ? "Όλοι έστειλαν dominant 0 και συνεχίζουν" : "Όλοι έστειλαν recessive 1 και συνεχίζουν";
    root.querySelector("[data-arbitration-title]").textContent = someWithdrew ? "Το dominant bit υπερίσχυσε" : "Ίδιο bit από όλους";
    root.querySelector("[data-arbitration-copy]").textContent = someWithdrew
      ? `Στο bit ${10 - bitIndex}, όποιος έστειλε recessive 1 αλλά διάβασε dominant 0 έχασε τη διαιτησία και σταμάτησε.`
      : `Στο bit ${10 - bitIndex} όλοι έστειλαν ${busBit}. Δεν αποσύρεται κανένα μήνυμα και η σύγκριση συνεχίζεται.`;
    bitIndex += 1;
    if (active.length === 1 || bitIndex >= 11) roundDone = true;
    renderContenders();
  });
  root.querySelector("[data-arbitration-reset]").addEventListener("click", resetArbitration);
  renderRuler();
  renderContenders();

  function renderConfig(container, config, scope) {
    container.replaceChildren();
    messages.forEach((message) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const nameWrap = document.createElement("div");
      nameWrap.className = "message-name";
      nameWrap.style.setProperty("--node-color", message.color);
      const dot = document.createElement("i");
      const name = document.createElement("span");
      const strong = document.createElement("strong");
      strong.textContent = message.name;
      const small = document.createElement("small");
      small.textContent = "Περιοδικό μήνυμα";
      name.append(strong, small);
      nameWrap.append(dot, name);
      nameCell.append(nameWrap);
      const idCell = document.createElement("td");
      const idSelect = document.createElement("select");
      idSelect.dataset.messageId = message.key;
      idSelect.setAttribute("aria-label", `ID μηνύματος ${message.name}`);
      idChoices.forEach((value) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = "0x" + value;
        option.selected = value === config[message.key].id;
        idSelect.append(option);
      });
      idCell.append(idSelect);
      const periodCell = document.createElement("td");
      const periodSelect = document.createElement("select");
      periodSelect.dataset.messagePeriod = message.key;
      periodSelect.setAttribute("aria-label", `Χρόνος κύκλου ${message.name}`);
      periods.forEach((value) => {
        const option = document.createElement("option");
        option.value = String(value);
        option.textContent = value + " ms";
        option.selected = value === config[message.key].period;
        periodSelect.append(option);
      });
      periodCell.append(periodSelect);
      row.append(nameCell, idCell, periodCell);
      container.append(row);
    });
    container.dataset.scope = scope;
  }

  function readConfig(container) {
    const result = {};
    messages.forEach((message) => {
      result[message.key] = {
        id: container.querySelector(`[data-message-id="${message.key}"]`).value,
        period: Number(container.querySelector(`[data-message-period="${message.key}"]`).value),
      };
    });
    return result;
  }

  function simulate(config) {
    const generated = [];
    messages.forEach((message, serial) => {
      for (let release = 0; release < HORIZON_MS; release += config[message.key].period) {
        generated.push({
          name: message.short,
          key: message.key,
          idHex: config[message.key].id,
          id: Number.parseInt(config[message.key].id, 16),
          release,
          serial: serial * 1000 + release,
        });
      }
    });
    generated.sort((a, b) => a.release - b.release || a.serial - b.serial);
    const pending = [];
    const transmitted = [];
    let pointer = 0;
    let now = 0;
    while (pointer < generated.length || pending.length) {
      while (pointer < generated.length && generated[pointer].release <= now + 1e-9) pending.push(generated[pointer++]);
      if (!pending.length) {
        now = generated[pointer].release;
        continue;
      }
      pending.sort((a, b) => a.id - b.id || a.release - b.release || a.serial - b.serial);
      const frame = pending.shift();
      transmitted.push({ ...frame, delay: now - frame.release, sentAt: now });
      now += FRAME_MS;
    }
    const absFrames = transmitted.filter((frame) => frame.key === "abs");
    const maxAbsDelay = absFrames.length ? Math.max(...absFrames.map((frame) => frame.delay)) : 0;
    const averageAbsDelay = absFrames.length ? absFrames.reduce((sum, frame) => sum + frame.delay, 0) / absFrames.length : 0;
    const busLoad = generated.length * FRAME_MS / HORIZON_MS * 100;
    const duplicates = messages.some((message, index) => messages.some((other, otherIndex) => otherIndex > index && config[message.key].id === config[other.key].id));
    return { generated, transmitted, busLoad, maxAbsDelay, averageAbsDelay, duplicates };
  }

  function renderSimulation(result, prefix) {
    const metricPrefix = prefix ? `data-${prefix}-` : "data-";
    root.querySelector(`[${metricPrefix}bus-load]`).innerHTML = `${result.busLoad.toFixed(1)}<em>%</em>`;
    root.querySelector(`[${metricPrefix}abs-delay]`).innerHTML = `${result.maxAbsDelay.toFixed(1)}<em> ms</em>`;
    const queue = root.querySelector(prefix === "" ? "[data-queue-list]" : "[data-mission-queue-list]");
    if (queue) {
      queue.replaceChildren();
      result.transmitted.slice(0, 8).forEach((frame, index) => {
        const item = document.createElement("div");
        item.className = "queue-item";
        const order = document.createElement("b"); order.textContent = String(index + 1).padStart(2, "0");
        const label = document.createElement("span"); label.textContent = frame.name;
        const id = document.createElement("small"); id.textContent = "0x" + frame.idHex;
        item.append(order, label, id);
        queue.append(item);
      });
      if (result.transmitted.length > 8) {
        const more = document.createElement("p");
        more.className = "empty-queue";
        more.textContent = `…και ${result.transmitted.length - 8} ακόμη μεταδόσεις στο παράθυρο.`;
        queue.append(more);
      }
    }
  }

  function setGoal(key, met) {
    const item = root.querySelector(`[data-goal="${key}"]`);
    item.classList.toggle("is-met", met);
    item.querySelector("i").textContent = met ? "Επιτεύχθηκε" : "Εκκρεμεί";
    return met;
  }

  root.querySelector("[data-run-simulation]").addEventListener("click", () => {
    sandboxConfig = readConfig(root.querySelector("[data-config-rows]"));
    const result = simulate(sandboxConfig);
    renderSimulation(result, "");
    root.querySelector("[data-simulation-label]").textContent = "100 ms · ΟΛΟΚΛΗΡΩΘΗΚΕ";
    root.querySelector("[data-load-hint]").textContent = `${result.generated.length} πλαίσια στο παράθυρο`;
    root.querySelector("[data-delay-hint]").textContent = `Μέση αναμονή ABS ${result.averageAbsDelay.toFixed(1)} ms`;
    root.querySelector("[data-run-status]").textContent = result.duplicates
      ? "Προσοχή: δύο μηνύματα έχουν ίδιο ID. Δώσε τους διαφορετικά αναγνωριστικά."
      : "Προσομοίωση ολοκληρώθηκε. Δοκίμασε διαφορετική ρύθμιση.";
    root.querySelector("[data-sim-explanation]").textContent = result.busLoad > 100
      ? "Ο προσφερόμενος φόρτος ξεπερνά τη διαθέσιμη χωρητικότητα του εκπαιδευτικού μοντέλου. Η ουρά μεγαλώνει και οι χρόνοι αναμονής αυξάνονται."
      : result.busLoad > 55
        ? "Ο φόρτος είναι υψηλός. Σύγκρινε τη συχνότητα των μηνυμάτων και δες αν τα κρίσιμα πλαίσια περιμένουν."
        : "Ο δίαυλος έχει διαθέσιμο χρόνο. Σε κάθε ελευθέρωση, το μικρότερο ID από τα πλαίσια που περιμένουν κερδίζει τη διαιτησία.";
  });

  root.querySelector("[data-reset-network]").addEventListener("click", () => {
    sandboxConfig = clone(sandboxStart);
    renderConfig(root.querySelector("[data-config-rows]"), sandboxConfig, "sandbox");
    root.querySelector("[data-simulation-label]").textContent = "ΑΝΑΜΟΝΗ";
    root.querySelector("[data-bus-load]").innerHTML = "—<em>%</em>";
    root.querySelector("[data-abs-delay]").innerHTML = "—<em> ms</em>";
    root.querySelector("[data-run-status]").textContent = "Ρύθμισε τις τιμές και ξεκίνα.";
    root.querySelector("[data-load-hint]").textContent = "Προσφερόμενος φόρτος";
    root.querySelector("[data-delay-hint]").textContent = "Πριν αρχίσει η μετάδοση";
    root.querySelector("[data-queue-list]").innerHTML = '<p class="empty-queue">Η σειρά μετάδοσης θα εμφανιστεί εδώ.</p>';
    root.querySelector("[data-sim-explanation]").textContent = "Όταν ο δίαυλος ελευθερώνεται, τα μηνύματα που περιμένουν ανταγωνίζονται ξανά με βάση το ID τους.";
  });

  root.querySelector("[data-run-mission]").addEventListener("click", () => {
    missionConfig = readConfig(root.querySelector("[data-mission-config-rows]"));
    const result = simulate(missionConfig);
    renderSimulation(result, "mission");
    const ids = messages.map((message) => Number.parseInt(missionConfig[message.key].id, 16));
    const absId = Number.parseInt(missionConfig.abs.id, 16);
    const mediaId = Number.parseInt(missionConfig.media.id, 16);
    const goals = [
      setGoal("abs-priority", absId === Math.min(...ids) && new Set(ids).size === ids.length),
      setGoal("media-priority", mediaId === Math.max(...ids) && new Set(ids).size === ids.length),
      setGoal("media-cycle", missionConfig.media.period >= 20),
      setGoal("bus-load", result.busLoad < 30),
    ];
    score = goals.filter(Boolean).length;
    root.querySelector("[data-score]").textContent = String(score);
    root.querySelector("[data-mission-simulation-label]").textContent = "100 ms · ΟΛΟΚΛΗΡΩΘΗΚΕ";
    root.querySelector("[data-mission-run-status]").textContent = result.duplicates
      ? "Υπάρχουν διπλά ID. Κάθε μήνυμα χρειάζεται το δικό του αναγνωριστικό."
      : `Αξιολογήθηκαν ${result.generated.length} πλαίσια. Δες ποιοι στόχοι επιτεύχθηκαν.`;
    const feedback = root.querySelector("[data-mission-feedback]");
    feedback.textContent = score === 4
      ? `Πολύ καλή ρύθμιση. Το ABS έχει την υψηλότερη προτεραιότητα, τα πολυμέσα τη χαμηλότερη και ο φόρτος είναι ${result.busLoad.toFixed(1)}%. Η μέγιστη αναμονή ABS είναι ${result.maxAbsDelay.toFixed(1)} ms.`
      : `Επιτεύχθηκαν ${score}/4 στόχοι. Φόρτος ${result.busLoad.toFixed(1)}% · μέγιστη αναμονή ABS ${result.maxAbsDelay.toFixed(1)} ms. Άλλαξε ID, χρόνους κύκλου ή και τα δύο και δοκίμασε ξανά.`;
    root.querySelector("[data-mission-complete]").hidden = score !== 4;
    const status = root.querySelector("[data-mission-status]");
    status.classList.toggle("is-complete", score === 4);
    status.querySelector("strong").textContent = score === 4 ? "ΔΙΚΤΥΟ ΡΥΘΜΙΣΤΗΚΕ" : "ΑΝΕΞΕΛΕΓΚΤΗ ΡΟΗ";
  });

  root.querySelector("[data-reset-mission]").addEventListener("click", () => {
    missionConfig = clone(missionStart);
    missionLoaded = true;
    renderConfig(root.querySelector("[data-mission-config-rows]"), missionConfig, "mission");
    root.querySelectorAll("[data-goal]").forEach((goal) => {
      goal.classList.remove("is-met");
      goal.querySelector("i").textContent = "Εκκρεμεί";
    });
    score = 0;
    root.querySelector("[data-score]").textContent = "0";
    root.querySelector("[data-mission-simulation-label]").textContent = "ΧΩΡΙΣ ΔΟΚΙΜΗ";
    root.querySelector("[data-mission-bus-load]").innerHTML = "—<em>%</em>";
    root.querySelector("[data-mission-abs-delay]").innerHTML = "—<em> ms</em>";
    root.querySelector("[data-mission-run-status]").textContent = "Κάνε αλλαγές και δοκίμασε το δίκτυο.";
    root.querySelector("[data-mission-feedback]").textContent = "Η προσομοίωση θα ελέγξει προτεραιότητα, συχνότητα μηνυμάτων και φόρτο διαύλου.";
    root.querySelector("[data-mission-complete]").hidden = true;
    const status = root.querySelector("[data-mission-status]");
    status.classList.remove("is-complete");
    status.querySelector("strong").textContent = "ΑΝΕΞΕΛΕΓΚΤΗ ΡΟΗ";
  });
})();
