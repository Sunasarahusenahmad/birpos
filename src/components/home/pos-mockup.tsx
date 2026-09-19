"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, WifiOff, ScanLine, Check, PauseCircle, PlayCircle, Plus, Keyboard } from "lucide-react";

const INITIAL_ITEMS = [
  { name: "Amul Butter 500g", qty: 2, price: 285 },
  { name: "Tata Salt 1kg", qty: 1, price: 28 },
  { name: "Basmati Rice 5kg", qty: 1, price: 640 },
  { name: "Colgate Toothpaste", qty: 3, price: 174 },
];

export function PosMockup() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [isHeld, setIsHeld] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);
  const [keyToast, setKeyToast] = useState<string | null>(null);

  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  const handleHoldToggle = () => {
    setIsHeld((prev) => !prev);
  };

  const handleScanQuick = () => {
    setItems((prev) => [
      ...prev,
      { name: "Cadbury Silk 60g", qty: 1, price: 85 },
    ]);
  };

  const handleCheckout = () => {
    setCheckedOut(true);
    setTimeout(() => setCheckedOut(false), 2500);
  };

  // Intercept physical F9 and F10 on keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName;
      if (targetTag === "INPUT" || targetTag === "TEXTAREA" || targetTag === "SELECT") {
        return;
      }

      if (e.key === "F9") {
        e.preventDefault();
        setIsHeld((prev) => {
          const next = !prev;
          setKeyToast(next ? "Key [F9] Pressed: Counter Cart Held!" : "Key [F9] Pressed: Cart Resumed!");
          return next;
        });
        setTimeout(() => setKeyToast(null), 2500);
      } else if (e.key === "F10") {
        e.preventDefault();
        setCheckedOut(true);
        setKeyToast("Key [F10] Pressed: F10 Checkout Triggered!");
        setTimeout(() => {
          setCheckedOut(false);
          setKeyToast(null);
        }, 2500);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white shadow-[var(--shadow-lifted)]">
        {/* Window Chrome */}
        <div className="flex items-center justify-between border-b border-border bg-surface-muted px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-foreground sm:text-sm">
              BirStock Terminal · Station 01
            </span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-primary-tint px-2.5 py-1 text-[0.65rem] font-bold text-primary-darker">
            <WifiOff className="h-3 w-3" /> 100% Offline Active
          </span>
        </div>

        {/* Live Physical Key Event Banner */}
        <AnimatePresence>
          {keyToast && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-2 border-b border-primary/20 bg-primary-tint px-4 py-1.5 text-[0.68rem] font-bold text-primary-darker"
            >
              <Keyboard className="h-3.5 w-3.5 text-primary animate-pulse" />
              <span>{keyToast}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scan line interactive bar */}
        <div className="flex items-center justify-between border-b border-border px-4 py-2 text-xs text-muted-foreground sm:px-5">
          <div className="flex items-center gap-2">
            <ScanLine className="h-3.5 w-3.5 text-primary" />
            <span className="font-mono text-[0.7rem]">Barcode Input Ready</span>
          </div>
          <button
            type="button"
            onClick={handleScanQuick}
            className="inline-flex items-center gap-1 rounded bg-primary-tint px-2 py-0.5 text-[0.65rem] font-bold text-primary-darker hover:bg-primary-tint-strong"
          >
            <Plus className="h-3 w-3" /> Scan Item
          </button>
        </div>

        {/* Cart Item rows */}
        <div className="divide-y divide-border min-h-[160px]">
          {!isHeld ? (
            items.slice(-4).map((item, i) => (
              <motion.div
                key={item.name + i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between px-4 py-2.5 text-xs sm:px-5"
              >
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-[0.68rem] text-muted-foreground">
                    {item.qty} &times; &#8377;{item.price}
                  </p>
                </div>
                <p className="font-bold text-foreground">
                  &#8377;{(item.qty * item.price).toLocaleString("en-IN")}
                </p>
              </motion.div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center text-xs">
              <PauseCircle className="h-8 w-8 text-amber-500 mb-1" />
              <p className="font-bold text-foreground">Active Cart Held &amp; Docked</p>
              <p className="text-[0.68rem] text-muted-foreground">
                Counter free for next customer bill.
              </p>
              <button
                type="button"
                onClick={handleHoldToggle}
                className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-white"
              >
                <PlayCircle className="h-3.5 w-3.5" /> Resume Held Bill ({items.length} items)
              </button>
            </div>
          )}
        </div>

        {/* Totals */}
        <div className="space-y-1.5 border-t border-dashed border-border px-4 py-3 bg-slate-50/50 sm:px-5">
          <div className="flex justify-between text-[0.7rem] text-muted-foreground">
            <span>GST (5% / 18% Multi-rate)</span>
            <span>&#8377;{Math.round(total * 0.05).toLocaleString("en-IN")}</span>
          </div>
          <div className="flex items-center justify-between text-sm font-extrabold text-foreground">
            <span>Payable Total</span>
            <span className="text-primary-darker">&#8377;{Math.round(total * 1.05).toLocaleString("en-IN")}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 bg-surface-muted px-4 py-3 sm:px-5">
          <button
            type="button"
            onClick={handleCheckout}
            disabled={isHeld}
            className="flex-1 rounded-[var(--radius-sm)] bg-primary py-2 text-center text-xs font-bold text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
          >
            {checkedOut ? "✓ Bill Printed (80mm)" : "F10 · Quick Checkout"}
          </button>
          <button
            type="button"
            onClick={handleHoldToggle}
            className="flex-1 rounded-[var(--radius-sm)] border border-border-strong bg-white py-2 text-center text-xs font-semibold text-foreground transition-colors hover:bg-slate-100"
          >
            {isHeld ? "Resume [F9]" : "Hold Cart [F9]"}
          </button>
        </div>

        <div className="flex items-center justify-center border-t border-border bg-slate-50 py-1.5 text-[0.65rem] text-muted-foreground">
          <span>⌨️ Press <kbd className="rounded border bg-white px-1 font-mono font-bold text-foreground">F9</kbd> or <kbd className="rounded border bg-white px-1 font-mono font-bold text-foreground">F10</kbd> on your keyboard to test live</span>
        </div>
      </div>

      {/* Synced To Drive Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -right-3 -top-5 flex items-center gap-2 rounded-[var(--radius-md)] border border-border bg-white px-3.5 py-2.5 shadow-[var(--shadow-card)] sm:-right-8"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-tint text-primary-darker">
          <Wifi className="h-3.5 w-3.5" />
        </span>
        <div className="text-[0.68rem]">
          <p className="font-bold text-foreground">Drive Cloud Backup</p>
          <p className="text-muted-foreground">Auto-synced to your Gmail</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
