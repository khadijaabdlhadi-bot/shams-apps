# shams-apps: rules for every session

This repo is the public GitHub Pages site for Shams Al-Watan School apps
(https://khadijaabdlhadi-bot.github.io/shams-apps/). Owner: Khadija Abdlhadi.

When you add or change an app:

1. Put each app in its own folder (`<app-name>/index.html`), so its link is
   `https://khadijaabdlhadi-bot.github.io/shams-apps/<app-name>/`.
2. **Always add the new app to `links/index.html`** (the `APPS` array in its
   script, newest first, with `id`, `name`, `tag`, `desc`, `url`; optional
   thumbnail data URI in `THUMBS`) and to `README.md`. The owner shares
   `links/` as the single page that lists every app.
3. Include the signature before `</body>`:
   `<script src="../sign.js" data-pos="left" defer></script>`
   (use `sign.js` for files at the repo root; `data-bottom="70"` lifts it
   above a bottom toolbar).
4. Add the copyright meta after `<meta charset>`:
   `<meta name="copyright" content="© مدرسة شمس الوطن. جميع الحقوق محفوظة.">`
5. Obfuscate the app's own JavaScript before publishing (javascript-obfuscator,
   no control-flow flattening so games stay fast). Leave public libraries such as
   Three.js as they are. Never commit a readable version here, not even in an
   intermediate commit: readable sources belong in the private
   `shams-apps-source` repo.
6. Smoke-test every touched page in a browser (no page errors) before pushing,
   then check the "pages build and deployment" run succeeded.

## Signature on every design (owner's standing request)

Every design made for the owner carries the Khadija Abdlhadi signature, not
only web apps: PDFs, worksheets, posters, certificates, images, slides and
videos. Ready assets with transparent backgrounds are in `brand/`:
`signature-badge.png` (pill with KA monogram, for corners),
`signature-gold.png` (for dark backgrounds), `signature-navy.png` (for light
backgrounds), `signature-card.png` (end card with Arabic name and copyright),
`monogram-KA.png`. Web pages use `sign.js`. Arabic name: خديجة عبد الهادي.
