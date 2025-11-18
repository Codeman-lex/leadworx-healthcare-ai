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
    <header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
            isScrolled 
            ? 'py-3 glass' 
            : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-blue rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-80"></div>
                <div className="absolute inset-0 bg-white rounded-lg border border-gray-200 flex items-center justify-center z-10">
                     <svg className="w-5 h-5 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                     </svg>
                </div>
            </div>
            <span className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-text-primary' : 'text-white'} group-hover:opacity-80`}>
                LeadWorx<span className={isScrolled ? "text-brand-purple" : "text-blue-300"}>AI</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <button 
                key={link.id} 
                onClick={() => handleNavClick(link.id)} 
                className={`text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                    isScrolled 
                    ? 'text-text-secondary hover:text-brand-purple' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
                onClick={() => onNavigate('getRollout')} 
                className={`font-bold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-brand-purple/20 text-sm shadow-lg ${
                    isScrolled 
                    ? 'bg-brand-purple text-white hover:bg-brand-purple-dark shadow-brand-purple/20' 
                    : 'bg-white text-brand-purple hover:bg-gray-50 shadow-white/10'
                }`}
            >
              Get Your Rollout
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-text-primary' : 'text-white'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-gray-100 animate-in fade-in slide-in-from-top-5 duration-200">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map(link => (
                <button key={link.id} onClick={() => handleNavClick(link.id)} className="text-text-secondary hover:text-brand-purple hover:bg-purple-50 rounded-lg transition-all duration-200 text-left px-4 py-3 font-medium text-lg">
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100">
                 <button onClick={() => onNavigate('getRollout')} className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30">
                    Get Your Rollout
                 </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;