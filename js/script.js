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

        Chocolat(document.querySelectorAll(".image-link"), {
            imageSize: "contain",
            loop: true
        });
    });
})(window.jQuery);
