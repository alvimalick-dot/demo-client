import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsBar from "@/components/StatsBar";
import FeaturedMenu from "@/components/FeaturedMenu";
import WhyDirect from "@/components/WhyDirect";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <StatsBar />
      <FeaturedMenu />
      <WhyDirect />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
