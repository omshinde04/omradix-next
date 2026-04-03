"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

// 🎯 BALANCED + PROFIT SAFE OFFERS
const offers = [
    // 🔴 HIGH TIER (RARE - HOOK)
    { label: "₹1,00,000 OFF Project 💎", weight: 1 },
    { label: "₹50,000 OFF Website 🚀", weight: 2 },

    // 🟣 MID-HIGH (GOOD VALUE)
    { label: "₹25,000 OFF Development", weight: 3 },
    { label: "₹20,000 OFF Website", weight: 4 },

    // 🔵 MID (MOST TARGET USERS)
    { label: "₹10,000 OFF Project", weight: 6 },
    { label: "₹5,000 OFF Services", weight: 7 },

    // 🟢 ENTRY (HIGH CONVERSION)
    { label: "₹2,000 OFF", weight: 8 },
    { label: "₹1,000 OFF", weight: 9 },

    // 🟡 SAFE (NO LOSS - MOST COMMON)
    { label: "Free Premium Website Audit", weight: 12 },
    { label: "Free Strategy Call", weight: 13 },

    // 🎉 BONUS (FEELS LIKE WIN)
    { label: "Exclusive Bonus Deal 🎁", weight: 10 },
];
// 🎡 COLORS
const colors = [
    "#2463eb",
    "#4f7df3",
    "#7aa2ff",
    "#1d4ed8",
    "#3b82f6",
    "#60a5fa",
    "#1e40af",
    "#2563eb",
];

// 🎯 WEIGHT LOGIC
const getWeightedOffer = () => {
    const pool = [];

    offers.forEach((offer) => {
        for (let i = 0; i < offer.weight; i++) {
            pool.push(offer.label);
        }
    });

    return pool[Math.floor(Math.random() * pool.length)];
};

export default function Wheel({ onComplete }) {
    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);

    const spinSound = useRef(null);
    const winSound = useRef(null);

    const spin = () => {
        if (spinning) return;

        setSpinning(true);

        // 🔊 SPIN SOUND
        spinSound.current.currentTime = 0;
        spinSound.current.volume = 0.5;
        spinSound.current.play();

        const selected = getWeightedOffer();

        const index = offers.findIndex(o => o.label === selected);

        const segmentAngle = 360 / offers.length;

        const finalRotation =
            360 * 6 +
            (360 - index * segmentAngle - segmentAngle / 2);

        setRotation((prev) => prev + finalRotation);

        // 🎰 TICK SOUND
        const tick = new Audio("/sounds/tick.wav");
        tick.volume = 0.4;

        let speed = 70;
        const interval = setInterval(() => {
            tick.currentTime = 0;
            tick.play();

            speed += 18;
            if (speed > 300) clearInterval(interval);
        }, speed);

        setTimeout(() => {
            clearInterval(interval);

            // 🔊 WIN SOUND
            winSound.current.currentTime = 0;
            winSound.current.volume = 0.7;
            winSound.current.play();

            confetti({
                particleCount: 250,
                spread: 130,
                origin: { y: 0.6 },
            });

            onComplete(selected);
            setSpinning(false);
        }, 3600);
    };

    return (
        <div className="text-center space-y-6">

            {/* AUDIO */}
            <audio ref={spinSound} src="/sounds/spin.mp3" preload="auto" />
            <audio ref={winSound} src="/sounds/win.mp3" preload="auto" />

            <h2 className="text-white text-xl sm:text-2xl font-semibold">
                Try Your Luck 🎯
            </h2>

            <div className="relative flex justify-center items-center">

                {/* POINTER */}
                <div className="absolute -top-3 z-20">
                    <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[18px] border-b-white drop-shadow-xl"></div>
                </div>

                {/* GLOW */}
                <div className="absolute w-72 h-72 sm:w-[360px] sm:h-[360px] rounded-full blur-3xl bg-primary/30 animate-pulse"></div>

                {/* WHEEL */}
                <motion.div
                    animate={{ rotate: rotation }}
                    transition={{ duration: 3.5, ease: "easeOut" }}
                    className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-[6px] border-white/10 shadow-[0_0_60px_rgba(36,99,235,0.6)] overflow-hidden"
                >
                    {offers.map((offer, i) => {
                        const rotate = (360 / offers.length) * i;

                        return (
                            <div
                                key={i}
                                className="absolute w-full h-full flex items-start justify-center"
                                style={{ transform: `rotate(${rotate}deg)` }}
                            >
                                <div
                                    className="w-1/2 h-1/2 origin-bottom-right rounded-tr-full"
                                    style={{
                                        background: colors[i % colors.length],
                                        clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                                    }}
                                />

                                <span
                                    className="absolute text-[10px] sm:text-xs text-white font-semibold text-center px-1"
                                    style={{
                                        transform: `rotate(30deg) translateY(40px)`,
                                    }}
                                >
                                    {offer.label}
                                </span>
                            </div>
                        );
                    })}

                    {/* BUTTON */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.08 }}
                            onClick={spin}
                            disabled={spinning}
                            className="w-20 h-20 sm:w-24 sm:h-24 bg-white text-black rounded-full font-bold shadow-xl border-[3px] border-primary"
                        >
                            {spinning ? "..." : "SPIN"}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}