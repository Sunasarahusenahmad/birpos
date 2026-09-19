"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Share2,
  Phone,
  ArrowDownLeft,
  ArrowUpRight,
  RotateCcw,
  Plus,
  CheckCircle,
  MessageCircle,
  X,
  FileText,
} from "lucide-react";

type Transaction = {
  id: string;
  date: string;
  type: "debit" | "credit" | "return";
  title: string;
  amount: number;
  note?: string;
};

const INITIAL_TRANSACTIONS: Transaction[] = [
  { id: "t1", date: "Today, 10:45 AM", type: "debit", title: "Bill #BS-10492 (Grocery Items)", amount: 1850 },
  { id: "t2", date: "Yesterday", type: "credit", title: "Cash Payment via Counter", amount: 2000, note: "Paid by cash" },
  { id: "t3", date: "02 Sep 2025", type: "return", title: "Sales Return: Oil Can Damaged", amount: 350 },
  { id: "t4", date: "28 Aug 2025", type: "debit", title: "Bill #BS-10381 (Dairy & Provisions)", amount: 3200 },
];

export function KhataSimulator() {
  const [customer] = useState({
    name: "Ramesh Bhai Patel",
    phone: "+91 98250 12345",
    city: "Palanpur / Chhapi",
  });

  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [paymentInput, setPaymentInput] = useState(1500);
  const [paymentNote, setPaymentNote] = useState("UPI Transfer (GPay)");
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  // Balance math
  const totalDebits = transactions
    .filter((t) => t.type === "debit")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalCredits = transactions
    .filter((t) => t.type === "credit" || t.type === "return")
    .reduce((sum, t) => sum + t.amount, 0);

  const currentBalance = totalDebits - totalCredits;
  const isAdvance = currentBalance < 0;

  const handleAddPayment = () => {
    if (paymentInput <= 0) return;
    const newTx: Transaction = {
      id: "tx-" + Date.now(),
      date: "Just Now",
      type: "credit",
      title: "Payment Received",
      amount: paymentInput,
      note: paymentNote,
    };
    setTransactions([newTx, ...transactions]);
  };

  const handleAddSale = () => {
    const newTx: Transaction = {
      id: "tx-" + Date.now(),
      date: "Just Now",
      type: "debit",
      title: "New Credit Bill #BS-" + Math.floor(10000 + Math.random() * 90000),
      amount: 1200,
    };
    setTransactions([newTx, ...transactions]);
  };

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white shadow-[var(--shadow-lifted)]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-muted px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
            <BookOpen className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground sm:text-sm">
              BirStock Customer Khata &amp; Digital Udhar Ledger
            </h4>
            <p className="text-[0.68rem] text-muted-foreground">
              Offline customer credit tracking with instant 1-click WhatsApp statements
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowWhatsAppModal(true)}
          className="inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-700"
        >
          <MessageCircle className="h-3.5 w-3.5" /> 1-Click WhatsApp Statement
        </button>
      </div>

      <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-[1.3fr_1fr] lg:divide-x lg:divide-y-0">
        {/* Left Column: Customer Profile & Timeline */}
        <div className="p-4 sm:p-6">
          {/* Customer Summary Bar */}
          <div className="flex flex-wrap items-center justify-between rounded-lg border border-border bg-white p-4 shadow-xs">
            <div>
              <p className="text-sm font-extrabold text-foreground">{customer.name}</p>
              <p className="text-xs text-muted-foreground">{customer.phone} · {customer.city}</p>
            </div>

            <div className="text-right">
              <span className="text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground">
                {isAdvance ? "Advance Surplus" : "Outstanding Due Balance"}
              </span>
              <p
                className={`font-display text-xl font-extrabold ${
                  isAdvance ? "text-emerald-700" : "text-danger"
                }`}
              >
                &#8377;{Math.abs(currentBalance).toLocaleString("en-IN")}
                {isAdvance && <span className="ml-1 text-xs font-semibold text-emerald-700">(Advance)</span>}
              </p>
            </div>
          </div>

          {/* Ledger Stream Filter Legend */}
          <div className="mt-5 mb-3 flex items-center justify-between text-xs">
            <span className="font-bold uppercase tracking-wider text-muted-foreground">
              Transaction Ledger Timeline
            </span>
            <div className="flex items-center gap-3 text-[0.68rem]">
              <span className="flex items-center gap-1 text-red-600 font-semibold">
                <span className="h-2 w-2 rounded-full bg-red-500" /> 🔴 Debit (Sale)
              </span>
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> 🟢 Credit (Pay)
              </span>
              <span className="flex items-center gap-1 text-amber-700 font-semibold">
                <span className="h-2 w-2 rounded-full bg-amber-500" /> 🟠 Return
              </span>
            </div>
          </div>

          {/* Transactions List */}
          <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
            <AnimatePresence initial={false}>
              {transactions.map((t) => {
                const isDebit = t.type === "debit";
                const isCredit = t.type === "credit";
                return (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center justify-between rounded-lg border border-border bg-white p-3 hover:bg-surface-muted/40"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                          isDebit
                            ? "bg-red-50 text-red-600"
                            : isCredit
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {isDebit ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownLeft className="h-3.5 w-3.5" />}
                      </span>
                      <div>
                        <p className="text-xs font-bold text-foreground">{t.title}</p>
                        <p className="text-[0.65rem] text-muted-foreground">
                          {t.date} {t.note && `· ${t.note}`}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p
                        className={`text-xs font-extrabold ${
                          isDebit ? "text-red-600" : isCredit ? "text-emerald-700" : "text-amber-700"
                        }`}
                      >
                        {isDebit ? "+" : "-"} &#8377;{t.amount.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Record Payment & Fast Credit Actions */}
        <div className="flex flex-col justify-between bg-slate-50/60 p-4 sm:p-6">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Record Payment / Credit Action
            </span>

            <div className="rounded-lg border border-border bg-white p-3.5 space-y-3 shadow-xs">
              <div>
                <label className="text-[0.7rem] font-bold uppercase text-muted-foreground">
                  Payment Amount Received (&#8377;)
                </label>
                <div className="mt-1 flex items-center gap-2">
                  <input
                    type="number"
                    value={paymentInput}
                    onChange={(e) => setPaymentInput(Number(e.target.value))}
                    className="w-full rounded border border-border px-3 py-1.5 text-sm font-bold text-foreground focus:border-primary focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setPaymentInput(currentBalance > 0 ? currentBalance : 1000)}
                    className="rounded border border-border bg-surface-muted px-2 py-1.5 text-[0.65rem] font-bold text-foreground hover:bg-slate-200"
                  >
                    Full Due
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[0.7rem] font-bold uppercase text-muted-foreground">
                  Payment Mode &amp; Reference Note
                </label>
                <input
                  type="text"
                  value={paymentNote}
                  onChange={(e) => setPaymentNote(e.target.value)}
                  className="mt-1 w-full rounded border border-border px-2.5 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
                />
              </div>

              <button
                type="button"
                onClick={handleAddPayment}
                className="w-full rounded-md bg-emerald-600 py-2.5 text-xs font-bold text-white transition-colors hover:bg-emerald-700"
              >
                Accept Payment &amp; Deduct Balance
              </button>
            </div>

            <div className="rounded-lg border border-border bg-white p-3.5 space-y-2">
              <span className="text-xs font-bold text-foreground">Fast Counter Actions:</span>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleAddSale}
                  className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-surface-muted py-2 text-xs font-semibold text-foreground hover:bg-slate-200"
                >
                  <Plus className="h-3.5 w-3.5 text-red-600" /> Issue +&#8377;1,200 New Udhar Bill
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-[0.65rem] text-muted-foreground">
            BirStock automatically handles overpayments by crediting an <strong>Advance Balance</strong> without manual reconciliations.
          </div>
        </div>
      </div>

      {/* WhatsApp Modal Simulator */}
      <AnimatePresence>
        {showWhatsAppModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between bg-emerald-700 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    RP
                  </div>
                  <div>
                    <p className="text-xs font-bold">{customer.name}</p>
                    <p className="text-[0.65rem] text-white/80">WhatsApp Preview</p>
                  </div>
                </div>
                <button onClick={() => setShowWhatsAppModal(false)} className="text-white hover:text-white/80">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-[#efeae2] p-4 text-xs space-y-3">
                <div className="rounded-lg bg-white p-3 shadow-xs space-y-1.5">
                  <p className="font-bold text-foreground">Pranam Ramesh Bhai 🙏</p>
                  <p className="text-[0.72rem] text-muted-foreground leading-relaxed">
                    This is your account statement from <strong>BIRSTOCK STORE</strong>.
                  </p>
                  <div className="rounded bg-surface-muted p-2 text-[0.7rem] font-mono">
                    <div>Current Balance: <strong>&#8377;{Math.abs(currentBalance).toLocaleString("en-IN")} {isAdvance ? "Advance" : "Due"}</strong></div>
                    <div>Total Transactions: {transactions.length} records</div>
                  </div>
                  <div className="flex items-center gap-2 rounded border border-border p-2 bg-slate-50 text-[0.68rem] font-semibold text-primary">
                    <FileText className="h-4 w-4 text-red-500" />
                    <span>Statement_{customer.name.replace(/\s+/g, "_")}.pdf</span>
                  </div>
                  <p className="text-[0.62rem] text-muted-foreground text-right">10:46 AM · Sent via BirStock</p>
                </div>
              </div>

              <div className="bg-surface-muted px-4 py-3 text-center">
                <button
                  type="button"
                  onClick={() => setShowWhatsAppModal(false)}
                  className="rounded-md bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
                >
                  Close WhatsApp Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
