"use client";

import { ShoppingBag, Coffee, Zap } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: ShoppingBag,
    num: "01",
    title: "Order",
    body: "Tap order online or WhatsApp — your drinks are queued before you walk in.",
  },
  {
    icon: Coffee,
    num: "02",
    title: "Brew",
    body: "Every cup is made to order the moment your order lands in the kitchen.",
  },
  {
    icon: Zap,
    num: "03",
    title: "Stay on track",
    body: "Fresh coffee in hand, out the door in minutes — no queue, no app markup.",
  },
];

export default function StepsBar() {
  return (
    <section className="relative overflow-hidden border-b border-cream/10">
      <div className="pointer-events-none absolute inset-0 glow-gold" />
      <div className="container-page relative py-14 sm:py-16">
        <Reveal>
          <span className="eyebrow">How it works</span>
          <h2 className="mt-2 text-3xl font-bold text-cream sm:text-4xl">
            Order. Brew. <span className="text-gradient">Stay on track.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} stagger={0.12}>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {steps.map(({ icon: Icon, num, title, body }) => (
              <div key={num} data-reveal-child className="ticket ticket-notch p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full btn-gradient text-ink">
                    <Icon size={22} />
                  </span>
                  <span className="font-display text-4xl text-cream/15">{num}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-cream">{title}</h3>
                <div className="tear-line my-4" />
                <p className="text-sm leading-relaxed text-cream/60">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
