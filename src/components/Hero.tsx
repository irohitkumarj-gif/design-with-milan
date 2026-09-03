import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Mountain, Wrench, CheckCircle, UploadCloud, RotateCcw, Camera } from 'lucide-react';
import { TechnicalSchematic } from './TechnicalSchematic';
import {
  getImageSlotSync,
  saveImageSlot,
  removeImageSlot,
  subscribeToImageUpdates,
  processAndSaveFile,
  normalizeAssetUrl
} from '../utils/imageStore';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [customHeroImg, setCustomHeroImg] = useState<string | null>(() => {
    return getImageSlotSync('milan-hero-summit');
  });

  useEffect(() => {
    const unsubscribe = subscribeToImageUpdates((slotId, dataUrl) => {
      if (slotId === 'milan-hero-summit') {
        setCustomHeroImg(dataUrl);
        setImgError(false);
      }
    });

    const initial = getImageSlotSync('milan-hero-summit');
    if (initial) {
      setCustomHeroImg(initial);
      setImgError(false);
    }

    return unsubscribe;
  }, []);

  const processFile = async (file: File) => {
    if (file && file.type.startsWith('image/')) {
      try {
        await processAndSaveFile(file, 'milan-hero-summit');
        setImgError(false);
      } catch (err) {
        console.error('Failed to save summit photo', err);
      }
    }
  };

  const handleHeroUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleResetPhoto = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await removeImageSlot('milan-hero-summit');
    setCustomHeroImg(null);
  };

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
    }
  };

  const heroImageSrc = customHeroImg || normalizeAssetUrl('/images/milan-summit.png');

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background subtle technical grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      {/* Decorative gradient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status indicator pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-medium text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Mechanical & Product Design Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-sky-300">Milan Rajawat</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-slate-200 font-semibold leading-snug">
                Mechanical / Product Design Engineer turning ideas into real, manufactured products.
              </h2>
            </div>

            {/* Short intro line */}
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed font-sans">
              I specialize in product design, 3D modeling, prototyping, and taking products from concept to mass production.
            </p>

            {/* Key Highlights / Pillars */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 py-2 max-w-lg border-y border-slate-800/80">
              <div className="space-y-0.5">
                <span className="text-base sm:text-xl font-bold font-mono text-teal-400">7+</span>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-tight">Key Industry Projects</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-base sm:text-xl font-bold font-mono text-teal-400">Mass Prod.</span>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-tight">Concept to Factory Floor</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-base sm:text-xl font-bold font-mono text-teal-400">Patents</span>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-tight">Convertible Tech</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-teal-500/10 hover:shadow-teal-500/25 hover:-translate-y-0.5"
              >
                <Wrench className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm transition-all border border-slate-700 hover:border-slate-600 shadow-sm hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Right Hero Image Card (Milan's Introduction Photo) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer frame glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-teal-500/30 to-sky-500/20 rounded-3xl blur-md opacity-70" />

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative rounded-2xl overflow-hidden bg-slate-900 border transition-all duration-200 shadow-2xl ${
                  isDragging ? 'border-teal-400 ring-4 ring-teal-500/30 scale-[1.02]' : 'border-slate-800'
                }`}
              >
                {/* Header tag */}
                <div className="px-4 py-2.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-teal-400" />
                    <span className="text-xs font-mono font-medium text-slate-300">
                      Milan Rajawat • Mt. Bunagatake Summit (1214m)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    Shiga, Japan
                  </span>
                </div>

                {/* Profile / Intro Photo Display Area */}
                <div className="relative w-full aspect-[4/5] bg-slate-950 overflow-hidden flex items-center justify-center group">
                  {heroImageSrc && !imgError ? (
                    <img
                      src={heroImageSrc}
                      alt="Milan Rajawat standing on the mountain summit at Mt. Bunagatake with wooden trail marker 1214M, arms outstretched, blue sky"
                      onLoad={() => setImgError(false)}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full relative flex flex-col items-center justify-center">
                      <TechnicalSchematic id="milan-hero" caption="Milan Rajawat — Engineer, Hiker, Problem Solver" />
                      
                      {/* Prominent Quick Action Overlay */}
                      <label className="absolute inset-0 bg-slate-950/70 hover:bg-slate-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleHeroUpload}
                        />
                        <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border-2 border-dashed border-teal-400 flex items-center justify-center text-teal-300 mb-3 shadow-lg shadow-teal-500/10 group-hover:scale-110 transition-transform">
                          <Camera className="w-8 h-8 text-teal-400" />
                        </div>
                        <span className="text-sm font-bold text-white font-sans">
                          Load Milan's Real Summit Photo
                        </span>
                        <p className="text-xs text-slate-300 mt-1 max-w-xs leading-relaxed">
                          Click here or drag & drop <strong>Milan's introduction photo.png</strong> to display the authentic summit photo.
                        </p>
                        <span className="mt-3 px-3 py-1 rounded-full bg-teal-500 text-slate-950 text-xs font-bold font-mono">
                          Select Photo
                        </span>
                      </label>
                    </div>
                  )}

                  {/* Corner engineering overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 text-left pointer-events-none">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">Milan Rajawat</p>
                        <p className="text-[11px] text-teal-400 font-mono">Mechanical / Product Design Engineer</p>
                      </div>
                      <span className="p-1 rounded-full bg-teal-500/20 text-teal-300">
                        <CheckCircle className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
