# Restaurant Demo — cold-call ordering site

A single, polished restaurant ordering site built to reskin fast for cold-call
demos (the leads in your Karachi Toys-style scraped sheet — restaurants with
"NO_WEBSITE" and a Hot lead score).

## What's in it

- Full landing page: hero, live "X people searched this month" banner pulled
  from the lead's own search-volume number, menu with category tabs, a
  "why order direct" section (commission/visibility pitch), map + hours,
  reviews, and a footer.
- A working cart → checkout → confirmation flow (client-side only — no real
  database or payment processor wired up, on purpose, so you can demo it on
  any call without backend setup). Cart persists in the browser via
  localStorage so a refresh mid-demo doesn't lose it.
- WhatsApp order/contact links, since that's how most of these restaurants
  actually take orders today.
- Everything is one design system (colors, type, the "order ticket" card
  motif) so it looks intentional, not templated — but every word of copy is
  driven from a single config file, so reskinning is fast.

## Reskin for a new lead in under 5 minutes

Open `data/restaurant.config.ts`. That's the only file you need to touch:

1. `name`, `shortName`, `cuisine`, `city`, `tagline` — from the lead sheet.
2. `phone`, `whatsapp`, `address`, `mapsQuery` — same.
3. `monthlySearches` — copy straight from the search-volume column in your
   leads spreadsheet. This number drives the hero banner, which is the whole
   pitch: "X people searched for you this month and landed on a competitor."
4. `heroImage` — swap the Unsplash URL for a photo of their actual food if
   you have one (Google Business Profile photos work well), otherwise pick
   a stock photo matching their cuisine.
5. `menu` — replace with their real dishes and prices if you know them, or
   leave a believable placeholder menu for the pitch call and swap it once
   they say yes.
6. `testimonials` — optional, can leave as placeholder for the demo.

Nothing else needs to change. Colors/fonts/layout stay consistent across
every demo so you build a recognizable "this is what I do" portfolio look —
swap it per-client later once they're onboard.

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
to a real API route (or WhatsApp Cloud API / a lightweight DB like
Supabase) is the natural next step — it's the one place that talks to the
outside world.
