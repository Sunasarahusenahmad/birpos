import { Store, PackagePlus, ScanBarcode, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Store,
    title: "Set up your store",
    description:
      "Add your store name, GSTIN, logo, and brand color, and configure your default GST rates and invoice templates - in minutes.",
  },
  {
    icon: PackagePlus,
    title: "Bring in your stock",
    description:
      "Catalog products with barcodes and pricing, then record supplier purchases - stock and dues update automatically.",
  },
  {
    icon: ScanBarcode,
    title: "Start billing instantly",
    description:
      "Scan or search, apply discounts, take payment, and print a GST-compliant receipt - all with zero internet dependency.",
  },
  {
    icon: ShieldCheck,
    title: "Stay backed up, automatically",
    description:
      "BirStock quietly backs up your data locally and to your own Google Drive on the schedule you set - every single day.",
  },
];

export function WorkflowShowcase() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From install to your first bill in under an hour"
          description="No servers to configure, no monthly onboarding calls - BirStock is designed to get a real shop counter live fast."
        />

        <div className="relative mt-16">
          {/* Center connector line */}
          <div className="absolute left-[28px] top-4 bottom-4 hidden w-0.5 -translate-x-1/2 bg-border sm:block lg:left-1/2" />

          {/* Mobile stacked layout */}
          <div className="flex flex-col gap-8 lg:hidden">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative flex gap-5 pl-0 sm:pl-20">
                  <span className="absolute left-0 top-0 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-primary-tint text-primary-darker shadow-[var(--shadow-soft)] sm:flex">
                    <step.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary-darker sm:hidden">
                    <step.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="flex-1 rounded-[var(--radius-xl)] border border-border bg-white p-5 shadow-[var(--shadow-soft)]">
                    <span className="inline-flex items-center rounded-full bg-primary-tint px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-primary-darker">
                      Step {i + 1}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Desktop alternating 3-column timeline */}
          <div className="hidden lg:flex lg:flex-col lg:gap-12">
            {steps.map((step, i) => {
              const leftSide = i % 2 === 0;
              return (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
                    {/* Left column */}
                    <div className="text-right">
                      {leftSide ? <StepBody i={i} step={step} align="right" /> : null}
                    </div>

                    {/* Center icon */}
                    <div className="flex justify-center">
                      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-primary-tint text-primary-darker shadow-[var(--shadow-soft)]">
                        <step.icon className="h-6 w-6" strokeWidth={2} />
                      </span>
                    </div>

                    {/* Right column */}
                    <div className="text-left">
                      {!leftSide ? <StepBody i={i} step={step} align="left" /> : null}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function StepBody({
  i,
  step,
  align,
}: {
  i: number;
  step: (typeof steps)[number];
  align: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition-all hover:border-primary/40 hover:shadow-[var(--shadow-card)]",
        isRight ? "ml-auto max-w-md text-right" : "mr-auto max-w-md text-left"
      )}
    >
      <div className={cn("flex items-center gap-2", isRight ? "justify-end" : "justify-start")}>
        <span className="inline-flex items-center rounded-full bg-primary-tint px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-primary-darker">
          Step {i + 1}
        </span>
      </div>
      <h3 className="mt-2 font-display text-lg font-bold text-foreground">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
    </div>
  );
}
