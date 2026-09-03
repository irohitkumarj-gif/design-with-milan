import React, { useState, useEffect } from 'react';
import { ProjectImage } from '../types';
import { TechnicalSchematic } from './TechnicalSchematic';
import { Maximize2, UploadCloud, Check, RotateCcw, Image as ImageIcon } from 'lucide-react';
import {
  getImageSlotSync,
  saveImageSlot,
  removeImageSlot,
  subscribeToImageUpdates,
  IMAGE_SLOT_REGISTRY,
  processAndSaveFile
} from '../utils/imageStore';

interface ProjectImageDisplayProps {
  image: ProjectImage;
  onExpand?: (image: ProjectImage) => void;
  className?: string;
  allowReplace?: boolean;
}

export const ProjectImageDisplay: React.FC<ProjectImageDisplayProps> = ({
  image,
  onExpand,
  className = '',
  allowReplace = false,
}) => {
  const [imgError, setImgError] = useState<boolean>(false);
  const [customSrc, setCustomSrc] = useState<string | null>(() => {
    return getImageSlotSync(image.id);
  });
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Subscribe to updates from global imageStore
  useEffect(() => {
    const unsubscribe = subscribeToImageUpdates((slotId, dataUrl) => {
      if (slotId === image.id) {
        setCustomSrc(dataUrl);
        setImgError(false);
      }
    });

    const initial = getImageSlotSync(image.id);
    if (initial) {
      setCustomSrc(initial);
      setImgError(false);
    }

    return unsubscribe;
  }, [image.id]);

  const slotMeta = IMAGE_SLOT_REGISTRY[image.id];

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        await processAndSaveFile(file, image.id);
        setUploadSuccess(true);
        setImgError(false);
        setTimeout(() => setUploadSuccess(false), 2500);
      } catch (err) {
        console.error('File upload failed', err);
      }
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

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      try {
        await processAndSaveFile(file, image.id);
        setUploadSuccess(true);
        setImgError(false);
        setTimeout(() => setUploadSuccess(false), 2500);
      } catch (err) {
        console.error('Drop error', err);
      }
    }
  };

  const handleReset = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await removeImageSlot(image.id);
    setCustomSrc(null);
    setImgError(false);
  };

  const activeSrc = customSrc || slotMeta?.defaultFallbackUrl || image.url;
  const isRealPhotoActive = !!activeSrc && !imgError;

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative group rounded-xl overflow-hidden bg-slate-900/90 border transition-all duration-300 ${
        isDragging
          ? 'border-teal-400 ring-2 ring-teal-500/40 scale-[1.01]'
          : 'border-slate-800'
      } ${className}`}
    >
      {/* Top badges & controls bar */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 pointer-events-auto">
          <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase font-semibold rounded bg-slate-900/85 backdrop-blur-md text-teal-300 border border-teal-500/30 shadow-sm">
            {image.type || 'Engineering asset'}
          </span>
          {isRealPhotoActive && (
            <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider font-semibold rounded bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1 shadow-sm">
              <Check className="w-3 h-3 text-emerald-400" /> Real Photo
            </span>
          )}
          {slotMeta?.expectedFileName && !isRealPhotoActive && (
            <span className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-mono rounded bg-slate-950/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
              {slotMeta.expectedFileName}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 pointer-events-auto">
          {isRealPhotoActive && allowReplace && (
            <button
              onClick={handleReset}
              title="Reset to vector schematic"
              className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-rose-300 border border-slate-700/60 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          {allowReplace && (
            <label
              title={`Upload or drop ${slotMeta?.expectedFileName || 'real photo'}`}
              className="cursor-pointer p-1.5 rounded-lg bg-slate-900/85 hover:bg-teal-500/20 text-slate-300 hover:text-teal-300 border border-slate-700/60 hover:border-teal-500/40 backdrop-blur-md transition-colors text-xs flex items-center gap-1"
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
              {uploadSuccess ? (
                <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                  <Check className="w-3 h-3" /> Synced
                </span>
              ) : (
                <>
                  <UploadCloud className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-[10px] font-mono hidden md:inline">
                    {isRealPhotoActive ? 'Change' : 'Load Photo'}
                  </span>
                </>
              )}
            </label>
          )}

          {onExpand && (
            <button
              onClick={() => onExpand({ ...image, url: activeSrc })}
              title="View full resolution"
              className="p-1.5 rounded-lg bg-slate-900/85 hover:bg-teal-500/20 text-slate-300 hover:text-teal-300 border border-slate-700/60 hover:border-teal-500/40 backdrop-blur-md transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Media display viewport */}
      <div className="w-full h-full min-h-[280px] flex items-center justify-center bg-slate-950 relative">
        {isRealPhotoActive ? (
          <img
            src={activeSrc}
            alt={image.alt}
            onLoad={() => setImgError(false)}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain max-h-[380px] transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full relative">
            <TechnicalSchematic id={image.id} type={image.type} caption={image.caption} />
            
            {/* Quick action bar at bottom of schematic if not yet loaded */}
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-300">
                <ImageIcon className="w-3.5 h-3.5 text-teal-400" />
                {slotMeta ? slotMeta.expectedFileName : 'Original PDF photo'}
              </span>
              <label className="cursor-pointer text-teal-300 hover:text-teal-200 font-medium font-sans flex items-center gap-1">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                Load Real Photo
              </label>
            </div>
          </div>
        )}

        {/* Dragging visual overlay */}
        {isDragging && (
          <div className="absolute inset-0 bg-slate-950/90 border-2 border-dashed border-teal-400 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-6 text-center">
            <UploadCloud className="w-12 h-12 text-teal-400 animate-bounce mb-2" />
            <p className="text-sm font-bold text-white">Drop to Load Real Image</p>
            <p className="text-xs text-teal-300 font-mono mt-1">
              Slot: {slotMeta?.expectedFileName || image.id}
            </p>
          </div>
        )}
      </div>

      {/* Caption footer */}
      {image.caption && (
        <div className="p-3 bg-slate-900/95 border-t border-slate-800/80">
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {image.caption}
          </p>
        </div>
      )}
    </div>
  );
};
