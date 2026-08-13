export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  /** Coffee strength / intensity indicator (1 = light, 3 = strong) */
  strength?: 1 | 2 | 3;
  popular?: boolean;
};

export type CartLine = {
  item: MenuItem;
  qty: number;
};

export type Testimonial = {
  name: string;
  area: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export type RestaurantConfig = {
  name: string;
  shortName: string;
  cuisine: string;
  city: string;
  tagline: string;
  heroImage: string;
  phone: string;
  whatsapp: string;
  address: string;
  mapsQuery: string;
  hours: { day: string; time: string }[];
  /** Currency symbol/prefix shown before prices, e.g. "Rs" */
  currency: string;
  monthlySearches: number;
  /** Year the shop opened, shown in the marquee / about page */
  since: number;
  /** Short one-liner used on the about page hero */
  about: string;
  /** Story paragraphs for the about page */
  story: string[];
  rating: number;
  reviewCount: number;
  avgDeliveryMins: number;
  menu: MenuItem[];
  testimonials: Testimonial[];
  socials: { instagram?: string; facebook?: string };
};
