# Joe Willy's Seafood House — Client Handoff

**Prepared by:** Pixel Perfect Designs
**Project:** joewillysseafoodhouse.com
**Repository:** https://github.com/PixelPerfectDesigns/joe-willys-website

---

## Table of Contents

1. [Deploying to Netlify](#1-deploying-to-netlify)
2. [Connecting a Custom Domain](#2-connecting-a-custom-domain)
3. [Making Content Updates](#3-making-content-updates)
4. [Swapping Images](#4-swapping-images)
5. [Updating the Social Preview Image](#5-updating-the-social-preview-image)
6. [File Reference](#6-file-reference)

---

## 1. Deploying to Netlify

Netlify will host your site for free and automatically redeploy every time you push a change to GitHub.

**Step 1 — Create a Netlify account**
- Go to [netlify.com](https://netlify.com) and sign up using your GitHub account

**Step 2 — Import the project**
- From your Netlify dashboard click **"Add new site" → "Import an existing project"**
- Choose **GitHub** and authorize Netlify to access your repositories
- Select **PixelPerfectDesigns / joe-willys-website**

**Step 3 — Configure build settings**
- **Branch to deploy:** `main`
- **Build command:** *(leave blank)*
- **Publish directory:** `.` *(a single dot — the root of the repo)*
- Click **"Deploy site"**

**Step 4 — Wait for deployment**
- Netlify will assign a temporary URL like `random-name-123.netlify.app`
- Your site is live at that URL within 1–2 minutes

> **After deploying:** Open `index.html` and find the two `og:image` meta tags near the top. Update the relative path `brand_assets/social_preview.jpg` to your full domain URL, e.g. `https://joewillysseafoodhouse.com/brand_assets/social_preview.jpg`. Commit and push the change.

---

## 2. Connecting a Custom Domain

**Step 1 — Add your domain in Netlify**
- In your site dashboard go to **Domain management → Add a domain**
- Enter your domain (e.g. `joewillysseafoodhouse.com`) and click **Verify**

**Step 2 — Update your DNS**
- Log into your domain registrar (GoDaddy, Namecheap, etc.)
- Add or update the following DNS records:

| Type | Name | Value |
|------|------|-------|
| `A` | `@` | `75.2.60.5` |
| `CNAME` | `www` | `your-site-name.netlify.app` |

- DNS changes can take up to 24 hours to propagate

**Step 3 — Enable HTTPS**
- Once the domain is connected, go to **Domain management → HTTPS**
- Click **"Verify DNS configuration"** then **"Provision certificate"**
- Netlify handles the SSL certificate automatically at no cost

---

## 3. Making Content Updates

All content lives in the single file `index.html`. To make changes:

1. Open `index.html` in any text editor (Notepad, VS Code, etc.)
2. Use **Ctrl+F** (Find) to search for the text you want to change
3. Make your edit, save the file
4. Commit and push to GitHub — Netlify will redeploy automatically within 60 seconds

### Common Updates

**Hours**
Search for `Tue–Sat` — you'll find two instances, one in the info bar and one in the footer. Update both.

**Phone number**
Search for `765-0234` — update all instances.

**Specials / Promotions**
Search for `Happy Hour`, `Wine Wednesdays`, or `Kids Eat` to find those cards and edit the day, time, or description.

**Menu item names or prices**
Search for the dish name (e.g. `Lobster Roll`) to find its card and edit the name, price, or description.

**About section text**
Search for `opened our doors in 2008` to find the about section paragraphs.

**Email or social links**
Search for `joewillysrestaurant@yahoo.com` or `joewillysseafood` to find and update those links.

---

## 4. Swapping Images

All images are stored in the `brand_assets/` folder.

To replace an image:
1. Name your new image **exactly the same** as the one you're replacing (same filename, same extension)
2. Drop it into the `brand_assets/` folder, overwriting the old file
3. Commit and push — the site will update automatically

| Image File | Used For |
|---|---|
| `joe_willys_hero.png` | Desktop hero background |
| `mobile_hero_2.png` | Mobile hero background |
| `joe_willys_square_logo.png` | Logo in nav and footer |
| `owners.jpg` | Photo in the About section |
| `bar.jpg` | Gallery — first/tall image |
| `diningroom.jpg` | Gallery |
| `privatedining.jpg` | Gallery |
| `boothtable.jpg` | Gallery |
| `in_the_kitchen.png` | Gallery |
| `joe_willys_menu.pdf` | Linked from "See Full Menu" and "Full Menu PDF" buttons |

> **To update the menu PDF:** Replace `joe_willys_menu.pdf` in `brand_assets/` with your new file using the exact same filename.

---

## 5. Updating the Social Preview Image

The social preview (`brand_assets/social_preview.jpg`) is what appears when someone shares your website link on Facebook, Instagram, iMessage, etc.

To regenerate it after making changes:
- Contact Pixel Perfect Designs — the image is generated programmatically and requires the development tools to recreate

To use a custom image instead:
1. Create an image at exactly **1200 × 630 pixels**
2. Save it as `social_preview.jpg`
3. Drop it into `brand_assets/`, overwriting the existing file
4. Commit and push

---

## 6. File Reference

```
joe-willys-website/
├── index.html              ← The entire website
├── serve.mjs               ← Local development server (node serve.mjs)
├── screenshot.mjs          ← Screenshot utility (node screenshot.mjs)
├── README.md               ← Technical documentation
├── HANDOFF.md              ← This document
└── brand_assets/
    ├── joe_willys_hero.png
    ├── mobile_hero_2.png
    ├── joe_willys_square_logo.png
    ├── joe_willys_menu.pdf
    ├── social_preview.jpg
    ├── owners.jpg
    ├── fish_skeleton.png
    ├── bar.jpg
    ├── diningroom.jpg
    ├── privatedining.jpg
    ├── boothtable.jpg
    ├── in_the_kitchen.png
    ├── Food_Network_New_Logo.png
    └── restaurant_impossible.png
```

---

## Need Help?

Contact **Pixel Perfect Designs** for any changes beyond basic content updates, or if you'd like to add new sections, features, or a redesign.
