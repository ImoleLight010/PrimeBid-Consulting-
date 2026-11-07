# PrimeBid Consulting Website

A static, no-build website for PrimeBid Consulting. Pure HTML, CSS and a tiny bit of JS — host it free on Netlify straight from GitHub.

## Pages
- `index.html` – home (hero, services, banner, process, sectors)
- `about.html`, `services.html`, `portfolio.html`, `contact.html`
- `thanks.html` – shown after the contact form is sent
- `404.html` – not-found page
- `assets/` – logo, favicon and banner images

## 1. Personalise it
Search and replace across all `.html` files:
- `your@email.com`, `+00 000 000 0000`, `Your City, Country` → your real details
- `about.html`: replace the two italic paragraphs with your background and approach
- `portfolio.html`: replace the sample case studies and add real testimonials (with permission only)
- `og:image` in each page: replace `https://YOUR-SITE.netlify.app` with your real site address once you have it (this controls the preview image when the link is shared on WhatsApp, LinkedIn, etc.)
- Colours live at the top of `style.css` (`--gold`, `--black`)

## 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial PrimeBid Consulting site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## 3. Deploy on Netlify
1. Netlify → **Add new site → Import an existing project → GitHub**
2. Pick the repo. Build command: *leave empty*. Publish directory: `.`
3. Deploy. Every push to `main` redeploys automatically.

## 4. Contact form
The form uses **Netlify Forms** (no backend needed). After the first deploy:
Netlify → your site → **Forms** → enable email notifications for new enquiries.

## 5. Custom domain (optional)
Netlify → **Domain management** → add your domain and follow the DNS steps.
