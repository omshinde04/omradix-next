import Hero from "../components/hero/Hero";
import HeroMobile from "../components/hero/HeroMobile";
import CoreSolutions from "../components/sections/CoreSolutions";
import PricingSection from "../components/sections/PricingSection";
import WhyTrustSection from "../components/sections/WhyTrustSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroMobile />
      <CoreSolutions />
      <PricingSection />
      <WhyTrustSection />
    </>
  );
}