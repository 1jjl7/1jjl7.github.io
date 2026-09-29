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
- Only list a skill on the site after Ahmed says he has learned it (he is currently learning Power BI, Excel, Tableau)
- No public email on the site for now; contact is via LinkedIn and GitHub
- Do not feature his old basic HTML repos (`html_Resume`, `html-portfolio`)
- Use the passport spelling "Algaoni" everywhere (his LinkedIn URL still says `aljawni`)

## Environment notes
- On his machine `gh` is not on PATH in the terminal; use `& "C:\Program Files\GitHub CLI\gh.exe"`
- Claude Code cannot create public repos in auto mode; Ahmed runs those commands himself

## Working with Ahmed
- He is a beginner learning to build with Claude: chat in Arabic, code and comments in English
- Explain each step in Arabic: what we did, why, and how it works
- Build in small steps; end explanations with a possible interview question when relevant
