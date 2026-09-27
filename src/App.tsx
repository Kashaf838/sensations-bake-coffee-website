/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { LoadingScreen } from "./components/LoadingScreen";
import { ProposalBanner } from "./components/ProposalBanner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TodayAtSensations } from "./components/TodayAtSensations";
import { ProductSpotlight } from "./components/ProductSpotlight";
import { SignatureMenu } from "./components/SignatureMenu";
import { BakedFreshSection } from "./components/BakedFreshSection";
import { DrinksSection } from "./components/DrinksSection";
import { WhyVisitSection } from "./components/WhyVisitSection";
import { CafeExperience } from "./components/CafeExperience";
import { CustomerLove } from "./components/CustomerLove";
import { GallerySection } from "./components/GallerySection";
import { VisitSection } from "./components/VisitSection";
import { Footer } from "./components/Footer";
import { FloatingMobileBar } from "./components/FloatingMobileBar";
import { ContactModal } from "./components/ContactModal";
import { ProposalModal } from "./components/ProposalModal";

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [proposalModalOpen, setProposalModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#120B07] text-[#231711] dark:text-[#FAF7F2] flex flex-col font-sans selection:bg-[#C59445]/30 selection:text-[#231711] dark:selection:text-[#FAF7F2] transition-colors duration-300 relative">
        {/* Short Premium Loading Screen */}
        <LoadingScreen />

        {/* Desktop-Only Custom Cursor */}
        <CustomCursor />

        {/* Scroll Progress Bar at Top */}
        <ScrollProgress />

        {/* Concept Top Proposal Notice Banner */}
        <ProposalBanner onOpenProposalInfo={() => setProposalModalOpen(true)} />

        {/* Sticky Main Navigation with Theme Switcher */}
        <Navbar onOpenContact={() => setContactModalOpen(true)} />

        {/* Main Editorial Content */}
        <main className="flex-1">
          {/* 1. Cinematic Redesigned Hero */}
          <Hero onOpenContact={() => setContactModalOpen(true)} />

          {/* 2. Today at Sensations Micro Information Strip */}
          <div id="today">
            <TodayAtSensations />
          </div>

          {/* 3. Featured Item Spotlight (The Coffee Break) */}
          <ProductSpotlight onOpenContact={() => setContactModalOpen(true)} />

          {/* 4. Signature Picks — Interactive Menu */}
          <SignatureMenu onOpenContact={() => setContactModalOpen(true)} />

          {/* 5. Bakery Story Section (Fresh Bakes. Sweet Moments.) */}
          <BakedFreshSection onOpenContact={() => setContactModalOpen(true)} />

          {/* 6. Coffee Experience (Stay for the Coffee.) */}
          <DrinksSection onOpenContact={() => setContactModalOpen(true)} />

          {/* 7. Why Visit Section (Typographic: Coffee, Bakes, Moments) */}
          <WhyVisitSection />

          {/* 8. The Sensations Atmosphere & Moments */}
          <CafeExperience />

          {/* 9. Customer Love (Google Reviews Sentiment) */}
          <CustomerLove />

          {/* 10. Interactive Masonry Gallery with Lightbox */}
          <GallerySection />

          {/* 11. Your Next Coffee Stop (Location & Visit Section) */}
          <VisitSection onOpenContact={() => setContactModalOpen(true)} />
        </main>

        {/* Editorial Footer */}
        <Footer
          onOpenProposalInfo={() => setProposalModalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* Floating Mobile Action Bar (Call, Directions, Menu) */}
        <FloatingMobileBar />

        {/* Interactive Modals */}
        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />

        <ProposalModal
          isOpen={proposalModalOpen}
          onClose={() => setProposalModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
