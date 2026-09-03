export interface SkillItem {
  name: string;
  category: 'software' | 'engineering' | 'analytical';
  highlight?: string;
  iconType: 'cad' | 'simulation' | 'pdm' | 'office' | 'gdt' | 'fmea' | 'dfm' | 'thermal' | 'prototype' | 'creative' | 'npd' | 'team';
}

export const softwareSkills: SkillItem[] = [
  { name: 'Solidworks', category: 'software', highlight: 'Parametric 3D Modeling & Assemblies', iconType: 'cad' },
  { name: 'Solidworks Simulation', category: 'software', highlight: 'FEA, Structural & Thermal Analysis', iconType: 'simulation' },
  { name: 'PDM', category: 'software', highlight: 'Product Data Management & Revision Control', iconType: 'pdm' },
  { name: 'Unigraphics NX (NX7.5)', category: 'software', highlight: 'Complex Surfacing & Mold Design', iconType: 'cad' },
  { name: 'MS Office', category: 'software', highlight: 'Engineering Documentation, BOM, Gantt', iconType: 'office' }
];

export const coreEngineeringSkills: SkillItem[] = [
  { name: 'Project Management', category: 'engineering', highlight: 'Cross-functional Team Leadership', iconType: 'team' },
  { name: 'GD&T', category: 'engineering', highlight: 'ASME Y14.5 Geometric Dimensioning & Tolerancing', iconType: 'gdt' },
  { name: 'FMEA', category: 'analytical', highlight: 'Failure Mode and Effects Analysis', iconType: 'fmea' },
  { name: 'DFx', category: 'engineering', highlight: 'Design for Excellence (Cost, Assembly, Quality)', iconType: 'dfm' },
  { name: 'DFM', category: 'engineering', highlight: 'Design for Manufacturing & Tooling Optimization', iconType: 'dfm' },
  { name: 'DRBFM', category: 'analytical', highlight: 'Design Review Based on Failure Mode', iconType: 'fmea' },
  { name: 'CAD Modeling', category: 'software', highlight: 'Detailed 2D/3D Parts & Jigs Design', iconType: 'cad' },
  { name: 'Thermal & Structural Analysis', category: 'analytical', highlight: 'Heat Dissipation & Stress Verification', iconType: 'thermal' },
  { name: 'Prototype Development', category: 'engineering', highlight: '3D Printing, Machining & Validation', iconType: 'prototype' },
  { name: 'Creative Thinking', category: 'engineering', highlight: 'Innovative Mechanism Architecture', iconType: 'creative' },
  { name: 'New Product Development', category: 'engineering', highlight: 'Concept to Mass Production (NPD)', iconType: 'npd' },
  { name: 'Teamwork', category: 'engineering', highlight: 'Global Supplier & Factory Coordination', iconType: 'team' }
];
