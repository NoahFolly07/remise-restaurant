# À compléter / à décider

Page en 4 blocs : Hero → L'établissement (fiche) → Photos et vidéos
(mosaïque réduite + visionneuse) → Contact → Footer (brun, logo complet
+ liens Instagram/Facebook/site principal).

## Galerie photos/vidéos — mise à jour avec la sélection de Noah

9 photos + 4 vidéos, toutes centrées sur les lieux (aucun plat), comme
demandé. 5 items visibles (façade, réception, salle, 1 vidéo, bar), le
reste (8) accessible via « Voir plus ». Fichiers sources dans
`Downloads/transfer-01a08a03/` sur le PC de Noah.

- [ ] **Vidéos testées avec succès dans ce navigateur** (décodage,
      lecture, poster généré automatiquement) — à confirmer que ça joue
      bien aussi sur le téléphone de Noah et dans d'autres navigateurs
      (Safari notamment, pas testable depuis cet environnement). Le
      fichier `.MOV` a été laissé tel quel (pas converti en .mp4, aucun
      outil de conversion disponible ici) — s'il pose un souci sur un
      navigateur particulier, le reconvertir en .mp4 H.264.
- [ ] **Prix** / **nom de l'interlocuteur** : toujours pas affichés.
- [ ] **Référence de style** : toujours en attente d'un lien de site.
- [ ] **Nom de domaine GoDaddy** : migration depuis systeme.io en cours,
      toujours bloquée côté GoDaddy au 2026-09-14 — voir la conversation
      pour le détail des enregistrements DNS à garder/supprimer.

## Notes techniques (v8 — galerie)

- Fichiers vidéo dans `assets/video/` (`video-1.mp4` à `video-3.mp4` +
  `video-4.mov`, 8 à 24 Mo chacun). Posters générés automatiquement
  (`assets/img/video-*-poster.jpg`).
- Anciennes photos de plats et de terrasse/ambiance non retenues par
  Noah supprimées du repo (`terrasse.webp`, `salle-banquet.webp`,
  `ambiance.webp`, `plat-signature.jpg`, `specialite-portugaise.jpg`,
  `frites.webp`).
- Eyebrow de la section Photos changé en « photos et vidéos » (le titre
  H2 « L'établissement en images » reste inchangé).

## Déploiement

GitHub Pages : Settings → Pages → branche `main` / `/ (root)`.
`noindex` + `robots.txt` actifs → hors Google.
