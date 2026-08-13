"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Coffee, Plus, Minus, Flame } from "lucide-react";
import gsap from "gsap";
import { restaurant } from "@/data/restaurant.config";
import { useCart } from "./CartProvider";
import TiltCard from "./TiltCard";
import { themeFor } from "@/lib/menuTheming";

type MenuGridProps = {
  /** show add-to-cart steppers (order page) vs. browse-only (menu page) */
  withCart?: boolean;
};

export default function MenuGrid({ withCart = false }: MenuGridProps) {
  const categories = useMemo(
    () => Array.from(new Set(restaurant.menu.map((i) => i.category))),
    []
  );
  const [active, setActive] = useState<string>(categories[0]);
  const { lines, addItem, decrementItem } = useCart();
  const gridRef = useRef<HTMLDivElement>(null);

  const items = restaurant.menu.filter((i) => i.category === active);

  // stagger the cards in whenever the category changes
  useLayoutEffect(() => {
    const cards = gridRef.current?.querySelectorAll("[data-menu-card]");
    if (!cards || cards.length === 0) return;
    const tween = gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 24, scale: 0.97 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.05, ease: "power3.out", overwrite: "auto" }
    );
    return () => {
      tween.kill();
    };
  }, [active]);

  const qtyFor = (id: string) => lines.find((l) => l.item.id === id)?.qty ?? 0;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const theme = themeFor(c);
          const isActive = active === c;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "btn-gradient text-ink shadow-lg shadow-saffron/20"
                  : "border border-cream/15 text-cream/60 hover:border-cream/40 hover:text-cream"
              }`}
            >
              <span className="mr-1.5">{theme.emoji}</span>
              {c}
            </button>
          );
        })}
      </div>

      <div ref={gridRef} className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const qty = qtyFor(item.id);
          const theme = themeFor(item.category);
          const hot = item.category === "Hot Coffee";
          return (
            <div key={item.id} data-menu-card className="relative">
              <div
                className="pointer-events-none absolute inset-0 rounded-ticket"
                style={{ background: theme.glow }}
              />
              <TiltCard className="group">
                <div className="ticket ticket-notch relative flex h-full flex-col overflow-hidden p-0">
                  {/* photo header */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <span
                      className={`absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-base shadow-lg ${theme.chip}`}
                      title={item.category}
                    >
                      {theme.emoji}
                    </span>
                    {item.popular && (
                      <span className="absolute right-3 top-3 rounded-full bg-saffron px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-ink shadow-lg">
                        ★ Popular
                      </span>
                    )}
                    {hot && (
                      <div className="steam" style={{ top: 8, left: "50%" }} aria-hidden>
                        <span />
                        <span />
                        <span />
                      </div>
                    )}
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-cream">{item.name}</h3>
                    <p className="mt-1 flex-1 text-sm leading-snug text-cream/55">{item.description}</p>
                    <div className="tear-line my-4" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-semibold text-gradient">
                          {restaurant.currency} {item.price.toLocaleString()}
                        </span>
                        {item.strength && (
                          <span title="Coffee strength" className="flex items-center gap-0.5 text-brass">
                            {Array.from({ length: item.strength }).map((_, i) => (
                              <Coffee key={i} size={12} className="fill-brass" />
                            ))}
                            {item.strength >= 3 && <Flame size={12} className="text-chili" />}
                          </span>
                        )}
                      </div>

                      {withCart &&
                        (qty === 0 ? (
                          <button
                            onClick={() => addItem(item)}
                            className="flex items-center gap-1.5 rounded-full btn-gradient px-4 py-2 text-xs font-bold text-ink transition hover:scale-105 active:scale-95"
                          >
                            <Plus size={13} /> Add
                          </button>
                        ) : (
                          <div className="flex items-center gap-3 rounded-full btn-gradient px-3 py-1.5 text-ink">
                            <button
                              onClick={() => decrementItem(item.id)}
                              aria-label={`Remove one ${item.name}`}
                              className="flex h-5 w-5 items-center justify-center"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-4 text-center font-mono text-xs font-bold">{qty}</span>
                            <button
                              onClick={() => addItem(item)}
                              aria-label={`Add one ${item.name}`}
                              className="flex h-5 w-5 items-center justify-center"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
