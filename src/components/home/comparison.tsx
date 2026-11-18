import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { formatINR, getPlan } from "@/data/pricing";
import { cn } from "@/lib/utils";

const columns = ["Mobile-first billing apps", "Traditional accounting ERPs", "BirStock"] as const;

const rows: { label: string; values: [string, string, string] }[] = [
  {
    label: "How you pay",
    values: [
      "Yearly subscription, renew to keep using",
      "Licence plus yearly AMC, often quoted through dealers",
      `${formatINR(getPlan("basic").price)}/year, or own it for a one-time ${formatINR(
        getPlan("lifetime").price
      )}. All prices published.`,
    ],
  },
  {
    label: "Where your records live",
    values: [
      "Synced to the vendor's cloud",
      "On your PC",
      "On your PC, backed up to your own Google Drive",
    ],
  },
  {
    label: "Built for",
    values: [
      "Sending invoices from a phone",
      "Accountants and bookkeeping",
      "A busy counter: barcode, touch billing, Hold Cart",
    ],
  },
  {
    label: "Billing when internet is down",
    values: ["Varies by app and plan", "Yes", "Yes, after licence activation"],
  },
  {
    label: "Getting started",
    values: [
      "Quick, but limited for a full counter",
      "Usually needs training or a dealer visit",
      "Live the same day, with free remote setup help",
    ],
  },
  {
    label: "Billing from your phone",
    values: [
      "Yes",
      "Usually an extra add-on",
      "Mobile App included in Pro & Lifetime (over shop Wi-Fi)",
    ],
  },
];

export function Comparison() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why shops switch to BirStock"
          title="The control of desktop software. The simplicity of an app."
          description="Shop owners in India usually choose between a phone billing app and a heavy accounting ERP. BirStock was built to be the option in between, and to let you own it."
        />

        <Reveal delay={0.1} className="mt-14">
          {/* Desktop / tablet table */}
          <div className="hidden overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-[var(--shadow-card)] md:block">
            <div className="grid grid-cols-[1fr_1.2fr_1.2fr_1.4fr] border-b border-border bg-surface-muted">
              <span className="px-5 py-4 text-sm font-semibold text-muted-foreground" />
              {columns.map((c) => (
                <span
                  key={c}
                  className={cn(
                    "px-5 py-4 text-sm font-semibold",
                    c === "BirStock"
                      ? "bg-primary text-white"
                      : "text-muted-foreground"
                  )}
                >
                  {c}
                </span>
              ))}
            </div>
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={cn(
                  "grid grid-cols-[1fr_1.2fr_1.2fr_1.4fr]",
                  i !== rows.length - 1 && "border-b border-border"
                )}
              >
                <span className="px-5 py-4 text-sm font-semibold text-foreground">{row.label}</span>
                <span className="px-5 py-4 text-sm text-muted-foreground">{row.values[0]}</span>
                <span className="px-5 py-4 text-sm text-muted-foreground">{row.values[1]}</span>
                <span className="flex gap-2 bg-primary-tint/60 px-5 py-4 text-sm font-medium text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                  {row.values[2]}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {rows.map((row) => (
              <div
                key={row.label}
                className="rounded-[var(--radius-lg)] border border-border bg-white p-5 shadow-[var(--shadow-soft)]"
              >
                <p className="font-display text-base font-semibold text-foreground">{row.label}</p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="text-xs font-semibold text-muted-foreground">{columns[0]}</dt>
                    <dd className="text-muted-foreground">{row.values[0]}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-muted-foreground">{columns[1]}</dt>
                    <dd className="text-muted-foreground">{row.values[1]}</dd>
                  </div>
                  <div className="rounded-[var(--radius-sm)] bg-primary-tint p-3">
                    <dt className="text-xs font-bold text-primary-darker">BirStock</dt>
                    <dd className="font-medium text-foreground">{row.values[2]}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            Comparison is a general summary of popular billing software categories in India based on
            publicly listed plans, as of November 2026. Features and pricing vary by vendor and plan.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
