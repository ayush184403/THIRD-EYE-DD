
import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { ICONS, NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (type: PageType) => {
    onNavigate(type);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform border-b border-beigeGold/10 bg-primary/95 backdrop-blur-md ${
        isVisible ? 'translate-y-0 opacity-100 py-3' : '-translate-y-full opacity-0 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => handleNav('HOME')}
        >
          <ICONS.Logo />
          <span className="font-bebas text-2xl tracking-widest text-beigeGold group-hover:text-beigeCream transition-colors">
            THIRD-EYE
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.type}
              onClick={() => handleNav(item.type)}
              className={`text-sm uppercase tracking-widest transition-all duration-300 font-inter ${
                currentPage === item.type 
                  ? 'text-beigeGold border-b border-beigeGold' 
                  : 'text-white/70 hover:text-beigeGold'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-beige"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-secondary border-b border-beigeGold/20 transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 py-6' : 'max-h-0'
      }`}>
        <div className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.type}
              onClick={() => handleNav(item.type)}
              className={`text-lg uppercase tracking-widest font-bebas ${
                currentPage === item.type ? 'text-beigeGold' : 'text-white/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
