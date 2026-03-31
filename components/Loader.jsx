"use client";

import { useEffect, useState } from "react";

export default function Loader({ children }) {

    const [loading, setLoading] = useState(true);
    const [exit, setExit] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            setExit(true);
        }, 2200);

        const remove = setTimeout(() => {
            setLoading(false);
        }, 2800);

        return () => {
            clearTimeout(timer);
            clearTimeout(remove);
        };

    }, []);

    if (loading) {
        return (
            <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-700 ${exit ? "opacity-0" : "opacity-100"}`}>

                {/* 🔥 BACKGROUND LIGHT SWEEP */}
                <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full animate-glowMove"></div>

                {/* 🔥 SLIDING PANELS (MULTI LAYER) */}
                <div className="absolute inset-0 flex">

                    <div className="flex-1 bg-blue-600 animate-slideLeftPremium"></div>
                    <div className="flex-1 bg-slate-900 animate-slideRightPremium"></div>

                </div>

                {/* 🔥 CENTER CONTENT */}
                <div className="relative z-10 text-center">

                    {/* LOGO TEXT */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide overflow-hidden">

                        <span className="inline-block animate-textReveal">
                            Omradix
                        </span>

                        <span className="inline-block text-blue-500 ml-2 animate-textReveal delay-200">
                            Solutions
                        </span>

                    </h1>

                    {/* TAGLINE */}
                    <p className="text-sm md:text-base text-slate-300 mt-4 tracking-wide animate-fadeUp delay-500">
                        Building Digital Excellence
                    </p>

                    {/* LINE ANIMATION */}
                    <div className="mt-6 w-32 h-[2px] bg-blue-500 mx-auto animate-lineGrow"></div>

                </div>

            </div>
        );
    }

    return children;
}