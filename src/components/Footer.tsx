import React from 'react';
import { ArrowUp, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-bold">
              <Compass className="w-4 h-4 text-slate-950" />
            </div>
            <div>
              <span className="text-base font-bold text-white font-sans block">
                Design With Milan
              </span>
              <span className="text-[11px] text-teal-400 font-mono block">
                Mechanical & Product Design Engineer
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <button onClick={() => scrollTo('home')} className="hover:text-teal-300 transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo('about')} className="hover:text-teal-300 transition-colors">
              About
            </button>
            <button onClick={() => scrollTo('skills')} className="hover:text-teal-300 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollTo('projects')} className="hover:text-teal-300 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-teal-300 transition-colors">
              Contact
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={() => scrollTo('top')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-colors border border-slate-800"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© 2026 Design With Milan. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Engineered with Precision • Concept to Mass Production
          </p>
        </div>
      </div>
    </footer>
  );
};
