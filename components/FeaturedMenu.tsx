"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";
import { themeFor } from "@/lib/menuTheming";
import Zigzag from "./Zigzag";

export default function FeaturedMenu() {
  const popular = restaurant.menu.filter((i) => i.popular).slice(0, 4);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <section className="relative bg-paper text-coal">
      <Zigzag fill="#f4f1ea" />
      <div className="container-page py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-saffron">
              The menu
            </span>
            <h2 className="mt-2 text-3xl font-bold text-coal sm:text-4xl">Featured products</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-coal/20 text-coal transition hover:border-saffron hover:text-saffron"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-coal/20 text-coal transition hover:border-saffron hover:text-saffron"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8"
        >
          {popular.map((item) => {
            const theme = themeFor(item.category);
            return (
              <div
                key={item.id}
                className="w-[260px] shrink-0 snap-start rounded-2xl border border-coal/10 bg-white p-5 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(255,85,0,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-coal/45">
                    {item.category}
                  </span>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-lg ${theme.chip}`}
                    title={item.category}
                  >
                    {theme.emoji}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-coal">{item.name}</h3>
                <p className="mt-1 text-sm leading-snug text-coal/60">{item.description}</p>
                <div className="my-4 h-px border-t border-dashed border-coal/20" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-base font-bold text-saffron">
                    {restaurant.currency} {item.price.toLocaleString()}
                  </span>
                  <Link
                    href="/order"
                    aria-label={`Order ${item.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-saffron text-white transition hover:bg-saffron-deep"
                  >
                    <Plus size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/menu" className="btn-primary">
            View full menu
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
