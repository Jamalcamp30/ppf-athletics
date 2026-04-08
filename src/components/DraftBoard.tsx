"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type BoardView = "featured" | "pro-alumni" | "metric-leaders";

interface Athlete {
  name: string;
  position: string;
  school: string;
  fortyTime: string;
  vertical: string;
  broad: string;
  bench: string;
  emphasis: string;
  status: string;
  category: BoardView[];
}

const ATHLETES: Athlete[] = [
  {
    name: "Marcus J. Williams",
    position: "CB",
    school: "Florida State",
    fortyTime: "4.35",
    vertical: '38.5"',
    broad: "10\'4\"",
    bench: "16",
    emphasis: "Hip fluidity, press technique, transition speed",
    status: "Draft Board — 2027",
    category: ["featured", "metric-leaders"],
  },
  {
    name: "Darius Cole",
    position: "EDGE",
    school: "Georgia",
    fortyTime: "4.58",
    vertical: '36"',
    broad: "10\'0\"",
    bench: "27",
    emphasis: "First-step burst, bend, pass-rush sequencing",
    status: "Draft Board — 2027",
    category: ["featured"],
  },
  {
    name: "Jaylen Thomas",
    position: "WR",
    school: "Alabama",
    fortyTime: "4.29",
    vertical: '39.5"',
    broad: "10\'8\"",
    bench: "12",
    emphasis: "Route precision, top-end speed, vertical tracking",
    status: "Pro Day Ready",
    category: ["featured", "metric-leaders"],
  },
  {
    name: "Isaiah Grant",
    position: "RB",
    school: "Ohio State",
    fortyTime: "4.42",
    vertical: '37"',
    broad: "10\'2\"",
    bench: "22",
    emphasis: "Vision patience, contact balance, receiving ability",
    status: "Draft Board — 2027",
    category: ["featured"],
  },
  {
    name: "Terrence Black",
    position: "S",
    school: "LSU",
    fortyTime: "4.39",
    vertical: '40"',
    broad: "10\'6\"",
    bench: "18",
    emphasis: "Range, ball skills, tackling angles",
    status: "Pro Alumni",
    category: ["pro-alumni", "metric-leaders"],
  },
  {
    name: "Andre Mitchell",
    position: "LB",
    school: "Michigan",
    fortyTime: "4.52",
    vertical: '35.5"',
    broad: "9\'11\"",
    bench: "30",
    emphasis: "Downhill burst, coverage transitions, blitz efficiency",
    status: "Pro Alumni",
    category: ["pro-alumni"],
  },
];

function AthleteCard({ athlete, index }: { athlete: Athlete; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="athlete-card metric-card rounded overflow-hidden cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] tracking-widest uppercase font-mono text-ppf-orange mb-1">
              {athlete.position} — {athlete.school}
            </p>
            <h4 className="text-lg font-bold tracking-tight">{athlete.name}</h4>
          </div>
          <span className="text-[8px] tracking-widest uppercase font-mono text-ppf-light/40 border border-ppf-light/10 px-2 py-1 rounded">
            {athlete.status}
          </span>
        </div>

        {/* Quick metrics */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            { label: "40", val: athlete.fortyTime },
            { label: "VERT", val: athlete.vertical },
            { label: "BROAD", val: athlete.broad },
            { label: "BENCH", val: athlete.bench },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-xs font-black text-ppf-orange tabular-nums">{m.val}</p>
              <p className="text-[7px] tracking-widest uppercase text-ppf-light/40 font-mono mt-0.5">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded dossier */}
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border-t border-ppf-orange/10 p-5 bg-ppf-black/50"
        >
          <div className="space-y-3">
            <div>
              <p className="text-[8px] tracking-widest uppercase text-ppf-orange font-mono mb-0.5">
                Training Emphasis
              </p>
              <p className="text-xs text-ppf-light leading-relaxed">{athlete.emphasis}</p>
            </div>
            <div>
              <p className="text-[8px] tracking-widest uppercase text-ppf-orange font-mono mb-0.5">
                Profile Markers
              </p>
              <p className="text-xs text-ppf-light leading-relaxed">
                Verified testing · Coached movement · PPF standard applied
              </p>
            </div>
            <div>
              <p className="text-[8px] tracking-widest uppercase text-ppf-orange font-mono mb-0.5">
                Carryover Outcomes
              </p>
              <p className="text-xs text-ppf-light leading-relaxed">
                Movement cleanup confirmed · Testing numbers verified · Profile integrity documented
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function DraftBoard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [view, setView] = useState<BoardView>("featured");

  const filtered = ATHLETES.filter((a) => a.category.includes(view));

  return (
    <section id="draft-board" className="relative py-32 md:py-40 section-divider" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase font-mono text-ppf-orange mb-4">
            Athlete Intelligence
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl">
            The <span className="text-ppf-orange">Draft Board</span>
          </h2>
          <p className="mt-4 text-ppf-light max-w-2xl text-base leading-relaxed">
            Not just names. A living board of athletes with verified profiles, measurable
            development, and outcomes that hold up when the room looks closer.
          </p>
        </motion.div>

        {/* Board view tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mt-10"
        >
          {([
            ["featured", "Featured Draft Board"],
            ["pro-alumni", "Pro Alumni"],
            ["metric-leaders", "Metric Leaders"],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setView(key)}
              className={`text-[10px] tracking-widest uppercase font-mono px-4 py-2 rounded transition-all cursor-pointer
                ${view === key
                  ? "bg-ppf-orange text-ppf-black"
                  : "border border-ppf-light/15 text-ppf-light/50 hover:border-ppf-orange/30 hover:text-ppf-orange"
                }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Athlete grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {filtered.map((athlete, i) => (
            <AthleteCard key={athlete.name} athlete={athlete} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
