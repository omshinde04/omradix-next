"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Palette,
  TerminalSquare,
  ShieldCheck,
  Cloud,
  TrendingUp
} from "lucide-react";

const steps = [
  {
    icon: Rocket,
    title: "Strategy",
    desc: "Define product vision and architecture for scalable systems."
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Craft intuitive UI/UX focused on usability and engagement."
  },
  {
    icon: TerminalSquare,
    title: "Engineering",
    desc: "Develop high-performance platforms using modern stacks."
  },
  {
    icon: ShieldCheck,
    title: "Testing",
    desc: "Ensure security, reliability and peak performance."
  },
  {
    icon: Cloud,
    title: "Launch",
    desc: "Deploy scalable infrastructure with monitoring."
  },
  {
    icon: TrendingUp,
    title: "Scale",
    desc: "Continuously improve and scale as your users grow."
  }
];

export default function TechStackSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* grid background */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "42px 42px"
        }}
      />

      {/* glow */}

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-blue-500/10 blur-[150px] rounded-full"></div>


      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Our Product Development
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            From idea to scalable platform — we engineer every stage of
            development with precision, reliability and modern architecture.
          </p>

        </motion.div>


        {/* WORKFLOW */}

        <div className="relative">

          {/* connecting line */}

          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-14 gap-x-10">

            {steps.map((step, i) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >

                  {/* NODE */}

                  <div className="w-14 h-14 flex items-center justify-center rounded-full border border-blue-500 bg-white text-blue-600 shadow-md group-hover:bg-blue-600 group-hover:text-white transition">

                    <Icon size={22} />

                  </div>

                  {/* TITLE */}

                  <h3 className="mt-5 text-sm font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  {/* DESC */}

                  <p className="mt-2 text-xs text-slate-500 max-w-[140px]">
                    {step.desc}
                  </p>

                </motion.div>

              )

            })}

          </div>

        </div>



        {/* METRICS */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        >

          <div>
            <p className="text-3xl font-bold text-slate-900">99.9%</p>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Platform Uptime
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-slate-900">250+</p>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Deployments
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-slate-900">50+</p>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Projects Built
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-slate-900">24/7</p>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Monitoring
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  );
}