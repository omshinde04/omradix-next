"use client"

import Link from "next/link"

export default function ContactCTA() {

    return (

        <section className="bg-slate-50 py-20 text-center">

            <h2 className="text-3xl font-bold text-slate-900">
                Ready to Build Your Product?
            </h2>

            <p className="text-slate-600 mt-4">
                We help startups and businesses build scalable digital platforms.
            </p>

            <Link
                href="/services"
                className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
            >

                Explore Services

            </Link>

        </section>

    )

}