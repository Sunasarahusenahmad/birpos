import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

const rows = [
  { label: "Works with no internet connection", cloud: false, birstock: true },
  { label: "Zero recurring subscription fees", cloud: false, birstock: true },
  { label: "Data stays 100% private on your machine", cloud: false, birstock: true },
  { label: "Automated backup to your own Google Drive", cloud: false, birstock: true },
  { label: "Instant, lag-free barcode billing", cloud: false, birstock: true },
  { label: "Hold cart & multi-counter billing", cloud: false, birstock: true },
  { label: "Multi-year financial isolation with carry-forward", cloud: false, birstock: true },
];

export function Comparison() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="BirStock vs. Cloud POS"
          title="One-time ownership beats another monthly bill"
          description="Cloud POS tools are built around a subscription. BirStock is built around your counter."
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
