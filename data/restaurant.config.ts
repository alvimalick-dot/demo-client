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
  name: "Kolachi Restaurant",
  shortName: "Kolachi",
  cuisine: "Pakistani & BBQ",
  city: "Karachi",
  tagline: "Charcoal-grilled classics on the water, since day one.",
  heroImage:
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
  phone: "+92 21 1111 1001",
  whatsapp: "922111111001",
  address: "Do Darya, Phase 8, DHA, Karachi",
  mapsQuery: "Kolachi Restaurant Karachi",
  hours: [
    { day: "Mon – Thu", time: "1:00 PM – 12:00 AM" },
    { day: "Fri – Sun", time: "1:00 PM – 1:00 AM" },
  ],
  // pulled straight from the lead sheet's monthly search-volume column
  monthlySearches: 7715,
  rating: 4.6,
  reviewCount: 812,
  avgDeliveryMins: 35,
  socials: { instagram: "#", facebook: "#" },
  menu: [
    {
      id: "seekh-kebab",
      name: "Beef Seekh Kebab",
      description: "Hand-minced beef, charcoal-grilled, served with mint chutney and naan.",
      price: 950,
      category: "BBQ",
      spicy: 2,
      popular: true,
    },
    {
      id: "malai-boti",
      name: "Chicken Malai Boti",
      description: "Cream-marinated chicken chunks, slow-grilled to a smoky finish.",
      price: 890,
      category: "BBQ",
      spicy: 1,
    },
    {
      id: "mutton-chops",
      name: "Mutton Chops",
      description: "Marinated overnight, grilled over coals, finished with lemon and chaat masala.",
      price: 1450,
      category: "BBQ",
      spicy: 2,
    },
    {
      id: "karahi-chicken",
      name: "Chicken Karahi (Half)",
      description: "Hand-tossed tomato-based karahi, fresh ginger and green chili.",
      price: 1350,
      category: "Karahi",
      spicy: 2,
      popular: true,
    },
    {
      id: "karahi-mutton",
      name: "Mutton Karahi (Half)",
      description: "Slow-cooked on high flame, finished with a ladle of desi ghee.",
      price: 1950,
      category: "Karahi",
      spicy: 2,
    },
    {
      id: "biryani",
      name: "Kolachi Special Biryani",
      description: "Layered basmati, tender chicken, and a raita on the side.",
      price: 650,
      category: "Rice",
      spicy: 3,
      popular: true,
    },
    {
      id: "pulao",
      name: "Mutton Yakhni Pulao",
      description: "Slow-simmered mutton stock rice, whole spices, fried onions.",
      price: 780,
      category: "Rice",
      spicy: 1,
    },
    {
      id: "daal-mash",
      name: "Daal Mash",
      description: "Slow-cooked black lentils finished with tempered garlic and cumin.",
      price: 480,
      category: "Sides",
    },
    {
      id: "raita",
      name: "Mint Raita",
      description: "Whisked yoghurt, fresh mint, roasted cumin.",
      price: 180,
      category: "Sides",
    },
    {
      id: "naan",
      name: "Tandoori Naan (2 pcs)",
      description: "Fresh from the clay oven, brushed with butter.",
      price: 140,
      category: "Sides",
    },
    {
      id: "kheer",
      name: "Kheer",
      description: "Slow-reduced rice pudding, cardamom, pistachio.",
      price: 320,
      category: "Dessert",
    },
    {
      id: "kulfi",
      name: "Falooda Kulfi",
      description: "Classic malai kulfi with falooda noodles and rose syrup.",
      price: 380,
      category: "Dessert",
      popular: true,
    },
  ],
  testimonials: [
    {
      name: "Ayesha R.",
      area: "DHA, Karachi",
      quote:
        "Ordered directly from their site instead of a delivery app — food showed up faster and it was cheaper. Wish more places did this.",
      rating: 5,
    },
    {
      name: "Bilal M.",
      area: "Clifton, Karachi",
      quote:
        "The seekh kebabs are consistently good. Found them on Google, site made it easy to see the menu before calling.",
      rating: 5,
    },
    {
      name: "Sana K.",
      area: "Gulshan, Karachi",
      quote: "Booked a table for eight in under a minute. No back-and-forth on the phone.",
      rating: 4,
    },
  ],
};
