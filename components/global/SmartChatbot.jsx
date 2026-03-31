"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "We provide web development, SaaS platforms, mobile apps, UI/UX design, cloud solutions, and AI automation systems tailored for modern businesses.",
    },
    {
        question: "How much does a project cost?",
        answer:
            "Project cost depends on your requirements. Basic websites start affordable, while custom SaaS or apps vary based on features and complexity.",
    },
    {
        question: "How long does development take?",
        answer:
            "Most projects are delivered within 2–6 weeks. Larger platforms may take longer depending on scope.",
    },
    {
        question: "Do you work with startups?",
        answer:
            "Yes 🚀 We specialize in helping startups go from idea → launch with scalable architecture.",
    },
    {
        question: "Can you scale my existing project?",
        answer:
            "Absolutely. We help optimize, redesign and scale existing systems for performance and growth.",
    },
];

export default function SmartChatbot() {

    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi 👋 I'm your Omradix assistant.\nHow can I help you today?" }
    ]);

    const messagesEndRef = useRef(null);

    // AUTO SCROLL FIX ✅
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = (text, from = "user") => {
        setMessages((prev) => [...prev, { from, text }]);
    };

    const handleFAQ = (faq) => {
        sendMessage(faq.question);

        setTimeout(() => {
            sendMessage(faq.answer, "bot");
        }, 400);

        setTimeout(() => {
            sendMessage("👉 Want to discuss your project?", "bot");
        }, 900);
    };

    return (
        <>
            {/* FLOAT BUTTON */}

            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-24 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 z-[998]"
            >
                <MessageCircle size={22} />
            </button>

            {/* CHAT */}

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 80 }}
                        className="fixed bottom-24 right-4 sm:right-6 w-[95%] sm:w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl border z-[998] flex flex-col overflow-hidden"
                    >

                        {/* HEADER */}

                        <div className="flex justify-between items-center p-4 border-b bg-white sticky top-0 z-10">
                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    Omradix Assistant
                                </h3>
                                <p className="text-xs text-green-500">● Online</p>
                            </div>

                            <button onClick={() => setOpen(false)}>
                                <X size={18} />
                            </button>
                        </div>

                        {/* MESSAGES AREA (SCROLL FIXED) */}

                        <div className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth">

                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`text-sm p-3 rounded-xl max-w-[80%] whitespace-pre-line ${msg.from === "bot"
                                        ? "bg-slate-100 text-slate-700"
                                        : "bg-blue-600 text-white ml-auto"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}

                            <div ref={messagesEndRef} />

                        </div>

                        {/* FAQ BUTTONS */}

                        <div className="p-3 border-t space-y-2 bg-white">

                            <p className="text-xs text-slate-500 mb-2">
                                Quick Questions:
                            </p>

                            <div className="flex flex-wrap gap-2">

                                {faqs.map((faq, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleFAQ(faq)}
                                        className="text-xs bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-full transition"
                                    >
                                        {faq.question}
                                    </button>
                                ))}

                            </div>

                        </div>

                        {/* CTA (IMPORTANT FOR LEADS) */}

                        <div className="p-4 border-t bg-slate-50">

                            <Link
                                href="/contact"
                                className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
                            >
                                Start Your Project 🚀
                            </Link>

                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}