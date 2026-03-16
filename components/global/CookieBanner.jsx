"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X } from "lucide-react";

export default function CookieBanner() {

    const [visible, setVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");

        if (!consent) {
            setVisible(true);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem("cookieConsent", "accepted");
        localStorage.setItem("analyticsCookies", "true");
        setVisible(false);
    };

    const declineAll = () => {
        localStorage.setItem("cookieConsent", "declined");
        localStorage.setItem("analyticsCookies", "false");
        setVisible(false);
    };

    const savePreferences = () => {
        localStorage.setItem("cookieConsent", "custom");
        localStorage.setItem("analyticsCookies", analyticsEnabled);
        setVisible(false);
    };

    return (

        <AnimatePresence>

            {visible && (

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 80 }}
                    transition={{ duration: 0.35 }}
                    className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-4 sm:px-6 sm:pb-6"
                >

                    <div className="mx-auto max-w-5xl">

                        <div className="backdrop-blur-lg bg-white/90 border border-slate-200 shadow-2xl rounded-2xl p-6">

                            {/* HEADER */}

                            <div className="flex items-start justify-between">

                                <div>

                                    <h3 className="text-lg font-semibold text-slate-900">
                                        Cookie Preferences
                                    </h3>

                                    <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-xl">

                                        We use cookies to enhance your browsing experience, analyze
                                        website traffic, and improve our services.

                                        {" "}

                                        <a
                                            href="/cookie-policy"
                                            className="text-blue-600 font-medium hover:underline"
                                        >
                                            Read Cookie Policy
                                        </a>

                                    </p>

                                </div>

                                <button
                                    onClick={() => setVisible(false)}
                                    className="text-slate-500 hover:text-slate-900"
                                >
                                    <X size={20} />
                                </button>

                            </div>


                            {/* SETTINGS PANEL */}

                            {showSettings && (

                                <div className="mt-6 border-t pt-6 space-y-4">

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <h4 className="text-sm font-semibold text-slate-900">
                                                Analytics Cookies
                                            </h4>

                                            <p className="text-xs text-slate-500">
                                                Help us understand how visitors use our website.
                                            </p>

                                        </div>

                                        <label className="relative inline-flex items-center cursor-pointer">

                                            <input
                                                type="checkbox"
                                                checked={analyticsEnabled}
                                                onChange={() => setAnalyticsEnabled(!analyticsEnabled)}
                                                className="sr-only peer"
                                            />

                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition"></div>

                                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>

                                        </label>

                                    </div>

                                </div>

                            )}


                            {/* BUTTONS */}

                            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-end">

                                <button
                                    onClick={() => setShowSettings(!showSettings)}
                                    className="flex items-center justify-center gap-2 px-4 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-100 transition"
                                >
                                    <Settings size={16} />
                                    Settings
                                </button>

                                <button
                                    onClick={declineAll}
                                    className="px-4 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-100 transition"
                                >
                                    Decline
                                </button>

                                {showSettings ? (

                                    <button
                                        onClick={savePreferences}
                                        className="px-5 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                    >
                                        Save Preferences
                                    </button>

                                ) : (

                                    <button
                                        onClick={acceptAll}
                                        className="px-5 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                    >
                                        Accept All
                                    </button>

                                )}

                            </div>

                        </div>

                    </div>

                </motion.div>

            )}

        </AnimatePresence>

    );
}