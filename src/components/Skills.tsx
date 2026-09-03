import React from 'react';
import { softwareSkills, coreEngineeringSkills } from '../data/skillsData';
import {
  Cpu,
  Wrench,
  Layers,
  Activity,
  FileSpreadsheet,
  CheckCircle2,
  Sparkles,
  ShieldAlert,
  Flame,
  Printer,
  Users,
  Box
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'cad':
        return <Box className="w-4 h-4 text-teal-400" />;
      case 'simulation':
        return <Activity className="w-4 h-4 text-sky-400" />;
      case 'pdm':
        return <Layers className="w-4 h-4 text-indigo-400" />;
      case 'office':
        return <FileSpreadsheet className="w-4 h-4 text-emerald-400" />;
      case 'gdt':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      case 'fmea':
        return <ShieldAlert className="w-4 h-4 text-rose-400" />;
      case 'thermal':
        return <Flame className="w-4 h-4 text-orange-400" />;
      case 'prototype':
        return <Printer className="w-4 h-4 text-purple-400" />;
      case 'creative':
        return <Sparkles className="w-4 h-4 text-amber-300" />;
      case 'team':
        return <Users className="w-4 h-4 text-teal-300" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/40 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Technical Toolkit & Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Skills & Software
          </h2>
          <p className="text-slate-400 text-base mt-2 font-sans">
            Specialized engineering software tools, methodologies, and quality systems honed across consumer and industrial product development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: CAD & Engineering Software */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <Cpu className="w-5 h-5 text-sky-400" />
              <h3 className="text-lg font-bold text-white font-sans">
                CAD & Engineering Software
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {softwareSkills.map((sw) => (
                <div
                  key={sw.name}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all group flex items-start gap-3.5 shadow-sm"
                >
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 group-hover:border-teal-500/40 transition-colors shrink-0">
                    {getIcon(sw.iconType)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 font-mono group-hover:text-teal-300 transition-colors">
                      {sw.name}
                    </h4>
                    {sw.highlight && (
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {sw.highlight}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Core Engineering Methodologies */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <Wrench className="w-5 h-5 text-teal-400" />
              <h3 className="text-lg font-bold text-white font-sans">
                Engineering Methodologies & Core Skills
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreEngineeringSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/30 transition-all group flex items-start gap-3 shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 shrink-0 mt-0.5">
                    {getIcon(skill.iconType)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-teal-300 transition-colors">
                      {skill.name}
                    </h4>
                    {skill.highlight && (
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        {skill.highlight}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
