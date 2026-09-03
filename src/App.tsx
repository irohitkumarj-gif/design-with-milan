import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';
import { projectsData } from './data/projectsData';
import { ProjectImage } from './types';
import { Layers, Sparkles, Filter } from 'lucide-react';
import { initializeImageStore } from './utils/imageStore';

export function App() {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    initializeImageStore();
  }, []);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'commercial') {
      return project.id === 'foodcycler-fc75' || project.id === 'miraj-rotimaster' || project.id === 'amd-teamatic';
    }
    if (activeCategory === 'tooling') {
      return project.id === 'pem-ball-turning';
    }
    if (activeCategory === 'refrigeration') {
      return project.id === 'panasonic-refrigerator-lineup' || project.id === 'panasonic-other-projects' || project.id === 'lg-dual-fridge';
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-slate-950 font-sans antialiased">
      {/* Top sticky navigation bar */}
      <Navbar />

      {/* Main one-page portfolio content */}
      <main>
        {/* Hero Section with Milan's intro photo */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills & Software Toolkit */}
        <Skills />

        {/* Projects Section - Primary Focus */}
        <section id="projects" className="py-24 bg-slate-950 relative border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-3">
                  <Layers className="w-3.5 h-3.5" />
                  Engineering Portfolio & Case Studies
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
                  Featured Projects
                </h2>
                <p className="text-slate-400 text-base mt-2 font-sans leading-relaxed">
                  Real manufactured hardware, consumer appliances, high-precision lathe tooling, and patented convertible thermal architectures.
                </p>
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 self-start md:self-end">
                <span className="text-[11px] font-mono text-slate-400 px-2 flex items-center gap-1">
                  <Filter className="w-3 h-3 text-teal-400" />
                  Filter:
                </span>
                {[
                  { id: 'all', label: 'All (7)' },
                  { id: 'commercial', label: 'Appliances & Consumer' },
                  { id: 'tooling', label: 'Tooling & Prototyping' },
                  { id: 'refrigeration', label: 'Refrigeration Systems' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeCategory === tab.id
                        ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Notice / Badge about exact data fidelity */}
            <div className="mb-6 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                <span>
                  Showing <strong>{filteredProjects.length}</strong> of <strong>7</strong> production design engineering projects. Click any image to open full CAD zoom view.
                </span>
              </div>
              <span className="font-mono text-[11px] text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 hidden sm:inline-block">
                Concept → Mass Production
              </span>
            </div>

            {/* Projects List Grid */}
            <div className="space-y-12">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenImage={(img) => setSelectedImage(img)}
                  defaultExpanded={true}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Screen Image Lightbox Viewer */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}

export default App;
