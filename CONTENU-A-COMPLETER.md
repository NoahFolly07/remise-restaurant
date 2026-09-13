# À compléter / à décider

Page en 4 blocs : Hero → L'établissement (fiche) → Photos (mosaïque
réduite + visionneuse) → Contact → Footer. Palette brun `#1e1410` /
crème `#f5f0eb` / crème foncé `#ede5d8` (photos) / or `#a7825f`.
Cormorant Garamond pour les titres, Allura pour les eyebrows de section,
Inter pour le texte courant, Josefin Sans pour les petits labels.

## Ouvert

- [ ] **Logo** : le fichier que Noah a mis sur GitHub (`barrage-auberge-logo.png`)
      est identique au pixel près à `assets/logo/logo.png` déjà utilisé
      — confirmé par comparaison MD5. Rien à faire tant qu'un fichier
      réellement différent n'arrive pas.
- [ ] **Vidéos** : toujours en attente pour la visionneuse photos.
- [ ] **Référence de style** : toujours en attente d'un lien de site.
- [ ] **Prix** / **nom de l'interlocuteur** : toujours pas affichés.

## Notes techniques (v6)

- **Hero** : "remise de" en Allura script, titre et boutons agrandis.
- **Établissement** : ligne "Autoroute" renommée "Emplacement" ; la ligne
  "Chiffre d'affaires" précise "(communiqué en privé)" ; note en italique
  sous l'encadré : "Toute demande d'information plus précise se fera en
  privé, sur simple contact."
- **Séparation Établissement / Photos** : la section Photos a maintenant
  un fond crème légèrement plus foncé (`--cream-2`) + une bordure
  supérieure fine, pour qu'on voie clairement la rupture entre les deux
  sections.
- **Contact** : eyebrow "Contact" repassé en Allura script ; titre et
  numéro de téléphone repassés en Cormorant Garamond (comme le reste des
  titres du site) au lieu d'Inter.
- **Footer** : fond crème (au lieu de brun) pour matcher l'établissement ;
  logo recoloré en or (`logo-icon-marron.png`, recadré depuis
  `logo-marron.png`) ; ajout de deux icônes rondes Instagram / Facebook
  qui ouvrent les pages officielles dans un nouvel onglet.
- **Visionneuse photos** : bug corrigé — la flèche gauche (précédent)
  était cachée derrière l'image et non cliquable (ordre DOM + absence de
  z-index) ; ajout de `z-index` sur les boutons.
- Bouton "Voir plus" agrandi (même composant `.cta` que les autres
  boutons, dont la taille globale a été augmentée).

## Déploiement

GitHub Pages : Settings → Pages → branche `main` / `/ (root)`.
`noindex` + `robots.txt` actifs → hors Google.
