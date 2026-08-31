import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { features } from "@/data/features";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/features",
    "/pricing",
    "/faq",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/refund-policy",
  ];

  const featureRoutes = features.map((f) => `/features/${f.slug}`);

  const all = [...staticRoutes, ...featureRoutes];

  return all.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/features/") ? 0.8 : 0.6,
  }));
}
