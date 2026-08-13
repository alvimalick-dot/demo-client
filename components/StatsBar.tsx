import { Clock, Truck, Star, Wallet } from "lucide-react";
import { restaurant } from "@/data/restaurant.config";

const items = [
  { icon: Clock, label: "Open today", value: restaurant.hours[0].time },
  { icon: Truck, label: "Avg delivery", value: `${restaurant.avgDeliveryMins} min` },
  { icon: Star, label: "Rating", value: `${restaurant.rating} / 5` },
  { icon: Wallet, label: "Payment", value: "Cash · Card · Online" },
];

export default function StatsBar() {
  return (
    <section className="grain-dark">
      <div className="container-page grid grid-cols-2 gap-6 py-8 text-cream sm:grid-cols-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon size={18} className="shrink-0 text-saffron" />
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-wide text-cream/55">{label}</p>
              <p className="font-mono text-sm font-medium">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
