const deck = document.querySelector("[data-intro-deck]");

if (deck) {
  const slides = [
    "Γνωριμία με το μάθημα",
    "Γιατί υπάρχει αυτό το μάθημα",
    "Το σύγχρονο όχημα είναι ένα δίκτυο",
    "Η πορεία των 15 μαθημάτων",
    "Ενότητα 1 — Βασικές αρχές",
    "Ενότητα 2 — CAN Bus",
    "Ενότητα 3 — Άλλα δίκτυα και δεδομένα",
    "Ενότητα 4 — OBD και διάγνωση",
    "Ενότητα 5 — Συνδεδεμένο όχημα",
    "Πώς θα δουλεύουμε κάθε εβδομάδα",
    "Τι θα μπορείτε να κάνετε",
    "Τι γνωρίζουμε ήδη;",
  ];

  const image = deck.querySelector("[data-slide-image]");
  const title = deck.querySelector("[data-slide-title]");
  const current = deck.querySelector("[data-slide-current]");
  const previousButtons = [...deck.querySelectorAll("[data-slide-prev]")];
  const nextButtons = [...deck.querySelectorAll("[data-slide-next]")];
  const dotsContainer = deck.querySelector("[data-slide-dots]");
  const frame = deck.querySelector(".intro-slide-frame");
  let currentIndex = 0;
  let touchStartX = 0;

  const dots = slides.map((slideTitle, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = String(index + 1);
    button.setAttribute("aria-label", `Διαφάνεια ${index + 1}: ${slideTitle}`);
    button.addEventListener("click", () => showSlide(index));
    dotsContainer.append(button);
    return button;
  });

  const preloadAdjacent = () => {
    [currentIndex - 1, currentIndex + 1]
      .filter((index) => index >= 0 && index < slides.length)
      .forEach((index) => {
        const preload = new Image();
        preload.src = `assets/slides/intro/slide-${index + 1}.webp`;
      });
  };

  const showSlide = (index) => {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    const slideNumber = currentIndex + 1;

    image.classList.add("is-changing");
    image.src = `assets/slides/intro/slide-${slideNumber}.webp`;
    image.alt = `Διαφάνεια ${slideNumber} από ${slides.length}: ${slides[currentIndex]}`;
    title.textContent = slides[currentIndex];
    current.textContent = String(slideNumber);

    previousButtons.forEach((button) => {
      button.disabled = currentIndex === 0;
    });
    nextButtons.forEach((button) => {
      button.disabled = currentIndex === slides.length - 1;
    });
    dots.forEach((button, dotIndex) => {
      const active = dotIndex === currentIndex;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-current", active ? "true" : "false");
    });
    dots[currentIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    history.replaceState(null, "", `#slide-${slideNumber}`);
    preloadAdjacent();
  };

  image.addEventListener("load", () => image.classList.remove("is-changing"));
  previousButtons.forEach((button) => button.addEventListener("click", () => showSlide(currentIndex - 1)));
  nextButtons.forEach((button) => button.addEventListener("click", () => showSlide(currentIndex + 1)));

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showSlide(currentIndex - 1);
    if (event.key === "ArrowRight") showSlide(currentIndex + 1);
    if (event.key === "Home") showSlide(0);
    if (event.key === "End") showSlide(slides.length - 1);
  });

  frame.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.clientX || 0;
  }, { passive: true });

  frame.addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0]?.clientX || 0;
    const distance = touchEndX - touchStartX;
    if (Math.abs(distance) < 45) return;
    showSlide(currentIndex + (distance < 0 ? 1 : -1));
  }, { passive: true });

  const hashSlide = Number(window.location.hash.match(/^#slide-(\d+)$/)?.[1]);
  showSlide(Number.isInteger(hashSlide) ? hashSlide - 1 : 0);
}
