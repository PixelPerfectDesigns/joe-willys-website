# Joe Willy's Seafood House

**[Live Site →](https://joewillysfishshack.netlify.app/)**

![Joe Willy's Seafood House](brand_assets/social_preview.jpg)

Single-page website for Joe Willy's Seafood House — a family-owned seafood restaurant in Wappingers Falls, NY (Westside Plaza, Rt. 9). Featured on Food Network's *Restaurant: Impossible*.

## Stack

HTML5 · Tailwind CSS (CDN with custom config) · JavaScript (inline) ·
Fraunces + Nunito (Google Fonts)

## Running it

Open `index.html` in a browser. No build step.

## Design

Custom Tailwind config with brand colors:

```js
navy: '#1e3d6e', 'navy-deep': '#0d1f38',
rust: '#c44a2b', sky: '#5ab4d4',
cream: '#f5e3bc', 'cream-lt': '#fdf8ef'
```

Font pairing: Fraunces (display/headings) + Nunito (body and labels).

The nav starts transparent and transitions to a frosted-glass pill on scroll
(`backdrop-filter: blur(16px)` + navy tint) — handled with a `scrolled` class
toggled via an inline scroll listener.

## Notes

Single HTML file — all styles are either Tailwind utilities or a `<style>`
block in the `<head>`. No external CSS or JS files.
