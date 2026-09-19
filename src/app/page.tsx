import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { IndustryStrip } from "@/components/home/industry-strip";
import { StatsBar } from "@/components/home/stats-bar";
import { ValuePillars } from "@/components/home/value-pillars";
import { WorkflowShowcase } from "@/components/home/workflow-showcase";
import { FeaturesGrid } from "@/components/home/features-grid";
import { Comparison } from "@/components/home/comparison";
import { FaqPreview } from "@/components/home/faq-preview";
import { FinalCta } from "@/components/home/final-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Offline POS, Inventory & GST Billing Software`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <IndustryStrip />
      <StatsBar />
      <ValuePillars />
      <WorkflowShowcase />
      <FeaturesGrid />
      <Comparison />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
