"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";
import { useCart } from "./CartProvider";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { count, setCartOpen } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled || open
          ? "border-b border-cream/10 bg-ink/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-tight text-cream">
          <span className="flex h-8 w-8 items-center justify-center rounded-full btn-gradient text-sm">☕</span>
          {restaurant.shortName}
          <span className="text-saffron">.</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold uppercase tracking-wide transition ${
                isActive(l.href)
                  ? "text-saffron"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 text-sm font-semibold text-cream/70 hover:text-cream sm:flex"
          >
            <Phone size={15} />
            {restaurant.phone}
          </a>
          <button
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full btn-gradient text-ink transition hover:scale-105 active:scale-95"
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-chili font-mono text-[11px] font-semibold text-cream animate-pop">
                {count}
              </span>
            )}
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-ink md:hidden">
          <nav className="container-page flex flex-col py-3">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm font-medium ${
                  isActive(l.href) ? "text-saffron" : "text-cream/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
