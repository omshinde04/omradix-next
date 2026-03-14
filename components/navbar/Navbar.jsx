"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
    Home,
    User,
    Briefcase,
    BookOpen,
    Phone,
    ArrowRight,
    Menu,
    X,
} from "lucide-react";

const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Blogs", href: "/blogs", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: Phone },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);

    const { scrollYProgress } = useScroll();

    /* Hide Navbar on Scroll */

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;

            if (current > lastScroll && current > 90) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScroll(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <>
            {/* Scroll Progress */}

            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500 origin-left z-[60]"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Navbar */}

            <motion.header
                initial={{ y: 0 }}
                animate={{ y: showNavbar ? 0 : -100 }}
                transition={{ duration: 0.35 }}
                className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200"
            >
                <div className="max-w-7xl mx-auto px-6 h-[74px] flex items-center justify-between">
                    {/* LOGO */}

                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-105 transition">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 100 100"
                                fill="none"
                                className="text-blue-600"
                            >
                                <rect
                                    x="8"
                                    y="8"
                                    width="84"
                                    height="84"
                                    rx="22"
                                    stroke="currentColor"
                                    strokeWidth="6"
                                />

                                <circle cx="50" cy="50" r="9" fill="currentColor" />

                                <circle cx="50" cy="18" r="5" fill="currentColor" />
                                <circle cx="82" cy="50" r="5" fill="currentColor" />
                                <circle cx="50" cy="82" r="5" fill="currentColor" />
                                <circle cx="18" cy="50" r="5" fill="currentColor" />

                                <line
                                    x1="50"
                                    y1="50"
                                    x2="50"
                                    y2="23"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />
                                <line
                                    x1="50"
                                    y1="50"
                                    x2="77"
                                    y2="50"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />
                                <line
                                    x1="50"
                                    y1="50"
                                    x2="50"
                                    y2="77"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />
                                <line
                                    x1="50"
                                    y1="50"
                                    x2="23"
                                    y2="50"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        <span className="text-lg font-semibold text-slate-900">
                            Omradix<span className="text-blue-600">Solutions</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}

                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const active = pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative flex items-center gap-2 font-medium transition
                  ${active
                                            ? "text-blue-600"
                                            : "text-slate-600 hover:text-blue-600"
                                        }`}
                                >
                                    <Icon size={18} />

                                    {link.name}

                                    <span
                                        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                                    />
                                </Link>
                            );
                        })}

                        {/* CTA */}

                        <Link href="/projects">
                            <button className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white font-medium overflow-hidden group shadow-md">
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore Projects
                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition"
                                    />
                                </span>

                                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></span>
                            </button>
                        </Link>
                    </nav>

                    {/* Mobile Button */}

                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Open Menu"
                        className="md:hidden"
                    >
                        <Menu size={26} />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Drawer */}

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.45 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setOpen(false)}
                        />

                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 260, damping: 28 }}
                            className="fixed top-0 left-0 h-full w-full bg-white z-50 flex flex-col"
                        >
                            {/* Close */}

                            <div className="h-[72px] flex items-center justify-end px-6 border-b">
                                <button onClick={() => setOpen(false)} aria-label="Close Menu">
                                    <X size={28} />
                                </button>
                            </div>

                            {/* Links */}

                            <div className="flex flex-col gap-8 px-6 py-10">
                                {navLinks.map((link) => {
                                    const Icon = link.icon;

                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className="flex items-center gap-4 text-lg font-medium text-slate-700 hover:text-blue-600 transition"
                                        >
                                            <Icon size={22} />
                                            {link.name}
                                        </Link>
                                    );
                                })}

                                {/* Mobile CTA */}

                                <Link href="/projects" onClick={() => setOpen(false)}>
                                    <button className="mt-8 bg-blue-600 text-white py-3 rounded-full text-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                                        View Projects
                                        <ArrowRight size={18} />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}