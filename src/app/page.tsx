import { Hero } from "@/components/home/hero";
import { IndustryStrip } from "@/components/home/industry-strip";
import { StatsBar } from "@/components/home/stats-bar";
import { ValuePillars } from "@/components/home/value-pillars";
import { WorkflowShowcase } from "@/components/home/workflow-showcase";
import { BeyondBilling } from "@/components/home/beyond-billing";
import { FeaturesGrid } from "@/components/home/features-grid";
import { PricingTeaser } from "@/components/home/pricing-teaser";
import { Comparison } from "@/components/home/comparison";
import { FaqPreview } from "@/components/home/faq-preview";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { flatFaqs } from "@/data/faqs";
import { faqSchema, graph, pageMetadata, webPageSchema } from "@/lib/seo";

const title = `${siteConfig.name} - Offline POS, GST Billing & Inventory Software`;

export const metadata = pageMetadata({
  title,
  description: siteConfig.description,
  path: "/",
  og: "home",
  absoluteTitle: true,
});

export default function Home() {
  const jsonLd = graph(
    webPageSchema({ name: title, description: siteConfig.description, path: "/", og: "home" }),
    faqSchema(flatFaqs.slice(0, 6))
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <IndustryStrip />
      <StatsBar />
      <ValuePillars />
      <WorkflowShowcase />
      <BeyondBilling />
      <FeaturesGrid />
      <PricingTeaser />
      <Comparison />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
