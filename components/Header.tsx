
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const NAV_LINKS = [
  { name: 'Case Studies', id: 'caseStudies' },
  { name: 'Outcomes', id: 'outcomes' },
  { name: 'How It Works', id: 'howItWorks' },
  { name: 'Proof', id: 'proof' },
  { name: 'Compliance', id: 'compliance' },
];

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-neutral-bg/80 backdrop-blur-lg border-b border-neutral-line shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <svg width="36" height="36" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="new-logo-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC"/>
                  <stop offset="100%" stopColor="#5D00B5"/>
                </linearGradient>
                <linearGradient id="new-logo-blue" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#93C5FD"/>
                  <stop offset="100%" stopColor="#3B82F6"/>
                </linearGradient>
              </defs>
              <g transform="translate(100,100) rotate(45)">
                <path d="M 0 -85 A 85 85 0 0 1 85 0 L 65 0 A 65 65 0 0 0 0 -65 Z" fill="url(#new-logo-blue)"/>
                <path d="M 0 85 A 85 85 0 0 1 -85 0 L -65 0 A 65 65 0 0 0 0 65 Z" fill="url(#new-logo-blue)"/>
                <path d="M 85 0 A 85 85 0 0 1 0 85 L 0 65 A 65 65 0 0 0 65 0 Z" fill="url(#new-logo-purple)"/>
                <path d="M -85 0 A 85 85 0 0 1 0 -85 L 0 -65 A 65 65 0 0 0 -65 0 Z" fill="url(#new-logo-purple)"/>
              </g>
              <circle cx="100" cy="100" r="20" fill="#fff" opacity="0.9"/>
              <circle cx="100" cy="100" r="8" fill="#fff"/>
            </svg>
            <span className="font-display text-2xl font-bold text-text-primary">LeadWorxAI</span>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <button key={link.id} onClick={() => handleNavClick(link.id)} className="text-text-secondary hover:text-brand-purple transition-colors duration-200">
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button onClick={() => onNavigate('getRollout')} className="bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-px shadow-md hover:shadow-lg">
              Get Your Rollout
            </button>
          </div>
          
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-primary focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-neutral-bg-light/95 backdrop-blur-md rounded-lg shadow-xl p-4 border border-neutral-line">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map(link => (
                <button key={link.id} onClick={() => handleNavClick(link.id)} className="text-text-secondary hover:text-brand-purple transition-colors duration-200 text-left px-2 py-1">
                  {link.name}
                </button>
              ))}
              <button onClick={() => onNavigate('getRollout')} className="mt-2 w-full bg-brand-purple text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-sm">
                Get Your Rollout
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
