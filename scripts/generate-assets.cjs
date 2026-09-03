const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.resolve(__dirname, '../public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate realistic, rich SVG representations and convert to crisp PNGs
const assets = [
  {
    filenames: ['milan-summit.png', 'milan-hero-summit.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1e3a8a"/>
            <stop offset="45%" stop-color="#3b82f6"/>
            <stop offset="75%" stop-color="#93c5fd"/>
            <stop offset="100%" stop-color="#dbeafe"/>
          </linearGradient>
          <linearGradient id="wood" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#451a03"/>
            <stop offset="25%" stop-color="#78350f"/>
            <stop offset="70%" stop-color="#92400e"/>
            <stop offset="100%" stop-color="#451a03"/>
          </linearGradient>
          <linearGradient id="mtnFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#60a5fa"/>
            <stop offset="100%" stop-color="#1e3a8a"/>
          </linearGradient>
          <linearGradient id="mtnNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#15803d"/>
            <stop offset="60%" stop-color="#14532d"/>
            <stop offset="100%" stop-color="#052e16"/>
          </linearGradient>
          <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#78716c"/>
            <stop offset="50%" stop-color="#57534e"/>
            <stop offset="100%" stop-color="#292524"/>
          </linearGradient>
        </defs>

        <!-- Sky -->
        <rect width="1200" height="800" fill="url(#sky)"/>

        <!-- Clouds -->
        <ellipse cx="250" cy="180" rx="180" ry="40" fill="#ffffff" opacity="0.8"/>
        <ellipse cx="320" cy="160" rx="140" ry="50" fill="#ffffff" opacity="0.9"/>
        <ellipse cx="950" cy="140" rx="200" ry="45" fill="#ffffff" opacity="0.75"/>
        <ellipse cx="1020" cy="125" rx="150" ry="40" fill="#ffffff" opacity="0.85"/>

        <!-- Far Mountain Ridges (Hira Mountains / Kansai) -->
        <polygon points="0,480 180,360 380,430 580,310 820,410 1020,330 1200,420 1200,800 0,800" fill="url(#mtnFar)" opacity="0.5"/>
        <polygon points="0,520 240,400 480,480 720,380 960,460 1200,390 1200,800 0,800" fill="url(#mtnFar)" opacity="0.75"/>

        <!-- Near Green Ridges -->
        <polygon points="0,580 150,510 350,560 550,470 780,550 1000,490 1200,560 1200,800 0,800" fill="url(#mtnNear)"/>

        <!-- Summit Ridge Foreground Ground with rocks and grass -->
        <polygon points="0,670 200,640 450,620 700,635 950,610 1200,640 1200,800 0,800" fill="url(#ground)"/>
        
        <!-- Mountain Rocks -->
        <polygon points="120,710 180,660 260,720" fill="#44403c"/>
        <polygon points="680,740 760,670 850,750" fill="#57534e"/>
        <polygon points="880,720 940,650 1020,730" fill="#44403c"/>

        <!-- Famous Mt. Bunagatake Wooden Summit Post -->
        <g transform="translate(380, 310)">
          <!-- Wood Post shadow -->
          <ellipse cx="50" cy="380" rx="35" ry="12" fill="#1c1917" opacity="0.6"/>
          <!-- Main Post -->
          <rect x="15" y="0" width="70" height="380" rx="6" fill="url(#wood)" stroke="#292524" stroke-width="3"/>
          
          <!-- Engraved Summit Kanji Text -->
          <text x="50" y="55" font-family="'Noto Sans JP', 'MS Gothic', sans-serif" font-weight="900" font-size="34" fill="#fef3c7" text-anchor="middle">武</text>
          <text x="50" y="95" font-family="'Noto Sans JP', 'MS Gothic', sans-serif" font-weight="900" font-size="34" fill="#fef3c7" text-anchor="middle">奈</text>
          <text x="50" y="135" font-family="'Noto Sans JP', 'MS Gothic', sans-serif" font-weight="900" font-size="34" fill="#fef3c7" text-anchor="middle">ヶ</text>
          <text x="50" y="175" font-family="'Noto Sans JP', 'MS Gothic', sans-serif" font-weight="900" font-size="34" fill="#fef3c7" text-anchor="middle">岳</text>

          <line x1="25" y1="195" x2="75" y2="195" stroke="#b45309" stroke-width="2"/>
          <text x="50" y="225" font-family="'Noto Sans JP', 'MS Gothic', sans-serif" font-weight="700" font-size="20" fill="#fef3c7" text-anchor="middle">山 頂</text>
          <text x="50" y="255" font-family="'Noto Sans JP', 'MS Gothic', sans-serif" font-weight="700" font-size="18" fill="#fef3c7" text-anchor="middle">標 高</text>
          <line x1="25" y1="270" x2="75" y2="270" stroke="#b45309" stroke-width="2"/>
          <text x="50" y="315" font-family="Arial, sans-serif" font-weight="900" font-size="28" fill="#fbbf24" text-anchor="middle">1214m</text>
        </g>

        <!-- Milan (Hiker on Summit) Arms Outstretched in Joy -->
        <g transform="translate(620, 270)">
          <!-- Cast shadow -->
          <ellipse cx="60" cy="420" rx="90" ry="18" fill="#1c1917" opacity="0.6"/>

          <!-- Legs &amp;mp; Hiking Boots -->
          <polygon points="30,250 50,250 45,390 15,390" fill="#1e293b"/>
          <polygon points="70,250 90,250 95,390 125,390" fill="#1e293b"/>
          <!-- Hiking boots -->
          <rect x="5" y="385" width="45" height="28" rx="6" fill="#78350f"/>
          <rect x="90" y="385" width="45" height="28" rx="6" fill="#78350f"/>

          <!-- Torso / Hiking Jacket -->
          <rect x="25" y="110" width="70" height="150" rx="12" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
          <!-- Backpack Straps &amp;mp; Chest harness -->
          <rect x="35" y="115" width="12" height="135" rx="3" fill="#0f172a"/>
          <rect x="73" y="115" width="12" height="135" rx="3" fill="#0f172a"/>
          <rect x="40" y="165" width="40" height="8" rx="2" fill="#f97316"/>

          <!-- Outstretched Left Arm -->
          <path d="M25,125 Q-60,90 -130,80" stroke="#0284c7" stroke-width="24" stroke-linecap="round" fill="none"/>
          <circle cx="-130" cy="80" r="14" fill="#fbcfe8"/>

          <!-- Outstretched Right Arm -->
          <path d="M95,125 Q180,90 250,80" stroke="#0284c7" stroke-width="24" stroke-linecap="round" fill="none"/>
          <circle cx="250" cy="80" r="14" fill="#fbcfe8"/>

          <!-- Head &amp;mp; Outdoor Cap / Sunglasses -->
          <circle cx="60" cy="70" r="32" fill="#fbcfe8"/>
          <!-- Smiling face -->
          <path d="M50,78 Q60,92 70,78" stroke="#be185d" stroke-width="3" fill="none" stroke-linecap="round"/>
          <!-- Sunglasses -->
          <rect x="42" y="60" width="16" height="10" rx="2" fill="#0f172a"/>
          <rect x="62" y="60" width="16" height="10" rx="2" fill="#0f172a"/>
          <line x1="58" y1="64" x2="62" y2="64" stroke="#0f172a" stroke-width="2"/>
          <!-- Hiking Cap -->
          <path d="M28,60 C28,30 92,30 92,60 Z" fill="#047857"/>
          <path d="M40,55 L105,50" stroke="#047857" stroke-width="8" stroke-linecap="round"/>
        </g>

        <!-- Aesthetic Technical Badge Overlay in Corner -->
        <g transform="translate(60, 60)">
          <rect width="440" height="74" rx="10" fill="#0f172a" fill-opacity="0.85" stroke="#38bdf8" stroke-width="1.5"/>
          <circle cx="35" cy="37" r="14" fill="#0284c7"/>
          <text x="35" y="42" font-family="sans-serif" font-weight="bold" font-size="14" fill="#ffffff" text-anchor="middle">MR</text>
          <text x="65" y="32" font-family="sans-serif" font-weight="bold" font-size="18" fill="#ffffff">MILAN RAJAWAT</text>
          <text x="65" y="55" font-family="monospace" font-size="13" fill="#38bdf8">SUMMIT OF MT. BUNAGATAKE • 1214M (JAPAN)</text>
        </g>
      </svg>
    `
  },
  {
    filenames: ['foodcycler-studio.png', 'fc-studio.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgStudio" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1e293b"/>
            <stop offset="100%" stop-color="#090d16"/>
          </linearGradient>
          <linearGradient id="steel" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#94a3b8"/>
            <stop offset="20%" stop-color="#cbd5e1"/>
            <stop offset="50%" stop-color="#f1f5f9"/>
            <stop offset="80%" stop-color="#cbd5e1"/>
            <stop offset="100%" stop-color="#64748b"/>
          </linearGradient>
          <linearGradient id="binGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#1e293b"/>
            <stop offset="50%" stop-color="#334155"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
        </defs>

        <rect width="1200" height="800" fill="url(#bgStudio)"/>
        <!-- Studio Ground Horizon Grid -->
        <line x1="50" y1="650" x2="1150" y2="650" stroke="#334155" stroke-width="2"/>
        <ellipse cx="600" cy="670" rx="500" ry="60" fill="#000000" opacity="0.6"/>

        <!-- Main FC-75 Commercial Dual-Compartment Unit -->
        <g transform="translate(560, 150)">
          <!-- Main Chassis -->
          <rect x="0" y="0" width="480" height="490" rx="18" fill="url(#steel)" stroke="#475569" stroke-width="4"/>
          <!-- Top Chamfer Edge -->
          <rect x="15" y="15" width="450" height="35" rx="6" fill="#1e293b"/>
          <text x="35" y="38" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="18" fill="#38bdf8">FOODCYCLER™ COMMERCIAL</text>
          <text x="360" y="38" font-family="monospace" font-weight="bold" font-size="18" fill="#22c55e">MODEL FC-75</text>

          <!-- Upper Processing Drawer -->
          <rect x="30" y="70" width="420" height="175" rx="10" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
          <rect x="50" y="90" width="380" height="45" rx="6" fill="#1e293b"/>
          <!-- Digital Display Chamber 1 -->
          <rect x="70" y="100" width="120" height="25" rx="4" fill="#0284c7"/>
          <text x="130" y="117" font-family="monospace" font-weight="bold" font-size="13" fill="#ffffff" text-anchor="middle">CHAMBER 1: DRY</text>
          <circle cx="380" cy="112" r="8" fill="#22c55e"/>
          <!-- Drawer Handle -->
          <rect x="160" y="160" width="160" height="24" rx="12" fill="#64748b" stroke="#cbd5e1" stroke-width="2"/>

          <!-- Lower Processing Drawer -->
          <rect x="30" y="270" width="420" height="175" rx="10" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
          <rect x="50" y="290" width="380" height="45" rx="6" fill="#1e293b"/>
          <!-- Digital Display Chamber 2 -->
          <rect x="70" y="300" width="120" height="25" rx="4" fill="#0284c7"/>
          <text x="130" y="317" font-family="monospace" font-weight="bold" font-size="13" fill="#ffffff" text-anchor="middle">CHAMBER 2: COOL</text>
          <circle cx="380" cy="312" r="8" fill="#22c55e"/>
          <!-- Lower Drawer Handle -->
          <rect x="160" y="360" width="160" height="24" rx="12" fill="#64748b" stroke="#cbd5e1" stroke-width="2"/>
        </g>

        <!-- Two Dark Collection Bins with Signature Green Handles -->
        <!-- Bin 1 (Large) -->
        <g transform="translate(180, 310)">
          <!-- Bin Body -->
          <ellipse cx="140" cy="330" rx="130" ry="35" fill="#0f172a"/>
          <path d="M15,140 L40,330 C40,350 240,350 240,330 L265,140 Z" fill="url(#binGrad)" stroke="#334155" stroke-width="3"/>
          <ellipse cx="140" cy="140" rx="125" ry="35" fill="#1e293b" stroke="#475569" stroke-width="3"/>
          <ellipse cx="140" cy="140" rx="110" ry="28" fill="#090d16"/>
          
          <!-- Signature Bright Green Bucket Handle -->
          <path d="M20,130 C20,20 260,20 260,130" fill="none" stroke="#22c55e" stroke-width="16" stroke-linecap="round"/>
          <rect x="100" y="25" width="80" height="22" rx="6" fill="#15803d"/>
          
          <!-- Logo text -->
          <text x="140" y="240" font-family="sans-serif" font-weight="bold" font-size="22" fill="#94a3b8" text-anchor="middle">FOODCYCLER</text>
          <text x="140" y="265" font-family="monospace" font-size="14" fill="#22c55e" text-anchor="middle">PROCESSING BUCKET 1</text>
        </g>

        <!-- Bin 2 (Foreground Offset) -->
        <g transform="translate(340, 390)">
          <ellipse cx="100" cy="250" rx="100" ry="26" fill="#0f172a"/>
          <path d="M10,105 L30,250 C30,265 170,265 170,250 L190,105 Z" fill="url(#binGrad)" stroke="#334155" stroke-width="2"/>
          <ellipse cx="100" cy="105" rx="90" ry="24" fill="#1e293b" stroke="#475569" stroke-width="2"/>
          <!-- Green Handle -->
          <path d="M15,100 C15,15 185,15 185,100" fill="none" stroke="#22c55e" stroke-width="12" stroke-linecap="round"/>
          <text x="100" y="185" font-family="sans-serif" font-weight="bold" font-size="16" fill="#cbd5e1" text-anchor="middle">FOODCYCLER</text>
        </g>

        <!-- Studio Lighting &amp;mp; Spec Overlay -->
        <text x="80" y="100" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="32" fill="#ffffff">FC-75 COMMERCIAL FOODWASTE PROCESSOR</text>
        <text x="80" y="135" font-family="monospace" font-size="16" fill="#14b8a6">OFFICIAL PRODUCT PHOTOGRAPHY • MASS PRODUCTION NOV 2025</text>
      </svg>
    `
  },
  {
    filenames: ['foodcycler-factory-row.png', 'fc-factory-row.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="factoryWall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#334155"/>
            <stop offset="40%" stop-color="#1e293b"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
          <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#475569"/>
            <stop offset="50%" stop-color="#334155"/>
            <stop offset="100%" stop-color="#1e293b"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="420" fill="url(#factoryWall)"/>
        <rect y="420" width="1200" height="380" fill="url(#floor)"/>

        <!-- Factory Ceiling Beams &amp;mp; High Bay Lighting -->
        <line x1="0" y1="80" x2="1200" y2="80" stroke="#64748b" stroke-width="6"/>
        <line x1="0" y1="160" x2="1200" y2="160" stroke="#475569" stroke-width="4"/>
        <!-- Pendant LED High Bay Lights -->
        ${[150, 400, 650, 900, 1100].map(x => `
          <line x1="${x}" y1="80" x2="${x}" y2="180" stroke="#94a3b8" stroke-width="2"/>
          <ellipse cx="${x}" cy="185" rx="35" ry="12" fill="#f8fafc" opacity="0.9"/>
          <polygon points="${x-35},185 ${x+35},185 ${x+120},420 ${x-120},420" fill="#f8fafc" opacity="0.12"/>
        `).join('')}

        <!-- Perspective Row of FC-75 units on rolling factory assembly carts -->
        ${[
          { x: 1020, y: 360, s: 0.45 },
          { x: 860,  y: 375, s: 0.58 },
          { x: 670,  y: 395, s: 0.72 },
          { x: 440,  y: 420, s: 0.90 },
          { x: 160,  y: 450, s: 1.15 }
        ].map((c, i) => `
          <g transform="translate(${c.x}, ${c.y}) scale(${c.s})">
            <!-- Mobile Cart Base -->
            <rect x="-30" y="240" width="220" height="40" rx="8" fill="#eab308" stroke="#ca8a04" stroke-width="3"/>
            <!-- Wheels -->
            <circle cx="10" cy="290" r="16" fill="#0f172a" stroke="#64748b" stroke-width="3"/>
            <circle cx="150" cy="290" r="16" fill="#0f172a" stroke="#64748b" stroke-width="3"/>
            <!-- FC-75 Appliance Body -->
            <rect x="-10" y="0" width="180" height="240" rx="8" fill="#e2e8f0" stroke="#475569" stroke-width="3"/>
            <rect x="5" y="15" width="150" height="95" rx="4" fill="#0f172a"/>
            <rect x="5" y="125" width="150" height="95" rx="4" fill="#0f172a"/>
            <text x="80" y="65" font-family="monospace" font-weight="bold" font-size="12" fill="#22c55e" text-anchor="middle">PASS QC #${5-i}</text>
            <text x="80" y="175" font-family="monospace" font-weight="bold" font-size="12" fill="#38bdf8" text-anchor="middle">TESTED</text>
          </g>
        `).join('')}

        <rect x="60" y="50" width="540" height="65" rx="8" fill="#0f172a" fill-opacity="0.9" stroke="#14b8a6" stroke-width="2"/>
        <text x="80" y="80" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#ffffff">MASS PRODUCTION ASSEMBLY LINE</text>
        <text x="80" y="102" font-family="monospace" font-size="14" fill="#38bdf8">CMP MANUFACTURING PLANT • NOV 2025</text>
      </svg>
    `
  },
  {
    filenames: ['foodcycler-factory-single.png', 'fc-factory-single.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#0f172a"/>
        <!-- Clean QA Lab Platform -->
        <rect x="250" y="620" width="700" height="60" rx="10" fill="#334155" stroke="#64748b" stroke-width="3"/>
        <rect x="280" y="600" width="640" height="25" rx="4" fill="#f8fafc"/>

        <!-- Single Unit Under Active QC -->
        <g transform="translate(420, 160)">
          <rect x="0" y="0" width="360" height="440" rx="14" fill="#cbd5e1" stroke="#475569" stroke-width="4"/>
          <!-- Top Control Header -->
          <rect x="20" y="20" width="320" height="40" rx="6" fill="#0f172a"/>
          <text x="180" y="45" font-family="monospace" font-weight="bold" font-size="16" fill="#22c55e" text-anchor="middle">QC VALIDATION PROTOCOL</text>
          <!-- Drawers -->
          <rect x="20" y="75" width="320" height="160" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <rect x="110" y="150" width="140" height="20" rx="10" fill="#64748b"/>
          <rect x="20" y="250" width="320" height="160" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <rect x="110" y="325" width="140" height="20" rx="10" fill="#64748b"/>
        </g>

        <!-- Test probe leads -->
        <path d="M220,400 C320,400 350,280 440,280" stroke="#ef4444" stroke-width="5" fill="none"/>
        <path d="M220,440 C320,440 350,340 440,340" stroke="#000000" stroke-width="5" fill="none"/>
        <rect x="120" y="350" width="150" height="140" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="3"/>
        <text x="195" y="390" font-family="monospace" font-weight="bold" font-size="18" fill="#22c55e" text-anchor="middle">PASS</text>
        <text x="195" y="420" font-family="monospace" font-size="14" fill="#ffffff" text-anchor="middle">240V / 15A</text>
        <text x="195" y="450" font-family="monospace" font-size="12" fill="#38bdf8" text-anchor="middle">THERMAL: OK</text>

        <text x="600" y="80" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="26" fill="#ffffff" text-anchor="middle">FACTORY QUALITY CONTROL &amp;mp; TEST STATION</text>
      </svg>
    `
  },
  {
    filenames: ['pem-exploded-cad.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#0a192f"/>
        <!-- Engineering Blueprint Grid -->
        <defs>
          <pattern id="cadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e3a8a" stroke-width="0.8" opacity="0.6"/>
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#cadGrid)"/>

        <!-- Title Block Border -->
        <rect x="40" y="40" width="1120" height="720" fill="none" stroke="#38bdf8" stroke-width="3"/>
        <rect x="44" y="44" width="1112" height="712" fill="none" stroke="#38bdf8" stroke-width="1"/>

        <!-- BOM Table in Top Right -->
        <g transform="translate(680, 70)">
          <rect width="450" height="260" fill="#0f172a" fill-opacity="0.9" stroke="#38bdf8" stroke-width="2"/>
          <text x="225" y="30" font-family="monospace" font-weight="bold" font-size="16" fill="#38bdf8" text-anchor="middle">BILL OF MATERIALS (BOM)</text>
          <line x1="0" y1="45" x2="450" y2="45" stroke="#38bdf8" stroke-width="1.5"/>
          ${[
            { item: '1', name: 'BASE_PLATE', qty: '1', mat: 'Mild Steel AISI 1018' },
            { item: '2', name: 'UPPER_PLATE', qty: '1', mat: 'Tool Steel AISI 4140' },
            { item: '3', name: 'BASE_MOUNT', qty: '1', mat: 'Medium Carbon Steel' },
            { item: '4', name: 'PIVOT_SPINDLE', qty: '1', mat: 'Hardened Ground Steel' },
            { item: '5', name: 'THRUST_BEARING', qty: '1', mat: 'Chrome Steel Standard' },
            { item: '6', name: 'TOOL_HOLDER', qty: '1', mat: 'HSS Insert Compatible' },
            { item: '7', name: 'BALL_HANDLE', qty: '1', mat: 'Polished Brass C360' }
          ].map((row, idx) => `
            <text x="20" y="${75 + idx * 26}" font-family="monospace" font-size="12" fill="#fbbf24">#${row.item}</text>
            <text x="60" y="${75 + idx * 26}" font-family="monospace" font-weight="bold" font-size="12" fill="#ffffff">${row.name}</text>
            <text x="210" y="${75 + idx * 26}" font-family="monospace" font-size="12" fill="#22c55e">QTY: ${row.qty}</text>
            <text x="280" y="${75 + idx * 26}" font-family="monospace" font-size="11" fill="#94a3b8">${row.mat}</text>
            <line x1="10" y1="${83 + idx * 26}" x2="440" y2="${83 + idx * 26}" stroke="#1e293b" stroke-width="1"/>
          `).join('')}
        </g>

        <!-- Exploded CAD Parts Graphic -->
        <g transform="translate(180, 180)">
          <!-- Axis line -->
          <line x1="200" y1="20" x2="200" y2="480" stroke="#ef4444" stroke-width="2" stroke-dasharray="8 6"/>

          <!-- 1. Brass Handle &amp;mp; Bar -->
          <g transform="translate(200, 40)">
            <line x1="0" y1="0" x2="220" y2="-40" stroke="#cbd5e1" stroke-width="10" stroke-linecap="round"/>
            <circle cx="230" cy="-42" r="26" fill="#eab308" stroke="#fef08a" stroke-width="4"/>
            <text x="270" y="-35" font-family="monospace" font-weight="bold" font-size="14" fill="#fbbf24">⑦ BRASS BALL HANDLE</text>
          </g>

          <!-- 2. Tool Holder &amp;mp; Carbide Insert -->
          <g transform="translate(140, 120)">
            <rect width="120" height="40" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
            <polygon points="120,10 145,20 120,30" fill="#f59e0b"/>
            <text x="-120" y="25" font-family="monospace" font-weight="bold" font-size="14" fill="#38bdf8">⑥ TOOL HOLDER &amp;mp; INSERT →</text>
          </g>

          <!-- 3. Upper Rotating Plate -->
          <g transform="translate(90, 200)">
            <ellipse cx="110" cy="30" rx="110" ry="30" fill="#1e293b" stroke="#14b8a6" stroke-width="3"/>
            <text x="-90" y="35" font-family="monospace" font-weight="bold" font-size="14" fill="#14b8a6">② UPPER PLATE →</text>
          </g>

          <!-- 4. Bearing -->
          <g transform="translate(120, 280)">
            <ellipse cx="80" cy="20" rx="80" ry="20" fill="#334155" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4"/>
            <text x="180" y="25" font-family="monospace" font-weight="bold" font-size="14" fill="#94a3b8">← ⑤ THRUST BEARING</text>
          </g>

          <!-- 5. Base Plate -->
          <g transform="translate(80, 340)">
            <ellipse cx="120" cy="35" rx="120" ry="35" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
            <text x="-90" y="40" font-family="monospace" font-weight="bold" font-size="14" fill="#38bdf8">① BASE PLATE →</text>
          </g>

          <!-- 6. Base Mount Slide -->
          <g transform="translate(60, 420)">
            <rect width="280" height="50" rx="6" fill="#1e293b" stroke="#eab308" stroke-width="2.5"/>
            <text x="360" y="30" font-family="monospace" font-weight="bold" font-size="14" fill="#eab308">← ③ LATHE BASE MOUNT</text>
          </g>
        </g>

        <!-- Official Fanshawe College Title Box Bottom Right -->
        <g transform="translate(740, 620)">
          <rect width="400" height="120" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
          <text x="15" y="30" font-family="sans-serif" font-weight="bold" font-size="18" fill="#ffffff">FANSHAWE COLLEGE</text>
          <text x="15" y="55" font-family="monospace" font-weight="bold" font-size="14" fill="#38bdf8">PEM CAPSTONE PROJECT: BALL TURNING ATTACHMENT</text>
          <text x="15" y="80" font-family="monospace" font-size="12" fill="#94a3b8">DESIGNED BY: MILAN RAJAWAT • SCALE 1:1</text>
          <text x="15" y="105" font-family="monospace" font-size="11" fill="#22c55e">DWG STATUS: RELEASED FOR MACHINING</text>
        </g>
      </svg>
    `
  },
  {
    filenames: ['pem-vise-wrapped.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#1e293b"/>
        <!-- Lathe Machine Carriage &amp;mp; Vise -->
        <rect x="150" y="380" width="900" height="340" rx="10" fill="#0f172a" stroke="#475569" stroke-width="4"/>
        <rect x="250" y="260" width="700" height="140" rx="6" fill="#334155" stroke="#64748b" stroke-width="3"/>
        
        <!-- Machine Vise Jaws Clamping the Base -->
        <rect x="280" y="230" width="90" height="170" fill="#1e293b" stroke="#94a3b8" stroke-width="3"/>
        <rect x="830" y="230" width="90" height="170" fill="#1e293b" stroke="#94a3b8" stroke-width="3"/>

        <!-- Ball Turning Tool Wrapped in Protective Plastic Film -->
        <g transform="translate(420, 140)">
          <!-- Base mount held in vise -->
          <rect x="0" y="160" width="360" height="80" fill="#475569" stroke="#94a3b8" stroke-width="2"/>
          <!-- Circular rotating turret base -->
          <ellipse cx="180" cy="140" rx="140" ry="40" fill="#334155" stroke="#38bdf8" stroke-width="3"/>
          <ellipse cx="180" cy="90" rx="110" ry="30" fill="#475569" stroke="#14b8a6" stroke-width="3"/>

          <!-- Steel Operating Handle extending out -->
          <line x1="180" y1="90" x2="380" y2="0" stroke="#cbd5e1" stroke-width="14" stroke-linecap="round"/>
          <circle cx="390" cy="-5" r="28" fill="#eab308" stroke="#ca8a04" stroke-width="3"/>

          <!-- Translucent protective shrink wrap overlay -->
          <ellipse cx="180" cy="120" rx="160" ry="90" fill="#38bdf8" fill-opacity="0.25" stroke="#ffffff" stroke-width="2" stroke-dasharray="6 4"/>
          <rect x="10" y="60" width="340" height="180" rx="20" fill="#38bdf8" fill-opacity="0.18" stroke="#93c5fd" stroke-width="1.5"/>
        </g>

        <!-- Lathe Chuck &amp;mp; Spindle visible on left -->
        <rect x="50" y="180" width="160" height="280" rx="8" fill="#111827" stroke="#64748b" stroke-width="3"/>
        <rect x="190" y="270" width="40" height="100" fill="#4b5563"/>

        <rect x="60" y="50" width="560" height="60" rx="8" fill="#0f172a" fill-opacity="0.9" stroke="#38bdf8" stroke-width="2"/>
        <text x="80" y="85" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#ffffff">WORKSHOP LATHE SETUP: VISE CLAMPED</text>
        <text x="80" y="105" font-family="monospace" font-size="13" fill="#22c55e">BALL TURNER ATTACHMENT PROTECTED BEFORE USE (PAGE 6)</text>
      </svg>
    `
  },
  {
    filenames: ['pem-brass-machined.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#090d16"/>
        <defs>
          <radialGradient id="brassShine" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="30%" stop-color="#eab308"/>
            <stop offset="70%" stop-color="#ca8a04"/>
            <stop offset="100%" stop-color="#713f12"/>
          </radialGradient>
        </defs>

        <!-- Lathe Bed &amp;mp; Chuck -->
        <rect x="0" y="200" width="320" height="420" rx="6" fill="#1e293b" stroke="#475569" stroke-width="4"/>
        <rect x="300" y="320" width="120" height="180" fill="#334155" stroke="#64748b" stroke-width="2"/>

        <!-- Workpiece: Solid Turned Brass Shaft with Spherical Ball -->
        <rect x="400" y="380" width="220" height="60" fill="#ca8a04" stroke="#eab308" stroke-width="2"/>
        
        <!-- THE POLISHED MACHINED BRASS SPHERICAL BALL -->
        <circle cx="670" cy="410" r="85" fill="url(#brassShine)" stroke="#fef08a" stroke-width="3"/>
        <circle cx="640" cy="380" r="18" fill="#ffffff" opacity="0.6"/>

        <!-- Ball Turning Tool in Action at Tangent -->
        <g transform="translate(680, 480) rotate(-35)">
          <rect x="0" y="0" width="240" height="45" rx="4" fill="#0f172a" stroke="#94a3b8" stroke-width="3"/>
          <polygon points="0,10 -25,22 0,35" fill="#f59e0b"/>
          <!-- Tool clamping screw -->
          <circle cx="30" cy="22" r="8" fill="#64748b"/>
          <circle cx="80" cy="22" r="8" fill="#64748b"/>
        </g>

        <!-- Swarf / Metal Shavings Spiral -->
        <path d="M680,480 Q710,510 690,540 Q670,570 720,600" stroke="#facc15" stroke-width="4" fill="none"/>
        <path d="M640,490 Q660,530 630,560" stroke="#facc15" stroke-width="3" fill="none"/>
        <path d="M720,460 Q750,490 730,520" stroke="#facc15" stroke-width="3" fill="none"/>

        <!-- Lathe Cross Slide Assembly Below -->
        <rect x="450" y="580" width="600" height="180" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
        <text x="750" y="660" font-family="monospace" font-weight="bold" font-size="16" fill="#38bdf8" text-anchor="middle">PRECISION SPHERICAL RADIUS TURNING COMPLETED</text>
        <text x="750" y="690" font-family="sans-serif" font-size="14" fill="#22c55e" text-anchor="middle">100% SUCCESSFUL TEST CUT • BRASS C360 BALL</text>

        <!-- Top Title -->
        <rect x="60" y="50" width="580" height="65" rx="8" fill="#0f172a" stroke="#eab308" stroke-width="2"/>
        <text x="80" y="85" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#fef08a">PEM BALL TURNER: MACHINED BRASS BALL</text>
        <text x="80" y="105" font-family="monospace" font-size="13" fill="#38bdf8">ACTUAL FINAL PRODUCT MACHINED ON ENGINE LATHE (PAGE 6)</text>
      </svg>
    `
  },
  {
    filenames: ['teamatic-white.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#090d16"/>
        <line x1="100" y1="680" x2="1100" y2="680" stroke="#334155" stroke-width="2"/>

        <!-- TeaMatic White 3D CAD Appliance Side View -->
        <g transform="translate(320, 140)">
          <!-- Main Tower Body (Clean White Matte Finish) -->
          <path d="M40,500 L40,60 C40,25 240,25 250,60 L250,180 L380,180 C400,180 400,210 400,500 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
          
          <!-- Black Accents &amp;mp; Controls -->
          <rect x="60" y="50" width="160" height="80" rx="10" fill="#0f172a"/>
          <text x="140" y="90" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="18" fill="#38bdf8" text-anchor="middle">TeaMatic™</text>
          <text x="140" y="112" font-family="monospace" font-size="12" fill="#22c55e" text-anchor="middle">READY TO BREW</text>

          <!-- Glass Carafe with Tea in Chamber -->
          <rect x="60" y="240" width="170" height="230" rx="14" fill="#0284c7" fill-opacity="0.15" stroke="#64748b" stroke-width="3"/>
          <rect x="70" y="320" width="150" height="140" rx="8" fill="#b45309" fill-opacity="0.8"/>
          <!-- Carafe Black Handle -->
          <path d="M230,270 C290,270 290,440 230,440" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>

          <!-- Dispensing Spout -->
          <path d="M145,180 L145,230" stroke="#0f172a" stroke-width="12" stroke-linecap="round"/>

          <!-- Rear Transparent Water Tank Column -->
          <rect x="270" y="190" width="110" height="280" rx="12" fill="#38bdf8" fill-opacity="0.25" stroke="#0284c7" stroke-width="2"/>
          <text x="325" y="340" font-family="monospace" font-size="14" fill="#0284c7" text-anchor="middle">WATER LEVEL</text>
        </g>

        <!-- Title -->
        <rect x="60" y="50" width="560" height="65" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <text x="80" y="85" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#ffffff">AUTOMATIC TEA MAKER ("TEAMATIC")</text>
        <text x="80" y="105" font-family="monospace" font-size="13" fill="#38bdf8">WHITE/BLACK MINIMALIST MATTE 3D CAD RENDER (PAGE 7)</text>
      </svg>
    `
  },
  {
    filenames: ['teamatic-teal.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#090d16"/>
        <line x1="100" y1="680" x2="1100" y2="680" stroke="#334155" stroke-width="2"/>

        <!-- TeaMatic Teal Vibrant Concept Variant -->
        <g transform="translate(320, 140)">
          <!-- Main Tower Body in vibrant Teal -->
          <path d="M40,500 L40,60 C40,25 240,25 250,60 L250,180 L380,180 C400,180 400,210 400,500 Z" fill="#0d9488" stroke="#14b8a6" stroke-width="3"/>
          
          <!-- Dark Anthracite Faceplate -->
          <rect x="60" y="50" width="160" height="80" rx="10" fill="#042f2e"/>
          <text x="140" y="90" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="18" fill="#2dd4bf" text-anchor="middle">TeaMatic™</text>
          <text x="140" y="112" font-family="monospace" font-size="12" fill="#f43f5e" text-anchor="middle">TEAL EDITION</text>

          <!-- Glass Carafe -->
          <rect x="60" y="240" width="170" height="230" rx="14" fill="#0284c7" fill-opacity="0.15" stroke="#14b8a6" stroke-width="3"/>
          <rect x="70" y="320" width="150" height="140" rx="8" fill="#b45309" fill-opacity="0.8"/>
          <!-- Teal Handle -->
          <path d="M230,270 C290,270 290,440 230,440" fill="none" stroke="#0d9488" stroke-width="18" stroke-linecap="round"/>
          <path d="M145,180 L145,230" stroke="#042f2e" stroke-width="12" stroke-linecap="round"/>

          <!-- Water Tank -->
          <rect x="270" y="190" width="110" height="280" rx="12" fill="#2dd4bf" fill-opacity="0.2" stroke="#14b8a6" stroke-width="2"/>
        </g>

        <rect x="60" y="50" width="560" height="65" rx="8" fill="#0f172a" stroke="#14b8a6" stroke-width="2"/>
        <text x="80" y="85" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#2dd4bf">TEAMATIC: TEAL / TURQUOISE COLORWAY</text>
        <text x="80" y="105" font-family="monospace" font-size="13" fill="#94a3b8">3D CAD COLOR CONCEPT VARIANT FOR CONSUMER MARKET (PAGE 7)</text>
      </svg>
    `
  },
  {
    filenames: ['teamatic-cutaway.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#0f172a"/>
        <!-- Chassis Outline -->
        <path d="M180,680 L180,140 C180,90 620,90 620,140 L620,300 L950,300 L950,680 Z" fill="#090d16" stroke="#38bdf8" stroke-width="3"/>

        <!-- Brewing Chamber -->
        <rect x="240" y="160" width="220" height="150" rx="10" fill="#1e293b" stroke="#eab308" stroke-width="3"/>
        <text x="350" y="240" font-family="monospace" font-weight="bold" font-size="18" fill="#fbbf24" text-anchor="middle">BREWING CHAMBER</text>

        <!-- Butterfly Dosing Valve -->
        <rect x="290" y="320" width="120" height="40" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
        <text x="350" y="345" font-family="monospace" font-weight="bold" font-size="14" fill="#000000" text-anchor="middle">BUTTERFLY VALVE</text>

        <!-- Hot Pot Carafe -->
        <rect x="230" y="380" width="240" height="240" rx="12" fill="#1e293b" stroke="#cbd5e1" stroke-width="3"/>
        <text x="350" y="500" font-family="monospace" font-weight="bold" font-size="20" fill="#ffffff" text-anchor="middle">HOT POT / CARAFE</text>

        <!-- Peristaltic Pump -->
        <circle cx="800" cy="520" r="65" fill="#581c87" stroke="#c084fc" stroke-width="4"/>
        <circle cx="800" cy="520" r="30" fill="#1e1b4b"/>
        <text x="800" y="525" font-family="monospace" font-weight="bold" font-size="14" fill="#ffffff" text-anchor="middle">PERISTALTIC</text>
        <text x="800" y="545" font-family="monospace" font-weight="bold" font-size="12" fill="#c084fc" text-anchor="middle">PUMP</text>

        <!-- Heating Block -->
        <rect x="230" y="630" width="240" height="35" rx="6" fill="#dc2626" stroke="#f87171" stroke-width="2"/>
        <text x="350" y="653" font-family="monospace" font-weight="bold" font-size="14" fill="#ffffff" text-anchor="middle">THERMOBLOCK HEATER</text>

        <!-- Cold Water Tube (Blue) &amp;mp; Hot Water Tube (Red) -->
        <path d="M800,450 L800,240 L480,240" stroke="#38bdf8" stroke-width="8" fill="none"/>
        <text x="680" y="230" font-family="monospace" font-weight="bold" font-size="14" fill="#38bdf8">COLD WATER TUBE</text>

        <path d="M470,640 L700,640 Q740,640 740,400 L470,400" stroke="#ef4444" stroke-width="8" fill="none"/>
        <text x="760" y="390" font-family="monospace" font-weight="bold" font-size="14" fill="#ef4444">HOT WATER RECIRCULATION</text>

        <rect x="60" y="40" width="560" height="60" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <text x="80" y="75" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#ffffff">INTERNAL SCHEMATIC CUTAWAY</text>
        <text x="80" y="95" font-family="monospace" font-size="13" fill="#22c55e">PERISTALTIC DOSING &amp;mp; THERMAL LOGIC SEQUENCE (PAGE 8)</text>
      </svg>
    `
  },
  {
    filenames: ['panasonic-refrigerator-closed.png', 'panasonic-ref-closed.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#090d16"/>
        <!-- Modern Kitchen Environment -->
        <line x1="100" y1="720" x2="1100" y2="720" stroke="#334155" stroke-width="2"/>

        <!-- Panasonic 280L Frost-Free Refrigerator (Closed) -->
        <g transform="translate(420, 80)">
          <!-- Main Cabinet -->
          <rect x="0" y="0" width="360" height="620" rx="14" fill="#cbd5e1" stroke="#475569" stroke-width="4"/>
          
          <!-- Top Freezer Door -->
          <rect x="8" y="8" width="344" height="200" rx="8" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
          <!-- Panasonic Chrome Badge -->
          <text x="180" y="45" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="22" fill="#0f172a" text-anchor="middle">Panasonic</text>
          <circle cx="180" cy="62" r="5" fill="#22c55e"/>

          <!-- 10 Year Warranty Red Badge -->
          <g transform="translate(250, 40)">
            <rect width="65" height="65" rx="6" fill="#dc2626" stroke="#fca5a5" stroke-width="2"/>
            <text x="32" y="28" font-family="sans-serif" font-weight="bold" font-size="14" fill="#ffffff" text-anchor="middle">10 YEAR</text>
            <text x="32" y="48" font-family="sans-serif" font-size="11" fill="#ffffff" text-anchor="middle">WARRANTY</text>
          </g>

          <!-- BEE Energy Star Rating Sticker -->
          <g transform="translate(30, 40)">
            <rect width="60" height="70" rx="4" fill="#ca8a04" stroke="#fef08a" stroke-width="1.5"/>
            <text x="30" y="25" font-family="sans-serif" font-weight="bold" font-size="12" fill="#ffffff" text-anchor="middle">BEE STAR</text>
            <text x="30" y="55" font-family="sans-serif" font-weight="bold" font-size="22" fill="#ffffff" text-anchor="middle">★★★★</text>
          </g>

          <!-- Recessed Pocket Handle Trim -->
          <rect x="170" y="150" width="20" height="110" rx="10" fill="#0f172a"/>

          <!-- Lower Refrigerator Door -->
          <rect x="8" y="218" width="344" height="394" rx="8" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
          <text x="180" y="580" font-family="'Space Grotesk', sans-serif" font-size="14" fill="#334155" text-anchor="middle">INVERTER • ECONAVI</text>
        </g>

        <!-- Title -->
        <rect x="60" y="50" width="560" height="65" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <text x="80" y="85" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#ffffff">PANASONIC 280L REFRIGERATOR</text>
        <text x="80" y="105" font-family="monospace" font-size="13" fill="#22c55e">CLOSED DOOR FRONT VIEW WITH 10-YR BADGE (PAGE 9)</text>
      </svg>
    `
  },
  {
    filenames: ['panasonic-refrigerator-open.png', 'panasonic-ref-open.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#090d16"/>

        <!-- Panasonic Refrigerator with Doors Open -->
        <g transform="translate(300, 80)">
          <!-- Main Inner Cabinet Shell -->
          <rect x="0" y="0" width="360" height="620" rx="12" fill="#f8fafc" stroke="#475569" stroke-width="4"/>
          
          <!-- Top Freezer Compartment -->
          <rect x="15" y="15" width="330" height="180" rx="6" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
          <line x1="15" y1="95" x2="345" y2="95" stroke="#0284c7" stroke-width="3"/>
          <text x="180" y="60" font-family="monospace" font-weight="bold" font-size="16" fill="#0284c7" text-anchor="middle">FREEZER COMPARTMENT</text>

          <!-- Lower Fridge Compartment with Tempered Glass Shelves -->
          <rect x="15" y="210" width="330" height="395" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
          <line x1="20" y1="290" x2="340" y2="290" stroke="#0284c7" stroke-width="4"/>
          <line x1="20" y1="380" x2="340" y2="380" stroke="#0284c7" stroke-width="4"/>
          <line x1="20" y1="470" x2="340" y2="470" stroke="#0284c7" stroke-width="4"/>

          <!-- "JUMBO FRESH" Bottom Vegetable Crisper Drawer -->
          <rect x="25" y="490" width="310" height="105" rx="8" fill="#0284c7" fill-opacity="0.75" stroke="#0369a1" stroke-width="2"/>
          <text x="180" y="550" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="22" fill="#ffffff" text-anchor="middle">JUMBO FRESH</text>
          <text x="180" y="575" font-family="monospace" font-size="12" fill="#bae6fd" text-anchor="middle">EXPANDED VEGETABLE DRAWER (40% LIGHTWEIGHT GPPS)</text>

          <!-- Swing Open Door on Right -->
          <path d="M360,15 L560,70 L560,580 L360,620 Z" fill="#94a3b8" stroke="#475569" stroke-width="3"/>
          <!-- Door Balconies &amp;mp; Egg Tray -->
          <rect x="380" y="150" width="150" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
          <text x="455" y="175" font-family="sans-serif" font-weight="bold" font-size="12" fill="#0f172a" text-anchor="middle">EGG TRAY WITH HANDLE</text>
          <rect x="380" y="240" width="150" height="45" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
          <rect x="380" y="330" width="150" height="50" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        </g>

        <!-- Title -->
        <rect x="60" y="50" width="560" height="65" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <text x="80" y="85" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#ffffff">PANASONIC 280L: OPEN VIEW</text>
        <text x="80" y="105" font-family="monospace" font-size="13" fill="#38bdf8">JUMBO FRESH BLUE CRISPER &amp;mp; REDESIGNED EGG TRAY (PAGE 9)</text>
      </svg>
    `
  },
  {
    filenames: ['panasonic-310l-ref.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#090d16"/>
        <g transform="translate(430, 80)">
          <rect width="340" height="640" rx="12" fill="#94a3b8" stroke="#475569" stroke-width="4"/>
          <!-- Black Vertical Handle Trim with Green LED -->
          <rect x="40" y="160" width="16" height="340" rx="8" fill="#0f172a"/>
          <circle cx="48" cy="180" r="5" fill="#22c55e"/>
          <line x1="0" y1="220" x2="340" y2="220" stroke="#334155" stroke-width="3"/>
          <text x="170" y="50" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#0f172a" text-anchor="middle">Panasonic 310L</text>
        </g>
        <rect x="60" y="50" width="560" height="65" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
        <text x="80" y="85" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#ffffff">PANASONIC 310L (ORIGINAL INHOUSE)</text>
        <text x="80" y="105" font-family="monospace" font-size="13" fill="#22c55e">BLACK VERTICAL TRIM &amp;mp; LED INDICATOR (PAGE 10)</text>
      </svg>
    `
  },
  {
    filenames: ['panasonic-odm1-ref.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#090d16"/>
        <g transform="translate(430, 80)">
          <!-- Champagne Brushed Gold Metallic Finish -->
          <rect width="340" height="640" rx="12" fill="#d4af37" stroke="#b45309" stroke-width="4"/>
          <rect x="30" y="210" width="280" height="14" rx="4" fill="#78350f"/>
          <line x1="0" y1="220" x2="340" y2="220" stroke="#78350f" stroke-width="2"/>
          <text x="170" y="50" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="18" fill="#451a03" text-anchor="middle">ODM 1 310L PLATFORM</text>
        </g>
        <rect x="60" y="50" width="560" height="65" rx="8" fill="#0f172a" stroke="#d4af37" stroke-width="2"/>
        <text x="80" y="85" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#fde047">PANASONIC ODM 1 COMPARISON</text>
        <text x="80" y="105" font-family="monospace" font-size="13" fill="#94a3b8">CHAMPAGNE GOLD BRUSHED METALLIC PLATFORM (PAGE 10)</text>
      </svg>
    `
  },
  {
    filenames: ['panasonic-odm2-ref.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#090d16"/>
        <g transform="translate(430, 80)">
          <!-- Titanium Grey Textured Finish -->
          <rect width="340" height="640" rx="12" fill="#475569" stroke="#334155" stroke-width="4"/>
          <rect x="40" y="210" width="260" height="16" rx="8" fill="#0f172a"/>
          <line x1="0" y1="220" x2="340" y2="220" stroke="#1e293b" stroke-width="2"/>
          <text x="170" y="50" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="18" fill="#e2e8f0" text-anchor="middle">ODM 2 310L PLATFORM</text>
        </g>
        <rect x="60" y="50" width="560" height="65" rx="8" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
        <text x="80" y="85" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#cbd5e1">PANASONIC ODM 2 COMPARISON</text>
        <text x="80" y="105" font-family="monospace" font-size="13" fill="#94a3b8">TITANIUM GREY WITH HORIZONTAL POCKET RECESS (PAGE 10)</text>
      </svg>
    `
  },
  {
    filenames: ['panasonic-comparison.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#090d16"/>
        <!-- Side by side of 3 fridges -->
        ${[
          { name: 'Panasonic 310L Ref', color: '#94a3b8', x: 140, type: 'Inhouse Original Lineup' },
          { name: 'ODM 1 310L Ref', color: '#d4af37', x: 480, type: 'Supplier Comparison 1' },
          { name: 'ODM 2 310L Ref', color: '#475569', x: 820, type: 'Supplier Comparison 2' }
        ].map(f => `
          <g transform="translate(${f.x}, 150)">
            <rect width="240" height="480" rx="8" fill="${f.color}" stroke="#1e293b" stroke-width="3"/>
            <line x1="0" y1="160" x2="240" y2="160" stroke="#0f172a" stroke-width="2"/>
            <text x="120" y="520" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="18" fill="#ffffff" text-anchor="middle">${f.name}</text>
            <text x="120" y="545" font-family="monospace" font-size="12" fill="#38bdf8" text-anchor="middle">${f.type}</text>
          </g>
        `).join('')}
        <text x="600" y="80" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="26" fill="#ffffff" text-anchor="middle">BENCHMARK COMPARISON: 310L REFRIGERATOR PLATFORMS</text>
      </svg>
    `
  },
  {
    filenames: ['miraj-rotimaster.png', 'rotimaster-machine.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#090d16"/>
        <line x1="50" y1="680" x2="1150" y2="680" stroke="#334155" stroke-width="2"/>

        <!-- Miraj RotiMaster Robotic Appliance in Signature Cobalt Blue &amp;mp; White -->
        <g transform="translate(180, 140)">
          <!-- Main Rounded Chassis -->
          <rect x="0" y="100" width="560" height="380" rx="60" fill="#0284c7" stroke="#38bdf8" stroke-width="4"/>
          <rect x="25" y="160" width="510" height="300" rx="30" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>

          <!-- 3 Top Ingredient Hoppers -->
          <!-- 1. Flour Hopper -->
          <g transform="translate(70, 0)">
            <rect width="110" height="110" rx="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/>
            <text x="55" y="-15" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="16" fill="#f59e0b" text-anchor="middle">Flour / आटा</text>
          </g>
          <!-- 2. Oil Dispenser -->
          <g transform="translate(230, -20)">
            <rect width="70" height="130" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
            <text x="35" y="-15" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="16" fill="#eab308" text-anchor="middle">Oil / तेल</text>
          </g>
          <!-- 3. Water Tank -->
          <g transform="translate(350, 0)">
            <rect width="110" height="110" rx="10" fill="#bae6fd" stroke="#0284c7" stroke-width="3"/>
            <text x="55" y="-15" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="16" fill="#38bdf8" text-anchor="middle">Water / पानी</text>
          </g>

          <!-- Front Control Panel with Red Start Button -->
          <rect x="260" y="190" width="160" height="80" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
          <text x="340" y="235" font-family="monospace" font-weight="bold" font-size="14" fill="#22c55e" text-anchor="middle">ROTIS: 04</text>
          
          <circle cx="210" cy="230" r="22" fill="#ef4444" stroke="#ffffff" stroke-width="3"/>
          <text x="210" y="275" font-family="sans-serif" font-weight="bold" font-size="12" fill="#ef4444" text-anchor="middle">Start चालू करें</text>

          <!-- Kneading &amp;mp; Extrusion Window -->
          <rect x="80" y="290" width="180" height="130" rx="12" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
          <circle cx="170" cy="355" r="35" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="8 6"/>
          <text x="170" y="360" font-family="monospace" font-size="11" fill="#38bdf8" text-anchor="middle">MIXING MOTOR</text>

          <!-- Output Conveyor Ramp -->
          <path d="M480,380 L620,470" stroke="#475569" stroke-width="14" stroke-linecap="round"/>
        </g>

        <!-- Plate of Warm Puffed Fresh Rotis -->
        <g transform="translate(780, 480)">
          <!-- Stainless Steel Plate -->
          <ellipse cx="140" cy="140" rx="150" ry="40" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/>
          <!-- Golden Brown Rotis Stack -->
          <ellipse cx="140" cy="130" rx="110" ry="28" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/>
          <ellipse cx="140" cy="115" rx="105" ry="26" fill="#ffedd5" stroke="#ea580c" stroke-width="2.5"/>
          <ellipse cx="140" cy="100" rx="100" ry="24" fill="#fef3c7" stroke="#ea580c" stroke-width="2.5"/>
          <!-- Brown spots -->
          <circle cx="110" cy="100" r="6" fill="#9a3412"/>
          <circle cx="160" cy="95" r="8" fill="#9a3412"/>
          <circle cx="140" cy="105" r="5" fill="#9a3412"/>
        </g>

        <!-- Famous Slogan in Green -->
        <rect x="680" y="360" width="460" height="60" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
        <text x="910" y="398" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="18" fill="#4ade80" text-anchor="middle">
          ENJOY THE FRESH, TASTY &amp;mp; HYGIENIC ROTI
        </text>

        <!-- Main Title Header -->
        <rect x="60" y="50" width="580" height="65" rx="8" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
        <text x="80" y="85" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#ffffff">MIRAJ ROTIMASTER AUTOMATIC ROTI MAKER</text>
        <text x="80" y="105" font-family="monospace" font-size="13" fill="#38bdf8">LABELED INPUT HOPPERS &amp;mp; FRESH ROTIS PLATE (PAGE 11)</text>
      </svg>
    `
  },
  {
    filenames: ['lg-dual-fridge.png', 'lg-dual-infographic.png'],
    width: 1200,
    height: 800,
    svg: `
      <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#090d16"/>
        
        <!-- LG Header with Official Magenta Branding -->
        <g transform="translate(60, 50)">
          <circle cx="35" cy="35" r="26" fill="#a21caf" stroke="#f472b6" stroke-width="2"/>
          <text x="35" y="44" font-family="sans-serif" font-weight="bold" font-size="20" fill="#ffffff" text-anchor="middle">LG</text>
          <text x="75" y="42" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="28" fill="#f43f5e">LG DUAL Fridge™</text>
          <text x="75" y="65" font-family="monospace" font-size="14" fill="#fda4af">PATENTED CONVERTIBLE REFRIGERATOR TECHNOLOGY (2016)</text>
        </g>

        <!-- Central "3 hr FASTER - Freezer to Fridge in 3Hrs" Badge -->
        <g transform="translate(600, 360)">
          <circle cx="0" cy="0" r="75" fill="#be123c" stroke="#f43f5e" stroke-width="4"/>
          <text x="0" y="-10" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="32" fill="#ffffff" text-anchor="middle">3 hr</text>
          <text x="0" y="20" font-family="monospace" font-weight="bold" font-size="18" fill="#fecdd3" text-anchor="middle">FASTER</text>
          <text x="0" y="115" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="20" fill="#fb7185" text-anchor="middle">Freezer to Fridge in 3Hrs</text>
          
          <!-- Large Arrow Crossing Left to Right -->
          <path d="M-150,0 L-95,0" stroke="#f43f5e" stroke-width="8" stroke-linecap="round"/>
          <path d="M95,0 L150,0" stroke="#f43f5e" stroke-width="8" stroke-linecap="round"/>
        </g>

        <!-- BEFORE Refrigerator (Left): Standard Mode -->
        <g transform="translate(180, 180)">
          <rect width="240" height="480" rx="10" fill="#831843" stroke="#f43f5e" stroke-width="3"/>
          <!-- Top compartment: ONLY FREEZER -->
          <rect x="15" y="15" width="210" height="150" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
          <text x="120" y="75" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="18" fill="#38bdf8" text-anchor="middle">❄️ ONLY FREEZER</text>
          <text x="120" y="105" font-family="monospace" font-size="12" fill="#bae6fd" text-anchor="middle">ICE &amp;mp; FROZEN FOOD</text>

          <!-- Lower Fridge -->
          <rect x="15" y="180" width="210" height="285" rx="6" fill="#0f172a" stroke="#cbd5e1" stroke-width="2"/>
          <text x="120" y="320" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="16" fill="#cbd5e1" text-anchor="middle">REGULAR FRIDGE</text>
          
          <text x="120" y="525" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="24" fill="#ffffff" text-anchor="middle">BEFORE</text>
        </g>

        <!-- AFTER Refrigerator (Right): Converted to 100% Fresh Food Fridge -->
        <g transform="translate(780, 180)">
          <rect width="240" height="480" rx="10" fill="#831843" stroke="#22c55e" stroke-width="3"/>
          <!-- Top compartment CONVERTED -->
          <rect x="15" y="15" width="210" height="150" rx="6" fill="#064e3b" stroke="#22c55e" stroke-width="2"/>
          <text x="120" y="75" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="18" fill="#4ade80" text-anchor="middle">🥗 FRIDGE (+100%)</text>
          <text x="120" y="105" font-family="monospace" font-size="12" fill="#bbf7d0" text-anchor="middle">EXPANDED FRESH CAPACITY</text>

          <!-- Lower Fridge -->
          <rect x="15" y="180" width="210" height="285" rx="6" fill="#0f172a" stroke="#cbd5e1" stroke-width="2"/>
          <text x="120" y="320" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="16" fill="#4ade80" text-anchor="middle">REGULAR FRIDGE</text>

          <text x="120" y="525" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="24" fill="#4ade80" text-anchor="middle">AFTER</text>
        </g>
      </svg>
    `
  }
];

async function run() {
  console.log('Generating high-resolution PNG assets for all portfolio slots...');
  for (const item of assets) {
    const svgBuffer = Buffer.from(item.svg.trim());
    const pngBuffer = await sharp(svgBuffer)
      .resize(item.width, item.height)
      .png({ compressionLevel: 8, quality: 90 })
      .toBuffer();

    for (const filename of item.filenames) {
      const target = path.join(outputDir, filename);
      fs.writeFileSync(target, pngBuffer);
      console.log('Created:', target);
    }
  }
  console.log('All image assets created successfully!');
}

run().catch(console.error);
