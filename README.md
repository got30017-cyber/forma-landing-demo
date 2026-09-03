# FORMA

Static demonstration landing page for a fictional studio of custom kitchens and
built-in furniture. It is a portfolio project for a web-development service,
not a live furniture business.

## Live demo

https://got30017-cyber.github.io/forma-landing-demo/

## Stack

- Semantic HTML
- Modern CSS
- Vanilla JavaScript
- Local WebP images and local font files

## Status

Complete and deployed. The repository is frozen for code changes before
portfolio screenshot production.

## Run locally

Serve the repository root over HTTP; do not use `file://` for QA.

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

## Structure

```text
index.html              Page markup and metadata
styles.css              Responsive visual system
script.js               Menu, form validation, subtle reveal behavior
assets/images/          Responsive WebP image assets
assets/fonts/           Local Cormorant Garamond and Manrope files
robots.txt              Baseline crawler directive
sitemap.xml             Search-engine sitemap
site.webmanifest        Browser/app metadata
```

## Quality highlights

- Semantic landmarks, logical heading structure, visible keyboard focus, a
  keyboard-accessible mobile menu, native FAQ controls, and labelled form
  errors.
- Responsive WebP images with `srcset`, lazy loading below the fold, and local
  font files.
- Canonical, Open Graph and Twitter metadata, plus `robots.txt` and a sitemap
  for the live URL.

## Images and fonts

The interior images were generated specifically for this demonstration project
and are stored locally as WebP. Cormorant Garamond and Manrope are locally
hosted under the SIL Open Font License 1.1; see
[`assets/fonts/LICENSES.md`](assets/fonts/LICENSES.md) and
[`assets/fonts/OFL-1.1.txt`](assets/fonts/OFL-1.1.txt).

## Demo form

The contact form validates in the browser and simulates a successful
submission. It does not transmit or store user data.

## Deployment

FORMA is deployed on GitHub Pages at the live-demo URL above. The repository
has no build step. For another static host, upload the repository contents to
the document root while preserving `assets/`, `robots.txt`, `sitemap.xml`, and
`site.webmanifest`.

The canonical URL, Open Graph/Twitter image metadata, sitemap, and `robots.txt`
are configured for the GitHub Pages URL.
