# Portfolio — Ahmed Maher Algaoni

Personal portfolio website. Single page, static site (no build tools).

- Live site: https://1jjl7.github.io
- Repo: https://github.com/1jjl7/1jjl7.github.io (public, deployed by GitHub Pages from `main`)
- Owner's GitHub: `1jjl7`

## Tech
- Plain HTML, CSS, JavaScript — no frameworks, no npm packages
- `index.html` = structure/content, `style.css` = styling, `script.js` = interactivity

## Conventions
- Site content is in English
- Dark, tech-style theme; colors defined as CSS variables in `:root`
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`)
- Mobile-first, responsive layout (Flexbox / Grid)
- Keep code simple and commented where it helps a beginner understand

## Files
- `favicon.svg` — tab icon (cyan `</>` on the dark background colour)
- `og-image.png` — 1200x630 share preview image used by the Open Graph tags

## Accessibility conventions
- Respect `prefers-reduced-motion` (block at the end of `style.css`)
- Touch targets at least 44x44px (e.g. `.menu-toggle`)
- Icons are inline SVG with the `.icon` class, never emoji; mark decorative ones `aria-hidden="true"`
- Keep the global `:focus-visible` ring and the "Skip to content" link (`.skip-link` -> `#main`)
- The graduation-cap icon shape comes from Lucide (ISC licence), keep the credit comment

## Share preview
- Open Graph / Twitter tags live in `<head>`; the URLs are hard-coded to https://1jjl7.github.io
- Re-take `og-image.png` whenever the hero section changes:
  `msedge.exe --headless --hide-scrollbars --window-size=1200,630 --virtual-time-budget=8000 --screenshot=og-image.png http://localhost:5500/`
- Link previews only work after pushing; platforms cache them

## Run locally
Serve the folder with Python, then open http://localhost:5500:

```bash
python -m http.server 5500
```

## Workflow (follow for every change)
1. Edit the files
2. Show the result on localhost (check desktop and mobile) and wait for Ahmed's approval
3. Only after approval: `git add`, `git commit` (clear imperative message), `git push`
4. GitHub Pages redeploys automatically within about a minute

Never push before Ahmed has seen and approved the change.

## Content rules
- Only list a skill on the site after Ahmed confirms it
- No public email on the site for now; contact is via LinkedIn and GitHub
- Do not feature his old basic HTML repos (`html_Resume`, `html-portfolio`)
- Use the passport spelling "Algaoni" everywhere (his LinkedIn URL still says `aljawni`)
