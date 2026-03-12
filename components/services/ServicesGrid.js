"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Code,
    Globe,
    Smartphone,
    LineChart,
    Cloud,
    Share2,
    Bot,
    Workflow,
    Database
} from "lucide-react";

const services = [
    {
        icon: Code,
        title: "Custom Web Development",
        desc: "High-performance business websites and scalable platforms built with modern frameworks.",
        points: [
            "React & Next.js Development",
            "SEO Optimized Architecture",
            "High Performance UI"
        ]
    },
    {
        icon: Globe,
        title: "Web Applications",
        desc: "Advanced web platforms designed to support thousands of users and business workflows.",
        points: [
            "SaaS Platforms",
            "Admin Dashboards",
            "Client Portals"
        ]
    },
    {
        icon: Smartphone,
        title: "Mobile Applications",
        desc: "Modern mobile apps designed for performance, usability and scalability.",
        points: [
            "Android Apps",
            "Cross-Platform Apps",
            "Backend Integration"
        ]
    },
    {
        icon: LineChart,
        title: "Data Analytics",
        desc: "Transform complex data into visual insights for better decision making.",
        points: [
            "Power BI Dashboards",
            "Business Intelligence",
            "Performance Tracking"
        ]
    },
    {
        icon: Cloud,
        title: "Cloud & AWS Infrastructure",
        desc: "Deploy secure and scalable infrastructure for modern applications.",
        points: [
            "AWS Cloud Deployment",
            "Server Architecture",
            "Scalable Backend Systems"
        ]
    },
    {
        icon: Share2,
        title: "Digital Marketing",
        desc: "Strategic marketing campaigns designed to grow brand visibility and traffic.",
        points: [
            "SEO Optimization",
            "Social Media Growth",
            "Content Strategy"
        ]
    },
    {
        icon: Bot,
        title: "AI Integration",
        desc: "Integrate AI capabilities to automate workflows and enhance customer interactions.",
        points: [
            "AI Chatbots",
            "Automation Systems",
            "AI Workflow Integration"
        ]
    },
    {
        icon: Workflow,
        title: "Business Automation",
        desc: "Automate internal operations and reduce manual tasks with smart systems.",
        points: [
            "Workflow Automation",
            "System Integrations",
            "Process Optimization"
        ]
    },
    {
        icon: Database,
        title: "Backend & APIs",
        desc: "Reliable backend systems designed for security, speed and scalability.",
        points: [
            "REST API Development",
            "Database Architecture",
            "Secure Authentication Systems"
        ]
    }
];

export default function ServicesGrid() {

    const [expanded, setExpanded] = useState(false);

    const visibleServices = expanded ? services : services.slice(0, 6);

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">

            {/* HEADER */}

            <div className="text-center max-w-2xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Powerful Digital Services
                    <span className="block text-primary">
                        Designed for Modern Businesses
                    </span>
                </h2>

                <p className="mt-4 text-slate-600">
                    We help startups and companies design, build and scale digital
                    products using modern technologies and intelligent automation.
                </p>

            </div>



            {/* GRID */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

                <AnimatePresence>

                    {visibleServices.map((service, i) => {

                        const Icon = service.icon;

                        return (

                            <motion.article
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ delay: i * 0.07 }}
                                whileHover={{ y: -8 }}
                                className="group relative p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
                            >

                                {/* hover glow */}

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"></div>


                                <div className="relative">

                                    {/* ICON */}

                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition duration-300">
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

                                    <ul className="mt-5 space-y-2 text-sm text-slate-600">

                                        {service.points.map((point) => (

                                            <li key={point} className="flex items-center gap-2">

                                                <span className="w-2 h-2 bg-primary rounded-full"></span>

                                                {point}

                                            </li>

                                        ))}

                                    </ul>

                                </div>

                            </motion.article>

                        );

                    })}

                </AnimatePresence>

            </div>



            {/* VIEW MORE BUTTON */}

            <div className="flex justify-center mt-14">

                <button
                    onClick={() => setExpanded(!expanded)}
                    className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg"
                >
                    {expanded ? "View Less Services" : "View All Services"}
                </button>

            </div>

        </section>
    );
}