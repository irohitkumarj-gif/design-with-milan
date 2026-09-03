// IndexedDB & LocalStorage Image Persistence and Auto-Mapping Utility
// Maps user-extracted PDF images to their corresponding engineering projects

export interface ImageSlotMeta {
  slotId: string;
  projectId: string;
  expectedFileName: string;
  pdfPage: number;
  label: string;
  description: string;
  defaultFallbackUrl: string;
}

export const IMAGE_SLOT_REGISTRY: Record<string, ImageSlotMeta> = {
  'milan-hero-summit': {
    slotId: 'milan-hero-summit',
    projectId: 'hero',
    expectedFileName: "Milan's introduction photo.png",
    pdfPage: 1,
    label: "Milan's Summit Intro Photo",
    description: "Summit of Mt. Bunagatake (1214m) with wooden marker and outstretched arms",
    defaultFallbackUrl: '/images/milan-summit.png',
  },
  'fc-studio': {
    slotId: 'fc-studio',
    projectId: 'foodcycler-fc75',
    expectedFileName: 'image_04_page_3.png',
    pdfPage: 3,
    label: 'Foodcycler FC-75 Studio Hero',
    description: 'Commercial stainless steel unit with dual green-handled processing bins',
    defaultFallbackUrl: '/images/foodcycler-studio.png',
  },
  'fc-factory-row': {
    slotId: 'fc-factory-row',
    projectId: 'foodcycler-fc75',
    expectedFileName: 'image_05_page_4.png',
    pdfPage: 4,
    label: 'FC-75 Factory Assembly Line',
    description: 'Row of Foodcycler units on mobile carts inside CMP manufacturing plant',
    defaultFallbackUrl: '/images/foodcycler-factory-row.png',
  },
  'fc-factory-single': {
    slotId: 'fc-factory-single',
    projectId: 'foodcycler-fc75',
    expectedFileName: 'image_06_page_4.png',
    pdfPage: 4,
    label: 'FC-75 Factory QC Single Unit',
    description: 'Single stainless steel Foodcycler unit under QC test on white platform',
    defaultFallbackUrl: '/images/foodcycler-factory-single.png',
  },
  'pem-exploded-cad': {
    slotId: 'pem-exploded-cad',
    projectId: 'pem-ball-turning',
    expectedFileName: 'image_07_page_5.png',
    pdfPage: 5,
    label: 'PEM Ball Turner Exploded CAD & BOM',
    description: 'Technical exploded assembly drawing with Fanshawe College BOM table',
    defaultFallbackUrl: '/images/pem-exploded-cad.png',
  },
  'pem-vise-wrapped': {
    slotId: 'pem-vise-wrapped',
    projectId: 'pem-ball-turning',
    expectedFileName: 'image_08_page_6.png',
    pdfPage: 6,
    label: 'PEM Ball Turner Lathe Setup',
    description: 'Machined tool base mounted on workshop engine lathe slide before use',
    defaultFallbackUrl: '/images/pem-vise-wrapped.png',
  },
  'pem-brass-machined': {
    slotId: 'pem-brass-machined',
    projectId: 'pem-ball-turning',
    expectedFileName: 'image_09_page_6.png',
    pdfPage: 6,
    label: 'PEM Ball Turner Machined Brass Ball',
    description: 'Finished attachment operating on lathe with polished brass ball turned',
    defaultFallbackUrl: '/images/pem-brass-machined.png',
  },
  'teamatic-white': {
    slotId: 'teamatic-white',
    projectId: 'amd-teamatic',
    expectedFileName: 'image_10_page_7.png',
    pdfPage: 7,
    label: 'TeaMatic Automatic Tea Maker (White)',
    description: 'White & black 3D CAD render with carafe container and side power switch',
    defaultFallbackUrl: '/images/teamatic-white.png',
  },
  'teamatic-teal': {
    slotId: 'teamatic-teal',
    projectId: 'amd-teamatic',
    expectedFileName: 'image_11_page_7.png',
    pdfPage: 7,
    label: 'TeaMatic Automatic Tea Maker (Teal)',
    description: 'Teal/turquoise vibrant colorway 3D CAD concept render',
    defaultFallbackUrl: '/images/teamatic-teal.png',
  },
  'teamatic-cutaway': {
    slotId: 'teamatic-cutaway',
    projectId: 'amd-teamatic',
    expectedFileName: 'image_12_page_8.png',
    pdfPage: 8,
    label: 'TeaMatic Internal Cutaway Diagram',
    description: 'Engineering cutaway showing pump, peristaltic dosing, heater, and valve',
    defaultFallbackUrl: '/images/teamatic-cutaway.png',
  },
  'panasonic-ref-open': {
    slotId: 'panasonic-ref-open',
    projectId: 'panasonic-refrigerator-lineup',
    expectedFileName: 'image_13_page_9.png',
    pdfPage: 9,
    label: 'Panasonic 280L Refrigerator Open',
    description: 'Open view showing Jumbo Fresh vegetable crisper, shelves, and door balconies',
    defaultFallbackUrl: '/images/panasonic-refrigerator-open.png',
  },
  'panasonic-ref-closed': {
    slotId: 'panasonic-ref-closed',
    projectId: 'panasonic-refrigerator-lineup',
    expectedFileName: 'image_14_page_9.png',
    pdfPage: 9,
    label: 'Panasonic 280L Refrigerator Closed',
    description: 'Closed front view with 10-Year Warranty badge and BEE Star Energy rating',
    defaultFallbackUrl: '/images/panasonic-refrigerator-closed.png',
  },
  'panasonic-odm1-ref': {
    slotId: 'panasonic-odm1-ref',
    projectId: 'panasonic-other-projects',
    expectedFileName: 'image_15_page_10.png',
    pdfPage: 10,
    label: 'Panasonic ODM 1 310L Ref',
    description: 'Competitor/ODM comparison 1 in champagne brushed metallic finish',
    defaultFallbackUrl: '/images/panasonic-odm1-ref.png',
  },
  'panasonic-odm2-ref': {
    slotId: 'panasonic-odm2-ref',
    projectId: 'panasonic-other-projects',
    expectedFileName: 'image_16_page_10.png',
    pdfPage: 10,
    label: 'Panasonic ODM 2 310L Ref',
    description: 'Competitor/ODM comparison 2 in titanium grey finish with horizontal recess',
    defaultFallbackUrl: '/images/panasonic-odm2-ref.png',
  },
  'panasonic-310l-ref': {
    slotId: 'panasonic-310l-ref',
    projectId: 'panasonic-other-projects',
    expectedFileName: 'image_17_page_10.png',
    pdfPage: 10,
    label: 'Panasonic 310L Ref (Original Inhouse)',
    description: 'Panasonic 310L Refrigerator with black vertical handle trim & LED indicator',
    defaultFallbackUrl: '/images/panasonic-310l-ref.png',
  },
  'rotimaster-machine': {
    slotId: 'rotimaster-machine',
    projectId: 'miraj-rotimaster',
    expectedFileName: 'image_18_page_11.png',
    pdfPage: 11,
    label: 'Miraj RotiMaster Machine & Fresh Rotis',
    description: 'Blue & white automatic roti maker with labeled inputs and fresh rotis plate',
    defaultFallbackUrl: '/images/miraj-rotimaster.png',
  },
  'lg-dual-infographic': {
    slotId: 'lg-dual-infographic',
    projectId: 'lg-dual-fridge',
    expectedFileName: 'image_19_page_12.png',
    pdfPage: 12,
    label: 'LG DUAL Fridge™ 3Hr Conversion',
    description: 'Official infographic showing Freezer to Fridge in 3Hrs with before & after',
    defaultFallbackUrl: '/images/lg-dual-fridge.png',
  },
};

// Auto-detector: Matches dropped/uploaded file names to their exact project slot
export function matchFileNameToSlot(fileName: string): string | null {
  const clean = fileName.toLowerCase().trim();

  // Page 12: LG Dual Fridge (image_19_page_12.png)
  if (clean.includes('image_19') || clean.includes('page_12') || clean.includes('page 12') || clean.includes('lg-dual') || clean.includes('dual-fridge') || clean.includes('lg_dual') || clean.includes('dual fridge') || (clean.includes('19') && clean.includes('lg'))) {
    return 'lg-dual-infographic';
  }
  // Page 11: Miraj RotiMaster (image_18_page_11.png)
  if (clean.includes('image_18') || clean.includes('page_11') || clean.includes('page 11') || clean.includes('roti') || clean.includes('miraj') || clean.includes('rotimaster') || clean.includes('roti_maker') || (clean.includes('18') && !clean.includes('2018'))) {
    return 'rotimaster-machine';
  }
  // Page 10: Panasonic 310L Ref (image_17_page_10.png)
  if (clean.includes('image_17') || (clean.includes('page_10') && clean.includes('17')) || clean.includes('310l-ref') || clean.includes('panasonic_310') || clean.includes('17_page')) {
    return 'panasonic-310l-ref';
  }
  // Page 10: ODM 2 (image_16_page_10.png)
  if (clean.includes('image_16') || (clean.includes('page_10') && clean.includes('16')) || clean.includes('odm_2') || clean.includes('odm2') || clean.includes('titanium') || clean.includes('16_page')) {
    return 'panasonic-odm2-ref';
  }
  // Page 10: ODM 1 (image_15_page_10.png)
  if (clean.includes('image_15') || (clean.includes('page_10') && clean.includes('15')) || clean.includes('odm_1') || clean.includes('odm1') || clean.includes('champagne') || clean.includes('15_page')) {
    return 'panasonic-odm1-ref';
  }
  // Page 9: Panasonic 280L Closed (image_14_page_9.png)
  if (clean.includes('image_14') || (clean.includes('page_9') && (clean.includes('14') || clean.includes('closed'))) || clean.includes('ref-closed') || clean.includes('refrigerator-closed') || clean.includes('14_page')) {
    return 'panasonic-ref-closed';
  }
  // Page 9: Panasonic 280L Open (image_13_page_9.png)
  if (clean.includes('image_13') || (clean.includes('page_9') && (clean.includes('13') || clean.includes('open'))) || clean.includes('ref-open') || clean.includes('jumbo') || clean.includes('crisper') || clean.includes('13_page')) {
    return 'panasonic-ref-open';
  }
  // Page 8: TeaMatic Cutaway (image_12_page_8.png)
  if (clean.includes('image_12') || clean.includes('page_8') || clean.includes('page 8') || clean.includes('cutaway') || clean.includes('cross-section') || clean.includes('internal') || clean.includes('12_page')) {
    return 'teamatic-cutaway';
  }
  // Page 7: TeaMatic Teal (image_11_page_7.png)
  if (clean.includes('image_11') || (clean.includes('page_7') && clean.includes('11')) || clean.includes('teal') || clean.includes('turquoise') || clean.includes('blue_tea') || clean.includes('11_page')) {
    return 'teamatic-teal';
  }
  // Page 7: TeaMatic White (image_10_page_7.png)
  if (clean.includes('image_10') || (clean.includes('page_7') && clean.includes('10')) || clean.includes('teamatic') || clean.includes('white_tea') || clean.includes('tea_maker') || clean.includes('10_page')) {
    return 'teamatic-white';
  }
  // Page 6: PEM Machined Brass Ball (image_09_page_6.png)
  if (clean.includes('image_09') || clean.includes('image_9') || (clean.includes('page_6') && clean.includes('9')) || clean.includes('brass') || clean.includes('machined_ball') || clean.includes('ball_turned') || clean.includes('09_page') || clean.includes('9_page')) {
    return 'pem-brass-machined';
  }
  // Page 6: PEM Vise Wrapped Lathe Setup (image_08_page_6.png)
  if (clean.includes('image_08') || clean.includes('image_8') || (clean.includes('page_6') && clean.includes('8')) || clean.includes('wrapped') || clean.includes('vise') || clean.includes('lathe_setup') || clean.includes('lathe_mount') || clean.includes('08_page') || clean.includes('8_page')) {
    return 'pem-vise-wrapped';
  }
  // Page 5: PEM Exploded CAD Assembly & BOM (image_07_page_5.png)
  if (clean.includes('image_07') || clean.includes('image_7') || clean.includes('page_5') || clean.includes('page 5') || clean.includes('exploded') || clean.includes('fanshawe') || clean.includes('bom') || clean.includes('ball_turner_cad') || clean.includes('07_page') || clean.includes('7_page')) {
    return 'pem-exploded-cad';
  }
  // Page 4: FC-75 QC Single Unit (image_06_page_4.png)
  if (clean.includes('image_06') || clean.includes('image_6') || (clean.includes('page_4') && clean.includes('6')) || clean.includes('single') || clean.includes('qc') || clean.includes('testing') || clean.includes('fc75_single') || clean.includes('06_page') || clean.includes('6_page')) {
    return 'fc-factory-single';
  }
  // Page 4: FC-75 Factory Row Assembly Line (image_05_page_4.png)
  if (clean.includes('image_05') || clean.includes('image_5') || (clean.includes('page_4') && clean.includes('5')) || clean.includes('assembly') || clean.includes('factory') || clean.includes('cmp') || clean.includes('fc75_row') || clean.includes('05_page') || clean.includes('5_page')) {
    return 'fc-factory-row';
  }
  // Page 3: FC-75 Studio Hero (image_04_page_3.png)
  if (clean.includes('image_04') || clean.includes('image_4') || clean.includes('page_3') || clean.includes('page 3') || clean.includes('foodcycler') || clean.includes('studio') || clean.includes('commercial') || clean.includes('fc75') || clean.includes('04_page') || clean.includes('4_page')) {
    return 'fc-studio';
  }
  // Page 1: Milan Hero Summit Photo (Milan's introduction photo.png)
  if (clean.includes('milan') || clean.includes('introduction') || clean.includes('summit') || clean.includes('bunagatake') || clean.includes('ibuki') || clean.includes('profile') || clean.includes('mountain') || clean.includes('intro_photo')) {
    return 'milan-hero-summit';
  }

  return null;
}

// Safe Storage Helpers to prevent any iframe or quota exceptions
export function safeGetStorage(key: string): string | null {
  try {
    if (typeof window !== 'undefined' && 'localStorage' in window && window.localStorage) {
      return window.localStorage.getItem(key);
    }
  } catch (_) {}
  return null;
}

export function safeSetStorage(key: string, val: string): void {
  try {
    if (typeof window !== 'undefined' && 'localStorage' in window && window.localStorage) {
      window.localStorage.setItem(key, val);
    }
  } catch (_) {}
}

export function safeRemoveStorage(key: string): void {
  try {
    if (typeof window !== 'undefined' && 'localStorage' in window && window.localStorage) {
      window.localStorage.removeItem(key);
    }
  } catch (_) {}
}

// In-memory runtime cache for synchronous instant rendering
const memoryCache: Map<string, string> = new Map();

// Immediately hydrate memoryCache from LocalStorage at module load time
// Immediate synchronous hydration on script execution
// so component useState initializers have instant access on page refresh
if (typeof window !== 'undefined') {
  try {
    Object.keys(IMAGE_SLOT_REGISTRY).forEach((slotId) => {
      const meta = IMAGE_SLOT_REGISTRY[slotId];
      const local = safeGetStorage(`custom_img_${slotId}`);
      if (local) {
        memoryCache.set(slotId, local);
      } else if (meta?.defaultFallbackUrl) {
        memoryCache.set(slotId, meta.defaultFallbackUrl);
      }
    });
    const heroImg = safeGetStorage('custom_img_milan_profile');
    if (heroImg) {
      memoryCache.set('milan-hero-summit', heroImg);
    }
  } catch (_) {}
}

// Event listeners for reactive state updates
type ImageListener = (slotId: string, dataUrl: string | null) => void;
const listeners: Set<ImageListener> = new Set();

export function subscribeToImageUpdates(listener: ImageListener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function notifySubscribers(slotId: string, dataUrl: string | null) {
  listeners.forEach((fn) => {
    try {
      fn(slotId, dataUrl);
    } catch (e) {
      console.error(e);
    }
  });
}

// Client-side smart image compression (scales high-res mobile/PDF exports to ~180KB)
// Ensures all 15 images comfortably fit inside both LocalStorage and IndexedDB
export function compressImage(file: File, maxDim = 1600, quality = 0.86): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const rawDataUrl = e.target?.result as string;
      const img = new Image();
      img.onload = () => {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(rawDataUrl);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        // Prefer webp, fallback to jpeg
        let result = canvas.toDataURL('image/webp', quality);
        if (!result.startsWith('data:image/webp')) {
          result = canvas.toDataURL('image/jpeg', quality);
        }
        resolve(result);
      };
      img.onerror = () => {
        // Fallback to uncompressed if image decode fails
        resolve(rawDataUrl);
      };
      img.src = rawDataUrl;
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

// IndexedDB implementation for reliable multi-megabyte image storage
const DB_NAME = 'milan_portfolio_assets_v1';
const DB_STORE = 'images';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE, { keyPath: 'slotId' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Preload all cached images on startup with complete subscriber notification
export async function initializeImageStore(): Promise<Record<string, string>> {
  const loaded: Record<string, string> = {};

  // 1. First read from safe storage (synchronous & instant on reload)
  try {
    Object.keys(IMAGE_SLOT_REGISTRY).forEach((slotId) => {
      const local = safeGetStorage(`custom_img_${slotId}`);
      if (local) {
        memoryCache.set(slotId, local);
        loaded[slotId] = local;
      }
    });
    const heroImg = safeGetStorage('custom_img_milan_profile');
    if (heroImg && !loaded['milan-hero-summit']) {
      memoryCache.set('milan-hero-summit', heroImg);
      loaded['milan-hero-summit'] = heroImg;
    }
  } catch (e) {
    console.warn('Safe storage preload warning', e);
  }

  // 2. Next read from IndexedDB and NOTIFY subscribers for any refreshed data
  try {
    const db = await openDB();
    const tx = db.transaction(DB_STORE, 'readonly');
    const store = tx.objectStore(DB_STORE);
    const req = store.getAll();

    await new Promise<void>((resolve, reject) => {
      req.onsuccess = () => {
        const records = req.result as { slotId: string; dataUrl: string }[];
        records.forEach((rec) => {
          if (rec.slotId in IMAGE_SLOT_REGISTRY && rec.dataUrl) {
            memoryCache.set(rec.slotId, rec.dataUrl);
            loaded[rec.slotId] = rec.dataUrl;

            // Ensure safe storage also has it
            safeSetStorage(`custom_img_${rec.slotId}`, rec.dataUrl);

            // CRITICAL: Notify UI subscribers so images render immediately after refresh
            notifySubscribers(rec.slotId, rec.dataUrl);
          }
        });
        resolve();
      };
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    console.warn('IndexedDB preload error', e);
  }

  // 3. Check server-saved images from /api/list-images
  try {
    const res = await fetch('/api/list-images');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.files)) {
        data.files.forEach((filename: string) => {
          const slotId = filename.replace(/\.(png|jpg|jpeg|webp)$/i, '');
          if (slotId in IMAGE_SLOT_REGISTRY && !memoryCache.has(slotId)) {
            const serverUrl = `/images/${filename}?t=${Date.now()}`;
            memoryCache.set(slotId, serverUrl);
            loaded[slotId] = serverUrl;
            notifySubscribers(slotId, serverUrl);
          }
        });
      }
    }
  } catch (_) {
    // Server endpoint optional (e.g. static production)
  }

  return loaded;
}

// Save image to memory, IndexedDB, localStorage, and server disk
export async function saveImageSlot(slotId: string, dataUrl: string): Promise<boolean> {
  // Update in-memory cache and notify immediately for responsive UI
  memoryCache.set(slotId, dataUrl);
  notifySubscribers(slotId, dataUrl);

  // 1. Save to safe storage for instant synchronous reloads
  safeSetStorage(`custom_img_${slotId}`, dataUrl);
  if (slotId === 'milan-hero-summit') {
    safeSetStorage('custom_img_milan_profile', dataUrl);
  }

  // 2. Save to IndexedDB with guaranteed transaction completion
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(DB_STORE, 'readwrite');
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(new Error('IndexedDB transaction aborted'));
      const store = tx.objectStore(DB_STORE);
      store.put({ slotId, dataUrl, timestamp: Date.now() });
    });
  } catch (e) {
    console.warn('IndexedDB save error', e);
  }

  // 3. Persist to server disk via /api/save-image
  try {
    fetch('/api/save-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slotId, dataUrl }),
    }).catch(() => {});
  } catch (_) {}

  return true;
}

// Normalize asset paths so images work on GitHub Pages subpaths (/repo-name/) as well as root domains
export function normalizeAssetUrl(url: string | undefined | null): string {
  if (!url) return '';
  if (url.startsWith('data:') || url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:')) {
    return url;
  }
  const clean = url.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL || './';
  if (base.endsWith('/')) {
    return `${base}${clean}`;
  }
  return `${base}/${clean}`;
}

// Get image synchronously from memory cache or default fallback URL
export function getImageSlotSync(slotId: string): string | null {
  if (memoryCache.has(slotId)) {
    const cached = memoryCache.get(slotId);
    return cached ? normalizeAssetUrl(cached) : null;
  }
  const meta = IMAGE_SLOT_REGISTRY[slotId];
  if (meta?.defaultFallbackUrl) {
    return normalizeAssetUrl(meta.defaultFallbackUrl);
  }
  return null;
}

// Remove image across all tiers
export async function removeImageSlot(slotId: string): Promise<void> {
  memoryCache.delete(slotId);
  notifySubscribers(slotId, null);

  // 1. Remove from safe storage
  safeRemoveStorage(`custom_img_${slotId}`);
  if (slotId === 'milan-hero-summit') {
    safeRemoveStorage('custom_img_milan_profile');
  }

  // 2. Remove from IndexedDB
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(DB_STORE, 'readwrite');
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.objectStore(DB_STORE).delete(slotId);
    });
  } catch (_) {}

  // 3. Remove from server disk
  try {
    fetch('/api/remove-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slotId }),
    }).catch(() => {});
  } catch (_) {}
}

// Process a File object with automatic compression and save to matched slot
export async function processAndSaveFile(
  file: File,
  explicitSlotId?: string
): Promise<{ slotId: string; matched: boolean }> {
  if (!file || !file.type.startsWith('image/')) {
    throw new Error('File is not an image');
  }

  const slotId = explicitSlotId || matchFileNameToSlot(file.name);
  if (!slotId) {
    throw new Error(`Could not automatically match file "${file.name}" to a known project slot.`);
  }

  // Compress to ensure lightweight storage (~150-250KB) and prevent quota drops
  const compressedDataUrl = await compressImage(file);
  await saveImageSlot(slotId, compressedDataUrl);
  return { slotId, matched: true };
}
