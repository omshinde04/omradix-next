"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";

export const metadata = {
    title: "Contact Web Development Company India | Omradix Solutions",
    description:
        "Get in touch with Omradix Solutions for web development, AI solutions, SaaS platforms and digital services in India. Call +91 9373545169 or email omradixsolutions@gmail.com.",

    keywords: [
        "contact web development company India",
        "hire software developers India",
        "AI development company India",
        "SaaS development India",
        "custom web development services India",
        "Omradix Solutions contact",
        "software company India contact",
        "Next.js development company India"
    ],

    authors: [{ name: "Omradix Solutions", url: "https://www.omradixsolutions.in" }],
    creator: "Omradix Solutions",
    publisher: "Omradix Solutions",

    metadataBase: new URL("https://www.omradixsolutions.in"),

    alternates: {
        canonical: "/contact",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    openGraph: {
        title: "Contact Omradix Solutions | Web & AI Development India",
        description:
            "Contact Omradix Solutions for scalable web development, AI systems, SaaS platforms and digital products.",
        url: "https://www.omradixsolutions.in/contact",
        siteName: "Omradix Solutions",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Omradix Solutions Contact Page",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Omradix Solutions",
        description:
            "Hire expert developers for web, AI and SaaS solutions in India.",
        images: ["/images/og-image.jpg"],
    },

    category: "technology",

    other: {
        "geo.region": "IN",
        "geo.placename": "India",
        "contact:phone_number": "+91 9373545169",
        "contact:email": "omradixsolutions@gmail.com",
    },
};

export default function ContactPage() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [statusType, setStatusType] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("Sending...");
        setStatusType("info");

        try {
            const res = await fetch("https://formspree.io/f/myznbgkl", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("✅ Message Sent Successfully!");
                setStatusType("success");

                setForm({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    service: "",
                    message: "",
                });

            } else {
                setStatus("❌ Failed to send message.");
                setStatusType("error");
            }

        } catch (error) {
            setStatus("❌ Error sending message.");
            setStatusType("error");
        }
    };

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(""), 4000);
            return () => clearTimeout(timer);
        }
    }, [status]);


    return (
        <main className="bg-white">

            {/* HERO */}

            <section className="max-w-7xl mx-auto px-5 sm:px-6 pt-24 pb-12 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900"
                >
                    Let's Build Something
                    <span className="block text-primary">
                        Amazing Together
                    </span>
                </motion.h1>

                <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
                    Have a project idea or need a digital solution for your business?
                    Tell us about your goals and our team will help turn your vision
                    into a scalable digital product.
                </p>

            </section>



            {/* CONTACT SECTION */}

            <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-20 grid lg:grid-cols-2 gap-12 lg:gap-16">

                {/* FORM */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition overflow-hidden"
                >

                    <div className="relative">

                        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                            Tell Us About Your Project
                        </h2>

                        <p className="text-slate-600 text-sm mt-2">
                            Fill out the form below and our team will contact you within 24 hours.
                        </p>


                        {/* FORM */}

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                            <div className="grid sm:grid-cols-2 gap-4">

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="border rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    required
                                    className="border rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
                                />

                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">

                                <input
                                    type="text"
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    placeholder="Company Name"
                                    className="border rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="border rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
                                />

                            </div>

                            <select
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                className="border rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            >

                                <option value="">Select Service</option>
                                <option>Web Development</option>
                                <option>Web Application</option>
                                <option>Mobile App Development</option>
                                <option>Data Analytics</option>
                                <option>Cloud / AWS</option>
                                <option>Digital Marketing</option>

                            </select>

                            <textarea
                                rows="5"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                required
                                className="border rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full text-sm sm:text-base font-medium hover:bg-blue-700 transition shadow-md"
                            >
                                Send Message
                                <Send size={18} />
                            </button>

                            {/* STATUS MESSAGE */}

                            <AnimatePresence>
                                {status && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className={`text-sm mt-2 ${statusType === "success"
                                            ? "text-green-600"
                                            : statusType === "error"
                                                ? "text-red-500"
                                                : "text-gray-500"
                                            }`}
                                    >
                                        {status}
                                    </motion.p>
                                )}
                            </AnimatePresence>

                        </form>

                    </div>

                </motion.div>



                {/* CONTACT INFO */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >

                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                        Contact Information
                    </h2>

                    <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-md">
                        Prefer to reach out directly? You can contact us using the
                        information below or send a message using the form.
                    </p>

                    <div className="mt-6 space-y-4">

                        <InfoCard icon={<Mail />} title="Email Us" value="omradixsolutions@gmail.com" />
                        <InfoCard icon={<Phone />} title="Call Us" value="+91 9373545169" />
                        <InfoCard icon={<MapPin />} title="Location" value="India" />

                    </div>

                </motion.div>

            </section>

        </main>
    );
}



function InfoCard({ icon, title, value }) {
    return (
        <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-primary">
                {icon}
            </div>

            <div>
                <h4 className="font-medium text-slate-900">
                    {title}
                </h4>

                <p className="text-sm text-slate-600">
                    {value}
                </p>
            </div>
        </div>
    );
}