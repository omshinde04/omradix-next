"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
    return (
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-12">

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[420px] sm:h-[460px] md:h-[520px]">

                {/* Background */}

                <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600"
                    alt="software development services"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />

                {/* Glow */}

                <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/30 blur-3xl rounded-full"></div>

                {/* Content */}

                <div className="relative h-full flex items-center px-6 md:px-12">

                    <div className="max-w-2xl text-white">

                        {/* Badge */}

                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block bg-white/10 backdrop-blur px-4 py-1 rounded-full text-xs sm:text-sm font-medium"
                        >
                            Our Services
                        </motion.span>

                        {/* Heading */}

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 leading-tight"
                        >
                            Powerful Digital Solutions
                            <span className="block text-primary">
                                Built for Modern Businesses
                            </span>
                        </motion.h1>

                        {/* Description */}

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-sm sm:text-base text-gray-200 max-w-lg leading-relaxed"
                        >
                            From modern websites to AI-powered platforms, we design and
                            build scalable technology solutions that help businesses
                            grow faster and automate operations.
                        </motion.p>

                        {/* CTA */}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-3 mt-7"
                        >

                            <Link
                                href="/contact"
                                className="bg-primary hover:bg-blue-700 transition px-6 py-2.5 rounded-full text-sm sm:text-base font-medium shadow-lg"
                            >
                                Start Your Project
                            </Link>

                            <Link
                                href="/contact"
                                className="border border-white/40 hover:bg-white hover:text-black transition px-6 py-2.5 rounded-full text-sm sm:text-base font-medium"
                            >
                                Talk to an Expert
                            </Link>

                        </motion.div>

                        {/* Metrics */}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-6 mt-8 text-xs sm:text-sm text-gray-200 flex-wrap"
                        >

                            <div>
                                <span className="font-bold text-white">50+</span>
                                <p>Projects</p>
                            </div>

                            <div>
                                <span className="font-bold text-white">12+</span>
                                <p>Clients</p>
                            </div>

                            <div>
                                <span className="font-bold text-white">100%</span>
                                <p>Satisfaction</p>
                            </div>

                        </motion.div>

                    </div>

                </div>

            </div>

        </section>
    );
}