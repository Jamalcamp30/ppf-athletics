"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Standard", href: "#standard" },
  { label: "Profile Build", href: "#profile-build" },
  { label: "Proof", href: "#proof" },
  { label: "Draft Board", href: "#draft-board" },
  { label: "System", href: "#system" },
  { label: "Leadership", href: "#leadership" },
  { label: "Enter the System", href: "#enter-system" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#command-center" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tighter text-ppf-white">
            P<span className="text-ppf-orange">P</span>F
          </span>
          <span className="hidden md:inline text-[8px] tracking-[0.3em] uppercase font-mono text-ppf-light/40 ml-2">
            Performance OS
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[10px] tracking-widest uppercase font-mono transition-colors
                ${link.label === "Enter the System"
                  ? "text-ppf-orange hover:text-ppf-white"
                  : "text-ppf-light/50 hover:text-ppf-orange"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle navigation"
        >
          <span className={`w-5 h-px bg-ppf-orange transition-transform ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`w-5 h-px bg-ppf-orange transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-5 h-px bg-ppf-orange transition-transform ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-ppf-mid/30 bg-ppf-dark/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-xs tracking-widest uppercase font-mono transition-colors
                    ${link.label === "Enter the System"
                      ? "text-ppf-orange"
                      : "text-ppf-light/60 hover:text-ppf-orange"
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
