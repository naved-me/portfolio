# Portfolio

A single-page portfolio built with React, Vite, and Tailwind CSS v4.

## 1. Edit your content

Everything text-based lives in one place: **`src/data.js`**. Fill in your real
email, GitHub, LinkedIn, and drop a `resume.pdf` into the `public/` folder.
Add/edit projects, publications, skills, and certifications there — the page
re-renders automatically, no need to touch the components.

## 2. Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edits hot-reload.

## 3. Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `portfolio`) and push this project to it.
2. In `package.json`, set `"homepage"` to `https://<your-username>.github.io/<repo-name>`.
3. In `vite.config.js`, set `base: '/<repo-name>/'` (must match your repo name,
   including the leading and trailing slashes).
4. Run:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes it to a `gh-pages` branch.
5. On GitHub: Settings → Pages → set source to the `gh-pages` branch, `/ (root)` folder.
6. Your site is live at the `homepage` URL within a minute or two.

Every time you want to update the live site after editing content, just run
`npm run deploy` again.

### Custom domain (optional)
Buy a domain, add a `CNAME` file in `public/` containing just the domain
(e.g. `paradox.dev`), then point your domain's DNS at GitHub Pages
(A records to GitHub's IPs, or a CNAME record to `<username>.github.io`).
GitHub's docs: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

## Structure

```
src/
  data.js          ← all your content — edit this
  components/       ← page sections (Hero, About, Research, Projects, Skills, Contact)
  index.css         ← design tokens (colors, fonts) + Tailwind import
```
