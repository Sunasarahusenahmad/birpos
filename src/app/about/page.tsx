import type { Metadata } from "next";
import { WifiOff, IndianRupee, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { FinalCta } from "@/components/home/final-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.company}, the team behind BirPOS — offline-first POS and inventory software built for Indian retailers and wholesalers.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: WifiOff,
    title: "Offline by default",
    description:
      "We believe billing software should never depend on a Wi-Fi signal. Every core feature in BirPOS is built to work fully offline, first.",
  },
  {
    icon: IndianRupee,
    title: "Ownership over rent",
    description:
      "A shop owner shouldn't pay a monthly fee forever just to use their own cash register. BirPOS is built around one-time ownership.",
  },
  {
    icon: ShieldCheck,
    title: "Your data is yours",
    description:
      "BirPOS stores your business data locally and backs it up to your own Google Drive account — never to a server we control.",
  },
  {
    icon: Users,
    title: "Built for real counters",
    description:
      "Every workflow in BirPOS — from Hold Cart to Khata ledgers — comes from studying how Indian retail and wholesale counters actually operate.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`${siteConfig.company} builds BirPOS`}
        description="We're on a mission to give Indian retailers and wholesalers enterprise-grade billing and inventory software without the internet dependency or the recurring bill."
      />

      <section className="pb-20 sm:pb-24">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                {siteConfig.company} builds desktop software for the shops that keep India&apos;s
                retail and wholesale economy running — kirana stores, electronics retailers,
                apparel outlets, hardware shops, and distributors. BirPOS is our flagship
                product: a 100% offline-first POS, inventory, and billing system designed
                specifically for how these businesses actually work.
              </p>
              <p>
                Most point-of-sale software today assumes a constant, reliable internet
                connection and a recurring monthly bill. For a huge number of Indian
                businesses, neither assumption holds. We built BirPOS around a different set
                of defaults: instant, offline billing; GST compliance baked in from day one;
                a digital Khata ledger that replaces the paper notebook; and automated backups
                to your own Google Drive — all owned outright with a single purchase.
              </p>
              <p>
                We&apos;re a small, focused team, and we build BirPOS for the counter, not the
                boardroom — every feature exists because a real shop owner needed it.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-muted py-20 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
              What we believe
            </h2>
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="flex h-full gap-4 rounded-[var(--radius-lg)] border border-border bg-white p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-primary-tint text-primary-darker">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Where to find us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary-darker hover:underline">
                {siteConfig.email}
              </a>{" "}
              &middot;{" "}
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="font-medium text-primary-darker hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
