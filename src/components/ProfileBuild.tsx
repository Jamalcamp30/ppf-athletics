"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Zone {
  id: string;
  label: string;
  position: { top: string; left: string };
  affects: string;
  training: string;
  testing: string;
  evaluation: string;
}

const ZONES: Zone[] = [
  {
    id: "frontside",
    label: "Front-Side Mechanics",
    position: { top: "18%", left: "55%" },
    affects: "Acceleration posture, knee drive, projection angle",
    training: "Sprint mechanics drills, wall drives, sled acceleration, knee-punch sequencing",
    testing: "10-yard split, 40 start, shuttle burst",
    evaluation: "First-step explosion, play speed off the line",
  },
  {
    id: "trunk",
    label: "Trunk Control",
    position: { top: "32%", left: "42%" },
    affects: "Force transfer, posture integrity under speed, deceleration control",
    training: "Anti-rotation progressions, bracing patterns, loaded carries, sport-specific core work",
    testing: "Shuttle efficiency, COD posture, broad jump stability",
    evaluation: "Change-of-direction quality, body control in space",
  },
  {
    id: "arm-action",
    label: "Arm Action",
    position: { top: "26%", left: "68%" },
    affects: "Sprint symmetry, acceleration rhythm, top-end speed maintenance",
    training: "Arm swing drills, reciprocal patterning, posture-linked arm mechanics",
    testing: "40 time consistency, flying 10 efficiency",
    evaluation: "Running form quality, mechanical efficiency",
  },
  {
    id: "force",
    label: "Lower-Half Force Production",
    position: { top: "60%", left: "48%" },
    affects: "Vertical power, broad jump distance, acceleration force, sprint output",
    training: "Squats, trap bar pulls, single-leg progressions, plyometric sequencing, force-velocity profiling",
    testing: "Vertical jump, broad jump, 10-yard split, bench strength correlation",
    evaluation: "Explosive power metrics across all combine events",
  },
  {
    id: "jump",
    label: "Jump Sequencing",
    position: { top: "48%", left: "62%" },
    affects: "Vertical expression, broad jump transfer, reactive ability",
    training: "Drop jumps, countermovement progressions, depth landings, approach jump patterning",
    testing: "Vertical jump, broad jump, RAS jump component",
    evaluation: "Usable power expression on the jump sheet",
  },
  {
    id: "decel",
    label: "Deceleration Patterning",
    position: { top: "70%", left: "38%" },
    affects: "Shuttle time, COD efficiency, injury resilience, transition speed",
    training: "Eccentric loading, braking mechanics, penultimate step work, lateral deceleration drills",
    testing: "Short shuttle, 3-cone, L-drill transitions",
    evaluation: "COD fluency, body control, change-of-direction without wasted motion",
  },
  {
    id: "cod",
    label: "COD Posture",
    position: { top: "55%", left: "30%" },
    affects: "Directional transitions, hip-ankle alignment, re-acceleration efficiency",
    training: "Lateral bound progressions, cut mechanics, hip-turn drills, reactive agility",
    testing: "3-cone, short shuttle, position-specific agility",
    evaluation: "Lateral quickness, transition fluidity, football agility",
  },
  {
    id: "position",
    label: "Position-Specific Movement",
    position: { top: "40%", left: "25%" },
    affects: "Football-specific movement quality, positional readiness, film translation",
    training: "Route running mechanics, backpedal technique, press-release, position drops, football-movement integration",
    testing: "Position drills at pro days, camp movement evaluation",
    evaluation: "Does the athlete move like the position demands?",
  },
];

export default function ProfileBuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeZone, setActiveZone] = useState<Zone | null>(null);

  return (
    <section id="profile-build" className="relative py-32 md:py-40 section-divider" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase font-mono text-ppf-orange mb-4">
            Performance Anatomy
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl">
            How We Build the{" "}
            <span className="text-ppf-orange">Profile</span>
          </h2>
          <p className="mt-4 text-ppf-light max-w-2xl text-base leading-relaxed">
            Every zone of athletic performance is trained with intention. Click any zone
            to see what it affects, how PPF trains it, and how it shows up when evaluation starts.
          </p>
        </motion.div>

        {/* Body + Zones */}
        <div className="mt-16 flex flex-col lg:flex-row gap-12 items-start">
          {/* Athlete figure area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full lg:w-1/2 aspect-[3/4] max-w-md mx-auto lg:mx-0"
          >
            {/* Silhouette background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 md:w-56">
                {/* Stylized athlete silhouette using CSS */}
                <svg viewBox="0 0 200 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Head */}
                  <circle cx="100" cy="35" r="22" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  {/* Neck */}
                  <rect x="92" y="55" width="16" height="15" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  {/* Torso */}
                  <path d="M60 70 L140 70 L135 180 L65 180 Z" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  {/* Left arm */}
                  <path d="M60 70 L35 140 L30 180 L40 182 L50 145 L60 85" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  {/* Right arm */}
                  <path d="M140 70 L165 140 L170 180 L160 182 L150 145 L140 85" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  {/* Left leg */}
                  <path d="M65 180 L55 290 L48 370 L68 372 L72 295 L80 180" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  {/* Right leg */}
                  <path d="M120 180 L130 290 L137 370 L117 372 L113 295 L105 180" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  {/* Center line */}
                  <line x1="100" y1="70" x2="100" y2="180" stroke="#ff6b00" strokeWidth="0.5" opacity="0.3"/>
                </svg>
              </div>
            </div>

            {/* Clickable zone markers */}
            {ZONES.map((zone, i) => (
              <motion.button
                key={zone.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
                onClick={() => setActiveZone(activeZone?.id === zone.id ? null : zone)}
                className={`absolute w-3 h-3 rounded-full cursor-pointer transition-all duration-300 z-10
                  ${activeZone?.id === zone.id
                    ? "bg-ppf-orange scale-150 orange-glow"
                    : "bg-ppf-orange/50 hover:bg-ppf-orange hover:scale-125"
                  }`}
                style={{ top: zone.position.top, left: zone.position.left }}
                title={zone.label}
              >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full border border-ppf-orange/30 animate-ping" />
              </motion.button>
            ))}

            {/* Zone labels */}
            {ZONES.map((zone) => (
              <button
                key={`label-${zone.id}`}
                onClick={() => setActiveZone(activeZone?.id === zone.id ? null : zone)}
                className={`absolute text-[8px] md:text-[9px] tracking-widest uppercase font-mono
                  cursor-pointer transition-colors whitespace-nowrap
                  ${activeZone?.id === zone.id ? "text-ppf-orange" : "text-ppf-light/40 hover:text-ppf-orange/70"}`}
                style={{
                  top: zone.position.top,
                  left: `calc(${zone.position.left} + 14px)`,
                  transform: "translateY(-50%)",
                }}
              >
                {zone.label}
              </button>
            ))}
          </motion.div>

          {/* Detail panel */}
          <div className="w-full lg:w-1/2">
            {activeZone ? (
              <motion.div
                key={activeZone.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-8 rounded"
              >
                <p className="text-[10px] tracking-[0.4em] uppercase font-mono text-ppf-orange mb-2">
                  Zone Detail
                </p>
                <h3 className="text-2xl font-black tracking-tight">
                  {activeZone.label}
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-[9px] tracking-widest uppercase text-ppf-orange font-mono mb-1">
                      What It Affects
                    </p>
                    <p className="text-sm text-ppf-light leading-relaxed">{activeZone.affects}</p>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-widest uppercase text-ppf-orange font-mono mb-1">
                      How PPF Trains It
                    </p>
                    <p className="text-sm text-ppf-light leading-relaxed">{activeZone.training}</p>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-widest uppercase text-ppf-orange font-mono mb-1">
                      How It Shows Up in Testing
                    </p>
                    <p className="text-sm text-ppf-light leading-relaxed">{activeZone.testing}</p>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-widest uppercase text-ppf-orange font-mono mb-1">
                      Why It Matters on Film &amp; in Evaluation
                    </p>
                    <p className="text-sm text-ppf-light leading-relaxed">{activeZone.evaluation}</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="glass-panel p-8 rounded border-dashed border-ppf-light/10"
              >
                <p className="text-ppf-light/40 text-sm font-mono">
                  ← Select a zone to explore how PPF develops each area of athletic performance
                </p>
                <div className="mt-6 space-y-2">
                  {ZONES.map((z) => (
                    <button
                      key={z.id}
                      onClick={() => setActiveZone(z)}
                      className="block w-full text-left px-3 py-2 text-xs tracking-wide uppercase
                                 text-ppf-light/60 hover:text-ppf-orange hover:bg-ppf-orange/5
                                 transition-colors rounded cursor-pointer"
                    >
                      {z.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
