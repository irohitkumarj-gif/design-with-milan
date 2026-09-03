import React, { useState, useEffect, useRef } from 'react';
import {
  UploadCloud,
  CheckCircle2,
  FolderSync,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  Layers,
  FileCheck
} from 'lucide-react';
import {
  IMAGE_SLOT_REGISTRY,
  getImageSlotSync,
  subscribeToImageUpdates,
  processAndSaveFile,
  removeImageSlot
} from '../utils/imageStore';

export const AssetSyncBar: React.FC = () => {
  const [syncedMap, setSyncedMap] = useState<Record<string, boolean>>({});
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [uploadFeedback, setUploadFeedback] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const slotKeys = Object.keys(IMAGE_SLOT_REGISTRY);

  // Sync state with imageStore
  const refreshSyncedState = () => {
    const updated: Record<string, boolean> = {};
    slotKeys.forEach((key) => {
      updated[key] = !!getImageSlotSync(key);
    });
    setSyncedMap(updated);
  };

  useEffect(() => {
    refreshSyncedState();
    const unsubscribe = subscribeToImageUpdates(() => {
      refreshSyncedState();
    });
    return unsubscribe;
  }, []);

  const totalSlots = slotKeys.length;
  const syncedCount = Object.values(syncedMap).filter(Boolean).length;

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    let matchedCount = 0;
    const errors: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        const res = await processAndSaveFile(file);
        if (res.matched) {
          matchedCount++;
        }
      } catch (e: any) {
        errors.push(`${file.name}: ${e.message || 'Unknown error'}`);
      }
    }

    refreshSyncedState();

    if (matchedCount > 0) {
      setUploadFeedback(`Successfully mapped and synced ${matchedCount} real image(s)!`);
      setTimeout(() => setUploadFeedback(null), 4000);
    } else if (errors.length > 0) {
      setUploadFeedback(`Could not match files. Please verify filenames match PDF names (e.g. image_19_page_12.png).`);
      setTimeout(() => setUploadFeedback(null), 6000);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const [confirmClear, setConfirmClear] = useState(false);

  const handleClearAll = async () => {
    if (!confirmClear) {
      setConfirmClear(true);
      setTimeout(() => setConfirmClear(false), 4000);
      return;
    }
    setConfirmClear(false);
    for (const key of slotKeys) {
      await removeImageSlot(key);
    }
    refreshSyncedState();
    setUploadFeedback('All real images have been reset to technical vector schematics.');
    setTimeout(() => setUploadFeedback(null), 4000);
  };

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden shadow-xl mb-12 ${
        isDragging
          ? 'border-teal-400 bg-teal-950/40 ring-4 ring-teal-500/30'
          : syncedCount === totalSlots
          ? 'border-emerald-500/40 bg-slate-900/90'
          : 'border-teal-500/30 bg-slate-900/90'
      }`}
    >
      {/* Header Bar */}
      <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
            <FolderSync className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white font-sans flex items-center gap-2">
                Authentic PDF Project Images
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  {syncedCount} / {totalSlots} Synced
                </span>
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              All portfolio project images are permanently loaded and synced across sessions. Drop or select images anytime to update.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-teal-500 hover:bg-teal-400 text-slate-950 font-sans transition-all shadow-md active:scale-95"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Update / Replace Images</span>
          </button>

          {syncedCount > 0 && (
            <button
              onClick={handleClearAll}
              title={confirmClear ? "Click again to confirm reset" : "Reset all real images"}
              className={`p-2 rounded-xl text-xs font-mono transition-colors flex items-center gap-1.5 border ${
                confirmClear
                  ? 'bg-rose-900/70 text-rose-200 border-rose-500/60 ring-2 ring-rose-500/40'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-300 border-slate-700'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {confirmClear && <span className="text-[11px]">Confirm?</span>}
            </button>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors flex items-center gap-1 text-xs"
            aria-label="Toggle mapping breakdown"
          >
            <span className="hidden sm:inline font-mono text-[11px]">
              {isExpanded ? 'Hide List' : 'View Mapping'}
            </span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Upload Feedback Toast */}
      {uploadFeedback && (
        <div className="px-5 py-2.5 bg-teal-950/80 border-t border-b border-teal-500/30 text-teal-200 text-xs font-mono flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
          <span>{uploadFeedback}</span>
        </div>
      )}

      {/* Expanded Mapping Table */}
      {isExpanded && (
        <div className="p-5 border-t border-slate-800/80 bg-slate-950/70 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              Automated Filename to Project Matrix:
            </span>
            <span>Files match instantly by filename pattern</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
            {slotKeys.map((slotId) => {
              const meta = IMAGE_SLOT_REGISTRY[slotId];
              const isSynced = syncedMap[slotId];

              return (
                <div
                  key={slotId}
                  className={`p-3 rounded-xl border text-xs transition-all flex items-start justify-between gap-3 ${
                    isSynced
                      ? 'bg-slate-900/90 border-emerald-500/40 text-slate-200'
                      : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-teal-300 font-semibold shrink-0">
                        P.{meta.pdfPage}
                      </span>
                      <p className="font-medium text-slate-200 truncate font-sans text-xs">
                        {meta.label}
                      </p>
                    </div>
                    <p className="font-mono text-[11px] text-teal-400/90 truncate">
                      {meta.expectedFileName}
                    </p>
                  </div>

                  <div className="shrink-0 pt-0.5 flex items-center gap-1.5">
                    {isSynced ? (
                      <>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3" /> Synced
                        </span>
                        <label
                          title="Change or upload new photo for this slot"
                          className="cursor-pointer p-1 rounded text-slate-400 hover:text-teal-300 hover:bg-slate-800 border border-slate-700/60 transition-colors"
                        >
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                await processAndSaveFile(file, slotId);
                                refreshSyncedState();
                              }
                            }}
                          />
                          <UploadCloud className="w-3 h-3 text-teal-400" />
                        </label>
                      </>
                    ) : (
                      <label className="cursor-pointer inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 hover:text-teal-300 bg-slate-800/80 hover:bg-slate-800 px-2 py-0.5 rounded border border-slate-700 transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              await processAndSaveFile(file, slotId);
                              refreshSyncedState();
                            }
                          }}
                        />
                        <FileCheck className="w-3 h-3" /> Load
                      </label>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
