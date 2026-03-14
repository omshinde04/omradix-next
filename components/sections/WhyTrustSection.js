"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Rocket, Cpu } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Security-First Engineering",
        desc: "Every product we build follows strong security practices protecting data, infrastructure and business operations."
    },
    {
        icon: Rocket,
        title: "Built For Growth",
        desc: "Our systems are designed to scale from startup stage to millions of users without performance issues."
    },
    {
        icon: Cpu,
        title: "Modern Engineering Stack",
        desc: "We use modern frameworks and architecture patterns ensuring reliability and long-term maintainability."
    }
];

export default function WhyTrustSection() {
    return (
        <section className="relative py-24 overflow-hidden bg-white">

            {/* subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
                    backgroundSize: "44px 44px"
                }}
            />

            {/* glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-blue-500/15 blur-[160px] rounded-full"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT IMAGE LAYOUT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[560px]"
                    >

                        {/* IMAGE 1 */}
                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            className="group absolute left-0 top-0 w-[42%] h-[180px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                                alt="team collaboration"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition duration-700"
                            />
                        </motion.div>


                        {/* IMAGE 2 */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            whileHover={{ scale: 1.04 }}
                            className="group absolute left-[48%] top-0 w-[48%] h-[240px] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                                alt="developer coding"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition duration-700"
                            />
                        </motion.div>


                        {/* IMAGE 3 */}
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 7, repeat: Infinity }}
                            whileHover={{ scale: 1.04 }}
                            className="group absolute left-[10%] top-[210px] w-[36%] h-[160px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                                alt="server infrastructure"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition duration-700"
                            />
                        </motion.div>


                        {/* IMAGE 4 */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="group absolute right-0 top-[270px] w-[40%] h-[170px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1605379399642-870262d3d051"
                                alt="developer workstation"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition duration-700"
                            />
                        </motion.div>


                        {/* IMAGE 5 */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            whileHover={{ scale: 1.05 }}
                            className="group absolute left-[30%] bottom-[60px] w-[32%] h-[140px] rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd"
                                alt="coding laptop"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition duration-700"
                            />
                        </motion.div>


                        {/* IMAGE 6 */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="group absolute left-0 bottom-0 w-[28%] h-[120px] rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                                alt="engineering meeting"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition duration-700"
                            />
                        </motion.div>


                        {/* IMAGE 7 */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 9, repeat: Infinity }}
                            whileHover={{ scale: 1.05 }}
                            className="group absolute right-[8%] bottom-[20px] w-[24%] h-[120px] rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                                alt="software development"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition duration-700"
                            />
                        </motion.div>

                    </motion.div>



                    {/* RIGHT TEXT CONTENT */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                            Why companies trust
                            <span className="block text-blue-600">
                                Omradix Solutions
                            </span>
                        </h2>

                        <p className="mt-6 text-slate-600 max-w-xl">
                            We combine strong engineering expertise with modern technology
                            to deliver reliable digital platforms that help businesses grow
                            faster and operate smarter.
                        </p>


                        {/* features */}
                        <div className="mt-10 space-y-8">

                            {features.map((feature, i) => {

                                const Icon = feature.icon;

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 }}
                                        className="flex gap-4"
                                    >

                                        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                            <Icon size={20} />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900">
                                                {feature.title}
                                            </h3>

                                            <p className="text-slate-600 text-sm mt-1 max-w-md">
                                                {feature.desc}
                                            </p>
                                        </div>

                                    </motion.div>
                                );

                            })}

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}