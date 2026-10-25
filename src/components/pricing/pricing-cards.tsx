import { Check, Minus, Smartphone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { TAX_LABEL, formatINR, plans, yearlySaving } from "@/data/pricing";
import { cn } from "@/lib/utils";

/** The three plan cards. `compact` trims the feature lists for the home page teaser. */
export function PricingCards({ compact = false }: { compact?: boolean }) {
  const saving = yearlySaving();

  return (
    <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
      {plans.map((plan) => {
        const features = compact ? plan.features.slice(0, 5) : plan.features;
        return (
          <StaggerItem key={plan.id}>
            <div
              id={`plan-${plan.id}`}
              className={cn(
                "relative flex h-full flex-col rounded-[var(--radius-xl)] border p-7 sm:p-8",
                plan.highlighted
                  ? "border-primary bg-white shadow-[var(--shadow-lifted)] ring-1 ring-primary lg:-translate-y-3"
                  : "border-border bg-white shadow-[var(--shadow-soft)]"
              )}
            >
              {plan.badge ? (
                <span
                  className={cn(
                    "mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
                    plan.highlighted ? "bg-primary text-white" : "bg-primary-tint text-primary-darker"
                  )}
                >
                  {plan.includesMobile ? <Smartphone className="h-3.5 w-3.5" /> : null}
                  {plan.badge}
                </span>
              ) : (
                <span className="mb-4 h-[26px]" aria-hidden />
              )}

              <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-extrabold tracking-tight text-foreground">
                  {formatINR(plan.price)}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {plan.period} <span className="text-xs">({TAX_LABEL})</span>
                </span>
              </p>
              <p className="mt-1.5 text-xs font-medium text-primary-darker">
                {plan.priceNote}
                {plan.id === "yearly" ? ` · save ${saving.percent}% vs monthly` : null}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Best for: {plan.bestFor}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
                {!compact
                  ? plan.notIncluded?.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Minus className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))
                  : null}
              </ul>

              <ButtonLink
                href={`/contact?type=pricing&plan=${plan.id}`}
                variant={plan.highlighted ? "primary" : "outline"}
                className="mt-8 justify-center"
              >
                {plan.cta}
              </ButtonLink>
            </div>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}
