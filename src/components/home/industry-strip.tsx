import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const industries = [
  "Kirana & Grocery Stores",
  "Electronics & Mobile Retailers",
  "Hardware & Sanitary Shops",
  "Apparel & Footwear",
  "Supermarkets",
  "Wholesale Distributors",
];

export function IndustryStrip() {
  return (
    <section className="border-y border-border bg-surface-muted py-8">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Built for every kind of counter
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {industries.map((label) => (
              <span
                key={label}
                className="text-sm font-medium text-muted-foreground/90"
              >
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
