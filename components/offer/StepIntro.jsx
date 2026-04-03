"use client";

import { motion } from "framer-motion";

export default function StepIntro({ next }) {
    return (
        <div className="text-center space-y-6 sm:space-y-8">

            {/* 🎁 ICON + GLOW */}
            <div className="relative flex justify-center">
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 bg-primary/30 blur-2xl rounded-full animate-pulse"></div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative text-5xl sm:text-6xl"
                >
                    🎁
                </motion.div>
            </div>

            {/* 🔥 TITLE */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
            >
                Unlock Your{" "}
                <span className="text-primary">Exclusive Offer</span>
            </motion.h2>

            {/* ✨ SUBTEXT */}
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-textSecondary text-sm sm:text-base md:text-lg max-w-sm mx-auto"
            >
                Spin the wheel and win exclusive discounts on websites, SEO & more 🚀
            </motion.p>

            {/* 🎯 CTA BUTTON */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{
                    scale: 1.06,
                    boxShadow: "0px 0px 25px rgba(36,99,235,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="relative w-full py-3 sm:py-4 rounded-xl text-white font-semibold text-base sm:text-lg bg-gradient-to-r from-primary to-primaryLight overflow-hidden"
            >
                {/* ✨ SHINE EFFECT */}
                <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></span>

                🚀 Unlock My Spin
            </motion.button>

            {/* 🔥 TRUST TEXT */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs sm:text-sm text-textSecondary"
            >
                ⚡ Takes only 10 seconds • No spam guaranteed
            </motion.p>
        </div>
    );
}