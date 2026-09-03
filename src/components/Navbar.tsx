import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <button
          onClick={() => scrollTo('home')}
          className="text-left group focus:outline-none min-w-0"
        >
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-slate-950 font-bold shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
            </div>
            <div className="truncate">
              <span className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-white block group-hover:text-teal-300 transition-colors font-sans truncate">
                Design With Milan
              </span>
              <span className="text-[10px] sm:text-[11px] text-teal-400 font-medium tracking-wide block -mt-0.5 truncate">
                Mechanical & Product Design Engineer
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-3.5 lg:px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
                activeSection === link.id
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs transition-all shadow-md hover:shadow-teal-500/20 hover:-translate-y-0.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={() => scrollTo('contact')}
            className="px-2.5 sm:px-3 py-1.5 rounded-full bg-teal-500 text-slate-950 font-semibold text-xs min-h-[36px]"
          >
            Talk
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-teal-500 text-slate-950 font-semibold text-sm"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
