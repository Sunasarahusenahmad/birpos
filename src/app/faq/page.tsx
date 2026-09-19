import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { ButtonLink } from "@/components/ui/button";
import { faqCategories, flatFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about BirStock - offline billing, GST invoicing, customer Khata, Google Drive backup, hardware compatibility, and pricing.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: flatFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Support"
        title="Frequently asked questions"
        description="Everything shop owners ask us before switching to BirStock. Still stuck? Reach out directly."
      />

      <section className="pb-20 sm:pb-28">
        <Container className="max-w-3xl">
          <div className="space-y-14">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <Reveal>
                  <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {cat.category}
                  </h2>
                </Reveal>
                <div className="mt-6">
                  <FaqAccordion items={cat.items} defaultOpenIndex={-1} />
                </div>
              </div>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-16 rounded-[var(--radius-lg)] border border-border bg-surface-muted p-8 text-center">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Still have a question?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Email us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary-darker hover:underline">
                {siteConfig.email}
              </a>{" "}
              or send a message and we&apos;ll get back to you.
            </p>
            <div className="mt-6 flex justify-center">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
