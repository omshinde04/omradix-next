"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Globe } from "lucide-react";

export default function AboutValues() {
    return (
        <section className="bg-slate-50 py-20 sm:py-24">

            <div className="max-w-7xl mx-auto px-5 sm:px-6">

                {/* TITLE */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >

                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Our Core Values
                    </h2>

                    <p className="mt-4 text-slate-600 text-sm sm:text-base">
                        The principles that guide how we build technology,
                        collaborate with clients, and create impactful digital products.
                    </p>

                </motion.div>


                {/* VALUE CARDS */}

                <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mt-14 sm:mt-16">

                    <Value
                        icon={<Rocket size={20} />}
                        title="Innovation First"
                        desc="We constantly explore emerging technologies to build modern digital products that help businesses innovate faster."
                    />

                    <Value
                        icon={<Users size={20} />}
                        title="Client Partnership"
                        desc="We collaborate closely with our clients to transform ideas into scalable platforms that drive measurable growth."
                    />

                    <Value
                        icon={<Globe size={20} />}
                        title="Global Vision"
                        desc="Our systems are engineered for scalability, enabling companies to expand globally with reliable infrastructure."
                    />

                </div>

            </div>

        </section>
    );
}



function Value({ icon, title, desc }) {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group relative p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition overflow-hidden"
        >

            {/* Hover Gradient Background */}

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"></div>


            <div className="relative">

                {/* Icon */}

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition duration-300">

                    {icon}

                </div>


                {/* Title */}

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    {title}
                </h3>


                {/* Description */}

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {desc}
                </p>

            </div>

        </motion.div>
    );
}