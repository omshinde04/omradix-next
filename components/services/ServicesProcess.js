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

        <section className="relative py-24 bg-white overflow-hidden">

            {/* BACKGROUND GLOW */}

            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100 blur-[120px] opacity-40"></div>

            <div className="max-w-6xl mx-auto px-6 relative">

                {/* HEADER */}

                <div className="text-center max-w-3xl mx-auto mb-20">

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                        Our Product Development Process
                    </h2>

                    <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                        A proven framework that transforms ideas into scalable
                        digital platforms used by startups and businesses.
                    </p>

                </div>


                {/* TIMELINE */}

                <div className="relative">

                    {/* CENTER LINE */}

                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-100 -translate-x-1/2"></div>


                    {/* STEPS */}

                    <div className="space-y-16">

                        {steps.map((step, i) => {

                            const Icon = step.icon;
                            const isLeft = i % 2 === 0;

                            return (

                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"
                                        }`}
                                >

                                    {/* THREAD */}

                                    <div
                                        className={`absolute top-10 h-[2px] bg-blue-200 ${isLeft
                                            ? "left-1/2 w-[100px]"
                                            : "right-1/2 w-[100px]"
                                            }`}
                                    ></div>


                                    {/* NODE */}

                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full shadow-md"></div>


                                    {/* CARD */}

                                    <motion.div
                                        whileHover={{ y: -6 }}
                                        className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-xl transition"
                                    >

                                        {/* ICON */}

                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-5">

                                            <Icon size={22} />

                                        </div>

                                        {/* TITLE */}

                                        <h3 className="text-xl font-semibold text-slate-900">
                                            {step.title}
                                        </h3>

                                        {/* DESC */}

                                        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                                            {step.desc}
                                        </p>

                                        {/* FEATURES */}

                                        <ul className="mt-5 space-y-2">

                                            {step.points.map((point) => (

                                                <li
                                                    key={point}
                                                    className="flex items-center gap-2 text-sm text-slate-600"
                                                >
                                                    <CheckCircle size={16} className="text-blue-500" />

                                                    {point}
                                                </li>

                                            ))}

                                        </ul>

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