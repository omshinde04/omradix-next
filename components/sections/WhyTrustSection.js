"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
    {
        number: "01",
        title: "Elite Engineering Talent",
        desc: "Our engineers specialize in modern frameworks and scalable architectures, delivering reliable and maintainable digital products.",
    },
    {
        number: "02",
        title: "Security-First Development",
        desc: "Every system is built with strong security practices, protecting data, infrastructure, and business operations.",
    },
    {
        number: "03",
        title: "Built for Scalability",
        desc: "We design cloud-ready systems that grow with your product and support millions of users smoothly.",
    },
];

export default function WhyTrustSection() {
    return (
        <section className="py-20 md:py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* IMAGE BLOCK */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-4 md:gap-6"
                    >

                        {/* LARGE IMAGE — SOFTWARE TEAM */}
                        <div className="relative col-span-2 lg:col-span-1 lg:row-span-2 h-[220px] md:h-[320px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600"
                                alt="software engineering team collaboration"
                                fill
                                priority
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover hover:scale-105 transition duration-700"
                            />
                        </div>

                        {/* TOP SMALL — DEVELOPER CODING */}
                        <div className="relative h-[140px] md:h-[200px] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200"
                                alt="developer writing software code"
                                fill
                                sizes="(max-width:768px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition duration-700"
                            />
                        </div>

                        {/* BOTTOM SMALL — CLOUD INFRASTRUCTURE */}
                        <div className="relative h-[140px] md:h-[200px] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200"
                                alt="cloud computing data center infrastructure"
                                fill
                                sizes="(max-width:768px) 50vw, 25vw"
                                className="object-cover hover:scale-105 transition duration-700"
                            />
                        </div>
                    </motion.div>



                    {/* TEXT BLOCK */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                            Why leading brands trust
                            <span className="block text-primary">
                                Omradix Solutions
                            </span>
                        </h2>

                        <div className="mt-10 space-y-8">

                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.number}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="flex gap-4"
                                >

                                    <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-blue-100 text-primary font-semibold">
                                        {feature.number}
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            {feature.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm mt-1 max-w-md">
                                            {feature.desc}
                                        </p>
                                    </div>

                                </motion.div>
                            ))}

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}