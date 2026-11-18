/**
 * The BirStock launch film. The web copy in /public/video is a compressed,
 * fast-start encode; the original master lives in /video-source (not deployed).
 */
export const launchVideo = {
  title: "BirStock Launch Film - Billing software your shop owns",
  description:
    "Meet BirStock: offline POS, GST billing and inventory software for Indian shops. Scan, bill and print in seconds, keep billing without internet, back up to your own Google Drive, and pay once to own it forever.",
  src: "/video/birstock-launch-video.mp4",
  poster: "/video/birstock-launch-poster.webp",
  /** JPG thumbnail for search engines (VideoObject + video sitemap). */
  thumbnail: "/video/birstock-launch-thumbnail.jpg",
  width: 1920,
  height: 1080,
  durationSeconds: 60,
  /** ISO 8601 duration for schema.org. */
  duration: "PT1M",
  uploadDate: "2026-11-18",
} as const;
