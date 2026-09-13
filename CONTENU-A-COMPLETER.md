# À compléter / à décider

Page en 4 blocs : Hero → L'établissement (fiche) → Photos (mosaïque +
visionneuse) → Contact. Palette brun `#1e1410` / crème `#f5f0eb` / or
`#a7825f`. Cormorant Garamond réservé au grand titre du hero ; tout le
reste en Inter (lisibilité) ; Josefin Sans pour les petits labels ; une
seule trace d'Allura (slogan du pied de page).

## Ouvert

- [ ] **Logo** : Noah a transmis une image du logo dans le chat (icône
      dorée, fond transparent) — visuellement identique à
      `assets/logo/logo.png` déjà utilisé dans le projet. Si le fichier
      réel diffère (résolution, version), le déposer directement dans
      `remise-restaurant/assets/logo/` (Claude a accès au dossier en
      local) plutôt que de le repartager dans le chat.
- [ ] **Référence de style** : Noah doit envoyer un site qu'il aime pour
      une prochaine passe de design (structure « landing page » moderne).
      Rien à faire tant que le lien n'est pas arrivé.
- [ ] **Prix** : toujours rien d'affiché.
- [ ] **Nom de l'interlocuteur** : toujours pas affiché.

## Notes techniques (v4)

- **En-tête** : masqué au scroll vers le bas, réaffiché au scroll vers le
  haut ou en haut de page (comme demandé). Passe en fond brun uni une fois
  sorti du hero.
- **Hero** : contenu recentré verticalement (plus haut qu'avant), le trait
  décoratif en bas a été supprimé.
- **L'établissement** : retour à l'encadré « frame in frame » avec liste à
  points de conduite (version préférée par Noah à la grille de chiffres).
- **Photos** : mosaïque plein cadre (12 photos, tailles variées, zéro
  légende) ; clic sur une photo → visionneuse plein écran avec flèches
  précédent/suivant, fermeture (croix, Échap, clic hors-image), swipe
  tactile. Aucune librairie externe.

## Déploiement

GitHub Pages : Settings → Pages → branche `main` / `/ (root)`.
`noindex` + `robots.txt` actifs → hors Google.
