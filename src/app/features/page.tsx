import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { FeatureIcon } from "@/components/ui/feature-icon";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { FinalCta } from "@/components/home/final-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { features } from "@/data/features";
import { absoluteUrl, graph, pageMetadata, webPageSchema } from "@/lib/seo";

const title = "Features - POS, GST Billing, Inventory, Khata & Mobile App";
const description =
  "Explore every BirStock module: keyboard & touch POS, inventory with Excel import, customer Khata, suppliers, GST invoices, returns, expenses, reports, backup, App Lock, financial year and the BirStock Mobile App.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/features",
  og: "features",
  keywords: ["billing software features", "pos software features", "inventory and billing software", "gst billing features"],
});

export default function FeaturesPage() {
  const jsonLd = graph(
    webPageSchema({ name: title, description, path: "/features", og: "features", type: "CollectionPage" }),
    {
      "@type": "ItemList",
      name: "BirStock features",
      itemListElement: features.map((f, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: f.name,
        url: absoluteUrl(`/features/${f.slug}`),
      })),
    }
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: "Features", path: "/features" }]} />
      <PageHero
        className="pt-8 sm:pt-12"
        eyebrow="Product"
        title="One app. Every module your counter needs."
        description="From the first barcode scan to your scheduled Google Drive backup - plus billing from your phone with the BirStock Mobile App. Explore how each part of BirStock works."
      />

      <section className="pb-20 sm:pb-28">
        <Container>
          <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <StaggerItem key={feature.slug}>
                <Link
                  href={`/features/${feature.slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
                >
                  <FeatureIcon icon={feature.icon} />
                  <h2 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {feature.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.summary}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary-darker">
                    Explore {feature.shortName}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
