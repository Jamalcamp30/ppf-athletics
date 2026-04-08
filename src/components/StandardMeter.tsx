"use client";

import { useEffect, useState } from "react";

const PHASES = [
  { yard: "1", label: "Foundation", pct: 0 },
  { yard: "10", label: "Output", pct: 16 },
  { yard: "20", label: "Efficiency", pct: 33 },
  { yard: "30", label: "Transfer", pct: 50 },
  { yard: "40", label: "Proof", pct: 67 },
  { yard: "GL", label: "Placement", pct: 85 },
];

export default function StandardMeter() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollPct((scrollTop / docHeight) * 100);
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="standard-meter">
      {/* Rail background */}
      <div className="absolute inset-0 bg-ppf-dark border-r border-ppf-mid/30">
        {/* Progress fill */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ppf-orange/15 to-transparent transition-all duration-200"
          style={{ height: `${scrollPct}%` }}
        />

        {/* Phase markers */}
        {PHASES.map((p) => (
          <div
            key={p.yard}
            className="absolute left-0 right-0 flex items-center"
            style={{ top: `${p.pct}%` }}
          >
            <div className={`w-full h-px ${scrollPct >= p.pct ? "bg-ppf-orange/40" : "bg-ppf-mid/40"}`} />
            <div className="absolute left-1 flex flex-col items-start">
              <span
                className={`text-[7px] font-mono font-bold tracking-wider
                  ${scrollPct >= p.pct ? "text-ppf-orange" : "text-ppf-light/25"}`}
              >
                {p.yard}
              </span>
            </div>
          </div>
        ))}

        {/* Current position indicator */}
        <div
          className="absolute left-0 right-0 h-0.5 bg-ppf-orange transition-all duration-200 z-10"
          style={{ top: `${scrollPct}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-ppf-orange" />
        </div>
      </div>
    </div>
  );
}
