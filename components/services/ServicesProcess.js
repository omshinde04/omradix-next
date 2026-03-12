"use client";

import { motion } from "framer-motion";
import {
    Search,
    PencilRuler,
    Code,
    Rocket
} from "lucide-react";

const steps = [
    {
        icon: Search,
        number: "01",
        title: "Discover",
        desc: "We understand your business goals, target users and product vision to define the right strategy before development begins."
    },
    {
        icon: PencilRuler,
        number: "02",
        title: "Design",
        desc: "Our team designs modern user interfaces and scalable system architecture to ensure great user experience."
    },
    {
        icon: Code,
        number: "03",
        title: "Develop",
        desc: "We build high-performance applications using modern technologies with clean architecture and scalability."
    },
    {
        icon: Rocket,
        number: "04",
        title: "Launch & Scale",
        desc: "After launch we monitor, optimize and scale the system so your product grows with your business."
    }
];

export default function ServicesProcess() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">

            {/* HEADER */}

            <div className="text-center max-w-2xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Our Proven Development Process
                </h2>

                <p className="mt-4 text-slate-600">
                    A structured approach that helps transform ideas into
                    scalable digital products with speed and reliability.
                </p>

            </div>


            {/* PROCESS GRID */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                {steps.map((step, i) => {

                    const Icon = step.icon;

                    return (

                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >

                            {/* Hover Glow */}

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"></div>


                            <div className="relative">

                                {/* STEP NUMBER */}

                                <span className="text-xs font-semibold text-primary bg-blue-100 px-3 py-1 rounded-full">
                                    Step {step.number}
                                </span>


                                {/* ICON */}

                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-primary mt-5 mb-5 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition duration-300">

                                    <Icon size={24} />

                                </div>


                                {/* TITLE */}

                                <h3 className="text-lg font-semibold text-slate-900">
                                    {step.title}
                                </h3>


                                {/* DESCRIPTION */}

                                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                                    {step.desc}
                                </p>

                            </div>

                        </motion.div>

                    );
                })}

            </div>

        </section>
    );
}