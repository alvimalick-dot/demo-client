"use client";

import { PercentCircle, Search, ClipboardList, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  {
    icon: PercentCircle,
    title: "No 25–30% commission",
    body: "Every order placed here goes straight to the till — nothing shaved off by a delivery app.",
  },
  {
    icon: Search,
    title: "Shows up when people search",
    body: "A real site with your menu and location is what Google actually ranks — not a Facebook page.",
  },
  {
    icon: ClipboardList,
    title: "Orders arrive organized",
    body: "Every order comes in as a clear ticket — item, quantity, total. No missed WhatsApp messages.",
  },
  {
    icon: MessageCircle,
    title: "Still your number, still WhatsApp",
    body: "Customers can check out here or tap straight through to WhatsApp — whichever they prefer.",
  },
];

export default function WhyDirect() {
  return (
    <section id="why-direct" className="relative overflow-hidden border-y border-cream/10 bg-ink-soft/60">
      <div className="pointer-events-none absolute inset-0 glow-gold" />
      <div className="container-page relative py-16 sm:py-20">
        <Reveal>
          <span className="eyebrow">Why a direct site</span>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold text-cream sm:text-4xl">
            Every search you're missing right now is a customer already looking for you.
          </h2>
        </Reveal>

        <Reveal delay={0.1} stagger={0.1}>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {points.map(({ icon: Icon, title, body }) => (
              <div key={title} data-reveal-child>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-saffron/12 text-saffron">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-cream">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/55">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
