"use client";

import { ReactNode } from "react";
import Reveal from "./Reveal";
import Zigzag from "./Zigzag";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-cream/10 bg-ink">
      <div className="pointer-events-none absolute inset-0 glow-gold" />
      <div className="container-page relative py-16 sm:py-20">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-black uppercase leading-[1.02] tracking-tight text-cream sm:text-5xl">
            {title}
          </h1>
          {children && <div className="mt-4 max-w-xl text-cream/60">{children}</div>}
        </Reveal>
      </div>
      <Zigzag fill="#212121" />
    </section>
  );
}
