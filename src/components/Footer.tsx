"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-ppf-mid/30 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div>
            <h3 className="text-2xl font-black tracking-tighter">
              P<span className="text-ppf-orange">P</span>F
            </h3>
            <p className="text-[9px] tracking-[0.3em] uppercase font-mono text-ppf-light/40 mt-1">
              Performance OS
            </p>
            <p className="mt-4 text-sm text-ppf-light/50 leading-relaxed max-w-xs">
              PPF is not where athletes come to &quot;work out.&quot; It is where serious athletes come
              to build a cleaner, stronger, faster, more evaluatable version of themselves.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] tracking-[0.4em] uppercase font-mono text-ppf-orange mb-4">
              Navigate
            </p>
            <div className="space-y-2">
              {[
                ["#standard", "The Standard"],
                ["#profile-build", "Profile Build"],
                ["#proof", "Proof Dashboard"],
                ["#draft-board", "Draft Board"],
                ["#carryover", "Movement Carryover"],
                ["#system", "The System"],
                ["#leadership", "Leadership"],
                ["#enter-system", "Enter the System"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="block text-xs text-ppf-light/40 hover:text-ppf-orange transition-colors tracking-wide"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact / Identity */}
          <div>
            <p className="text-[9px] tracking-[0.4em] uppercase font-mono text-ppf-orange mb-4">
              PPF Athletics
            </p>
            <div className="space-y-2 text-xs text-ppf-light/40">
              <p>12,000 sq ft Performance Facility</p>
              <p>Combine &amp; Pro Day Preparation</p>
              <p>Football Movement Specialists</p>
              <p>Verified Testing Standards</p>
              <p>NFL Alumni Training Ground</p>
            </div>
            <div className="mt-6">
              <p className="text-[9px] tracking-[0.4em] uppercase font-mono text-ppf-orange mb-2">
                Branded Concepts
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Performance OS",
                  "Movement Carryover",
                  "Profile Build",
                  "Verified Output",
                  "Draft-Ready Profile",
                ].map((concept) => (
                  <span
                    key={concept}
                    className="text-[8px] tracking-widest uppercase font-mono text-ppf-light/25
                               border border-ppf-light/10 px-2 py-0.5 rounded"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ppf-mid/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] tracking-widest uppercase font-mono text-ppf-light/25">
            © {new Date().getFullYear()} PPF Athletics. Built for Performance. Proven by Results.
          </p>
          <p className="text-[9px] tracking-widest uppercase font-mono text-ppf-orange/30">
            Timed · Measured · Coached · Verified
          </p>
        </div>
      </div>
    </footer>
  );
}
