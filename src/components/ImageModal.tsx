import React, { useEffect } from 'react';
import { ProjectImage } from '../types';
import { TechnicalSchematic } from './TechnicalSchematic';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { getImageSlotSync, normalizeAssetUrl } from '../utils/imageStore';

interface ImageModalProps {
  image: ProjectImage | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  const [zoom, setZoom] = React.useState<number>(1);
  const [imgFailed, setImgFailed] = React.useState<boolean>(false);

  useEffect(() => {
    setZoom(1);
    setImgFailed(false);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, onClose]);

  if (!image) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => setZoom(1);

  // Check if custom image was uploaded
  const customSrc = normalizeAssetUrl(getImageSlotSync(image.id) || image.url);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <h3 className="text-sm font-semibold text-slate-100 truncate max-w-md font-sans">
              {image.alt}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button
                onClick={handleZoomOut}
                className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-700 transition"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-2 text-slate-300">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-700 transition"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleReset}
                className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-700 transition ml-1"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 border border-slate-700/80 transition"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image viewport */}
        <div className="relative flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-slate-950 min-h-[350px]">
          <div
            style={{ transform: `scale(${zoom})`, transition: 'transform 0.15s ease-out' }}
            className="flex items-center justify-center max-w-full"
          >
            {!imgFailed ? (
              <img
                src={customSrc}
                alt={image.alt}
                onError={() => setImgFailed(true)}
                className="max-h-[65vh] w-auto object-contain rounded shadow-lg"
              />
            ) : (
              <div className="w-[600px] max-w-full">
                <TechnicalSchematic id={image.id} type={image.type} caption={image.caption} />
              </div>
            )}
          </div>
        </div>

        {/* Footer caption */}
        {image.caption && (
          <div className="px-6 py-3.5 bg-slate-900 border-t border-slate-800">
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              <span className="font-semibold text-teal-400 mr-2">Caption:</span>
              {image.caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
