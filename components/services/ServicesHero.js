"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ServicesHero() {
    return (
        <section className="relative bg-white overflow-hidden">

            {/* GRID */}

            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.25) 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* GLOW */}

            <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="absolute -bottom-40 -right-40 w-[300px] h-[300px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />


            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 lg:pt-28 pb-16">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >

                        <span className="inline-flex w-fit px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-50 border border-blue-200 text-blue-600 rounded-full">
                            Our Services
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900">
                            Engineering Scalable
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                Digital Platforms
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-xl">
                            We build web platforms, SaaS products and AI powered systems
                            designed for growth, scalability and real-world performance.
                        </p>

                        {/* BUTTONS */}

                        <div className="flex flex-wrap gap-4">

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                            >
                                Start Your Project
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-800 rounded-xl font-semibold hover:bg-slate-100 transition"
                            >
                                Talk to an Expert
                                <MessageCircle size={18} />
                            </Link>

                        </div>

                        {/* METRICS */}

                        <div className="flex gap-12 pt-6 border-t border-slate-200 flex-wrap">

                            <Metric number="50+" label="Projects Delivered" />
                            <Metric number="12+" label="Global Clients" />
                            <Metric number="100%" label="Client Satisfaction" />

                        </div>

                    </motion.div>


                    {/* RIGHT DIAGRAM */}

                    <div className="relative flex justify-center">

                        <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] aspect-square">

                            {/* LINES */}

                            <svg
                                className="absolute inset-0 w-full h-full opacity-40"
                                viewBox="0 0 400 400"
                            >
                                <path
                                    d="M200 80 L80 200 M200 80 L320 200 M80 200 L200 320 M320 200 L200 320"
                                    stroke="#2563eb"
                                    strokeOpacity="0.4"
                                    strokeWidth="1.5"
                                    fill="none"
                                />
                            </svg>

                            {/* NODES */}

                            <Node title="User Interface" icon="💻" className="top-0 left-1/2 -translate-x-1/2" />
                            <Node title="API Layer" icon="🔗" className="left-0 top-1/2 -translate-y-1/2" />
                            <Node title="AI Automation" icon="🧠" className="right-0 top-1/2 -translate-y-1/2" />
                            <Node title="Database" icon="🗄️" className="bottom-0 left-1/2 -translate-x-1/2" />

                            {/* CORE */}

                            <div className="absolute inset-0 flex items-center justify-center">

                                <div className="w-16 h-16 rounded-full bg-blue-600 shadow-[0_0_20px_#2563eb]" />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}


function Metric({ number, label }) {
    return (
        <div>
            <p className="text-2xl font-bold text-slate-900">{number}</p>
            <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
        </div>
    );
}


function Node({ title, icon, className }) {
    return (
        <div className={`absolute ${className}`}>
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex flex-col items-center gap-1">

                <div className="w-9 h-9 flex items-center justify-center bg-blue-100 rounded-lg text-blue-600">
                    {icon}
                </div>

                <span className="text-xs font-semibold text-slate-700">
                    {title}
                </span>

            </div>
        </div>
    );
}