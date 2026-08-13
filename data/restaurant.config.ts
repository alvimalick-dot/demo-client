import { RestaurantConfig } from "@/lib/types";

/**
 * ============================================================
 *  DEMO CONFIG — edit THIS file before every cold-call demo.
 *  Nothing else in the codebase needs to change per lead.
 *  Swap name / city / menu / numbers to match the lead sheet
 *  (name, city, phone, and monthlySearches come straight from
 *  your scraped leads spreadsheet).
 * ============================================================
 */
export const restaurant: RestaurantConfig = {
  name: "The Daily Grind",
  shortName: "Daily Grind",
  cuisine: "Specialty Coffee & Bakes",
  city: "Lahore",
  tagline: "Small-batch beans, brewed to order — your corner coffee ritual.",
  heroImage:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
  phone: "+92 42 1111 2002",
  whatsapp: "924211112002",
  address: "14-B, MM Alam Road, Gulberg III, Lahore",
  mapsQuery: "The Daily Grind Coffee Lahore",
  hours: [
    { day: "Mon – Fri", time: "8:00 AM – 11:00 PM" },
    { day: "Sat – Sun", time: "9:00 AM – 12:00 AM" },
  ],
  // pulled straight from the lead sheet's monthly search-volume column
  monthlySearches: 12400,
  rating: 4.7,
  reviewCount: 531,
  avgDeliveryMins: 25,
  currency: "Rs",
  socials: { instagram: "#", facebook: "#" },
  menu: [
    {
      id: "cappuccino",
      name: "Cappuccino",
      description: "Double espresso, silky steamed milk, thick foam crown.",
      price: 450,
      category: "Hot Coffee",
      strength: 1,
      popular: true,
    },
    {
      id: "flat-white",
      name: "Flat White",
      description: "Two ristretto shots, velvety microfoam — the barista's pick.",
      price: 500,
      category: "Hot Coffee",
      strength: 2,
      popular: true,
    },
    {
      id: "latte",
      name: "Caffè Latte",
      description: "Smooth espresso with steamed milk, light and comforting.",
      price: 480,
      category: "Hot Coffee",
      strength: 1,
    },
    {
      id: "americano",
      name: "Americano",
      description: "Double espresso over hot water — clean and direct.",
      price: 350,
      category: "Hot Coffee",
      strength: 2,
    },
    {
      id: "mocha",
      name: "Mocha",
      description: "Espresso, Belgian chocolate, steamed milk, whipped cream.",
      price: 550,
      category: "Hot Coffee",
      strength: 1,
    },
    {
      id: "pour-over",
      name: "Pour-Over (V60)",
      description: "Single-origin beans brewed to order, cup by cup.",
      price: 600,
      category: "Hot Coffee",
      strength: 3,
    },
    {
      id: "iced-latte",
      name: "Iced Latte",
      description: "Espresso over milk and ice, shaken cold.",
      price: 520,
      category: "Cold Coffee",
      strength: 1,
      popular: true,
    },
    {
      id: "cold-brew",
      name: "Cold Brew",
      description: "Steeped 18 hours, served over ice — smooth, never bitter.",
      price: 560,
      category: "Cold Coffee",
      strength: 3,
      popular: true,
    },
    {
      id: "iced-americano",
      name: "Iced Americano",
      description: "Double espresso, cold water, big ice.",
      price: 400,
      category: "Cold Coffee",
      strength: 2,
    },
    {
      id: "caramel-frappe",
      name: "Caramel Frappe",
      description: "Blended coffee, caramel, whipped cream — dessert in a cup.",
      price: 620,
      category: "Cold Coffee",
      strength: 1,
    },
    {
      id: "affogato",
      name: "Affogato",
      description: "Vanilla gelato drowned in a hot double shot.",
      price: 580,
      category: "Cold Coffee",
      strength: 2,
    },
    {
      id: "butter-croissant",
      name: "Butter Croissant",
      description: "Laminated and baked fresh every morning.",
      price: 350,
      category: "Bakes & Pastries",
      popular: true,
    },
    {
      id: "fudgy-brownie",
      name: "Fudgy Brownie",
      description: "Dark chocolate, sea salt, served slightly warm.",
      price: 380,
      category: "Bakes & Pastries",
    },
    {
      id: "blueberry-muffin",
      name: "Blueberry Muffin",
      description: "Bursting berries under a streusel top.",
      price: 320,
      category: "Bakes & Pastries",
    },
    {
      id: "choc-chip-cookie",
      name: "Chocolate Chip Cookie",
      description: "Thick, chewy, best with a flat white.",
      price: 250,
      category: "Bakes & Pastries",
    },
    {
      id: "banana-bread",
      name: "Banana Bread",
      description: "Toasted slice with honey butter.",
      price: 280,
      category: "Bakes & Pastries",
    },
    {
      id: "basque-cheesecake",
      name: "Basque Cheesecake",
      description: "Burnt top, creamy centre, baked in-house.",
      price: 550,
      category: "Bakes & Pastries",
      popular: true,
    },
    {
      id: "avocado-toast",
      name: "Avocado Toast",
      description: "Sourdough, smashed avocado, chilli flakes, poached egg.",
      price: 750,
      category: "Breakfast",
      popular: true,
    },
    {
      id: "breakfast-sandwich",
      name: "Breakfast Sandwich",
      description: "Egg, cheese, house sauce on a toasted brioche bun.",
      price: 650,
      category: "Breakfast",
    },
    {
      id: "shakshuka",
      name: "Shakshuka",
      description: "Baked eggs in spiced tomato, served with sourdough.",
      price: 850,
      category: "Breakfast",
    },
    {
      id: "granola-bowl",
      name: "Granola Bowl",
      description: "Toasted oats, yoghurt, honey, seasonal fruit.",
      price: 700,
      category: "Breakfast",
    },
  ],
  testimonials: [
    {
      name: "Areeba S.",
      area: "Gulberg, Lahore",
      quote:
        "Ordered two flat whites ahead on my way to work — ready in ten minutes, no queue, and no app markup.",
      rating: 5,
    },
    {
      name: "Hamza K.",
      area: "DHA, Lahore",
      quote:
        "Found them on Google and ordered pickup from the site. Cold brew was better than anything on the delivery apps — and cheaper.",
      rating: 5,
    },
    {
      name: "Zara A.",
      area: "Model Town, Lahore",
      quote: "Booked a table for a client meeting in under a minute. Our order was waiting before we sat down.",
      rating: 4,
    },
  ],
};
