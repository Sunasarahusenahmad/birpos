import { Store, PackagePlus, ScanBarcode, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  {
    icon: Store,
    title: "Set up your store",
    description:
      "Add your store name, GSTIN, logo, and brand color, and configure your default GST rates and invoice templates — in minutes.",
  },
  {
    icon: PackagePlus,
    title: "Bring in your stock",
    description:
      "Catalog products with barcodes and pricing, then record supplier purchases — stock and dues update automatically.",
  },
  {
    icon: ScanBarcode,
    title: "Start billing instantly",
    description:
      "Scan or search, apply discounts, take payment, and print a GST-compliant receipt — all with zero internet dependency.",
  },
  {
    icon: ShieldCheck,
    title: "Stay backed up, automatically",
    description:
      "BirPOS quietly backs up your data locally and to your own Google Drive on the schedule you set — every single day.",
  },
];

export function WorkflowShowcase() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From install to your first bill in under an hour"
          description="No servers to configure, no monthly onboarding calls — BirPOS is designed to get a real shop counter live fast."
        />

        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-border sm:block lg:left-1/2 lg:block" />

          <div className="flex flex-col gap-10 lg:hidden">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative flex gap-5 pl-0 sm:pl-16">
                  <span className="absolute left-0 top-0 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-primary-tint text-primary-darker shadow-[var(--shadow-soft)] sm:flex">
                    <step.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary-darker sm:hidden">
                    <step.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-darker">
                      Step {i + 1}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-col lg:gap-14">
            {steps.map((step, i) => {
              const leftSide = i % 2 === 0;
              return (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
                    <div className={leftSide ? "text-right" : "order-3 text-left"}>
                      {leftSide ? <StepBody i={i} step={step} align="right" /> : null}
                    </div>
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-primary-tint text-primary-darker shadow-[var(--shadow-soft)]">
                      <step.icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <div className={leftSide ? "order-3 text-left" : "text-right"}>
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
  return (
    <div className={align === "right" ? "ml-auto max-w-sm" : "mr-auto max-w-sm"}>
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-darker">
        Step {i + 1}
      </p>
      <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
    </div>
  );
}
