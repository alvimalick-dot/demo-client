/**
 * Colorful per-category identity for menu items.
 * Fallback keeps new/unknown categories on-brand (amber).
 */
export type CategoryTheme = {
  emoji: string;
  /** avatar chip */
  chip: string;
  /** small text / icon accent */
  accent: string;
  /** soft radial glow behind the card */
  glow: string;
};

export const CATEGORY_THEME: Record<string, CategoryTheme> = {
  "Hot Coffee": {
    emoji: "☕",
    chip: "bg-saffron/15 text-saffron",
    accent: "text-saffron",
    glow: "radial-gradient(70% 60% at 20% 0%, rgba(224,168,60,0.10) 0%, transparent 70%)",
  },
  "Cold Coffee": {
    emoji: "🧊",
    chip: "bg-sky/15 text-sky",
    accent: "text-sky",
    glow: "radial-gradient(70% 60% at 20% 0%, rgba(111,182,216,0.12) 0%, transparent 70%)",
  },
  "Bakes & Pastries": {
    emoji: "🥐",
    chip: "bg-rose/15 text-rose",
    accent: "text-rose",
    glow: "radial-gradient(70% 60% at 20% 0%, rgba(232,115,138,0.12) 0%, transparent 70%)",
  },
  Breakfast: {
    emoji: "🍳",
    chip: "bg-mint/15 text-mint",
    accent: "text-mint",
    glow: "radial-gradient(70% 60% at 20% 0%, rgba(143,201,160,0.12) 0%, transparent 70%)",
  },
};

export const FALLBACK_THEME: CategoryTheme = {
  emoji: "☕",
  chip: "bg-saffron/15 text-saffron",
  accent: "text-saffron",
  glow: "radial-gradient(70% 60% at 20% 0%, rgba(224,168,60,0.10) 0%, transparent 70%)",
};

export function themeFor(category: string): CategoryTheme {
  return CATEGORY_THEME[category] ?? FALLBACK_THEME;
}
