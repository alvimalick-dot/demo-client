"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-cream/10">
      <div className="pointer-events-none absolute inset-0 glow-gold" />
      <div className="container-page relative flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center sm:py-20">
        <Reveal>
          <h2 className="max-w-md text-3xl font-bold leading-tight text-cream sm:text-4xl">
            Running low on caffeine? We're open.
          </h2>
          <p className="mt-2 max-w-sm text-sm text-cream/55">
            Order ahead or call in — either way, {restaurant.shortName} will have your brew ready.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            <Link href="/order" className="btn-primary">
              Order now
              <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
              className="btn-secondary"
            >
              <Phone size={16} />
              Call {restaurant.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
