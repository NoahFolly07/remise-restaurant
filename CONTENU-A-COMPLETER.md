# À compléter / à décider

Page en 4 blocs : Hero → L'établissement (fiche) → Photos et vidéos
(mosaïque réduite + visionneuse) → Contact → Footer (brun, logo complet
+ liens Instagram/Facebook/site principal).

## Galerie photos/vidéos — mise à jour avec la sélection de Noah

9 photos + 4 vidéos, toutes centrées sur les lieux (aucun plat), comme
demandé. 5 items visibles (façade, réception, salle, 1 vidéo, bar), le
reste (8) accessible via « Voir plus ». Fichiers sources dans
`Downloads/transfer-01a08a03/` sur le PC de Noah.

- [x] **Vidéos recompressées pour le web** (2026-09-14) : les 4 fichiers
      tournaient à ~11,5 Mbps (débit brut caméra iPhone), ce qui les
      rendait très longues à charger sur mobile. Reconverties en H.264
      + AAC, ~3 Mbps, `moov` au début du fichier (démarrage rapide). Le
      fichier `.MOV` (qui avait en plus son index `moov` à la fin —
      lecture impossible avant téléchargement quasi complet) a été
      converti en `.mp4`. Tailles : 19,6→5,5 Mo / 15,3→4,3 Mo /
      23,8→6,5 Mo / 8,9→1,5 Mo. Qualité, résolution (1080×1920) et
      durée inchangées.
- [ ] **Prix** / **nom de l'interlocuteur** : toujours pas affichés.
- [ ] **Référence de style** : toujours en attente d'un lien de site.
- [ ] **Nom de domaine GoDaddy** : migration depuis systeme.io en cours,
      toujours bloquée côté GoDaddy au 2026-09-14 — voir la conversation
      pour le détail des enregistrements DNS à garder/supprimer.

## Notes techniques (v8 — galerie)

- Fichiers vidéo dans `assets/video/` (`video-1.mp4` à `video-4.mp4`,
  recompressés pour le web, 1,5 à 6,5 Mo chacun). Posters générés
  automatiquement (`assets/img/video-*-poster.jpg`).
- Anciennes photos de plats et de terrasse/ambiance non retenues par
  Noah supprimées du repo (`terrasse.webp`, `salle-banquet.webp`,
  `ambiance.webp`, `plat-signature.jpg`, `specialite-portugaise.jpg`,
  `frites.webp`).
- Eyebrow de la section Photos changé en « photos et vidéos » (le titre
  H2 « L'établissement en images » reste inchangé).

## Déploiement

GitHub Pages : Settings → Pages → branche `main` / `/ (root)`.
`noindex` + `robots.txt` actifs → hors Google.
