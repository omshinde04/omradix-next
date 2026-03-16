import ContactPage from "./ContactPage";

export const metadata = {
    title: "Contact Us | Omradix Solutions",
    description:
        "Contact Omradix Solutions for web development, SaaS platforms, mobile apps, and digital transformation services.",
    alternates: {
        canonical: "https://www.omradixsolutions.in/contact",
    },
    openGraph: {
        title: "Contact Omradix Solutions",
        description:
            "Let's build something amazing together. Contact Omradix Solutions for modern digital product development.",
        url: "https://www.omradixsolutions.in/contact",
        siteName: "Omradix Solutions",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Contact Omradix Solutions",
            },
        ],
    },
};

export default function Page() {
    return (
        <>
            <ContactPage />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Omradix Solutions",
                        url: "https://www.omradixsolutions.in",
                        email: "omradixsolutions@gmail.com",
                        telephone: "+91 9373545169",
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "India",
                        },
                    }),
                }}
            />
        </>
    );
}