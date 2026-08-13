"use client";

import { MapPin, Clock, Navigation } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";
import Reveal from "./Reveal";

export default function Location() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    restaurant.mapsQuery
  )}`;

  return (
    <section id="location" className="container-page py-16 sm:py-20">
      <div className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Find us</span>
          <h2 className="mt-2 text-3xl font-bold text-cream sm:text-4xl">
            Visit {restaurant.shortName}
          </h2>

          <div className="mt-6 flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 shrink-0 text-saffron" />
            <p className="text-sm text-cream/70">{restaurant.address}</p>
          </div>

          <div className="mt-4 flex items-start gap-3">
            <Clock size={18} className="mt-0.5 shrink-0 text-saffron" />
            <div className="space-y-1 text-sm text-cream/70">
              {restaurant.hours.map((h) => (
                <p key={h.day}>
                  <span className="font-medium text-cream">{h.day}:</span> {h.time}
                </p>
              ))}
            </div>
          </div>

          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-7"
          >
            <Navigation size={16} />
            Get directions
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[24px] border border-cream/10 shadow-ticket">
            <iframe
              title="Map"
              className="h-[320px] w-full grayscale-[30%] contrast-[0.9] sm:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                restaurant.mapsQuery
              )}&output=embed`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
