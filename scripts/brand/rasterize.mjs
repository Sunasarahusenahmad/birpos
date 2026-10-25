// Rasterizes SVG masters to PNG/JPG/WebP with sharp.
// Usage: node scripts/brand/rasterize.mjs <jobs.json>
// jobs.json: [{ "src": "a.svg", "out": "a.png", "width": 512, "height"?: 512, "format"?: "png"|"jpg"|"webp", "flatten"?: "#ffffff" }]
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const jobs = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));

for (const job of jobs) {
  const svg = fs.readFileSync(job.src);
  const format = job.format ?? path.extname(job.out).slice(1).replace("jpeg", "jpg");
  // Render at a high density first so small outputs stay crisp after downscaling.
  let img = sharp(svg, { density: job.density ?? 288 }).resize(job.width, job.height ?? null, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
    kernel: "lanczos3",
  });
  if (job.flatten || format === "jpg") img = img.flatten({ background: job.flatten ?? "#ffffff" });
  if (format === "png") img = img.png({ compressionLevel: 9, adaptiveFiltering: true });
  if (format === "jpg") img = img.jpeg({ quality: 90, mozjpeg: true });
  if (format === "webp") img = img.webp({ quality: 90 });
  fs.mkdirSync(path.dirname(job.out), { recursive: true });
  await img.toFile(job.out);
}
console.log(`rasterized ${jobs.length} files`);
