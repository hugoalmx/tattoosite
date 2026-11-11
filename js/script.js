(function ($) {
    "use strict";

    $(function () {
        var menuButton = $(".header-menu-toggle");
        var navigation = $(".header-nav-wrap");

        function setMenuOpen(isOpen) {
            menuButton.toggleClass("is-clicked", isOpen);
            menuButton.attr("aria-expanded", String(isOpen));
            navigation.toggleClass("is-open", isOpen);
        }

        menuButton.on("click", function () {
            setMenuOpen(menuButton.attr("aria-expanded") === "false");
        });

        navigation.on("click", "a", function () {
            if (menuButton.is(":visible")) {
                setMenuOpen(false);
                menuButton.trigger("focus");
            }
        });

        $(".header-wrap").on("keydown", function (event) {
            if (event.key === "Escape" && menuButton.attr("aria-expanded") === "true") {
                setMenuOpen(false);
                menuButton.trigger("focus");
            }
        });

        const videoDialog = document.querySelector(".portfolio-video");
        const player = videoDialog.querySelector("video");

        document.querySelectorAll(".portfolio-carousel").forEach(function (portfolio) {
            const track = portfolio.querySelector(".swiper-wrapper");
            const slides = Array.from(track.children);
            const photoLinks = track.querySelectorAll(".image-link");
            const repeatedPhotos = new Map();
            const desktopSlides = 5;

            // Swiper 9 needs at least twice the visible slide count for a stable loop.
            if (slides.length < desktopSlides * 2) {
                slides.forEach(function (slide) {
                    const copy = slide.cloneNode(true);
                    const link = copy.querySelector(".image-link");
                    link.tabIndex = -1;
                    link.setAttribute("aria-hidden", "true");
                    repeatedPhotos.set(link, slide.querySelector(".image-link"));
                    track.append(copy);
                });
            }

            const carousel = new Swiper(portfolio, {
                loop: true,
                slidesPerView: 2,
                spaceBetween: 20,
                speed: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 300,
                navigation: {
                    prevEl: portfolio.querySelector(".portfolio-prev"),
                    nextEl: portfolio.querySelector(".portfolio-next")
                },
                breakpoints: {
                    768: { slidesPerView: desktopSlides }
                }
            });
            Chocolat(photoLinks, {
                imageSize: "contain",
                loop: true
            });
            portfolio.addEventListener("click", function (event) {
                const link = event.target.closest(".image-link, .portfolio-video-link");
                if (!link) return;
                const originalPhoto = repeatedPhotos.get(link);
                const videoLink = link.classList.contains("portfolio-video-link");
                if (carousel.allowClick && !originalPhoto && (!videoLink || !videoDialog.showModal)) return;
                event.preventDefault();
                event.stopPropagation();
                if (!carousel.allowClick) return;
                if (originalPhoto) {
                    originalPhoto.click();
                } else {
                    player.poster = link.querySelector("img").src;
                    player.src = link.href;
                    videoDialog.showModal();
                    player.play().catch(function () {
                        // Keep the controls available if the browser blocks playback.
                    });
                }
            }, true);
        });

        videoDialog.addEventListener("close", function () {
            player.pause();
            player.removeAttribute("src");
            player.removeAttribute("poster");
            player.load();
        });
    });
})(window.jQuery);
