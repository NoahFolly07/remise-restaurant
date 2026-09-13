# À compléter / à décider

Page en 4 blocs : Hero → L'établissement (fiche) → Photos (mosaïque
réduite + visionneuse) → Contact. Palette brun `#1e1410` / crème
`#f5f0eb` / or `#a7825f`. Cormorant Garamond pour les titres et les
eyebrows en Allura, Inter pour le texte courant, Josefin Sans pour les
petits labels.

## Ouvert

- [ ] **Logo** : Noah a transmis une image (icône dorée, fond
      transparent) — visuellement identique à `assets/logo/logo.png`
      déjà utilisé. Si le fichier réel diffère, le déposer directement
      dans `remise-restaurant/assets/logo/` (accès local direct) plutôt
      que de le repartager dans le chat, qui ne permet pas de récupérer
      le fichier lui-même.
- [ ] **Vidéos** : Noah va envoyer des vidéos à ajouter à la visionneuse
      photos. Prévoir dans `assets/img/` (ou un sous-dossier `video/`) et
      ajouter les items dans `#mosaic-more` ; la visionneuse (JS) devra
      être étendue pour afficher un `<video>` au lieu d'un `<img>` selon
      le type de fichier.
- [ ] **Référence de style** : toujours en attente d'un lien de site que
      Noah aime, pour une passe de design plus poussée.
- [ ] **Prix** / **nom de l'interlocuteur** : toujours pas affichés.

## Notes techniques (v5)

- **Bug de largeur corrigé** : la mosaïque photos utilisait une marge
  négative pour être « plein cadre », mais son parent (`<section>`) n'a
  pas de marge intérieure à compenser — ça faisait déborder toute la page
  horizontalement (marge blanche à droite sur mobile). Retiré, et ajouté
  `overflow-x: hidden` sur `html`/`body` en garde-fou. **Si Noah voit
  encore un décalage après ce déploiement, lui demander de vider le cache
  / forcer le rechargement du site sur son téléphone** (le CSS est mis en
  cache agressivement).
- **Typographies** : eyebrows de section en Allura script (`l'établissement`,
  `photos`), titres de section en Cormorant Garamond capitales (comme
  avant la passe « plus lisible »).
- **Encadré fiche technique** : coins renforcés retirés, reste un simple
  cadre 1px. Les 3 infos qualitatives (clientèle / CA / activité) sont
  maintenant des lignes de la même liste, plus de bloc à part.
- **Photos** : seules 5 photos sont visibles (1 grande + 4), le reste
  (7 photos) est cliquable uniquement via le bouton « Voir plus », qui
  ouvre la visionneuse directement sur la 6ᵉ photo — tout reste swipable
  depuis là.
- **Hero** : titre agrandi (`clamp` plus généreux) pour plus d'impact.

## Déploiement

GitHub Pages : Settings → Pages → branche `main` / `/ (root)`.
`noindex` + `robots.txt` actifs → hors Google.
