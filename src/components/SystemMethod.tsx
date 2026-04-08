"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PHASES = [
  {
    phase: "01",
    name: "Foundation",
    detail: "Movement quality, structural balance, strength base, mobility restoration, movement screening.",
  },
  {
    phase: "02",
    name: "Output Development",
    detail: "Force production, sprint mechanics, jump power, positional strength, work capacity.",
  },
  {
    phase: "03",
    name: "Efficiency & Transfer",
    detail: "Speed expression, deceleration quality, COD mechanics, shuttle patterning, testing rhythm.",
  },
  {
    phase: "04",
    name: "Profile Sharpening",
    detail: "Measurable refinement, weak-link reduction, testing simulation, peak readiness, evaluation preparation.",
  },
  {
    phase: "05",
    name: "Proof & Placement",
    detail: "Verified testing, pro day readiness, profile documentation, outcome visibility, evaluation confidence.",
  },
];

export default function SystemMethod() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="system" className="relative py-32 md:py-40 section-divider" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase font-mono text-ppf-orange mb-4">
            The System
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl">
            Every phase is built to{" "}
            <span className="text-ppf-orange">sharpen movement</span>, raise
            usable output, and build a profile that holds up.
          </h2>
          <p className="mt-4 text-ppf-light max-w-2xl text-base leading-relaxed">
            PPF does not guess. PPF tests, coaches, sharpens, and proves. The training architecture
            moves through deliberate phases — each one building toward measurable readiness.
          </p>
        </motion.div>

        {/* Phase timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-ppf-orange/40 via-ppf-orange/20 to-transparent" />

          <div className="space-y-8">
            {PHASES.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="flex items-start gap-6 md:gap-8 pl-2"
              >
                {/* Phase indicator */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-ppf-orange/30 bg-ppf-dark
                                  flex items-center justify-center">
                    <span className="text-xs md:text-sm font-bold text-ppf-orange font-mono">{p.phase}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="glass-panel p-5 md:p-6 rounded flex-1 group hover:border-ppf-orange/20 transition-colors">
                  <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-ppf-light leading-relaxed">
                    {p.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
