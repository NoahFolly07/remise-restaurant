# Auberge du Barrage — page de remise

Page web unique (destination du QR code sur les affiches A4) annonçant la
remise de l'Auberge du Barrage, Rossens (FR).

Le style est repris du site officiel **auberge-du-barrage.ch** :
blanc / noir / bleu marine `#253551`, titres en capitales espacées,
grandes photos plein cadre, boutons filaires, pied de page noir.
Contenu volontairement minimal.

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

Substituts Google Fonts (Josefin Sans, Sofia Sans). Les polices exactes du
site officiel sont des Adobe Fonts liées à leur domaine et ne peuvent pas
être réutilisées ici ; le CSS les garde en première position dans la pile
au cas où la page serait un jour servie depuis un domaine disposant du kit.
