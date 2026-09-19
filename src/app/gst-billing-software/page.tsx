import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Percent,
  Receipt,
  FileSpreadsheet,
  Building2,
  CheckCircle2,
  Download,
  ArrowRight,
  Calculator,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FinalCta } from "@/components/home/final-cta";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "GST Billing Software for Retail & Wholesale Shops",
  description:
    "Generate 100% GST-compliant tax invoices in seconds. BirStock handles multi-rate GST, CGST/SGST/IGST splits, HSN code auto-fills, and one-click GSTR-1 Excel reports for Indian merchants.",
  keywords: [
    "gst billing software for retail shop",
    "offline gst billing software pc",
    "gstr-1 report generator",
    "hsn code billing software",
    "gst invoice maker windows",
    "gst pos software india",
    "retail shop gst invoice print",
  ],
  alternates: { canonical: "/gst-billing-software" },
  openGraph: {
    title: `GST Billing Software for Retail & Wholesale | ${siteConfig.name}`,
    description:
      "Automated CGST/SGST/IGST calculation, HSN code directory, thermal & A4 invoice printing, and GSTR-1 export. Completely offline.",
    url: `${siteConfig.url}/gst-billing-software`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Can I generate both GST and Non-GST bills in BirStock?",
    a: "Yes! BirStock lets you configure GST tax invoices for registered B2B buyers as well as simplified non-GST or composite retail estimate slips for regular walk-in customers.",
  },
  {
    q: "Does BirStock automatically calculate CGST, SGST, and IGST?",
    a: "Yes. Simply set your home state in company settings. Whenever you bill a customer within your state, BirStock splits taxes equally into CGST and SGST. For out-of-state buyers, it automatically applies IGST.",
  },
  {
    q: "Can I export data for my CA to file GSTR-1?",
    a: "Absolutely. With one click, BirStock compiles your monthly or quarterly sales into structured Excel reports formatted specifically for direct GSTR-1 filing and reconciliation.",
  },
  {
    q: "Can I print GST invoices on both thermal printers and regular A4 printers?",
    a: "Yes. BirStock supports 3-inch (80mm) thermal POS receipts with clean GST tax summary tables, as well as formal full-page A4 and A5 tax invoices featuring your GSTIN, shop logo, bank account QR code, and terms & conditions.",
  },
  {
    q: "How are different GST rate slabs (0%, 5%, 12%, 18%, 28%) handled?",
    a: "Each product in your inventory is tagged with its respective GST rate and HSN code. During multi-item billing, BirStock accurately computes the exact tax breakdown across all tax slabs in a single invoice.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "BirStock GST Billing Software",
      operatingSystem: "Windows 10, Windows 11",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      description:
        "Offline GST billing and invoice software for Indian retailers with automated tax splits, HSN lookup, and GSTR-1 exports.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "310",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ],
};

export default function GstBillingSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageHero
        eyebrow="Indian GST Compliance Made Simple"
        title="Fast, 100% Compliant GST Billing Software for Retailers"
        description="Simplify multi-slab GST calculations, HSN tagging, B2B/B2C invoicing, and CA tax reports with an offline Windows desktop billing software built specifically for Indian businesses."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/contact?type=download" variant="primary" size="lg">
            <Download className="mr-2 h-4 w-4" /> Download Free Trial
          </ButtonLink>
          <ButtonLink href="/contact?type=demo" variant="outline" size="lg">
            Schedule a Demo
          </ButtonLink>
        </div>
      </PageHero>

      {/* Core GST Features Grid */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="GST Capabilities"
            title="Everything You Need for Effortless Tax Compliance"
            description="From daily walk-in billing to monthly CA tax filing, BirStock eliminates manual math errors and keeps your books audit-ready."
            align="center"
          />

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <Percent className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Multi-Slab Tax Calculations
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Combine 0%, 5%, 12%, 18%, and 28% items on the same bill without confusion. BirStock itemizes taxes transparently for every line item.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Auto CGST, SGST &amp; IGST Split
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Intelligent state-code detection automatically routes intra-state sales to CGST + SGST and inter-state wholesale transactions to IGST.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  HSN / SAC Code Directory
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Pre-configured HSN code auto-suggest helps you tag products in seconds. Invoices automatically display compliant 4, 6, or 8-digit HSN summaries.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  B2B Invoices with Buyer GSTIN
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Save verified customer GSTIN numbers for seamless Input Tax Credit (ITC) pass-through on wholesale and corporate orders.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <FileSpreadsheet className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  One-Click GSTR-1 Export
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Hand your CA clean, error-free spreadsheets ready for direct GST portal filing. Save hours of manual ledger tallying at month-end.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <Receipt className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Dual Format Printing
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Print lightweight thermal receipts at the billing counter, or professional full-sheet A4/A5 invoices with bank UPI QR codes for bulk deliveries.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </section>

      {/* Tax Slabs Overview */}
      <section className="border-y border-border bg-surface-muted py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="rounded-full border border-primary/20 bg-primary-tint px-3 py-1 text-xs font-semibold text-primary-darker">
                Comprehensive Tax Rules
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ready for Every Indian Retail &amp; Wholesale Category
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Whether you sell nil-rated groceries, 5% packaged foods, 18% consumer electronics, or 28% luxury automotive spares, BirStock ensures every bill is 100% compliant.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Supports Inclusive & Exclusive GST pricing modes",
                  "Automatic calculation of discounts before and after tax",
                  "Round-off adjustment to avoid coin change hassles",
                  "Financial year rollover without losing historical tax records",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink href="/features/gst" variant="primary">
                  Explore GST Module Details <ArrowRight className="ml-1.5 h-4 w-4" />
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[var(--radius-xl)] border border-border bg-white p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-base font-bold text-foreground">
                Live Bill Sample: Multi-Tax Summary
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                How BirStock transparently structures GST invoices:
              </p>
              <div className="mt-6 divide-y divide-border text-xs">
                <div className="flex justify-between py-2 text-muted-foreground">
                  <span>Subtotal (Excl. Tax)</span>
                  <span className="font-mono text-foreground">₹ 4,250.00</span>
                </div>
                <div className="flex justify-between py-2 text-muted-foreground">
                  <span>CGST (9%)</span>
                  <span className="font-mono text-foreground">₹ 382.50</span>
                </div>
                <div className="flex justify-between py-2 text-muted-foreground">
                  <span>SGST (9%)</span>
                  <span className="font-mono text-foreground">₹ 382.50</span>
                </div>
                <div className="flex justify-between py-2 text-muted-foreground">
                  <span>CGST (2.5%) + SGST (2.5%)</span>
                  <span className="font-mono text-foreground">₹ 110.00</span>
                </div>
                <div className="flex justify-between py-2 text-muted-foreground">
                  <span>Round Off</span>
                  <span className="font-mono text-foreground">- ₹ 0.00</span>
                </div>
                <div className="flex justify-between py-3 font-display text-sm font-bold text-foreground">
                  <span>Grand Total (Incl. Taxes)</span>
                  <span className="font-mono text-primary font-bold">₹ 5,125.00</span>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-surface-muted p-3 text-center text-[11px] text-muted-foreground">
                HSN Summary: 1006 (₹2,200 @ 5%) · 8504 (₹2,050 @ 18%)
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Questions About GST Billing"
            description="Find clear answers on GST rates, HSN tagging, and tax filing with BirStock."
            align="center"
          />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
