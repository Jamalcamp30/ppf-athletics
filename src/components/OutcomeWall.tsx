"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WALL_ITEMS = [
  { type: "metric", value: "4.29s", label: "40 — Verified", athlete: "J. Thomas, WR" },
  { type: "quote", value: "\"PPF changed how I prepare. The structure is different.\"", label: "— Active NFL Player" },
  { type: "metric", value: '39.5"', label: "Vertical — Tested", athlete: "J. Thomas, WR" },
  { type: "school", value: "Florida State", label: "Program Placement" },
  { type: "metric", value: "4.08s", label: "Short Shuttle", athlete: "M. Williams, CB" },
  { type: "quote", value: "\"The difference was measurable. Not motivational — measurable.\"", label: "— Combine Prep Athlete" },
  { type: "school", value: "Georgia", label: "Program Placement" },
  { type: "metric", value: "30+", label: "Bench Reps — Verified", athlete: "A. Mitchell, LB" },
  { type: "quote", value: "\"My son trained with purpose for the first time. We could see the plan.\"", label: "— Athlete Parent" },
  { type: "school", value: "Alabama", label: "Program Placement" },
  { type: "metric", value: '10\'8"', label: "Broad Jump", athlete: "J. Thomas, WR" },
  { type: "school", value: "Ohio State", label: "Program Placement" },
  { type: "quote", value: "\"PPF builds profiles. Not just bodies.\"", label: "— NFL Scout" },
  { type: "metric", value: "6.75s", label: "3-Cone — Verified", athlete: "D. Cole, EDGE" },
  { type: "school", value: "LSU", label: "Program Placement" },
  { type: "school", value: "Michigan", label: "Program Placement" },
];

function WallCard({ item, index }: { item: typeof WALL_ITEMS[number]; index: number }) {
  const colors: Record<string, string> = {
    metric: "border-ppf-orange/20",
    quote: "border-ppf-white/10",
    school: "border-ppf-orange/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`p-4 rounded border ${colors[item.type]} bg-ppf-dark/60
                  hover:border-ppf-orange/30 transition-colors`}
    >
      {item.type === "metric" && (
        <>
          <p className="text-2xl md:text-3xl font-black text-ppf-orange tabular-nums">{item.value}</p>
          <p className="text-[9px] tracking-widest uppercase font-mono text-ppf-light/50 mt-1">{item.label}</p>
          <p className="text-[8px] tracking-widest uppercase font-mono text-ppf-light/30 mt-0.5">{item.athlete}</p>
        </>
      )}
      {item.type === "quote" && (
        <>
          <p className="text-sm text-ppf-white/80 italic leading-relaxed">{item.value}</p>
          <p className="text-[9px] tracking-widest uppercase font-mono text-ppf-orange/50 mt-2">{item.label}</p>
        </>
      )}
      {item.type === "school" && (
        <>
          <p className="text-lg font-bold tracking-tight">{item.value}</p>
          <p className="text-[9px] tracking-widest uppercase font-mono text-ppf-orange/40 mt-1">{item.label}</p>
        </>
      )}
    </motion.div>
  );
}

export default function OutcomeWall() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="outcome-wall" className="relative py-32 md:py-40 section-divider" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase font-mono text-ppf-orange mb-4">
            Outcome Wall
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl">
            Built for Performance.{" "}
            <span className="text-ppf-orange">Proven by Results.</span>
          </h2>
          <p className="mt-4 text-ppf-light max-w-2xl text-base leading-relaxed">
            Not a testimonial wall. A curated proof environment — verified metrics, real outcomes,
            coached results, and the evidence that PPF builds profiles that hold up.
          </p>
        </motion.div>

        {/* Masonry-style wall */}
        {isInView && (
          <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
            {WALL_ITEMS.map((item, i) => (
              <div key={`${item.type}-${i}`} className="break-inside-avoid">
                <WallCard item={item} index={i} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
