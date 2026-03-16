"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesHero() {
    return (
        <section className="relative bg-white overflow-hidden">

            {/* GRID BACKGROUND */}

            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.25) 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* GLOW ACCENTS */}

            <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="absolute -bottom-40 -right-40 w-[320px] h-[320px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none"></div>


            {/* CONTENT */}

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-20 md:pb-24">

                <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

                    {/* LEFT CONTENT */}

                    <div className="flex flex-col gap-7">

                        {/* BADGE */}

                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-50 border border-blue-200 text-blue-600 rounded-full w-fit"
                        >
                            Our Services
                        </motion.span>


                        {/* TITLE */}

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900"
                        >
                            Engineering Scalable
                            <br />

                            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                Digital Platforms
                            </span>
                        </motion.h1>


                        {/* DESCRIPTION */}

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600 max-w-lg leading-relaxed"
                        >
                            We build web platforms, SaaS products and AI powered systems
                            designed for growth, scalability and real world performance.
                        </motion.p>


                        {/* BUTTONS */}

                        <div className="flex flex-wrap gap-4">

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-7 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-sm hover:shadow-md"
                            >
                                Start Your Project
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-7 py-3 border border-slate-300 text-slate-800 rounded-xl font-semibold hover:bg-slate-100 transition"
                            >
                                Talk to an Expert
                            </Link>

                        </div>


                        {/* METRICS */}

                        <div className="pt-6 flex flex-wrap gap-x-10 gap-y-4 border-t border-slate-200">

                            <div>
                                <p className="text-2xl font-bold text-slate-900">50+</p>
                                <p className="text-xs uppercase text-slate-500 tracking-wider">
                                    Projects Delivered
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold text-slate-900">12+</p>
                                <p className="text-xs uppercase text-slate-500 tracking-wider">
                                    Global Clients
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold text-slate-900">100%</p>
                                <p className="text-xs uppercase text-slate-500 tracking-wider">
                                    Satisfaction
                                </p>
                            </div>

                        </div>

                    </div>



                    {/* RIGHT ARCHITECTURE DIAGRAM */}

                    <div className="relative h-[420px] md:h-[520px] lg:h-[600px] flex items-center justify-center">

                        <div className="relative w-[320px] md:w-[420px] lg:w-[520px] xl:w-[600px] aspect-square">

                            {/* CONNECTION LINES */}

                            <svg
                                className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
                                viewBox="0 0 400 400"
                            >
                                <path
                                    d="M200 80 L80 200 M200 80 L320 200 M80 200 L200 320 M320 200 L200 320 M200 80 L200 320 M80 200 L320 200"
                                    stroke="url(#grad)"
                                    strokeWidth="1.5"
                                    fill="none"
                                />

                                <defs>
                                    <linearGradient id="grad">
                                        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                                        <stop offset="50%" stopColor="#2563eb" stopOpacity="0.7" />
                                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>

                            </svg>


                            {/* NODES */}

                            <div className="absolute top-0 left-1/2 -translate-x-1/2">
                                <Node title="User Interface" icon="💻" />
                            </div>

                            <div className="absolute left-0 top-1/2 -translate-y-1/2">
                                <Node title="API Layer" icon="🔗" />
                            </div>

                            <div className="absolute right-0 top-1/2 -translate-y-1/2">
                                <Node title="AI Automation" icon="🧠" />
                            </div>

                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                                <Node title="Database" icon="🗄️" />
                            </div>


                            {/* CORE */}

                            <div className="absolute inset-0 flex items-center justify-center">

                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center">

                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 shadow-[0_0_18px_#2563eb]" />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}



/* NODE COMPONENT */

function Node({ title, icon }) {
    return (
        <div className="group bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex flex-col items-center gap-2 hover:-translate-y-1 hover:shadow-lg transition">

            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg text-blue-600 text-lg group-hover:bg-blue-600 group-hover:text-white transition">
                {icon}
            </div>

            <span className="text-xs font-semibold text-slate-700">
                {title}
            </span>

        </div>
    );
}