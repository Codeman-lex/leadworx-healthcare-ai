import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const NAV_LINKS = [
  { name: 'Case Studies', id: 'caseStudies' },
  { name: 'Reviews', id: 'reviews' },
  { name: 'Outcomes', id: 'outcomes' },
  { name: 'How It Works', id: 'howItWorks' },
  { name: 'Compliance', id: 'compliance' },
];

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <svg width="32" height="32" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="new-logo-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED"/>
                  <stop offset="100%" stopColor="#5B21B6"/>
                </linearGradient>
                <linearGradient id="new-logo-blue" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA"/>
                  <stop offset="100%" stopColor="#2563EB"/>
                </linearGradient>
              </defs>
              <g transform="translate(100,100) rotate(45)">
                <path d="M 0 -85 A 85 85 0 0 1 85 0 L 65 0 A 65 65 0 0 0 0 -65 Z" fill="url(#new-logo-blue)"/>
                <path d="M 0 85 A 85 85 0 0 1 -85 0 L -65 0 A 65 65 0 0 0 0 65 Z" fill="url(#new-logo-blue)"/>
                <path d="M 85 0 A 85 85 0 0 1 0 85 L 0 65 A 65 65 0 0 0 65 0 Z" fill="url(#new-logo-purple)"/>
                <path d="M -85 0 A 85 85 0 0 1 0 -85 L 0 -65 A 65 65 0 0 0 -65 0 Z" fill="url(#new-logo-purple)"/>
              </g>
            </svg>
            <span className={`font-display text-xl font-bold tracking-tight ${isScrolled ? 'text-text-primary' : 'text-white'}`}>LeadWorxAI</span>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <button key={link.id} onClick={() => handleNavClick(link.id)} className={`text-sm font-medium transition-colors duration-200 ${isScrolled ? 'text-text-secondary hover:text-brand-purple' : 'text-gray-100 hover:text-white'}`}>
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button onClick={() => onNavigate('getRollout')} className={`font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 text-sm ${isScrolled ? 'bg-brand-purple text-white hover:bg-brand-purple-dark shadow-md' : 'bg-white text-brand-purple hover:bg-gray-50 shadow-lg'}`}>
              Get Your Rollout
            </button>
          </div>
          
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none ${isScrolled ? 'text-text-primary' : 'text-white'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl p-4 border border-gray-100">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map(link => (
                <button key={link.id} onClick={() => handleNavClick(link.id)} className="text-text-secondary hover:text-brand-purple transition-colors duration-200 text-left px-2 py-1 font-medium">
                  {link.name}
                </button>
              ))}
              <button onClick={() => onNavigate('getRollout')} className="mt-2 w-full bg-brand-purple text-white font-semibold py-3 px-5 rounded-lg transition-all duration-300 shadow-sm">
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