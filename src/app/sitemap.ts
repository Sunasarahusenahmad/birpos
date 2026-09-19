import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { features } from "@/data/features";
import { industries } from "@/data/industries";

export const dynamic = "force-static";

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
  const industryRoutes = industries.map((ind) => `/industries/${ind.slug}`);

  const all = [...staticRoutes, ...featureRoutes, ...industryRoutes];

  return all.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === "" ? 1 : path.startsWith("/industries/") ? 0.9 : path.startsWith("/features/") ? 0.8 : 0.6,
  }));
}
