"use client";

import { useMemo, useState } from "react";
import { Flame, Plus, Minus } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";
import { useCart } from "./CartProvider";

export default function Menu() {
  const categories = useMemo(
    () => Array.from(new Set(restaurant.menu.map((i) => i.category))),
    []
  );
  const [active, setActive] = useState<string>(categories[0]);
  const { lines, addItem, decrementItem } = useCart();

  const items = restaurant.menu.filter((i) => i.category === active);

  const qtyFor = (id: string) => lines.find((l) => l.item.id === id)?.qty ?? 0;

  return (
    <section id="menu" className="container-page py-16 sm:py-20">
      <div className="max-w-lg">
        <span className="eyebrow">The menu</span>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Order what {restaurant.city} keeps coming back for.</h2>
      </div>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === c
                ? "bg-ink text-cream"
                : "bg-ink/5 text-ink/60 hover:bg-ink/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const qty = qtyFor(item.id);
          return (
            <div key={item.id} className="ticket ticket-notch flex flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-base font-semibold">{item.name}</h3>
                    {item.popular && (
                      <span className="rounded-full bg-saffron/20 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-saffron-deep">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-snug text-ink/60">{item.description}</p>
                </div>
              </div>

              <div className="tear-line my-4" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-semibold">
                    Rs {item.price.toLocaleString()}
                  </span>
                  {item.spicy && (
                    <span className="flex items-center gap-0.5 text-chili">
                      {Array.from({ length: item.spicy }).map((_, i) => (
                        <Flame key={i} size={12} className="fill-chili" />
                      ))}
                    </span>
                  )}
                </div>

                {qty === 0 ? (
                  <button
                    onClick={() => addItem(item)}
                    className="flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-cream transition hover:bg-ink-soft"
                  >
                    <Plus size={13} /> Add
                  </button>
                ) : (
                  <div className="flex items-center gap-3 rounded-full bg-ink px-3 py-1.5 text-cream">
                    <button
                      onClick={() => decrementItem(item.id)}
                      aria-label={`Remove one ${item.name}`}
                      className="flex h-5 w-5 items-center justify-center"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="w-4 text-center font-mono text-xs">{qty}</span>
                    <button
                      onClick={() => addItem(item)}
                      aria-label={`Add one ${item.name}`}
                      className="flex h-5 w-5 items-center justify-center"
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
