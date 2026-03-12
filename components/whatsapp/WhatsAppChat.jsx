"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppChat() {

    const phoneNumber = "919373545169"; // your WhatsApp number
    const message = "Hello! I want to discuss a project with Omradix Solutions.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 right-6 z-[9999]"
        >

            <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-xl hover:scale-110 transition">

                <MessageCircle size={26} />

                {/* pulse ring */}
                <span className="absolute w-14 h-14 rounded-full bg-green-400 opacity-30 animate-ping"></span>

            </div>

        </motion.a>
    );
}