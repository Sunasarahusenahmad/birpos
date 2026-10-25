import { FileText, BarChart3, Workflow, Puzzle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { customizedClients } from "@/data/clients";

const points = [
  { icon: FileText, title: "Your invoice & print formats", desc: "Bill and receipt layouts designed around your business." },
  { icon: BarChart3, title: "Reports you actually need", desc: "Custom reports and summaries for how you track the business." },
  { icon: Workflow, title: "Your workflow", desc: "Screens, fields and steps adjusted to the way your team works." },
  { icon: Puzzle, title: "Industry-specific modules", desc: "Extra features built for your trade, on top of standard BirStock." },
];

/** "BirStock customised for your business" pitch, with real client examples. */
export function CustomizationSection({ className }: { className?: string }) {
  const examples = customizedClients.map((c) => c.name).join(", ");
  return (
    <section className={className ?? "py-20 sm:py-28"}>
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 rounded-[var(--radius-xl)] border border-border bg-white p-7 shadow-[var(--shadow-card)] sm:p-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Customisation</span>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
              BirStock, customised for your business
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every business works differently. If you need something beyond the standard plans, our team can
              customise BirStock to fit your exact process
              {examples ? (
                <>
                  {" "}
                  - just as we built a customised version for <strong className="text-foreground">{examples}</strong>
                </>
              ) : null}
              .
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Customisation is quoted per project based on your requirements.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?type=customization">Discuss your requirements</ButtonLink>
              <ButtonLink href="/custom-billing-software" variant="outline">
                Learn more
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-[var(--radius-md)] border border-border bg-surface-muted p-5">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
