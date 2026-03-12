"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const filters = [
    "All",
    "Web",
    "AI",
    "Mobile",
    "Management System",
    "Automation",
];

const projects = [
    {
        name: "AB Corp India",
        category: "Web",
        description:
            "Corporate website designed to showcase services and strengthen digital presence.",
        tech: ["Next.js", "SEO", "Responsive"],
        image: "/images/abcorp.jpg",
        url: "https://abcorpindia.com",
    },
    {
        name: "CARPS India",
        category: "Web",
        description:
            "Modern company website built with high performance architecture.",
        tech: ["Next.js", "Modern UI"],
        image: "/images/carps.jpg",
        url: "https://carpsindia.com",
    },
    {
        name: "PhishScan",
        category: "AI",
        description:
            "AI-powered phishing detection system analyzing suspicious emails.",
        tech: ["AI", "Security"],
        image: "/images/project1.jpg",
        url: "https://phishscan.vercel.app/",
    },
    {
        name: "MindWell",
        category: "AI",
        description:
            "AI wellness platform that tracks daily habits and provides insights.",
        tech: ["AI", "Analytics"],
        image: "/images/project2.jpg",
        url: "https://a-iwellness.vercel.app/",
    },
    {
        name: "CertiGen",
        category: "Automation",
        description:
            "Automated certificate generator platform for institutions.",
        tech: ["Automation", "System"],
        image: "/images/project3.jpg",
        url: "https://certificate-genertor.vercel.app/",
    },
    {
        name: "Furniture E-Commerce",
        category: "Web",
        description:
            "Modern furniture e-commerce platform with filters and checkout.",
        tech: ["Ecommerce", "UI"],
        image: "/images/project4.jpg",
        url: "#",
    },
    {
        name: "Portfolio Website",
        category: "Web",
        description:
            "Modern developer portfolio with smooth animations.",
        tech: ["Next.js", "Animations"],
        image: "/images/project5.jpg",
        url: "https://omshinde.site",
    },
    {
        name: "College Management System",
        category: "Management System",
        description:
            "Full college management system with attendance & results.",
        tech: ["Dashboard", "Admin"],
        image: "/images/project6.jpg",
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

            {/* HERO */}

            <section className="max-w-7xl mx-auto px-6 pt-28 pb-14 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-slate-900"
                >
                    Our Featured Projects
                </motion.h1>

                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                    Real digital products we built for startups and businesses.
                </p>

            </section>

            {/* FILTER TABS */}

            <section className="max-w-7xl mx-auto px-6">

                <div className="flex flex-wrap justify-center gap-3 mb-14">

                    {filters.map((filter) => (

                        <button
                            key={filter}
                            onClick={() => setActive(filter)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${active === filter
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                                }`}
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

                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.06 }}
                            whileHover={{
                                rotateX: 3,
                                rotateY: -3,
                                scale: 1.02,
                            }}
                            className="group relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition overflow-hidden"
                        >

                            {/* Gradient Glow */}

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10" />

                            {/* IMAGE */}

                            <div className="relative h-[180px] overflow-hidden">

                                <motion.div
                                    whileHover={{ y: -40 }}
                                    transition={{ duration: 6 }}
                                    className="absolute inset-0"
                                >

                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        sizes="(max-width:768px) 100vw, 33vw"
                                        className="object-cover"
                                    />

                                </motion.div>

                            </div>

                            {/* CONTENT */}

                            <div className="relative p-6">

                                <h3 className="text-lg font-semibold text-slate-900">
                                    {project.name}
                                </h3>

                                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* TECH */}

                                <div className="flex flex-wrap gap-2 mt-3">

                                    {project.tech.map((tech) => (

                                        <span
                                            key={tech}
                                            className="text-xs bg-blue-100 text-primary px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                                {/* BUTTON */}

                                <Link
                                    href={project.url}
                                    target="_blank"
                                    className="inline-block mt-5 text-primary font-medium hover:underline"
                                >
                                    Live →
                                </Link>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </section>


            {/* CTA */}

            <section className="py-20 bg-slate-50 text-center">

                <h2 className="text-3xl font-bold text-slate-900">
                    Want a Project Like This?
                </h2>

                <p className="mt-4 text-slate-600">
                    Let's build a powerful digital product together.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-8 px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition"
                >
                    Start Your Project
                </Link>

            </section>

        </main>
    );
}