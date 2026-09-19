import type { Metadata } from "next";
import Link from "next/link";
import {
  Store,
  ScanBarcode,
  BookOpen,
  PauseCircle,
  AlertTriangle,
  Receipt,
  CheckCircle2,
  Download,
  ArrowRight,
  TrendingUp,
  Clock,
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
  title: "Fast Billing Software for Retail Shops in India",
  description:
    "Looking for the best billing software for retail shop? BirStock provides lightning-fast barcode checkout, customer Khata ledger, stock tracking, and thermal receipt printing. 100% offline with zero monthly fees.",
  keywords: [
    "billing software for retail shop",
    "retail billing software india",
    "pos software for retail shop",
    "kirana store billing software",
    "barcode billing software for shop",
    "counter billing software windows",
    "retail shop inventory and billing software",
  ],
  alternates: { canonical: "/billing-software-for-retail-shop" },
  openGraph: {
    title: `Fast Billing Software for Retail Shops | ${siteConfig.name}`,
    description:
      "Engineered for high-speed Indian retail counters. Sub-second barcode scanning, Khata udhaar ledger, and thermal receipts. Zero monthly charges.",
    url: `${siteConfig.url}/billing-software-for-retail-shop`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Is BirStock suitable for a small single-counter retail store?",
    a: "Yes! BirStock is designed specifically for standalone shops and busy retail counters - including Kirana stores, apparel boutiques, mobile accessories, hardware, and supermarkets. Its lightweight design runs smoothly even on budget Windows PCs and laptops.",
  },
  {
    q: "Can I connect standard barcode scanners and thermal printers?",
    a: "Yes. BirStock is plug-and-play with virtually all USB, Bluetooth, and wireless barcode scanners. It also supports standard 2-inch (58mm) and 3-inch (80mm) thermal receipt printers from brands like TVS, Epson, Posiflex, and Rugtek without installing complex drivers.",
  },
  {
    q: "How does the Customer Khata (Udhaar / Credit) feature work?",
    a: "When billing a regular customer, you can choose 'Credit/Khata' as the payment mode. BirStock updates the customer's balance ledger instantly, allows you to set credit limits, logs partial cash/UPI payments, and lets you view payment history anytime.",
  },
  {
    q: "What is Hold Cart and how does it prevent counter queues?",
    a: "If a shopper forgets their wallet or runs back to grab another product, you don't have to cancel their basket or hold up the line. Simply press 'Hold Cart' to park their items, bill the next customer, and resume the parked basket in one click.",
  },
  {
    q: "How do I import my existing product catalog into BirStock?",
    a: "BirStock provides an Excel/CSV bulk import wizard. You can upload thousands of products with barcodes, item names, cost prices, selling prices, and GST rates in under two minutes.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "BirStock Retail Shop Billing Software",
      operatingSystem: "Windows 10, Windows 11",
      applicationCategory: "PointOfSaleApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      description:
        "Fast desktop point-of-sale and billing software for Indian retail stores with barcode scanning, credit Khata, and stock control.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "280",
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

export default function BillingSoftwareForRetailShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageHero
        eyebrow="Engineered for Busy Indian Retail Counters"
        title="Fast, Reliable Billing Software for Retail Shops"
        description="Serve customers faster, track credit Khata effortlessly, and prevent stock-outs with a 100% offline desktop POS built to handle rush-hour counter crowds."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/contact?type=download" variant="primary" size="lg">
            <Download className="mr-2 h-4 w-4" /> Download Free Trial
          </ButtonLink>
          <ButtonLink href="/contact?type=demo" variant="outline" size="lg">
            Book a 1-on-1 Demo
          </ButtonLink>
        </div>
      </PageHero>

      {/* Retail Feature Pillars */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Counter Superpowers"
            title="Designed for Real-World Retail Counter Speed"
            description="Every keyboard shortcut and button in BirStock is optimized to save seconds per bill so queues keep moving smoothly."
            align="center"
          />

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <ScanBarcode className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Sub-Second Barcode Scanning
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Point and scan. The product immediately lands in the cart with the cursor ready for quantity adjustment. No waiting for server round-trips.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <PauseCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Hold &amp; Resume Cart Multitasking
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  When a shopper steps away to find another item, put their cart on hold with one keystroke. Ring up the next person in line, then resume seamlessly.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Integrated Customer Khata
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Say goodbye to messy paper credit diaries. BirStock keeps an accurate customer ledger with credit limits, payment history, and one-click balance statements.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Stock Limit Guards
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Never accidentally oversell stock you don&apos;t have. BirStock alerts your cashier when an item is running low or reaches zero before the checkout completes.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <Receipt className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Thermal Receipt Customization
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Print sharp 58mm or 80mm receipts with your shop branding, address, phone number, GSTIN, UPI QR code, and custom greeting lines.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Daily Closing &amp; Sales Analytics
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Reconcile cash drawers and card/UPI settlements in minutes at the end of each day. View top-selling items and gross profit margins with ease.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </section>

      {/* Retail Store Types Covered */}
      <section className="border-y border-border bg-surface-muted py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full border border-primary/20 bg-primary-tint px-3 py-1 text-xs font-semibold text-primary-darker">
              Versatile Shop Fit
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Trusted Across Every Retail Segment
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              From neighborhood retail counters to multi-category department stores.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "Supermarkets", link: "/industries/supermarkets" },
              { name: "Kirana Stores", link: "/industries/kirana-grocery" },
              { name: "Electronics & Mobile", link: "/industries/electronics-mobile" },
              { name: "Hardware & Sanitary", link: "/industries/hardware-sanitary" },
              { name: "Apparel & Footwear", link: "/industries/apparel-footwear" },
              { name: "Wholesale Dealers", link: "/industries/wholesale" },
            ].map((ind) => (
              <Link
                key={ind.name}
                href={ind.link}
                className="group flex flex-col items-center justify-center rounded-[var(--radius-lg)] border border-border bg-white p-5 text-center transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <Store className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                <span className="mt-3 text-xs font-semibold text-foreground group-hover:text-primary-darker">
                  {ind.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Questions About Retail Shop Billing"
            description="Find quick answers on counter hardware, customer credit, and catalog imports."
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
