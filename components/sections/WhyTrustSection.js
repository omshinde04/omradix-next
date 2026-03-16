"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Cpu, Database, Cloud, Code2 } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        desc: "Security-first architecture protecting infrastructure, APIs and user data using modern best practices."
    },
    {
        icon: Rocket,
        title: "High Performance Systems",
        desc: "Optimized backend architecture capable of handling high traffic and real-world production workloads."
    },
    {
        icon: Cpu,
        title: "Modern Engineering Stack",
        desc: "We build using modern frameworks and scalable system design patterns."
    },
    {
        icon: Database,
        title: "Reliable Data Systems",
        desc: "Highly available database systems designed for performance, consistency and scalability."
    },
    {
        icon: Cloud,
        title: "Cloud Infrastructure",
        desc: "Cloud-native deployment pipelines with automated CI/CD and high availability infrastructure."
    },
    {
        icon: Code2,
        title: "Clean Maintainable Code",
        desc: "Production-quality codebases designed for long-term maintainability and team scalability."
    }
];

export default function WhyTrustSection() {
    return (
        <section className="relative pt-6 sm:pt-10 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 bg-white">

            <div className="max-w-7xl mx-auto px-5 sm:px-6">

                {/* HEADER */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        Engineering That Businesses Trust
                    </h2>

                    <p className="mt-3 sm:mt-4 text-slate-600 text-base sm:text-lg">
                        Omradix Solutions builds reliable digital platforms using modern
                        engineering practices, scalable architecture and cloud-native
                        infrastructure.
                    </p>

                </motion.div>


                {/* FEATURE GRID */}

                <div className="mt-10 sm:mt-14 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -4 }}
                                className="group p-6 sm:p-7 rounded-2xl border border-slate-200 hover:border-blue-200 bg-white transition shadow-sm hover:shadow-lg"
                            >

                                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                                    <Icon size={20} />
                                </div>

                                <h3 className="mt-4 text-base sm:text-lg font-semibold text-slate-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>

                            </motion.div>

                        );

                    })}

                </div>


                {/* METRICS */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6 text-center"
                >

                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-slate-900">99.9%</p>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            Platform Reliability
                        </p>
                    </div>

                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-slate-900">50+</p>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            Projects Built
                        </p>
                    </div>

                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-slate-900">10x</p>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            Performance Optimized
                        </p>
                    </div>

                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-slate-900">24/7</p>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            System Monitoring
                        </p>
                    </div>

                </motion.div>

            </div>

        </section>
    );
}