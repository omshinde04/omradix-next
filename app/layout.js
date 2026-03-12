import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import WhatsAppChat from "@/components/whatsapp/WhatsAppChat";
// import Footer from "@/components/footer/Footer";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/smoothscrool/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.omradixsolutions.in"),
  title: {
    default: "Omradix Solutions",
    template: "%s | Omradix Solutions",
  },
  description:
    "Omradix Solutions is a next-generation software development company specializing in web development, mobile applications, and digital transformation.",
  keywords: [
    "Web Development Company",
    "Software Development",
    "React Development",
    "Next.js Development",
    "Mobile App Development",
    "Omradix Solutions",
  ],
  openGraph: {
    title: "Omradix Solutions",
    description:
      "Next Generation Software Development Company building scalable digital products.",
    url: "https://www.omradixsolutions.in",
    siteName: "Omradix Solutions",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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

          {/* Floating WhatsApp Button */}
          <WhatsAppChat />

          {/* <Footer /> */}
        </SmoothScroll>
      </body>
    </html>
  );
}