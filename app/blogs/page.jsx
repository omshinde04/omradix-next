"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { blogs } from "../../data/blogsData"
import BlogModal from "../../components/blog/BlogModal"

/* ================= SEO METADATA ================= */

export const metadata = {
    title: "Tech Blogs & Insights | Omradix Solutions India",
    description:
        "Explore expert blogs on web development, AI, SaaS, and digital solutions by Omradix Solutions. Learn modern technologies and grow your business online.",
    keywords: [
        "web development blogs",
        "AI blogs India",
        "Next.js tutorials",
        "software development insights",
        "digital solutions India",
        "Omradix Solutions blogs"
    ],
    authors: [{ name: "Omradix Solutions" }],
    creator: "Omradix Solutions",
    metadataBase: new URL("https://www.omradixsolutions.in"),
    alternates: {
        canonical: "/blogs",
    },
    openGraph: {
        title: "Tech Blogs & Insights | Omradix Solutions",
        description:
            "Read blogs on modern web development, AI systems and scalable digital products.",
        url: "https://www.omradixsolutions.in/blogs",
        siteName: "Omradix Solutions",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Omradix Solutions Blogs"
            }
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tech Blogs | Omradix Solutions",
        description:
            "Insights on AI, web development and digital innovation.",
        images: ["/images/og-image.jpg"],
    },
};

/* ================= PAGE ================= */

export default function BlogsPage() {

    const [selectedBlog, setSelectedBlog] = useState(null)

    return (

        <main>

            {/* ================= JSON-LD ================= */}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Omradix Solutions",
                        url: "https://www.omradixsolutions.in",
                        email: "omradixsolutions@gmail.com",
                        telephone: [
                            "+919373545169",
                            "+917378534650"
                        ],
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "India"
                        },
                        sameAs: [
                            "https://www.omradixsolutions.in"
                        ]
                    })
                }}
            />

            {/* ================= HERO ================= */}

            <section className="max-w-7xl mx-auto px-6 pt-28 pb-14 text-center">

                <h1 className="text-4xl md:text-5xl font-bold">
                    Insights & Technology Blogs
                </h1>

                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                    Explore insights on modern software development, AI technologies and digital innovation.
                </p>

            </section>

            {/* ================= BLOG GRID ================= */}

            <section className="max-w-7xl mx-auto px-6 pb-24">

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {blogs.map((blog) => (
                        <motion.article
                            key={blog.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col"
                        >

                            <div className="relative h-[200px]">

                                <Image
                                    src={blog.image}
                                    alt={`${blog.title} - Omradix Solutions Blog`}
                                    fill
                                    sizes="(max-width:768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition duration-300"
                                />

                            </div>

                            <div className="p-6 flex flex-col flex-grow">

                                <span className="text-xs text-blue-600 font-medium">
                                    {blog.category}
                                </span>

                                <h2 className="text-lg font-semibold mt-2">
                                    {blog.title}
                                </h2>

                                <p className="text-slate-600 text-sm mt-3 flex-grow">
                                    {blog.desc}
                                </p>

                                <button
                                    onClick={() => setSelectedBlog(blog)}
                                    className="mt-5 text-blue-600 font-medium hover:underline"
                                    aria-label={`Read article about ${blog.title}`}
                                >
                                    Read Article →
                                </button>

                            </div>

                        </motion.article>
                    ))}

                </div>

            </section>

            {/* ================= CTA ================= */}

            <section className="py-20 bg-slate-50 text-center">

                <h2 className="text-3xl font-bold">
                    Need Help Building Modern Software?
                </h2>

                <p className="mt-4 text-slate-600">
                    Our engineers build scalable digital products using modern technologies.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-full"
                    aria-label="Contact Omradix Solutions for project"
                >
                    Start Your Project
                </Link>

            </section>

            {selectedBlog && (
                <BlogModal
                    blog={selectedBlog}
                    onClose={() => setSelectedBlog(null)}
                />
            )}

        </main>

    )
}