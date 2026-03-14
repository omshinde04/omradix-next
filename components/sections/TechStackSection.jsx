"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Shield,
  BarChart3,
  RefreshCw,
  Database,
  TerminalSquare,
  Code2,
  Server
} from "lucide-react";

const features = [
  { icon: Gauge, text: "Extreme Performance" },
  { icon: Shield, text: "Security Focused" },
  { icon: BarChart3, text: "Real-time Metrics" },
  { icon: RefreshCw, text: "Agile Updates" }
];

const stackIcons = [
  Code2,
  Database,
  TerminalSquare,
  Server,
  BarChart3,
  Shield
];

export default function TechStackSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* GRID BACKGROUND */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "42px 42px"
        }}
      />

      {/* SOFT GLOW */}

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-500/10 blur-[160px] rounded-full"></div>


      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Modern Stack for
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Solutions
              </span>
            </h2>

            <p className="mt-6 text-slate-600 max-w-xl text-lg">
              We don't just build software. We engineer reliable systems using
              modern technologies designed for speed, scalability and
              long-term growth.
            </p>

            {/* FEATURES */}

            <div className="mt-10 grid sm:grid-cols-2 gap-6">

              {features.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >

                    <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <Icon size={18} />
                    </div>

                    <span className="font-medium text-slate-800">
                      {item.text}
                    </span>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>



          {/* RIGHT SIDE PANEL */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* PANEL BACKGROUND */}

            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl"></div>


            <div className="relative grid grid-cols-3 gap-6 p-10">

              {stackIcons.map((Icon, i) => (

                <motion.div
                  key={i}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -8
                  }}
                  className="group aspect-square rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition flex items-center justify-center relative overflow-hidden"
                >

                  {/* Hover Gradient Glow */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>

                  {/* Icon */}

                  <Icon
                    size={30}
                    className="text-blue-600 group-hover:text-blue-700 transition relative z-10"
                  />

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}