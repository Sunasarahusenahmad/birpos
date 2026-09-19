import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Cpu,
  Store,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FinalCta } from "@/components/home/final-cta";
import { industries, getIndustry } from "@/data/industries";
import { siteConfig } from "@/lib/site-config";
import { FeaturePreviewDispatcher } from "@/components/features/interactive-previews/feature-preview-dispatcher";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.metaTitle} | ${siteConfig.name}`,
      description: industry.metaDescription,
      url: `${siteConfig.url}/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const currentIndex = industries.findIndex((ind) => ind.slug === slug);
  const otherIndustries = industries.filter((_, idx) => idx !== currentIndex);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-14 pt-12 sm:pb-18 sm:pt-18">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]" />
        <Container className="relative">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Link href="/" className="hover:text-primary-darker">
                Home
              </Link>
              <span>/</span>
              <span>Industries</span>
              <span>/</span>
              <span className="text-primary-darker">{industry.shortName}</span>
            </div>
          </Reveal>

          <div className="mt-6 max-w-3xl">
            <Reveal delay={0.05}>
              <Badge>{industry.tagline}</Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {industry.headline}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {industry.subheadline}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact?type=demo" size="lg">
                  Schedule Free Store Demo
                </ButtonLink>
                <ButtonLink href="/contact?type=download" variant="outline" size="lg">
                  Download Free Trial
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Live Interactive Software Simulation Section */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <Reveal>
            <div className="mb-8 flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary-darker">
                <Sparkles className="h-3.5 w-3.5" /> Interactive Workflow Demonstration
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                How BirStock Works for {industry.name}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Try the interactive simulation below to see the lightning-fast, offline interface in action.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <FeaturePreviewDispatcher slug={industry.previewSlug} />
          </Reveal>
        </Container>
      </section>

      {/* Challenges & Solutions */}
      <section className="bg-surface-muted py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Why Cloud POS Fails Here
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                Common Counter Bottlenecks &amp; How BirStock Solves Them
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {industry.challenges.map((item, idx) => {
              const sol = industry.solutions[idx];
              return (
                <Reveal key={item.problem} delay={idx * 0.08}>
                  <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-6 shadow-xs">
                    {/* The Problem */}
                    <div className="border-b border-border/80 pb-4">
                      <div className="flex items-center gap-2 text-danger">
                        <AlertCircle className="h-4 w-4" />
                        <h3 className="text-sm font-bold text-foreground">{item.problem}</h3>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {item.impact}
                      </p>
                    </div>

                    {/* BirStock Solution */}
                    <div className="mt-4 flex-1">
                      <div className="flex items-center gap-2 text-primary">
                        <Check className="h-4 w-4" strokeWidth={3} />
                        <h4 className="text-xs font-bold text-foreground">{sol.title}</h4>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {sol.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Highlights Checklist */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Purpose-Built Capabilities for {industry.shortName}
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {industry.keyHighlights.map((pt, i) => (
              <Reveal key={pt} delay={i * 0.04}>
                <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary-darker">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-xs leading-relaxed text-foreground sm:text-sm">{pt}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Hardware Compatibility */}
      <section className="border-y border-border bg-surface-muted py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Hardware Freedom
                </span>
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Works with the hardware you already own
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  BirStock auto-detects USB, Bluetooth, and network peripherals out of the box with zero proprietary hardware lock-in.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {industry.hardwareRecommended.map((hw) => (
                  <div
                    key={hw}
                    className="flex items-center gap-3 rounded-lg border border-border bg-white p-3.5 shadow-xs"
                  >
                    <Cpu className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-xs font-medium text-foreground">{hw}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Industry FAQs */}
      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
              {industry.shortName} Billing FAQs
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqAccordion items={industry.faqs} />
          </div>
        </Container>
      </section>

      {/* Explore Other Industries */}
      <section className="border-t border-border bg-surface-muted py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Explore Other Retail &amp; Wholesale Verticals
            </h2>
          </Reveal>

          <StaggerGroup className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {otherIndustries.map((ind) => (
              <StaggerItem key={ind.slug}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex h-full flex-col justify-between rounded-lg border border-border bg-white p-4 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm"
                >
                  <div>
                    <Store className="h-5 w-5 text-primary" />
                    <h3 className="mt-2 text-xs font-bold text-foreground">{ind.name}</h3>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-[0.7rem] font-bold text-primary-darker">
                    Explore vertical <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
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
