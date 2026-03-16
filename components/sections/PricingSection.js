"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        price: "₹59,999",
        label: "Starting From",
        desc: "Ideal for startups and small businesses launching their first professional website.",
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
        desc: "For enterprises needing advanced architecture and integrations.",
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
        <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Transparent Investment
                    </h2>

                    <p className="mt-5 text-slate-600 text-lg">
                        Flexible pricing models designed for startups and enterprises.
                        Every project is unique — we create custom solutions tailored to your goals.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {plans.map((plan, index) => {

                        const highlight = plan.highlight;

                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -8 }}
                                className={`relative flex flex-col rounded-3xl p-8 backdrop-blur-lg transition
                ${highlight
                                        ? "border border-blue-500/40 shadow-xl bg-gradient-to-b from-white to-blue-50"
                                        : "border border-slate-200 shadow-md bg-white"
                                    }`}
                            >

                                {/* MOST POPULAR */}
                                {highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-5 py-1.5 rounded-full shadow">
                                        Most Popular
                                    </div>
                                )}

                                {/* PLAN NAME */}
                                <h3 className="text-xl font-semibold text-slate-900">
                                    {plan.name}
                                </h3>

                                {/* PRICE */}
                                <div className="mt-4">

                                    {plan.label && (
                                        <p className="text-xs text-slate-500">
                                            {plan.label}
                                        </p>
                                    )}

                                    <p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                                        {plan.price}
                                    </p>

                                </div>

                                {/* DESCRIPTION */}
                                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                    {plan.desc}
                                </p>

                                {/* FEATURES */}
                                <ul className="mt-6 space-y-3 flex-1">

                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-3 text-sm text-slate-700"
                                        >
                                            <Check size={18} className="text-blue-600" />
                                            {feature}
                                        </li>
                                    ))}

                                </ul>

                                {/* CTA */}
                                <Link href="/contact" className="mt-8">

                                    <button
                                        className={`w-full py-3 rounded-full font-semibold transition
                    ${highlight
                                                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                                                : "bg-slate-900 text-white hover:bg-black"
                                            }`}
                                    >
                                        Discuss Your Project
                                    </button>

                                </Link>

                            </motion.div>
                        );
                    })}

                </div>

                {/* FOOT NOTE */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-sm text-slate-500 mt-14 max-w-2xl mx-auto"
                >
                    Prices are indicative and may vary depending on integrations,
                    complexity, and infrastructure requirements.
                </motion.p>

            </div>

        </section>
    );
}