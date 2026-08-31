import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the BirPOS team — request a download, schedule a live demo, ask about pricing, or get support. Based in Banaskantha, Gujarat.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.address.full);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get your counter set up"
        description="Request a download, book a live demo, or ask us anything — we typically reply within one business day."
      />

      <section className="pb-24 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
            <Reveal className="space-y-8">
              <div className="rounded-[var(--radius-lg)] border border-border bg-white p-7">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Reach us directly
                </h2>
                <div className="mt-5 space-y-4 text-sm">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-3 text-muted-foreground hover:text-primary-darker"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {siteConfig.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="flex items-start gap-3 text-muted-foreground hover:text-primary-darker"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {siteConfig.phoneDisplay}
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{siteConfig.address.full}</span>
                  </div>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>Mon–Sat, 10:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border">
                <iframe
                  title="BirPOS office location"
                  src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                  width="100%"
                  height="260"
                  loading="lazy"
                  className="block"
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[var(--radius-xl)] border border-border bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
                <Suspense fallback={<div className="h-[420px]" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
