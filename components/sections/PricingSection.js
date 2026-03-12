"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        price: "₹59,999",
        label: "Starting From",
        desc: "Ideal for startups and small businesses launching their first professional website or digital presence.",
        features: [
            "Professional Business Website",
            "Responsive Mobile Design",
            "Basic SEO Setup",
            "Deployment & Launch Support",
        ],
        highlight: false,
    },
    {
        name: "Growth",
        price: "₹1,99,999",
        label: "Starting From",
        desc: "Perfect for startups building scalable web applications or SaaS platforms.",
        features: [
            "Custom Web Application",
            "Admin Dashboard",
            "Secure Backend & APIs",
            "Priority Support",
        ],
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        label: "",
        desc: "For enterprises and growing companies needing custom software systems and advanced integrations.",
        features: [
            "Custom Software Architecture",
            "Advanced Integrations",
            "High Performance Infrastructure",
            "Dedicated Support",
        ],
        highlight: false,
    },
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-16"
                >
                    <h2 className="text-4xl font-bold text-slate-900">
                        Transparent Investment
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Flexible pricing models designed for startups, growing businesses,
                        and enterprises. Every project is unique — we’re happy to discuss a
                        custom solution that fits your goals and budget.
                    </p>
                </motion.div>


                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {plans.map((plan, index) => {

                        const highlight = plan.highlight;

                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -6 }}
                                className={`relative flex flex-col h-full rounded-2xl p-8 border transition bg-white
                ${highlight ? "border-primary shadow-lg" : "border-slate-200 shadow-sm"}`}
                            >

                                {/* MOST POPULAR BADGE */}
                                {highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-4 py-1 rounded-full">
                                        MOST POPULAR
                                    </div>
                                )}

                                {/* PLAN NAME */}
                                <h3 className="text-lg font-semibold text-slate-900">
                                    {plan.name}
                                </h3>

                                {/* PRICE */}
                                <div className="mt-3">
                                    {plan.label && (
                                        <p className="text-xs text-slate-500">
                                            {plan.label}
                                        </p>
                                    )}

                                    <p className="text-4xl font-bold text-slate-900">
                                        {plan.price}
                                    </p>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                    {plan.desc}
                                </p>

                                {/* FEATURES */}
                                <ul className="mt-6 space-y-3 flex-1">

                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-3 text-sm text-slate-700"
                                        >
                                            <Check size={18} className="text-primary" />
                                            {feature}
                                        </li>
                                    ))}

                                </ul>

                                {/* BUTTON */}
                                <Link href="/contact" className="mt-8">

                                    <button
                                        className="w-full py-3 rounded-full font-medium transition 
                    bg-primary text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                                    >
                                        Discuss Your Project
                                    </button>

                                </Link>

                            </motion.div>
                        );
                    })}

                </div>


                {/* NOTE */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-sm text-slate-500 mt-12 max-w-2xl mx-auto"
                >
                    Prices are indicative and may vary depending on project scope,
                    integrations, and complexity. Contact us for a tailored estimate.
                </motion.p>

            </div>

        </section>
    );
}