# Data Science Portfolio

A responsive personal portfolio site built with React, Vite, and Tailwind CSS, deployed to
GitHub Pages via GitHub Actions.

Everything in this repo is currently **placeholder content** (bio, projects, resume). Replace it
with your own before sharing the site. See [Content checklist](#content-checklist) below.

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com) (class-based dark mode)
- [React Router](https://reactrouter.com) (`HashRouter`, so it works on GitHub Pages without server rewrite rules)
- Static site, no backend, no database

## Local development

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev       # starts a local dev server, usually at http://localhost:5173
npm run build     # builds the production site into dist/
npm run preview   # serves the production build locally, to sanity-check before deploying
```

## Project structure

```
public/
  resume/                    → resume PDF, downloadable
  projects/<project-slug>/   → per-project images, code files, appendix PDFs
  images/                    → other static images (e.g. headshot)
src/
  data/
    site.js                  → your name, tagline, bio blurb, social links, contact settings
    skills.js                → skills grid content (grouped by category)
    projects.js               → auto-loads every file in data/projects/ (don't edit directly)
    projects/<slug>.json      → one file per project (see below)
  pages/                     → one file per route (Home, About, Skills, Resume, Projects, ProjectDetail, Contact)
  components/                → shared UI (Navbar, Footer, ProjectCard, ThemeToggle, Container)
  context/ThemeContext.jsx   → light/dark mode state, persisted to localStorage
```

## Content checklist

Before this is "yours," replace:

- [ ] `src/data/site.js`: name, role, tagline, bio, email, social links
- [ ] `src/data/skills.js`: your actual skills, grouped however you like
- [ ] `public/resume/resume-placeholder.pdf`: your real resume (keep the same filename, or update
      `resumeFile` in `site.js`)
- [ ] `public/images/headshot-placeholder.svg`: a real photo (any image format works; update the
      `<img src>` in `src/pages/About.jsx`)
- [ ] `src/pages/About.jsx`: the `timeline` array (your real experience/education)
- [ ] Each project in `src/data/projects/*.json` and its files in `public/projects/<slug>/`

### Adding a new project

No component code needs to change. For a project with slug `my-new-project`:

1. Create a folder `public/projects/my-new-project/` and drop in:
   - `cover.svg` (or `.png`/`.jpg`): the card/header image
   - one or more screenshots
   - your code file (e.g. `notebook.ipynb` or `script.py`): this becomes a "Download code" link
   - `appendix.pdf`: supporting document (methodology, extra charts, data dictionary, etc.)
2. Create `src/data/projects/my-new-project.json`:

   ```json
   {
     "slug": "my-new-project",
     "title": "My New Project",
     "summary": "One or two sentences for the project card.",
     "date": "2026-06-01",
     "featured": true,
     "tags": ["Python", "scikit-learn"],
     "coverImage": "projects/my-new-project/cover.svg",
     "screenshots": ["projects/my-new-project/screenshot-1.svg"],
     "explanation": ["Paragraph one.", "Paragraph two."],
     "highlights": ["Bullet point one", "Bullet point two"],
     "githubUrl": "https://github.com/your-username/my-new-project",
     "codeFile": "projects/my-new-project/notebook.ipynb",
     "codeFileLabel": "notebook.ipynb",
     "appendixFile": "projects/my-new-project/appendix.pdf",
     "appendixLabel": "Technical appendix (PDF)"
   }
   ```

3. Commit and push. It appears on the site automatically (sorted by `date`, newest first).
   `featured: true` shows it on the homepage (first 3 featured projects are shown there).

All fields except `githubUrl`/`codeFile`/`appendixFile`/`highlights` are optional; omit any of
those four and that section/link simply won't render.

### Contact form

The contact form posts to [Formspree](https://formspree.io) (free tier available) if configured,
and otherwise falls back to opening the visitor's email client with a pre-filled message. To
enable Formspree: create a form at formspree.io, then set `formspreeEndpoint` in
`src/data/site.js` to your form's endpoint URL.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. `.github/workflows/deploy.yml` builds and deploys automatically. Check the
   **Actions** tab for progress; the deployed URL appears there and under **Settings → Pages**
   once done.

No repo-name-specific configuration is needed. `vite.config.js` uses a relative `base: './'` and
routing uses `HashRouter`, so the build works regardless of what your GitHub Pages URL/subpath is.

## Design

Palette: indigo (`primary`) + cyan/teal (`accent`), defined in `src/index.css` under `@theme`.
Fonts: Inter (body/headings) and JetBrains Mono (code), loaded from Google Fonts in `index.html`.
Dark mode toggles a `dark` class on `<html>`, persisted to `localStorage`; there's an inline
script in `index.html` that applies it before first paint to avoid a light/dark flash.
