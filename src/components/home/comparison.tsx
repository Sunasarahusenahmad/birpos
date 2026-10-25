import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

const rows = [
  { label: "Day-to-day billing during internet outages", cloud: false, birstock: true },
  { label: "One-time lifetime licence option", cloud: false, birstock: true },
  { label: "Business records stored on your own PC", cloud: false, birstock: true },
  { label: "Backup to your own Google Drive", cloud: false, birstock: true },
  { label: "Barcode billing without server round-trips", cloud: false, birstock: true },
];

export function Comparison() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="BirStock vs. Cloud POS"
          title="Own your software and your data"
          description="Typical cloud POS tools rent you software and keep your data on their servers. BirStock runs on your PC - and you can own it outright."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-border bg-surface-muted px-5 py-4 sm:gap-6 sm:px-8">
              <span className="text-sm font-semibold text-muted-foreground">Capability</span>
              <span className="w-20 text-center text-sm font-semibold text-muted-foreground sm:w-28">
                Cloud POS
              </span>
              <span className="w-20 text-center text-sm font-semibold text-primary-darker sm:w-28">
                BirStock
              </span>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.label}
                className={
                  "grid grid-cols-[1fr_auto_auto] items-center gap-3 px-5 py-4 sm:gap-6 sm:px-8" +
                  (i !== rows.length - 1 ? " border-b border-border" : "")
                }
              >
                <span className="text-sm text-foreground sm:text-[0.925rem]">{row.label}</span>
                <span className="flex w-20 justify-center sm:w-28">
                  <X className="h-5 w-5 text-danger/70" />
                </span>
                <span className="flex w-20 justify-center sm:w-28">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-tint text-primary-darker">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
