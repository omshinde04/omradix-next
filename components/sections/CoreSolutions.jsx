"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Rocket,
    Bot,
    BarChart3,
    Globe,
    Workflow,
    ShieldCheck
} from "lucide-react";

const services = [
    {
        icon: Rocket,
        title: "Launch Digital Products",
        desc: "Turn your business idea into a powerful web platform designed to attract users and grow fast.",
        points: ["Product Development", "Startup Launch Support"],
    },
    {
        icon: Globe,
        title: "Build Scalable Platforms",
        desc: "We design high-performance digital platforms that support thousands of users and growing businesses.",
        points: ["SaaS Platforms", "Client Portals"],
    },
    {
        icon: Bot,
        title: "AI Powered Automation",
        desc: "Automate business workflows and customer interactions using intelligent AI systems.",
        points: ["AI Chatbots", "Automation Systems"],
    },
    {
        icon: BarChart3,
        title: "Data & Analytics Systems",
        desc: "Transform business data into clear insights using interactive dashboards and analytics tools.",
        points: ["Business Dashboards", "Performance Tracking"],
    },
    {
        icon: Workflow,
        title: "Process Automation",
        desc: "Eliminate manual work by automating internal workflows and business operations.",
        points: ["Workflow Automation", "System Integrations"],
    },
    {
        icon: ShieldCheck,
        title: "Reliable Digital Infrastructure",
        desc: "Secure and scalable backend systems designed to keep your applications fast and reliable.",
        points: ["Secure Systems", "Scalable Architecture"],
    },
];

export default function CoreSolutions() {

    const [expanded, setExpanded] = useState(false);
    const visible = expanded ? services : services.slice(0, 3);

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-16">

                    <div>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Solutions That Drive
                            <span className="text-primary block">
                                Real Business Growth
                            </span>
                        </h2>

                        <p className="mt-4 text-slate-600 max-w-xl">
                            We help startups and companies build powerful digital products,
                            automate operations, and scale their technology infrastructure.
                        </p>

                    </div>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="hidden md:block text-primary font-medium hover:underline"
                    >
                        {expanded ? "View Less" : "View All Solutions"}
                    </button>

                </div>



                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <AnimatePresence>

                        {visible.map((service, index) => {

                            const Icon = service.icon;

                            return (

                                <motion.article
                                    key={service.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.45, delay: index * 0.06 }}
                                    className="group relative p-8 rounded-2xl border border-slate-200 hover:border-primary/30 bg-white hover:shadow-2xl transition-all"
                                >

                                    {/* gradient hover glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl transition"></div>

                                    <div className="relative">

                                        {/* ICON */}
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition">
                                            <Icon size={24} />
                                        </div>

                                        {/* TITLE */}
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            {service.title}
                                        </h3>

                                        {/* DESCRIPTION */}
                                        <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                                            {service.desc}
                                        </p>

                                        {/* FEATURES */}
                                        <ul className="mt-6 space-y-2 text-sm text-slate-600">

                                            {service.points.map((p) => (
                                                <li key={p} className="flex items-center gap-2">

                                                    <span className="w-2 h-2 bg-primary rounded-full"></span>

                                                    {p}

                                                </li>
                                            ))}

                                        </ul>

                                    </div>

                                </motion.article>

                            );

                        })}



                        {/* CTA CARD */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="lg:col-span-3 flex justify-center"
                        >

                            <div className="p-10 rounded-2xl bg-primary text-white flex flex-col justify-center items-center text-center max-w-md">

                                <h3 className="text-xl font-semibold">
                                    Have a unique challenge?
                                </h3>

                                <p className="text-blue-100 mt-3 text-sm">
                                    We specialize in building custom digital solutions for
                                    complex and unconventional business problems.
                                </p>

                                <button className="mt-6 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition">
                                    Book a Consultation
                                </button>

                            </div>

                        </motion.div>
                    </AnimatePresence>

                </div>



                {/* MOBILE BUTTON */}
                <div className="flex justify-center mt-12 md:hidden">

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition"
                    >
                        {expanded ? "View Less" : "View More Solutions"}
                    </button>

                </div>

            </div>

        </section>
    );
}