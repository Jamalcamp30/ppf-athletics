"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LEADERS = [
  {
    name: "Richard",
    title: "Performance Architect",
    role: "Sets the performance tone. Builds the standard. Drives the work. Demands measurable execution.",
    details: [
      "Designs every phase of the training system",
      "Coaches the movement details that affect evaluation",
      "Holds the standard that separates PPF from everywhere else",
      "Ensures every athlete is sharpened, not just trained",
    ],
    tagline: "The standard does not lower. The athlete rises to meet it.",
  },
  {
    name: "Rebecca",
    title: "Experience Architect",
    role: "Shapes the athlete experience around the work — communication, consistency, culture, dependability, professionalism.",
    details: [
      "Builds the operational infrastructure behind the training",
      "Creates consistency, reliability, and trust in every interaction",
      "Manages the athlete journey from intake to outcome",
      "Ensures every family, agent, and athlete feels the standard",
    ],
    tagline: "The experience of PPF is as structured as the training inside it.",
  },
];

export default function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="relative py-32 md:py-40 section-divider" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase font-mono text-ppf-orange mb-4">
            Leadership Infrastructure
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl">
            The people who{" "}
            <span className="text-ppf-orange">built the system</span>
          </h2>
          <p className="mt-4 text-ppf-light max-w-2xl text-base leading-relaxed">
            PPF was not assembled. It was authored — by two people who understand that elite
            performance requires both coaching precision and operational excellence.
          </p>
        </motion.div>

        {/* Leader cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {LEADERS.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="glass-panel rounded overflow-hidden"
            >
              {/* Top accent */}
              <div className="h-1 w-full bg-gradient-to-r from-ppf-orange/60 to-transparent" />

              <div className="p-8">
                {/* Name plate */}
                <div className="mb-6">
                  <p className="text-[9px] tracking-[0.4em] uppercase font-mono text-ppf-orange mb-1">
                    {leader.title}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                    {leader.name}
                  </h3>
                </div>

                {/* Role */}
                <p className="text-base text-ppf-light leading-relaxed border-l-2 border-ppf-orange/30 pl-4">
                  {leader.role}
                </p>

                {/* Details */}
                <div className="mt-6 space-y-2">
                  {leader.details.map((d) => (
                    <div key={d} className="flex items-start gap-3">
                      <span className="text-ppf-orange text-xs mt-0.5">▸</span>
                      <p className="text-sm text-ppf-light/70 leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>

                {/* Tagline */}
                <p className="mt-8 text-xs text-ppf-orange/70 italic font-mono tracking-wide">
                  &quot;{leader.tagline}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
