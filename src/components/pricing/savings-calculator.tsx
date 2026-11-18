"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { LIFETIME_FREE_SUPPORT_MONTHS, SUPPORT_RENEWAL_PRICE, formatINR, getPlan } from "@/data/pricing";
import { cn } from "@/lib/utils";

/** Compares what each BirStock plan costs over a chosen number of years. */
export function SavingsCalculator() {
  const [years, setYears] = useState(3);
  const basic = getPlan("basic");
  const pro = getPlan("pro");
  const lifetime = getPlan("lifetime");

  const rows = useMemo(() => {
    // Yearly renewals needed to keep support running after the free months end.
    const renewals = Math.max(0, Math.ceil((years * 12 - LIFETIME_FREE_SUPPORT_MONTHS) / 12));
    const data = [
      { id: "basic", label: `Basic (${formatINR(basic.price)}/yr)`, total: basic.price * years },
      { id: "pro", label: `Pro (${formatINR(pro.price)}/yr)`, total: pro.price * years },
      { id: "lifetime", label: `Lifetime (${formatINR(lifetime.price)} once)`, total: lifetime.price },
      {
        id: "lifetime-support",
        label: `Lifetime + support renewals (${formatINR(SUPPORT_RENEWAL_PRICE)}/yr)`,
        total: lifetime.price + renewals * SUPPORT_RENEWAL_PRICE,
      },
    ];
    const max = Math.max(...data.map((d) => d.total));
    const min = Math.min(...data.map((d) => d.total));
    return data.map((d) => ({ ...d, pct: (d.total / max) * 100, best: d.total === min }));
  }, [years, basic.price, pro.price, lifetime.price]);

  const breakEvenVsPro = Math.ceil(lifetime.price / pro.price);

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
          Lifetime costs less than Pro after about {breakEvenVsPro} years. Pro and Lifetime both include the BirStock
          Mobile App; Basic does not. Lifetime includes {LIFETIME_FREE_SUPPORT_MONTHS} months of support, then support is
          optional at {formatINR(SUPPORT_RENEWAL_PRICE)}/year.
        </p>
      </div>
    </Reveal>
  );
}
