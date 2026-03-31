export const metadata = {
    title: "Privacy Policy | Omradix Solutions India",

    description:
        "Read the Privacy Policy of Omradix Solutions to understand how we collect, use, protect and manage your personal data in compliance with security standards. Contact us at +91 9373545169.",

    keywords: [
        "Omradix Solutions Privacy Policy",
        "data protection policy India",
        "website privacy policy India",
        "software company privacy policy",
        "user data protection policy",
        "GDPR privacy policy website",
        "data security policy India"
    ],

    authors: [{ name: "Omradix Solutions", url: "https://www.omradixsolutions.in" }],
    creator: "Omradix Solutions",
    publisher: "Omradix Solutions",

    metadataBase: new URL("https://www.omradixsolutions.in"),

    alternates: {
        canonical: "/privacy-policy",
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
        title: "Privacy Policy | Omradix Solutions",
        description:
            "Learn how Omradix Solutions collects, uses and protects your personal data and ensures privacy compliance.",
        url: "https://www.omradixsolutions.in/privacy-policy",
        siteName: "Omradix Solutions",
        type: "article",
        locale: "en_IN",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Omradix Solutions Privacy Policy",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Omradix Solutions",
        description:
            "Understand how Omradix Solutions handles and protects your personal data securely.",
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

export default function PrivacyPolicy() {
    return (
        <div className="bg-white">

            <div className="max-w-4xl mx-auto px-6 py-24">

                <h1 className="text-4xl font-bold text-slate-900">
                    Privacy Policy
                </h1>

                <p className="mt-6 text-slate-600">
                    At <strong>Omradix Solutions</strong>, we respect your privacy and are committed
                    to protecting your personal information. This Privacy Policy explains how
                    we collect, use, disclose, and safeguard your information when you visit
                    our website or use our services.
                </p>

                <div className="mt-10 space-y-8 text-sm text-slate-600 leading-relaxed">

                    {/* INFORMATION WE COLLECT */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Information We Collect
                        </h2>

                        <p className="mt-3">
                            We may collect personal information that you voluntarily provide to us
                            when you interact with our website, contact us, or request services.
                            This may include:
                        </p>

                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>Name and contact information</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Company information</li>
                            <li>Project details or service inquiries</li>
                        </ul>

                        <p className="mt-3">
                            We may also automatically collect certain information such as
                            IP address, browser type, device information, and website usage
                            analytics.
                        </p>
                    </section>


                    {/* HOW WE USE INFORMATION */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            How We Use Your Information
                        </h2>

                        <p className="mt-3">
                            The information we collect may be used for the following purposes:
                        </p>

                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>To respond to inquiries and provide customer support</li>
                            <li>To improve our website and services</li>
                            <li>To communicate with users regarding projects or services</li>
                            <li>To analyze website traffic and usage patterns</li>
                            <li>To maintain website security and prevent fraud</li>
                        </ul>
                    </section>


                    {/* DATA SECURITY */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Data Security
                        </h2>

                        <p className="mt-3">
                            We implement appropriate technical and organizational measures
                            to protect your personal data against unauthorized access,
                            disclosure, alteration, or destruction.
                        </p>

                        <p className="mt-3">
                            While we strive to protect your personal information, no method
                            of transmission over the internet or electronic storage is
                            completely secure.
                        </p>
                    </section>


                    {/* THIRD PARTY SERVICES */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Third-Party Services
                        </h2>

                        <p className="mt-3">
                            Our website may use trusted third-party services such as analytics
                            providers to better understand user interactions and improve
                            website performance.
                        </p>

                        <p className="mt-3">
                            These third parties may collect certain information through
                            cookies or tracking technologies according to their own
                            privacy policies.
                        </p>
                    </section>


                    {/* USER RIGHTS */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Your Privacy Rights
                        </h2>

                        <p className="mt-3">
                            Depending on your location, you may have certain rights regarding
                            your personal data, including:
                        </p>

                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>The right to access your personal information</li>
                            <li>The right to request corrections</li>
                            <li>The right to request deletion of your data</li>
                            <li>The right to restrict or object to processing</li>
                        </ul>
                    </section>


                    {/* COOKIES */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Cookies and Tracking Technologies
                        </h2>

                        <p className="mt-3">
                            Our website may use cookies and similar technologies to enhance
                            user experience and analyze website traffic. For more details,
                            please review our Cookie Policy.
                        </p>
                    </section>


                    {/* POLICY UPDATES */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Changes to This Privacy Policy
                        </h2>

                        <p className="mt-3">
                            We may update this Privacy Policy from time to time to reflect
                            changes in our practices or legal requirements. We encourage
                            users to review this page periodically.
                        </p>
                    </section>


                    {/* CONTACT */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Contact Us
                        </h2>

                        <p className="mt-3">
                            If you have any questions regarding this Privacy Policy or how
                            we handle your data, please contact us:
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