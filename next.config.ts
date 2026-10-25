import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit /about/index.html instead of /about.html so every route loads when
  // opened directly, refreshed, or reached from search results on a static host.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
