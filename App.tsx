// FIX: Added a triple-slash directive to reference React's types and resolve JSX-related TypeScript errors.
/// <reference types="react" />

import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AuthorityStrip from './components/AuthorityStrip';
import Outcomes from './components/Outcomes';
import ProvenSystem from './components/Mechanism';
import Proof from './components/Proof';
import RiskReversal from './components/RiskReversal';
import WhoWeServe from './components/WhoWeServe';
import HowItWorks from './components/HowItWorks';
import Faq from './components/Faq';
import Footer from './components/Footer';
import TrustedBy from './components/TrustedBy';

const App: React.FC = () => {
  const sections = {
    home: useRef<HTMLDivElement>(null),
    howItWorks: useRef<HTMLDivElement>(null),
    outcomes: useRef<HTMLDivElement>(null),
    proof: useRef<HTMLDivElement>(null),
    whoWeServe: useRef<HTMLDivElement>(null),
    compliance: useRef<HTMLDivElement>(null),
    getRollout: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-neutral-bg font-sans text-text-primary overflow-x-hidden">
      <Header onNavigate={scrollToSection} />
      <main>
        <div ref={sections.home}>
          <Hero ctaAction={() => scrollToSection('getRollout')} />
        </div>
        <div ref={sections.outcomes}>
          <Outcomes />
        </div>
        <AuthorityStrip />
        <ProvenSystem ctaAction={() => scrollToSection('getRollout')} />
        <TrustedBy />
        <div ref={sections.proof}>
          <Proof />
        </div>
         <div ref={sections.howItWorks}>
          <HowItWorks />
        </div>
        <RiskReversal />
        <div ref={sections.whoWeServe}>
          <WhoWeServe />
        </div>
        <div ref={sections.compliance}>
            <Faq />
        </div>
        <div ref={sections.getRollout} className="h-24 bg-neutral-bg">
          {/* Placeholder for a contact/rollout form section */}
        </div>
      </main>
      <Footer onNavigate={scrollToSection}/>
    </div>
  );
};

export default App;