"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Receipt,
  Printer,
  QrCode,
  FileCheck,
  Check,
  Building,
  Layers,
} from "lucide-react";

const GST_RATES = [
  { label: "0% (Exempt / Food)", rate: 0 },
  { label: "5% (Essentials)", rate: 5 },
  { label: "12% (Processed Goods)", rate: 12 },
  { label: "18% (Standard / Electronics)", rate: 18 },
  { label: "28% (Luxury / Automobiles)", rate: 28 },
];

export function GstSimulator() {
  const [selectedRate, setSelectedRate] = useState(18);
  const [isInterState, setIsInterState] = useState(false);
  const [docType, setDocType] = useState<"tax_invoice" | "bill_of_supply">("tax_invoice");
  const [printFormat, setPrintFormat] = useState<"80mm" | "58mm" | "a4">("80mm");
  const [taxableAmount, setTaxableAmount] = useState(12500);

  const totalTax = docType === "bill_of_supply" ? 0 : Math.round((taxableAmount * selectedRate) / 100);
  const cgst = isInterState ? 0 : Math.round(totalTax / 2);
  const sgst = isInterState ? 0 : Math.round(totalTax / 2);
  const igst = isInterState ? totalTax : 0;
  const grandTotal = taxableAmount + totalTax;

  // Amount in Indian words converter helper
  const getAmountInWords = (num: number) => {
    return `Rupees ${num.toLocaleString("en-IN")} Only`;
  };

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white shadow-[var(--shadow-lifted)]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-muted px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
            <Receipt className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground sm:text-sm">
              BirStock Multi-Rate GST &amp; Compliance Invoicing Engine
            </h4>
            <p className="text-[0.68rem] text-muted-foreground">
              Automatic CGST/SGST/IGST breakdown, HSN/SAC, and printer formatting
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-primary-tint px-2.5 py-0.5 text-xs font-bold text-primary-darker">
            GSTIN: 24AAACB1234D1Z5
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-[1.1fr_1.1fr] lg:divide-x lg:divide-y-0">
        {/* Left Column: Tax Configurations */}
        <div className="p-4 sm:p-6 space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              1. Document Type:
            </label>
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={() => setDocType("tax_invoice")}
                className={`flex-1 rounded-md py-2 text-xs font-bold transition-all ${
                  docType === "tax_invoice"
                    ? "bg-primary text-white shadow-xs"
                    : "border border-border bg-white text-muted-foreground hover:text-foreground"
                }`}
              >
                Tax Invoice (B2B / B2C)
              </button>
              <button
                type="button"
                onClick={() => setDocType("bill_of_supply")}
                className={`flex-1 rounded-md py-2 text-xs font-bold transition-all ${
                  docType === "bill_of_supply"
                    ? "bg-primary text-white shadow-xs"
                    : "border border-border bg-white text-muted-foreground hover:text-foreground"
                }`}
              >
                Bill of Supply (Composite)
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              2. GST Rate Bracket:
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {GST_RATES.map((item) => (
                <button
                  key={item.rate}
                  type="button"
                  onClick={() => setSelectedRate(item.rate)}
                  disabled={docType === "bill_of_supply"}
                  className={`rounded-md border p-2 text-left text-xs font-semibold transition-all ${
                    selectedRate === item.rate && docType === "tax_invoice"
                      ? "border-primary bg-primary-tint text-primary-darker"
                      : "border-border bg-white text-foreground hover:border-slate-300"
                  } disabled:opacity-40`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Inter-state vs Intra-state switch */}
          <div className="flex items-center justify-between rounded-lg border border-border bg-surface-muted p-3">
            <div>
              <p className="text-xs font-bold text-foreground">Supply Destination</p>
              <p className="text-[0.68rem] text-muted-foreground">
                {isInterState ? "Inter-State Sale (Apply IGST)" : "Intra-State (Split CGST + SGST)"}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsInterState(!isInterState)}
              className="rounded-md border border-border bg-white px-3 py-1.5 text-xs font-bold text-foreground hover:bg-slate-100"
            >
              {isInterState ? "Toggle Intra-State" : "Toggle Inter-State"}
            </button>
          </div>

          {/* Tax Calculation Live Card */}
          <div className="rounded-lg border border-border bg-white p-4 space-y-2 text-xs shadow-xs">
            <div className="flex justify-between text-muted-foreground">
              <span>Taxable Value (HSN: 8471):</span>
              <span className="font-bold text-foreground">&#8377;{taxableAmount.toLocaleString("en-IN")}</span>
            </div>

            {docType === "tax_invoice" && (
              <>
                {!isInterState ? (
                  <>
                    <div className="flex justify-between text-muted-foreground">
                      <span>CGST ({selectedRate / 2}%):</span>
                      <span className="font-semibold text-foreground">&#8377;{cgst.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>SGST ({selectedRate / 2}%):</span>
                      <span className="font-semibold text-foreground">&#8377;{sgst.toLocaleString("en-IN")}</span>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between text-muted-foreground">
                    <span>Integrated Tax IGST ({selectedRate}%):</span>
                    <span className="font-semibold text-foreground">&#8377;{igst.toLocaleString("en-IN")}</span>
                  </div>
                )}
              </>
            )}

            <div className="border-t border-dashed border-border pt-2 flex justify-between items-center text-sm font-extrabold text-foreground">
              <span>Grand Total:</span>
              <span className="text-primary-darker">&#8377;{grandTotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="mt-2 rounded bg-slate-50 p-2 font-mono text-[0.65rem] text-muted-foreground italic">
              <strong>Amount in Words:</strong> {getAmountInWords(grandTotal)}
            </div>
          </div>
        </div>

        {/* Right Column: Live Invoice Preview (Thermal vs A4) */}
        <div className="flex flex-col justify-between bg-slate-50/60 p-4 sm:p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-border pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Live Printer Template Preview
              </span>
              {/* Format selector */}
              <div className="flex gap-1">
                {(["80mm", "58mm", "a4"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    type="button"
                    onClick={() => setPrintFormat(fmt)}
                    className={`rounded px-2 py-0.5 text-[0.65rem] font-bold ${
                      printFormat === fmt ? "bg-primary text-white" : "bg-white border border-border text-foreground"
                    }`}
                  >
                    {fmt.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Render Simulated Receipt Slip */}
            <div
              className={`mx-auto bg-white p-4 font-mono text-[0.68rem] shadow-sm border border-border transition-all ${
                printFormat === "58mm" ? "max-w-[240px]" : printFormat === "80mm" ? "max-w-[300px]" : "max-w-[360px]"
              }`}
            >
              <div className="text-center border-b border-dashed border-border pb-2 space-y-0.5">
                <p className="font-extrabold text-xs">BIRSTOCK HYPERMART</p>
                <p className="text-[0.6rem] text-muted-foreground">GSTIN: 24AAACB1234D1Z5</p>
                <p className="text-[0.6rem] text-muted-foreground">Ph: +91 81560 00337 · Gujarat, IN</p>
                <p className="font-bold text-primary-darker mt-1">
                  {docType === "tax_invoice" ? "TAX INVOICE" : "BILL OF SUPPLY"}
                </p>
              </div>

              <div className="my-2 space-y-1">
                <div className="flex justify-between">
                  <span>Dell Inspiron Laptop</span>
                  <span>&#8377;{taxableAmount}</span>
                </div>
                <div className="text-[0.58rem] text-muted-foreground flex justify-between">
                  <span>HSN: 8471 | GST: {selectedRate}%</span>
                  <span>Tax: &#8377;{totalTax}</span>
                </div>
              </div>

              <div className="border-t border-dashed border-border pt-1.5 space-y-0.5 font-bold">
                <div className="flex justify-between">
                  <span>SUBTOTAL:</span>
                  <span>&#8377;{taxableAmount}</span>
                </div>
                {docType === "tax_invoice" && (
                  <div className="flex justify-between text-[0.6rem] font-normal text-muted-foreground">
                    <span>{isInterState ? "IGST" : "CGST + SGST"}:</span>
                    <span>&#8377;{totalTax}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs pt-1 border-t border-border">
                  <span>TOTAL PAYABLE:</span>
                  <span>&#8377;{grandTotal}</span>
                </div>
              </div>

              {/* UPI QR Code Preview */}
              <div className="mt-3 border-t border-dashed border-border pt-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded border border-border bg-slate-100">
                  <QrCode className="h-10 w-10 text-foreground" />
                </div>
                <p className="mt-1 text-[0.55rem] text-muted-foreground">Scan with any UPI app to pay</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs font-semibold text-primary">
            <Printer className="h-3.5 w-3.5" /> Auto-detects 80mm/58mm thermal &amp; A4 laser printers
          </div>
        </div>
      </div>
    </div>
  );
}
