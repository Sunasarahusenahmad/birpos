import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { FeatureIcon } from "@/components/ui/feature-icon";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { FinalCta } from "@/components/home/final-cta";
import { features } from "@/data/features";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore every module inside BirPOS — keyboard & touch POS billing, inventory, customer Khata, supplier management, GST invoicing, Google Drive backup, reports, security, and financial year management.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: `Features | ${siteConfig.name}`,
    description:
      "Every module BirPOS ships with — billing, inventory, Khata, GST, backup, reports, and more.",
    url: `${siteConfig.url}/features`,
  },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="One app. Every module your counter needs."
        description="From the first barcode scan to your nightly Google Drive backup, explore exactly how each part of BirPOS works."
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
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-darker">
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
