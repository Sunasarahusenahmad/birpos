"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  RotateCcw,
  CheckCircle,
  FileText,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react";

export function SupplierSimulator() {
  const [supplierDues, setSupplierDues] = useState(54200);
  const [returnQty, setReturnQty] = useState(2);
  const [showDebitNote, setShowDebitNote] = useState(false);
  const [settleAmount, setSettleAmount] = useState(15000);
  const [utrNumber, setUtrNumber] = useState("HDFC009281742");
  const [showSettleSuccess, setShowSettleSuccess] = useState(false);

  const itemRate = 1450;
  const returnRefundTotal = returnQty * itemRate;

  const handleProcessReturn = () => {
    setSupplierDues((prev) => Math.max(0, prev - returnRefundTotal));
    setShowDebitNote(true);
  };

  const handleSettleDue = () => {
    setSupplierDues((prev) => Math.max(0, prev - settleAmount));
    setShowSettleSuccess(true);
    setTimeout(() => setShowSettleSuccess(false), 3000);
  };

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white shadow-[var(--shadow-lifted)]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-muted px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
            <Building className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground sm:text-sm">
              BirStock Supplier Ledgers &amp; Debit Notes Engine
            </h4>
            <p className="text-[0.68rem] text-muted-foreground">
              Automated vendor purchase tracking, debit notes &amp; UTR settlement
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-800 border border-amber-200">
            Total Payable Due: &#8377;{supplierDues.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-[1.1fr_1fr] lg:divide-x lg:divide-y-0">
        {/* Left Column: Supplier Purchase Return (Debit Note) Workflow */}
        <div className="p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Supplier Purchase Return (Debit Note)
            </span>
            <span className="rounded bg-primary-tint px-2 py-0.5 text-[0.65rem] font-bold text-primary-darker">
              Workflow 5 from Brief
            </span>
          </div>

          <div className="rounded-lg border border-border bg-slate-50 p-3 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground font-semibold">Vendor:</span>
              <span className="font-bold text-foreground">Shree Krishna FMCG Distributors</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground font-semibold">Original Purchase Bill:</span>
              <span className="font-mono text-foreground font-bold">PO-100234 (15 Aug 2025)</span>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white p-3.5 space-y-3 shadow-xs">
            <div>
              <p className="text-xs font-bold text-foreground">Damaged / Expired Item Selected for Return:</p>
              <p className="text-[0.7rem] text-muted-foreground">Fortune Refined Oil 15L Tin (Rate: &#8377;1,450)</p>
            </div>

            <div>
              <label className="text-[0.7rem] font-bold text-muted-foreground uppercase">
                Return Quantity to Deduct:
              </label>
              <div className="mt-1 flex items-center gap-3">
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={returnQty}
                  onChange={(e) => setReturnQty(Number(e.target.value))}
                  className="w-full cursor-pointer accent-primary"
                />
                <span className="rounded border border-border bg-surface-muted px-2.5 py-1 text-xs font-bold text-foreground">
                  {returnQty} Tins
                </span>
              </div>
            </div>

            <div className="rounded border border-primary/20 bg-primary-tint p-2.5 text-xs flex justify-between items-center">
              <span className="text-primary-darker font-semibold">Debit Note Refund Value:</span>
              <span className="font-extrabold text-primary-darker text-sm">
                &#8377;{returnRefundTotal.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              type="button"
              onClick={handleProcessReturn}
              className="w-full rounded-lg bg-primary py-2.5 text-xs font-bold text-white transition-all hover:bg-primary-dark"
            >
              Issue Debit Note &amp; Decrement Stock
            </button>
          </div>

          <AnimatePresence>
            {showDebitNote && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="rounded-lg border border-emerald-300 bg-emerald-50 p-3 text-xs text-emerald-900 space-y-1 font-mono"
              >
                <div className="flex items-center justify-between font-bold">
                  <span>✓ OFFICIAL DEBIT NOTE #DN-9012 ISSUED</span>
                  <span className="text-[0.65rem] bg-emerald-200 px-1.5 py-0.5 rounded">Audited</span>
                </div>
                <p className="text-[0.68rem]">
                  - Returned {returnQty} units back to distributor
                </p>
                <p className="text-[0.68rem]">
                  - Supplier balance automatically reduced by &#8377;{returnRefundTotal.toLocaleString("en-IN")}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Direct Payment Settlement with UTR */}
        <div className="flex flex-col justify-between bg-slate-50/60 p-4 sm:p-6 space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Payment Settlement Modal
              </span>
              <span className="text-xs font-semibold text-emerald-700">Audit-Ready</span>
            </div>

            <div className="rounded-lg border border-border bg-white p-3.5 space-y-3 shadow-xs">
              <div>
                <label className="text-[0.7rem] font-bold uppercase text-muted-foreground">
                  Payment Amount (&#8377;)
                </label>
                <input
                  type="number"
                  value={settleAmount}
                  onChange={(e) => setSettleAmount(Number(e.target.value))}
                  className="mt-1 w-full rounded border border-border px-3 py-1.5 text-sm font-bold text-foreground focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[0.7rem] font-bold uppercase text-muted-foreground">
                  Settlement Mode &amp; Reference (Cheque / Bank UTR)
                </label>
                <input
                  type="text"
                  value={utrNumber}
                  onChange={(e) => setUtrNumber(e.target.value)}
                  className="mt-1 w-full rounded border border-border px-3 py-1.5 text-xs font-mono text-foreground focus:border-primary focus:outline-none"
                />
              </div>

              <button
                type="button"
                onClick={handleSettleDue}
                className="w-full rounded-md bg-emerald-600 py-2.5 text-xs font-bold text-white transition-colors hover:bg-emerald-700"
              >
                Record Payment &amp; Settle Dues
              </button>
            </div>

            <AnimatePresence>
              {showSettleSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-md bg-emerald-100 p-2.5 text-xs font-semibold text-emerald-800"
                >
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  <span>Payment recorded with reference {utrNumber}. Vendor ledger updated!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="rounded-lg border border-border bg-white p-3 text-[0.68rem] text-muted-foreground">
            BirStock ensures that every purchase return, stock increment, and bank settlement automatically syncs with the local ledger.
          </div>
        </div>
      </div>
    </div>
  );
}
