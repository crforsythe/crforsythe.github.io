# Astro Migration Notes

## Local development
- `cd site`
- `npm install`
- `npm run dev`

## Build
- `cd site`
- `npm run build`
- Output is in `site/dist`

## Deploy (GitHub Pages)
- Push to `main` to trigger `.github/workflows/deploy.yml`.
- The workflow builds from `site` and deploys `site/dist` to Pages.

## Where to edit content
- Main page content and tab sections: `site/src/pages/index.astro`
- Header: `site/src/components/Header.astro`
- Footer: `site/src/components/Footer.astro`
- Design tokens and global styles: `site/src/styles/global.css`
- Tailwind theme tokens: `site/tailwind.config.mjs`

## Before/After verification notes
- Pages migrated: `/index.html` (single page with tabbed sections: About Me, CV/Resume, Research, GitHub).
- Content parity: all headings, paragraphs, list items, and link text preserved verbatim.
- Paths preserved: assets remain at `/images/*` and `/PDF/Resume/*` via `site/public`.
- Path differences: none. Old `/css/styles.css` and `/js/main.js` are copied into `site/public` to avoid breaking existing URLs, but the Astro build uses new styling.
