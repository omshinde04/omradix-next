"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Cloud, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hidden lg:flex relative min-h-screen items-center justify-center overflow-hidden bg-white">

            {/* BACKGROUND GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white z-0"></div>

            {/* GRID */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)
          `,
                    backgroundSize: "42px 42px"
                }}
            />

            {/* GRID FADE */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_40%,white_85%)]"></div>


            {/* GLOW LIGHTS */}
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/20 blur-[170px] rounded-full z-0"></div>
            <div className="absolute bottom-[-150px] right-[10%] w-[500px] h-[400px] bg-indigo-400/20 blur-[160px] rounded-full z-0"></div>


            {/* FLOATING BACKGROUND ICONS */}

            <motion.div
                animate={{ y: [0, -40, 0] }}
                transition={{ duration: 18, repeat: Infinity }}
                className="absolute left-[8%] top-[35%] opacity-[0.12] text-blue-500"
            >
                <Code size={120} strokeWidth={1.2} />
            </motion.div>


            <motion.div
                animate={{ y: [0, 50, 0] }}
                transition={{ duration: 22, repeat: Infinity }}
                className="absolute right-[8%] top-[25%] opacity-[0.12] text-indigo-500"
            >
                <Cpu size={140} strokeWidth={1.2} />
            </motion.div>


            <motion.div
                animate={{ y: [0, -45, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute left-[15%] bottom-[18%] opacity-[0.12] text-blue-500"
            >
                <Cloud size={150} strokeWidth={1.2} />
            </motion.div>


            <motion.div
                animate={{ y: [0, 60, 0] }}
                transition={{ duration: 24, repeat: Infinity }}
                className="absolute right-[18%] bottom-[18%] opacity-[0.12] text-indigo-500"
            >
                <BarChart3 size={130} strokeWidth={1.2} />
            </motion.div>



            {/* CONTENT */}
            <div className="relative max-w-6xl mx-auto px-6 text-center z-10">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >

                    <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full border border-slate-200 text-slate-600 bg-white">
                        BUILD • LAUNCH • SCALE
                    </span>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                        Building Digital Products
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            That Power Modern Businesses
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Omradix Solutions helps startups and businesses design,
                        build and scale modern web platforms, intelligent systems,
                        and high-performance digital products.
                    </p>


                    {/* CTA */}
                    <div className="mt-10 flex gap-4 justify-center">

                        <Link href="/contact">
                            <button className="group px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium flex items-center gap-2 shadow-lg">
                                Start Your Project
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                            </button>
                        </Link>

                        <Link href="/projects">
                            <button className="px-8 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white transition font-medium">
                                View Our Work
                            </button>
                        </Link>

                    </div>


                    <p className="mt-12 text-sm text-slate-500">
                        Trusted by startups and growing businesses
                    </p>

                </motion.div>

            </div>

        </section>
    );
}