import ServicesHero from "../../components/services/ServicesHero";
import ServicesGrid from "../../components/services/ServicesGrid";
import ServicesProcess from "../../components/services/ServicesProcess";

/* ================= SEO METADATA ================= */

export const metadata = {
    title: "Web Development, AI & SaaS Services India | Omradix Solutions",

    description:
        "Omradix Solutions provides professional web development, AI systems, SaaS platforms, mobile apps and custom software development services in India. Hire expert developers today.",

    keywords: [
        "web development services India",
        "AI development company India",
        "SaaS development services",
        "custom software development India",
        "hire developers India",
        "Next.js development company",
        "React development services",
        "mobile app development India",
        "software company services India",
        "digital product development services"
    ],

    authors: [{ name: "Omradix Solutions", url: "https://www.omradixsolutions.in" }],
    creator: "Omradix Solutions",
    publisher: "Omradix Solutions",

    metadataBase: new URL("https://www.omradixsolutions.in"),

    alternates: {
        canonical: "/services",
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

    openGraph: {
        title: "Our Services | Web, AI & SaaS Development",
        description:
            "Explore web development, AI, SaaS and mobile app services by Omradix Solutions. Build scalable digital products.",
        url: "https://www.omradixsolutions.in/services",
        siteName: "Omradix Solutions",
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/images/services/business-websites.jpg",
                width: 1200,
                height: 630,
                alt: "Omradix Solutions Services",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Omradix Solutions Services",
        description:
            "Professional web, AI and SaaS development services in India.",
        images: ["/images/services/business-websites.jpg"],
    },

    category: "technology",

    other: {
        "geo.region": "IN",
        "geo.placename": "India",
        "contact:phone_number": "+91 9373545169",
        "contact:email": "omradixsolutions@gmail.com",
    },
};

/* ================= PAGE ================= */

export default function ServicesPage() {

    return (
        <main className="bg-white">

            {/* ================= JSON-LD (ORGANIZATION) ================= */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Omradix Solutions",
                        url: "https://www.omradixsolutions.in",
                        logo: "https://www.omradixsolutions.in/logo.png",
                        email: "omradixsolutions@gmail.com",
                        telephone: ["+919373545169", "+917378534650"],
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "India"
                        }
                    })
                }}
            />

            {/* ================= JSON-LD (SERVICES) ================= */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        serviceType: "Software Development Services",
                        provider: {
                            "@type": "Organization",
                            name: "Omradix Solutions",
                            url: "https://www.omradixsolutions.in"
                        },
                        areaServed: {
                            "@type": "Country",
                            name: "India"
                        },
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Development Services",
                            itemListElement: [
                                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
                                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Development" } },
                                { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Development" } },
                                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } }
                            ]
                        }
                    })
                }}
            />

            {/* ================= UI ================= */}

            <ServicesHero />

            <ServicesGrid />

            <ServicesProcess />

        </main>
    );
}