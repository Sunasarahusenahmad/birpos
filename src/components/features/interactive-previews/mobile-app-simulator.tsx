"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Monitor, Wifi, WifiOff, QrCode, Plus, CheckCircle2, RefreshCw } from "lucide-react";

const sampleItems = [
  { name: "Tata Salt 1kg", price: 28 },
  { name: "Parle-G 250g", price: 30 },
  { name: "Amul Butter 100g", price: 58 },
];

// Decorative QR-style pattern (not a real code).
const QR_CELLS = Array.from({ length: 81 }, (_, i) => ((i * 7 + (i % 9) * 3) % 5 < 2 ? 1 : 0));

export function MobileAppSimulator() {
  const [paired, setPaired] = useState(false);
  const [online, setOnline] = useState(true);
  const [cart, setCart] = useState<number[]>([]);
  const [queued, setQueued] = useState(0);
  const [synced, setSynced] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const total = cart.reduce((sum, i) => sum + sampleItems[i].price, 0);

  const flash = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  const saveSale = () => {
    if (!cart.length) return;
    if (online) {
      setSynced((n) => n + 1);
      flash("Sale saved to desktop");
    } else {
      setQueued((n) => n + 1);
      flash("Offline - sale queued on phone");
    }
    setCart([]);
  };

  const toggleWifi = () => {
    if (!online && queued) {
      setSynced((n) => n + queued);
      flash(`${queued} queued sale${queued > 1 ? "s" : ""} synced`);
      setQueued(0);
    }
    setOnline((v) => !v);
  };

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white shadow-[var(--shadow-lifted)]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-surface-muted px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
            <Smartphone className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground sm:text-sm">BirStock Mobile App - Phone + Desktop</h4>
            <p className="text-[0.68rem] text-muted-foreground">
              QR pairing over shop Wi-Fi · offline queue · illustrative demo
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={toggleWifi}
          disabled={!paired}
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold disabled:opacity-50 ${
            online ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
          }`}
        >
          {online ? <Wifi className="h-3.5 w-3.5" /> : <WifiOff className="h-3.5 w-3.5" />}
          {online ? "Shop Wi-Fi connected" : "Wi-Fi dropped - tap to reconnect"}
        </button>
      </div>

      <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Desktop side */}
        <div className="space-y-4 p-4 sm:p-6">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <Monitor className="h-4 w-4" /> BirStock on your PC
          </span>

          {!paired ? (
            <div className="rounded-lg border border-border p-4 text-center">
              <p className="text-xs font-semibold text-foreground">Device pairing</p>
              <div className="mx-auto mt-3 grid h-28 w-28 grid-cols-9 gap-[2px] rounded-md bg-white p-1.5 ring-1 ring-border">
                {QR_CELLS.map((on, i) => (
                  <span key={i} className={on ? "bg-foreground" : "bg-transparent"} />
                ))}
              </div>
              <p className="mt-3 text-[0.68rem] text-muted-foreground">
                Scan this code in the BirStock Mobile App. Both devices must be on the same Wi-Fi/LAN.
              </p>
              <button
                type="button"
                onClick={() => {
                  setPaired(true);
                  flash("Phone paired");
                }}
                className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-white hover:bg-primary-dark"
              >
                <QrCode className="h-3.5 w-3.5" /> Simulate QR scan
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <span className="text-xs font-semibold text-foreground">Paired device</span>
                <span className="text-xs font-bold text-emerald-700">Owner&apos;s phone</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-primary-tint p-3 text-center">
                  <p className="font-display text-2xl font-extrabold text-primary-darker">{synced}</p>
                  <p className="text-[0.68rem] text-primary-darker/80">Phone sales received</p>
                </div>
                <div className="rounded-lg bg-surface-muted p-3 text-center">
                  <p className="font-display text-2xl font-extrabold text-foreground">{queued}</p>
                  <p className="text-[0.68rem] text-muted-foreground">Waiting on phone</p>
                </div>
              </div>
              <p className="text-[0.68rem] text-muted-foreground">
                The desktop stays the main database. Reports, backups and settings live here.
              </p>
            </div>
          )}
        </div>

        {/* Phone side */}
        <div className="flex justify-center bg-slate-50/60 p-4 sm:p-6">
          <div className="relative w-56 rounded-[1.8rem] border-[6px] border-foreground bg-white p-3 shadow-xl">
            <div className="mx-auto mb-2 h-1.5 w-14 rounded-full bg-foreground/80" />
            {!paired ? (
              <div className="flex h-72 flex-col items-center justify-center text-center">
                <QrCode className="h-10 w-10 text-primary" />
                <p className="mt-2 text-xs font-semibold text-foreground">Scan desktop QR to pair</p>
              </div>
            ) : (
              <div className="flex h-72 flex-col">
                <p className="text-[0.7rem] font-bold text-foreground">New sale</p>
                <div className="mt-2 space-y-1.5">
                  {sampleItems.map((item, i) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setCart((c) => [...c, i])}
                      className="flex w-full items-center justify-between rounded-md border border-border px-2 py-1.5 text-left text-[0.68rem] hover:border-primary/40"
                    >
                      <span>{item.name}</span>
                      <span className="flex items-center gap-1 font-semibold">
                        &#8377;{item.price} <Plus className="h-3 w-3 text-primary" />
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-auto space-y-2 border-t border-border pt-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span>{cart.length} items</span>
                    <span>&#8377;{total}</span>
                  </div>
                  <button
                    type="button"
                    onClick={saveSale}
                    disabled={!cart.length}
                    className="w-full rounded-md bg-primary py-2 text-xs font-bold text-white disabled:opacity-40"
                  >
                    Save sale
                  </button>
                </div>
              </div>
            )}

            <AnimatePresence>
              {toast ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-x-3 bottom-3 flex items-center gap-1.5 rounded-md bg-foreground px-2 py-1.5 text-[0.65rem] font-semibold text-white"
                >
                  {toast.includes("queued") ? (
                    <RefreshCw className="h-3 w-3 text-amber-400" />
                  ) : (
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  )}
                  {toast}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
