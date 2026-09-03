import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'foodcycler-fc75',
    title: 'Foodcycler FC-75 (Commercial Foodwaste Processor)',
    subtitle: 'High-capacity commercial organic waste reduction and dehydration appliance',
    status: 'MP (Mass Production) started Nov 2025',
    organization: 'Food Cycle Science Corp, Ottawa',
    link: 'https://foodcycler.com/pages/foodcycler-commercial',
    activities: [
      'Led mechanical design activities (design reviews, release) across team',
      'Owned multiple modules (drawer, heating, display, drainage)',
      'Design of parts and assemblies',
      'Design of jigs & fixtures',
      '3D modeling & technical drawings',
      'Thermal and structural analysis',
      'Prototype development & validation',
      'Supplier & factory coordination',
      'Project documentation: BOM, Service BOM, ECN, Configuration control'
    ],
    software: ['Solidworks', 'Solidworks Simulation', 'PDM', 'MS Office'],
    skills: ['Project management', 'GD&T', 'FMEA', 'DFx', 'DFM'],
    featuredMetric: 'Commercial Mass Production (Nov 2025)',
    images: [
      {
        id: 'fc-studio',
        url: '/images/foodcycler-studio.png',
        alt: 'Studio product shot of Foodcycler FC-75 commercial unit with two dark green-handled bins',
        caption: 'Studio product shot of the stainless steel double-compartment unit with two dark green-handled bins beside it',
        isHero: true,
        type: 'product'
      },
      {
        id: 'fc-factory-single',
        url: '/images/foodcycler-factory-single.png',
        alt: 'Single silver Foodcycler FC-75 unit on white platform in factory',
        caption: 'Factory photo — single silver unit on a white platform inside a bright industrial facility',
        type: 'factory'
      },
      {
        id: 'fc-factory-row',
        url: '/images/foodcycler-factory-row.png',
        alt: 'Row of Foodcycler FC-75 units on wheeled carts inside CMP factory',
        caption: 'Mass Production at CMP Factory in China',
        type: 'factory'
      }
    ]
  },
  {
    id: 'pem-ball-turning',
    title: 'PEM Capstone Project — Ball Turning Attachment for Lathe Machine',
    subtitle: 'Precision spherical radius turning mechanism for manual engine lathes',
    status: 'Completed April 23',
    organization: 'Fanshawe College',
    activities: [
      'Concept design',
      'Product specification',
      '3D modeling',
      '2D detailing',
      'Raw material & standard part procurement',
      'Machining on lathe and milling',
      'Development documentation — Scope, BOM, Gantt chart, status reports'
    ],
    software: ['Solidworks', 'MS Office'],
    skills: ['Creative thinking', 'Attention to detail', 'Problem solving'],
    featuredMetric: 'Custom Precision Tooling & Physical Fabrication',
    images: [
      {
        id: 'pem-exploded-cad',
        url: '/images/pem-exploded-cad.png',
        alt: 'Technical exploded CAD assembly drawing with BOM parts list table and 3D render',
        caption: 'Technical exploded CAD assembly drawing with parts list table (BASE_PLATE, UPPER_PLATE, BASE_MOUNT, etc.) and 3D rendered tool with gold ball handle',
        isHero: true,
        type: 'cad'
      },
      {
        id: 'pem-vise-wrapped',
        url: '/images/pem-vise-wrapped.png',
        alt: 'Tool clamped in machine vise wrapped in plastic before use',
        caption: 'Real workshop photo — the tool clamped in a machine vise, wrapped in plastic (before use)',
        type: 'workshop'
      },
      {
        id: 'pem-brass-machined',
        url: '/images/pem-brass-machined.png',
        alt: 'Finished tool with machined brass ball mounted clamped in lathe vise',
        caption: 'Actual images of the final product with brass ball machined using the tool',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'amd-teamatic',
    title: 'AMD Capstone Project — Automatic Tea Maker ("TeaMatic")',
    subtitle: 'Automated hot-beverage extraction appliance with thermal control and timed ingredient dispensing',
    status: 'Completed April 22',
    organization: 'Fanshawe College',
    activities: [
      'Idea generation',
      'Market research',
      'Competitor product analysis',
      'Concept design',
      'Specification design',
      '3D modeling & rendering',
      'Basic thermal analysis',
      'Process flow design',
      'Operating sequence',
      'Design reviews'
    ],
    software: ['Unigraphics NX', 'Solidworks', 'MS Office'],
    skills: ['Creative thinking', 'Teamwork', 'Product development'],
    featuredMetric: 'Thermal Logic & Sequential Valve Automation',
    hasProcessTimeline: true,
    images: [
      {
        id: 'teamatic-white',
        url: '/images/teamatic-white.png',
        alt: 'White/black automatic tea maker 3D render side view',
        caption: 'White/black coffee-maker-style 3D render (side view) — main product image',
        isHero: true,
        type: 'product'
      },
      {
        id: 'teamatic-teal',
        url: '/images/teamatic-teal.png',
        alt: 'Teal/turquoise colored variant 3D render',
        caption: 'Teal/turquoise colored variant of the same 3D render — alternate color concept',
        type: 'product'
      },
      {
        id: 'teamatic-cutaway',
        url: '/images/teamatic-cutaway.png',
        alt: 'Internal cutaway diagram with labeled components',
        caption: 'Process Flow & Logic Sequence',
        type: 'diagram'
      }
    ]
  },
  {
    id: 'panasonic-refrigerator-lineup',
    title: '280L/250L New Refrigerator Lineup Development (B-Grade Project)',
    subtitle: 'Next-generation domestic top-mount refrigerator architecture and lightweighting',
    status: 'Launched Jan 2021',
    organization: 'Panasonic India Pvt. Ltd.',
    activities: [
      'Industrial design',
      'Redesigning cabinet and doors',
      'Reduced weight of GPPS parts by 40%',
      'New door handle design',
      'New egg tray design with handle',
      '3D modeling & detailing',
      'Insulation analysis',
      'Mold development',
      'Mold and production trials',
      'Project documentation: FMEA, Design reviews, Project presentation to management'
    ],
    software: ['Unigraphics NX', 'MS Office'],
    skills: ['Innovative approach', 'Project management', 'Teamwork', 'New product development'],
    featuredMetric: '40% GPPS Weight Reduction & Tooling Optimization',
    images: [
      {
        id: 'panasonic-ref-closed',
        url: '/images/panasonic-refrigerator-closed.png',
        alt: 'Front view of silver/steel Panasonic top-freezer refrigerator',
        caption: 'Front view of the silver/steel Panasonic top-freezer refrigerator (closed door, with certification badges/stickers visible)',
        isHero: true,
        type: 'product'
      },
      {
        id: 'panasonic-ref-open',
        url: '/images/panasonic-refrigerator-open.png',
        alt: 'Panasonic refrigerator with door open showing shelves and Jumbo Fresh crisper',
        caption: 'Same refrigerator with door open, showing internal shelves, door bins, and the blue "Jumbo Fresh" drawer at the bottom',
        type: 'product'
      }
    ]
  },
  {
    id: 'panasonic-other-projects',
    title: 'Other Projects at Panasonic',
    subtitle: 'Strategic value engineering, quality failure rate mitigation, and local component sourcing',
    status: 'Jan 2021 & Ongoing Engineering Initiatives',
    organization: 'Panasonic India Pvt. Ltd.',
    activities: [
      'New lineup development for B-to-B business: New door design, New internal part design',
      'Packing redesign to improve market failure rate: Reduced market failure rate from 3% to 0.9% yearly',
      'Cost up for improvement 120 INR (2 CAD) per unit; Total savings of approx. 30M INR (500K CAD) per year',
      'Cost Improvement Projects: Changed copper pipe assembly method from soldering to lockring',
      'Cost Improvement Projects: Changed door holder from metal to plastic by redesign',
      'Localization Projects: Localization of compressor (Panasonic Thailand to local)',
      'Localization Projects: Localization of gasket (PVC door sealing)',
      'Localization Projects: Localization of drain tube by redesigning (3D blow molding to 2D blow molding)'
    ],
    software: ['Unigraphics NX', 'MS Office'],
    skills: ['Value Engineering', 'Design for Assembly (DFA)', 'Localization', 'Cost Optimization'],
    featuredMetric: '30M INR (~$500K CAD) Annual Cost Savings',
    notes: [
      'Market failure rate reduced dramatically from 3% down to 0.9% yearly',
      '120 INR unit improvement investment yielding ~30,000,000 INR annual net savings',
      'Major manufacturing conversion from copper tube soldering to precision mechanical lockring joints'
    ],
    images: [
      {
        id: 'panasonic-310l-ref',
        url: '/images/panasonic-310l-ref.png',
        alt: 'Panasonic 310L Refrigerator with black vertical handle trim & LED indicator',
        caption: 'Panasonic 310L Ref (Original Inhouse Lineup) — closed front view with black sensor trim and green LED (image_17_page_10.png)',
        isHero: true,
        type: 'product'
      },
      {
        id: 'panasonic-odm1-ref',
        url: '/images/panasonic-odm1-ref.png',
        alt: 'ODM 1 310L Refrigerator in champagne brushed metal finish',
        caption: 'ODM 1 310L Ref (External Supplier Comparison 1) — champagne gold finish with horizontal recess (image_15_page_10.png)',
        type: 'comparison'
      },
      {
        id: 'panasonic-odm2-ref',
        url: '/images/panasonic-odm2-ref.png',
        alt: 'ODM 2 310L Refrigerator in textured titanium grey finish',
        caption: 'ODM 2 310L Ref (External Supplier Comparison 2) — textured titanium grey finish (image_16_page_10.png)',
        type: 'comparison'
      },
      {
        id: 'panasonic-comparison',
        url: '/images/panasonic-comparison.png',
        alt: 'Three refrigerators side by side comparison: Panasonic 310L Ref, ODM 1 310L Ref, ODM 2 310L Ref',
        caption: 'Benchmark Comparison: Inhouse Panasonic 310L Ref vs ODM 1 & ODM 2 Competitor Platforms (Page 10)',
        type: 'comparison'
      }
    ]
  },
  {
    id: 'miraj-rotimaster',
    title: 'Miraj RotiMaster',
    subtitle: 'Automated flatbread cooking robot with synchronized multi-ingredient dosing and electromechanical dough kneading',
    status: 'Launched in 2019',
    organization: 'Miraj Group India',
    link: 'http://www.mirajrotimaster.com/',
    activities: [
      'Design of parts and mechanism',
      'Design of actuator mechanism working on DC geared motors',
      'Design of peristaltic pump for water and oil dispensing',
      'Research for ideas',
      '3D modeling & detailing',
      'Thermal analysis',
      'Mold and die development',
      'Involved in machine sequencing',
      'Project documentation: BOM, Design reviews'
    ],
    software: ['Solidworks', 'MS Office'],
    skills: ['Creative thinking', 'Analytical approach', 'New product development'],
    featuredMetric: 'Multi-Axis Motor Actuation & Fluid Dispensing',
    images: [
      {
        id: 'rotimaster-machine',
        url: '/images/miraj-rotimaster.png',
        alt: 'Blue and white roti-making machine with labeled parts and fresh rotis plate',
        caption: 'The blue and white roti-making machine image with labeled parts (Flour/आटा, Oil/तेल, Water/पानी, Start Button/Function Key चालू करें) and a plate of fresh rotis, captioned "Enjoy the fresh, tasty & hygienic roti"',
        isHero: true,
        type: 'product'
      }
    ]
  },
  {
    id: 'lg-dual-fridge',
    title: 'Projects at LG Electronics',
    subtitle: 'Dual Fridge Refrigerator patented convertible refrigeration systems and rapid thermal conversion',
    status: 'Launched in 2016',
    organization: 'LG Electronics',
    link: 'https://youtu.be/l1_Cjd8a7pk',
    activities: [
      'Dual Fridge Refrigerators: New convertible technology development',
      'Patented under LG Electronics',
      'Launched in 2016',
      '3D modeling and drafting',
      'Preparing simplified parts for CFD',
      'Prototype development with 3D printer',
      'Involved in design reviews',
      'Reference video: https://youtu.be/l1_Cjd8a7pk',
      'Other Projects: Constant temperature in R room (fridge section)',
      'Other Projects: Flexi freezer (DC single door fridge)'
    ],
    software: ['Unigraphics NX7.5'],
    skills: ['CAD modeling', 'New product development', 'DRBFM'],
    featuredMetric: 'Patented Convertible Cooling Technology (3Hr Fast Conversion)',
    notes: [
      'Patented dual refrigeration convertible cycle architecture',
      'CFD geometric simplification for internal chamber aerodynamic and thermal flow analysis',
      'Functional rapid prototyping with industrial additive manufacturing / 3D printing'
    ],
    images: [
      {
        id: 'lg-dual-infographic',
        url: '/images/lg-dual-fridge.png',
        alt: 'LG DUAL Fridge infographic showing Freezer to Fridge in 3Hrs with before and after open views',
        caption: 'The LG-branded infographic showing "Freezer to Fridge in 3Hrs" with two open refrigerators side by side labeled "BEFORE" and "AFTER", with LG logo and "LG DUAL Fridge™" branding',
        isHero: true,
        type: 'diagram'
      }
    ]
  }
];
