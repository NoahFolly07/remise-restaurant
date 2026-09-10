/* Auberge du Barrage — remise de commerce : interactions légères */
(function () {
  "use strict";

  /* ---- Menu mobile ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Formulaire de contact : ouvre la messagerie (mailto) ----
     Remplacer par un service de formulaire (Formspree, Netlify Forms…)
     en changeant l'attribut action/method du <form> — voir README. */
  var DEST = "aubergebarrage@gmail.com";
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : "";
      };
      var nom = get("f-nom");
      var email = get("f-email");
      if (!nom || !email) {
        alert("Merci d'indiquer au moins votre nom et votre adresse e-mail.");
        return;
      }
      var nda = document.getElementById("f-nda");
      var lignes = [
        "Nom : " + nom,
        "Téléphone : " + (get("f-tel") || "—"),
        "E-mail : " + email,
        "",
        "Projet :",
        get("f-projet") || "—",
        "",
        "Dossier détaillé + accord de confidentialité : " + (nda && nda.checked ? "oui" : "non précisé")
      ];
      var url =
        "mailto:" + DEST +
        "?subject=" + encodeURIComponent("Demande de dossier — Reprise de l'Auberge du Barrage") +
        "&body=" + encodeURIComponent(lignes.join("\n"));
      window.location.href = url;
    });
  }
})();
