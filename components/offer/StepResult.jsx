"use client";

import { motion } from "framer-motion";

export default function StepResult({ offer, onClose }) {
    return (
        <div className="text-center space-y-6 sm:space-y-8">

            {/* 🎉 ICON + GLOW */}
            <div className="relative flex justify-center">
                <div className="absolute w-24 h-24 sm:w-28 sm:h-28 bg-primary/30 blur-2xl rounded-full animate-pulse"></div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl sm:text-6xl"
                >
                    🎉
                </motion.div>
            </div>

            {/* 🔥 TITLE */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
            >
                You Won 🎯
            </motion.h2>

            {/* 🎁 OFFER CARD */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mx-auto max-w-xs sm:max-w-sm p-[1px] rounded-xl bg-gradient-to-r from-primary to-primaryLight"
            >
                <div className="bg-backgroundDark rounded-xl px-6 py-4">
                    <p className="text-primary text-xl sm:text-2xl font-bold tracking-wide">
                        {offer}
                    </p>
                </div>
            </motion.div>

            {/* ⏳ URGENCY */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base text-yellow-400"
            >
                ⏳ Limited time offer — claim now!
            </motion.p>

            {/* 💬 CTA BUTTON */}
            <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 25px rgba(34,197,94,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/919373545169?text=Hi I won ${offer}`}
                target="_blank"
                className="block w-full py-3 sm:py-4 rounded-xl text-white font-semibold text-base sm:text-lg bg-gradient-to-r from-green-500 to-green-600"
            >
                💬 Claim on WhatsApp
            </motion.a>

            {/* 📞 SECONDARY CTA (DUAL NUMBERS) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-3"
            >
                <a
                    href="tel:+919373545169"
                    className="block w-full py-3 rounded-xl text-white/80 border border-white/20 hover:bg-white/5 transition text-center"
                >
                    📞 Call: +91 9373545169
                </a>

                <a
                    href="tel:+917378534650"
                    className="block w-full py-3 rounded-xl text-white/80 border border-white/20 hover:bg-white/5 transition text-center"
                >
                    📞 Call: +91 7378534650
                </a>
            </motion.div>
            {/* 🔒 TRUST */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xs sm:text-sm text-textSecondary"
            >
                🔒 No spam • Instant response guaranteed
            </motion.p>

            {/* ❌ CLOSE */}
            <button
                onClick={onClose}
                className="text-white/40 text-sm hover:text-white transition"
            >
                Close
            </button>
        </div>
    );
}