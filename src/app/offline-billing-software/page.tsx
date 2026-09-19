import type { Metadata } from "next";
import Link from "next/link";
import {
  WifiOff,
  Zap,
  ShieldCheck,
  Printer,
  CloudUpload,
  Coins,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Download,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FinalCta } from "@/components/home/final-cta";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Best Offline Billing Software for PC & Windows",
  description:
    "Looking for the best offline billing software for PC? BirStock is a lightning-fast desktop POS & GST invoice software for Indian retailers. 100% offline, zero cloud downtime, and no monthly fees.",
  keywords: [
    "offline billing software for pc",
    "desktop billing software",
    "offline pos software india",
    "retail billing software without internet",
    "offline invoice generator windows",
    "free offline billing software download",
    "pc pos software india",
  ],
  alternates: { canonical: "/offline-billing-software" },
  openGraph: {
    title: `Best Offline Billing Software for PC & Windows | ${siteConfig.name}`,
    description:
      "Sub-second barcode checkout, 100% offline operation, multi-rate GST, and automated Google Drive backup. Zero monthly fees.",
    url: `${siteConfig.url}/offline-billing-software`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Does BirStock require an active internet connection to generate bills?",
    a: "No! BirStock runs 100% locally on your Windows PC. You can create invoices, scan barcodes, manage inventory, and track customer khata completely offline without any internet connection.",
  },
  {
    q: "Which operating systems and hardware does BirStock support?",
    a: "BirStock runs seamlessly on Windows 10 and Windows 11 (both 64-bit). It works with standard USB and wireless barcode scanners, thermal receipt printers (58mm and 80mm ESC/POS), cash drawers, and standard laser A4/A5 printers.",
  },
  {
    q: "How does data backup work if the software is completely offline?",
    a: "BirStock gives you full ownership of your data with automated local backups and encrypted background Google Drive sync. Whenever your PC connects to Wi-Fi or mobile hotspot, BirStock automatically backs up your encrypted database without interrupting your billing.",
  },
  {
    q: "Are there any monthly or annual subscription fees?",
    a: "No monthly rent! BirStock is available with clear, transparent pricing and lifetime ownership options. You own your software and your store data forever.",
  },
  {
    q: "Can I manage multi-rate GST invoices offline?",
    a: "Yes. BirStock supports all Indian GST slabs (0%, 5%, 12%, 18%, 28%) with automated CGST, SGST, and IGST calculations, HSN code auto-fills, and one-click GSTR-1 export files.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "BirStock Offline Billing Software",
      operatingSystem: "Windows 10, Windows 11",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      description:
        "Fast, offline-first desktop POS, inventory, and GST billing software for Indian retail and wholesale businesses.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "250",
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

export default function OfflineBillingSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageHero
        eyebrow="Windows Desktop POS & Invoicing"
        title="The Best Offline Billing Software for PC in India"
        description="Never let internet dropouts freeze your checkout counter again. BirStock delivers sub-second barcode billing, multi-rate GST, and customer Khata entirely offline on your Windows desktop."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/contact?type=download" variant="primary" size="lg">
            <Download className="mr-2 h-4 w-4" /> Download Free Demo
          </ButtonLink>
          <ButtonLink href="/contact?type=demo" variant="outline" size="lg">
            Book a Live Demo
          </ButtonLink>
        </div>
      </PageHero>

      {/* Why Offline Matters Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Go Offline?"
            title="Speed, Stability, and Full Data Ownership"
            description="Cloud billing apps look modern until your Wi-Fi blinks during peak evening rush. Here is why top Indian retailers prefer desktop software."
            align="center"
          />

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <WifiOff className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Zero Internet Dependency
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Broadband cut? Mobile hotspot exhausted? Rainy day network outage? Your billing counter never stops. BirStock runs 100% locally on your computer.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Sub-Second Scan & Bill
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Cloud web apps take 1-3 seconds per barcode scan to reach remote servers. BirStock processes scans instantly in 50 milliseconds directly from your local disk.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Your Data Stays on Your PC
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Your customer lists, supplier margins, and daily revenue remain confidential on your hard drive, protected from third-party server breaches and data harvesting.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <Printer className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Instant Thermal Printing
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Print 2-inch (58mm) and 3-inch (80mm) thermal receipts instantly without browser print dialogue popups, plus full-size A4/A5 tax invoices with custom shop logos.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <CloudUpload className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Automated Google Drive Sync
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Enjoy the speed of offline with the safety of cloud backup. BirStock syncs an encrypted snapshot to your personal Google Drive automatically whenever network connects.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <Coins className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Zero Monthly Rent
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Stop paying ₹500 to ₹1,500 every single month just to run your retail counter. Invest once in your billing software and keep your profits where they belong.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </section>

      {/* Comparison Table Section */}
      <section className="border-y border-border bg-surface-muted py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Comparison"
            title="BirStock Offline PC vs Cloud Web POS"
            description="See how native Windows software outperforms browser-based billing systems across everyday counter operations."
            align="center"
          />

          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[640px] rounded-[var(--radius-lg)] border border-border bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-sunken/50 text-xs font-semibold uppercase tracking-wider text-muted">
                    <th className="py-4 px-6">Feature / Capability</th>
                    <th className="py-4 px-6 text-primary-darker font-bold">BirStock Offline Desktop</th>
                    <th className="py-4 px-6 text-muted-foreground">Generic Cloud Web POS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-4 px-6 font-medium text-foreground">Works during internet outage</td>
                    <td className="py-4 px-6 text-primary-dark font-semibold">
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> 100% Functional
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500" /> Counter Freezes
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-foreground">Barcode scan speed</td>
                    <td className="py-4 px-6 text-primary-dark font-semibold">
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> Sub-second (&lt;50ms)
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">1 to 3 seconds latency</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-foreground">Billing fees model</td>
                    <td className="py-4 px-6 text-primary-dark font-semibold">
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> Zero monthly subscription
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">Recurring monthly charges</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-foreground">Thermal printer support</td>
                    <td className="py-4 px-6 text-primary-dark font-semibold">
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> Direct raw ESC/POS printing
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">Browser print dialog delay</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-foreground">Customer data privacy</td>
                    <td className="py-4 px-6 text-primary-dark font-semibold">
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> Stored 100% on your local PC
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">Stored on third-party cloud</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-foreground">Backup method</td>
                    <td className="py-4 px-6 text-primary-dark font-semibold">
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> Local + Personal Google Drive
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">Locked into vendor cloud</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Questions About Offline PC Billing"
            description="Everything you need to know about setup, compatibility, and day-to-day operations."
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
