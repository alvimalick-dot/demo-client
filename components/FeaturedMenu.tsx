"use client";

import Link from "next/link";
import { ArrowRight, Coffee } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";
import Reveal from "./Reveal";

export default function FeaturedMenu() {
  const popular = restaurant.menu.filter((i) => i.popular).slice(0, 4);

  return (
    <section id="featured" className="container-page py-16 sm:py-20">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">The menu</span>
            <h2 className="mt-2 max-w-md text-3xl font-bold text-cream sm:text-4xl">
              What {restaurant.city} keeps coming back for.
            </h2>
          </div>
          <Link href="/menu" className="btn-secondary">
            View full menu
            <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.1} stagger={0.08}>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((item) => (
            <div key={item.id} data-reveal-child className="ticket ticket-notch flex flex-col p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wide text-cream/40">
                  {item.category}
                </span>
                <Coffee size={14} className="text-saffron" />
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-cream">{item.name}</h3>
              <p className="mt-1 flex-1 text-sm leading-snug text-cream/55">{item.description}</p>
              <div className="tear-line my-4" />
              <p className="font-mono text-sm font-semibold text-saffron">
                {restaurant.currency} {item.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
