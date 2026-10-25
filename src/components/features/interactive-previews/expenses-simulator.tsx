"use client";

import { useState } from "react";
import { Wallet, Plus, ArrowDownLeft, ArrowUpRight } from "lucide-react";

type Entry = { id: number; kind: "expense" | "income"; label: string; amount: number };

const SAMPLE_GROSS_PROFIT = 48500;

export function ExpensesSimulator() {
  const [entries, setEntries] = useState<Entry[]>([
    { id: 1, kind: "expense", label: "Shop rent", amount: 12000 },
    { id: 2, kind: "expense", label: "Electricity bill", amount: 3200 },
    { id: 3, kind: "income", label: "Scrap / carton sale", amount: 650 },
  ]);
  const [kind, setKind] = useState<Entry["kind"]>("expense");
  const [label, setLabel] = useState("Staff salary");
  const [amount, setAmount] = useState(9000);

  const expenses = entries.filter((e) => e.kind === "expense").reduce((s, e) => s + e.amount, 0);
  const income = entries.filter((e) => e.kind === "income").reduce((s, e) => s + e.amount, 0);
  const net = SAMPLE_GROSS_PROFIT - expenses + income;

  const add = () => {
    if (!label.trim() || amount <= 0) return;
    setEntries((list) => [{ id: Date.now(), kind, label: label.trim(), amount }, ...list]);
  };

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white shadow-[var(--shadow-lifted)]">
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-muted px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
            <Wallet className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground sm:text-sm">Expenses &amp; Other Income</h4>
            <p className="text-[0.68rem] text-muted-foreground">Sample figures · illustrative demo</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-[1fr_1.1fr] md:divide-x md:divide-y-0">
        <div className="space-y-3 p-4 sm:p-6">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Add an entry</span>
          <div className="grid grid-cols-2 gap-2">
            {(["expense", "income"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKind(k)}
                className={`rounded-md border py-1.5 text-xs font-bold ${
                  kind === k ? "border-primary bg-primary-tint text-primary-darker" : "border-border text-muted-foreground"
                }`}
              >
                {k === "expense" ? "Expense" : "Other income"}
              </button>
            ))}
          </div>
          <label className="block text-[0.7rem] font-bold uppercase text-muted-foreground">
            Description
            <input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="mt-1 w-full rounded border border-border px-3 py-1.5 text-xs font-semibold normal-case text-foreground focus:border-primary focus:outline-none"
            />
          </label>
          <label className="block text-[0.7rem] font-bold uppercase text-muted-foreground">
            Amount (&#8377;)
            <input
              type="number"
              min={0}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mt-1 w-full rounded border border-border px-3 py-1.5 font-mono text-xs font-bold text-foreground focus:border-primary focus:outline-none"
            />
          </label>
          <button
            type="button"
            onClick={add}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-primary py-2 text-xs font-bold text-white hover:bg-primary-dark"
          >
            <Plus className="h-3.5 w-3.5" /> Save entry
          </button>
        </div>

        <div className="space-y-4 bg-slate-50/60 p-4 sm:p-6">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg bg-white p-2.5 ring-1 ring-border">
              <p className="text-[0.62rem] font-semibold uppercase text-muted-foreground">Expenses</p>
              <p className="font-mono text-sm font-bold text-danger">&#8377;{expenses.toLocaleString("en-IN")}</p>
            </div>
            <div className="rounded-lg bg-white p-2.5 ring-1 ring-border">
              <p className="text-[0.62rem] font-semibold uppercase text-muted-foreground">Other income</p>
              <p className="font-mono text-sm font-bold text-emerald-700">&#8377;{income.toLocaleString("en-IN")}</p>
            </div>
            <div className="rounded-lg bg-primary-tint p-2.5">
              <p className="text-[0.62rem] font-semibold uppercase text-primary-darker">Net (sample)</p>
              <p className="font-mono text-sm font-bold text-primary-darker">&#8377;{net.toLocaleString("en-IN")}</p>
            </div>
          </div>
          <p className="text-[0.65rem] text-muted-foreground">
            Net = sample gross profit &#8377;{SAMPLE_GROSS_PROFIT.toLocaleString("en-IN")} − expenses + other income
          </p>
          <ul className="max-h-48 space-y-1.5 overflow-y-auto">
            {entries.map((e) => (
              <li key={e.id} className="flex items-center justify-between rounded-md bg-white px-3 py-2 text-xs ring-1 ring-border">
                <span className="flex items-center gap-2">
                  {e.kind === "expense" ? (
                    <ArrowUpRight className="h-3.5 w-3.5 text-danger" />
                  ) : (
                    <ArrowDownLeft className="h-3.5 w-3.5 text-emerald-600" />
                  )}
                  {e.label}
                </span>
                <span className="font-mono font-semibold">&#8377;{e.amount.toLocaleString("en-IN")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
