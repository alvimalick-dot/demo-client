"use client";

import { restaurant } from "@/data/restaurant.config";

/**
 * Crusteez's signature scroll-text section: oversized words in a column that
 * scroll up continuously ("At Crusteez, coffee is effortless..."). Seamless
 * loop — the column is duplicated and translated by -50%.
 */
export default function WordCascade() {
  const name = restaurant.shortName.toUpperCase();
  const words: { text: string; hot?: boolean }[] = [
    { text: "AT" },
    { text: `${name},` },
    { text: "COFFEE", hot: true },
    { text: "IS" },
    { text: "EFFORTLESS.", hot: true },
    { text: "FRESH," },
    { text: "FAST," },
    { text: "ALWAYS" },
    { text: "SATISFYING.", hot: true },
    { text: "BREWED" },
    { text: "TO" },
    { text: "ORDER,", hot: true },
    { text: "EVERY" },
    { text: "SINGLE" },
    { text: "TIME.", hot: true },
  ];

  const row = (key: string) => (
    <div key={key} className="flex flex-col">
      {words.map((w, i) => (
        <span
          key={`${key}-${i}`}
          className={`whitespace-nowrap font-display text-5xl uppercase leading-[1.06] tracking-tight sm:text-7xl ${
            w.hot ? "text-gradient" : "text-cream"
          }`}
        >
          {w.text}
        </span>
      ))}
    </div>
  );

  return (
    <section className="relative overflow-hidden border-y border-cream/10 bg-ink-soft">
      <div className="pointer-events-none absolute inset-0 glow-gold" />
      <div className="container-page relative py-8 sm:py-10">
        <div className="h-[10.6rem] overflow-hidden sm:h-[15.9rem]" aria-hidden>
          <div className="flex animate-scroll-words flex-col will-change-transform">
            {row("a")}
            {row("b")}
          </div>
        </div>
      </div>
    </section>
  );
}
