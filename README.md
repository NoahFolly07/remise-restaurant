# Auberge du Barrage — page de remise

Page web unique (destination du QR code sur les affiches A4) annonçant la
remise de l'Auberge du Barrage, Rossens (FR).

Le style suit le **design system officiel de la marque** :
brun `#1e1410` · crème `#f5f0eb` · or `#a7825f` ;
Cormorant Garamond (titres capitales + corps italique),
Josefin Sans (labels espacés), Allura (mot signature).
Filets or, bords vifs, aucune ombre, aucun flou. Contenu volontairement minimal.

## Structure

```
index.html              La page (une seule)
assets/css/style.css     Styles
assets/js/main.js        En-tête au scroll + apparitions au défilement
assets/img/              Photos (tirées du dossier ../Photo/)
assets/logo/             Logos
robots.txt               Bloque l'indexation
CONTENU-A-COMPLETER.md    Points ouverts / à décider
```

Page **non indexée** : `<meta name="robots" content="noindex, nofollow">`
+ `robots.txt`. À garder tant que la remise doit rester discrète.

## Voir en local

Ouvrir `index.html` dans un navigateur, ou servir le dossier
(`npx http-server`, extension Live Server, etc.).

## Mettre en ligne (GitHub Pages)

1. Pousser sur `main`.
2. Repo → **Settings → Pages** → *Deploy from a branch*, `main`, `/ (root)`.
3. L'URL fournie est celle à encoder dans le QR code.

## Polices

Cormorant Garamond, Josefin Sans et Allura, toutes depuis Google Fonts
(`<link>` dans `index.html`).
