"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../../data/servicesData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" }
    }
};

export default function ServicesGrid() {

    const [expanded, setExpanded] = useState(false);

    const visibleServices = expanded ? services : services.slice(0, 3);

    return (

        <section className="max-w-7xl mx-auto px-6 py-24">

            {/* HEADER */}

            <div className="text-center max-w-3xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Powerful Digital Services
                    <span className="block text-blue-600">
                        Designed for Modern Businesses
                    </span>
                </h2>

                <p className="mt-4 text-slate-600 text-lg">
                    We help startups and companies build scalable digital products,
                    automate operations and grow their technology platforms.
                </p>

            </div>


            {/* GRID */}

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            >

                {visibleServices.map((service) => {

                    const Icon = service.icon;

                    return (

                        <motion.article
                            key={service.slug}
                            variants={item}
                            className="group bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
                        >

                            {/* IMAGE */}

                            <div className="h-48 overflow-hidden">

                                <img
                                    src={service.image}
                                    alt={service.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition duration-500"
                                />

                            </div>


                            {/* CONTENT */}

                            <div className="p-7 flex flex-col flex-grow">

                                {/* ICON */}

                                <div className="w-11 h-11 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">

                                    <Icon size={20} />

                                </div>


                                {/* TITLE */}

                                <h3 className="text-lg font-semibold text-slate-900">
                                    {service.title}
                                </h3>


                                {/* DESCRIPTION */}

                                <p className="text-sm text-slate-600 mt-2 leading-relaxed flex-grow">
                                    {service.shortDescription}
                                </p>


                                {/* LINK */}

                                <Link
                                    href={`/services/${service.slug}`}
                                    className="mt-5 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition"
                                >
                                    Learn More
                                    <ArrowRight size={16} />
                                </Link>

                            </div>

                        </motion.article>

                    );

                })}

            </motion.div>


            {/* VIEW MORE */}

            <div className="flex justify-center mt-14">

                <button
                    onClick={() => setExpanded(!expanded)}
                    className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg"
                >
                    {expanded ? "View Less Services" : "View All Services"}
                </button>

            </div>

        </section>

    );

}