"use client";

import { useLayoutEffect, useRef } from "react";
import { Clock, Truck, Star, Wallet } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { restaurant } from "@/data/restaurant.config";

gsap.registerPlugin(ScrollTrigger);

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 92%", once: true },
      onUpdate: () => {
        el.textContent = obj.v.toFixed(decimals) + suffix;
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [to, decimals, suffix]);

  return <span ref={ref}>{decimals ? "0.0" : "0"}</span>;
}

export default function StatsBar() {
  const items = [
    { icon: Clock, label: "Open today", value: restaurant.hours[0].time },
    { icon: Truck, label: "Avg delivery", value: <Counter to={restaurant.avgDeliveryMins} suffix=" min" /> },
    { icon: Star, label: "Rating", value: <Counter to={restaurant.rating} decimals={1} suffix=" / 5" /> },
    { icon: Wallet, label: "Payment", value: "Cash · Card · Online" },
  ];

  return (
    <section className="border-y border-cream/10 bg-ink-soft/60">
      <div className="container-page grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon size={18} className="shrink-0 text-saffron" />
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-wide text-cream/45">{label}</p>
              <p className="font-mono text-sm font-medium text-cream">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
