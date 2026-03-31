"use client";

import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ServiceModal({ service, onClose }) {

    const Icon = service.icon;

    /* LOCK BODY SCROLL */

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    /* ESC CLOSE */

    useEffect(() => {
        const esc = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", esc);
        return () => window.removeEventListener("keydown", esc);

    }, [onClose]);

    return (

        <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >

            {/* BACKDROP CLICK */}

            <div
                className="absolute inset-0"
                onClick={onClose}
            />

            {/* MODAL */}

            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl h-[90vh] flex flex-col"
            >

                {/* CLOSE */}

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 bg-white/90 rounded-full p-2 shadow hover:bg-white transition"
                >
                    <X size={20} />
                </button>


                {/* IMAGE */}

                <div className="h-56 md:h-64 overflow-hidden rounded-t-2xl flex-shrink-0">

                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />

                </div>


                {/* SCROLLABLE BODY */}

                <div className="flex-1 overflow-y-auto p-6 md:p-10">

                    {/* HEADER */}

                    <div className="flex items-center gap-4 mb-6">

                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                            <Icon size={22} />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {service.title}
                        </h3>

                    </div>


                    {/* DESCRIPTION */}

                    <p className="text-slate-600 text-lg leading-relaxed mb-10">
                        {service.description}
                    </p>


                    {/* INFO GRID */}

                    <div className="grid md:grid-cols-2 gap-8">

                        <Info title="Perfect For" items={service.perfectFor} />

                        <Info title="What You Get" items={service.whatYouGet} />

                        <Info title="Business Benefits" items={service.benefits} />

                        <Info title="Deliverables" items={service.deliverables} />

                    </div>


                    {/* CTA */}

                    <div className="mt-12 flex flex-col sm:flex-row gap-4">

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                        >
                            Start Your Project
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-7 py-3 border border-slate-300 rounded-xl font-semibold text-slate-800 hover:bg-slate-100 transition"
                        >
                            Talk to an Expert
                        </Link>

                    </div>

                </div>

            </motion.div>

        </motion.div>

    );

}


/* INFO BLOCK */

function Info({ title, items }) {

    return (

        <div>

            <h4 className="font-semibold text-slate-900 mb-4">
                {title}
            </h4>

            <ul className="space-y-2 text-sm text-slate-600">

                {items.map((item) => (

                    <li key={item} className="flex gap-2">

                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>

                        {item}

                    </li>

                ))}

            </ul>

        </div>

    );

}