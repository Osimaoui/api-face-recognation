# Design system — TELEDYNE

## Couleurs
- Bleu principal : `#123465`
- Orange / jaune accent : `#f9a836`
- Gris très clair de fond : `#f5f7fb`
- Gris texte : `#4a4a4a`
- Blanc : `#ffffff`

## Typographie
- Police principale : "Inter", fallback Roboto, "Segoe UI", sans-serif
- Échelles :
  - Titres H1 42px / bold
  - H2 32px / semi-bold
  - H3 24px / semi-bold
  - Corps de texte 16–18px / regular
  - Boutons 16px / medium

## Grille et espacements
- Largeur maximale du contenu : 1200px avec marges latérales de 24px.
- Padding de section : 64px sur desktop, 48px sur tablette, 32px sur mobile.
- Rayons des cartes : 14px, ombre douce `0 10px 30px rgba(18,52,101,0.08)`.

## Boutons
- Primaire (plein) : fond bleu `#123465`, texte blanc, hover foncé `#0f2e59`.
- Secondaire (outline) : contour orange `#f9a836`, texte orange, hover fond `rgba(249,168,54,0.12)`.
- Icônes autorisées à gauche du libellé.

## Liens et navigation
- Barre supérieure collante, fond blanc, ombre subtile.
- Menus déroulants sur fond blanc avec bordure légère `rgba(18,52,101,0.12)`.
- État actif/hover : texte bleu principal, soulignement ou trait orange.

## Cartes produits / solutions
- Image ou icône 64px, titre, tags (puces bleu pâle), description courte et puce "Cas d’usage".
- CTA "Découvrir" (secondaire) ou "Demander une démo" (primaire) selon contexte.

## Formulaire
- Champs avec bord arrondi 10px, bordure `#d9deeb`, focus `#123465`.
- Messages d’aide en gris texte.
- Bouton primaire aligné à droite.

## Illustrations et icônes
- Privilégier pictogrammes linéaires bleus / orange.
- Utiliser des photos industrielles pour les sections Références / Partenaires.

## Animations
- Apparition progressive (fade + léger slide) sur les sections via classes `.reveal` (déclenchées par IntersectionObserver dans `main.js`).
- Hover doux sur cartes : translation `-4px` et ombre renforcée.
