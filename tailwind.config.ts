import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#241012",
        "ink-soft": "#3A1E20",
        cream: "#FBF3E6",
        "cream-dim": "#F2E7D3",
        saffron: "#E8A33D",
        "saffron-deep": "#C97F1E",
        // primary accent — roasted coffee brown for the coffee-shop theme
        chili: "#5B3A29",
        "chili-deep": "#43291B",
        brass: "#C9A24B",
        leaf: "#4B7B52",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(36,16,18,0.06) 1px, transparent 0)",
      },
      boxShadow: {
        ticket: "0 1px 0 rgba(36,16,18,0.06), 0 8px 24px -8px rgba(36,16,18,0.25)",
      },
      borderRadius: {
        ticket: "14px",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "count-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        "cart-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.5s ease-out both",
        "count-pulse": "count-pulse 2s ease-in-out infinite",
        "cart-in": "cart-in 0.3s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
