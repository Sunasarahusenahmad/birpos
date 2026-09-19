"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/reveal";

const CLOUD_MONTHLY_COST = 1500;

export function SavingsCalculator() {
  const [years, setYears] = useState(3);

  const cloudCost = useMemo(() => CLOUD_MONTHLY_COST * 12 * years, [years]);

  return (
    <Reveal>
      <div className="rounded-[var(--radius-xl)] border border-border bg-white p-6 shadow-[var(--shadow-card)] sm:p-10">
        <div className="flex flex-col gap-2 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground">
            See what a subscription actually costs
          </h3>
          <p className="mx-auto max-w-lg text-sm text-muted-foreground">
            A typical cloud POS subscription runs around &#8377;{CLOUD_MONTHLY_COST.toLocaleString("en-IN")}
            /month. See how recurring fees accumulate over time compared to BirStock.
          </p>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between text-sm font-medium text-foreground">
            <span>Time horizon</span>
            <span className="text-primary-darker">
              {years} {years === 1 ? "year" : "years"}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-sunken accent-primary"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>1 yr</span>
            <span>5 yrs</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-[var(--radius-md)] border border-border bg-surface-muted p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Typical Cloud POS
            </p>
            <p className="mt-2 font-display text-3xl font-extrabold text-foreground">
              &#8377;{cloudCost.toLocaleString("en-IN")}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">over {years} years, recurring fees</p>
          </div>
          <div className="rounded-[var(--radius-md)] border border-primary-tint-strong bg-primary-tint p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-darker">
              BirStock
            </p>
            <p className="mt-2 font-display text-3xl font-extrabold text-primary-darker">
              Transparent
            </p>
            <p className="mt-1 text-xs text-primary-darker/80">no forced monthly charges</p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Illustrative estimate based on a typical &#8377;{CLOUD_MONTHLY_COST.toLocaleString("en-IN")}/month cloud POS
          plan. Actual competitor pricing varies.
        </p>
      </div>
    </Reveal>
  );
}
