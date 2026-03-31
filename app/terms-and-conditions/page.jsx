export const metadata = {
    title: "Terms and Conditions | Omradix Solutions India",

    description:
        "Read the Terms and Conditions of Omradix Solutions governing the use of our website and services, including intellectual property, liability limitations and user responsibilities. Contact us at +91 9373545169.",

    keywords: [
        "Omradix Solutions terms and conditions",
        "website terms and conditions India",
        "software development company terms",
        "service terms and policies India",
        "user agreement Omradix Solutions",
        "legal terms software company India",
        "website usage policy India"
    ],

    authors: [{ name: "Omradix Solutions", url: "https://www.omradixsolutions.in" }],
    creator: "Omradix Solutions",
    publisher: "Omradix Solutions",

    metadataBase: new URL("https://www.omradixsolutions.in"),

    alternates: {
        canonical: "/terms-and-conditions",
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
        title: "Terms and Conditions | Omradix Solutions",
        description:
            "Understand the legal terms and conditions for using Omradix Solutions website and services.",
        url: "https://www.omradixsolutions.in/terms-and-conditions",
        siteName: "Omradix Solutions",
        type: "article",
        locale: "en_IN",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Omradix Solutions Terms and Conditions",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Terms and Conditions | Omradix Solutions",
        description:
            "Review the terms governing the use of Omradix Solutions website and services.",
        images: ["/og-image.png"],
    },

    category: "legal",

    other: {
        "geo.region": "IN",
        "geo.placename": "India",
        "contact:phone_number": "+91 9373545169",
        "contact:email": "omradixsolutions@gmail.com",
    },
};

export default function TermsConditions() {
    return (
        <div className="bg-white">

            <div className="max-w-4xl mx-auto px-6 py-24">

                <h1 className="text-4xl font-bold text-slate-900">
                    Terms and Conditions
                </h1>

                <p className="mt-6 text-slate-600">
                    Welcome to <strong>Omradix Solutions</strong>. By accessing and using our
                    website and services, you agree to comply with and be bound by the
                    following Terms and Conditions. These terms apply to all visitors,
                    users, and others who access our website.
                </p>

                <div className="mt-10 space-y-8 text-slate-600 text-sm leading-relaxed">


                    {/* ACCEPTANCE OF TERMS */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Acceptance of Terms
                        </h2>

                        <p className="mt-3">
                            By accessing this website, you acknowledge that you have read,
                            understood, and agree to be bound by these Terms and Conditions
                            and all applicable laws and regulations.
                        </p>

                        <p className="mt-3">
                            If you do not agree with any part of these terms, you should not
                            use this website.
                        </p>
                    </section>


                    {/* USE OF WEBSITE */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Use of Website
                        </h2>

                        <p className="mt-3">
                            The content on this website is provided for general information
                            about our services including web development, mobile application
                            development, and digital technology solutions.
                        </p>

                        <p className="mt-3">
                            Users agree to use this website only for lawful purposes and in a
                            way that does not infringe upon the rights of others or restrict
                            the use of this website by other users.
                        </p>
                    </section>


                    {/* INTELLECTUAL PROPERTY */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Intellectual Property
                        </h2>

                        <p className="mt-3">
                            All content, branding, design elements, graphics, text, and
                            materials available on this website are the intellectual property
                            of Omradix Solutions unless otherwise stated.
                        </p>

                        <p className="mt-3">
                            Unauthorized reproduction, distribution, or use of website
                            materials without written permission is strictly prohibited.
                        </p>
                    </section>


                    {/* LIMITATION OF LIABILITY */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Limitation of Liability
                        </h2>

                        <p className="mt-3">
                            Omradix Solutions shall not be held liable for any direct,
                            indirect, incidental, or consequential damages arising from the
                            use or inability to use the website or its services.
                        </p>

                        <p className="mt-3">
                            While we strive to provide accurate and up-to-date information,
                            we do not guarantee the completeness or reliability of any
                            content provided on this website.
                        </p>
                    </section>


                    {/* THIRD PARTY LINKS */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Third-Party Links
                        </h2>

                        <p className="mt-3">
                            Our website may contain links to third-party websites or services
                            that are not owned or controlled by Omradix Solutions.
                        </p>

                        <p className="mt-3">
                            We are not responsible for the content, privacy policies, or
                            practices of any third-party websites.
                        </p>
                    </section>


                    {/* MODIFICATIONS */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Changes to Terms
                        </h2>

                        <p className="mt-3">
                            Omradix Solutions reserves the right to modify or update these
                            Terms and Conditions at any time without prior notice.
                        </p>

                        <p className="mt-3">
                            Continued use of the website after changes are made constitutes
                            acceptance of the updated terms.
                        </p>
                    </section>


                    {/* GOVERNING LAW */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Governing Law
                        </h2>

                        <p className="mt-3">
                            These Terms and Conditions shall be governed and interpreted in
                            accordance with the laws of India.
                        </p>
                    </section>


                    {/* CONTACT */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Contact Information
                        </h2>

                        <p className="mt-3">
                            If you have any questions about these Terms and Conditions,
                            please contact us:
                        </p>

                        <p className="mt-3">
                            <strong>Email:</strong> omradixsolutions@gmail.com
                        </p>

                        <p>
                            <strong>Phone:</strong> +91 9373545169
                        </p>

                        <p>
                            <strong>Website:</strong> https://www.omradixsolutions.in
                        </p>
                    </section>


                </div>

            </div>

        </div>
    );
}