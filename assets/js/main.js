/* Auberge du Barrage — page de remise : interactions légères */
(function () {
  "use strict";

  /* En-tête : fond noir dès qu'on quitte le hero */
  var header = document.getElementById("header");
  var solidAfter = function () { return window.innerHeight * 0.6; };
  var onScroll = function () {
    if (window.scrollY > solidAfter()) header.classList.add("is-solid");
    else header.classList.remove("is-solid");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Apparition au défilement */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
