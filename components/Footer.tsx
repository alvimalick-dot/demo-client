import Link from "next/link";
import { Instagram, Facebook, MessageCircle, MapPin, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";

const PAGES = [
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order online" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Contact & directions" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold uppercase">
            {restaurant.shortName}
            <span className="text-saffron">.</span>
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-cream/40">
            Est. {restaurant.since} · {restaurant.city}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-cream/55">
            <MapPin size={14} className="shrink-0 text-saffron" />
            {restaurant.address}
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-cream/55">
            <Phone size={14} className="shrink-0 text-saffron" />
            {restaurant.phone}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/40">Explore</p>
          <ul className="mt-3 space-y-2">
            {PAGES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-sm text-cream/70 transition hover:text-saffron">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/40">Order the easy way</p>
          <p className="mt-3 text-sm text-cream/55">
            Skip the delivery apps — order direct and keep the commission in your pocket.
          </p>
          <div className="mt-4 flex items-center gap-3">
            {restaurant.socials.instagram && (
              <a
                href={restaurant.socials.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/60 transition hover:border-saffron hover:text-saffron"
              >
                <Instagram size={16} />
              </a>
            )}
            {restaurant.socials.facebook && (
              <a
                href={restaurant.socials.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/60 transition hover:border-saffron hover:text-saffron"
              >
                <Facebook size={16} />
              </a>
            )}
            <a
              href={`https://wa.me/${restaurant.whatsapp}`}
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/60 transition hover:border-saffron hover:text-saffron"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5">
        <div className="container-page flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-cream/35">
            Demo site — built to show what {restaurant.shortName} could have live in days.
          </p>
          <Link href="/order" className="font-mono text-xs text-saffron/80 hover:text-saffron">
            Order online →
          </Link>
        </div>
      </div>
    </footer>
  );
}
