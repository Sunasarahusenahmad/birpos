import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const industries = [
  { label: "Supermarkets", href: "/industries/supermarkets" },
  { label: "Kirana & Grocery Stores", href: "/industries/kirana-grocery" },
  { label: "Electronics & Mobile Retailers", href: "/industries/electronics-mobile" },
  { label: "Hardware & Sanitary Shops", href: "/industries/hardware-sanitary" },
  { label: "Apparel & Footwear", href: "/industries/apparel-footwear" },
  { label: "Wholesale Distributors", href: "/industries/wholesale" },
];

export function IndustryStrip() {
  return (
    <section className="border-y border-border bg-surface-muted py-8">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Built for every kind of Indian retail &amp; wholesale counter
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {industries.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary-darker hover:underline"
              >
                {label} &rarr;
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
