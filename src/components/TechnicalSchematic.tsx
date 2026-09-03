import React from 'react';

interface TechnicalSchematicProps {
  id: string;
  type?: string;
  caption?: string;
}

export const TechnicalSchematic: React.FC<TechnicalSchematicProps> = ({ id, caption }) => {
  // Renders a high-precision, technical vector CAD blueprint representation for each project
  if (id === 'milan-hero' || id === 'milan-profile') {
    return (
      <div className="w-full h-full min-h-[380px] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden text-slate-200">
        {/* Sky and mountain ridge background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 500 500" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-milan" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-milan)" />
            {/* Mountains in background */}
            <path d="M0,350 L80,260 L180,310 L280,210 L380,290 L500,230 L500,500 L0,500 Z" fill="#0f172a" opacity="0.6" />
            <path d="M0,400 L120,330 L220,360 L340,300 L440,360 L500,320 L500,500 L0,500 Z" fill="#1e293b" opacity="0.8" />
          </svg>
        </div>

        {/* Trail marker & figure composition */}
        <div className="relative z-10 flex flex-col items-center max-w-sm text-center">
          <div className="relative mb-4 flex items-center justify-center">
            {/* Mountain summit wooden pole replica from real photo */}
            <div className="w-16 h-52 bg-amber-950/90 border-2 border-amber-700/80 rounded-sm shadow-xl flex flex-col items-center justify-between py-2 text-amber-200 font-mono text-[10px] tracking-wider leading-tight">
              <span className="font-bold text-amber-100">武</span>
              <span>奈</span>
              <span>ヶ</span>
              <span>岳</span>
              <div className="h-px w-8 bg-amber-600/60 my-0.5" />
              <span>山</span>
              <span>頂</span>
              <span>標</span>
              <span>高</span>
              <div className="h-px w-8 bg-amber-600/60 my-0.5" />
              <span className="text-[11px] text-amber-300 font-bold">1214M</span>
            </div>

            {/* Milan hiker stylized silhouette with arms outstretched */}
            <div className="relative ml-4 flex flex-col items-center">
              <div className="w-11 h-11 rounded-full bg-slate-900 border-2 border-teal-400 shadow-md flex items-center justify-center text-xs font-bold text-teal-300">
                MR
              </div>
              <div className="w-18 h-20 bg-sky-900/90 rounded-t-lg mt-1 border border-sky-600 relative">
                {/* Outstretched arms */}
                <div className="absolute top-2 -left-9 w-9 h-3.5 bg-sky-800 rounded-l-full border border-sky-500" />
                <div className="absolute top-2 -right-9 w-9 h-3.5 bg-sky-800 rounded-r-full border border-sky-500" />
              </div>
              <div className="flex gap-2 w-14">
                <div className="w-5 h-16 bg-slate-800 rounded-b border border-slate-700" />
                <div className="w-5 h-16 bg-slate-800 rounded-b border border-slate-700" />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-medium mb-1">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Mt. Bunagatake Summit • 1,214 M
          </div>
          <p className="text-sm font-semibold text-white">Milan Rajawat</p>
          <p className="text-xs text-slate-400">Mechanical & Product Design Engineer • Trail Explorer</p>
        </div>
      </div>
    );
  }

  // Foodcycler FC-75 Technical Visual
  if (id.startsWith('fc-')) {
    const isRow = id === 'fc-factory-row';
    const isSingle = id === 'fc-factory-single';
    return (
      <div className="w-full h-full min-h-[260px] bg-slate-900/95 flex flex-col items-center justify-center p-6 relative overflow-hidden border border-slate-800 text-slate-300">
        <svg className="w-full h-44" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Engineering grid lines */}
          <line x1="20" y1="180" x2="380" y2="180" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
          
          {isRow ? (
            /* Row of factory units on carts */
            <g>
              {[60, 130, 200, 270, 340].map((x, i) => (
                <g key={i} opacity={1 - i * 0.15}>
                  {/* Cart frame */}
                  <rect x={x - 25} y="130" width="50" height="45" stroke="#64748b" strokeWidth="1.5" fill="#1e293b" />
                  <circle cx={x - 20} cy="180" r="5" stroke="#94a3b8" strokeWidth="1.5" fill="#0f172a" />
                  <circle cx={x + 20} cy="180" r="5" stroke="#94a3b8" strokeWidth="1.5" fill="#0f172a" />
                  {/* FC-75 Body */}
                  <rect x={x - 22} y="40" width="44" height="90" rx="3" stroke="#14b8a6" strokeWidth="1.5" fill="#0f172a" />
                  <rect x={x - 18} y="50" width="36" height="35" rx="2" stroke="#475569" strokeWidth="1" fill="#1e293b" />
                  <rect x={x - 18} y="90" width="36" height="35" rx="2" stroke="#475569" strokeWidth="1" fill="#1e293b" />
                  <circle cx={x} cy="65" r="4" fill="#14b8a6" />
                </g>
              ))}
              <text x="200" y="25" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
                MASS PRODUCTION ASSEMBLY LINE • CMP FACTORY
              </text>
            </g>
          ) : isSingle ? (
            /* Single factory unit on testing platform */
            <g>
              <rect x="150" y="160" width="100" height="20" rx="2" fill="#334155" stroke="#475569" strokeWidth="1.5" />
              {/* Unit main body */}
              <rect x="160" y="25" width="80" height="135" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
              {/* Louvers */}
              <line x1="165" y1="35" x2="165" y2="150" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="235" y1="35" x2="235" y2="150" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="3 3" />
              {/* Upper & Lower Drawers */}
              <rect x="172" y="35" width="56" height="52" rx="3" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
              <rect x="180" y="45" width="40" height="16" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
              <rect x="172" y="95" width="56" height="55" rx="3" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
              <rect x="180" y="105" width="40" height="16" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
              <text x="200" y="15" textAnchor="middle" fill="#14b8a6" fontSize="10" fontFamily="monospace">
                FACTORY QC & END-OF-LINE VALIDATION
              </text>
            </g>
          ) : (
            /* Studio Hero Product View with Green Bins */
            <g>
              {/* Main FC-75 Unit */}
              <rect x="180" y="20" width="95" height="155" rx="5" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
              {/* Dual Compartment Displays */}
              <rect x="195" y="32" width="65" height="26" rx="3" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="210" cy="45" r="4" fill="#14b8a6" />
              <circle cx="245" cy="45" r="4" fill="#14b8a6" />
              <rect x="220" y="40" width="16" height="10" rx="1" fill="#0284c7" />

              <rect x="195" y="98" width="65" height="26" rx="3" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="210" cy="111" r="4" fill="#14b8a6" />
              <circle cx="245" cy="111" r="4" fill="#14b8a6" />
              <rect x="220" y="106" width="16" height="10" rx="1" fill="#0284c7" />

              {/* Two Dark Bins with Green Handles */}
              <g transform="translate(70, 75)">
                <ellipse cx="40" cy="85" rx="35" ry="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <rect x="5" y="40" width="70" height="45" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <ellipse cx="40" cy="40" rx="35" ry="12" fill="#1e293b" stroke="#22c55e" strokeWidth="2" />
                {/* Green handle */}
                <path d="M15,40 C15,18 65,18 65,40" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" fill="none" />
                <text x="40" y="65" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif" fontWeight="bold">FOODCYCLER</text>
              </g>

              <g transform="translate(115, 100)">
                <ellipse cx="30" cy="65" rx="28" ry="9" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <rect x="2" y="30" width="56" height="35" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <ellipse cx="30" cy="30" rx="28" ry="9" fill="#1e293b" stroke="#22c55e" strokeWidth="2" />
                <path d="M10,30 C10,12 50,12 50,30" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" fill="none" />
              </g>

              <text x="200" y="193" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
                STAINLESS STEEL COMMERCIAL DUAL-CHAMBER DEHYDRATOR
              </text>
            </g>
          )}
        </svg>
        <span className="text-[11px] text-teal-400 font-mono mt-1 text-center font-medium">
          {caption || 'Foodcycler FC-75 Engineering Architecture'}
        </span>
      </div>
    );
  }

  // PEM Capstone Project - Lathe Ball Turning Tool
  if (id.startsWith('pem-')) {
    return (
      <div className="w-full h-full min-h-[260px] bg-slate-900/95 flex flex-col items-center justify-center p-6 relative overflow-hidden border border-slate-800 text-slate-300">
        <svg className="w-full h-44" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Engineering exploded assembly view */}
          <rect x="10" y="10" width="400" height="180" rx="4" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* CAD Title Block Box */}
          <g transform="translate(260, 120)">
            <rect width="140" height="60" fill="#0f172a" stroke="#475569" strokeWidth="1" />
            <line x1="0" y1="20" x2="140" y2="20" stroke="#334155" strokeWidth="1" />
            <line x1="0" y1="40" x2="140" y2="40" stroke="#334155" strokeWidth="1" />
            <text x="5" y="14" fill="#94a3b8" fontSize="8" fontFamily="monospace">FANSHAWE COLLEGE</text>
            <text x="5" y="34" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">BALL TURNING ATTACHMENT</text>
            <text x="5" y="54" fill="#64748b" fontSize="7" fontFamily="monospace">SCALE: 1:2 • DWG NO. B_BallTurner</text>
          </g>

          {/* Exploded parts */}
          {/* Base mount */}
          <rect x="70" y="145" width="100" height="22" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="45" y="158" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">③ BASE_MOUNT</text>

          {/* Base plate */}
          <ellipse cx="120" cy="120" rx="55" ry="14" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.5" />
          <text x="40" y="122" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">① BASE_PLATE</text>

          {/* Needle bearing */}
          <ellipse cx="120" cy="98" rx="42" ry="10" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" />
          <text x="40" y="100" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">⑤ BEARING</text>

          {/* Upper rotating plate */}
          <ellipse cx="120" cy="72" rx="52" ry="13" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
          <text x="40" y="74" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">② UPPER_PLATE</text>

          {/* Tool holder & carbide insert */}
          <rect x="95" y="40" width="50" height="18" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
          <polygon points="145,40 155,49 145,58" fill="#f59e0b" />
          <text x="40" y="50" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">⑧ TOOL_HOLDER</text>

          {/* Handle bar with shiny brass ball */}
          <line x1="140" y1="72" x2="250" y2="40" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
          <circle cx="255" cy="38" r="14" fill="#eab308" stroke="#facc15" strokeWidth="2" />
          <text x="275" y="42" fill="#eab308" fontSize="9" fontFamily="monospace" fontWeight="bold">⑦ BRASS BALL</text>

          {/* Center alignment axis line */}
          <line x1="120" y1="20" x2="120" y2="175" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
        <span className="text-[11px] text-teal-400 font-mono mt-1 text-center font-medium">
          {caption || 'Exploded Mechanical CAD & Workshop Machining Setup'}
        </span>
      </div>
    );
  }

  // AMD Capstone Project - TeaMatic Automatic Tea Maker
  if (id.startsWith('teamatic-')) {
    const isTeal = id === 'teamatic-teal';
    const isCutaway = id === 'teamatic-cutaway';
    const primaryColor = isTeal ? '#14b8a6' : '#f8fafc';
    const accentColor = isTeal ? '#f43f5e' : '#38bdf8';

    if (isCutaway) {
      return (
        <div className="w-full h-full min-h-[260px] bg-slate-900/95 flex flex-col items-center justify-center p-6 relative overflow-hidden border border-slate-800 text-slate-300">
          <svg className="w-full h-44" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Chassis outline */}
            <path d="M50,180 L50,30 C50,20 180,20 180,30 L180,75 L220,75 L220,180 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            
            {/* Brewing Chamber */}
            <rect x="65" y="40" width="55" height="40" rx="2" fill="#1e293b" stroke="#eab308" strokeWidth="1.5" />
            <rect x="75" y="48" width="35" height="24" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" fill="none" />
            <text x="92" y="35" textAnchor="middle" fill="#eab308" fontSize="8" fontFamily="monospace" fontWeight="bold">BREWING CHAMBER</text>

            {/* Hot Water Tube (Red) */}
            <path d="M120,55 C150,55 150,150 130,165" stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round" />
            <text x="165" y="105" fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold">HOT WATER TUBE</text>

            {/* Butterfly Valve */}
            <rect x="80" y="83" width="25" height="12" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="45" y="92" textAnchor="end" fill="#f59e0b" fontSize="8" fontFamily="monospace" fontWeight="bold">BUTTERFLY VALVE →</text>

            {/* Hot Pot (Lower Carafe) */}
            <rect x="65" y="100" width="55" height="55" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
            <text x="92" y="130" textAnchor="middle" fill="#cbd5e1" fontSize="8" fontFamily="monospace" fontWeight="bold">HOT POT</text>

            {/* Water Container (Right) */}
            <rect x="240" y="30" width="70" height="90" rx="3" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="275" y="65" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">WATER CONT.</text>

            {/* Peristaltic Pump & Cold Water Tube (Blue) */}
            <rect x="250" y="135" width="45" height="35" rx="3" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
            <circle cx="272" cy="152" r="10" stroke="#c084fc" strokeWidth="2" fill="#0f172a" />
            <text x="310" y="155" fill="#c084fc" fontSize="8" fontFamily="monospace" fontWeight="bold">← PERISTALTIC PUMP</text>

            <path d="M250,150 L180,150 C160,150 160,170 140,170" stroke="#0ea5e9" strokeWidth="3" fill="none" />
            <text x="210" y="180" fill="#0ea5e9" fontSize="8" fontFamily="monospace" fontWeight="bold">COLD WATER TUBE</text>

            {/* Heating Assembly */}
            <rect x="65" y="165" width="55" height="12" rx="2" fill="#b91c1c" stroke="#f87171" strokeWidth="1.5" />
            <text x="92" y="190" textAnchor="middle" fill="#f87171" fontSize="8" fontFamily="monospace" fontWeight="bold">HEATING AS</text>
          </svg>
          <span className="text-[11px] text-teal-400 font-mono mt-1 text-center font-medium">
            {caption || 'Cutaway Process Flow & Logic Sequence Blueprint'}
          </span>
        </div>
      );
    }

    return (
      <div className="w-full h-full min-h-[260px] bg-slate-900/95 flex flex-col items-center justify-center p-6 relative overflow-hidden border border-slate-800 text-slate-300">
        <svg className="w-full h-44" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main appliance housing */}
          <path d="M70,175 C60,175 60,35 70,30 C80,25 210,25 220,30 C225,32 230,45 230,175 Z" fill="#0f172a" stroke={primaryColor} strokeWidth="2" />
          {/* Colored housing accent panel */}
          <path d="M75,32 C90,28 200,28 215,32 L215,85 C170,85 160,105 160,125 L160,170 L75,170 Z" fill={primaryColor} fillOpacity="0.85" />
          
          {/* Black Carafe with handle */}
          <rect x="80" y="90" width="70" height="75" rx="5" fill="#090d16" stroke="#475569" strokeWidth="2" />
          <path d="M150,100 C175,100 175,155 150,155" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" fill="none" />

          {/* Water reservoir tank window at rear */}
          <rect x="210" y="40" width="16" height="60" rx="2" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1" />
          
          {/* Power button */}
          <circle cx="190" cy="140" r="8" fill={accentColor} stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="190" cy="140" r="4" fill="#0f172a" />

          <text x="180" y="192" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
            {isTeal ? 'TEAL/TURQUOISE COLOR CONCEPT VARIANT' : 'MINIMALIST WHITE/BLACK MATTE FINISH (SIDE VIEW)'}
          </text>
        </svg>
        <span className="text-[11px] text-teal-400 font-mono mt-1 text-center font-medium">
          {caption || 'TeaMatic 3D CAD Industrial Render'}
        </span>
      </div>
    );
  }

  // Panasonic Refrigerator
  if (id.startsWith('panasonic-')) {
    const isOpen = id === 'panasonic-ref-open';
    const isComp = id === 'panasonic-comparison';

    if (isComp) {
      return (
        <div className="w-full h-full min-h-[260px] bg-slate-900/95 flex flex-col items-center justify-center p-6 relative overflow-hidden border border-slate-800 text-slate-300">
          <div className="grid grid-cols-3 gap-3 w-full max-w-md my-auto">
            {['Panasonic 310L Ref', 'ODM 1 310L Ref', 'ODM 2 310L Ref'].map((title, idx) => (
              <div key={idx} className="flex flex-col items-center bg-slate-800/80 p-2.5 rounded border border-slate-700">
                <div className="w-14 h-32 bg-gradient-to-b from-slate-400 to-slate-600 rounded-sm border border-slate-300 relative shadow-md">
                  {/* Top freezer door */}
                  <div className="h-10 border-b-2 border-slate-800 relative">
                    {idx === 0 && <div className="absolute top-1 right-2 w-1 h-6 bg-slate-900 rounded" />}
                  </div>
                  {/* Bottom fridge door */}
                  <div className="h-20 relative">
                    {idx === 0 ? (
                      <div className="absolute top-1 right-2 w-1 h-14 bg-slate-900 rounded" />
                    ) : (
                      <div className="absolute top-1 left-2 right-2 h-1 bg-slate-800 rounded" />
                    )}
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold text-teal-300 mt-2 text-center leading-tight">
                  {title}
                </span>
              </div>
            ))}
          </div>
          <span className="text-[11px] text-teal-400 font-mono mt-2 text-center font-medium">
            {caption || 'Benchmark Comparison: Panasonic 310L vs. ODM Units'}
          </span>
        </div>
      );
    }

    return (
      <div className="w-full h-full min-h-[260px] bg-slate-900/95 flex flex-col items-center justify-center p-6 relative overflow-hidden border border-slate-800 text-slate-300">
        <svg className="w-full h-44" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isOpen ? (
            /* Open Door View showing interior compartments */
            <g transform="translate(90, 10)">
              {/* Cabinet body */}
              <rect x="0" y="10" width="85" height="170" rx="3" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
              {/* Freezer interior */}
              <rect x="5" y="15" width="75" height="45" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
              <line x1="5" y1="35" x2="80" y2="35" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
              {/* Fridge interior shelves */}
              <rect x="5" y="65" width="75" height="110" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
              <line x1="5" y1="95" x2="80" y2="95" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="5" y1="125" x2="80" y2="125" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
              {/* Jumbo Fresh blue crisper */}
              <rect x="7" y="145" width="71" height="26" rx="2" fill="#0284c7" fillOpacity="0.5" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="42" y="161" textAnchor="middle" fill="#e0f2fe" fontSize="6" fontFamily="sans-serif" fontWeight="bold">JUMBO FRESH</text>

              {/* Open Door Swinging Right */}
              <path d="M85,10 L160,20 L160,190 L85,180 Z" fill="#334155" fillOpacity="0.9" stroke="#cbd5e1" strokeWidth="1.5" />
              <rect x="95" y="75" width="55" height="16" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
              <text x="122" y="86" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="sans-serif">EGG TRAY</text>
              <rect x="95" y="105" width="55" height="16" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
            </g>
          ) : (
            /* Closed Door Front View */
            <g transform="translate(130, 10)">
              <rect x="0" y="10" width="100" height="170" rx="4" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
              {/* Panasonic logo & Green indicator */}
              <text x="50" y="22" textAnchor="middle" fill="#e2e8f0" fontSize="7" fontFamily="sans-serif" fontWeight="bold">Panasonic</text>
              <circle cx="50" cy="28" r="3" fill="#22c55e" />
              
              {/* Vertical Handle Bar */}
              <rect x="47" y="35" width="6" height="55" rx="3" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

              {/* Freezer Door Division */}
              <line x1="0" y1="65" x2="100" y2="65" stroke="#0f172a" strokeWidth="2" />

              {/* Badges / Stickers */}
              <rect x="68" y="32" width="24" height="24" rx="2" fill="#b91c1c" stroke="#fca5a5" strokeWidth="1" />
              <text x="80" y="46" textAnchor="middle" fill="#ffffff" fontSize="6" fontWeight="bold">10 YR</text>

              {/* Lower Refrigerator Door */}
              <rect x="47" y="70" width="6" height="70" rx="3" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
            </g>
          )}
        </svg>
        <span className="text-[11px] text-teal-400 font-mono mt-1 text-center font-medium">
          {caption || 'Panasonic Refrigerator Architecture & Mold Trials'}
        </span>
      </div>
    );
  }

  // Miraj RotiMaster
  if (id.startsWith('rotimaster-')) {
    return (
      <div className="w-full h-full min-h-[260px] bg-slate-900/95 flex flex-col items-center justify-center p-6 relative overflow-hidden border border-slate-800 text-slate-300">
        <svg className="w-full h-44" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main blue-and-white rounded chassis */}
          <rect x="70" y="55" width="180" height="120" rx="24" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <rect x="75" y="80" width="170" height="90" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />

          {/* Top Hoppers: Flour, Oil, Water */}
          {/* Flour Hopper (Left) */}
          <rect x="95" y="25" width="40" height="35" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="115" y="18" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Flour / आटा</text>

          {/* Oil Dispenser (Center) */}
          <rect x="145" y="15" width="22" height="45" rx="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
          <text x="156" y="8" textAnchor="middle" fill="#eab308" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Oil / तेल</text>

          {/* Water Tank (Right) */}
          <rect x="175" y="25" width="36" height="35" rx="3" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
          <text x="193" y="18" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Water / पानी</text>

          {/* Front Control Screen & Function Key */}
          <rect x="145" y="88" width="38" height="24" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="130" cy="100" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
          <text x="90" y="102" fill="#ef4444" fontSize="7" fontFamily="sans-serif" fontWeight="bold">Start Key चालू करें</text>

          {/* Window showing kneading mechanism */}
          <rect x="88" y="120" width="55" height="40" rx="4" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="115" cy="140" r="12" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

          {/* Output Conveyor Ramp & Roti Plate */}
          <path d="M225,140 L310,165" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="260" cy="148" rx="22" ry="7" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
          
          {/* Fresh hot rotis on plate */}
          <ellipse cx="325" cy="172" rx="40" ry="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <ellipse cx="325" cy="170" rx="30" ry="9" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
          
          <text x="325" y="142" textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="sans-serif" fontWeight="bold">
            ENJOY FRESH, TASTY & HYGIENIC ROTI
          </text>
        </svg>
        <span className="text-[11px] text-teal-400 font-mono mt-1 text-center font-medium">
          {caption || 'Miraj RotiMaster Robotic Flatbread Mechanism & Peristaltic Dosing'}
        </span>
      </div>
    );
  }

  // LG Dual Fridge
  if (id.startsWith('lg-')) {
    return (
      <div className="w-full h-full min-h-[260px] bg-slate-900/95 flex flex-col items-center justify-center p-6 relative overflow-hidden border border-slate-800 text-slate-300">
        <svg className="w-full h-44" viewBox="0 0 440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* LG Badge and Header */}
          <circle cx="45" cy="25" r="14" fill="#a21caf" stroke="#f472b6" strokeWidth="1.5" />
          <text x="45" y="29" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">LG</text>
          <text x="65" y="28" fill="#f43f5e" fontSize="10" fontFamily="sans-serif" fontWeight="bold">LG DUAL Fridge™</text>

          {/* Central 3Hr Conversion Banner */}
          <g transform="translate(190, 40)">
            <circle cx="30" cy="30" r="28" fill="#be123c" />
            <text x="30" y="28" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">3 hr</text>
            <text x="30" y="42" textAnchor="middle" fill="#ffffff" fontSize="8">FASTER</text>
            <text x="30" y="70" textAnchor="middle" fill="#fb7185" fontSize="8" fontWeight="bold">Freezer to Fridge in 3Hrs</text>
            
            {/* Arrows */}
            <path d="M-15,30 L15,30" stroke="#f43f5e" strokeWidth="4" markerEnd="url(#arrow)" />
            <path d="M45,30 L75,30" stroke="#f43f5e" strokeWidth="4" />
          </g>

          {/* BEFORE Refrigerator: Only Freezer */}
          <g transform="translate(100, 35)">
            <rect x="0" y="0" width="65" height="145" rx="3" fill="#831843" stroke="#f43f5e" strokeWidth="1.5" />
            {/* Freezer top */}
            <rect x="5" y="5" width="55" height="45" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
            <text x="32" y="30" textAnchor="middle" fill="#38bdf8" fontSize="7" fontWeight="bold">❄️ ONLY FREEZER</text>
            {/* Lower fridge */}
            <rect x="5" y="55" width="55" height="85" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" />
            <text x="32" y="160" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="bold">BEFORE</text>
          </g>

          {/* AFTER Refrigerator: Converted to Fridge */}
          <g transform="translate(285, 35)">
            <rect x="0" y="0" width="65" height="145" rx="3" fill="#831843" stroke="#22c55e" strokeWidth="1.5" />
            {/* Converted top to Fridge */}
            <rect x="5" y="5" width="55" height="45" fill="#064e3b" stroke="#22c55e" strokeWidth="1.5" />
            <text x="32" y="30" textAnchor="middle" fill="#4ade80" fontSize="7" fontWeight="bold">🥗 FRIDGE (+100% FRESH)</text>
            {/* Lower fridge */}
            <rect x="5" y="55" width="55" height="85" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" />
            <text x="32" y="160" textAnchor="middle" fill="#4ade80" fontSize="9" fontWeight="bold">AFTER</text>
          </g>
        </svg>
        <span className="text-[11px] text-teal-400 font-mono mt-1 text-center font-medium">
          {caption || 'LG Dual Fridge Patented Convertible Refrigeration Technology'}
        </span>
      </div>
    );
  }

  // Generic technical default
  return (
    <div className="w-full h-full min-h-[240px] bg-slate-900 flex flex-col items-center justify-center p-6 text-slate-400 border border-slate-800">
      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 mb-2">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      <p className="text-xs font-mono text-slate-300">{caption || 'Engineering Drawing & Specification'}</p>
    </div>
  );
};
