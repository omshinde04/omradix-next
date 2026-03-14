"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
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

                    {/* hover glow */}

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"></div>

                    <div className="relative">

                        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                            Tell Us About Your Project
                        </h2>

                        <p className="text-slate-600 text-sm mt-2">
                            Fill out the form below and our team will contact you within 24 hours.
                        </p>


                        <form className="mt-6 space-y-4">

                            <div className="grid sm:grid-cols-2 gap-4">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="border rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="border rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
                                />

                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">

                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="border rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="border rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
                                />

                            </div>

                            <select className="border rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary">

                                <option>Select Service</option>
                                <option>Web Development</option>
                                <option>Web Application</option>
                                <option>Mobile App Development</option>
                                <option>Data Analytics</option>
                                <option>Cloud / AWS</option>
                                <option>Digital Marketing</option>

                            </select>

                            <textarea
                                rows="5"
                                placeholder="Tell us about your project..."
                                className="border rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            <button
                                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full text-sm sm:text-base font-medium hover:bg-blue-700 transition shadow-md"
                            >
                                Send Message
                                <Send size={18} />
                            </button>

                        </form>

                    </div>

                </motion.div>



                {/* CONTACT INFO */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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



                    {/* TRUST CARD */}

                    <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">

                        <h3 className="font-semibold text-lg text-slate-900">
                            Why Work With Us?
                        </h3>

                        <ul className="mt-3 space-y-2 text-sm text-slate-600">

                            <li>✔ Modern scalable technology stack</li>
                            <li>✔ Startup & enterprise digital products</li>
                            <li>✔ Transparent communication</li>
                            <li>✔ Fast development cycles</li>

                        </ul>

                    </div>

                </motion.div>

            </section>



            {/* CTA */}

            <section className="py-16 sm:py-20 bg-white text-center px-6">

                <div className="max-w-3xl mx-auto">

                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        Ready to Start Your Project?
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
                        Let's discuss your idea and build something powerful together.
                        Our team will guide you from concept to launch.
                    </p>

                    <a
                        href="mailto:shindeom052@gmail.com"
                        className="inline-block mt-6 px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg"
                    >
                        Email Us Now
                    </a>

                </div>

            </section>

        </main>
    );
}



function InfoCard({ icon, title, value }) {
    return (
        <div className="group relative flex items-center gap-4 p-4 sm:p-5 border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">

            {/* hover glow */}

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"></div>

            <div className="relative flex items-center gap-4">

                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-primary group-hover:bg-primary group-hover:text-white transition">
                    {icon}
                </div>

                <div>
                    <h4 className="font-medium text-slate-900 text-sm sm:text-base">
                        {title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                        {value}
                    </p>
                </div>

            </div>

        </div>
    );
}