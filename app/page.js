import Hero from "@/components/hero/Hero";
import HeroMobile from "@/components/hero/HeroMobile";
import CoreSolutions from "@/components/sections/CoreSolutions";


export default function Home() {
  return (
    <main>
      <HeroMobile />
      <Hero />
      <CoreSolutions />
    </main>
  );
}