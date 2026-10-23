# A Surprise Dinner Date for Clariza ❤️

A responsive, romantic React + Vite invitation site. It is frontend-only: no backend, database, login, or tracking. Personalize the visible messages with Vite environment variables.

## Project structure

```text
surprise-dinner-date/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── Celebration.jsx
    │   ├── DinnerDetails.jsx
    │   ├── FloatingHearts.jsx
    │   └── Invitation.jsx
    ├── config/
    │   └── loveConfig.js
    ├── hooks/
    │   └── useNoButtonMovement.js
    └── styles/
        ├── celebration.css
        ├── global.css
        └── invitation.css
```

## 1. Create and run locally

Install Node.js 18+ (Node.js 20 LTS is recommended), then in this folder run:

```bash
npm install
cp .env.example .env
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

On Windows PowerShell, copy the environment template with:

```powershell
Copy-Item .env.example .env
```

## 2. Personalize the invitation

Edit `.env`. Example:

```dotenv
VITE_WIFE_NAME=Clariza
VITE_HUSBAND_NAME=Johnzel
VITE_INVITATION_QUESTION=Will you go on a surprise dinner date with me?
VITE_INVITATION_SUBTITLE=I have a little surprise planned just for us.
VITE_DATE_VALUE=October 23, 2026
VITE_TIME_VALUE=7:00 PM
VITE_LOCATION_VALUE=Your favorite restaurant
VITE_EXTRA_NOTE=Wear whatever makes you feel beautiful. I’ll take care of the rest.
VITE_ENABLE_DATE_DETAILS=true
```

All settings are defined in `.env.example`. Empty or missing settings use the fallback values in `src/config/loveConfig.js`. `VITE_ENABLE_DATE_DETAILS` accepts `true` or `false` (case-insensitive); only `true` enables the details section.

### Multiline love message

Use literal `\n` sequences to create line breaks inside `VITE_LOVE_MESSAGE`, for example:

```dotenv
VITE_LOVE_MESSAGE=My Love, Clariza ❤️\n\nThank you for making ordinary days feel special.\n\nI love you always.
```

The config module converts each `\n` sequence into a real line break, and the celebration page preserves the paragraphs. If your message contains lots of punctuation, you can also use a quoted dotenv value if supported by your local dotenv parser; keep the `\n` sequences for line breaks.

**Important:** Vite reads `VITE_*` values into client-side code. They are public to anyone who can inspect the built website, so use these variables for romantic copy only—never passwords, API keys, or secrets. `.env` is excluded by `.gitignore`.

After changing `.env`, restart the Vite development server for the changes to take effect. For production, rebuild and redeploy after updating environment variables.

## 3. Interaction details

- Each No click increments React state and increases the Yes button font size by exactly 1 CSS pixel, from 18px up to a practical 30px cap so the button remains usable on small screens. The counter continues to increment after the visual cap.
- The No button moves to a random viewport position after each click. Its measured dimensions are used to keep it inside the viewport, and its position is clamped after resizing or orientation changes.
- The No button remains a semantic, keyboard-focusable button; it is playful but not disabled for keyboard or assistive technology users.
- Clicking Yes opens the celebration screen. The “I can’t wait!” button plays a small heart/confetti animation, and “Read my message again” scrolls to the message.
- `prefers-reduced-motion` is respected for the major decorative animations.

## 4. Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`. Check the preview URL before deploying.

## 5. Deploy to Vercel

1. Push this project to a private GitHub repository (or import the folder into Vercel).
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Add the required `VITE_*` values under **Settings → Environment Variables**. Do not paste secrets; these are client-visible.
5. Deploy. If you change an environment variable later, trigger a new deployment.

## 6. Deploy to Netlify

1. Import the repository in Netlify.
2. Build command: `npm run build`; publish directory: `dist`.
3. Add your `VITE_*` values in **Site configuration → Environment variables**.
4. Deploy the site. Redeploy after environment-variable changes.

This is a static single-page site, so no server-side runtime or database is required.

## 7. Test on your phone before sharing

1. Deploy a preview URL, or run Vite on your computer with `npm run dev -- --host 0.0.0.0` while your phone and computer share the same Wi-Fi.
2. Open the URL on iPhone Safari and Android Chrome if available.
3. Test both portrait and landscape; click No several times and confirm it remains visible, then click Yes.
4. Test with the phone’s text size/accessibility settings and, if possible, enable reduced motion.
5. Verify the date, time, location, message, name, and signature before sending the link.

## 8. Share privately

Send the deployed URL directly to Clariza by text or chat. The site itself does not require login, so anyone with the link can open it; use a hard-to-guess deployment URL or hosting access controls if you need stronger privacy. Avoid posting the URL publicly if the message is personal.
