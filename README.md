# TELEDYNE Frontend (React + Vite)

This repository contains the TELEDYNE marketing frontend rebuilt as a React single-page application using Vite and React Router. It includes all sitemap pages (produits, solutions, services, à-propos, contact, recherche) with a shared design system.

## Prerequisites
- Node.js 18+ (recommended) and npm
- Git (for clone) or download the repository ZIP from your source control provider

## How to download
- **Clone**: `git clone <repository-url> && cd api-face-recognation`
- **ZIP**: Download the repository archive, extract it, then open the extracted folder in your editor/terminal.

## Install dependencies
```bash
npm install
```
> If your network blocks the npm registry, configure your proxy or use an internal registry mirror.

## Run the app locally (dev server)
```bash
npm run dev -- --host
```
- Open the printed URL (default `http://localhost:5173`) in your browser.
- React Router covers all routes; navigating menus will not require a backend.

## Production build
```bash
npm run build
```
- Outputs static assets to `dist/`.

### Preview a production build locally
```bash
npm run preview -- --host
```
- Serves the contents of `dist/` to emulate a deployment build.

## Project layout
- `src/` – React pages, layout, components, and design-system styles.
- `public/` – Static assets (logo, favicons).
- `docs/` – Sitemap and design-system reference.
- `vite.config.js` – Vite configuration for React and path resolution.

## Testing notes
No automated tests are currently defined. Use the dev server for manual verification across pages and responsive breakpoints.
