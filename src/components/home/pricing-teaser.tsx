import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { PricingCards } from "@/components/pricing/pricing-cards";

export function PricingTeaser() {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple plans. Pay yearly, or once."
          description="Every plan includes desktop billing with full support. Pro and Lifetime add every feature and the BirStock Mobile App."
        />
        <div className="mt-14">
          <PricingCards compact />
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/pricing" variant="secondary">
            Compare all plan details
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
