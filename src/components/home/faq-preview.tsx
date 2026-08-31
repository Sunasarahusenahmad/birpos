import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { flatFaqs } from "@/data/faqs";

export function FaqPreview() {
  const items = flatFaqs.slice(0, 6);

  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions, answered"
          title="Everything you're probably wondering"
          description="Can't find what you're looking for? Reach out and we'll answer directly."
        />

        <div className="mt-14">
          <FaqAccordion items={items} />
        </div>

        <Reveal delay={0.1} className="mt-8 flex justify-center">
          <ButtonLink href="/faq" variant="secondary">
            View all FAQs
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
