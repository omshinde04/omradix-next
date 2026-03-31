"use client";

import { useEffect, useState } from "react";

export default function Loader({ children }) {

    const [loading, setLoading] = useState(true);
    const [exit, setExit] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {

        setMounted(true);
        document.body.style.overflow = "hidden";

        const exitTimer = setTimeout(() => setExit(true), 2000);

        const removeTimer = setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "auto";
        }, 2600);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(removeTimer);
        };

    }, []);

    if (!mounted) return null;

    if (loading) {
        return (
            <div
                className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-700 ${exit ? "opacity-0" : "opacity-100"
                    }`}
            >

                {/* 🔥 PANEL REVEAL (BLUE + DARK) */}
                <div className="absolute inset-0 flex z-20 pointer-events-none">

                    <div className="flex-1 bg-blue-600 animate-panelLeft"></div>
                    <div className="flex-1 bg-slate-900 animate-panelRight"></div>

                </div>

                {/* 🔥 LIGHT SOURCE */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/20 blur-3xl rounded-full animate-lightPulse z-10"></div>

                {/* 🔦 SPOTLIGHT */}
                <div className="spotlight-cone z-10"></div>

                {/* ✨ DUST */}
                <div className="light-dust z-10"></div>

                {/* 🔥 CONTENT */}
                <div className="relative z-30 text-center px-6">

                    <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-white">

                        <span className="animate-textReveal">
                            Omradix
                        </span>

                        <span className="text-blue-500 ml-2 animate-textReveal delay-200">
                            Solutions
                        </span>

                    </h1>

                    <p className="mt-4 text-sm md:text-base text-slate-300 animate-fadeUp delay-400">
                        Building Digital Excellence
                    </p>

                </div>

            </div>
        );
    }

    return <div className="animate-pageEnter">{children}</div>;
}