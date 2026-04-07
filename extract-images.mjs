import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { createCanvas } from 'canvas';

// Map each service to a PDF page number (1-based) that best represents it
// Page 1: Tyre Recycle Unit (Reverse Engineering)
// Page 4: Plant Layout + De-Beading (Layout Design)
// Page 6: Concept Design (Conceptual Design)
// Page 7: 2D to 3D Conversion
// Page 12: Water Tank 2D to 3D

// We'll use pdfjsLib to render pages
const pdfPath = 'C:/Users/DELL/Downloads/THOMSON AMIRTHARAJ DESIGN PORTFOLIO 2026.pdf';
const outputDir = './public/services';

mkdirSync(outputDir, { recursive: true });

const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');

const data = new Uint8Array(readFileSync(pdfPath));
const pdf = await pdfjsLib.getDocument({ data }).promise;

// service id -> page number mapping
const pages = {
  'conceptual-design': 6,
  'reverse-engineering': 2,
  'layout-design': 4,
  '2d-to-3d-conversion': 12,
  'fea-analysis': 11,
};

for (const [serviceId, pageNum] of Object.entries(pages)) {
  const page = await pdf.getPage(pageNum);
  const viewport = page.getViewport({ scale: 1.5 });

  const canvas = createCanvas(viewport.width, viewport.height);
  const ctx = canvas.getContext('2d');

  await page.render({ canvasContext: ctx, viewport }).promise;

  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.88 });
  const outPath = `${outputDir}/${serviceId}.jpg`;
  writeFileSync(outPath, buffer);
  console.log(`Saved: ${outPath} (${Math.round(buffer.length / 1024)}KB)`);
}

console.log('Done!');
