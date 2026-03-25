"use client";

import { useEffect, useRef, useState } from "react";
import { useVoiceEngine } from "./hooks/useVoiceEngine";
import MicButton from "./MicButton";
import MessageList from "./MessageList";
import axios from "axios";

export default function AIWidget() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [isThinking, setIsThinking] = useState(false);

    const sessionIdRef = useRef(null);

    const API_BASE =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

    const {
        messages,
        status,
        setMessages,
        startRecording,
        playStreamingAudio,
        stopAll,
        shouldListenRef,
    } = useVoiceEngine(API_BASE, sessionIdRef);

    useEffect(() => {
        let session = localStorage.getItem("ai_session");

        if (!session) {
            session =
                typeof crypto !== "undefined" && crypto.randomUUID
                    ? crypto.randomUUID()
                    : "session-" +
                    Date.now() +
                    "-" +
                    Math.random().toString(36).substring(2, 10);

            localStorage.setItem("ai_session", session);
        }

        sessionIdRef.current = session;
    }, []);

    const triggerGreeting = async () => {
        setIsThinking(true);

        const res = await axios.post(`${API_BASE}/api/ask`, {
            query: "__start__",
            sessionId: sessionIdRef.current,
        });

        const aiText = res.data.text;

        setMessages([{ role: "bot", text: aiText }]);
        playStreamingAudio(aiText);

        setIsThinking(false);
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        stopAll();
        setIsThinking(true);

        const msg = input;
        setInput("");

        setMessages((prev) => [
            ...prev,
            { role: "user", text: msg },
        ]);

        const res = await axios.post(`${API_BASE}/api/ask`, {
            query: msg,
            sessionId: sessionIdRef.current,
        });

        const aiText = res.data.text;

        setMessages((prev) => [
            ...prev,
            { role: "bot", text: aiText },
        ]);

        playStreamingAudio(aiText);
        setIsThinking(false);
    };

    const closeChat = () => {
        setOpen(false);
        shouldListenRef.current = false;
        stopAll();
    };

    const getStatusLabel = () => {
        if (status === "listening") return "🎤 Listening...";
        if (status === "speaking") return "🤖 Speaking...";
        if (isThinking) return "🤖 Thinking...";
        return "💬 Ready";
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={async () => {
                    const next = !open;
                    setOpen(next);

                    if (next) {
                        shouldListenRef.current = true;
                        await triggerGreeting();
                        startRecording();
                    } else {
                        closeChat();
                    }
                }}
                className="fixed bottom-28 right-6 z-[9999] bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-xl hover:scale-105 transition"
            >
                {open ? "✖" : "🤖"}
            </button>

            {/* Chat Box */}
            {open && (
                <div className="fixed bottom-44 right-6 w-[380px] h-[560px] bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl flex flex-col shadow-2xl z-[9999] overflow-hidden">

                    {/* Header */}
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex justify-between items-center shrink-0">
                        <div>
                            <p className="font-semibold text-sm">Omradix AI</p>
                            <p className="text-xs opacity-90 mt-1">
                                {getStatusLabel()}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <MicButton status={status} onClick={stopAll} />

                            <button
                                onClick={closeChat}
                                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-sm"
                            >
                                ✖
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <MessageList messages={messages} />

                    {/* Thinking */}
                    {isThinking && (
                        <div className="px-4 py-2 text-xs text-gray-500 animate-pulse">
                            🤖 Thinking...
                        </div>
                    )}

                    {/* Input */}
                    <div className="p-3 flex gap-2 border-t bg-white shrink-0">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={status === "speaking"}
                            className="flex-1 border border-gray-300 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:bg-gray-100"
                            placeholder={
                                status === "listening"
                                    ? "Listening..."
                                    : status === "speaking"
                                        ? "AI is speaking..."
                                        : "Ask me anything..."
                            }
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 rounded-lg hover:opacity-90"
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}