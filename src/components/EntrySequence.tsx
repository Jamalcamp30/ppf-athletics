"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_TILES = [
  "40 YARD PRECISION",
  "JUMP TRANSFER",
  "FORCE OUTPUT",
  "COD INTEGRITY",
  "POSITION MOVEMENT",
  "RECOVERY RHYTHM",
  "VERIFIED TESTING",
  "DRAFT CARRYOVER",
];

export default function EntrySequence({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"dark" | "tiles" | "tagline" | "done">("dark");
  const [visibleTiles, setVisibleTiles] = useState<number>(0);

  const finishSequence = useCallback(() => {
    setPhase("done");
    setTimeout(onComplete, 600);
  }, [onComplete]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("tiles"), 800);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase !== "tiles") return;
    if (visibleTiles < BOOT_TILES.length) {
      const t = setTimeout(() => setVisibleTiles((v) => v + 1), 150);
      return () => clearTimeout(t);
    }
    const t2 = setTimeout(() => setPhase("tagline"), 400);
    return () => clearTimeout(t2);
  }, [phase, visibleTiles]);

  useEffect(() => {
    if (phase === "tagline") {
      const t3 = setTimeout(finishSequence, 2200);
      return () => clearTimeout(t3);
    }
  }, [phase, finishSequence]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center turf-texture hash-marks"
          style={{ background: "#050505" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 grid-overlay opacity-30" />

          {/* Scan line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="scan-line absolute left-0 w-full h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,107,0,.15), transparent)" }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* PPF Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-ppf-white">
                P<span className="text-ppf-orange">P</span>F
              </h1>
              <div className="absolute -inset-4 rounded-full opacity-20 blur-2xl bg-ppf-orange" />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.5 }}
              className="text-xs tracking-[0.35em] uppercase text-ppf-light font-mono"
            >
              Performance OS Initializing
            </motion.p>

            {/* Boot tiles */}
            {phase !== "dark" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                {BOOT_TILES.map((tile, i) => (
                  <motion.div
                    key={tile}
                    initial={{ opacity: 0, y: 10 }}
                    animate={i < visibleTiles ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3 }}
                    className="px-3 py-1.5 text-[10px] md:text-xs tracking-widest uppercase font-mono
                               border border-ppf-orange/20 bg-ppf-dark/60 text-ppf-orange/80"
                  >
                    {tile}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Tagline */}
            {phase === "tagline" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 text-center"
              >
                <p className="text-lg md:text-2xl font-bold tracking-widest uppercase text-ppf-white">
                  Timed. Measured. Coached.{" "}
                  <span className="text-ppf-orange">Verified.</span>
                </p>
              </motion.div>
            )}

            {/* Skip button */}
            <button
              onClick={finishSequence}
              className="absolute -bottom-16 text-[10px] tracking-widest uppercase text-ppf-light/40
                         hover:text-ppf-orange/60 transition-colors font-mono cursor-pointer"
            >
              Skip Intro →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
