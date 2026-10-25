import Link from "next/link";
import { Check, Minus, PackagePlus, Smartphone } from "lucide-react";
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
import { PRICES_INCLUDE_GST, formatINR, getPlan, plans, yearlySaving } from "@/data/pricing";
import { siteConfig } from "@/lib/site-config";
import { faqSchema, graph, offersSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const monthly = getPlan("monthly");
const yearly = getPlan("yearly");
const lifetime = getPlan("lifetime");

const title = `BirStock Pricing - ${formatINR(monthly.price)}/month, ${formatINR(yearly.price)}/year or ${formatINR(
  lifetime.price
)} Lifetime`;
const description = `Simple BirStock pricing for Indian shops: ${formatINR(monthly.price)} per month, ${formatINR(
  yearly.price
)} per year with the BirStock Mobile App included, or a ${formatINR(
  lifetime.price
)} one-time lifetime licence. Offline POS, GST billing and inventory in every plan.`;

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
const comparison: { label: string; values: Record<"monthly" | "yearly" | "lifetime", Cell> }[] = [
  { label: "Quick POS & Touch POS billing", values: { monthly: true, yearly: true, lifetime: true } },
  { label: "Inventory, Excel import/export & low-stock alerts", values: { monthly: true, yearly: true, lifetime: true } },
  { label: "Customer Khata, suppliers & returns", values: { monthly: true, yearly: true, lifetime: true } },
  { label: "GST invoices (thermal & A4)", values: { monthly: true, yearly: true, lifetime: true } },
  { label: "Reports, expenses & other income", values: { monthly: true, yearly: true, lifetime: true } },
  { label: "Local + Google Drive backup", values: { monthly: true, yearly: true, lifetime: true } },
  { label: "PIN App Lock & financial year", values: { monthly: true, yearly: true, lifetime: true } },
  { label: "Multiple companies/firms", values: { monthly: true, yearly: true, lifetime: true } },
  { label: "BirStock Mobile App", values: { monthly: false, yearly: "Included", lifetime: "Add-on" } },
  { label: "New feature modules", values: { monthly: "While active", yearly: "Included during plan", lifetime: "Add-on, per feature" } },
  { label: "Software updates", values: { monthly: "While active", yearly: "Full year", lifetime: "Bug fixes for included features" } },
  { label: "Licence", values: { monthly: "Renews monthly", yearly: "Renews yearly", lifetime: "Permanent" } },
  { label: "Support", values: { monthly: "Email & phone", yearly: "Priority", lifetime: "Email & phone" } },
];

const pricingFaqs = [
  {
    q: "What is the difference between the three plans?",
    a: `All three include the full BirStock desktop app. Monthly (${formatINR(monthly.price)}/month) is the lowest upfront cost. Yearly (${formatINR(
      yearly.price
    )}/year) adds the BirStock Mobile App and new features released during your plan. Lifetime (${formatINR(
      lifetime.price
    )} one-time) is a permanent licence with no renewals; new feature modules and the mobile app are optional add-ons.`,
  },
  {
    q: "Is the Lifetime licence really permanent?",
    a: "Yes. Pay once and keep using the features included at purchase without any renewal. You also get bug-fix updates for those features. New modules we release later are sold separately, feature by feature, so you only pay for what you need.",
  },
  {
    q: "Does the Yearly plan include the mobile app?",
    a: `Yes. The Yearly plan includes the BirStock Mobile App, which that pairs with your desktop over shop Wi-Fi. That's about ${formatINR(
      Math.round(yearly.price / 12)
    )}/month and saves ${yearlySaving().percent}% compared with paying monthly for a year.`,
  },
  {
    q: "Do prices include GST?",
    a: PRICES_INCLUDE_GST
      ? "Yes. All BirStock prices shown on this website are inclusive of GST."
      : "No. All BirStock prices shown on this website are exclusive of GST. GST is added at the applicable rate on your invoice.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. Contact us to move from Monthly to Yearly, or to upgrade to a Lifetime licence. Your data stays on your PC, so nothing needs to be re-entered.",
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
        title="Simple pricing. Pay monthly, yearly, or once."
        description={`Every plan includes offline POS, GST billing, inventory, Khata and backup. Choose Yearly to get the BirStock Mobile App too - or own BirStock forever for ${formatINR(
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
                  stock. Included in Yearly; available as an add-on for Lifetime licences.
                </p>
                <Link href="/features/mobile-app" className="mt-4 inline-block text-sm font-semibold text-primary-darker hover:underline">
                  Learn about the BirStock Mobile App &rarr;
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-[var(--radius-lg)] border border-border bg-white p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-primary-tint text-primary-darker">
                  <PackagePlus className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold text-foreground">Add-ons for Lifetime licences</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Your Lifetime licence keeps every feature you bought, forever. When we release a new feature module,
                  you can add just that feature at its own price - no subscription needed.
                </p>
                <Link href="/contact?type=pricing&plan=lifetime" className="mt-4 inline-block text-sm font-semibold text-primary-darker hover:underline">
                  Ask about add-on pricing &rarr;
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
