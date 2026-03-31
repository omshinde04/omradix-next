"use client";

import { motion } from "framer-motion";
import {
    Search,
    PencilRuler,
    Code,
    Rocket,
    CheckCircle
} from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Discover",
        desc: "We analyze your business model, audience and goals to define the right product strategy.",
        points: [
            "Business & product analysis",
            "User research and market insights",
            "Clear project roadmap"
        ]
    },
    {
        icon: PencilRuler,
        title: "Design",
        desc: "Our design team creates intuitive interfaces and scalable system architecture.",
        points: [
            "Modern UI/UX design",
            "Wireframes and prototypes",
            "Scalable product architecture"
        ]
    },
    {
        icon: Code,
        title: "Develop",
        desc: "Engineers build high-performance applications with clean, scalable architecture.",
        points: [
            "Modern frameworks & technologies",
            "High performance code",
            "Secure backend systems"
        ]
    },
    {
        icon: Rocket,
        title: "Launch & Scale",
        desc: "After launch we optimize performance and scale your platform as your users grow.",
        points: [
            "Production deployment",
            "Performance monitoring",
            "Continuous improvements"
        ]
    }
];

export default function ServicesProcess() {

    return (
        <section className="relative py-20 md:py-24 bg-white overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-200 blur-[140px] opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Our Product Development Process
                    </h2>
                    <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600">
                        A proven framework that transforms ideas into scalable digital platforms.
                    </p>
                </div>

                {/* MAIN WRAPPER */}
                <div className="relative">

                    {/* DESKTOP TIMELINE */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 -translate-x-1/2"></div>

                    {/* MOBILE LINE */}
                    <div className="md:hidden absolute left-4 top-0 bottom-0 w-[3px] bg-blue-300"></div>

                    <div className="space-y-10 md:space-y-16">

                        {steps.map((step, i) => {

                            const Icon = step.icon;
                            const isLeft = i % 2 === 0;

                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`relative flex items-start md:items-center 
                                    md:${isLeft ? "justify-start" : "justify-end"} 
                                    justify-start`}
                                >

                                    {/* MOBILE NODE */}
                                    <div className="md:hidden absolute left-0 top-2 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                    </div>

                                    {/* DESKTOP NODE */}
                                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                                        <div className="relative">
                                            <div className="w-5 h-5 bg-blue-600 rounded-full z-10"></div>
                                            <div className="absolute w-10 h-10 bg-blue-400 opacity-40 rounded-full animate-ping"></div>
                                        </div>
                                    </div>

                                    {/* CONNECTOR */}
                                    <div className={`hidden md:block absolute top-10 h-[2px] bg-blue-400 ${isLeft ? "left-1/2 w-[140px]" : "right-1/2 w-[140px]"}`}></div>

                                    {/* CARD */}
                                    <motion.div
                                        whileHover={{ y: -10, scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="group w-full md:max-w-md pl-10 md:pl-0 relative"
                                    >

                                        {/* GLOW BORDER */}
                                        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>

                                        {/* CARD BODY */}
                                        <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl">

                                            {/* ICON */}
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur mb-4 sm:mb-5 group-hover:scale-110 transition">
                                                <Icon size={22} className="text-white" />
                                            </div>

                                            {/* TITLE */}
                                            <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                                                {step.title}
                                            </h3>

                                            {/* DESC */}
                                            <p className="text-white/80 text-xs sm:text-sm mt-2 leading-relaxed">
                                                {step.desc}
                                            </p>

                                            {/* POINTS */}
                                            <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
                                                {step.points.map((point) => (
                                                    <li
                                                        key={point}
                                                        className="flex items-start gap-2 text-xs sm:text-sm text-white/90"
                                                    >
                                                        <CheckCircle size={16} className="text-white mt-[2px]" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>

                                    </motion.div>

                                </motion.div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}