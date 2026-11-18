import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

/** Real BirStock screens (demo data) framed as a desktop window + phone. */
export function HeroShowcase() {
  return (
    <Reveal delay={0.2} className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-primary/15 blur-3xl" />

      {/* Desktop window */}
      <figure className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface-muted px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate text-[11px] font-medium text-muted-foreground">
            BirStock · Touch POS Counter
          </span>
        </div>
        <Image
          src="/product/pos-touch.webp"
          alt="BirStock Touch POS screen with product grid, billing cart, GST total and payment modes"
          width={1600}
          height={1000}
          priority
          className="h-auto w-full"
        />
      </figure>

      {/* Phone */}
      <figure className="absolute -bottom-10 -left-3 w-[26%] min-w-[92px] max-w-[170px] overflow-hidden rounded-[1.4rem] border-[5px] border-foreground bg-foreground shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] sm:-left-8">
        <Image
          src="/product/app-new-bill.webp"
          alt="BirStock Mobile App creating a bill on a phone"
          width={720}
          height={1608}
          priority
          className="h-auto w-full rounded-[1rem]"
        />
      </figure>

      <figcaption className="absolute -bottom-9 right-0 rounded-full border border-border bg-white/90 px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-sm backdrop-blur">
        Real app screens · sample data
      </figcaption>
    </Reveal>
  );
}
