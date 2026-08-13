import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import MenuGrid from "@/components/MenuGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { restaurant } from "@/data/restaurant.config";

export const metadata: Metadata = {
  title: `Menu | ${restaurant.name}`,
  description: restaurant.tagline,
};

export default function MenuPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="The menu"
        title={`Brewed fresh, priced honestly.`}
      >
        <p>
          Every drink is made to order and every bake comes out of our own oven. Pick a
          category below — the full list, no app markups.
        </p>
      </PageHero>

      <section className="container-page py-12 sm:py-16">
        <MenuGrid />
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
