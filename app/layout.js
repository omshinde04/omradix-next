import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import WhatsAppChat from "../components/whatsapp/WhatsAppChat";
import Footer from "../components/footer/Footer";
import SmoothScroll from "../components/smoothscrool/SmoothScroll";
import CookieBanner from "../components/global/CookieBanner";
import { Inter } from "next/font/google";

// ✅ IMPORT YOUR AI AGENT
// import AIWidget from "../components/agent/AIWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.omradixsolutions.in"),

  title: {
    default: "Omradix Solutions | Software Development Company",
    template: "%s | Omradix Solutions",
  },

  description:
    "Omradix Solutions is a modern software development company providing web development, SaaS development, mobile applications, UI/UX design, and scalable digital solutions for startups and enterprises.",

  keywords: [
    "Omradix Solutions",
    "Software Development Company India",
    "Web Development Company",
    "Next.js Development Company",
    "React Development Company",
    "Mobile App Development",
    "SaaS Development",
    "Custom Software Development",
    "Startup Tech Partner",
    "Digital Transformation Services",
  ],

  authors: [
    {
      name: "Omradix Solutions",
      url: "https://www.omradixsolutions.in",
    },
  ],

  creator: "Omradix Solutions",
  publisher: "Omradix Solutions",

  alternates: {
    canonical: "https://www.omradixsolutions.in",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Omradix Solutions | Software Development Company",
    description:
      "We build modern websites, scalable SaaS products, mobile applications, and enterprise digital solutions.",
    url: "https://www.omradixsolutions.in",
    siteName: "Omradix Solutions",
    locale: "en_US",
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

  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-backgroundLight text-textPrimary antialiased`}
      >
        <SmoothScroll>

          <Navbar />

          <main>{children}</main>

          {/* 🤖 AI AGENT (ABOVE WHATSAPP) */}
          {/* <AIWidget /> */}

          {/* 💬 WHATSAPP */}
          <WhatsAppChat />

          <Footer />

          {/* 🍪 COOKIE BANNER */}
          <CookieBanner />

        </SmoothScroll>
      </body>
    </html>
  );
}