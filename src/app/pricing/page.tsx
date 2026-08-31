import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SavingsCalculator } from "@/components/pricing/savings-calculator";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { plans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "BirPOS is a one-time purchase, not a monthly subscription. Compare Starter, Growth, and Enterprise plans and request a quote for your store.",
  alternates: { canonical: "/pricing" },
};

const pricingFaqs = [
  {
    q: "Is BirPOS really a one-time purchase?",
    a: "Yes. You purchase a BirPOS license once per business — there's no forced monthly or annual subscription to keep billing.",
  },
  {
    q: "How do I get exact pricing for my store?",
    a: "Pricing depends on the number of counters, stores, and add-on modules you need. Tell us about your business on the contact form and we'll send a tailored quote.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes — request a demo and our team will set you up with a trial build so you can bill real transactions before you commit.",
  },
  {
    q: "Is support included?",
    a: "All plans include support. Growth and Enterprise plans include priority support with faster response times and dedicated onboarding help.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Own it once. Bill forever."
        description="No monthly invoice, no per-user fees, no surprise price hikes. Pick the plan that matches how your store operates."
      />

      <section className="pb-20 sm:pb-24">
        <Container>
          <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <StaggerItem key={plan.id}>
                <div
                  className={cn(
                    "flex h-full flex-col rounded-[var(--radius-xl)] border p-7 sm:p-8",
                    plan.highlighted
                      ? "border-primary bg-white shadow-[var(--shadow-lifted)] lg:-translate-y-3"
                      : "border-border bg-white shadow-[var(--shadow-soft)]"
                  )}
                >
                  {plan.highlighted ? (
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  ) : null}
                  <h2 className="font-display text-xl font-bold text-foreground">{plan.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary-darker">
                    {plan.bestFor}
                  </p>

                  <p className="mt-6 font-display text-2xl font-extrabold text-foreground">
                    Custom Quote
                    <span className="ml-1.5 text-sm font-medium text-muted-foreground">
                      / one-time
                    </span>
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <ButtonLink
                    href={`/contact?type=pricing&plan=${plan.id}`}
                    variant={plan.highlighted ? "primary" : "outline"}
                    className="mt-8 justify-center"
                  >
                    Get a Quote
                  </ButtonLink>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Not sure which plan fits?{" "}
              <a href="/contact?type=demo" className="font-medium text-primary-darker hover:underline">
                Schedule a demo
              </a>{" "}
              and we&apos;ll help you choose.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-muted py-20 sm:py-24">
        <Container className="max-w-2xl">
          <SavingsCalculator />
        </Container>
      </section>

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
    </>
  );
}
