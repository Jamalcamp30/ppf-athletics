"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PERSPECTIVES = [
  {
    audience: "What Coaches See",
    icon: "🏈",
    points: [
      "An athlete who moves with discipline and positional awareness",
      "Testing numbers that are verified, not self-reported",
      "A profile built on structure — not just raw talent",
      "Movement quality that translates to the field",
    ],
  },
  {
    audience: "What Scouts See",
    icon: "📋",
    points: [
      "Measurables that match film and match verified data",
      "A profile that holds up under scrutiny",
      "Consistency between workout numbers and game movement",
      "An athlete who was coached, not just self-trained",
    ],
  },
  {
    audience: "What Families Feel",
    icon: "🛡",
    points: [
      "Structure and accountability around their athlete's ambition",
      "Real communication and professionalism at every stage",
      "Confidence that the preparation is genuine and verified",
      "Clarity about the plan, the timeline, and the goals",
    ],
  },
  {
    audience: "What Athletes Know",
    icon: "⚡",
    points: [
      "Their movement has been cleaned up at the source",
      "Their numbers are real and their profile is sharp",
      "Their weak links have been identified and addressed",
      "They are ready for the moment — not hoping for it",
    ],
  },
];

export default function WhatTheRoomSees() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="room-sees" className="relative py-32 md:py-40 section-divider" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase font-mono text-ppf-orange mb-4">
            Decision-Maker Intelligence
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl">
            What the <span className="text-ppf-orange">Room</span> Sees
          </h2>
          <p className="mt-4 text-ppf-light max-w-2xl text-base leading-relaxed">
            A developed profile does not just benefit the athlete. It speaks to every person
            in the room who needs to believe in what they see.
          </p>
        </motion.div>

        {/* Perspective cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {PERSPECTIVES.map((p, i) => (
            <motion.div
              key={p.audience}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-panel p-7 rounded hover:border-ppf-orange/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{p.icon}</span>
                <h3 className="text-lg font-bold tracking-wide uppercase">{p.audience}</h3>
              </div>
              <ul className="space-y-3">
                {p.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="text-ppf-orange text-xs mt-1 flex-shrink-0">▸</span>
                    <p className="text-sm text-ppf-light leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Audience bridges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {[
            { label: "For Athletes", desc: "Build a sharper profile." },
            { label: "For Families", desc: "Structure around ambition." },
            { label: "For Agents", desc: "Evaluation-ready athletes." },
            { label: "For Pros/Alumni", desc: "Keep the standard high." },
            { label: "For Adult Members", desc: "Coached with purpose." },
          ].map((a) => (
            <div key={a.label} className="metric-card p-4 rounded text-center">
              <p className="text-xs font-bold tracking-widest uppercase text-ppf-orange">{a.label}</p>
              <p className="text-[10px] text-ppf-light/50 mt-1">{a.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
