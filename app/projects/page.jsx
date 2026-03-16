"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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