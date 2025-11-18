
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProvenSystem from './components/Mechanism';
import Proof from './components/Proof';
import RiskReversal from './components/RiskReversal';
import WhoWeServe from './components/WhoWeServe';
import HowItWorks from './components/HowItWorks';
import Faq from './components/Faq';
import Footer from './components/Footer';
import TrustedBy from './components/TrustedBy';
import CaseStudies from './components/CaseStudies';
import Reviews from './components/Reviews';
import Problem from './components/Problem';
import Solution from './components/Solution';
import FeaturesAlternative from './components/FeaturesAlternative';

const App: React.FC = () => {
  const sections = {
    home: useRef<HTMLDivElement>(null),
    caseStudies: useRef<HTMLDivElement>(null),
    reviews: useRef<HTMLDivElement>(null),
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
        
        <TrustedBy />
        
        <Problem />
        
        <Solution />
        
        <FeaturesAlternative />

        <div ref={sections.reviews}>
          <Reviews />
        </div>

        <div ref={sections.caseStudies}>
          <CaseStudies />
        </div>

        <div ref={sections.howItWorks}>
          <HowItWorks />
        </div>
        
        {/* Kept Proof as redundant social proof or can be removed if too much */}
        <div ref={sections.proof}>
          <Proof />
        </div>
        
        <RiskReversal />
        
        <div ref={sections.whoWeServe}>
          <WhoWeServe />
        </div>
        
        <div ref={sections.compliance}>
            <Faq />
        </div>
        
        <div ref={sections.getRollout} className="h-16 sm:h-24 bg-neutral-bg">
          {/* Placeholder for a contact/rollout form section */}
        </div>
      </main>
      <Footer onNavigate={scrollToSection}/>
    </div>
  );
};

export default App;
