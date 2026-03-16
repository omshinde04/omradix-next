export const metadata = {
    title: "Cookie Policy | Omradix Solutions",
    description:
        "Read the Cookie Policy of Omradix Solutions to understand how we use cookies, tracking technologies, and analytics tools to improve your browsing experience on our website.",
    keywords: [
        "Cookie Policy Omradix Solutions",
        "Website cookies policy",
        "Tracking technologies policy",
        "Web analytics cookies",
        "Privacy and cookies",
        "Software company cookie policy"
    ],
    alternates: {
        canonical: "https://www.omradixsolutions.in/cookie-policy",
    },
    openGraph: {
        title: "Cookie Policy | Omradix Solutions",
        description:
            "Learn how Omradix Solutions uses cookies and tracking technologies to enhance user experience and website performance.",
        url: "https://www.omradixsolutions.in/cookie-policy",
        siteName: "Omradix Solutions",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Omradix Solutions Cookie Policy",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cookie Policy | Omradix Solutions",
        description:
            "Understand how cookies and tracking technologies are used on the Omradix Solutions website.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CookiePolicy() {
    return (
        <div className="bg-white">

            <div className="max-w-4xl mx-auto px-6 py-24">

                <h1 className="text-4xl font-bold text-slate-900">
                    Cookie Policy
                </h1>

                <p className="mt-6 text-slate-600">
                    This Cookie Policy explains how <strong>Omradix Solutions</strong> uses cookies and
                    similar technologies to recognize you when you visit our website.
                    It explains what these technologies are, why we use them, and your
                    rights to control our use of them.
                </p>


                <div className="mt-10 space-y-8 text-slate-600 text-sm leading-relaxed">

                    {/* WHAT ARE COOKIES */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            What Are Cookies?
                        </h2>

                        <p className="mt-3">
                            Cookies are small text files stored on your computer or mobile device
                            when you visit a website. They help websites function efficiently,
                            remember user preferences, and provide website owners with valuable
                            insights into how visitors interact with the site.
                        </p>

                        <p className="mt-3">
                            Cookies can be either temporary (session cookies) or persistent
                            cookies that remain on your device until they expire or are deleted.
                        </p>
                    </section>


                    {/* WHY WE USE COOKIES */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Why We Use Cookies
                        </h2>

                        <p className="mt-3">
                            Omradix Solutions uses cookies for several reasons, including:
                        </p>

                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>To ensure our website functions properly</li>
                            <li>To remember user preferences and settings</li>
                            <li>To analyze website traffic and user behavior</li>
                            <li>To improve performance and user experience</li>
                            <li>To help protect against security threats</li>
                        </ul>
                    </section>


                    {/* TYPES OF COOKIES */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Types of Cookies We Use
                        </h2>

                        <p className="mt-3">
                            The cookies used on our website may fall into the following categories:
                        </p>

                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>
                                <strong>Essential Cookies:</strong> These cookies are necessary for
                                the website to function properly.
                            </li>

                            <li>
                                <strong>Performance Cookies:</strong> These cookies help us analyze
                                how visitors use our website so we can improve its functionality.
                            </li>

                            <li>
                                <strong>Functional Cookies:</strong> These cookies allow the website
                                to remember your preferences such as language or region.
                            </li>

                            <li>
                                <strong>Analytics Cookies:</strong> These cookies help us measure
                                traffic and analyze how users interact with our website.
                            </li>
                        </ul>
                    </section>


                    {/* THIRD PARTY COOKIES */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Third-Party Cookies
                        </h2>

                        <p className="mt-3">
                            In some cases, we may use cookies provided by trusted third-party
                            services. These cookies help us understand website usage,
                            improve performance, and provide better services to our users.
                        </p>

                        <p className="mt-3">
                            For example, analytics services such as Google Analytics may
                            use cookies to collect information about how visitors interact
                            with the website.
                        </p>
                    </section>


                    {/* MANAGING COOKIES */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Managing and Disabling Cookies
                        </h2>

                        <p className="mt-3">
                            Most web browsers allow you to control cookies through their
                            settings preferences. You can choose to block or delete cookies
                            at any time.
                        </p>

                        <p className="mt-3">
                            However, disabling cookies may affect certain functionalities
                            of the website and could impact your browsing experience.
                        </p>
                    </section>


                    {/* POLICY UPDATES */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Updates to This Policy
                        </h2>

                        <p className="mt-3">
                            We may update this Cookie Policy from time to time to reflect
                            changes in technology, legal requirements, or our business
                            practices. We encourage users to review this page periodically
                            for the latest information.
                        </p>
                    </section>


                    {/* CONTACT */}

                    <section>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Contact Us
                        </h2>

                        <p className="mt-3">
                            If you have any questions about our Cookie Policy or how we
                            use cookies, please contact us at:
                        </p>

                        <p className="mt-3">
                            <strong>Email:</strong> omradixsolutions@gmail.com
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