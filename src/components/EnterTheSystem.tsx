"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function EnterTheSystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    school: "",
    goal: "",
    category: "athlete",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="enter-system" className="relative py-32 md:py-40" ref={ref}>
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-12 rounded"
          >
            <div className="w-16 h-16 rounded-full bg-ppf-orange/10 border border-ppf-orange/30
                            flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-ppf-orange">✓</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">
              Profile Build <span className="text-ppf-orange">Initiated</span>
            </h3>
            <p className="mt-4 text-ppf-light text-sm leading-relaxed max-w-md mx-auto">
              Your information has been received. The PPF team will review your submission
              and begin the evaluation intake process.
            </p>

            <div className="mt-8 space-y-3">
              <p className="text-[10px] tracking-[0.4em] uppercase font-mono text-ppf-orange">
                Next Steps
              </p>
              {[
                "1. Intake review by the PPF coaching team",
                "2. Initial consultation and goal alignment",
                "3. Movement and measurable baseline assessment",
                "4. Custom training plan development",
                "5. System entry and profile build begins",
              ].map((step) => (
                <p key={step} className="text-xs text-ppf-light/60 font-mono">{step}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="enter-system" className="relative py-32 md:py-40" ref={ref}>
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase font-mono text-ppf-orange mb-4">
            Application
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Enter the <span className="text-ppf-orange">System</span>
          </h2>
          <p className="mt-4 text-ppf-light max-w-xl mx-auto text-base leading-relaxed">
            Begin your profile build. This is not a generic form — this is the start of a
            structured performance intake process.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-panel p-8 md:p-10 rounded"
        >
          {/* Category selector */}
          <div className="mb-8">
            <p className="text-[9px] tracking-widest uppercase font-mono text-ppf-light/50 mb-3">
              I am a...
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                ["athlete", "Athlete"],
                ["parent", "Parent / Family"],
                ["agent", "Agent"],
                ["pro", "Pro / Alumni"],
                ["adult", "Adult Member"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFormData({ ...formData, category: key })}
                  className={`text-[10px] tracking-widest uppercase font-mono px-4 py-2 rounded transition-all cursor-pointer
                    ${formData.category === key
                      ? "bg-ppf-orange text-ppf-black"
                      : "border border-ppf-light/15 text-ppf-light/50 hover:border-ppf-orange/30"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-[9px] tracking-widest uppercase font-mono text-ppf-light/50 block mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-ppf-black border border-ppf-light/10 rounded px-4 py-3 text-sm text-ppf-white
                           placeholder:text-ppf-light/20"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="text-[9px] tracking-widest uppercase font-mono text-ppf-light/50 block mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-ppf-black border border-ppf-light/10 rounded px-4 py-3 text-sm text-ppf-white
                           placeholder:text-ppf-light/20"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-[9px] tracking-widest uppercase font-mono text-ppf-light/50 block mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-ppf-black border border-ppf-light/10 rounded px-4 py-3 text-sm text-ppf-white
                           placeholder:text-ppf-light/20"
                placeholder="(555) 000-0000"
              />
            </div>
            <div>
              <label className="text-[9px] tracking-widest uppercase font-mono text-ppf-light/50 block mb-2">
                Position
              </label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full bg-ppf-black border border-ppf-light/10 rounded px-4 py-3 text-sm text-ppf-white
                           placeholder:text-ppf-light/20"
                placeholder="e.g. WR, CB, EDGE, RB"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-[9px] tracking-widest uppercase font-mono text-ppf-light/50 block mb-2">
                School / Program
              </label>
              <input
                type="text"
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                className="w-full bg-ppf-black border border-ppf-light/10 rounded px-4 py-3 text-sm text-ppf-white
                           placeholder:text-ppf-light/20"
                placeholder="Current or target program"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-[9px] tracking-widest uppercase font-mono text-ppf-light/50 block mb-2">
                Training Goal
              </label>
              <textarea
                rows={3}
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full bg-ppf-black border border-ppf-light/10 rounded px-4 py-3 text-sm text-ppf-white
                           placeholder:text-ppf-light/20 resize-none"
                placeholder="What are you preparing for? Combine, pro day, camp, general development..."
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 bg-ppf-orange text-ppf-black font-bold text-sm
                         tracking-widest uppercase hover:bg-ppf-white transition-colors duration-300 cursor-pointer"
            >
              Begin Your Profile Build →
            </button>
            <p className="text-[9px] tracking-wide text-ppf-light/30 font-mono">
              Your information is handled with the same standard we apply to everything at PPF.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
