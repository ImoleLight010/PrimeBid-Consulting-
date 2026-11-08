# PrimeBid Consulting Website

A static, no-build website for PrimeBid Consulting. Pure HTML, CSS and a tiny bit of JS — host it free on Netlify straight from GitHub.

## Pages
- `index.html` – home (hero, services, banner, process, sectors)
- `about.html`, `services.html`, `portfolio.html`, `contact.html`
- `thanks.html` – shown after the contact form is sent
- `404.html` – not-found page
- `logo.png`, `logo-small.png`, `favicon.png`, `banner.jpg` – your images (keep them in the same folder as the HTML files)

## 1. Personalise it
Search and replace across all `.html` files:
- Contact details are already set (email, phone/WhatsApp, Abuja). Edit them in the footer of each page and in `contact.html`
- `about.html`: replace the two italic paragraphs with your background and approach
- `portfolio.html`: replace the sample case studies; paste real testimonials using the template in the file (with permission only). Feedback submitted through the on-page form appears under Forms in Netlify
- `og:image` in each page: replace `https://YOUR-SITE.netlify.app` with your real site address once you have it (this controls the preview image when the link is shared on WhatsApp, LinkedIn, etc.)
- Colours live at the top of `style.css` (`--gold`, `--black`)

## 2. Push to GitHub
Upload **every file** in the folder (HTML, CSS, JS and the images). If images don't show on the live site, a file was missed.
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
