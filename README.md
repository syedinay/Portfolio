# Your Portfolio

A single-page, static portfolio site. No build step, no framework, no backend.

## Files

- `index.html` — page structure (you shouldn't need to touch this)
- `style.css` — visual design (dark/graphite theme, amber accent)
- `script.js` — renders your content into the page (you shouldn't need to touch this)
- `content.js` — **this is the only file you edit** to update your site
- `resume.pdf` — **add your own resume here**, named exactly `resume.pdf`, in this same folder

## Editing content

Open `content.js` in any text editor. Every visible piece of text on the
site — your name, tagline, skills, experience, projects, links — lives in
that one file as plain values. Change a value, save, refresh the page in
your browser. That's the whole workflow.

You can open `index.html` directly by double-clicking it (no local server
needed) to preview changes.

## Adding your resume

Export your resume as a PDF, name it `resume.pdf`, and drop it in this
folder next to `index.html`. The "Download resume" button in `content.js`
already points at `resume.pdf` — no other change needed. If you'd rather
link to a resume hosted elsewhere (e.g. Google Drive), just replace the
`resume` value in `content.js` with that URL.

## Deploying (free)

**Option A — GitHub Pages**
1. Create a new GitHub repo and push this folder to it.
2. In the repo settings, go to Pages → set source to the `main` branch, root folder.
3. Your site goes live at `https://yourusername.github.io/reponame`.
4. Every future `git push` after editing `content.js` updates the live site automatically.

Either way: edit `content.js` → commit → push → live in under a minute.
