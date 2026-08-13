"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";
import { themeFor } from "@/lib/menuTheming";

const AREAS = ["Gulberg", "DHA", "Model Town", "Johar Town", "Cantt", "Wapda Town"];

/**
 * A small toast that periodically slides in a "recent order" — it makes the
 * demo read as a shop that's live right now, not a static mockup.
 */
export default function OrderTicker() {
  const popular = restaurant.menu.filter((m) => m.popular).slice(0, 6);
  const orders = popular.map((m, i) => ({
    label: `${1 + (i % 2)}× ${m.name}`,
    area: AREAS[i % AREAS.length],
    mins: 2 + ((i * 3) % 9),
    emoji: themeFor(m.category).emoji,
  }));
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % orders.length), 5400);
    return () => clearTimeout(t);
  }, [idx, orders.length]);

  const order = orders[idx];

  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-40 hidden sm:block" aria-hidden>
      <div key={idx} className="ticket animate-ticker-in flex items-center gap-3 px-4 py-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-saffron text-base">
          {order.emoji}
        </span>
        <div className="text-xs leading-tight">
          <p className="font-semibold text-cream">
            {order.label} · <span className="font-normal text-cream/55">{order.area}</span>
          </p>
          <p className="mt-0.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-cream/40">
            <CheckCircle2 size={11} className="text-leaf" />
            Ordered {order.mins} min ago
          </p>
        </div>
      </div>
    </div>
  );
}
