import { ArrowRight, Phone } from "lucide-react";import { restaurant } from "@/data/restaurant.config";

export default function CTA() {
  return (
    <section className="grain-dark">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-16 text-cream sm:flex-row sm:items-center sm:py-20">
        <div>
          <h2 className="max-w-md text-3xl font-bold leading-tight sm:text-4xl">
            Running low on caffeine? We're open.
          </h2>
          <p className="mt-2 max-w-sm text-sm text-cream/60">
            Order ahead or call in — either way, {restaurant.shortName} will have your brew ready.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#menu" className="btn-primary bg-saffron text-ink hover:bg-saffron-deep">
            Order now
            <ArrowRight size={16} />
          </a>
          <a
            href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/25 px-6 py-3 font-semibold text-cream transition hover:border-cream/50"
          >
            <Phone size={16} />
            Call {restaurant.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
