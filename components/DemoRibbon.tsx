import { Zap } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";

/**
 * Thin strip at the very top of every page — solid hot orange so it reads as
 * a high-energy promo bar. During a cold-call demo this reframes the whole
 * site: it's not "a template called The Daily Grind", it's a working build
 * made for THIS shop — which is the offer.
 */
export default function DemoRibbon() {
  return (
    <div className="relative z-50 bg-saffron text-ink">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(100deg,transparent_0,transparent_22px,rgba(33,33,33,0.35)_22px,rgba(33,33,33,0.35)_30px)]" />
      <div className="container-page relative flex items-center justify-center gap-2 py-1.5 text-center text-[11px] font-bold uppercase tracking-wide sm:text-xs">
        <Zap size={13} className="shrink-0 animate-bounce-soft" />
        <span>
          Live demo build for <span className="underline decoration-ink/50 underline-offset-2">{restaurant.shortName}</span>,{" "}
          {restaurant.city} — this exact site, with your real menu, photos &amp; number, in days.
        </span>
      </div>
    </div>
  );
}
