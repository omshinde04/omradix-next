export const metadata = {
  title: "Omradix Solutions | Software Development Company",

  description:
    "Omradix Solutions is a modern software development company providing web development, mobile applications, SaaS platforms, data analytics, and scalable digital solutions for startups and enterprises.",

  keywords: [
    "Omradix Solutions",
    "Software Development Company",
    "Web Development Company India",
    "React Development Company",
    "Next.js Development",
    "Mobile App Development",
    "SaaS Development",
    "Data Analytics Services",
    "Custom Software Development",
    "Startup Technology Partner",
  ],

  alternates: {
    canonical: "https://www.omradixsolutions.in",
  },

  openGraph: {
    title: "Omradix Solutions | Modern Software Development Company",
    description:
      "We build scalable web applications, mobile apps, SaaS platforms, and digital products for startups and businesses.",
    url: "https://www.omradixsolutions.in",
    siteName: "Omradix Solutions",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Omradix Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Omradix Solutions",
    description:
      "Next generation software development company building scalable digital products.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

import Script from "next/script";

import Hero from "../components/hero/Hero";
import HeroMobile from "../components/hero/HeroMobile";
import CoreSolutions from "../components/sections/CoreSolutions";
import PricingSection from "../components/sections/PricingSection";
import WhyTrustSection from "../components/sections/WhyTrustSection";
import TechStackSection from "../components/sections/TechStackSection.jsx";

export default function Home() {
  return (
    <>
      {/* 🔥 LOGO STRUCTURED DATA (IMPORTANT FOR GOOGLE) */}

      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Omradix Solutions",
            url: "https://www.omradixsolutions.in",
            logo: "https://www.omradixsolutions.in/logo.png",
          }),
        }}
      />

      <Hero />
      <HeroMobile />
      <CoreSolutions />
      <PricingSection />
      <WhyTrustSection />
      <TechStackSection />
    </>
  );
}