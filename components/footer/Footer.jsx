"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Linkedin,
    Twitter,
    Instagram,
    Facebook,
    Mail,
    Phone
} from "lucide-react";

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-300">

            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">

                    {/* COMPANY */}

                    <div>

                        <h3 className="text-white font-semibold mb-5">
                            Company
                        </h3>

                        <ul className="space-y-3 text-sm">

                            <li><Link href="/about" className="hover:text-white">About</Link></li>
                            <li><Link href="/services" className="hover:text-white">Services</Link></li>
                            <li><Link href="/blogs" className="hover:text-white">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>

                        </ul>

                    </div>


                    {/* SERVICES */}

                    <div>

                        <h3 className="text-white font-semibold mb-5">
                            Solutions
                        </h3>

                        <ul className="space-y-3 text-sm">

                            <li>
                                <Link href="/services" className="hover:text-white">
                                    Web Development
                                </Link>
                            </li>

                            <li>
                                <Link href="/services" className="hover:text-white">
                                    Web Applications
                                </Link>
                            </li>

                            <li>
                                <Link href="/services" className="hover:text-white">
                                    AI Integration
                                </Link>
                            </li>

                            <li>
                                <Link href="/services" className="hover:text-white">
                                    Workflow Automation
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* RESOURCES */}

                    <div>

                        <h3 className="text-white font-semibold mb-5">
                            Resources
                        </h3>

                        <ul className="space-y-3 text-sm">

                            <li><Link href="/blogs" className="hover:text-white">Blog</Link></li>
                            <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
                            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>

                        </ul>

                    </div>


                    {/* LEGAL */}

                    <div>

                        <h3 className="text-white font-semibold mb-5">
                            Legal
                        </h3>

                        <ul className="space-y-3 text-sm">

                            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></li>
                            <li><Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>

                        </ul>

                    </div>


                    {/* CONTACT */}

                    <div>

                        <h3 className="text-white font-semibold mb-5">
                            Contact
                        </h3>

                        <ul className="space-y-3 text-sm">

                            <li className="flex items-center gap-2">
                                <Mail size={16} />
                                omradixsolutions.com
                            </li>

                            <li className="flex items-center gap-2">
                                <Phone size={16} />
                                +91 9373545169
                            </li>

                        </ul>

                    </div>

                </div>



                {/* DIVIDER */}

                <div className="border-t border-slate-800 mt-16 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* COPYRIGHT */}

                    <p className="text-sm text-slate-400">
                        © {year} Omradix Solutions. All rights reserved.
                    </p>


                    {/* SOCIAL ICONS */}

                    <div className="flex items-center gap-5">

                        <motion.a
                            whileHover={{ y: -3 }}
                            href="https://linkedin.com"
                            target="_blank"
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 transition"
                        >
                            <Linkedin size={18} />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -3 }}
                            href="https://twitter.com"
                            target="_blank"
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 transition"
                        >
                            <Twitter size={18} />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -3 }}
                            href="https://instagram.com"
                            target="_blank"
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 transition"
                        >
                            <Instagram size={18} />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -3 }}
                            href="https://facebook.com"
                            target="_blank"
                            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 transition"
                        >
                            <Facebook size={18} />
                        </motion.a>

                    </div>

                </div>

            </div>

        </footer>
    );
}