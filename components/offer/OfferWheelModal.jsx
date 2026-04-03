"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

import StepIntro from "./StepIntro";
import StepForm from "./StepForm";
import Wheel from "./Wheel";
import StepResult from "./StepResult";

export default function OfferWheelModal({ isOpen, onClose }) {
    const [mounted, setMounted] = useState(false);
    const [step, setStep] = useState(0);
    const [selectedOffer, setSelectedOffer] = useState("");

    useEffect(() => {
        setMounted(true);
    }, []);

    // 🔥 reset when modal closes
    useEffect(() => {
        if (!isOpen) {
            setStep(0);
            setSelectedOffer("");
        }
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <AnimatePresence mode="wait">
            <motion.div
                key="overlay"
                className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-xl px-3 sm:px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    key="modal"
                    initial={{ scale: 0.85, y: 60, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full max-w-md sm:max-w-lg rounded-2xl p-[1px] bg-gradient-to-br from-primary via-primaryLight to-blue-400 shadow-glow"
                >
                    <div className="bg-backgroundDark rounded-2xl p-5 sm:p-6 relative overflow-hidden">

                        {/* CLOSE */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-white/50 hover:text-white text-lg transition"
                        >
                            ✕
                        </button>

                        {/* 🔥 STEP TRANSITION */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.3 }}
                            >
                                {step === 0 && <StepIntro next={() => setStep(1)} />}

                                {step === 1 && <StepForm next={() => setStep(2)} />}

                                {step === 2 && (
                                    <Wheel
                                        onComplete={(offer) => {
                                            setSelectedOffer(offer);
                                            setStep(3);
                                        }}
                                    />
                                )}

                                {step === 3 && (
                                    <StepResult
                                        offer={selectedOffer}
                                        onClose={onClose}
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
}