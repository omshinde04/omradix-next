"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* FILTERS */

const filters = [
    "All",
    "Corporate Website",
    "AI Platform",
    "Automation Platform",
    "E-Commerce Platform",
    "Management System",
];

/* PROJECT DATA */

const projects = [
    {
        name: "AB Corp India",
        category: "Corporate Website",
        description:
            "A professional corporate website built to strengthen the company's digital presence and showcase their services to potential clients.",
        image: "/images/projects/Abcorp.png",
        url: "https://abcorpindia.com"
    },

    {
        name: "CARPS India",
        category: "Corporate Website",
        description:
            "A modern company website designed to highlight services, build credibility, and improve online visibility for the organization.",
        image: "/images/projects/carpsindia.png",
        url: "https://carpsindia.com"
    },

    {
        name: "PhishScan",
        category: "AI Platform",
        description:
            "An intelligent security platform that detects phishing threats by analyzing suspicious emails and URLs to help organizations protect their systems.",
        image: "/images/projects/AI-Based.png",
        url: "https://phishscan.vercel.app/"
    },

    {
        name: "MindWell AI",
        category: "AI Platform",
        description:
            "A wellness platform powered by AI that helps users track daily habits and receive personalized insights to improve their well-being.",
        image: "/images/projects/Ai-wellness.png",
        url: "https://a-iwellness.vercel.app/"
    },

    {
        name: "CertiGen",
        category: "Automation Platform",
        description:
            "An automated certificate generation platform designed for institutions to create and distribute certificates efficiently.",
        image: "/images/projects/certificates.png",
        url: "https://certificate-genertor.vercel.app/"
    },

    {
        name: "Furniture E-Commerce",
        category: "E-Commerce Platform",
        description:
            "A modern online furniture store designed to showcase products, simplify browsing, and provide a smooth shopping experience.",
        image: "/images/projects/furniture.png",
        url: "#"
    },

    {
        name: "Leave Management System",
        category: "Management System",
        description:
            "A digital platform designed to streamline employee leave requests, approvals, and attendance management for organizations.",
        image: "/images/projects/leave-management.jpeg",
        url: "https://lms-cyan-gamma.vercel.app/"
    }
];

export default function ProjectsPage() {

    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? projects
            : projects.filter(p => p.category === active);

    return (

        <main className="bg-white">

            {/* HERO */}

            <section className="max-w-7xl mx-auto px-6 pt-28 pb-16 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-slate-900"
                >

                    Our Featured Projects

                </motion.h1>

                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                    Explore digital platforms and products we’ve built to help businesses grow and operate more efficiently.
                </p>

            </section>

            {/* FILTERS */}

            <section className="max-w-7xl mx-auto px-6">

                <div className="flex flex-wrap justify-center gap-3 mb-16">

                    {filters.map(filter => (

                        <button
                            key={filter}
                            onClick={() => setActive(filter)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition

${active === filter
                                    ? "bg-blue-600 text-white shadow-md"
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
                            whileHover={{ y: -6 }}
                            className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition overflow-hidden"
                        >

                            {/* IMAGE */}

                            <div className="relative h-[210px] overflow-hidden">

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

                                <span className="text-xs font-medium text-blue-600">
                                    {project.category}
                                </span>

                                <h3 className="text-lg font-semibold text-slate-900 mt-2">
                                    {project.name}
                                </h3>

                                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <Link
                                    href={project.url}
                                    target="_blank"
                                    className="inline-flex items-center gap-1 mt-5 text-blue-600 font-medium hover:underline"
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

            <section className="py-20 bg-slate-50 text-center">

                <h2 className="text-3xl font-bold text-slate-900">
                    Have a Project Idea?
                </h2>

                <p className="mt-4 text-slate-600">
                    Let's build a powerful digital product tailored for your business.
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