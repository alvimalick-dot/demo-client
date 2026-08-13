export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  spicy?: 1 | 2 | 3;
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
  monthlySearches: number;
  rating: number;
  reviewCount: number;
  avgDeliveryMins: number;
  menu: MenuItem[];
  testimonials: Testimonial[];
  socials: { instagram?: string; facebook?: string };
};
