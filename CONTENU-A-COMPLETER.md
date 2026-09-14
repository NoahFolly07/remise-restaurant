# À compléter / à décider

Page en 4 blocs : Hero → L'établissement (fiche) → Photos (mosaïque
réduite + visionneuse photo/vidéo) → Contact → Footer (brun, logo complet
+ liens Instagram/Facebook/site principal).

## Ouvert — sélection photos/vidéos en cours

Noah va envoyer une sélection : surtout des photos de **l'enceinte du
bâtiment** (extérieur, salle, chambres, terrasse...), peu ou pas de
photos de plats (un seul plat max). Rien à faire tant que la sélection
n'est pas arrivée — inventaire actuel dans `assets/img/` :

- Bâtiment/lieux : `exterieur.jpg`, `bar.webp`, `salle-banquet.webp`,
  `chambre-1.webp`, `chambre-2.webp`
- Ambiance table/plat (à trier) : `salle.webp`, `terrasse.webp`,
  `evenements.webp`, `ambiance.webp`
- Plats (probablement à réduire à 0-1) : `plat-signature.jpg`,
  `specialite-portugaise.jpg`, `frites.webp`

**Vidéos : c'est prêt côté technique.** La visionneuse (`#lightbox`)
sait déjà afficher une vidéo à la place d'une photo. Pour ajouter une
vidéo : mettre le fichier dans `assets/img/`, ajouter un
`<button class="mosaic__item" data-video="assets/img/xxx.mp4">` avec une
image de couverture (`<img>`) à l'intérieur — un badge ▶ apparaît
automatiquement sur la vignette. Pas encore testé avec un vrai fichier
vidéo (aucun reçu à ce stade).

## Autres points ouverts

- **Prix** / **nom de l'interlocuteur** : toujours pas affichés.
- **Référence de style** : toujours en attente d'un lien de site.

## Notes techniques (v7)

- Logo : header réglé à une taille équilibrée (58–78px) après plusieurs
  itérations ; footer repassé en fond brun avec le même logo complet
  (icône + texte baké dans `logo-header.png`), en grand, sans plaque.
- Slogan retiré du footer ; lien ajouté vers le site principal
  (`https://auberge-du-barrage.ch/`, à vérifier — le domaine
  `aubergedubarrage.ch` sans tiret est un domaine parqué/à vendre, pas le
  vrai site).

## Déploiement

GitHub Pages : Settings → Pages → branche `main` / `/ (root)`.
`noindex` + `robots.txt` actifs → hors Google.
