"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type Shot = { src: string; alt: string; w: number; h: number };
type Tab = { id: string; label: string; title: string; body: string; href: string; shots: Shot[] };

const desktop = (src: string, alt: string): Shot => ({ src, alt, w: 1600, h: 1000 });
const phone = (src: string, alt: string): Shot => ({ src, alt, w: 720, h: 1608 });

const tabs: Tab[] = [
  {
    id: "billing",
    label: "Fast billing",
    title: "Scan. Scan. Print. Next customer.",
    body: "Quick POS is built for the keyboard and barcode scanner. GST, discounts and change to return are calculated as you go, and Hold Cart lets you park a bill while you serve the next customer.",
    href: "/features/pos-billing",
    shots: [desktop("/product/pos-quick.webp", "BirStock Quick POS bill with four items, GST and total")],
  },
  {
    id: "touch",
    label: "Touch POS",
    title: "Tap-to-bill for touch screens",
    body: "A product grid with live stock counts, categories, a billing cart, and Cash, Card, UPI, Wallet or Credit payment, all on one screen.",
    href: "/features/pos-billing",
    shots: [desktop("/product/pos-touch.webp", "BirStock Touch POS with product grid and billing cart")],
  },
  {
    id: "dashboard",
    label: "Dashboard",
    title: "Your whole shop at a glance",
    body: "Today's sales, today's profit, pending dues and low stock, the moment you open BirStock.",
    href: "/features/reports-analytics",
    shots: [desktop("/product/dashboard.webp", "BirStock dashboard with today's sales, profit, dues and sales trend")],
  },
  {
    id: "khata",
    label: "Customer Khata",
    title: "Replace the paper Khata notebook",
    body: "Every credit sale and payment in one ledger per customer, with the running balance and a downloadable PDF statement.",
    href: "/features/customer-khata",
    shots: [desktop("/product/khata-ledger.webp", "BirStock customer Khata ledger with sales, payments and balance")],
  },
  {
    id: "stock",
    label: "Stock alerts",
    title: "Know what to reorder before it runs out",
    body: "Low and out-of-stock items are flagged automatically, with stock valuation and CSV or PDF export.",
    href: "/features/inventory-management",
    shots: [desktop("/product/low-stock.webp", "BirStock low stock alert listing items and stock valuation")],
  },
  {
    id: "reports",
    label: "Reports",
    title: "Sales, profit, purchases and expenses",
    body: "Pick any period and see the numbers that matter, then download them as PDF or CSV for your CA.",
    href: "/features/reports-analytics",
    shots: [desktop("/product/reports.webp", "BirStock reports overview with sales, profit, purchases and expenses")],
  },
  {
    id: "mobile",
    label: "Mobile App",
    title: "Bill from anywhere on the shop floor",
    body: "Pair your phone with the desktop over shop Wi-Fi and create bills, check stock and see dues. Included in Pro and Lifetime plans.",
    href: "/features/mobile-app",
    shots: [
      phone("/product/app-home.webp", "BirStock Mobile App home with today's sales and quick actions"),
      phone("/product/app-new-bill.webp", "BirStock Mobile App bill with three items and Charge button"),
    ],
  },
];

export function ProductTour() {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active)!;
  const isPhone = tab.shots[0].w < tab.shots[0].h;

  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="See the real product"
          title="Don't take our word for it. Look at it."
          description="These are real BirStock screens with sample shop data. What you see here is exactly what you install."
        />

        <div
          role="tablist"
          aria-label="BirStock screens"
          className="-mx-4 mt-12 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={t.id === active}
              onClick={() => setActive(t.id)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                t.id === active
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.8fr_2fr]"
          >
            <div className="order-2 lg:order-1">
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {tab.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{tab.body}</p>
              <Link
                href={tab.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-darker hover:text-primary"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div
              className={cn(
                "order-1 lg:order-2",
                isPhone && "flex justify-center gap-4 sm:gap-8"
              )}
            >
              {tab.shots.map((s) =>
                isPhone ? (
                  <figure
                    key={s.src}
                    className="w-[44%] max-w-[240px] overflow-hidden rounded-[1.6rem] border-[6px] border-foreground bg-foreground shadow-[var(--shadow-card)]"
                  >
                    <Image src={s.src} alt={s.alt} width={s.w} height={s.h} className="h-auto w-full rounded-[1.1rem]" />
                  </figure>
                ) : (
                  <figure
                    key={s.src}
                    className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-[var(--shadow-card)]"
                  >
                    <Image src={s.src} alt={s.alt} width={s.w} height={s.h} className="h-auto w-full" />
                  </figure>
                )
              )}
              <p className={cn("mt-3 text-center text-xs text-muted-foreground", isPhone && "sr-only")}>
                Real app screen · sample data
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
