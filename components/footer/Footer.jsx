"use client";

import Link from "next/link";
import Image from "next/image";
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

    const linkClass =
        "relative w-fit text-slate-400 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

    return (
        <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">

            {/* TOP LIGHT EFFECT */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">

                    {/* LOGO + BRAND */}
                    <div className="lg:col-span-2">

                        <Link href="/" className="flex items-center gap-3 group">

                            <div className="w-14 h-14 rounded-full overflow-hidden border border-slate-800 shadow-md group-hover:scale-105 transition duration-300">

                                <Image
                                    src="/logo.png"
                                    alt="Omradix Solutions Software Development Company Logo"
                                    width={56}
                                    height={56}
                                    quality={100}
                                    className="object-cover w-full h-full"
                                />

                            </div>

                            <span className="text-xl font-semibold text-white tracking-wide">
                                Omradix<span className="text-blue-500">Solutions</span>
                            </span>

                        </Link>

                        <p className="text-sm text-slate-400 mt-5 leading-relaxed max-w-sm">
                            Omradix Solutions builds scalable web platforms, SaaS products,
                            mobile applications and modern digital systems for startups and enterprises.
                        </p>

                    </div>


                    {/* COMPANY */}
                    <div>
                        <h3 className="text-white font-semibold mb-5 tracking-wide">
                            Company
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className={linkClass}>About</Link></li>
                            <li><Link href="/services" className={linkClass}>Services</Link></li>
                            <li><Link href="/blogs" className={linkClass}>Blog</Link></li>
                            <li><Link href="/contact" className={linkClass}>Contact</Link></li>
                        </ul>
                    </div>


                    {/* SOLUTIONS */}
                    <div>
                        <h3 className="text-white font-semibold mb-5 tracking-wide">
                            Solutions
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services" className={linkClass}>Web Development</Link></li>
                            <li><Link href="/services" className={linkClass}>Web Applications</Link></li>
                            <li><Link href="/services" className={linkClass}>AI Integration</Link></li>
                            <li><Link href="/services" className={linkClass}>Automation Systems</Link></li>
                        </ul>
                    </div>


                    {/* RESOURCES */}
                    <div>
                        <h3 className="text-white font-semibold mb-5 tracking-wide">
                            Resources
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li><Link href="/blogs" className={linkClass}>Blog</Link></li>
                            <li><Link href="/blogs" className={linkClass}>Case Studies</Link></li>
                            <li><Link href="/about" className={linkClass}>Portfolio</Link></li>
                        </ul>
                    </div>


                    {/* LEGAL */}
                    <div>
                        <h3 className="text-white font-semibold mb-5 tracking-wide">
                            Legal
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li><Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link></li>
                            <li><Link href="/terms-and-conditions" className={linkClass}>Terms & Conditions</Link></li>
                            <li><Link href="/cookie-policy" className={linkClass}>Cookie Policy</Link></li>
                        </ul>
                    </div>


                    {/* CONTACT */}
                    <div>
                        <h3 className="text-white font-semibold mb-5 tracking-wide">
                            Contact
                        </h3>

                        <ul className="space-y-4 text-sm">

                            <li className="flex items-center gap-3 text-slate-400 hover:text-white transition">
                                <Mail size={16} />
                                <span>omradixsolutions@gmail.com</span>
                            </li>

                            <li className="flex items-center gap-3 text-slate-400 hover:text-white transition">
                                <Phone size={16} />
                                <span>+91 9373545169</span>
                            </li>

                            <li className="flex items-center gap-3 text-slate-400 hover:text-white transition">
                                <Phone size={16} />
                                <span>+91 7378534650</span>
                            </li>

                        </ul>
                    </div>

                </div>


                {/* BOTTOM */}
                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

                    <p className="text-sm text-slate-500 text-center md:text-left">
                        © {year} Omradix Solutions. All rights reserved.
                    </p>


                    {/* SOCIAL */}
                    <div className="flex items-center gap-4">

                        {[
                            { icon: Linkedin, link: "/" },
                            { icon: Twitter, link: "/" },
                            { icon: Instagram, link: "https://www.instagram.com/omradix_solutions" },
                            { icon: Facebook, link: "/" }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition duration-300 shadow-sm"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            );
                        })}

                    </div>

                </div>

            </div>

        </footer>
    );
}