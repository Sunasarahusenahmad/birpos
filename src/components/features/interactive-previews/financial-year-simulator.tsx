"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Lock,
  ArrowRight,
  CheckCircle2,
  Database,
  ShieldCheck,
  RotateCw,
  FolderArchive,
} from "lucide-react";

export function FinancialYearSimulator() {
  const [activeYear, setActiveYear] = useState<"2024_25" | "2025_26">("2024_25");
  const [closingDate, setClosingDate] = useState("31-03-2025");
  const [isProcessing, setIsProcessing] = useState(false);
  const [createdNewYear, setCreatedNewYear] = useState(false);
  const [securityPin, setSecurityPin] = useState("••••");

  const handleCreateNewYear = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCreatedNewYear(true);
      setActiveYear("2025_26");
    }, 1200);
  };

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white shadow-[var(--shadow-lifted)]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-muted px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
            <CalendarDays className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground sm:text-sm">
              BirStock Financial Year Isolation &amp; Carry-Forward Engine
            </h4>
            <p className="text-[0.68rem] text-muted-foreground">
              Automated opening balances transfer with audited past year tamper-lock
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-primary-tint px-2.5 py-0.5 text-xs font-bold text-primary-darker">
            Active: FY {activeYear === "2024_25" ? "2024-2025" : "2025-2026"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-[1.1fr_1.1fr] lg:divide-x lg:divide-y-0">
        {/* Left Column: Transition Workflow */}
        <div className="p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Financial Year Rollover Setup
            </span>
            <span className="text-[0.68rem] font-bold text-emerald-700">1-Click Automation</span>
          </div>

          <div className="rounded-lg border border-border bg-white p-3.5 space-y-3 shadow-xs">
            <div>
              <label className="text-[0.7rem] font-bold uppercase text-muted-foreground">
                Target Closing Date
              </label>
              <input
                type="text"
                value={closingDate}
                onChange={(e) => setClosingDate(e.target.value)}
                className="mt-1 w-full rounded border border-border px-3 py-1.5 text-xs font-bold text-foreground focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[0.7rem] font-bold uppercase text-muted-foreground">
                Master Security PIN Authorization
              </label>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type="password"
                  value={securityPin}
                  onChange={(e) => setSecurityPin(e.target.value)}
                  className="w-full rounded border border-border px-3 py-1.5 text-xs font-mono text-foreground focus:border-primary focus:outline-none"
                />
                <span className="rounded bg-surface-muted px-2 py-1 text-[0.65rem] font-semibold text-muted-foreground">
                  Required
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCreateNewYear}
              disabled={isProcessing || createdNewYear}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-xs font-bold text-white transition-all hover:bg-primary-dark disabled:opacity-60"
            >
              {isProcessing ? (
                <>
                  <RotateCw className="h-4 w-4 animate-spin" /> Transferring Balances…
                </>
              ) : createdNewYear ? (
                "✓ FY 2025-26 Created & Active"
              ) : (
                "Close Year & Create Isolated FY 2025-26"
              )}
            </button>
          </div>

          {/* Switch year anytime */}
          <div className="rounded-lg border border-border bg-surface-muted p-3.5 space-y-2">
            <span className="text-xs font-bold text-foreground">Switch Active Financial Year:</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveYear("2024_25")}
                className={`flex-1 rounded-md py-1.5 text-xs font-bold transition-all ${
                  activeYear === "2024_25"
                    ? "bg-primary text-white"
                    : "bg-white border border-border text-foreground hover:bg-slate-100"
                }`}
              >
                FY 2024-25 (Archived)
              </button>
              <button
                type="button"
                onClick={() => setActiveYear("2025_26")}
                disabled={!createdNewYear}
                className={`flex-1 rounded-md py-1.5 text-xs font-bold transition-all ${
                  activeYear === "2025_26"
                    ? "bg-primary text-white"
                    : "bg-white border border-border text-foreground hover:bg-slate-100"
                } disabled:opacity-50`}
              >
                FY 2025-26 (Live)
              </button>
            </div>
            <p className="text-[0.65rem] text-muted-foreground">
              Past financial years remain strictly read-only to safeguard tax audit filings.
            </p>
          </div>
        </div>

        {/* Right Column: Carry-Forward Ledger Preview */}
        <div className="flex flex-col justify-between bg-slate-50/60 p-4 sm:p-6 space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Automatic Carry-Forward Balance Ledger
              </span>
              <span className="text-xs font-semibold text-primary">Zero Manual Re-Entry</span>
            </div>

            <div className="space-y-3">
              {/* Closing stock -> Opening stock */}
              <div className="rounded-lg border border-border bg-white p-3 space-y-1 shadow-xs">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-muted-foreground">Closing Stock Value (FY 24-25):</span>
                  <span className="font-bold text-foreground">&#8377;4,82,400</span>
                </div>
                <div className="flex items-center justify-center text-primary font-bold text-xs py-0.5">
                  <ArrowRight className="h-3.5 w-3.5 mr-1" /> Transferred as
                </div>
                <div className="flex justify-between text-xs bg-emerald-50 p-1.5 rounded font-bold text-emerald-800">
                  <span>Opening Stock (FY 25-26):</span>
                  <span>&#8377;4,82,400 (482 SKUs)</span>
                </div>
              </div>

              {/* Customer dues transfer */}
              <div className="rounded-lg border border-border bg-white p-3 space-y-1 shadow-xs">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-muted-foreground">Outstanding Customer Udhar:</span>
                  <span className="font-bold text-danger">&#8377;68,250</span>
                </div>
                <div className="flex items-center justify-center text-primary font-bold text-xs py-0.5">
                  <ArrowRight className="h-3.5 w-3.5 mr-1" /> Carried forward
                </div>
                <div className="flex justify-between text-xs bg-emerald-50 p-1.5 rounded font-bold text-emerald-800">
                  <span>Opening Customer Balances:</span>
                  <span>&#8377;68,250 (24 Khatas)</span>
                </div>
              </div>

              {/* Supplier payables transfer */}
              <div className="rounded-lg border border-border bg-white p-3 space-y-1 shadow-xs">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-muted-foreground">Outstanding Supplier Payables:</span>
                  <span className="font-bold text-amber-700">&#8377;1,14,000</span>
                </div>
                <div className="flex items-center justify-center text-primary font-bold text-xs py-0.5">
                  <ArrowRight className="h-3.5 w-3.5 mr-1" /> Carried forward
                </div>
                <div className="flex justify-between text-xs bg-emerald-50 p-1.5 rounded font-bold text-emerald-800">
                  <span>Opening Vendor Dues:</span>
                  <span>&#8377;1,14,000 (8 Distributors)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white p-3 text-[0.65rem] text-muted-foreground text-center">
            Clean isolation guarantees that new fiscal year edits never tamper with past tax records.
          </div>
        </div>
      </div>
    </div>
  );
}
