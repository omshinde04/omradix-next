import AboutHero from "../../components/about/AboutHero";
import AboutImpact from "../../components/about/AboutImpact";
import AboutValues from "../../components/about/AboutValues";
import AboutCTA from "../../components/about/AboutCTA";

/* ================= SEO METADATA ================= */

export const metadata = {
    title: "About Omradix Solutions | Web, AI & SaaS Development Company India",

    description:
        "Omradix Solutions is a modern software development company in India specializing in web development, AI systems, SaaS platforms and scalable digital products for startups and enterprises.",

    keywords: [
        "About Omradix Solutions",
        "Software Development Company India",
        "Web Development Company India",
        "AI Development Company India",
        "Next.js Development Company",
        "React Development Company",
        "Custom Software Development India",
        "Startup Tech Partner India",
        "SaaS Development Company"
    ],

    authors: [{ name: "Omradix Solutions", url: "https://www.omradixsolutions.in" }],
    creator: "Omradix Solutions",
    publisher: "Omradix Solutions",

    metadataBase: new URL("https://www.omradixsolutions.in"),

    alternates: {
        canonical: "/about",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    openGraph: {
        title: "About Omradix Solutions | Digital Product & AI Company India",
        description:
            "Discover Omradix Solutions – a next-generation software company building scalable web applications, AI systems and SaaS platforms.",
        url: "https://www.omradixsolutions.in/about",
        siteName: "Omradix Solutions",
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Omradix Solutions About Page",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "About Omradix Solutions",
        description:
            "Learn about Omradix Solutions and how we build scalable digital products.",
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

/* ================= PAGE ================= */

export default function AboutPage() {
    return (
        <>
            {/* ================= STRUCTURED DATA ================= */}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Omradix Solutions",
                        url: "https://www.omradixsolutions.in",
                        logo: "https://www.omradixsolutions.in/logo.png",
                        description:
                            "Omradix Solutions is a modern software development company specializing in web development, mobile apps, SaaS products and AI solutions.",
                        email: "omradixsolutions@gmail.com",
                        telephone: [
                            "+919373545169",
                            "+917378534650"
                        ],
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "India"
                        },
                        sameAs: [
                            "https://linkedin.com/company/omradix",
                            "https://instagram.com/omradix"
                        ],
                    }),
                }}
            />

            <main className="bg-white">
                <AboutHero />
                <AboutImpact />
                <AboutValues />
                <AboutCTA />
            </main>
        </>
    );
}