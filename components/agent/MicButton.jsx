"use client";

export default function MicButton({ status, onClick }) {
    const isListening = status === "listening";
    const isSpeaking = status === "speaking";

    return (
        <div className="relative group">
            {/* 🔥 OUTER ANIMATION RING */}
            {isListening && (
                <span className="absolute inset-0 rounded-full bg-red-400 opacity-50 animate-ping"></span>
            )}

            {isSpeaking && (
                <span className="absolute inset-0 rounded-full border-4 border-green-400 animate-pulse"></span>
            )}

            {/* 🎤 BUTTON */}
            <button
                onClick={onClick}
                className={`
                    relative z-10 w-11 h-11 rounded-full flex items-center justify-center text-white text-lg
                    transition-all duration-300 shadow-md
                    ${isListening
                        ? "bg-gradient-to-r from-red-500 to-red-600 scale-110"
                        : isSpeaking
                            ? "bg-gradient-to-r from-green-500 to-emerald-600"
                            : "bg-gray-500 hover:bg-gray-600"
                    }
                `}
            >
                {isSpeaking ? "🔊" : "🎤"}
            </button>

            {/* 💡 TOOLTIP */}
            <span className="absolute bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {isListening
                    ? "Listening... speak now"
                    : isSpeaking
                        ? "AI is speaking"
                        : "Click to stop voice"}
            </span>
        </div>
    );
}