(() => {
  const parents = {
    "index.html": null,
    "akadimia-pinakon.html": "index.html",
    "akadimia-tablo-golf8.html": "akadimia-pinakon.html",
    "akadimia-tablo-honda-civic-2018.html": "akadimia-pinakon.html",
    "akadimia-tablo-mercedes-w206-2023.html": "akadimia-pinakon.html",
    "akadimia-tablo-renault-clio-2024.html": "akadimia-pinakon.html",
    "akadimia-tablo-toyota-yaris-2023.html": "akadimia-pinakon.html",
    "akadimia-tablo-volvo-xc40-2025.html": "akadimia-pinakon.html",
    "diagnostiki-vardia.html": "ergastirio-mathima-02.html",
    "diagnostiki-focus.html": "diagnostiki-vardia.html",
    "diagnostiki-golf.html": "diagnostiki-vardia.html",
    "diagnostiki-peugeot.html": "diagnostiki-vardia.html",
    "diagnostiki-pilot.html": "diagnostiki-vardia.html",
    "diagnostiki-yaris.html": "diagnostiki-vardia.html",
    "diagnostiko-abs.html": "eisagogiko-mathima.html",
    "eisagogiki-parousiasi.html": "mathima-01.html",
    "eisagogiko-mathima.html": "mathima-01.html",
    "ergastirio-eisagogis.html": "eisagogiki-parousiasi.html",
    "ergastirio-mathima-02.html": "mathima-02.html",
    "ergastirio-mathima-03.html": "mathima-03.html",
    "ergastirio-mathima-04.html": "mathima-04.html",
    "ergastirio-mathima-05.html": "mathima-05.html",
    "mathima-01.html": "index.html",
    "mathima-02.html": "index.html",
    "mathima-03.html": "index.html",
    "mathima-04.html": "index.html",
    "mathima-04-can-builder.html": "ergastirio-mathima-04.html",
    "mathima-04-can-measurements.html": "ergastirio-mathima-04.html",
    "mathima-04-can-mission.html": "ergastirio-mathima-04.html",
    "mathima-04-can-tools.html": "ergastirio-mathima-04.html",
    "mathima-05.html": "index.html",
    "sxediasmos-diktyou.html": "topologies-interactive.html",
    "test-mathima-03.html": "mathima-03.html",
    "test-mathima-04.html": "mathima-04.html",
    "topologies-interactive.html": "mathima-03.html"
  };

  const current = location.pathname.split("/").pop() || "index.html";
  const fallback = parents[current] ?? null;
  const referrerIsLocal = (() => {
    if (!document.referrer) return false;
    try { return new URL(document.referrer).origin === location.origin; }
    catch { return false; }
  })();

  const button = document.createElement("button");
  button.id = "saek-common-back-button";
  button.type = "button";
  button.textContent = "← Πίσω";
  button.setAttribute("aria-label", "Επιστροφή στην προηγούμενη σελίδα");
  button.title = "Επιστροφή στην προηγούμενη σελίδα";

  // Κρύβει τα παλαιότερα κουμπιά επιστροφής, ώστε να υπάρχει μία κοινή επιλογή.
  const candidates = document.querySelectorAll("a[href]");
  for (const link of candidates) {
    const label = (link.textContent || "").trim();
    const isLegacyBack = [
      "back", "back-link", "lab-back-link", "academy-back", "top-link",
      "hub-nav__link--return"
    ].some((name) => link.classList.contains(name));
    const isBackLabel = /^(?:←\s*)?(?:επιστροφ|πίσω|return|back)\b/i.test(label);
    if (isLegacyBack || isBackLabel) {
      link.hidden = true;
      link.style.setProperty("display", "none", "important");
      link.setAttribute("aria-hidden", "true");
    }
  }

  button.addEventListener("click", () => {
    if (referrerIsLocal && history.length > 1) {
      history.back();
      return;
    }
    if (fallback) {
      location.assign(fallback);
      return;
    }
    if (history.length > 1) history.back();
  });

  if (!fallback && !referrerIsLocal && history.length <= 1) {
    button.disabled = true;
    button.title = "Δεν υπάρχει προηγούμενη σελίδα";
  }

  document.body.append(button);
})();
