"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const METRICS = [
  { value: "4.29", label: "40 TIME", unit: "s" },
  { value: "39.5", label: "VERTICAL", unit: '"' },
  { value: "30+", label: "BENCH REPS", unit: "" },
  { value: "12K", label: "SQ FT", unit: "" },
  { value: "NFL", label: "ALUMNI", unit: "" },
  { value: "100%", label: "VERIFIED", unit: "" },
];

function RotatingMetric() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % METRICS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const m = METRICS[idx];

  return (
    <div className="metric-card px-4 py-2 rounded text-right min-w-[140px]">
      <p className="text-[10px] tracking-widest uppercase text-ppf-light font-mono">
        {m.label}
      </p>
      <p className="text-2xl font-black text-ppf-orange tabular-nums">
        {m.value}
        <span className="text-sm text-ppf-light">{m.unit}</span>
      </p>
    </div>
  );
}

export default function HeroCommandCenter() {
  return (
    <section
      id="command-center"
      className="relative min-h-screen flex flex-col justify-center turf-texture overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 py-4 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-mono text-ppf-orange">
            2027 Combine &amp; Pro Day Prep
          </p>
          <p className="text-[9px] tracking-widest uppercase text-ppf-light/50 font-mono mt-0.5">
            PPF Performance OS — Active
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <RotatingMetric />
        </motion.div>
      </div>

      {/* Center content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-mono text-ppf-light mb-4">
            Where Profiles Are Built
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
            Build a draft-ready
            <br />
            profile{" "}
            <span className="text-ppf-orange orange-glow-text">
              before the room
            </span>
            <br />
            ever questions it.
          </h2>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#enter-system"
            className="group relative inline-flex items-center justify-center px-8 py-4
                       bg-ppf-orange text-ppf-black font-bold text-sm tracking-widest uppercase
                       hover:bg-ppf-white transition-colors duration-300"
          >
            Start Your Training Plan
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#draft-board"
            className="inline-flex items-center justify-center px-8 py-4
                       border border-ppf-orange/30 text-ppf-orange font-bold text-sm tracking-widest uppercase
                       hover:border-ppf-orange hover:bg-ppf-orange/5 transition-all duration-300"
          >
            See the Athlete Board
          </a>
        </motion.div>

        {/* Metric grid below CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-3"
        >
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className="metric-card p-3 rounded text-center"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="text-xl md:text-2xl font-black text-ppf-orange tabular-nums">
                {m.value}
                <span className="text-xs text-ppf-light">{m.unit}</span>
              </p>
              <p className="text-[8px] md:text-[9px] tracking-widest uppercase text-ppf-light/60 font-mono mt-1">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom field line */}
      <div className="absolute bottom-0 left-0 right-0 field-line" />
    </section>
  );
}
