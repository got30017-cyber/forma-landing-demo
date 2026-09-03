# FORMA

Static demonstration landing page for a fictional studio of custom kitchens and
built-in furniture. The repository is a portfolio project for a web-development
service; it is not a live furniture business.

## Stack

- Semantic HTML
- Modern CSS
- Vanilla JavaScript
- Local WebP images and local font files

## Status

Task 03: static-deployment preparation complete. The site is ready to publish
on a standard static host once a production URL is chosen.

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
site.webmanifest        Browser/app metadata
```

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

This repository has no build step. Upload the repository contents to the
document root of any static host, preserving the `assets/` directory and the
root-level `robots.txt` and `site.webmanifest` files.

The production URL is `https://got30017-cyber.github.io/forma-landing-demo/`.
The canonical URL, Open Graph/Twitter image metadata, sitemap, and `robots.txt`
are already configured for that URL.

## Deferred items

- Social-card validation against the deployed URL
- Real form delivery integration
- CMS, backend, analytics, and final portfolio screenshots
