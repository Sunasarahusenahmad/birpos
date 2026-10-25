import Link from "next/link";
import { ArrowRight, CheckCircle2, Store } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FinalCta } from "@/components/home/final-cta";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import type { LandingPageData } from "@/data/landing-pages";
import { industries } from "@/data/industries";
import { faqSchema, graph, pageMetadata, webPageSchema } from "@/lib/seo";

export function landingMetadata(page: LandingPageData) {
  return pageMetadata({
    title: page.seoTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
    og: page.og,
    keywords: page.keywords,
    absoluteTitle: true,
  });
}

/** Shared layout for the search-focused landing pages (offline, GST, retail, etc.). */
export function LandingPage({ page }: { page: LandingPageData }) {
  const path = `/${page.slug}`;
  const jsonLd = graph(
    webPageSchema({ name: page.seoTitle, description: page.metaDescription, path, og: page.og }),
    faqSchema(page.faqs)
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: page.breadcrumb, path }]} />

      <PageHero className="pt-8 sm:pt-12" eyebrow={page.eyebrow} title={page.h1} description={page.intro}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/download" variant="primary" size="lg">
            Download BirStock
          </ButtonLink>
          <ButtonLink href="/pricing" variant="outline" size="lg">
            See Pricing
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Why BirStock" title={page.benefits.heading} description={page.benefits.intro} />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.benefits.items.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {page.comparison ? (
        <section className="border-y border-border bg-surface-muted py-16 sm:py-24">
          <Container>
            <SectionHeading eyebrow="Comparison" title={page.comparison.heading} description={page.comparison.intro} />
            <div className="mt-12 overflow-x-auto">
              <div className="mx-auto min-w-[600px] max-w-4xl rounded-[var(--radius-lg)] border border-border bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface-sunken/50 text-xs font-semibold uppercase tracking-wider text-muted">
                      <th scope="col" className="px-6 py-4">
                        What matters
                      </th>
                      <th scope="col" className="px-6 py-4 font-bold text-primary-darker">
                        BirStock
                      </th>
                      <th scope="col" className="px-6 py-4 text-muted-foreground">
                        {page.comparison.otherLabel}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {page.comparison.rows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row" className="px-6 py-4 font-medium text-foreground">
                          {row.label}
                        </th>
                        <td className="px-6 py-4 font-semibold text-primary-dark">
                          <span className="inline-flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {row.birstock}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{row.other}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              General comparison for illustration. Features and pricing of other products vary.
            </p>
          </Container>
        </section>
      ) : null}

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-[var(--radius-xl)] border border-border bg-white p-7 sm:p-10">
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">Learn more</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {page.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary-darker"
                >
                  {r.label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-muted-foreground">By shop type</h3>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="flex items-center gap-2 rounded-lg border border-border p-3 text-xs font-semibold text-foreground hover:border-primary/40 hover:text-primary-darker"
                >
                  <Store className="h-4 w-4 shrink-0 text-primary" />
                  {ind.shortName}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-10">
            <FaqAccordion items={page.faqs} />
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
