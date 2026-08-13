"use client";

import { useState } from "react";
import { X, Plus, Minus, Trash2, CheckCircle2, Loader2 } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";
import { useCart } from "./CartProvider";

type Stage = "cart" | "checkout" | "placing" | "done";

const DELIVERY_FEE = 150;

export default function CartDrawer() {
  const { lines, addItem, decrementItem, removeItem, total, isCartOpen, setCartOpen, clearCart } =
    useCart();
  const [stage, setStage] = useState<Stage>("cart");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState<"cod" | "card">("cod");
  const [orderNumber, setOrderNumber] = useState("");

  const close = () => {
    setCartOpen(false);
    // reset to cart view after the panel closes so it doesn't flash mid-transition
    setTimeout(() => setStage("cart"), 250);
  };

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStage("placing");
    // simulated network round-trip — this demo has no live backend/database yet
    setTimeout(() => {
      setOrderNumber(String(Math.floor(1000 + Math.random() * 8999)));
      setStage("done");
    }, 1100);
  };

  const finishAndReset = () => {
    clearCart();
    close();
    setName("");
    setPhone("");
    setAddress("");
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        aria-label="Close cart"
        onClick={close}
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
      />
      <div className="relative flex h-full w-full max-w-sm animate-cart-in flex-col bg-cream shadow-2xl">
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <h2 className="font-display text-lg font-semibold">
            {stage === "done" ? "Order placed" : "Your order"}
          </h2>
          <button onClick={close} aria-label="Close" className="text-ink/50 hover:text-ink">
            <X size={20} />
          </button>
        </div>

        {stage === "cart" && (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {lines.length === 0 ? (
                <p className="mt-10 text-center text-sm text-ink/50">
                  Nothing here yet — add something from the menu.
                </p>
              ) : (
                <ul className="space-y-4">
                  {lines.map(({ item, qty }) => (
                    <li key={item.id} className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">{item.name}</p>
                        <p className="font-mono text-xs text-ink/50">{restaurant.currency} {item.price.toLocaleString()}</p>
                        <div className="mt-2 flex items-center gap-3 rounded-full bg-ink/5 px-2 py-1 w-fit">
                          <button
                            onClick={() => decrementItem(item.id)}
                            aria-label={`Remove one ${item.name}`}
                            className="flex h-5 w-5 items-center justify-center text-ink/70"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-4 text-center font-mono text-xs">{qty}</span>
                          <button
                            onClick={() => addItem(item)}
                            aria-label={`Add one ${item.name}`}
                            className="flex h-5 w-5 items-center justify-center text-ink/70"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="mt-1 text-ink/30 hover:text-chili"
                      >
                        <Trash2 size={15} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-ink/10 px-5 py-4">
                <div className="flex justify-between text-sm text-ink/60">
                  <span>Subtotal</span>
                  <span className="font-mono">{restaurant.currency} {total.toLocaleString()}</span>
                </div>
                <div className="mt-1 flex justify-between text-sm text-ink/60">
                  <span>Delivery</span>
                  <span className="font-mono">{restaurant.currency} {DELIVERY_FEE}</span>
                </div>
                <div className="mt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="font-mono">{restaurant.currency} {(total + DELIVERY_FEE).toLocaleString()}</span>
                </div>
                <button onClick={() => setStage("checkout")} className="btn-primary mt-4 w-full">
                  Checkout
                </button>
              </div>
            )}
          </>
        )}

        {stage === "checkout" && (
          <form onSubmit={placeOrder} className="flex flex-1 flex-col overflow-y-auto px-5 py-4">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  Full name
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-ink/15 bg-white/60 px-3 py-2.5 text-sm outline-none focus:border-chili"
                  placeholder="Ahmed Raza"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  Phone number
                </label>
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-ink/15 bg-white/60 px-3 py-2.5 text-sm outline-none focus:border-chili"
                  placeholder="03xx xxxxxxx"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  Delivery address
                </label>
                <textarea
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={2}
                  className="mt-1 w-full resize-none rounded-xl border border-ink/15 bg-white/60 px-3 py-2.5 text-sm outline-none focus:border-chili"
                  placeholder="House / street, area"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  Payment
                </label>
                <div className="mt-2 flex gap-2">
                  {(["cod", "card"] as const).map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setPayment(p)}
                      className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-medium transition ${
                        payment === p
                          ? "border-chili bg-chili/5 text-chili"
                          : "border-ink/15 text-ink/60"
                      }`}
                    >
                      {p === "cod" ? "Cash on delivery" : "Card on delivery"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto border-t border-ink/10 pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="font-mono">{restaurant.currency} {(total + DELIVERY_FEE).toLocaleString()}</span>
              </div>
              <button type="submit" className="btn-primary mt-4 w-full">
                Place order · {restaurant.currency} {(total + DELIVERY_FEE).toLocaleString()}
              </button>
              <button
                type="button"
                onClick={() => setStage("cart")}
                className="btn-ghost mt-2 w-full"
              >
                Back to cart
              </button>
            </div>
          </form>
        )}

        {stage === "placing" && (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-5 text-center">
            <Loader2 size={28} className="animate-spin text-chili" />
            <p className="text-sm text-ink/60">Sending your order to {restaurant.shortName}…</p>
          </div>
        )}

        {stage === "done" && (
          <div className="flex flex-1 flex-col px-5 py-6">
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 size={40} className="text-leaf" />
              <h3 className="mt-3 font-display text-xl font-semibold">Order confirmed</h3>
              <p className="mt-1 text-sm text-ink/60">
                {restaurant.shortName} is preparing it now. Estimated arrival in{" "}
                {restaurant.avgDeliveryMins} minutes.
              </p>
            </div>

            <div className="ticket ticket-notch mt-6 p-5">
              <p className="eyebrow">Order #{orderNumber}</p>
              <div className="tear-line my-3" />
              <ul className="space-y-1.5 font-mono text-xs">
                {lines.map(({ item, qty }) => (
                  <li key={item.id} className="flex justify-between">
                    <span>
                      {qty}× {item.name}
                    </span>
                    <span>{restaurant.currency} {(item.price * qty).toLocaleString()}</span>
                  </li>
                ))}
                <li className="flex justify-between text-ink/50">
                  <span>Delivery</span>
                  <span>{restaurant.currency} {DELIVERY_FEE}</span>
                </li>
              </ul>
              <div className="tear-line my-3" />
              <p className="flex justify-between font-mono text-sm font-semibold">
                <span>Total</span>
                <span>{restaurant.currency} {(total + DELIVERY_FEE).toLocaleString()}</span>
              </p>
            </div>

            <button onClick={finishAndReset} className="btn-primary mt-6 w-full">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
