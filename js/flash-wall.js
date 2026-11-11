(function () {
    "use strict";

    const wall = document.querySelector(".flash-wall");
    const toggle = wall.querySelector(".flash-toggle");
    const cards = wall.querySelectorAll(".flash-card");
    toggle.hidden = false;

    toggle.addEventListener("click", function () {
        const linework = wall.classList.toggle("is-linework");
        toggle.setAttribute("aria-pressed", String(linework));
    });

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    wall.classList.add("flash-animated");
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-inked");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(function (card) {
        observer.observe(card);
        card.addEventListener("pointerenter", function () { card.classList.add("is-inked"); }, { once: true });
        card.addEventListener("focusin", function () { card.classList.add("is-inked"); }, { once: true });
    });
})();

