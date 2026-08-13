import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WordCascade from "@/components/WordCascade";
import StepsBar from "@/components/StepsBar";
import Marquee from "@/components/Marquee";
import FeaturedMenu from "@/components/FeaturedMenu";
import WhyDirect from "@/components/WhyDirect";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import OrderTicker from "@/components/OrderTicker";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WordCascade />
      <StepsBar />
      <Marquee />
      <FeaturedMenu />
      <WhyDirect />
      <Testimonials />
      <CTA />
      <Footer />
      <OrderTicker />
    </main>
  );
}
