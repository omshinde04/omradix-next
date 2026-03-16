"use client";

import Head from "next/head";
import ContactHero from "../../components/contact/ContactHero"
import ContactForm from "../../components/contact/ContactForm"
import ContactInfo from "../../components/contact/ContactInfo"
import ContactCTA from "../../components/contact/ContactCTA"

export default function ContactPage() {

    return (

        <>
            {/* SEO META */}

            <Head>

                <title>
                    Contact Us | OmRadix Solutions
                </title>

                <meta
                    name="description"
                    content="Contact OmRadix Solutions to build scalable websites, mobile apps, AI systems and cloud platforms. Our engineers will respond within 24 hours."
                />

                <meta
                    name="keywords"
                    content="web development company, mobile app development, SaaS development, AI solutions, software development India"
                />

                <meta
                    property="og:title"
                    content="Contact OmRadix Solutions"
                />

                <meta
                    property="og:description"
                    content="Have a project idea? Contact our engineering team to build scalable digital products."
                />

                <meta
                    property="og:type"
                    content="website"
                />

            </Head>


            <main className="bg-white">

                {/* HERO */}

                <ContactHero />


                {/* CONTACT SECTION */}

                <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14">

                    <ContactForm />

                    <ContactInfo />

                </section>


                {/* FINAL CTA */}

                <ContactCTA />

            </main>

        </>
    );

}