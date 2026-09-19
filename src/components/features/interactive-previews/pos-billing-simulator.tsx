"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ScanLine,
  Keyboard,
  Touchpad,
  PauseCircle,
  PlayCircle,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  WifiOff,
  Sparkles,
} from "lucide-react";

type Item = {
  id: string;
  name: string;
  code: string;
  qty: number;
  price: number;
  stock: number;
  category: string;
};

const INITIAL_ITEMS: Item[] = [
  { id: "1", name: "Amul Butter 500g", code: "890126201011", qty: 2, price: 285, stock: 14, category: "Dairy" },
  { id: "2", name: "Tata Salt Vacuum Evaporated 1kg", code: "890103001004", qty: 1, price: 28, stock: 45, category: "Grocery" },
  { id: "3", name: "Fortune Sunlite Sunflower Oil 1L", code: "890600728012", qty: 1, price: 165, stock: 22, category: "Oils" },
];

const CATALOG_ITEMS: Item[] = [
  { id: "4", name: "Colgate Total Toothpaste 150g", code: "890131401025", qty: 1, price: 135, stock: 18, category: "Personal Care" },
  { id: "5", name: "Cadbury Dairy Milk Silk 60g", code: "890123302482", qty: 1, price: 80, stock: 30, category: "Confectionery" },
  { id: "6", name: "Maggi 2-Minute Noodles 280g", code: "890105885227", qty: 1, price: 56, stock: 40, category: "Instant Food" },
];

export function PosBillingSimulator() {
  const [mode, setMode] = useState<"keyboard" | "touch">("keyboard");
  const [items, setItems] = useState<Item[]>(INITIAL_ITEMS);
  const [heldCart, setHeldCart] = useState<Item[] | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [tenderAmount, setTenderAmount] = useState(1000);
  const [showReceipt, setShowReceipt] = useState(false);
  const [stockGuardAlert, setStockGuardAlert] = useState<string | null>(null);
  const [discountPercent] = useState<number>(5);
  const [keyFeedback, setKeyFeedback] = useState<string | null>(null);

  // Listen to real physical keyboard keys (F9, F10, F1, F2)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is inside a form input
      const targetTag = (e.target as HTMLElement)?.tagName;
      if (targetTag === "INPUT" || targetTag === "TEXTAREA" || targetTag === "SELECT") {
        return;
      }

      if (e.key === "F9") {
        e.preventDefault();
        setHeldCart((prevHeld) => {
          if (prevHeld) {
            setItems(prevHeld);
            setKeyFeedback("Physical Key [F9] Pressed: Restored Held Cart!");
            return null;
          } else {
            setItems((prevItems) => {
              if (prevItems.length > 0) {
                setKeyFeedback("Physical Key [F9] Pressed: Cart Held & Minimized to Dock!");
              }
              return [];
            });
            return items.length > 0 ? items : null;
          }
        });
        setTimeout(() => setKeyFeedback(null), 3000);
      } else if (e.key === "F10") {
        e.preventDefault();
        setShowReceipt(true);
        setKeyFeedback("Physical Key [F10] Pressed: Completed Sale & Printed Receipt!");
        setTimeout(() => setKeyFeedback(null), 3000);
      } else if (e.key === "F1") {
        e.preventDefault();
        setMode("keyboard");
        setKeyFeedback("Physical Key [F1] Pressed: Switched to Keyboard Quick POS!");
        setTimeout(() => setKeyFeedback(null), 3000);
      } else if (e.key === "F2") {
        e.preventDefault();
        setMode("touch");
        setKeyFeedback("Physical Key [F2] Pressed: Switched to Touch & Grid POS!");
        setTimeout(() => setKeyFeedback(null), 3000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, heldCart]);

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const taxable = subtotal - discountAmount;
  const gst = Math.round(taxable * 0.05); // 5% GST on essentials
  const grandTotal = taxable + gst;
  const changeDue = Math.max(0, tenderAmount - grandTotal);

  // Auto scan trigger demonstration
  const handleScanItem = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      const randomCatalogItem = CATALOG_ITEMS[Math.floor(Math.random() * CATALOG_ITEMS.length)];
      setItems((prev) => {
        const existing = prev.find((i) => i.id === randomCatalogItem.id);
        if (existing) {
          return prev.map((i) => (i.id === existing.id ? { ...i, qty: i.qty + 1 } : i));
        }
        return [...prev, { ...randomCatalogItem, qty: 1 }];
      });
    }, 500);
  };

  // Hold Cart Multi-tasking
  const handleHoldCart = () => {
    if (items.length === 0) return;
    setHeldCart(items);
    setItems([]);
  };

  const handleResumeCart = () => {
    if (!heldCart) return;
    setItems(heldCart);
    setHeldCart(null);
  };

  // Stock limit guard test
  const handleTestStockGuard = () => {
    setStockGuardAlert("Stock Limit Guard: Oversell blocked! Only 2 units left in local inventory.");
    setTimeout(() => setStockGuardAlert(null), 3500);
  };

  const handleReset = () => {
    setItems(INITIAL_ITEMS);
    setHeldCart(null);
    setShowReceipt(false);
    setStockGuardAlert(null);
  };

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white shadow-[var(--shadow-lifted)]">
      {/* Desktop App Titlebar */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-muted px-4 py-2.5 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-danger/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-primary/80" />
          </div>
          <span className="text-xs font-bold tracking-tight text-foreground sm:text-sm">
            BirStock POS <span className="font-normal text-muted-foreground">· Station 01 (Retail Counter)</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-2.5 py-0.5 text-xs font-semibold text-primary-darker">
            <WifiOff className="h-3 w-3" /> 100% Offline (SQLite WASM)
          </span>
          <button
            onClick={handleReset}
            title="Reset demo"
            className="rounded p-1 text-muted-foreground hover:bg-surface hover:text-foreground"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Control Bar: Mode Toggle & Interactive Simulation Triggers */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-slate-50/70 px-4 py-3 sm:px-6">
        <div className="inline-flex rounded-lg border border-border bg-white p-1 shadow-xs">
          <button
            type="button"
            onClick={() => setMode("keyboard")}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
              mode === "keyboard"
                ? "bg-primary text-white shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Keyboard className="h-3.5 w-3.5" /> Keyboard Quick POS (F1)
          </button>
          <button
            type="button"
            onClick={() => setMode("touch")}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
              mode === "touch"
                ? "bg-primary text-white shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Touchpad className="h-3.5 w-3.5" /> Touch &amp; Grid POS (F2)
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleScanItem}
            disabled={isScanning}
            className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary-tint px-3 py-1.5 text-xs font-semibold text-primary-darker transition-all hover:bg-primary-tint-strong"
          >
            <ScanLine className={`h-3.5 w-3.5 ${isScanning ? "animate-spin text-primary" : ""}`} />
            {isScanning ? "Scanning Barcode…" : "Simulate Barcode Scan"}
          </button>

          <button
            type="button"
            onClick={handleTestStockGuard}
            className="inline-flex items-center gap-1 rounded-md border border-amber-300 bg-amber-50 px-2.5 py-1.5 text-xs font-medium text-amber-900 transition-all hover:bg-amber-100"
          >
            <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
            Stock Limit Guard Test
          </button>
        </div>
      </div>

      {/* Real Physical Keyboard Event Banner */}
      <AnimatePresence>
        {keyFeedback && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center justify-between border-b border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold text-primary-darker sm:px-6"
          >
            <div className="flex items-center gap-2">
              <Keyboard className="h-4 w-4 text-primary animate-pulse" />
              <span>{keyFeedback}</span>
            </div>
            <span className="text-[0.68rem] bg-white/80 rounded px-2 py-0.5 border border-primary/20 font-mono">
              Live Keypress
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Keyboard Test Notice */}
      <div className="flex items-center justify-between bg-primary/5 px-4 py-1.5 text-[0.68rem] text-muted-foreground sm:px-6 border-b border-border/60">
        <span className="flex items-center gap-1.5 font-medium">
          <Sparkles className="h-3 w-3 text-primary" />
          <span><strong>Try your keyboard:</strong> Press <kbd className="rounded border bg-white px-1 py-0.5 font-mono font-bold text-foreground">F9</kbd> to Hold/Resume Cart, or <kbd className="rounded border bg-white px-1 py-0.5 font-mono font-bold text-foreground">F10</kbd> to Checkout!</span>
        </span>
      </div>

      {/* Stock Guard Alert Notification */}
      <AnimatePresence>
        {stockGuardAlert && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 border-b border-danger/20 bg-danger/10 px-6 py-2.5 text-xs font-semibold text-danger"
          >
            <AlertTriangle className="h-4 w-4 shrink-0 text-danger" />
            <span>{stockGuardAlert}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main POS Interface Grid */}
      <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-[1.3fr_1fr] lg:divide-x lg:divide-y-0">
        {/* Left Column: Cart or Touch Products */}
        <div className="p-4 sm:p-6">
          {mode === "keyboard" ? (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <ScanLine className="h-4 w-4 text-primary" />
                  <span>Item Billing Grid</span>
                  <span className="rounded-full bg-surface-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {items.length} lines
                  </span>
                </div>
                <span className="text-[0.7rem] font-mono font-medium text-muted-foreground">
                  [Tab] Next Field · [Enter] Add · [F10] Pay
                </span>
              </div>

              {/* Barcode scanner laser animation preview */}
              <div className="relative mb-3 flex items-center gap-2 rounded-md border border-dashed border-primary/40 bg-primary/5 px-3 py-2 text-xs">
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="font-mono text-muted-foreground">Scanner input ready: Point at Barcode/SKU</span>
                {isScanning && (
                  <motion.div
                    initial={{ left: 0 }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="absolute inset-y-0 w-1 bg-red-500 shadow-[0_0_8px_red]"
                  />
                )}
              </div>

              {/* Item Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-border bg-surface-muted text-muted-foreground">
                      <th className="py-2 pl-2">Product / SKU</th>
                      <th className="py-2 text-center">Qty</th>
                      <th className="py-2 text-right">Rate</th>
                      <th className="py-2 pr-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <AnimatePresence initial={false}>
                      {items.map((item) => (
                        <motion.tr
                          key={item.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="hover:bg-surface-muted/50"
                        >
                          <td className="py-2.5 pl-2 font-medium text-foreground">
                            <div>{item.name}</div>
                            <span className="font-mono text-[0.65rem] text-muted-foreground">
                              {item.code} · Stock: {item.stock}
                            </span>
                          </td>
                          <td className="py-2.5 text-center">
                            <span className="inline-block rounded border border-border bg-white px-2 py-0.5 font-bold text-foreground">
                              {item.qty}
                            </span>
                          </td>
                          <td className="py-2.5 text-right text-muted-foreground">&#8377;{item.price}</td>
                          <td className="py-2.5 pr-2 text-right font-bold text-foreground">
                            &#8377;{item.qty * item.price}
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                    {items.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-8 text-center text-muted-foreground">
                          Bill is empty. Scan an item or restore held cart.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Touch Grid POS Mode */
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold text-foreground">Touch Catalog: Tap to Add</span>
                <span className="text-xs text-muted-foreground">Auto-adds to active cart</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {[...INITIAL_ITEMS, ...CATALOG_ITEMS].map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => {
                      setItems((prev) => {
                        const existing = prev.find((i) => i.id === prod.id);
                        if (existing) {
                          return prev.map((i) => (i.id === existing.id ? { ...i, qty: i.qty + 1 } : i));
                        }
                        return [...prev, { ...prod, qty: 1 }];
                      });
                    }}
                    className="flex flex-col items-start justify-between rounded-lg border border-border bg-white p-2.5 text-left transition-all hover:border-primary hover:shadow-xs active:scale-98"
                  >
                    <span className="rounded bg-surface-muted px-1.5 py-0.5 text-[0.65rem] font-semibold text-muted-foreground">
                      {prod.category}
                    </span>
                    <p className="mt-1 line-clamp-2 text-xs font-semibold text-foreground">{prod.name}</p>
                    <p className="mt-2 text-xs font-extrabold text-primary">&#8377;{prod.price}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Held Cart Docking Banner */}
          <div className="mt-6 border-t border-border pt-4">
            <div className="flex items-center justify-between rounded-lg border border-border bg-surface-muted p-3">
              <div className="flex items-center gap-2">
                <PauseCircle className="h-4 w-4 text-amber-600" />
                <div className="text-xs">
                  <span className="font-bold text-foreground">Hold Cart (Multi-Counter)</span>
                  <p className="text-[0.65rem] text-muted-foreground">
                    Pause active bill when customer pauses checkout
                  </p>
                </div>
              </div>

              {heldCart ? (
                <button
                  type="button"
                  onClick={handleResumeCart}
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-primary-dark"
                >
                  <PlayCircle className="h-3.5 w-3.5" /> Resume Held Bill ({heldCart.length} items)
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleHoldCart}
                  disabled={items.length === 0}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-surface-muted disabled:opacity-50"
                >
                  <PauseCircle className="h-3.5 w-3.5 text-amber-500" /> Hold Cart [F9]
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Calculations & Checkout */}
        <div className="flex flex-col justify-between bg-slate-50/50 p-4 sm:p-6">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between border-b border-border pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Payment Summary
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Fast Tender
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal ({items.reduce((s, i) => s + i.qty, 0)} units)</span>
                <span className="font-semibold text-foreground">&#8377;{subtotal}</span>
              </div>

              <div className="flex items-center justify-between text-muted-foreground">
                <span>Discount ({discountPercent}%)</span>
                <span className="font-semibold text-primary-darker">-&#8377;{discountAmount}</span>
              </div>

              <div className="flex justify-between text-muted-foreground">
                <span>GST (5% Composition / Tax)</span>
                <span className="font-semibold text-foreground">&#8377;{gst}</span>
              </div>

              <div className="border-t border-dashed border-border pt-2">
                <div className="flex items-center justify-between text-base font-extrabold text-foreground">
                  <span>Grand Total</span>
                  <span className="text-primary-darker">&#8377;{grandTotal}</span>
                </div>
              </div>
            </div>

            {/* Tender & Change Calculator */}
            <div className="rounded-lg border border-border bg-white p-3 shadow-xs">
              <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                Cash Received from Customer (&#8377;)
              </label>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type="number"
                  value={tenderAmount}
                  onChange={(e) => setTenderAmount(Number(e.target.value))}
                  className="w-full rounded border border-border px-3 py-1.5 text-sm font-bold text-foreground focus:border-primary focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setTenderAmount(grandTotal)}
                  className="rounded border border-border bg-surface-muted px-2 py-1.5 text-[0.65rem] font-semibold text-foreground hover:bg-slate-200"
                >
                  Exact
                </button>
              </div>

              <div className="mt-2.5 flex items-center justify-between border-t border-border pt-2 text-xs">
                <span className="font-semibold text-muted-foreground">Change Due to Customer:</span>
                <span className="font-extrabold text-primary-darker">&#8377;{changeDue}</span>
              </div>
            </div>
          </div>

          {/* Checkout & Print Receipt Actions */}
          <div className="mt-6 space-y-2">
            <button
              type="button"
              onClick={() => setShowReceipt(true)}
              disabled={items.length === 0}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-xs transition-colors hover:bg-primary-dark disabled:opacity-50"
            >
              <CheckCircle2 className="h-4 w-4" /> [F10] Complete Sale &amp; Print
            </button>

            {/* Simulated Receipt Preview Modal */}
            <AnimatePresence>
              {showReceipt && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-lg border border-primary/30 bg-white p-4 font-mono text-xs shadow-md"
                >
                  <div className="flex items-center justify-between border-b border-dashed border-border pb-2 text-center">
                    <span className="font-bold">*** BIRSTOCK RETAIL STORE ***</span>
                    <button
                      type="button"
                      onClick={() => setShowReceipt(false)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      &times;
                    </button>
                  </div>
                  <p className="mt-1 text-[0.65rem] text-muted-foreground">Invoice #BS-2025-0891 · 80mm Thermal</p>
                  <div className="my-2 divide-y divide-dashed divide-border text-[0.7rem]">
                    {items.map((i) => (
                      <div key={i.id} className="flex justify-between py-1">
                        <span>{i.name} &times; {i.qty}</span>
                        <span>&#8377;{i.qty * i.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-dashed border-border pt-1 font-bold">
                    <div className="flex justify-between">
                      <span>PAID TOTAL:</span>
                      <span>&#8377;{grandTotal}</span>
                    </div>
                    <div className="flex justify-between text-[0.65rem] text-muted-foreground">
                      <span>CASH TENDERED: &#8377;{tenderAmount}</span>
                      <span>CHANGE: &#8377;{changeDue}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-center text-[0.6rem] text-primary-darker">
                    Printed in 0.4s on connected Thermal USB Printer
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
