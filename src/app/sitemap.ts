import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { features } from "@/data/features";
import { industries } from "@/data/industries";
import { landingPages } from "@/data/landing-pages";
import { absoluteUrl, ogImagePath } from "@/lib/seo";

export const dynamic = "force-static";

// Bump when content changes meaningfully.
const LAST_UPDATED = new Date("2026-10-25");

type Entry = { path: string; og: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" };

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: "/", og: "home", priority: 1, changeFrequency: "weekly" },
    { path: "/pricing", og: "pricing", priority: 0.95, changeFrequency: "weekly" },
    { path: "/features", og: "features", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries", og: "industries", priority: 0.85, changeFrequency: "monthly" },
    { path: "/download", og: "download", priority: 0.8, changeFrequency: "monthly" },
    ...Object.values(landingPages).map((p) => ({
      path: `/${p.slug}`,
      og: p.og,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
    ...features.map((f) => ({
      path: `/features/${f.slug}`,
      og: `feature-${f.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...industries.map((ind) => ({
      path: `/industries/${ind.slug}`,
      og: `industry-${ind.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    { path: "/faq", og: "faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", og: "about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", og: "contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy", og: "privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", og: "terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/refund-policy", og: "refund-policy", priority: 0.3, changeFrequency: "yearly" },
  ];

  return entries.map((e) => ({
    url: absoluteUrl(e.path),
    lastModified: LAST_UPDATED,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
    images: [`${siteConfig.url}${ogImagePath(e.og)}`],
  }));
}
