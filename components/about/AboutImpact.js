"use client";

import { motion } from "framer-motion";
import { Rocket, Globe, Users, Shield } from "lucide-react";

export default function AboutImpact() {
    return (
        <section className="max-w-7xl mx-auto px-5 sm:px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >

                <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Our Impact
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                    Turning Visionary Ideas into
                    <span className="block text-primary">
                        Scalable Digital Platforms
                    </span>
                </h2>

                <p className="mt-6 text-slate-600 max-w-lg">
                    At Omradix Solutions we help startups and enterprises transform
                    ambitious ideas into powerful digital products engineered for
                    performance, scalability and long-term growth.
                </p>

                {/* FEATURE LIST */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">

                    <Feature icon={<Rocket size={18} />} text="Startup Product Development" />
                    <Feature icon={<Globe size={18} />} text="Global Scale Platforms" />
                    <Feature icon={<Users size={18} />} text="Client-Focused Engineering" />
                    <Feature icon={<Shield size={18} />} text="Secure Architecture" />

                </div>

            </motion.div>


            {/* STATS */}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-5 sm:gap-6"
            >

                <Stat icon={<Rocket />} number="50+" label="Projects Delivered" />
                <Stat icon={<Globe />} number="12+" label="Global Clients" />
                <Stat icon={<Users />} number="100%" label="Client Satisfaction" />
                <Stat icon={<Shield />} number="24/7" label="Support Coverage" />

            </motion.div>

        </section>
    );
}



function Feature({ icon, text }) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="group relative flex items-center gap-3 bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 shadow-sm hover:shadow-lg transition overflow-hidden"
        >

            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"></div>

            <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-primary group-hover:bg-primary group-hover:text-white transition duration-300">
                {icon}
            </span>

            <span className="relative">
                {text}
            </span>

        </motion.div>
    );
}



function Stat({ icon, number, label }) {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >

            {/* gradient hover background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"></div>

            <div className="relative">

                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-primary mb-3 group-hover:bg-primary group-hover:text-white transition duration-300">
                    {icon}
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-primary">
                    {number}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {label}
                </p>

            </div>

        </motion.div>
    );
}