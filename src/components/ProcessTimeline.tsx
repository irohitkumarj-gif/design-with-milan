import React, { useState } from 'react';
import { Coffee, Flame, Droplets, Clock, CheckCircle2, ThermometerSun, Play } from 'lucide-react';

interface Stage {
  step: string;
  name: string;
  description: string;
  temp: string;
  icon: React.ReactNode;
}

const stages: Stage[] = [
  {
    step: 'T1',
    name: 'User Input & Prep',
    description: 'User sets recipe parameters, presses start. Ingredients (tea leaves, spices, water, milk) are ready.',
    temp: 'Ambient (22°C)',
    icon: <Play className="w-3.5 h-3.5" />
  },
  {
    step: 'T2',
    name: 'Heating & Water Flow',
    description: 'Heating element activates. Peristaltic pump meters cold water into the boiler tube toward brewing chamber.',
    temp: 'Heats to 95°C–100°C',
    icon: <Flame className="w-3.5 h-3.5" />
  },
  {
    step: 'T3',
    name: 'Brewing Cycle',
    description: 'Hot water infuses into tea chamber. Dynamic infusion timing maintains rich extraction profile.',
    temp: 'Steeping at 98°C',
    icon: <Droplets className="w-3.5 h-3.5" />
  },
  {
    step: 'T4',
    name: 'Valve Release & Milk Blend',
    description: 'Solenoid butterfly valve opens. Concentrated black tea liquor drains and smoothly blends with heated milk.',
    temp: 'Blending at 85°C',
    icon: <Clock className="w-3.5 h-3.5" />
  },
  {
    step: 'T5',
    name: 'Tea Ready & Keep Warm',
    description: 'Complete beverage is dispensed to hot pot carafe. PTC warming plate maintains serving temperature.',
    temp: 'Maintains 65°C–70°C',
    icon: <ThermometerSun className="w-3.5 h-3.5" />
  }
];

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <div className="mt-5 p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Coffee className="w-4 h-4 text-teal-400" />
          <h4 className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
            Process Flow & Logic Sequence (T1 → T5)
          </h4>
        </div>
        <span className="text-[10px] font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
          Automated Thermal Sequencing
        </span>
      </div>

      {/* Interactive step track */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-3">
        {stages.map((stage, idx) => {
          const isActive = idx === activeStep;
          const isDone = idx < activeStep;
          return (
            <button
              key={stage.step}
              onClick={() => setActiveStep(idx)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all text-center border ${
                isActive
                  ? 'bg-teal-500/15 border-teal-500 text-teal-300 shadow-sm'
                  : isDone
                  ? 'bg-slate-900 border-slate-700 text-slate-300'
                  : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:text-slate-400'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 text-xs font-mono ${
                  isActive
                    ? 'bg-teal-500 text-slate-950 font-bold'
                    : isDone
                    ? 'bg-slate-800 text-teal-400'
                    : 'bg-slate-800/80 text-slate-500'
                }`}
              >
                {isDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : stage.step}
              </div>
              <span className="text-[10px] sm:text-xs font-medium leading-tight line-clamp-1">
                {stage.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Box */}
      <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-start gap-2.5">
          <div className="p-2 rounded-md bg-teal-500/10 text-teal-400 border border-teal-500/20 mt-0.5">
            {stages[activeStep].icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-teal-300">
                {stages[activeStep].step}: {stages[activeStep].name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                {stages[activeStep].temp}
              </span>
            </div>
            <p className="text-slate-300 mt-1 leading-relaxed">
              {stages[activeStep].description}
            </p>
          </div>
        </div>

        <div className="text-[10px] font-mono text-slate-400 whitespace-nowrap self-end sm:self-center">
          Step {activeStep + 1} of {stages.length}
        </div>
      </div>
    </div>
  );
};
