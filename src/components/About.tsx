import React from 'react';
import { Compass, Lightbulb, ChefHat, Mountain, CheckCircle2, ShieldCheck, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            Background & Design Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main About Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 relative shadow-sm">
              <p className="font-sans leading-relaxed text-slate-200">
                Welcome, and thank you for taking the time to explore my portfolio. My goal is to give you a clear, meaningful look into the experiences, skills, and design thinking I've developed throughout my career. I hope this helps you assess how my capabilities can support and strengthen your team.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 relative shadow-sm">
              <p className="font-sans leading-relaxed text-slate-200">
                I'm <strong className="text-teal-300 font-semibold">Milan Rajawat</strong> — a mechanical/product design engineer with a deep interest in innovation, creativity, and practical problem-solving. Outside of work, you'll usually find me cooking, baking, or hiking through mountain trails.
              </p>
            </div>

            {/* Core Values / Engineering Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="p-2 w-fit rounded-lg bg-teal-500/10 text-teal-400 mb-2">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Concept to Mass Production</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  End-to-end NPD, supplier coordination, and tooling validation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="p-2 w-fit rounded-lg bg-teal-500/10 text-teal-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Robust DFx & GD&T</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Detailed tolerance stack-up, FMEA risk reduction, and weight optimization.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="p-2 w-fit rounded-lg bg-teal-500/10 text-teal-400 mb-2">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Hands-on Prototyping</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Precision lathe machining, milling, 3D printing, and functional rigs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Highlights & Personal Profile Card */}
          <div className="lg:col-span-5 space-y-5">
            {/* Professional Summary Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-850 border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-400" />
                Professional Summary
              </h3>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 pb-3 border-b border-slate-800">
                  <span className="font-mono text-teal-400 font-semibold w-auto sm:w-24 shrink-0">Focus</span>
                  <span>Consumer appliances, commercial cleantech, robotic mechanisms, refrigeration systems</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 pb-3 border-b border-slate-800">
                  <span className="font-mono text-teal-400 font-semibold w-auto sm:w-24 shrink-0">CAD Expertise</span>
                  <span>Solidworks, Unigraphics NX (NX7.5), Solidworks Simulation FEA, PDM</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 pb-3 border-b border-slate-800">
                  <span className="font-mono text-teal-400 font-semibold w-auto sm:w-24 shrink-0">Industry Proven</span>
                  <span>Food Cycle Science (FC-75), Panasonic India, Miraj Group, LG Electronics</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                  <span className="font-mono text-teal-400 font-semibold w-auto sm:w-24 shrink-0">Education</span>
                  <span>Fanshawe College (PEM & AMD Capstone Mechanical Engineering Programs)</span>
                </div>
              </div>

              {/* Beyond Engineering / Lifestyle Interests */}
              <div className="pt-2 border-t border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Beyond the CAD screen
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">
                    <Mountain className="w-3.5 h-3.5 text-sky-400" />
                    Mountain Trail Hiking
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">
                    <ChefHat className="w-3.5 h-3.5 text-amber-400" />
                    Baking & Culinary Arts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
