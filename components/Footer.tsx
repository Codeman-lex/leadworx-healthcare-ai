import React from 'react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const NAV_LINKS = [
  { name: 'Outcomes', id: 'outcomes' },
  { name: 'How It Works', id: 'howItWorks' },
  { name: 'Proof', id: 'proof' },
  { name: 'Who We Serve', id: 'whoWeServe' },
  { name: 'Compliance', id: 'compliance' },
];


const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-neutral-bg-light border-t border-neutral-line">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
              <h3 className="font-display text-2xl font-bold text-text-primary">
                  LeadWorxAI
              </h3>
              <p className="mt-2 text-text-secondary text-sm">
                  AI-powered growth infrastructure for private practices.
              </p>
          </div>
          <div className="md:col-span-2">
            <div className="max-w-xl ml-auto bg-neutral-bg p-6 border border-neutral-line rounded-lg text-center">
              <p className="font-semibold text-text-primary">
                  Compliance Statement
              </p>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  HIPAA-aware workflows with BAA available. PHI is segregated, access-controlled, and never used for model training. Every touch is audit-logged.
              </p>
              <p className="mt-4 text-xs text-gray-400">
                  Not medical advice. For patient acquisition systems only.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-line flex flex-col sm:flex-row justify-between items-center text-sm text-text-secondary">
            <p>&copy; {new Date().getFullYear()} LeadWorxAI. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              {NAV_LINKS.map(link => (
                  <button key={link.id} onClick={() => onNavigate(link.id)} className="hover:text-brand-purple transition-colors">
                      {link.name}
                  </button>
              ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;