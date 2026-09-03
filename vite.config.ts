import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function imagePersistencePlugin(): Plugin {
  return {
    name: 'image-persistence',
    configureServer(server) {
      // Direct static image serving middleware to bypass DISABLE_HMR static cache issues
      server.middlewares.use('/images', (req, res, next) => {
        const cleanUrl = (req.url || '').split('?')[0].replace(/^\//, '');
        const filePath = path.resolve(process.cwd(), 'public/images', cleanUrl);
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath).toLowerCase();
          const mimeTypes: Record<string, string> = {
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.webp': 'image/webp',
            '.svg': 'image/svg+xml',
          };
          res.setHeader('Content-Type', mimeTypes[ext] || 'image/png');
          res.setHeader('Cache-Control', 'no-cache');
          fs.createReadStream(filePath).pipe(res);
          return;
        }
        next();
      });

      server.middlewares.use('/api/save-image', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }
        let body = '';
        req.on('data', (chunk: Buffer) => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const { slotId, dataUrl } = JSON.parse(body);
            if (!slotId || !dataUrl) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Missing slotId or dataUrl' }));
              return;
            }
            const imagesDir = path.resolve(process.cwd(), 'public/images');
            if (!fs.existsSync(imagesDir)) {
              fs.mkdirSync(imagesDir, { recursive: true });
            }
            const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            if (matches && matches.length === 3) {
              const buffer = Buffer.from(matches[2], 'base64');
              const filePath = path.join(imagesDir, `${slotId}.png`);
              fs.writeFileSync(filePath, buffer);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, url: `/images/${slotId}.png` }));
            } else {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid dataUrl format' }));
            }
          } catch (e: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: e?.message || 'Server error' }));
          }
        });
      });

      server.middlewares.use('/api/list-images', (_req, res) => {
        try {
          const imagesDir = path.resolve(process.cwd(), 'public/images');
          if (!fs.existsSync(imagesDir)) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ files: [] }));
            return;
          }
          const files = fs.readdirSync(imagesDir);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ files }));
        } catch (e: any) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: e?.message }));
        }
      });

      server.middlewares.use('/api/remove-image', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }
        let body = '';
        req.on('data', (chunk: Buffer) => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const { slotId } = JSON.parse(body);
            const filePath = path.resolve(process.cwd(), 'public/images', `${slotId}.png`);
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath);
            }
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (e: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: e?.message }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), imagePersistencePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
