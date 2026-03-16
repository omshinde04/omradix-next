"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");

        if (!consent) {
            setVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookieConsent", "declined");
        setVisible(false);
    };

    return (

        <AnimatePresence>

            {visible && (

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.35 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] w-[92%] max-w-xl"
                >

                    <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">

                        <p className="text-sm text-slate-600 leading-relaxed text-center sm:text-left">

                            We use cookies to improve your browsing experience and analyze
                            website traffic. By clicking <span className="font-medium text-slate-900">Accept</span> you agree to our use of cookies.

                        </p>

                        <div className="flex gap-3 shrink-0">

                            <button
                                onClick={declineCookies}
                                className="px-4 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-100 transition"
                            >
                                Decline
                            </button>

                            <button
                                onClick={acceptCookies}
                                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                Accept
                            </button>

                        </div>

                    </div>

                </motion.div>

            )}

        </AnimatePresence>

    );
}