"use client";

import Head from "next/head";
import ContactHero from "../../components/contact/ContactHero"
import ContactForm from "../../components/contact/ContactForm"
import ContactInfo from "../../components/contact/ContactInfo"
import ContactCTA from "../../components/contact/ContactCTA"

export const metadata = {
    title: "Contact Web Development Company India | Omradix Solutions",
    description:
        "Get in touch with Omradix Solutions for web development, AI solutions, SaaS platforms and digital services in India. Call +91 9373545169 or email omradixsolutions@gmail.com.",

    keywords: [
        "contact web development company India",
        "hire software developers India",
        "AI development company India",
        "SaaS development India",
        "custom web development services India",
        "Omradix Solutions contact",
        "software company India contact",
        "Next.js development company India"
    ],

    authors: [{ name: "Omradix Solutions", url: "https://www.omradixsolutions.in" }],
    creator: "Omradix Solutions",
    publisher: "Omradix Solutions",

    metadataBase: new URL("https://www.omradixsolutions.in"),

    alternates: {
        canonical: "/contact",
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
        title: "Contact Omradix Solutions | Web & AI Development India",
        description:
            "Contact Omradix Solutions for scalable web development, AI systems, SaaS platforms and digital products.",
        url: "https://www.omradixsolutions.in/contact",
        siteName: "Omradix Solutions",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Omradix Solutions Contact Page",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Omradix Solutions",
        description:
            "Hire expert developers for web, AI and SaaS solutions in India.",
        images: ["/images/og-image.jpg"],
    },

    category: "technology",

    other: {
        "geo.region": "IN",
        "geo.placename": "India",
        "contact:phone_number": "+91 9373545169",
        "contact:email": "omradixsolutions@gmail.com",
    },
};

export default function ContactPage() {

    return (

        <>
            {/* SEO META */}

            <Head>

                <title>
                    Contact Us | OmRadix Solutions
                </title>

                <meta
                    name="description"
                    content="Contact OmRadix Solutions to build scalable websites, mobile apps, AI systems and cloud platforms. Our engineers will respond within 24 hours."
                />

                <meta
                    name="keywords"
                    content="web development company, mobile app development, SaaS development, AI solutions, software development India"
                />

                <meta
                    property="og:title"
                    content="Contact OmRadix Solutions"
                />

                <meta
                    property="og:description"
                    content="Have a project idea? Contact our engineering team to build scalable digital products."
                />

                <meta
                    property="og:type"
                    content="website"
                />

            </Head>


            <main className="bg-white">

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

        </>
    );

}