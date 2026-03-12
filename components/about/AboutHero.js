"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">

            <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[440px] md:min-h-[560px]">

                {/* Background Image */}
                <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600"
                    alt="software development team collaboration"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/50" />

                {/* Content Wrapper */}
                <div className="relative flex items-center h-full px-6 sm:px-10 py-16">

                    <div className="text-white max-w-lg">

                        {/* Badge */}
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block bg-white/10 backdrop-blur px-4 py-1 rounded-full text-xs sm:text-sm"
                        >
                            About Omradix Solutions
                        </motion.span>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-6xl font-bold mt-5 leading-tight"
                        >
                            Crafting the Future of
                            <span className="block text-primary">
                                Digital Innovation
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed"
                        >
                            We help startups and businesses transform ideas into scalable
                            digital products through modern engineering, automation,
                            and high-performance technology.
                        </motion.p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-6">

                            <Link
                                href="/contact"
                                className="bg-primary hover:bg-blue-700 transition px-6 py-3 rounded-full text-sm sm:text-base font-medium text-center w-full sm:w-auto"
                            >
                                Start Your Project
                            </Link>

                            <Link
                                href="/services"
                                className="border border-white/40 hover:bg-white hover:text-black transition px-6 py-3 rounded-full text-sm sm:text-base font-medium text-center w-full sm:w-auto"
                            >
                                Explore Services
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}