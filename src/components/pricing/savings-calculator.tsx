"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { formatINR, getPlan } from "@/data/pricing";
import { cn } from "@/lib/utils";

/** Compares what each BirStock plan costs over a chosen number of years. */
export function SavingsCalculator() {
  const [years, setYears] = useState(3);
  const monthly = getPlan("monthly");
  const yearly = getPlan("yearly");
  const lifetime = getPlan("lifetime");

  const rows = useMemo(() => {
    const data = [
      { id: "monthly", label: `Monthly (${formatINR(monthly.price)}/mo)`, total: monthly.price * 12 * years },
      { id: "yearly", label: `Yearly (${formatINR(yearly.price)}/yr)`, total: yearly.price * years },
      { id: "lifetime", label: `Lifetime (${formatINR(lifetime.price)} once)`, total: lifetime.price },
    ];
    const max = Math.max(...data.map((d) => d.total));
    const min = Math.min(...data.map((d) => d.total));
    return data.map((d) => ({ ...d, pct: (d.total / max) * 100, best: d.total === min }));
  }, [years, monthly.price, yearly.price, lifetime.price]);

  const breakEvenVsMonthly = Math.ceil(lifetime.price / monthly.price);

  return (
    <Reveal>
      <div className="rounded-[var(--radius-xl)] border border-border bg-white p-6 shadow-[var(--shadow-card)] sm:p-10">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground">Which plan costs less for you?</h2>
          <p className="mx-auto max-w-lg text-sm text-muted-foreground">
            Slide to the number of years you expect to use BirStock and compare the total you would pay on each plan.
          </p>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between text-sm font-medium text-foreground">
            <label htmlFor="years">Time horizon</label>
            <span className="text-primary-darker">
              {years} {years === 1 ? "year" : "years"}
            </span>
          </div>
          <input
            id="years"
            type="range"
            min={1}
            max={7}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-sunken accent-primary"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>1 yr</span>
            <span>7 yrs</span>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {rows.map((row) => (
            <div key={row.id}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{row.label}</span>
                <span className={cn("font-display font-bold", row.best ? "text-primary-darker" : "text-foreground")}>
                  {formatINR(row.total)}
                  {row.best ? <span className="ml-2 text-xs font-semibold">Lowest</span> : null}
                </span>
              </div>
              <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-surface-sunken">
                <div
                  className={cn("h-full rounded-full transition-all duration-500", row.best ? "bg-primary" : "bg-border-strong")}
                  style={{ width: `${Math.max(row.pct, 4)}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Lifetime costs less than Monthly after about {breakEvenVsMonthly} months. Yearly includes the BirStock Mobile App
          mobile app; on Lifetime it is an optional add-on, and future feature modules are priced separately.
        </p>
      </div>
    </Reveal>
  );
}
