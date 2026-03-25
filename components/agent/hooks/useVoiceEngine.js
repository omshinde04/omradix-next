import { useRef, useState } from "react";
import axios from "axios";

export const useVoiceEngine = (API_BASE, sessionIdRef) => {
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState("idle");

    const mediaRecorderRef = useRef(null);
    const streamRef = useRef(null);
    const audioChunksRef = useRef([]);

    const silenceTimerRef = useRef(null);
    const maxTimerRef = useRef(null);

    const currentAudioRef = useRef(null);
    const isPlayingRef = useRef(false);
    const shouldListenRef = useRef(false);
    const isProcessingRef = useRef(false);

    // ===============================
    // 🔊 STOP
    // ===============================
    const stopAll = () => {
        isPlayingRef.current = false;

        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current = null;
        }

        if (mediaRecorderRef.current?.state === "recording") {
            mediaRecorderRef.current.stop();
        }

        clearTimeout(silenceTimerRef.current);
        clearTimeout(maxTimerRef.current);

        setStatus("idle");
    };

    // ===============================
    // 🔊 STREAM AUDIO
    // ===============================
    const playStreamingAudio = async (text) => {
        try {
            stopAll();

            setStatus("speaking");
            isPlayingRef.current = true;

            const response = await fetch(`${API_BASE}/api/tts/stream`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            let buffer = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const parts = buffer.split("\n");

                for (let i = 0; i < parts.length - 1; i++) {
                    const chunk = JSON.parse(parts[i]);

                    for (const audioChunk of chunk.audio) {
                        if (!isPlayingRef.current) return;

                        const audio = new Audio(
                            `data:audio/mp3;base64,${audioChunk}`
                        );

                        currentAudioRef.current = audio;
                        await audio.play();

                        await new Promise((res) => {
                            audio.onended = res;
                            audio.onerror = res;
                        });
                    }
                }

                buffer = parts[parts.length - 1];
            }
        } catch (err) {
            console.log("Streaming error:", err);
        } finally {
            isPlayingRef.current = false;
            restartListening();
        }
    };

    // ===============================
    // 🎤 START RECORDING (LOW LATENCY)
    // ===============================
    const startRecording = async () => {
        try {
            if (!shouldListenRef.current) return;
            if (isPlayingRef.current) return;
            if (mediaRecorderRef.current?.state === "recording") return;

            setStatus("listening");

            if (!streamRef.current) {
                streamRef.current =
                    await navigator.mediaDevices.getUserMedia({
                        audio: {
                            noiseSuppression: true,
                            echoCancellation: true,
                            autoGainControl: true,
                        },
                    });
            }

            const recorder = new MediaRecorder(streamRef.current);
            mediaRecorderRef.current = recorder;
            audioChunksRef.current = [];

            recorder.ondataavailable = (e) => {
                if (e.data?.size > 0) {
                    audioChunksRef.current.push(e.data);
                }

                // ⚡ FAST silence detection
                clearTimeout(silenceTimerRef.current);

                silenceTimerRef.current = setTimeout(() => {
                    if (recorder.state === "recording") {
                        recorder.stop();
                    }
                }, 250); // 🔥 was 1200 → now FAST
            };

            recorder.onstop = handleVoiceUpload;

            recorder.start(120); // 🔥 faster chunks (was 250)

            // ⏱️ max recording safety
            maxTimerRef.current = setTimeout(() => {
                if (recorder.state === "recording") {
                    recorder.stop();
                }
            }, 5000); // slightly reduced

        } catch (err) {
            console.log("Mic error:", err);
            setStatus("idle");
        }
    };

    // ===============================
    // 🎤 VOICE FLOW
    // ===============================
    const handleVoiceUpload = async () => {
        if (isProcessingRef.current) return;

        const blob = new Blob(audioChunksRef.current);

        // ⚡ smaller threshold for faster trigger
        if (blob.size < 2000) {
            return restartListening();
        }

        isProcessingRef.current = true;
        setStatus("thinking");

        const formData = new FormData();
        formData.append("audio", blob, "audio.webm");
        formData.append("sessionId", sessionIdRef.current);

        try {
            const res = await axios.post(`${API_BASE}/api/voice`, formData);

            const { userText, text } = res.data;

            if (!userText) {
                return restartListening();
            }

            setMessages((prev) => [
                ...prev,
                { role: "user", text: userText },
                { role: "bot", text },
            ]);

            // ⚡ NO WAIT → instant speak
            playStreamingAudio(text);

        } catch (err) {
            console.log(err);
            restartListening();
        } finally {
            isProcessingRef.current = false;
        }
    };

    // ===============================
    // 🔁 FAST RESTART
    // ===============================
    const restartListening = () => {
        setTimeout(() => {
            if (
                shouldListenRef.current &&
                !isProcessingRef.current &&
                !isPlayingRef.current
            ) {
                startRecording();
            }
        }, 150); // 🔥 ultra fast restart
    };

    return {
        messages,
        status,
        setMessages,
        startRecording,
        playStreamingAudio,
        stopAll,
        shouldListenRef,
    };
};