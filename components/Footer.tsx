import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold">{restaurant.shortName}</p>
          <p className="mt-1 text-sm text-ink/50">{restaurant.address}</p>
        </div>

        <div className="flex items-center gap-4 text-ink/60">
          {restaurant.socials.instagram && (
            <a href={restaurant.socials.instagram} aria-label="Instagram" className="hover:text-ink">
              <Instagram size={18} />
            </a>
          )}
          {restaurant.socials.facebook && (
            <a href={restaurant.socials.facebook} aria-label="Facebook" className="hover:text-ink">
              <Facebook size={18} />
            </a>
          )}
          <a
            href={`https://wa.me/${restaurant.whatsapp}`}
            aria-label="WhatsApp"
            className="hover:text-ink"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        <p className="font-mono text-xs text-ink/35">
          Demo site — built to show what {restaurant.shortName} could have live in days.
        </p>
      </div>
    </footer>
  );
}
