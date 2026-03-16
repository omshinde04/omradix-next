"use client"

import { motion } from "framer-motion"

export default function ContactHero() {

    return (

        <section className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 text-center">

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900"
            >

                Let's Build Something
                <span className="block text-blue-600">
                    Amazing Together
                </span>

            </motion.h1>

            <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">

                Have a project idea or need a scalable digital solution?

                Tell us about your vision and our team will help transform it into a powerful product.

            </p>

        </section>

    )

}