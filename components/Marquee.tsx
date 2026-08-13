import { Coffee } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";

const words = [
  "Freshly roasted",
  "Brewed to order",
  `Est. ${restaurant.since}`,
  restaurant.city,
  restaurant.cuisine,
  "Single origin",
  "Baked in-house",
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-cream/10 bg-ink-soft py-3.5">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-8" aria-hidden={dup === 1}>
            {row.map((w, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-cream/55"
              >
                {w}
                <Coffee size={13} className="text-saffron/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
