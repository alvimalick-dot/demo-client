import type { Metadata } from "next";
import { MessageCircle, Phone, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { restaurant } from "@/data/restaurant.config";

export const metadata: Metadata = {
  title: `Contact | ${restaurant.name}`,
  description: `Visit or message ${restaurant.name} in ${restaurant.city}.`,
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero eyebrow="Contact" title="Say hello — we're easy to reach.">
        <p>
          Drop by for a cup, call ahead for a table, or message us on WhatsApp for bulk orders
          and events.
        </p>
      </PageHero>

      <Location />

      <section className="border-t border-cream/10 bg-ink-soft/60">
        <div className="container-page grid gap-10 py-14 sm:py-16 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="eyebrow">Send a message</span>
              <h2 className="mt-2 text-2xl font-bold text-cream sm:text-3xl">Quick question?</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${restaurant.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="ticket ticket-notch flex items-center gap-4 p-5 transition hover:border-saffron/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-saffron/12 text-saffron">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="font-display font-semibold text-cream">WhatsApp us</p>
                  <p className="text-sm text-cream/55">Fastest reply — usually within minutes.</p>
                </div>
              </a>

              <a
                href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                className="ticket ticket-notch flex items-center gap-4 p-5 transition hover:border-saffron/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-saffron/12 text-saffron">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-display font-semibold text-cream">Call the shop</p>
                  <p className="text-sm text-cream/55">{restaurant.phone}</p>
                </div>
              </a>

              <div className="ticket ticket-notch flex items-start gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-saffron/12 text-saffron">
                  <Clock size={20} />
                </div>
                <div className="space-y-1 text-sm text-cream/55">
                  <p className="font-display font-semibold text-cream">Opening hours</p>
                  {restaurant.hours.map((h) => (
                    <p key={h.day}>
                      <span className="font-medium text-cream">{h.day}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
