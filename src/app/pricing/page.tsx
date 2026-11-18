import Link from "next/link";
import { Check, LifeBuoy, Minus, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { SavingsCalculator } from "@/components/pricing/savings-calculator";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FinalCta } from "@/components/home/final-cta";
import { CustomizationSection } from "@/components/clients/customization-section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import {
  LIFETIME_FREE_SUPPORT_MONTHS,
  PRICES_INCLUDE_GST,
  SUPPORT_RENEWAL_PRICE,
  formatINR,
  getPlan,
  plans,
} from "@/data/pricing";
import { siteConfig } from "@/lib/site-config";
import { faqSchema, graph, offersSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const basic = getPlan("basic");
const pro = getPlan("pro");
const lifetime = getPlan("lifetime");
const renewal = formatINR(SUPPORT_RENEWAL_PRICE);

const title = `BirStock Pricing - ${formatINR(basic.price)}/year, ${formatINR(pro.price)}/year or ${formatINR(
  lifetime.price
)} Lifetime`;
const description = `Simple BirStock pricing for Indian shops: Basic at ${formatINR(basic.price)} per year, Pro at ${formatINR(
  pro.price
)} per year with every feature and the BirStock Mobile App, or a ${formatINR(
  lifetime.price
)} one-time lifetime licence with the mobile app included. Offline POS, GST billing and inventory in every plan.`;

export const metadata = pageMetadata({
  title,
  description,
  path: "/pricing",
  og: "pricing",
  absoluteTitle: true,
  keywords: [
    "billing software price india",
    "pos software price",
    "lifetime billing software",
    "billing software one time payment",
    "gst billing software price",
    "billing software with mobile app price",
  ],
});

type Cell = boolean | string;
const comparison: { label: string; values: Record<"basic" | "pro" | "lifetime", Cell> }[] = [
  { label: "Quick POS & Touch POS billing", values: { basic: true, pro: true, lifetime: true } },
  { label: "Inventory, Excel import/export & low-stock alerts", values: { basic: true, pro: true, lifetime: true } },
  { label: "Customer Khata, suppliers & returns", values: { basic: true, pro: true, lifetime: true } },
  { label: "GST invoices (thermal & A4)", values: { basic: true, pro: true, lifetime: true } },
  { label: "Reports, expenses & other income", values: { basic: true, pro: true, lifetime: true } },
  { label: "PIN App Lock & financial year", values: { basic: true, pro: true, lifetime: true } },
  { label: "Local backup", values: { basic: true, pro: true, lifetime: true } },
  { label: "Google Drive backup", values: { basic: false, pro: true, lifetime: true } },
  { label: "Multiple companies/firms", values: { basic: "Single company", pro: true, lifetime: true } },
  { label: "BirStock Mobile App", values: { basic: false, pro: "Included", lifetime: "Included" } },
  { label: "New feature modules", values: { basic: false, pro: "Included during plan", lifetime: "Add-on, per feature" } },
  { label: "Software updates", values: { basic: "Full year", pro: "Full year", lifetime: "Bug fixes for included features" } },
  { label: "Licence", values: { basic: "Renews yearly", pro: "Renews yearly", lifetime: "Permanent" } },
  {
    label: "Support",
    values: {
      basic: "Full support, full year",
      pro: "Full priority support, full year",
      lifetime: `${LIFETIME_FREE_SUPPORT_MONTHS} months free, then ${renewal}/year`,
    },
  },
];

const pricingFaqs = [
  {
    q: "What is the difference between the three plans?",
    a: `Basic (${formatINR(basic.price)}/year) covers essential desktop billing, inventory, Khata, GST invoices and reports for a single company, with full support - it does not include the BirStock Mobile App. Pro (${formatINR(
      pro.price
    )}/year) includes every feature, the BirStock Mobile App and new features released during your plan, with full priority support. Lifetime (${formatINR(
      lifetime.price
    )} one-time) is a permanent licence with all features and the mobile app, plus ${LIFETIME_FREE_SUPPORT_MONTHS} months of support.`,
  },
  {
    q: "Is the Lifetime licence really permanent?",
    a: "Yes. Pay once and keep using BirStock - including the BirStock Mobile App - without any renewal. You also get bug-fix updates for the included features. New modules we release later are sold separately, feature by feature, so you only pay for what you need.",
  },
  {
    q: "How does support work on the Lifetime licence?",
    a: `Your Lifetime licence includes ${LIFETIME_FREE_SUPPORT_MONTHS} months of full support from the date of purchase. After that, support is optional at ${renewal} per year, renewed each year you need it. Your software keeps working whether or not you renew support.`,
  },
  {
    q: "Which plans include the mobile app?",
    a: `The BirStock Mobile App is included in Pro (${formatINR(pro.price)}/year) and Lifetime (${formatINR(
      lifetime.price
    )} one-time). It pairs with your desktop over shop Wi-Fi. The Basic plan does not include the mobile app.`,
  },
  {
    q: "Do prices include GST?",
    a: PRICES_INCLUDE_GST
      ? "Yes. All BirStock prices shown on this website are inclusive of GST."
      : "No. All BirStock prices shown on this website are exclusive of GST. GST is added at the applicable rate on your invoice.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. Contact us to upgrade from Basic to Pro, or to a Lifetime licence. Your data stays on your PC, so nothing needs to be re-entered.",
  },
  {
    q: "Is pricing per PC?",
    a: "Plan prices cover one Windows PC. For more counters or branches, contact us for additional licences - each PC runs its own BirStock database.",
  },
  {
    q: "Can BirStock be customised for my business?",
    a: "Yes. Beyond the standard plans, our team can customise invoice formats, reports, workflows and add industry-specific features - as we did for iQiP. Customisation is priced per project based on your requirements.",
  },
  {
    q: "Can I try BirStock before paying?",
    a: "Yes. Request a demo and our team will walk you through BirStock and help you set up a trial with your own products.",
  },
];

export default function PricingPage() {
  const jsonLd = graph(
    webPageSchema({ name: title, description, path: "/pricing", og: "pricing" }),
    {
      "@type": "Product",
      "@id": `${siteConfig.url}/pricing/#product`,
      name: `${siteConfig.name} POS, GST Billing & Inventory Software`,
      description: siteConfig.description,
      image: `${siteConfig.url}/brand/og/pricing.png`,
      brand: { "@type": "Brand", name: siteConfig.name },
      category: "Business Software",
      offers: offersSchema(),
    },
    faqSchema(pricingFaqs)
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: "Pricing", path: "/pricing" }]} />
      <PageHero
        className="pt-8 sm:pt-12"
        eyebrow="Pricing"
        title="Simple pricing. Pay yearly, or once."
        description={`Every plan includes offline POS, GST billing, inventory, Khata and full support. Choose Pro for every feature and the BirStock Mobile App - or own BirStock forever, mobile app included, for ${formatINR(
          lifetime.price
        )}.`}
      />

      <section className="pb-16 sm:pb-20">
        <Container>
          <PricingCards />
          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Prices in Indian Rupees (INR), {PRICES_INCLUDE_GST ? "inclusive of GST" : "exclusive of GST (GST extra)"}, per Windows PC. Need several counters or branches?{" "}
              <Link href="/contact?type=pricing" className="font-medium text-primary-darker hover:underline">
                Ask for a multi-PC quote
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container className="max-w-5xl">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
              Compare plans
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 overflow-x-auto rounded-[var(--radius-lg)] border border-border bg-white shadow-[var(--shadow-soft)]">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">BirStock plan comparison</caption>
                <thead>
                  <tr className="border-b border-border bg-surface-muted">
                    <th scope="col" className="px-5 py-4 font-semibold text-muted-foreground">
                      What you get
                    </th>
                    {plans.map((p) => (
                      <th
                        key={p.id}
                        scope="col"
                        className={`px-5 py-4 text-center font-semibold ${p.highlighted ? "text-primary-darker" : "text-foreground"}`}
                      >
                        {p.name}
                        <span className="block text-xs font-medium text-muted-foreground">
                          {formatINR(p.price)} {p.period}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparison.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" className="px-5 py-3.5 font-medium text-foreground">
                        {row.label}
                      </th>
                      {plans.map((p) => {
                        const v = row.values[p.id];
                        return (
                          <td key={p.id} className="px-5 py-3.5 text-center">
                            {v === true ? (
                              <Check className="mx-auto h-4 w-4 text-primary" strokeWidth={3} aria-label="Included" />
                            ) : v === false ? (
                              <Minus className="mx-auto h-4 w-4 text-muted-foreground" aria-label="Not included" />
                            ) : (
                              <span className="text-xs font-medium text-foreground">{v}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-muted py-20 sm:py-24">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[var(--radius-lg)] border border-border bg-white p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-primary-tint text-primary-darker">
                  <Smartphone className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold text-foreground">BirStock Mobile App</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Pair your phone with the desktop over shop Wi-Fi to make sales and check customers, invoices and
                  stock. Included in Pro and Lifetime; not available on Basic.
                </p>
                <Link href="/features/mobile-app" className="mt-4 inline-block text-sm font-semibold text-primary-darker hover:underline">
                  Learn about the BirStock Mobile App &rarr;
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-[var(--radius-lg)] border border-border bg-white p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-primary-tint text-primary-darker">
                  <LifeBuoy className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold text-foreground">Support for Lifetime licences</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Lifetime includes {LIFETIME_FREE_SUPPORT_MONTHS} months of full support. After that, renew support for{" "}
                  {renewal} per year whenever you need it - your licence keeps working either way. New feature modules
                  can be added at their own price.
                </p>
                <Link href="/contact?type=pricing&plan=lifetime" className="mt-4 inline-block text-sm font-semibold text-primary-darker hover:underline">
                  Ask about Lifetime support &rarr;
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            <SavingsCalculator />
          </div>
        </Container>
      </section>

      <CustomizationSection className="pt-20 sm:pt-24" />

      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
              Pricing questions
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqAccordion items={pricingFaqs} />
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
