import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Menu from "@/components/Menu";
import WhyDirect from "@/components/WhyDirect";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Menu />
      <WhyDirect />
      <Location />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
