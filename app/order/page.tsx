import type { Metadata } from "next";
import { Coffee, Truck, MessageCircle, Wallet } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import MenuGrid from "@/components/MenuGrid";
import Footer from "@/components/Footer";
import { restaurant } from "@/data/restaurant.config";

export const metadata: Metadata = {
  title: `Order Online | ${restaurant.name}`,
  description: restaurant.tagline,
};

const steps = [
  { icon: Coffee, title: "Pick your drinks", body: "Browse categories and tap Add — your cart follows you across pages." },
  { icon: Truck, title: "Checkout in a minute", body: "No app, no account, no 30% commission going to a middleman." },
  { icon: MessageCircle, title: "Prefer WhatsApp?", body: "Tap the WhatsApp button anywhere and order the old-school way." },
  { icon: Wallet, title: "Pay on delivery", body: "Cash or card when it arrives — same prices as in the shop." },
];

export default function OrderPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Order online"
        title={`Skip the delivery apps. Order direct from ${restaurant.shortName}.`}
      >
        <p>
          Your order goes straight to the till — faster, cheaper, and it keeps the commission
          with the shop. Your cart is saved in this browser, so a refresh mid-order won't lose it.
        </p>
      </PageHero>

      <section className="container-page py-12 sm:py-16">
        <MenuGrid withCart />
      </section>

      <section className="border-t border-cream/10 bg-ink-soft/60">
        <div className="container-page grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-saffron/12 text-saffron">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-cream">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-cream/55">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
