"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogs = [
    {
        title: "The Future of Web Development in 2026",
        desc: "How modern frameworks, AI integration, and cloud technologies are transforming digital products.",
        slug: "future-web-development",
        type: "web"
    },
    {
        title: "Why Every Business Needs a Professional Website in 2026",
        desc: "A professional website is no longer optional — it is the digital headquarters of your brand.",
        slug: "professional-business-website",
        type: "business"
    },
    {
        title: "AI-Powered Applications: The Next Digital Revolution",
        desc: "Artificial Intelligence is reshaping industries by automating processes and unlocking new insights.",
        slug: "ai-powered-applications",
        type: "ai"
    },
    {
        title: "How SaaS Platforms Are Changing the Software Industry",
        desc: "SaaS platforms allow businesses to scale software globally with cloud infrastructure.",
        slug: "saas-platforms-software",
        type: "cloud"
    },
    {
        title: "Why UI/UX Design is Critical for Digital Success",
        desc: "User experience determines whether customers trust and engage with your product.",
        slug: "ui-ux-design-importance",
        type: "design"
    },
    {
        title: "The Importance of Scalable Software Architecture",
        desc: "Scalable architecture ensures applications perform reliably as businesses grow.",
        slug: "scalable-software-architecture",
        type: "architecture"
    }
];

function Illustration({ type }) {

    const floating = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    switch (type) {

        case "ai":
            return (
                <motion.svg {...floating} width="120" height="120" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="40" stroke="#4F46E5" strokeWidth="6" />
                    <circle cx="100" cy="40" r="8" fill="#6366F1" />
                    <circle cx="40" cy="100" r="8" fill="#6366F1" />
                    <circle cx="160" cy="100" r="8" fill="#6366F1" />
                    <circle cx="100" cy="160" r="8" fill="#6366F1" />
                </motion.svg>
            );

        case "web":
            return (
                <motion.svg {...floating} width="120" height="120" viewBox="0 0 200 200" fill="none">
                    <rect x="30" y="50" width="140" height="90" rx="10" stroke="#2563EB" strokeWidth="6" />
                    <line x1="30" y1="80" x2="170" y2="80" stroke="#2563EB" strokeWidth="4" />
                    <circle cx="50" cy="65" r="4" fill="#2563EB" />
                    <circle cx="65" cy="65" r="4" fill="#2563EB" />
                </motion.svg>
            );

        case "cloud":
            return (
                <motion.svg {...floating} width="120" height="120" viewBox="0 0 200 200" fill="none">
                    <path
                        d="M70 130h60a25 25 0 000-50 40 40 0 00-78 10A20 20 0 0070 130z"
                        stroke="#0284C7"
                        strokeWidth="6"
                    />
                </motion.svg>
            );

        case "design":
            return (
                <motion.svg {...floating} width="120" height="120" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="60" stroke="#EC4899" strokeWidth="6" />
                    <circle cx="70" cy="80" r="10" fill="#EC4899" />
                    <circle cx="130" cy="80" r="10" fill="#EC4899" />
                    <circle cx="100" cy="130" r="10" fill="#EC4899" />
                </motion.svg>
            );

        case "architecture":
            return (
                <motion.svg {...floating} width="120" height="120" viewBox="0 0 200 200" fill="none">
                    <rect x="40" y="40" width="40" height="40" stroke="#0EA5E9" strokeWidth="6" />
                    <rect x="120" y="40" width="40" height="40" stroke="#0EA5E9" strokeWidth="6" />
                    <rect x="80" y="120" width="40" height="40" stroke="#0EA5E9" strokeWidth="6" />
                    <line x1="80" y1="60" x2="120" y2="60" stroke="#0EA5E9" strokeWidth="4" />
                    <line x1="100" y1="80" x2="100" y2="120" stroke="#0EA5E9" strokeWidth="4" />
                </motion.svg>
            );

        default:
            return (
                <motion.svg {...floating} width="120" height="120" viewBox="0 0 200 200" fill="none">
                    <rect x="60" y="60" width="80" height="80" stroke="#6366F1" strokeWidth="6" />
                </motion.svg>
            );

    }

}

export default function BlogsPage() {

    return (

        <main className="bg-white">

            <section className="max-w-7xl mx-auto px-6 pt-28 pb-14 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-slate-900"
                >

                    Insights & Technology Blogs

                </motion.h1>

                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">

                    Explore insights on modern software development, AI technologies,
                    scalable platforms, and digital innovation from the Omradix Solutions team.

                </p>

            </section>

            <section className="max-w-7xl mx-auto px-6 pb-24">

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {blogs.map((blog, index) => (

                        <motion.article
                            key={blog.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition overflow-hidden flex flex-col"
                        >

                            <div className="h-[200px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 group-hover:from-blue-100 group-hover:to-indigo-200 transition">

                                <Illustration type={blog.type} />

                            </div>

                            <div className="p-6 flex flex-col flex-grow">

                                <h2 className="text-lg font-semibold text-slate-900 leading-snug">
                                    {blog.title}
                                </h2>

                                <p className="text-slate-600 text-sm mt-3 flex-grow">
                                    {blog.desc}
                                </p>

                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="mt-5 text-blue-600 font-medium hover:underline"
                                >
                                    Read Article →
                                </Link>

                            </div>

                        </motion.article>

                    ))}

                </div>

            </section>

            <section className="py-20 bg-slate-50 text-center">

                <h2 className="text-3xl font-bold text-slate-900">
                    Need Help Building Modern Software?
                </h2>

                <p className="mt-4 text-slate-600">
                    Our engineers build scalable digital products using modern technologies.
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