"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppChat() {

    const phoneNumber = "919373545169";

    const message =
        "Hello! I want to discuss a project with Omradix Solutions.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const [showTooltip, setShowTooltip] = useState(false);

    // Show tooltip after delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTooltip(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">



            {/* CIRCULAR BUTTON */}

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-14 h-14 flex items-center justify-center bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition"
            >

                {/* ICON */}
                <MessageCircle size={26} />

                {/* PULSE RING */}
                <span className="absolute w-14 h-14 rounded-full bg-green-400 opacity-30 animate-ping"></span>

                {/* SOFT GLOW */}
                <span className="absolute w-20 h-20 rounded-full bg-green-500/20 blur-xl"></span>

            </motion.a>

        </div>
    );
}