(function () {
    "use strict";

    const wall = document.querySelector(".flash-wall");
    const cards = wall.querySelectorAll(".flash-card");

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            entry.target.classList.toggle("is-inked", entry.intersectionRatio >= 0.2);
        });
    }, { threshold: 0.2 });

    cards.forEach(function (card) {
        observer.observe(card);
    });
})();
