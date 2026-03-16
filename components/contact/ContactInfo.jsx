"use client"

import { Mail, Phone, MapPin } from "lucide-react"

function InfoCard({ icon, title, value }) {

    return (

        <div className="flex gap-4 p-5 border rounded-xl hover:shadow-md transition">

            <div className="w-11 h-11 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg">
                {icon}
            </div>

            <div>

                <h4 className="font-semibold text-slate-900">
                    {title}
                </h4>

                <p className="text-slate-600 text-sm">
                    {value}
                </p>

            </div>

        </div>

    )

}

export default function ContactInfo() {

    return (

        <div>

            <h2 className="text-2xl font-semibold text-slate-900">
                Contact Information
            </h2>

            <p className="text-slate-600 mt-2 max-w-md">
                Prefer direct contact? Reach out using the information below.
            </p>

            <div className="mt-8 space-y-4">

                <InfoCard icon={<Mail size={18} />} title="Email" value="omradixsolutions@gmail.com" />

                <InfoCard icon={<Phone size={18} />} title="Phone" value="+91 9373545169" />

                <InfoCard icon={<MapPin size={18} />} title="Location" value="India" />

            </div>

        </div>

    )

}