import { services } from "../../../data/servicesData";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/* STATIC ROUTES */

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

/* PAGE */

export default async function ServicePage({ params }) {

    const { slug } = await params;

    const service = services.find((s) => s.slug === slug);

    if (!service) return notFound();

    const Icon = service.icon;

    return (

        <main className="bg-white">

            {/* HERO SECTION */}

            <section className="max-w-7xl mx-auto px-6 pt-28 pb-20">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}

                    <div>

                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                            <Icon size={26} />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            {service.title}
                        </h1>

                        <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                            {service.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
                            >
                                Start Your Project
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/services"
                                className="px-8 py-3 border border-slate-300 rounded-xl font-semibold text-slate-700 hover:bg-slate-100 transition"
                            >
                                View All Services
                            </Link>

                        </div>

                    </div>


                    {/* IMAGE */}

                    <div className="relative">

                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl blur-3xl opacity-50"></div>

                        <img
                            src={service.image}
                            alt={service.title}
                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                        />

                    </div>

                </div>

            </section>



            {/* DETAILS SECTION */}

            <section className="bg-slate-50 py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 gap-12">

                        <InfoBlock
                            title="Perfect For"
                            items={service.perfectFor}
                        />

                        <InfoBlock
                            title="What You Get"
                            items={service.whatYouGet}
                        />

                        <InfoBlock
                            title="Business Benefits"
                            items={service.benefits}
                        />

                        <InfoBlock
                            title="Deliverables"
                            items={service.deliverables}
                        />

                    </div>

                </div>

            </section>



            {/* CTA SECTION */}

            <section className="py-24">

                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Ready to build your next digital product?
                    </h2>

                    <p className="mt-4 text-slate-600 text-lg">
                        Let's work together to create scalable technology that helps
                        your business grow faster.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
                    >
                        Start Your Project
                        <ArrowRight size={18} />
                    </Link>

                </div>

            </section>

        </main>

    );

}


/* INFO BLOCK */

function InfoBlock({ title, items }) {

    return (

        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">

            <h3 className="text-xl font-semibold text-slate-900 mb-6">
                {title}
            </h3>

            <ul className="space-y-3 text-slate-600">

                {items.map((item) => (

                    <li key={item} className="flex gap-3">

                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>

                        {item}

                    </li>

                ))}

            </ul>

        </div>

    );

}