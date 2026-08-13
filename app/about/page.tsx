import type { Metadata } from "next";
import Image from "next/image";
import { Flame, Droplets, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { restaurant } from "@/data/restaurant.config";

export const metadata: Metadata = {
  title: `Our Story | ${restaurant.name}`,
  description: restaurant.about,
};

const roasts = [
  {
    icon: Leaf,
    name: "Light roast",
    body: "Bright, fruity, tea-like. Kept short and sweet to protect the origin character of single-origin lots.",
  },
  {
    icon: Droplets,
    name: "Medium roast",
    body: "Our everyday cup — balanced body, cocoa notes, enough sweetness to drink black or with milk.",
  },
  {
    icon: Flame,
    name: "Dark roast",
    body: "Bold and smoky with a heavy mouthfeel. The one that fills the whole shop with that smell by 7am.",
  },
];

const values = [
  "Roasted in-house every week — never stale, never shipped across the world roasted.",
  "Direct relationships with growers wherever we can arrange them.",
  "Everything on the menu is something we'd actually drink ourselves.",
  "Every WhatsApp message answered by a person, not a bot.",
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero eyebrow="Our story" title={restaurant.about.split("—")[0].trim()}>
        <p>{restaurant.about}</p>
      </PageHero>

      <section className="container-page py-16 sm:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-cream/70">
              {restaurant.story.map((p) => (
                <p key={p.slice(0, 24)} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[28px] border border-cream/10 shadow-ticket">
              <Image
                src={restaurant.heroImage}
                alt={restaurant.name}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-[0.2em] text-cream/80">
                Est. {restaurant.since} · {restaurant.city}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-cream/10 bg-ink-soft/60">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <span className="eyebrow">The roast</span>
            <h2 className="mt-2 text-3xl font-bold text-cream sm:text-4xl">Three roasts, one standard.</h2>
          </Reveal>
          <Reveal delay={0.1} stagger={0.1}>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {roasts.map(({ icon: Icon, name, body }) => (
                <div key={name} data-reveal-child className="ticket ticket-notch p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron/12 text-saffron">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-cream">{name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/55">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <Reveal>
          <span className="eyebrow">How we work</span>
          <h2 className="mt-2 text-3xl font-bold text-cream sm:text-4xl">
            Small batch. High standards. Zero shortcuts.
          </h2>
        </Reveal>
        <Reveal delay={0.1} stagger={0.08}>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <li
                key={v.slice(0, 20)}
                data-reveal-child
                className="flex items-start gap-3 rounded-2xl border border-cream/10 bg-ink-soft p-4"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-saffron" />
                <p className="text-sm leading-relaxed text-cream/70">{v}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
