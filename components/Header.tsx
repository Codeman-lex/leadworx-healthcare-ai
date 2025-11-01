import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const NAV_LINKS = [
  { name: 'Outcomes', id: 'outcomes' },
  { name: 'How It Works', id: 'howItWorks' },
  { name: 'Proof', id: 'proof' },
  { name: 'Who We Serve', id: 'whoWeServe' },
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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-bg/80 backdrop-blur-lg border-b border-neutral-line' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3C8.82 3 3 8.82 3 16C3 23.18 8.82 29 16 29C23.18 29 29 23.18 29 16C29 8.82 23.18 3 16 3ZM5 16C5 9.925 9.925 5 16 5C22.075 5 27 9.925 27 16C27 22.075 22.075 27 16 27C9.925 27 5 22.075 5 16Z" fill="#5D00B5"/>
              <path d="M17 15V11H15V15H11V17H15V21H17V17H21V15H17Z" fill="#5D00B5"/>
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