"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Cloud, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroMobile() {
    return (
        <section className="relative lg:hidden min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-white">

            {/* BACKGROUND GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>


            {/* GRID BACKGROUND (same as desktop) */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
                    backgroundSize: "42px 42px"
                }}
            />


            {/* GRID FADE (premium SaaS look) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,white_85%)]"></div>


            {/* LIGHT GLOW */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-blue-400/20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-indigo-400/20 blur-[120px] rounded-full"></div>


            {/* CONTENT */}
            <div className="relative h-full flex flex-col justify-between px-6 pt-24 pb-10 max-w-md mx-auto">

                {/* HERO TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >

                    <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full border border-slate-200 text-slate-600 bg-white">
                        BUILD • LAUNCH • SCALE
                    </span>

                    <h1 className="text-[34px] font-bold text-slate-900 leading-tight">

                        Build Modern

                        <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Software Products
                        </span>

                    </h1>

                    <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-[280px] mx-auto">
                        We design scalable web platforms, AI solutions and modern
                        digital systems for growing businesses.
                    </p>


                    {/* CTA */}
                    <div className="mt-6 flex justify-center gap-3">

                        <Link href="/contact">

                            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition">

                                Start Project

                                <ArrowRight size={16} />

                            </button>

                        </Link>


                        <Link href="/projects">

                            <button className="px-6 py-3 rounded-full border border-slate-300 text-sm font-medium hover:bg-slate-100 transition">

                                View Work

                            </button>

                        </Link>

                    </div>

                </motion.div>



                {/* SERVICES */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 gap-3 mt-10"
                >

                    <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-3 shadow-sm">

                        <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded-md">
                            <Code size={16} className="text-blue-600" />
                        </div>

                        <span className="text-sm font-medium text-slate-700">
                            Web Development
                        </span>

                    </div>


                    <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-3 shadow-sm">

                        <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded-md">
                            <Cpu size={16} className="text-blue-600" />
                        </div>

                        <span className="text-sm font-medium text-slate-700">
                            AI Solutions
                        </span>

                    </div>


                    <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-3 shadow-sm">

                        <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded-md">
                            <Cloud size={16} className="text-blue-600" />
                        </div>

                        <span className="text-sm font-medium text-slate-700">
                            Cloud Systems
                        </span>

                    </div>


                    <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-3 shadow-sm">

                        <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded-md">
                            <BarChart3 size={16} className="text-blue-600" />
                        </div>

                        <span className="text-sm font-medium text-slate-700">
                            Data Analytics
                        </span>

                    </div>

                </motion.div>



                {/* TRUST SECTION */}
                <div className="flex flex-col items-center gap-2 mt-6">

                    <div className="flex -space-x-2">

                        <Image
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            width={24}
                            height={24}
                            alt="client"
                            className="rounded-full border-2 border-white"
                        />

                        <Image
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            width={24}
                            height={24}
                            alt="client"
                            className="rounded-full border-2 border-white"
                        />

                        <Image
                            src="https://randomuser.me/api/portraits/men/65.jpg"
                            width={24}
                            height={24}
                            alt="client"
                            className="rounded-full border-2 border-white"
                        />

                        <Image
                            src="https://randomuser.me/api/portraits/women/68.jpg"
                            width={24}
                            height={24}
                            alt="client"
                            className="rounded-full border-2 border-white"
                        />

                    </div>

                    <p className="text-xs text-slate-600">
                        Trusted by <span className="font-semibold text-slate-900">50+ growing businesses</span>
                    </p>

                </div>

            </div>

        </section>
    );
}