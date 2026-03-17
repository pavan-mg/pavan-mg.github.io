'# Pavan M G Portfolio

Modern portfolio website for Pavan M G, based on original content.

## Features

- Responsive, mobile-first design
- Dark/light theme toggle persisted in `localStorage`
- Smooth scrolling with scrollspy active navigation
- Section reveal animations
- Hero / About / Experience / Projects / Education / Skills / Awards / Contact
- CV download and social links

## Local development

### Required tools

- Node.js (for `npx` and local server) or Python 3

### Run with BrowserSync (recommended)

```powershell
cd c:\Users\pavan\Documents\GitHub\pavan-mg.github.io
npx browser-sync start --server --files "**/*" --no-open
```

Open `http://localhost:3000` in your browser.

### Run with Python

```powershell
cd c:\Users\pavan\Documents\GitHub\pavan-mg.github.io
python -m http.server 8000
```

Open `http://localhost:8000`.

## Use

- Update `index.html` with your text and project details.
- Update `css/main.css` for custom branding and colors.
- Images in `assets/` can be replaced with your own.

## Build

This is a static site. No build step is required.

## Deploy

Use GitHub Pages:

1. Push code to `main` branch.
2. In repository settings, enable `gh-pages` from `main` branch.

## Files

- `index.html` - UI and page structure
- `css/main.css` - visual styles and responsive layout
- `js/loader.js` - page loader controls

## Notes

- `js/display_content.js` is legacy and no longer required.
- Keep the `assets` folder for the profile image and favicon.

---

Enjoy your refreshed portfolio!
'
