# À compléter / à décider

Page en 4 blocs : Hero → L'établissement (fiche compacte) → Photos → Contact.
Style : brun `#1e1410` · crème `#f5f0eb` · or `#a7825f`. Grands titres en
Cormorant Garamond, texte courant en Inter (plus lisible), labels en
Josefin Sans, une seule trace d'Allura (slogan du pied de page).

## Ouvert

- [ ] **Logo** : Noah doit fournir le logo exact à utiliser. En attendant,
      la page utilise `assets/logo/logo-icon-blanc.png` (icône recadrée
      depuis `logo-blanc.png`). Dès réception du bon fichier, le remplacer
      dans `assets/logo/` et mettre à jour les deux `<img>` dans
      `index.html` (en-tête + pied de page) si le nom de fichier change.
- [ ] **Prix** : toujours rien d'affiché. Fourchette ou « sur demande » ?
- [ ] **Photos / vidéos** : le slider utilise 11 photos du dossier
      `../Photo/`. Si de meilleures photos ou des vidéos arrivent, les
      ajouter dans `assets/img/` et un bloc `.gallery__item` dans
      `index.html` (section `#photos`).
- [ ] **Nom de l'interlocuteur** : toujours pas affiché.
- [ ] Titre : « Remise de » — garder ou reformuler ?

## Notes techniques

- Le slider photos (`#photos`) est un carrousel natif CSS
  (`overflow-x:auto` + `scroll-snap`) : swipe au doigt sur mobile, boutons
  ‹ › sinon. Aucune librairie externe.
- La fiche technique est une grille de 8 chiffres clés (plus aucun tableau
  à rallonge) ; les 3 phrases (clientèle / CA / activité) sont repliées
  dessous, dans la même section — il n'y a plus de bandeau séparé.

## Déploiement

GitHub Pages : Settings → Pages → branche `main` / `/ (root)`.
`noindex` + `robots.txt` actifs → hors Google.
