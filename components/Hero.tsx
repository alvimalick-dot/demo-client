import Image from "next/image";
import { Search, ArrowRight, Star } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-page grid gap-10 pb-16 pt-10 md:grid-cols-2 md:items-center md:pt-16">
        <div className="animate-slide-up">
          <span className="eyebrow">{restaurant.city} · {restaurant.cuisine}</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            {restaurant.name}
          </h1>
          <p className="mt-4 max-w-md text-base text-ink/70">{restaurant.tagline}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#menu" className="btn-primary">
              View menu &amp; order
              <ArrowRight size={16} />
            </a>
            <a
              href={`https://wa.me/${restaurant.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-5 flex items-center gap-1.5 text-sm text-ink/60">
            <Star size={15} className="fill-brass text-brass" />
            <span className="font-semibold text-ink">{restaurant.rating}</span>
            <span>({restaurant.reviewCount.toLocaleString()} reviews) · avg {restaurant.avgDeliveryMins} min delivery</span>
          </div>

          {/* Signature banner: reframes the lead's own search-volume number
              as the reason this page needs to exist. */}
          <div className="ticket ticket-notch mt-8 max-w-md overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-saffron/20 text-saffron-deep animate-count-pulse">
                <Search size={16} />
              </div>
              <p className="text-sm leading-snug text-ink/80">
                <span className="font-mono font-semibold text-ink">
                  {restaurant.monthlySearches.toLocaleString()}
                </span>{" "}
                people searched for {restaurant.cuisine.toLowerCase()} near {restaurant.city} this
                month — right now most of them land on a competitor's site instead of yours.
              </p>
            </div>
          </div>
        </div>

        <div className="relative animate-slide-up [animation-delay:120ms]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-ticket sm:aspect-[5/4]">
            <Image
              src={restaurant.heroImage}
              alt={restaurant.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>

          {/* floating order-ticket stub, reinforces "this is a live ordering flow" */}
          <div className="ticket ticket-notch absolute -bottom-6 left-4 w-[230px] px-4 py-4 sm:-left-8">
            <p className="eyebrow">Order #0231</p>
            <div className="tear-line my-2" />
            <ul className="space-y-1 font-mono text-xs text-ink/75">
              <li className="flex justify-between">
                <span>1× Seekh Kebab</span>
                <span>950</span>
              </li>
              <li className="flex justify-between">
                <span>1× Kolachi Biryani</span>
                <span>650</span>
              </li>
            </ul>
            <div className="tear-line my-2" />
            <p className="flex justify-between font-mono text-xs font-semibold">
              <span>Total</span>
              <span>Rs 1,600</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
