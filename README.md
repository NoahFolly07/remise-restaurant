# Auberge du Barrage — page de remise de commerce

Page web unique présentant la remise de l'Auberge du Barrage (Rossens, FR).
Destination du QR code imprimé sur les affiches A4.

## Structure

```
index.html                 La page
assets/css/style.css        Styles (charte brun-beige, Cormorant Garamond + Josefin Sans)
assets/js/main.js           Menu mobile + formulaire de contact (mailto)
assets/img/                 Photos
assets/logo/                Logos
robots.txt                  Bloque l'indexation
CONTENU-A-COMPLETER.md       Liste des informations à confirmer / remplacer
```

La page est **volontairement non indexée** : balise `<meta name="robots" content="noindex, nofollow">`
dans `index.html` **et** `robots.txt` qui bloque tout. À garder tant que la remise doit rester discrète.

## Voir la page en local

Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
python -m http.server 8000
```

Puis ouvrir http://localhost:8000

## Mettre en ligne (GitHub Pages)

1. Pousser le contenu de ce dossier à la racine de la branche `main`.
2. Repo → **Settings → Pages** → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
3. L'URL fournie (`https://<compte>.github.io/remise-restaurant/`) est celle à encoder dans le QR code.

> `noindex` + `robots.txt` restent actifs sur GitHub Pages : la page ne remontera pas dans Google.

## Formulaire de contact

Par défaut, le bouton **« Envoyer la demande »** ouvre la messagerie du visiteur avec un e-mail
pré-rempli vers `aubergebarrage@gmail.com` (aucun serveur requis).

Pour recevoir les demandes sans dépendre du client mail du visiteur, brancher un service de
formulaire (gratuit) :

- **Formspree** — créer un formulaire, récupérer l'URL `https://formspree.io/f/xxxx`, puis dans
  `index.html` remplacer `<form id="contact-form" novalidate>` par
  `<form id="contact-form" action="https://formspree.io/f/xxxx" method="POST">` et supprimer,
  dans `assets/js/main.js`, le bloc `form.addEventListener("submit", …)`.
- **Netlify Forms** — si hébergé sur Netlify : ajouter `name="contact" netlify` au `<form>`.

## À compléter avant diffusion

Voir `CONTENU-A-COMPLETER.md`. Tous les chiffres actuels sont des estimations marquées
« à confirmer » et un bandeau vert le signale en haut de page.
