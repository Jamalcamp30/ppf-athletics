"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const PILLARS = [
  {
    title: "Coached",
    desc: "Every rep is watched. Every session has a standard. Nothing is left to chance or self-direction alone.",
    icon: "◉",
  },
  {
    title: "Measured",
    desc: "40s, splits, verticals, broads, shuttles, strength numbers, body composition, movement quality — all tracked.",
    icon: "◈",
  },
  {
    title: "Structured",
    desc: "Phases, progressions, and periodization built around evaluation timelines and football calendar reality.",
    icon: "◆",
  },
  {
    title: "Verified",
    desc: "Results are tested, documented, and visible. Not promised — proven.",
    icon: "◇",
  },
];

export default function StandardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="standard"
      className="relative py-32 md:py-40 section-divider"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.5em] uppercase font-mono text-ppf-orange mb-4"
        >
          The Standard
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl"
        >
          The standard here is{" "}
          <span className="text-ppf-orange">coached</span>, not assumed.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-ppf-light text-base md:text-lg max-w-2xl leading-relaxed"
        >
          PPF is not where athletes come to &quot;work out.&quot; It is where serious athletes
          come to build a cleaner, stronger, faster, more evaluatable version of themselves
          under a standard that is coached, measured, and proven.
        </motion.p>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="glass-panel p-6 rounded group hover:border-ppf-orange/20 transition-colors"
            >
              <span className="text-2xl text-ppf-orange">{p.icon}</span>
              <h3 className="text-lg font-bold mt-3 tracking-wide uppercase">
                {p.title}
              </h3>
              <p className="text-sm text-ppf-light mt-2 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
