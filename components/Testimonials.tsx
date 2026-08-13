import { Star } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-cream-dim">
      <div className="container-page py-16 sm:py-20">
        <span className="eyebrow">What people say</span>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          {restaurant.rating} out of 5, from {restaurant.reviewCount.toLocaleString()} reviews
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {restaurant.testimonials.map((t) => (
            <div key={t.name} className="ticket ticket-notch p-5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? "fill-brass text-brass" : "text-ink/15"}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">&ldquo;{t.quote}&rdquo;</p>
              <div className="tear-line my-4" />
              <p className="font-mono text-xs text-ink/50">
                {t.name} · {t.area}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
