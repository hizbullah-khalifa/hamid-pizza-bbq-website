# Hamid Pizza & Bar BQ Platter House

Premium, animated restaurant website built with **React 19 + Vite**, **React Router 7**, **Framer Motion** and **Lucide icons**.

## Quick start

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Features

- **Four pages** — Home, About, Services (with animated menu-category dropdown), Contact — with page transitions and scroll-to-top/hash handling
- **Dark / Light mode** — animated sun/moon swap via React state (no localStorage), smooth CSS-variable transition across the whole app
- **Hero** — staggered word-reveal headline, parallax plate artwork (custom SVG pizza), floating micro-badges (delivery time, rating, fresh daily), animated stats
- **Menu Highlights** — real menu with category filter tabs (synced to URL `?cat=`), staggered scroll-reveal cards, hover lift + glow, "Order" micro-interaction that opens WhatsApp pre-filled with the dish
- **Services** — Dine In, Takeaway, Fast Delivery, BBQ Platters for Events (icon cards with hover animation)
- **About** — brand story, "Near Police Chowki, Raheem Abad" location, animated counters (minutes, customers, platters, years)
- **Testimonials** — auto-advancing carousel with star ratings, arrows and dots
- **Contact** — info cards, click-to-chat WhatsApp card, form with floating labels that submits to WhatsApp, animated map pin placeholder + "Open in Google Maps"
- **Floating WhatsApp button** — pulsing, visible on every page
- **Footer** — quick links, menu links, socials (custom brand SVG icons), delivery number, gradient top border
- Fully responsive (mobile-first) with hamburger slide-in menu

## Data

Update the real business info in one place:
`src/data/site.js` (phone `0306-1157111`, WhatsApp link, address, hours)

Menu and prices: `src/data/menu.js`
Testimonials & services: `src/data/testimonials.js`

Phone delivery number: **0306-1157111** · Near Police Chowki, Raheem Abad, Rawalpindi