import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureIcon } from "@/components/ui/feature-icon";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { features } from "@/data/features";

export function FeaturesGrid() {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Everything in one app"
          title="One desktop app, every module your counter needs"
          description="No add-ons, no per-module pricing. Explore what each part of BirPOS actually does."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.slug}>
              <Link
                href={`/features/${feature.slug}`}
                className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              >
                <FeatureIcon icon={feature.icon} />
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-darker">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-12 flex justify-center">
          <ButtonLink href="/features" variant="secondary" size="md">
            View all features
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
