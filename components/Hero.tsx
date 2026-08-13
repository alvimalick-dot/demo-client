"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import gsap from "gsap";
import { restaurant } from "@/data/restaurant.config";
import CoffeeCanvas from "./CoffeeCanvas";
import Zigzag from "./Zigzag";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo("[data-hero='eyebrow']", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.5 })
        .fromTo("[data-hero='title']", { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.25")
        .fromTo("[data-hero='tagline']", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.45")
        .fromTo("[data-hero='cta']", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.07 }, "-=0.35")
        .fromTo("[data-hero='pitch']", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.3")
        .fromTo("[data-hero='ticket']", { autoAlpha: 0, x: 40, rotate: 2 }, { autoAlpha: 1, x: 0, rotate: 0, duration: 0.7 }, "-=0.5")
        .fromTo("[data-hero='badge']", { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.6, ease: "back.out(1.6)" }, "-=0.45");
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="top" className="relative overflow-hidden bg-ink">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT — dark text column */}
        <div className="relative">
          <CoffeeCanvas />
          <div className="aurora" />
          <div
            className="aurora-blob left-[-8%] top-[-12%] h-[340px] w-[340px] bg-chili/50"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="aurora-blob bottom-[-15%] left-[30%] h-[320px] w-[320px] bg-sky/40"
            style={{ animationDelay: "-10s" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

          <div className="container-page relative flex min-h-[560px] flex-col justify-center py-20 lg:pr-6">
            <span data-hero="eyebrow" className="eyebrow">
              {restaurant.name.toUpperCase()} · {restaurant.city}
            </span>
            <h1
              data-hero="title"
              className="mt-5 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl"
            >
              Coffee at
              <br />
              the speed of <span className="text-saffron">life.</span>
            </h1>
            <p data-hero="tagline" className="mt-5 max-w-md text-lg leading-relaxed text-cream/70">
              {restaurant.tagline}
            </p>

            <div data-hero="cta" className="mt-8 flex flex-wrap gap-3">
              <Link href="/order" className="btn-primary btn-gradient">
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

            {/* Signature strip: the lead's own search-volume number */}
            <div
              data-hero="pitch"
              className="mt-8 flex max-w-md items-center gap-4 border-l-4 border-saffron bg-ink-soft/70 px-4 py-3"
            >
              <span className="font-mono text-3xl font-bold text-saffron">
                {restaurant.monthlySearches.toLocaleString()}
              </span>
              <p className="text-sm leading-snug text-cream/70">
                people searched for {restaurant.cuisine.toLowerCase()} near {restaurant.city} this
                month — right now most of them land on a competitor&apos;s site instead of yours.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — image column with zigzag divider */}
        <div className="relative min-h-[340px] lg:min-h-[640px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={restaurant.heroImage}
            alt={restaurant.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <Zigzag vertical fill="#212121" className="left-0 right-auto" />

          {/* rotating badge */}
          <div data-hero="badge" className="absolute right-6 top-6 z-20 hidden h-28 w-28 sm:block">
            <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
              <defs>
                <path id="badge-circle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
              </defs>
              <text className="fill-cream/80 font-mono" style={{ fontSize: "8.2px", letterSpacing: "0.18em" }}>
                <textPath href="#badge-circle">
                  FRESHLY ROASTED · BREWED TO ORDER · EST. {restaurant.since} ·
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full btn-gradient font-display text-lg font-black text-ink">
                ☕
              </span>
            </div>
          </div>

          {/* floating white order ticket */}
          <div data-hero="ticket" className="absolute bottom-8 left-6 z-20 w-[280px] rounded-2xl bg-cream p-5 text-coal shadow-2xl sm:left-10">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-saffron">
              Order #0231
            </p>
            <div className="my-3 h-px border-t border-dashed border-coal/20" />
            <ul className="space-y-1.5 font-mono text-xs text-coal/70">
              <li className="flex justify-between">
                <span>1× Cappuccino</span>
                <span>{restaurant.currency} 450</span>
              </li>
              <li className="flex justify-between">
                <span>1× Butter Croissant</span>
                <span>{restaurant.currency} 350</span>
              </li>
            </ul>
            <div className="my-3 h-px border-t border-dashed border-coal/20" />
            <p className="flex justify-between font-mono text-sm font-bold">
              <span className="text-coal/50">Total</span>
              <span className="text-saffron">{restaurant.currency} 800</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
