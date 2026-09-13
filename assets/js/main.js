/* Auberge du Barrage — page de remise : interactions légères */
(function () {
  "use strict";

  /* En-tête : fond brun dès qu'on quitte le hero */
  var header = document.getElementById("header");
  if (header) {
    var solidAfter = function () { return window.innerHeight * 0.55; };
    var onScroll = function () {
      if (window.scrollY > solidAfter()) header.classList.add("is-solid");
      else header.classList.remove("is-solid");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Apparition au défilement */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* Slider photos : boutons précédent / suivant */
  var track = document.getElementById("gallery-track");
  var prev = document.getElementById("gallery-prev");
  var next = document.getElementById("gallery-next");
  if (track && prev && next) {
    var step = function () {
      var item = track.querySelector(".gallery__item");
      return item ? item.getBoundingClientRect().width + 14 : track.clientWidth * 0.8;
    };
    prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
  }
})();
