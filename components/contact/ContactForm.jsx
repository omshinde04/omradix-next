"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send } from "lucide-react"

export default function ContactForm() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: ""
    })

    const [status, setStatus] = useState("")
    const [statusType, setStatusType] = useState("")

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setStatus("Sending...")
        setStatusType("info")

        try {

            const res = await fetch("https://formspree.io/f/myznbgkl", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            })

            if (res.ok) {

                setStatus("Message sent successfully!")
                setStatusType("success")

                setForm({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    service: "",
                    message: ""
                })

            } else {

                setStatus("Failed to send message.")
                setStatusType("error")

            }

        } catch {

            setStatus("Something went wrong.")
            setStatusType("error")

        }

    }

    useEffect(() => {
        if (status) {
            const t = setTimeout(() => setStatus(""), 4000)
            return () => clearTimeout(t)
        }
    }, [status])

    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
        >

            <h2 className="text-2xl font-semibold text-slate-900">
                Tell Us About Your Project
            </h2>

            <p className="text-slate-600 mt-2 text-sm">
                Our team will respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                <div className="grid sm:grid-cols-2 gap-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                    />

                </div>

                <div className="grid sm:grid-cols-2 gap-4">

                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={form.company}
                        onChange={handleChange}
                        className="border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        className="border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                    />

                </div>

                <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="border rounded-xl px-4 py-3 text-sm w-full focus:ring-2 focus:ring-blue-600 outline-none"
                >

                    <option value="">Select Service</option>
                    <option>Web Development</option>
                    <option>Web Applications</option>
                    <option>Mobile Apps</option>
                    <option>Cloud Infrastructure</option>
                    <option>AI Automation</option>
                    <option>Digital Marketing</option>

                </select>

                <textarea
                    rows="5"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="border rounded-xl px-4 py-3 text-sm w-full focus:ring-2 focus:ring-blue-600 outline-none"
                />

                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition"
                >

                    Send Message

                    <Send size={18} />

                </button>

                <AnimatePresence>

                    {status && (

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`text-sm mt-2 ${statusType === "success" ? "text-green-600" :
                                statusType === "error" ? "text-red-500" : "text-gray-500"
                                }`}
                        >

                            {status}

                        </motion.p>

                    )}

                </AnimatePresence>

            </form>

        </motion.div>

    )

}