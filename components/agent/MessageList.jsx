"use client";

import { useEffect, useRef, useState } from "react";

// ===============================
// ✨ TYPING EFFECT COMPONENT
// ===============================
const TypingText = ({ text }) => {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;
        const speed = 10; // lower = faster

        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayed}</span>;
};

export default function MessageList({ messages }) {
    const containerRef = useRef(null);
    const endRef = useRef(null);
    const [isAtBottom, setIsAtBottom] = useState(true);

    // ===============================
    // 📜 SCROLL HANDLING
    // ===============================
    const handleScroll = () => {
        const el = containerRef.current;
        if (!el) return;

        const threshold = 50;
        const atBottom =
            el.scrollHeight - el.scrollTop - el.clientHeight < threshold;

        setIsAtBottom(atBottom);
    };

    useEffect(() => {
        if (isAtBottom) {
            endRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isAtBottom]);

    return (
        <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent"
        >
            {messages.map((msg, i) => {
                const isUser = msg.role === "user";
                const isLast = i === messages.length - 1;

                return (
                    <div
                        key={i}
                        className={`flex items-end gap-2 animate-fadeIn ${isUser ? "justify-end" : "justify-start"
                            }`}
                    >
                        {/* 🤖 AI Avatar */}
                        {!isUser && (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex items-center justify-center text-xs shadow">
                                AI
                            </div>
                        )}

                        {/* 💬 Message Bubble */}
                        <div
                            className={`px-4 py-2 rounded-2xl text-sm max-w-[75%] shadow-sm transition-all duration-300 ${isUser
                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-sm"
                                : "bg-white border text-gray-800 rounded-bl-sm"
                                }`}
                        >
                            {/* ✨ Typing effect ONLY for last AI message */}
                            {!isUser && isLast ? (
                                <TypingText text={msg.text} />
                            ) : (
                                msg.text
                            )}
                        </div>

                        {/* 👤 User Avatar */}
                        {isUser && (
                            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-xs shadow">
                                You
                            </div>
                        )}
                    </div>
                );
            })}

            {/* 👇 SCROLL TARGET */}
            <div ref={endRef} />
        </div>
    );
}