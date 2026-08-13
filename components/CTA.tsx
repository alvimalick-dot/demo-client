"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";
import Reveal from "./Reveal";
import Zigzag from "./Zigzag";

export default function CTA() {
  return (
    <section className="relative bg-saffron">
      <Zigzag fill="#212121" flip className="bottom-auto top-0" />
      <div className="container-page relative py-20 text-center sm:py-24">
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-ink/70">
            {restaurant.shortName.toUpperCase()} · {restaurant.city}
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-black uppercase leading-[0.98] text-white sm:text-6xl">
            Build your
            <br />
            own box
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base font-medium text-ink/80">
            Pick the brews and bakes you love — we&apos;ll pack it for pick-up or delivery in no time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/order" className="btn-primary !bg-ink !text-white hover:!bg-black">
              Order now
              <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/${restaurant.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-body text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-ink hover:text-white active:scale-[0.98]"
            >
              Order on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
      <Zigzag fill="#ff5500" />
    </section>
  );
}
