"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Metric {
  value: number;
  suffix: string;
  label: string;
  context: string;
}

const PROOF_METRICS: Metric[] = [
  { value: 4.29, suffix: "s", label: "40-Yard Dash", context: "Because details were coached, output was sharpened, and the profile became undeniable." },
  { value: 39.5, suffix: '"', label: "Vertical Jump", context: "Because force, sequencing, and usable expression came together." },
  { value: 30, suffix: "+", label: "Bench Reps", context: "Because strength was built to express, not just to accumulate." },
  { value: 4.08, suffix: "s", label: "Short Shuttle", context: "Because deceleration and transition were trained as real skills." },
  { value: 6.75, suffix: "s", label: "3-Cone Drill", context: "Because COD posture and hip mechanics were cleaned up at the source." },
  { value: 10.2, suffix: "'", label: "Broad Jump", context: "Because force production and sequencing translated to real jump output." },
];

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = 16;
    const steps = duration / step;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.round(start * 100) / 100);
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = target < 10 ? current.toFixed(2) : target === 30 ? current.toFixed(0) : current.toFixed(1);

  return (
    <span className="tabular-nums">
      {display}
      <span className="text-ppf-light text-lg">{suffix}</span>
    </span>
  );
}

export default function ProofDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proof" className="relative py-32 md:py-40 section-divider" ref={ref}>
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase font-mono text-ppf-orange mb-4">
            Proof Dashboard
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl">
            This is what{" "}
            <span className="text-ppf-orange">verified development</span>{" "}
            looks like.
          </h2>
          <p className="mt-4 text-ppf-light max-w-2xl text-base leading-relaxed">
            Numbers are not decoration here. Every metric is tested, tracked, and tied to a
            coaching process that builds real carryover into real evaluation.
          </p>
        </motion.div>

        {/* Metric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {PROOF_METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="metric-card p-6 rounded group"
            >
              <p className="text-[9px] tracking-widest uppercase font-mono text-ppf-light/50 mb-2">
                {m.label}
              </p>
              <p className="text-4xl md:text-5xl font-black text-ppf-orange">
                <AnimatedNumber target={m.value} suffix={m.suffix} inView={isInView} />
              </p>
              <p className="mt-3 text-xs text-ppf-light/60 leading-relaxed italic">
                {m.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-wrap gap-6 items-center justify-center"
        >
          {["NFL Alumni", "Verified Testing Standards", "12,000 sq ft Facility", "Pro Day Proven", "RAS-Level Outcomes"].map(
            (tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-widest uppercase font-mono text-ppf-orange/60
                           border border-ppf-orange/15 px-4 py-2 rounded"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
