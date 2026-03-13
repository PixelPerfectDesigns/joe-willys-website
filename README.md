# Joe Willy's Seafood House

Website for **Joe Willy's Seafood House** — a family-owned seafood restaurant located at Westside Plaza, 1817 South Road (Rt. 9), Wappingers Falls, NY. As seen on Food Network's *Restaurant: Impossible*.

## Overview

Single-page responsive website built with HTML, inline Tailwind CSS, and Google Fonts. No build step required — the entire site lives in one `index.html` file.

## Sections

- **Hero** — Full-bleed photo with desktop and mobile-specific images
- **Info Bar** — Hours, location, and phone at a glance
- **Menu Highlights** — 6 featured dishes with a link to the full menu PDF
- **Weekly Specials** — Happy Hour, Wine Wednesdays, Kids Half Price
- **Gallery** — 5 interior/atmosphere photos
- **Party Room** — Private event rental callout
- **Catch Club** — Free dessert email signup CTA
- **Reviews** — Google-style testimonial cards
- **About** — Owners story and Food Network feature
- **Footer** — Hours, address, phone, Facebook, Instagram, email

## Restaurant Info

| | |
|---|---|
| **Address** | 1817 South Road (Rt. 9), Wappingers Falls, NY 12590 |
| **Phone** | (845) 765-0234 |
| **Email** | joewillysrestaurant@yahoo.com |
| **Instagram** | [@joewillysseafood](https://www.instagram.com/joewillysseafood) |
| **Hours** | Tue–Sat 4–9 PM · Sun 4–8:30 PM · Mon Closed |

## Running Locally

```bash
node serve.mjs
```

Opens a static file server at `http://localhost:3000`.

## Taking Screenshots

```bash
node screenshot.mjs http://localhost:3000 label
```

Screenshots are saved to `temporary screenshots/` with auto-incrementing filenames.

## Brand Assets

All assets live in `brand_assets/`:

| File | Description |
|---|---|
| `joe_willys_hero.png` | Desktop hero background |
| `mobile_hero_2.png` | Mobile hero background |
| `joe_willys_square_logo.png` | Square logo for nav/footer |
| `joe_willys_menu.pdf` | Full menu PDF |
| `social_preview.jpg` | Open Graph / social share image (1200×630) |
| `fish_skeleton.png` | Decorative watermark used throughout |
| `Food_Network_New_Logo.png` | Food Network logo |
| `restaurant_impossible.png` | Restaurant: Impossible logo |

## Tech Stack

- [Tailwind CSS](https://tailwindcss.com/) (CDN)
- [Google Fonts](https://fonts.google.com/) — Playfair Display, Josefin Sans, Lora
- Vanilla JS (scroll animations, mobile nav, email form)
- Node.js static server (`serve.mjs`)
- Puppeteer screenshot utility (`screenshot.mjs`)
