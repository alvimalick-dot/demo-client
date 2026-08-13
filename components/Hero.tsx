"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Search, Star } from "lucide-react";
import gsap from "gsap";
import { restaurant } from "@/data/restaurant.config";
import CoffeeCanvas from "./CoffeeCanvas";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo("[data-hero='eyebrow']", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.6 })
        .fromTo("[data-hero='title']", { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.3")
        .fromTo("[data-hero='tagline']", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.5")
        .fromTo("[data-hero='cta']", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, "-=0.4")
        .fromTo("[data-hero='pitch']", { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.35")
        .fromTo("[data-hero='ticket']", { autoAlpha: 0, x: 40, rotate: 2 }, { autoAlpha: 1, x: 0, rotate: 0, duration: 0.8 }, "-=0.6")
        .fromTo("[data-hero='badge']", { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.7, ease: "back.out(1.6)" }, "-=0.5");
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="top" className="relative overflow-hidden">
      {/* animated 3D backdrop */}
      <CoffeeCanvas />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="container-page relative grid gap-12 pb-20 pt-14 md:grid-cols-2 md:items-center md:pt-20">
        <div>
          <span data-hero="eyebrow" className="eyebrow">
            {restaurant.city} · {restaurant.cuisine}
          </span>
          <h1
            data-hero="title"
            className="mt-4 font-display text-5xl font-black leading-[0.98] tracking-tight text-cream sm:text-6xl"
          >
            {restaurant.name}
            <span className="text-saffron">.</span>
          </h1>
          <p data-hero="tagline" className="mt-5 max-w-md text-lg leading-relaxed text-cream/65">
            {restaurant.tagline}
          </p>

          <div data-hero="cta" className="mt-8 flex flex-wrap gap-3">
            <Link href="/order" className="btn-primary">
              Order now
              <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/${restaurant.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Order on WhatsApp
            </a>
          </div>

          <div data-hero="cta" className="mt-5 flex items-center gap-1.5 text-sm text-cream/55">
            <Star size={15} className="fill-brass text-brass" />
            <span className="font-semibold text-cream">{restaurant.rating}</span>
            <span>
              ({restaurant.reviewCount.toLocaleString()} reviews) · avg {restaurant.avgDeliveryMins} min
              delivery
            </span>
          </div>

          {/* Signature banner: the lead's own search-volume number as the reason this page exists */}
          <div data-hero="pitch" className="ticket ticket-notch mt-8 max-w-md overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-saffron animate-count-pulse">
                <Search size={16} />
              </div>
              <p className="text-sm leading-snug text-cream/70">
                <span className="font-mono font-semibold text-saffron">
                  {restaurant.monthlySearches.toLocaleString()}
                </span>{" "}
                people searched for {restaurant.cuisine.toLowerCase()} near {restaurant.city} this
                month — right now most of them land on a competitor's site instead of yours.
              </p>
            </div>
          </div>
        </div>

        {/* floating order ticket + rotating badge */}
        <div className="relative hidden md:block">
          <div data-hero="ticket" className="ticket ticket-notch relative z-10 ml-auto w-[300px] px-5 py-5">
            <p className="eyebrow">Order #0231</p>
            <div className="tear-line my-3" />
            <ul className="space-y-1.5 font-mono text-xs text-cream/70">
              <li className="flex justify-between">
                <span>1× Cappuccino</span>
                <span>{restaurant.currency} 450</span>
              </li>
              <li className="flex justify-between">
                <span>1× Butter Croissant</span>
                <span>{restaurant.currency} 350</span>
              </li>
            </ul>
            <div className="tear-line my-3" />
            <p className="flex justify-between font-mono text-sm font-semibold">
              <span className="text-cream/50">Total</span>
              <span className="text-saffron">{restaurant.currency} 800</span>
            </p>
          </div>

          <div data-hero="badge" className="absolute -bottom-10 -left-6 z-20 h-36 w-36">
            <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
              <defs>
                <path id="badge-circle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
              </defs>
              <text className="fill-cream/60 font-mono" style={{ fontSize: "8.2px", letterSpacing: "0.18em" }}>
                <textPath href="#badge-circle">
                  FRESHLY ROASTED · BREWED TO ORDER · EST. {restaurant.since} ·
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <CoffeeMark />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoffeeMark() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-saffron font-display text-lg font-black text-ink">
      C
    </span>
  );
}
