import Link from "next/link";
import {
  FileText,
  BarChart3,
  Workflow,
  Puzzle,
  ShieldCheck,
  Smartphone,
  ArrowUpRight,
  Check,
  Briefcase,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { FinalCta } from "@/components/home/final-cta";
import { ClientLogos } from "@/components/clients/client-logos";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { customizedClients } from "@/data/clients";
import { formatINR, getPlan } from "@/data/pricing";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl, faqSchema, graph, howToSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const path = "/custom-billing-software";
const title = "Custom Billing Software - BirStock Customised for Your Business";
const description =
  "Get BirStock customised for your business: your invoice formats, reports, workflows and industry modules, built on proven offline billing software. Priced per project based on your requirements.";

export const metadata = pageMetadata({
  title,
  description,
  path,
  og: "custom-billing-software",
  absoluteTitle: true,
  keywords: [
    "custom billing software",
    "customised billing software india",
    "custom pos software",
    "billing software development company",
    "tailor made billing software",
    "custom inventory software",
    "billing software for service business",
  ],
});

const capabilities = [
  { icon: FileText, title: "Invoice & document formats", desc: "Bills, receipts, quotations and statements laid out the way your business needs them." },
  { icon: BarChart3, title: "Custom reports", desc: "Reports and summaries built around the numbers you actually track." },
  { icon: Workflow, title: "Your workflow", desc: "Screens, fields and steps adjusted to how your team works every day." },
  { icon: Puzzle, title: "Industry-specific modules", desc: "Extra features for your trade or profession, on top of standard BirStock." },
  { icon: Smartphone, title: "Desktop + mobile", desc: "Customisations can extend to the BirStock Mobile App for Android and iOS." },
  { icon: ShieldCheck, title: "Same solid foundation", desc: "Offline-first billing, data on your own PC, PIN App Lock and Google Drive backup." },
];

const process = [
  { step: "Share your requirements", detail: "Tell us how your business works and what you need BirStock to do differently." },
  { step: "Proposal & quote", detail: "We review your requirements and send a clear scope, timeline and price before any work starts." },
  { step: "Build & test", detail: "Our team builds the customisation on top of BirStock and tests it with your real scenarios." },
  { step: "Install & train", detail: "We install the customised build and walk your team through it." },
  { step: "Ongoing support", detail: "We stay available for support and future changes as your business grows." },
];

const pricingFactors = [
  "How many screens, reports or document formats need to change",
  "New modules or features that don't exist in standard BirStock",
  "Importing data from your current software or spreadsheets",
  "Mobile app changes, if needed",
  "Number of PCs/licences and the timeline you need",
];

const faqs = [
  {
    q: "Can BirStock be customised for my business?",
    a: "Yes. Our team can customise BirStock's invoice and document formats, reports and workflows, and add industry-specific features. For example, we built a customised BirStock for iQiP, an intellectual property advisory firm in Ahmedabad.",
  },
  {
    q: "How much does a customised BirStock cost?",
    a: "Customisation is priced per project based on your requirements - the scope of changes, any new modules, data migration and timeline. Share what you need and we'll send a quote before starting any work.",
  },
  {
    q: "Is BirStock only for retail shops?",
    a: "No. Standard BirStock is built for retailers and wholesalers, and with customisation it can fit other businesses too - such as professional service firms like iQiP.",
  },
  {
    q: "Do I still get the standard BirStock features?",
    a: "Yes. Customisation is built on top of the standard app, so POS, GST invoices, inventory, Khata, reports, backup and App Lock are all included.",
  },
  {
    q: "Can I start with a standard plan and customise later?",
    a: `Yes. Start on Monthly (${formatINR(getPlan("monthly").price)}), Yearly (${formatINR(getPlan("yearly").price)}) or Lifetime (${formatINR(
      getPlan("lifetime").price
    )}), and ask for customisation whenever you need it. Your existing data stays on your PC.`,
  },
  {
    q: "How long does customisation take?",
    a: "It depends on the scope. Small changes such as an invoice format are quick; new modules take longer. Your quote includes a timeline.",
  },
];

export default function CustomBillingSoftwarePage() {
  const jsonLd = graph(
    webPageSchema({ name: title, description, path, og: "custom-billing-software" }),
    {
      "@type": "Service",
      "@id": `${absoluteUrl(path)}#service`,
      name: "BirStock Software Customisation",
      serviceType: "Custom billing, POS and inventory software development",
      description,
      url: absoluteUrl(path),
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
      offers: {
        "@type": "Offer",
        url: absoluteUrl(path),
        description: "Priced per project based on your requirements",
        priceSpecification: { "@type": "PriceSpecification", priceCurrency: "INR" },
      },
      ...(customizedClients.length
        ? {
            subjectOf: customizedClients.map((c) => ({
              "@type": "CreativeWork",
              name: `Customised BirStock for ${c.name}`,
              about: { "@type": "Organization", name: c.name, url: c.url },
            })),
          }
        : {}),
    },
    howToSchema("How BirStock customisation works", process),
    faqSchema(faqs)
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: "Custom Billing Software", path }]} />

      <PageHero
        className="pt-8 sm:pt-12"
        eyebrow="Customisation"
        title="Billing software, customised for your business"
        description="Start with everything BirStock already does - POS, GST invoices, inventory, Khata, backup and the mobile app - and our team shapes it around the way you work."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href="/contact?type=customization" size="lg">
            Discuss your requirements
          </ButtonLink>
          <ButtonLink href="/pricing" variant="outline" size="lg">
            See standard plans
          </ButtonLink>
        </div>
      </PageHero>

      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="What we customise"
            title="Built around your process, not the other way round"
            description="Standard plans fit most shops. When your business needs something specific, we build it in."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title: t, desc }) => (
              <StaggerItem key={t}>
                <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {customizedClients.map((client) => (
        <section key={client.slug} className="pb-16 sm:pb-24">
          <Container>
            <Reveal>
              <div className="grid grid-cols-1 gap-8 rounded-[var(--radius-xl)] bg-foreground p-8 text-white sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-primary-light">
                    <Briefcase className="h-3.5 w-3.5" /> Client story
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                    A customised BirStock for {client.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-white/80">
                    {client.name} is {client.about ? `an ${client.about.charAt(0).toLowerCase()}${client.about.slice(1)}` : "a growing business"}
                    {client.location ? ` based in ${client.location}` : ""}. Their work isn&apos;t a typical shop counter,
                    so we customised BirStock to fit the way their team works - showing that BirStock can be shaped
                    for professional services as well as retail and wholesale.
                  </p>
                  {client.url ? (
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light hover:underline"
                    >
                      Visit {client.name} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
                <ul className="space-y-3 rounded-[var(--radius-lg)] bg-white/5 p-6 text-sm">
                  {["Tailored to their business workflow", "Built on standard BirStock", "Delivered by the BirStock team"].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-white/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" strokeWidth={3} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </section>
      ))}

      <section className="bg-surface-muted py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How it works" title="From requirement to go-live" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.05}>
                <div className="h-full rounded-[var(--radius-lg)] border border-border bg-white p-6">
                  <span className="font-display text-2xl font-extrabold text-primary/30">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-base font-semibold text-foreground">{s.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="max-w-4xl">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 rounded-[var(--radius-xl)] border border-border bg-white p-8 shadow-[var(--shadow-card)] sm:p-10 md:grid-cols-[1fr_1.2fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Pricing</span>
                <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Priced on your requirements
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Every customisation is different, so there&apos;s no fixed price. You get a clear quote with scope
                  and timeline before any work begins - no surprises.
                </p>
                <ButtonLink href="/contact?type=customization" className="mt-6">
                  Get a custom quote
                </ButtonLink>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">What affects the price</h3>
                <ul className="mt-3 space-y-2.5">
                  {pricingFactors.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-muted-foreground">
                  Don&apos;t need changes? Standard plans start at {formatINR(getPlan("monthly").price)}/month -{" "}
                  <Link href="/pricing" className="font-medium text-primary-darker hover:underline">
                    compare plans
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ClientLogos />

      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Customisation questions" />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
