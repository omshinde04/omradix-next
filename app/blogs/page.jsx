import BlogsClient from "./BlogsClient";

export const metadata = {
    title: "Tech Blogs on AI, Web Development & SaaS | Omradix Solutions India",

    description:
        "Explore expert blogs by Omradix Solutions on web development, AI technologies, SaaS platforms and digital innovation. Learn modern tech and grow your business.",

    keywords: [
        "web development blogs India",
        "AI blogs India",
        "SaaS development blogs",
        "Next.js tutorials",
        "React development blogs",
        "software development insights",
        "digital innovation blogs",
        "Omradix Solutions blogs",
        "latest tech blogs India",
        "programming blogs for developers"
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
        canonical: "/blogs",
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
        title: "Tech Blogs | Omradix Solutions",
        description:
            "Read blogs on AI, web development, SaaS and modern digital technologies.",
        url: "https://www.omradixsolutions.in/blogs",
        siteName: "Omradix Solutions",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Omradix Solutions Blogs",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Omradix Solutions Blogs",
        description:
            "Insights on AI, web development and SaaS technologies.",
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

export default function Page() {
    return <BlogsClient />;
}