"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-white">

            {/* Glow background */}

            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-24 pb-20 lg:pt-32 lg:pb-32">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT CONTENT */}

                    <div className="flex flex-col gap-8">

                        {/* Badge */}

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>

                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                                About Omradix Solutions
                            </span>
                        </motion.div>


                        {/* Heading */}

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]"
                        >
                            Engineering the Future of{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                                Digital Innovation
                            </span>
                        </motion.h1>


                        {/* Description */}

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600 max-w-xl leading-relaxed"
                        >
                            We are a team of engineers and designers focused on building the
                            next generation of digital platforms. Transforming ideas into
                            scalable products using modern technology.
                        </motion.p>


                        {/* CTA */}

                        <div className="flex flex-col sm:flex-row gap-4">

                            <Link
                                href="/contact"
                                className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
                            >
                                Start Your Project
                            </Link>

                            <Link
                                href="/services"
                                className="flex items-center justify-center gap-2 px-8 py-3 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition"
                            >
                                Explore Services
                            </Link>

                        </div>


                        {/* Team avatars */}

                        <div className="flex items-center gap-6 pt-2">

                            <div className="flex -space-x-3">

                                <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                                        alt="team member"
                                        width={40}
                                        height={40}
                                    />
                                </div>

                                <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                                        alt="team member"
                                        width={40}
                                        height={40}
                                    />
                                </div>

                                <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                                        alt="team member"
                                        width={40}
                                        height={40}
                                    />
                                </div>

                                <div className="h-10 w-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                                    +12
                                </div>

                            </div>

                            <p className="text-sm text-slate-500 font-medium">
                                Trusted by 200+ companies
                            </p>

                        </div>

                    </div>



                    {/* RIGHT IMAGE */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative"
                    >

                        {/* Glow */}

                        <div className="absolute -inset-6 bg-blue-500/20 blur-3xl rounded-[2rem] opacity-60" />

                        <div className="relative rounded-[2rem] bg-white p-2 shadow-2xl">

                            <Image
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600"
                                alt="team collaboration"
                                width={900}
                                height={700}
                                className="rounded-[1.5rem] object-cover"
                            />

                            {/* Floating card */}

                            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 items-center gap-3">

                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    ✓
                                </div>

                                <div>
                                    <p className="text-xs text-slate-500 font-semibold uppercase">
                                        Efficiency
                                    </p>
                                    <p className="text-lg font-bold text-slate-900">
                                        99.9% Uptime
                                    </p>
                                </div>

                            </div>

                            {/* Floating card 2 */}

                            <div className="hidden sm:flex absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 items-center gap-3">

                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    🚀
                                </div>

                                <div>
                                    <p className="text-xs text-slate-500 font-semibold uppercase">
                                        Innovation
                                    </p>
                                    <p className="text-lg font-bold text-slate-900">
                                        Next-Gen Stack
                                    </p>
                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}