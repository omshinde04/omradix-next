"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function StepForm({ next }) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            setLoading(true);

            const res = await fetch("https://formspree.io/f/myznbgkl", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            setLoading(false);

            if (res.ok) {
                setSuccess(true);

                // wait 1.5s then go to wheel
                setTimeout(() => {
                    next();
                }, 1500);
            } else {
                alert("Something went wrong. Try again.");
            }
        } catch (error) {
            setLoading(false);
            alert("Network error. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">

            {/* TITLE */}
            <h2 className="text-white text-xl text-center font-semibold">
                Enter Your Details
            </h2>

            {/* INPUTS */}
            {["name", "email", "phone"].map((field) => (
                <input
                    key={field}
                    name={field}
                    required
                    placeholder={field}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                />
            ))}

            {/* SUCCESS MESSAGE */}
            {success && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center text-sm"
                >
                    ✅ Details submitted successfully!
                </motion.p>
            )}

            {/* BUTTON */}
            <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                disabled={loading}
                className="w-full bg-primary py-3 rounded-lg text-white font-medium shadow-glow transition disabled:opacity-60"
            >
                {loading ? "Submitting..." : "Continue"}
            </motion.button>
        </form>
    );
}