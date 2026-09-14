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
  var lbVideo = document.getElementById("lightbox-video");
  if (items.length && lb && lbImg) {
    var current = 0;

    var loadedVideoSrc = null;
    var show = function (i) {
      current = (i + items.length) % items.length;
      var el = items[current];
      var videoSrc = el.dataset.video;
      if (videoSrc && lbVideo) {
        var poster = el.querySelector("img");
        if (poster) lbVideo.poster = poster.currentSrc || poster.src;
        lbImg.hidden = true;
        lbVideo.hidden = false;
        lbVideo.pause();
        if (loadedVideoSrc !== videoSrc) { lbVideo.src = videoSrc; loadedVideoSrc = videoSrc; }
      } else {
        if (lbVideo) { lbVideo.pause(); lbVideo.hidden = true; lbVideo.removeAttribute("src"); loadedVideoSrc = null; }
        var img = el.querySelector("img");
        lbImg.hidden = false;
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt || "";
      }
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
      if (lbVideo) lbVideo.pause();
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

    /* Balayage tactile — ne bloque le tap natif (bouton lecture de la
       vidéo, etc.) que si un vrai geste horizontal est détecté ; sinon
       on laisse le tap passer normalement. Empêche aussi le geste de
       navigation "retour" du navigateur mobile de s'activer pendant le
       swipe (source du visuel "coupé en deux" pendant la transition). */
    var touchStartX = null, touchStartY = null, isSwiping = false;
    lb.addEventListener("touchstart", function (e) {
      // Non passive + preventDefault dès le départ : sur iOS Safari, le
      // geste natif de retour (edge-swipe) peut s'armer dès le premier
      // point de contact près du bord de l'écran. Attendre le premier
      // touchmove pour bloquer ce geste arrive trop tard.
      e.preventDefault();
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isSwiping = false;
    }, { passive: false });
    lb.addEventListener("touchmove", function (e) {
      if (touchStartX === null) return;
      // Bloque systématiquement le geste natif du navigateur (retour en
      // glissant, etc.) dès le premier mouvement — attendre un seuil
      // avant d'appeler preventDefault() laisse le temps au geste natif
      // de démarrer et de rester actif en parallèle du changement de
      // slide (c'est ce qui provoquait l'écran coupé en deux).
      e.preventDefault();
      var dx = e.touches[0].clientX - touchStartX;
      var dy = e.touches[0].clientY - touchStartY;
      if (!isSwiping && Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy)) {
        isSwiping = true;
      }
    }, { passive: false });
    lb.addEventListener("touchend", function (e) {
      if (isSwiping && touchStartX !== null) {
        var dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1));
      }
      touchStartX = null; touchStartY = null; isSwiping = false;
    }, { passive: true });
  }
})();
