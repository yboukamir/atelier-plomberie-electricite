# Atelier Plomberie-Électricité — concept de site vitrine

> **Projet de démonstration.** Concept de style pour un artisan plombier-électricien.
> Aucune entreprise réelle, aucun coordonnée valide, aucun formulaire connecté.

Vite + React + TypeScript + Tailwind CSS v4 + shadcn/ui.

## Lancer

```bash
npm install
npm run dev
```

## Palette

Volontairement à l'écart du bleu SaaS : univers technique/artisanal.

| Rôle | Couleur | Usage |
| --- | --- | --- |
| `primary` | cuivre `#a44a1e` | actions, icônes de prestation |
| `secondary` | pétrole `#0f2b33` | bandeau démo, footer, fond sombre |
| `accent` | ambre électrique `#d98b06` | urgence, badges, rayures d'atelier |
| `background` | crème béton `#f7f3ec` | fond clair |

Les tokens sont définis dans [`src/index.css`](src/index.css) (`:root` + `.dark`,
exposés à Tailwind via `@theme inline`).

### Thème clair / sombre

Bouton soleil/lune dans le header (visible aussi en mobile, à côté du burger).

- Au premier chargement, le site suit la préférence système (`prefers-color-scheme`).
- Le choix explicite est mémorisé dans `localStorage` sous la clé `atelier-theme`.
- Tant que le thème est sur `system`, un changement côté OS est répercuté à chaud.
- Un script inline dans [`index.html`](index.html) applique la classe `dark` avant
  le premier rendu : pas de flash blanc au chargement. Il partage la clé de
  stockage avec [`src/lib/theme-context.ts`](src/lib/theme-context.ts) — si vous
  changez l'une, changez l'autre.

État réparti entre [`theme-context.ts`](src/lib/theme-context.ts) (contexte + hook),
[`theme-provider.tsx`](src/components/theme-provider.tsx) (logique) et
[`theme-toggle.tsx`](src/components/ui/theme-toggle.tsx) (bouton).

Typographie : Barlow Condensed (titres, capitales) + Inter (texte).

## Sections

| Section | Fichier | Composant 21st.dev |
| --- | --- | --- |
| Header + bandeau démo | [`sections/site-header.tsx`](src/components/sections/site-header.tsx) | — (sur mesure) |
| Hero | [`sections/hero.tsx`](src/components/sections/hero.tsx) | `ravikatiyar162/hero-section-9` |
| Prestations | [`sections/prestations.tsx`](src/components/sections/prestations.tsx) | `efferd/grid-feature-cards` |
| Zone d'intervention | [`sections/zone-intervention.tsx`](src/components/sections/zone-intervention.tsx) | `Mazyar kawa/location-map` |
| Devis | [`sections/devis.tsx`](src/components/sections/devis.tsx) | `meschacirung/contact-form` |
| Footer | [`ui/footer-04.tsx`](src/components/ui/footer-04.tsx) | `shadcnui-blocks/footer-04` |

Les composants récupérés via le MCP 21st ont été adaptés : traduction, palette
du projet, `framer-motion` → `motion/react`, `next/link` → `<a>`, et pour le
hero les trois images distantes sont remplacées par des tuiles React (le projet
ne dépend d'aucun asset externe).

## Limites assumées

- Le formulaire de devis n'envoie rien : il affiche un message de démonstration.
- Le champ « se faire rappeler » du footer est inerte lui aussi.
- Numéro, e-mail et coordonnées sont des valeurs de remplissage.
- `<meta name="robots" content="noindex">` est posé pour éviter tout référencement.
