import React, { useState } from 'react';
import { Project, ProjectImage } from '../types';
import { ProjectImageDisplay } from './ProjectImageDisplay';
import { ProcessTimeline } from './ProcessTimeline';
import {
  Building2,
  Calendar,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  Wrench,
  Sparkles,
  Layers,
  Award
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenImage: (image: ProjectImage) => void;
  defaultExpanded?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenImage,
  defaultExpanded = true,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  const currentImage = project.images[activeImageIndex] || project.images[0];

  return (
    <article
      id={project.id}
      className="bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl"
    >
      {/* Card Header */}
      <div className="p-6 sm:p-7 border-b border-slate-800/80 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-850">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {/* Organization badge */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 font-medium text-slate-200">
                <Building2 className="w-3.5 h-3.5 text-teal-400" />
                {project.organization}
              </span>

              {/* Status badge */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono font-medium">
                <Calendar className="w-3.5 h-3.5" />
                {project.status}
              </span>

              {/* Metric or highlight */}
              {project.featuredMetric && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-medium text-[11px]">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  {project.featuredMetric}
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans tracking-tight pt-1">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Quick links & toggle */}
          <div className="flex items-center gap-2 self-start">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-teal-500/15 hover:bg-teal-500/25 text-teal-300 border border-teal-500/30 transition-colors"
              >
                <span>Reference</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
              aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 sm:p-7 space-y-7">
        {/* Visual Gallery Layout */}
        <div className="space-y-3">
          {/* Main Visual Frame */}
          <div className="w-full">
            <ProjectImageDisplay
              image={currentImage}
              onExpand={onOpenImage}
              className="w-full"
            />
          </div>

          {/* Multi-image Thumbnails (if > 1 image) */}
          {project.images.length > 1 && (
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-1 scrollbar-thin">
              <span className="text-[11px] font-mono text-slate-400 whitespace-nowrap pl-1 pr-1 flex items-center gap-1">
                <Layers className="w-3 h-3 text-teal-400" />
                Views ({project.images.length}):
              </span>
              {project.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all text-left truncate max-w-[200px] border ${
                    idx === activeImageIndex
                      ? 'bg-teal-500/20 border-teal-500 text-teal-200 font-semibold'
                      : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {img.type ? `[${img.type.toUpperCase()}] ` : ''}
                  {idx + 1}. {img.alt.slice(0, 20)}...
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Optional Process Timeline (e.g. for TeaMatic) */}
        {project.hasProcessTimeline && <ProcessTimeline />}

        {/* Expandable Engineering Details */}
        {isExpanded && (
          <div className="pt-2 border-t border-slate-800 space-y-6">
            {/* Key Engineering Activities */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="w-4 h-4 text-teal-400" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-mono">
                  Key Engineering Activities & Responsibilities
                </h4>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {project.activities.map((act, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/70 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Special Project Engineering Notes / Metrics (e.g. Panasonic cost savings) */}
            {project.notes && project.notes.length > 0 && (
              <div className="p-4 rounded-xl bg-gradient-to-br from-teal-950/20 to-slate-950 border border-teal-500/30">
                <div className="flex items-center gap-2 mb-2 text-teal-300 font-mono text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  KEY VALUE ENGINEERING & METRIC HIGHLIGHTS
                </div>
                <div className="space-y-1.5">
                  {project.notes.map((note, idx) => (
                    <p key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-teal-400 font-bold">›</span>
                      <span>{note}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Software & Core Skills Tags Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {/* Software Used */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 mb-2.5">
                  <Cpu className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                    CAD & Software Tools
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.software.map((sw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-sky-300 text-xs font-mono"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills Applied */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 mb-2.5">
                  <Wrench className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                    Engineering Competencies
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.skills.map((sk, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
