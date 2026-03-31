"use client";
import { useState, useEffect } from "react";

export default function ChatBot() {

    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "👋 Hi! Welcome to Omradix Solutions.\n\nHow can I help you today?"
        }
    ]);
    const [input, setInput] = useState("");
    const [step, setStep] = useState(null);
    const [lead, setLead] = useState({});

    // ================= FAQ DATA =================
    const faqs = [
        {
            q: "💻 Build Website",
            a: "We build modern, high-performance websites for businesses.\n\n✔ Responsive\n✔ SEO Optimized\n✔ Fast & Secure\n\nDo you want a business website or something else?",
            next: "ask_type"
        },
        {
            q: "📱 Build App",
            a: "We build scalable mobile apps.\n\n✔ Android & iOS\n✔ Backend APIs\n✔ High Performance\n\nWhat type of app are you planning?",
            next: "lead_start"
        },
        {
            q: "🤖 AI Solutions",
            a: "We create AI-powered systems.\n\n✔ Chatbots\n✔ Automation\n✔ Smart workflows\n\nWhat do you want to automate?",
            next: "lead_start"
        },
        {
            q: "💰 Pricing",
            a: "💰 Our pricing depends on your project.\n\n• Website: ₹59,999+\n• Web Apps: ₹1,99,999+\n\nLet me understand your project for exact pricing 👇",
            next: "lead_start"
        },
        {
            q: "📞 Talk to Expert",
            a: "Great! Let's connect you with our expert 👇",
            next: "lead_start"
        }
    ];

    // ================= HANDLE MESSAGE =================
    const sendMessage = async (customText) => {
        const msg = customText || input;
        if (!msg) return;

        const userMsg = { sender: "user", text: msg };
        setMessages((prev) => [...prev, userMsg]);

        setInput("");

        // ================= FAQ MATCH =================
        const faq = faqs.find((f) => f.q === msg);

        if (faq) {
            setMessages((prev) => [...prev, { sender: "bot", text: faq.a }]);
            setStep(faq.next);
            return;
        }

        // ================= FLOW =================

        if (step === "ask_type") {
            setLead({ ...lead, type: msg });

            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Nice 👍 What kind of business is it?" }
            ]);

            setStep("lead_start");
            return;
        }

        if (step === "lead_start") {
            setLead({ ...lead, project: msg });

            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Let’s get this started 🚀 What should I call you?" }
            ]);

            setStep("name");
            return;
        }

        if (step === "name") {
            setLead({ ...lead, name: msg });

            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "📧 Your email address?" }
            ]);

            setStep("email");
            return;
        }

        if (step === "email") {
            const updatedLead = { ...lead, email: msg };

            setLead(updatedLead);

            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "🎉 Perfect! Redirecting you to WhatsApp..." }
            ]);

            // SEND TO BACKEND
            await fetch("/api/chatbot", {
                method: "POST",
                body: JSON.stringify(updatedLead)
            });

            // WHATSAPP REDIRECT
            const message = `Hello, my name is ${updatedLead.name}.
I want to build: ${updatedLead.type || ""}
Project: ${updatedLead.project}`;

            const url = `https://wa.me/919373545169?text=${encodeURIComponent(message)}`;

            setTimeout(() => {
                window.open(url, "_blank");
            }, 1500);

            setStep(null);
            return;
        }

        // fallback
        setMessages((prev) => [
            ...prev,
            {
                sender: "bot",
                text: "I can help you with websites, apps, AI solutions or pricing.\n\nChoose an option below 👇"
            }
        ]);
    };

    // ================= AUTO GREETING =================
    useEffect(() => {
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: "👇 Choose an option or type your idea"
                }
            ]);
        }, 2000);
    }, []);

    // ================= UI =================
    return (
        <>
            {/* CHAT WINDOW */}
            {open && (
                <div className="fixed bottom-40 right-6 w-80 bg-white shadow-card rounded-xl z-50 flex flex-col overflow-hidden">

                    {/* HEADER */}
                    <div className="bg-primary text-white p-4 flex justify-between">
                        <span>Omradix Assistant</span>
                        <button onClick={() => setOpen(false)}>✖</button>
                    </div>

                    {/* MESSAGES */}
                    <div className="p-3 h-80 overflow-y-auto text-sm">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`mb-2 ${msg.sender === "user" ? "text-right" : ""}`}
                            >
                                <span
                                    className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "bot"
                                        ? "bg-gray-100"
                                        : "bg-primary text-white"
                                        }`}
                                >
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* QUICK OPTIONS */}
                    <div className="flex flex-wrap gap-2 p-2">
                        {faqs.map((f, i) => (
                            <button
                                key={i}
                                onClick={() => sendMessage(f.q)}
                                className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200"
                            >
                                {f.q}
                            </button>
                        ))}
                    </div>

                    {/* INPUT */}
                    <div className="p-3 flex gap-2">
                        <input
                            className="flex-1 border px-2 py-1 rounded"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button
                            onClick={() => sendMessage()}
                            className="bg-primary text-white px-3 rounded"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}

            {/* FLOATING BUTTON */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-24 right-6 z-50 bg-primary text-white w-14 h-14 rounded-full shadow-glow flex items-center justify-center hover:scale-110 transition"
            >
                💬
            </button>
        </>
    );
}