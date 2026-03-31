import ProjectsClient from "./ProjectsClient";

export const metadata = {
    title: "Our Projects & Case Studies | Web, AI & SaaS Portfolio India | Omradix Solutions",

    description:
        "Explore real-world projects built by Omradix Solutions including web applications, AI platforms, SaaS products and ecommerce systems. Trusted software development company in India.",

    keywords: [
        "web development portfolio India",
        "software development company projects",
        "AI project examples India",
        "SaaS application portfolio",
        "Next.js projects India",
        "React projects portfolio",
        "Omradix Solutions projects",
        "case studies software development",
        "custom web applications portfolio",
        "digital product development company India"
    ],

    authors: [
        {
            name: "Omradix Solutions",
            url: "https://www.omradixsolutions.in"
        }
    ],

    creator: "Omradix Solutions",
    publisher: "Omradix Solutions",

    metadataBase: new URL("https://www.omradixsolutions.in"),

    alternates: {
        canonical: "/projects",
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
        title: "Our Projects | Omradix Solutions Portfolio",
        description:
            "View real-world web, AI and SaaS projects developed by Omradix Solutions. Explore our portfolio and case studies.",
        url: "https://www.omradixsolutions.in/projects",
        siteName: "Omradix Solutions",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/images/projects/Abcorp.png",
                width: 1200,
                height: 630,
                alt: "Omradix Solutions Projects Portfolio",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Omradix Solutions Projects",
        description:
            "Explore our portfolio of web, AI and SaaS development projects.",
        images: ["/images/projects/Abcorp.png"],
    },

    category: "technology",

    other: {
        "geo.region": "IN",
        "geo.placename": "India",
        "contact:phone_number": "+91 9373545169",
        "contact:email": "omradixsolutions@gmail.com",
    },
};

export default function Page() {
    return <ProjectsClient />;
}