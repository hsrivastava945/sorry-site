# Sorry, Ananya 🤍

A little apology website. Plain HTML/CSS/JS — no build step, no installs needed.

## Where to put the song (exact steps)

1. Pick the song you want to use, save it as an **MP3** file.
2. Rename that file to exactly: `song.mp3`
3. Put it in this same top-level folder — right next to `index.html`, at the same level as the `photos` folder. Like this:

```
sorry-site/
├── index.html
├── style.css
├── script.js
├── song.mp3        ← put it exactly here
├── README.md
└── photos/
    ├── photo1.jpg
    ├── photo2.jpg
    ├── photo3.jpg
    ├── photo4.jpg
    ├── gif1.webp
    └── gif2.webp
```

That's it — the code already points to `song.mp3` in that exact spot. It will start playing the moment she taps/clicks anywhere on the page (phones and browsers block sound from autoplaying before any tap — that's a browser rule, not something we can bypass).

## Files in this project

- **index.html** — the page structure/content
- **style.css** — all the styling (colors, layout, animations)
- **script.js** — the interactive logic (slides, the dodging "No" button, confetti, music)
- **photos/** — your photos and gifs
- **song.mp3** — you add this (see above)

## Deploy on GitHub + Render (free)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "apology site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
(Create the empty repo on github.com first, then copy its URL into the command above.)

### 2. Deploy on Render
1. Go to https://render.com and sign in (you can sign in with GitHub).
2. Click **New +** → **Static Site**.
3. Connect the GitHub repo you just pushed.
4. Settings:
   - **Build Command:** leave blank
   - **Publish Directory:** `.` (a single dot — the root of the repo)
5. Click **Create Static Site**. Render gives you a live `.onrender.com` link in about a minute.
