/* Auberge du Barrage — page de remise : interactions légères */
(function () {
  "use strict";

  /* En-tête : fond brun après le hero, masqué au scroll vers le bas,
     réaffiché au scroll vers le haut ou en haut de page. */
  var header = document.getElementById("header");
  if (header) {
    var lastY = window.scrollY;
    var ticking = false;
    var solidAfter = function () { return window.innerHeight * 0.55; };

    var update = function () {
      var y = window.scrollY;
      header.classList.toggle("is-solid", y > solidAfter());
      if (y < 80) {
        header.classList.remove("is-hidden");
      } else if (y > lastY + 4) {
        header.classList.add("is-hidden");
      } else if (y < lastY - 4) {
        header.classList.remove("is-hidden");
      }
      lastY = y;
      ticking = false;
    };
    update();
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
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

  /* Visionneuse photos (mosaïque -> plein écran, navigation flèches/clavier) */
  var items = Array.prototype.slice.call(document.querySelectorAll(".mosaic__item"));
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightbox-img");
  if (items.length && lb && lbImg) {
    var current = 0;

    var show = function (i) {
      current = (i + items.length) % items.length;
      var img = items[current].querySelector("img");
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || "";
    };
    var open = function (i) {
      show(i);
      lb.classList.add("is-open");
      lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };
    var close = function () {
      lb.classList.remove("is-open");
      lb.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    items.forEach(function (el, i) {
      el.addEventListener("click", function () { open(i); });
    });
    var moreBtn = document.getElementById("gallery-more-btn");
    if (moreBtn) {
      moreBtn.addEventListener("click", function () {
        var firstHidden = document.querySelector("#mosaic-more .mosaic__item");
        open(firstHidden ? items.indexOf(firstHidden) : 0);
      });
    }
    document.getElementById("lightbox-close").addEventListener("click", close);
    document.getElementById("lightbox-prev").addEventListener("click", function () { show(current - 1); });
    document.getElementById("lightbox-next").addEventListener("click", function () { show(current + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(current - 1);
      else if (e.key === "ArrowRight") show(current + 1);
    });

    /* balayage tactile */
    var touchX = null;
    lb.addEventListener("touchstart", function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1));
      touchX = null;
    }, { passive: true });
  }
})();
