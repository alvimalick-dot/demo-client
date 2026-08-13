# Coffee Shop Demo — cold-call ordering site

A polished, **multi-page** coffee shop website built to reskin fast for cold-call
demos (the leads in your Karachi Toys-style scraped sheet — coffee shops and
cafés with "NO_WEBSITE" and a Hot lead score). The current demo is themed as a
specialty coffee shop, but the same template reskins to any café or restaurant
in minutes.

## What's in it

- **Five real pages** (Next.js App Router):
  - `/` — Home: animated 3D hero, marquee, stats, featured menu, the
    commission/visibility pitch, reviews, CTA.
  - `/menu` — full menu with category tabs.
  - `/order` — the same menu with a live add-to-cart → checkout → ticket flow.
  - `/about` — brand story, roast levels, values.
  - `/contact` — map, hours, WhatsApp/phone cards, contact form.
- **Motion everywhere**: a Three.js hero background (drifting coffee particles +
  wireframe beans + mouse parallax), GSAP ScrollTrigger reveals, staggered menu
  cards, a vertical scrolling word cascade, and marquee/steam/confetti details.
- **High-energy Crusteez-style theme** — dark charcoal (#212121), hot orange
  (#ff5500), white text, heavy uppercase display type (Archivo Black), jagged
  zigzag dividers, and a light "Featured Products" carousel. Aggressive, bold,
  and recognizable — not a generic template.
- The cold-call pitch is untouched: the hero banner reframes the lead's own
  search-volume number ("X people searched for you this month and landed on a
  competitor"), the "why order direct" section sells against 25–30% delivery-app
  commissions, and WhatsApp ordering is one tap away.
- Cart persists in the browser (localStorage) so a refresh mid-demo doesn't lose it.

## Reskin for a new lead in under 5 minutes

Open `data/restaurant.config.ts`. That's the only file you need to touch:

1. `name`, `shortName`, `cuisine`, `city`, `tagline` — from the lead sheet.
2. `phone`, `whatsapp`, `address`, `mapsQuery` — same.
3. `currency` — the price prefix shown everywhere (e.g. `"Rs"`).
4. `monthlySearches` — copy straight from the search-volume column in your
   leads spreadsheet. This number drives the hero banner, which is the whole
   pitch.
5. `heroImage` — swap the Unsplash URL for a photo of their actual shop if you
   have one (Google Business Profile photos work well).
6. `menu` — replace with their real drinks, bakes, and prices. Each item has an
   optional `image` URL (swap in photos of their actual food — Google Business
   Profile photos work great); if omitted, the card falls back to a colored
   emoji tile. The `strength` field (1–3) shows the coffee-cup icon on strong
   drinks.
7. `about` / `story` / `since` — drive the About page.
8. `testimonials` — optional, can leave as placeholder for the demo.

Nothing else needs to change — colors, fonts, layout, and animations stay
consistent across every demo so you build a recognizable "this is what I do"
portfolio look.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes on the "backend"

There's no database or real order storage — `CartDrawer.tsx` simulates a
network call with a short delay, then shows an order-ticket confirmation with
a random order number. That's enough to demo the full experience live on a
call. When a lead signs, wiring `placeOrder` in `components/CartDrawer.tsx`
to a real API route (or WhatsApp Cloud API / a lightweight DB like Supabase)
is the natural next step — it's the one place that talks to the outside world.
