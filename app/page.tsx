import Navbar      from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar     from "@/components/LogoBar";
import Features    from "@/components/Features";
import HowItWorks  from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing     from "@/components/Pricing";
import CTA         from "@/components/CTA";
import Footer      from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Scroll-aware navbar (dark over hero, white after scroll) */}
      <Navbar />

      {/* Enterprise hero — full viewport, dark theme */}
      <HeroSection />

      {/* Light sections below */}
      <LogoBar />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
