import Link from "next/link";

export default function AboutCTA() {
    return (
        <section className="py-20 text-center">

            <h2 className="text-3xl font-bold text-slate-900">
                Ready to build something amazing?
            </h2>

            <p className="text-slate-600 mt-4">
                Let’s turn your idea into a powerful digital product.
            </p>

            <Link
                href="/contact"
                className="inline-block mt-8 px-8 py-3 bg-primary text-white rounded-full"
            >
                Start Your Project
            </Link>

        </section>
    );
}