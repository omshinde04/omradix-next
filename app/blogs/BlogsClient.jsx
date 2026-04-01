"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { blogs } from "../../data/blogsData"
import BlogModal from "../../components/blog/BlogModal"

export default function BlogsPage() {

    const [selectedBlog, setSelectedBlog] = useState(null)

    return (

        <main className="relative bg-white min-h-screen overflow-hidden">

            {/* 🔲 GRID BACKGROUND */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.25) 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* 🔵 GLOW EFFECTS */}
            <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-[300px] h-[300px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />

            {/* CONTENT */}
            <div className="relative z-10">

                {/* HERO */}
                <section className="max-w-7xl mx-auto px-6 pt-28 pb-14 text-center">

                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Insights & Technology Blogs
                    </h1>

                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Explore insights on modern software development, AI technologies and digital innovation.
                    </p>

                </section>

                {/* BLOG GRID */}
                <section className="max-w-7xl mx-auto px-6 pb-24">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {blogs.map((blog) => (
                            <motion.article
                                key={blog.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition overflow-hidden flex flex-col"
                            >

                                {/* IMAGE */}
                                <div className="relative h-[200px] overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        sizes="(max-width:768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition duration-500"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-6 flex flex-col flex-grow">

                                    <span className="text-xs text-blue-600 font-semibold">
                                        {blog.category}
                                    </span>

                                    <h2 className="text-lg font-semibold mt-2 text-slate-900 group-hover:text-blue-600 transition">
                                        {blog.title}
                                    </h2>

                                    <p className="text-slate-600 text-sm mt-3 flex-grow">
                                        {blog.desc}
                                    </p>

                                    <button
                                        onClick={() => setSelectedBlog(blog)}
                                        className="mt-5 text-blue-600 font-semibold hover:underline"
                                    >
                                        Read Article →
                                    </button>

                                </div>

                            </motion.article>
                        ))}

                    </div>

                </section>

                {/* CTA SECTION */}
                <section className="py-20 bg-slate-50 text-center">

                    <h2 className="text-3xl font-bold text-slate-900">
                        Need Help Building Modern Software?
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Our engineers build scalable digital products using modern technologies.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        Start Your Project
                    </Link>

                </section>

            </div>

            {/* MODAL */}
            {selectedBlog && (
                <BlogModal
                    blog={selectedBlog}
                    onClose={() => setSelectedBlog(null)}
                />
            )}

        </main>
    )
}