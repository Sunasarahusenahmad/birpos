import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Info, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FeatureIcon } from "@/components/ui/feature-icon";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FinalCta } from "@/components/home/final-cta";
import { features, getFeature } from "@/data/features";
import { FeaturePreviewDispatcher } from "@/components/features/interactive-previews/feature-preview-dispatcher";
import { hasFeaturePreview } from "@/components/features/interactive-previews/preview-slugs";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, graph, howToSchema, pageMetadata, webPageSchema } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) return {};

  return pageMetadata({
    title: feature.seoTitle,
    description: feature.metaDescription,
    path: `/features/${feature.slug}`,
    og: `feature-${feature.slug}`,
    keywords: feature.keywords,
  });
}

export default async function FeatureDetailPage({ params }: Props) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) notFound();

  const related = feature.related
    .map((r) => features.find((f) => f.slug === r))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));
  const path = `/features/${feature.slug}`;
  const showPreview = hasFeaturePreview(feature.slug);

  const jsonLd = graph(
    webPageSchema({ name: feature.seoTitle, description: feature.metaDescription, path, og: `feature-${feature.slug}` }),
    howToSchema(`How ${feature.shortName} works in BirStock`, feature.workflow),
    faqSchema(feature.faqs)
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { name: "Features", path: "/features" },
          { name: feature.shortName, path },
        ]}
      />

      <section className="relative overflow-hidden pb-16 pt-8 sm:pb-20 sm:pt-12">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]" />
        <Container className="relative">
          <div className="flex flex-col items-start gap-6">
            <Reveal delay={0.05}>
              <FeatureIcon icon={feature.icon} className="h-14 w-14" iconClassName="h-6 w-6" />
            </Reveal>
            <div>
              <Reveal delay={0.1}>
                <Badge>{feature.tagline}</Badge>
              </Reveal>
              <Reveal delay={0.15}>
                <h1 className="text-balance mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                  {feature.name}
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-balance mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {feature.summary}
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact?type=demo" size="lg">
                    See it in a demo
                  </ButtonLink>
                  <ButtonLink href="/pricing" variant="outline" size="lg">
                    See Pricing
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {showPreview ? (
        <section className="pb-16 sm:pb-20">
          <Container>
            <Reveal>
              <div className="mb-8 flex flex-col items-center text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary-darker">
                  <Sparkles className="h-3.5 w-3.5" /> Illustrative demo
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  See {feature.shortName} in action
                </h2>
                <p className="mt-2 max-w-lg text-sm text-muted-foreground">
                  An interactive mock-up of the BirStock workflow. Names and figures are sample data for
                  illustration - not a live connection to the app or real customer records.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <FeaturePreviewDispatcher slug={feature.slug} />
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section className="pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <h2 className="mb-8 font-display text-2xl font-bold text-foreground sm:text-3xl">
              What you get with {feature.shortName}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {feature.highlights.map((point, i) => (
              <Reveal key={point} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary-darker">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-sm leading-relaxed text-foreground">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {feature.note ? (
            <Reveal delay={0.1}>
              <div className="mt-8 rounded-[var(--radius-lg)] border border-primary-tint-strong bg-primary-tint/60 p-6">
                <h3 className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
                  <Info className="h-4 w-4 text-primary-darker" /> {feature.note.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {feature.note.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}
        </Container>
      </section>

      <section className="bg-surface-muted py-20 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              How {feature.shortName.toLowerCase()} works
            </h2>
          </Reveal>

          <div
            className={
              feature.workflow.length === 3
                ? "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3"
                : "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            }
          >
            {feature.workflow.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <div className="h-full rounded-[var(--radius-lg)] border border-border bg-white p-6">
                  <span className="font-display text-2xl font-extrabold text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                    {step.step}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              {feature.shortName} FAQs
            </h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={feature.faqs} />
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Explore other modules
            </h2>
          </Reveal>
          <StaggerGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((f) => (
              <StaggerItem key={f.slug}>
                <Link
                  href={`/features/${f.slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
                >
                  <FeatureIcon icon={f.icon} />
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                    {f.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-darker">
                    Learn more
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
