"use client";

import { useState } from "react";
import EntrySequence from "@/components/EntrySequence";
import Navigation from "@/components/Navigation";
import HeroCommandCenter from "@/components/HeroCommandCenter";
import StandardSection from "@/components/StandardSection";
import ProfileBuild from "@/components/ProfileBuild";
import ProofDashboard from "@/components/ProofDashboard";
import DraftBoard from "@/components/DraftBoard";
import MovementCarryover from "@/components/MovementCarryover";
import SystemMethod from "@/components/SystemMethod";
import Leadership from "@/components/Leadership";
import OutcomeWall from "@/components/OutcomeWall";
import WhatTheRoomSees from "@/components/WhatTheRoomSees";
import EnterTheSystem from "@/components/EnterTheSystem";
import StandardMeter from "@/components/StandardMeter";
import Footer from "@/components/Footer";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {/* Entry Sequence — PPF Performance OS boot-up */}
      {!introComplete && (
        <EntrySequence onComplete={() => setIntroComplete(true)} />
      )}

      {/* Main site content */}
      {introComplete && (
        <>
          <Navigation />
          <StandardMeter />

          <main className="lg:pl-12">
            {/* Phase 1: Establish Authority */}
            <HeroCommandCenter />

            {/* Phase 2: Reveal the System */}
            <StandardSection />
            <ProfileBuild />

            {/* Phase 3: Prove the Work */}
            <ProofDashboard />
            <DraftBoard />
            <MovementCarryover />

            {/* Phase 4: Humanize the Standard */}
            <SystemMethod />
            <Leadership />
            <OutcomeWall />

            {/* Phase 5: Convert Belief into Action */}
            <WhatTheRoomSees />
            <EnterTheSystem />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
