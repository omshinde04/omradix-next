import "./globals.css";
import WhatsAppChat from "../components/whatsapp/WhatsAppChat";
import SmoothScroll from "../components/smoothscrool/SmoothScroll";
import AppClientWrapper from "../components/global/AppClientWrapper";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.omradixsolutions.in"),

  title: {
    default: "Omradix Solutions | Software Development Company India",
    template: "%s | Omradix Solutions",
  },

  description:
    "Omradix Solutions is a leading software development company in India offering web development, SaaS platforms, mobile apps, AI solutions and scalable digital products for startups and enterprises.",

  keywords: [
    "Omradix Solutions",
    "Software Development Company India",
    "Web Development Company India",
    "Next.js Development Company",
    "React Development Company",
    "AI Development Company India",
    "SaaS Development Company",
    "Mobile App Development India",
    "Custom Software Development",
    "Startup Tech Partner India",
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Omradix Solutions | Software Development Company India",
    description:
      "We build scalable web applications, SaaS platforms, AI systems and modern digital products.",
    url: "https://www.omradixsolutions.in",
    siteName: "Omradix Solutions",
    locale: "en_IN",
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
      "Modern software development company building scalable digital products.",
    images: ["/og-image.png"],
  },

  category: "technology",

  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "contact:phone_number": "+91 9373545169",
    "contact:email": "omradixsolutions@gmail.com",
  },
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

          {/* ✅ CLIENT CONTROLLED APP */}
          <AppClientWrapper>
            {children}
          </AppClientWrapper>

          {/* FLOATING */}
          <WhatsAppChat />

        </SmoothScroll>
      </body>
    </html>
  );
}