import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureIcon } from "@/components/ui/feature-icon";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import type { Feature } from "@/data/features";

const items: { icon: Feature["icon"]; title: string; desc: string; href: string }[] = [
  {
    icon: "mobile",
    title: "BirStock Mobile App",
    desc: "Android & iOS app - pair over shop Wi-Fi with a QR code to make sales and check stock, customers and invoices.",
    href: "/features/mobile-app",
  },
  {
    icon: "inventory",
    title: "Excel product import & export",
    desc: "Load your whole catalogue from a spreadsheet in one go, and export it for audits.",
    href: "/features/inventory-management",
  },
  {
    icon: "expenses",
    title: "Expenses & other income",
    desc: "Record rent, salaries and other costs - your report totals include them.",
    href: "/features/expenses-income",
  },
  {
    icon: "returns",
    title: "Sales & purchase returns",
    desc: "Customer returns and supplier debit notes adjust stock and balances automatically.",
    href: "/features/sales-purchase-returns",
  },
  {
    icon: "security",
    title: "PIN App Lock with email OTP reset",
    desc: "Lock BirStock with a PIN at startup or on demand, and reset a forgotten PIN by email OTP.",
    href: "/features/security",
  },
  {
    icon: "company",
    title: "Multiple companies",
    desc: "Run more than one firm from one BirStock - each with its own separate data.",
    href: "/features/multi-company",
  },
];

export function BeyondBilling() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Beyond billing"
          title="Everything else your shop needs"
          description="Android & iOS mobile app, Excel imports, expenses, returns, App Lock and multi-company - built into BirStock."
        />
        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              >
                <FeatureIcon icon={item.icon} />
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary-darker">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
