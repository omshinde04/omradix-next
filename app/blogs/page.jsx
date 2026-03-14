"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blogs = [
    {
        title: "The Future of Web Development in 2026",
        desc: "How modern frameworks, AI integration, and cloud technologies are transforming digital products.",
        category: "Web Development",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        content: `
Web development is evolving faster than ever before.

Modern frameworks like React, Next.js and server-driven architectures are helping teams build faster and scalable products.

Artificial intelligence tools are now assisting developers with debugging, testing and code generation.

Companies adopting modern technologies can launch products faster and scale globally.
`
    },

    {
        title: "Why Every Business Needs a Professional Website in 2026",
        desc: "A professional website is no longer optional — it is the digital headquarters of your brand.",
        category: "Business Strategy",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
        content: `
In today's digital world every business needs a strong online presence.

A professional website builds trust and generates consistent leads.

Customers research businesses online before making decisions.

Your website is the digital foundation of your brand.
`
    },

    {
        title: "AI-Powered Applications: The Next Digital Revolution",
        desc: "Artificial Intelligence is reshaping industries by automating processes and unlocking new insights.",
        category: "Artificial Intelligence",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        content: `
Artificial intelligence is transforming digital products.

AI systems analyze large datasets and automate complex decision making.

Businesses that adopt AI technologies improve efficiency and innovation.

AI driven platforms will define the next generation of software.
`
    },

    {
        title: "How SaaS Platforms Are Changing the Software Industry",
        desc: "SaaS platforms allow businesses to scale software globally with cloud infrastructure.",
        category: "Cloud & SaaS",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        content: `
Software as a Service has revolutionized software distribution.

Instead of local installations, companies can access software through cloud platforms.

SaaS allows instant updates, scalability and global accessibility.

Many billion-dollar companies are built on the SaaS model.
`
    },

    {
        title: "Why UI/UX Design is Critical for Digital Success",
        desc: "User experience determines whether customers trust and engage with your product.",
        category: "UI / UX Design",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
        content: `
User experience is one of the most important aspects of digital products.

Great UX improves usability, engagement and customer satisfaction.

Companies that invest in strong design systems build products users love.
`
    },

    {
        title: "The Importance of Scalable Software Architecture",
        desc: "Scalable architecture ensures applications perform reliably as businesses grow.",
        category: "Software Architecture",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
        content: `
Scalable architecture allows systems to grow without performance issues.

Technologies like microservices and cloud infrastructure help applications scale efficiently.

Strong architecture ensures reliability and long term product success.
`
    }
];

function BlogModal({ blog, onClose }) {

    return (

        <AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                onClick={onClose}
            >

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-10"
                    onClick={(e) => e.stopPropagation()}
                >

                    <div className="flex justify-between items-start">

                        <div>

                            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                                {blog.category}
                            </span>

                            <h2 className="text-3xl font-bold mt-4 text-slate-900">
                                {blog.title}
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                {blog.readTime}
                            </p>

                        </div>

                        <button
                            onClick={onClose}
                            className="text-xl text-slate-500 hover:text-black"
                        >
                            ✕
                        </button>

                    </div>

                    <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
                        {blog.content.split("\n").map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>

                </motion.div>

            </motion.div>

        </AnimatePresence>

    );

}

export default function BlogsPage() {

    const [selectedBlog, setSelectedBlog] = useState(null);

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
                    Explore insights on modern software development, AI technologies and digital innovation.
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

                            <div className="relative h-[200px] w-full">

                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-300"
                                />

                            </div>

                            <div className="p-6 flex flex-col flex-grow">

                                <span className="text-xs text-blue-600 font-medium">
                                    {blog.category}
                                </span>

                                <h2 className="text-lg font-semibold text-slate-900 mt-2">
                                    {blog.title}
                                </h2>

                                <p className="text-slate-600 text-sm mt-3 flex-grow">
                                    {blog.desc}
                                </p>

                                <button
                                    onClick={() => setSelectedBlog(blog)}
                                    className="mt-5 text-blue-600 font-medium hover:underline"
                                >
                                    Read Article →
                                </button>

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

            {selectedBlog && (
                <BlogModal
                    blog={selectedBlog}
                    onClose={() => setSelectedBlog(null)}
                />
            )}

        </main>

    );

}