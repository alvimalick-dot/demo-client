import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/data/restaurant.config";
import { CartProvider } from "@/components/CartProvider";
import CartDrawer from "@/components/CartDrawer";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-raw",
  weight: ["400", "500", "600", "700", "900"],
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body-raw",
  weight: ["400", "500", "600", "700"],
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-raw",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${restaurant.name} | Coffee, Order Online`,
  description: restaurant.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
