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
        <section className="relative py-20 md:py-28 bg-white overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-200 blur-[140px] opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                        Our Product Development Process
                    </h2>
                    <p className="mt-4 text-slate-600 text-base md:text-lg">
                        A proven framework that transforms ideas into scalable digital platforms.
                    </p>
                </div>

                {/* TIMELINE */}
                <div className="relative">

                    {/* CENTER LINE */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 -translate-x-1/2"></div>

                    {/* MOBILE LINE */}
                    <div className="md:hidden absolute left-4 top-0 bottom-0 w-[3px] bg-blue-300"></div>

                    <div className="space-y-16">

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
                                    className="relative"
                                >

                                    {/* DESKTOP GRID */}
                                    <div className="hidden md:grid grid-cols-2 items-center">

                                        {/* LEFT SIDE */}
                                        <div className={`${isLeft ? "flex justify-end pr-12" : ""}`}>
                                            {isLeft && <Card step={step} Icon={Icon} />}
                                        </div>

                                        {/* RIGHT SIDE */}
                                        <div className={`${!isLeft ? "flex justify-start pl-12" : ""}`}>
                                            {!isLeft && <Card step={step} Icon={Icon} />}
                                        </div>

                                    </div>

                                    {/* MOBILE */}
                                    <div className="md:hidden pl-10">
                                        <Card step={step} Icon={Icon} />
                                    </div>

                                    {/* NODE */}
                                    <div className="absolute md:left-1/2 left-4 top-6 -translate-x-1/2">
                                        <div className="relative">
                                            <div className="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
                                            <div className="absolute w-8 h-8 bg-blue-400 opacity-30 rounded-full animate-ping"></div>
                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}

/* CARD COMPONENT */
function Card({ step, Icon }) {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="group relative w-full max-w-md"
        >

            {/* GLOW */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-2xl blur opacity-30 group-hover:opacity-70 transition"></div>

            {/* CARD */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 shadow-xl">

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 mb-4">
                    <Icon size={22} className="text-white" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold">
                    {step.title}
                </h3>

                {/* DESC */}
                <p className="text-white/80 text-sm mt-2">
                    {step.desc}
                </p>

                {/* LIST */}
                <ul className="mt-4 space-y-2">
                    {step.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-white/90">
                            <CheckCircle size={16} />
                            {point}
                        </li>
                    ))}
                </ul>

            </div>

        </motion.div>
    );
}