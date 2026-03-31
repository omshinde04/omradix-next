"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

    authors: [{ name: "Omradix Solutions", url: "https://www.omradixsolutions.in" }],
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
        type: "website",
        locale: "en_IN",
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

const filters = [
    "All",
    "Corporate Website",
    "AI Platform",
    "Automation Platform",
    "E-Commerce Platform",
    "Management System",
];

const projects = [
    {
        name: "AB Corp India",
        category: "Corporate Website",
        description:
            "Professional corporate website designed to improve digital presence and showcase company services.",
        image: "/images/projects/Abcorp.png",
        url: "https://abcorpindia.com",
    },
    {
        name: "CARPS India",
        category: "Corporate Website",
        description:
            "Modern company website focused on credibility, services showcase and improved online visibility.",
        image: "/images/projects/carpsindia.png",
        url: "https://carpsindia.com",
    },
    {
        name: "PhishScan",
        category: "AI Platform",
        description:
            "AI-powered phishing detection platform analyzing suspicious emails and URLs to protect organizations.",
        image: "/images/projects/AI-Based.png",
        url: "https://phishscan.vercel.app/",
    },
    {
        name: "MindWell AI",
        category: "AI Platform",
        description:
            "AI-driven wellness platform providing personalized habit insights and mental health tracking.",
        image: "/images/projects/Ai-wellness.png",
        url: "https://a-iwellness.vercel.app/",
    },
    {
        name: "CertiGen",
        category: "Automation Platform",
        description:
            "Automated certificate generation platform for educational institutions and events.",
        image: "/images/projects/certificates.png",
        url: "https://certificate-genertor.vercel.app/",
    },
    {
        name: "Furniture E-Commerce",
        category: "E-Commerce Platform",
        description:
            "Online furniture marketplace offering seamless browsing and purchasing experience.",
        image: "/images/projects/furniture.png",
        url: "#",
    },
    {
        name: "Leave Management System",
        category: "Management System",
        description:
            "Enterprise leave management platform simplifying employee leave tracking and approvals.",
        image: "/images/projects/leave-management.jpeg",
        url: "https://lms-cyan-gamma.vercel.app/",
    },
];

export default function ProjectsPage() {

    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.category === active);

    return (
        <main className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Omradix Solutions",
                        url: "https://www.omradixsolutions.in",
                        logo: "https://www.omradixsolutions.in/logo.png",
                        email: "omradixsolutions@gmail.com",
                        telephone: ["+919373545169", "+917378534650"],
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "India"
                        }
                    })
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        itemListElement: [
                            {
                                "@type": "CreativeWork",
                                name: "AB Corp India Website",
                                url: "https://abcorpindia.com"
                            },
                            {
                                "@type": "CreativeWork",
                                name: "CARPS India Website",
                                url: "https://carpsindia.com"
                            },
                            {
                                "@type": "CreativeWork",
                                name: "PhishScan AI Platform",
                                url: "https://phishscan.vercel.app/"
                            }
                        ]
                    })
                }}
            />

            {/* HERO */}

            <section className="max-w-7xl mx-auto px-6 pt-28 pb-14 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-slate-900"
                >
                    Our Featured Projects
                </motion.h1>

                <p className="mt-4 text-slate-600 max-w-xl mx-auto">
                    Explore digital products and platforms we’ve built for startups,
                    enterprises and innovative businesses.
                </p>

            </section>



            {/* FILTERS */}

            <section className="max-w-7xl mx-auto px-6 mb-16">

                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

                    {filters.map((filter) => (

                        <button
                            key={filter}
                            onClick={() => setActive(filter)}
                            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition

${active === filter
                                    ? "bg-blue-600 text-white shadow"
                                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                                }
`}
                        >
                            {filter}
                        </button>

                    ))}

                </div>

            </section>



            {/* PROJECT GRID */}

            <section className="max-w-7xl mx-auto px-6 pb-24">

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {filtered.map((project, index) => (

                        <motion.article
                            key={project.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition"
                        >

                            {/* IMAGE */}

                            <div className="relative h-[220px] overflow-hidden">

                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    sizes="(max-width:768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />

                            </div>

                            {/* CONTENT */}

                            <div className="p-6">

                                <span className="inline-block text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                                    {project.category}
                                </span>

                                <h3 className="text-lg font-semibold text-slate-900 mt-4">
                                    {project.name}
                                </h3>

                                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <Link
                                    href={project.url}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 mt-5 text-blue-600 font-medium hover:underline"
                                >
                                    View Project
                                    <ArrowUpRight size={16} />
                                </Link>

                            </div>

                        </motion.article>

                    ))}

                </div>

            </section>



            {/* CTA */}

            <section className="py-24 bg-slate-50 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Have a Project Idea?
                </h2>

                <p className="mt-4 text-slate-600 max-w-md mx-auto">
                    Let’s build a powerful digital product tailored to your business needs.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
                >
                    Start Your Project
                </Link>

            </section>

        </main>
    );
}