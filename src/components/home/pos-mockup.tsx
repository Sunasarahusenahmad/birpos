"use client";

import { motion } from "framer-motion";
import { Wifi, WifiOff, ScanLine } from "lucide-react";

const items = [
  { name: "Amul Butter 500g", qty: 2, price: 285 },
  { name: "Tata Salt 1kg", qty: 1, price: 28 },
  { name: "Basmati Rice 5kg", qty: 1, price: 640 },
  { name: "Colgate Toothpaste", qty: 3, price: 174 },
];

const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

export function PosMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative mx-auto w-full max-w-md animate-float"
    >
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-[var(--shadow-lifted)]">
        <div className="flex items-center justify-between border-b border-border bg-surface-muted px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-sm font-semibold text-foreground">New Bill · Counter 1</span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-primary-tint px-2.5 py-1 text-[0.65rem] font-semibold text-primary-darker">
            <WifiOff className="h-3 w-3" /> Offline Mode
          </span>
        </div>

        <div className="flex items-center gap-2 border-b border-border px-5 py-3 text-sm text-muted-foreground">
          <ScanLine className="h-4 w-4 text-primary" />
          <span>Scan barcode or search item…</span>
        </div>

        <div className="divide-y divide-border">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
              className="flex items-center justify-between px-5 py-3 text-sm"
            >
              <div>
                <p className="font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.qty} &times; &#8377;{item.price}
                </p>
              </div>
              <p className="font-semibold text-foreground">
                &#8377;{(item.qty * item.price).toLocaleString("en-IN")}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-2 border-t border-dashed border-border px-5 py-4">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>GST (18%)</span>
            <span>&#8377;{Math.round(total * 0.18).toLocaleString("en-IN")}</span>
          </div>
          <div className="flex items-center justify-between text-base font-bold text-foreground">
            <span>Total</span>
            <span>&#8377;{Math.round(total * 1.18).toLocaleString("en-IN")}</span>
          </div>
        </div>

        <div className="flex gap-2 bg-surface-muted px-5 py-4">
          <div className="flex-1 rounded-[var(--radius-sm)] bg-primary py-2.5 text-center text-sm font-semibold text-white">
            F10 · Checkout
          </div>
          <div className="flex-1 rounded-[var(--radius-sm)] border border-border-strong bg-white py-2.5 text-center text-sm font-medium text-foreground">
            F9 · Hold
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute -right-6 -top-6 flex items-center gap-2 rounded-[var(--radius-md)] border border-border bg-white px-4 py-3 shadow-[var(--shadow-card)] sm:-right-10"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-tint text-primary-darker">
          <Wifi className="h-4 w-4" />
        </span>
        <div className="text-xs">
          <p className="font-semibold text-foreground">Synced to Drive</p>
          <p className="text-muted-foreground">Last backup 10:00 PM</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
