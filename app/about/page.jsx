import AboutHero from "../../components/about/AboutHero";
import AboutImpact from "../../components/about/AboutImpact";
import AboutValues from "../../components/about/AboutValues";
import AboutCTA from "../../components/about/AboutCTA";

export const metadata = {
    title: "About Us",

    description:
        "Learn about Omradix Solutions, a modern software development company delivering scalable web applications, mobile apps, and digital transformation solutions for startups and enterprises.",

    keywords: [
        "About Omradix Solutions",
        "Software Development Company India",
        "Next.js Development Company",
        "React Development Company",
        "Custom Software Development",
        "Startup Tech Partner",
        "Omradix Solutions Company"
    ],

    alternates: {
        canonical: "https://www.omradixsolutions.in/about",
    },

    openGraph: {
        title: "About Omradix Solutions",
        description:
            "Discover the mission, vision, and values of Omradix Solutions – a next-generation software development company building scalable digital solutions.",
        url: "https://www.omradixsolutions.in/about",
        siteName: "Omradix Solutions",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "About Omradix Solutions",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "About Omradix Solutions",
        description:
            "Learn about Omradix Solutions and our mission to build modern digital products.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutPage() {
    return (
        <>
            {/* Structured Data for Google */}
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
                            "Omradix Solutions is a modern software development company specializing in web development, mobile apps, SaaS products, and digital transformation.",
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