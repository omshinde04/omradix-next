import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactCTA from "../../components/contact/ContactCTA";

/* ================= SEO METADATA ================= */

export const metadata = {
    title: "Contact Web Development Company India | Omradix Solutions",

    description:
        "Contact Omradix Solutions to build scalable websites, mobile apps, AI systems and SaaS platforms. Hire expert developers in India. Call +91 9373545169.",

    keywords: [
        "contact web development company India",
        "hire developers India",
        "AI development company India",
        "SaaS development India",
        "mobile app development India",
        "software development company India"
    ],

    metadataBase: new URL("https://www.omradixsolutions.in"),

    alternates: {
        canonical: "/contact",
    },

    openGraph: {
        title: "Contact Omradix Solutions",
        description:
            "Have a project idea? Contact our engineering team to build scalable digital products.",
        url: "https://www.omradixsolutions.in/contact",
        siteName: "Omradix Solutions",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Omradix Solutions",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Omradix Solutions",
        description:
            "Hire expert developers for web, AI and SaaS solutions in India.",
        images: ["/images/og-image.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },

    other: {
        "geo.region": "IN",
        "geo.placename": "India",
        "contact:phone_number": "+91 9373545169",
        "contact:email": "omradixsolutions@gmail.com",
    },
};

/* ================= PAGE ================= */

export default function ContactPage() {

    return (
        <main className="bg-white">

            {/* JSON-LD (VERY IMPORTANT SEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Omradix Solutions",
                        url: "https://www.omradixsolutions.in",
                        email: "omradixsolutions@gmail.com",
                        telephone: [
                            "+919373545169",
                            "+917378534650"
                        ],
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "India"
                        }
                    })
                }}
            />

            {/* HERO */}
            <ContactHero />

            {/* CONTACT SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14">

                <ContactForm />

                <ContactInfo />

            </section>

            {/* FINAL CTA */}
            <ContactCTA />

        </main>
    );
}