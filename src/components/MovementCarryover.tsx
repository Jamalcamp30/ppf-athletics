"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CARRYOVER_ITEMS = [
  {
    training: "Sprint Mechanics & Acceleration Work",
    output: "Stopwatch Output",
    detail: "10-yard split, 40-yard dash, flying 10 — the numbers that show up on the testing sheet.",
    icon: "⏱",
  },
  {
    training: "Force Production & Plyometric Sequencing",
    output: "Jump Sheet Performance",
    detail: "Vertical, broad jump, reactive jump ability — usable expression of trained power.",
    icon: "↑",
  },
  {
    training: "Deceleration & COD Patterning",
    output: "Shuttle Efficiency",
    detail: "Short shuttle, 3-cone, L-drill — movement quality that reduces wasted time and motion.",
    icon: "⟲",
  },
  {
    training: "Position-Specific Movement Integration",
    output: "Positional Movement Quality",
    detail: "Film-translatable movement patterns — does the athlete move like the position demands?",
    icon: "◎",
  },
  {
    training: "Testing Rhythm & Peak Preparation",
    output: "Camp & Pro Day Readiness",
    detail: "Mental clarity, physical sharpness, confidence under observation — the full profile on display.",
    icon: "★",
  },
];

export default function MovementCarryover() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="carryover" className="relative py-32 md:py-40 section-divider" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase font-mono text-ppf-orange mb-4">
            Proprietary Methodology
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl">
            PPF{" "}
            <span className="text-ppf-orange">Movement Carryover</span>{" "}
            Analysis
          </h2>
          <p className="mt-4 text-ppf-light max-w-2xl text-base leading-relaxed">
            The bridge between &quot;we train hard&quot; and &quot;our training actually transfers.&quot;
            Every PPF program is built to produce measurable carryover — not just effort,
            but evaluatable outcomes.
          </p>
        </motion.div>

        {/* Carryover flow */}
        <div className="mt-16 space-y-4">
          {CARRYOVER_ITEMS.map((item, i) => (
            <motion.div
              key={item.output}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-panel p-6 rounded flex flex-col md:flex-row md:items-center gap-4 group
                         hover:border-ppf-orange/20 transition-colors"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl
                              text-ppf-orange bg-ppf-orange/5 rounded">
                {item.icon}
              </div>

              {/* Training input */}
              <div className="flex-1">
                <p className="text-[8px] tracking-widest uppercase font-mono text-ppf-light/40 mb-1">
                  Training Input
                </p>
                <p className="text-sm font-bold tracking-wide">{item.training}</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center px-4">
                <div className="w-12 h-px bg-ppf-orange/30 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0
                                  border-l-[6px] border-l-ppf-orange/50
                                  border-y-[4px] border-y-transparent" />
                </div>
              </div>

              {/* Output */}
              <div className="flex-1">
                <p className="text-[8px] tracking-widest uppercase font-mono text-ppf-orange mb-1">
                  Evaluatable Output
                </p>
                <p className="text-sm font-bold tracking-wide text-ppf-orange">{item.output}</p>
                <p className="text-xs text-ppf-light/50 mt-1 leading-relaxed">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center text-sm text-ppf-light/50 italic max-w-xl mx-auto"
        >
          &quot;We train for the stopwatch, the jump sheet, the shuttle line, and the movement demands behind all of them.&quot;
        </motion.p>
      </div>
    </section>
  );
}
