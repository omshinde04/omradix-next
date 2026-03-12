"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="hidden lg:block relative overflow-hidden pt-36 pb-28 bg-backgroundLight">
            {/* soft gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

            {/* glow effects */}
            <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-blue-400/20 blur-[140px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-400/20 blur-[140px] rounded-full"></div>

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-blue-100 text-primary font-medium">
                            BUILD • LAUNCH • SCALE
                        </span>

                        <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            Turn Your
                            <span className="text-primary block">
                                Digital Idea Into Success
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-slate-600 max-w-xl">
                            Every successful digital product starts with an idea.
                            At Omradix Solutions, we transform ideas into powerful
                            web platforms, intelligent applications, and scalable
                            systems that help businesses grow, expand globally,
                            and achieve real digital success.
                        </p>


                        {/* CTA Buttons */}
                        <div className="mt-10 flex gap-4">

                            <button className="group relative px-7 py-3 rounded-full bg-primary text-white flex items-center gap-2 overflow-hidden shadow-lg hover:shadow-xl transition">

                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Project
                                    <ArrowRight size={18} />
                                </span>

                                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>

                            </button>

                            <button className="px-7 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-white transition shadow-sm">
                                View Portfolio
                            </button>

                        </div>


                        {/* CLIENT TRUST */}
                        <div className="mt-14 flex items-center gap-6">

                            <div className="flex -space-x-3">
                                <Image
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    width={40}
                                    height={40}
                                    alt="client"
                                    className="rounded-full border"
                                />
                                <Image
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    width={40}
                                    height={40}
                                    alt="client"
                                    className="rounded-full border"
                                />
                                <Image
                                    src="https://randomuser.me/api/portraits/men/65.jpg"
                                    width={40}
                                    height={40}
                                    alt="client"
                                    className="rounded-full border"
                                />
                                <Image
                                    src="https://randomuser.me/api/portraits/women/12.jpg"
                                    width={40}
                                    height={40}
                                    alt="client"
                                    className="rounded-full border"
                                />
                            </div>

                            <p className="text-slate-600 text-sm">
                                Trusted by <span className="font-semibold text-slate-900">50+ growing businesses</span>
                            </p>

                        </div>

                    </motion.div>
                </div>
                {/* RIGHT VISUAL – BUSINESS JOURNEY FINAL */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="relative hidden lg:flex items-center justify-center h-[620px]"
                >

                    <svg viewBox="0 0 660 500" className="w-[640px]">

                        {/* SUN */}
                        <motion.circle
                            cx="520"
                            cy="130"
                            r="26"
                            fill="#facc15"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 5 }}
                        />

                        <circle cx="520" cy="130" r="85" fill="#fde68a" opacity="0.25" />


                        {/* CLOUDS */}

                        <motion.ellipse
                            cx="120"
                            cy="90"
                            rx="55"
                            ry="18"
                            fill="#ffffff"
                            animate={{ x: [0, 30, 0] }}
                            transition={{ repeat: Infinity, duration: 12 }}
                        />

                        <motion.ellipse
                            cx="210"
                            cy="70"
                            rx="40"
                            ry="14"
                            fill="#ffffff"
                            animate={{ x: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 14 }}
                        />

                        <motion.ellipse
                            cx="290"
                            cy="95"
                            rx="50"
                            ry="16"
                            fill="#ffffff"
                            animate={{ x: [0, 40, 0] }}
                            transition={{ repeat: Infinity, duration: 10 }}
                        />


                        {/* MOUNTAINS */}

                        <path d="M0 300 L160 210 L320 300 Z" fill="#dbeafe" />
                        <path d="M250 300 L420 190 L560 300 Z" fill="#bfdbfe" />
                        <path d="M430 300 L600 220 L660 300 Z" fill="#c7d2fe" />


                        {/* SUCCESS CITY */}

                        <rect x="470" y="210" width="40" height="150" fill="#1e293b" />
                        <rect x="525" y="180" width="50" height="180" fill="#1e293b" />
                        <rect x="595" y="220" width="35" height="140" fill="#1e293b" />


                        {/* ROAD (WIDER NOW) */}

                        <motion.path
                            d="M80 500 L290 260 L370 260 L580 500 Z"
                            fill="#334155"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />


                        {/* ROAD CENTER LINE */}

                        <motion.line
                            x1="330"
                            y1="500"
                            x2="330"
                            y2="260"
                            stroke="white"
                            strokeWidth="4"
                            strokeDasharray="14"
                            animate={{ strokeDashoffset: [0, 60] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        />


                        {/* PEOPLE */}

                        <motion.g animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                            <circle cx="300" cy="455" r="8" fill="#0f172a" />
                            <line x1="300" y1="462" x2="300" y2="480" stroke="#0f172a" strokeWidth="4" />
                        </motion.g>

                        <motion.g animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
                            <circle cx="330" cy="455" r="8" fill="#0f172a" />
                            <line x1="330" y1="462" x2="330" y2="480" stroke="#0f172a" strokeWidth="4" />
                        </motion.g>

                        <motion.g animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
                            <circle cx="360" cy="455" r="8" fill="#0f172a" />
                            <line x1="360" y1="462" x2="360" y2="480" stroke="#0f172a" strokeWidth="4" />
                        </motion.g>



                        {/* CAR 1 */}

                        <motion.g
                            animate={{ y: [0, -90] }}
                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                        >

                            <rect x="322" y="410" width="16" height="28" rx="5" fill="#ffffff" />
                            <rect x="326" y="414" width="8" height="8" fill="#cbd5f5" />
                            <circle cx="324" cy="434" r="3" fill="#111" />
                            <circle cx="336" cy="434" r="3" fill="#111" />

                        </motion.g>



                        {/* CAR 2 */}

                        <motion.g
                            animate={{ y: [0, -130] }}
                            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                        >

                            <rect x="322" y="360" width="16" height="28" rx="5" fill="#ffffff" />
                            <rect x="326" y="364" width="8" height="8" fill="#cbd5f5" />
                            <circle cx="324" cy="384" r="3" fill="#111" />
                            <circle cx="336" cy="384" r="3" fill="#111" />

                        </motion.g>


                    </svg>

                </motion.div>

            </div>

        </section>
    );
}