"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Unlock,
  KeyRound,
  Mail,
  Clock,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

export function SecuritySimulator() {
  const [pin, setPin] = useState<string[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isAutoLocked, setIsAutoLocked] = useState(false);

  const CORRECT_PIN = "1379";

  const handleDigit = (digit: string) => {
    if (pin.length < 4) {
      const newPin = [...pin, digit];
      setPin(newPin);
      if (newPin.length === 4) {
        if (newPin.join("") === CORRECT_PIN) {
          setIsUnlocked(true);
        } else {
          setTimeout(() => setPin([]), 400);
        }
      }
    }
  };

  const handleClear = () => {
    setPin([]);
    setIsUnlocked(false);
  };

  const handleSendOtp = () => {
    setOtpSent(true);
  };

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white shadow-[var(--shadow-lifted)]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-muted px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground sm:text-sm">
              BirStock Master PIN &amp; Terminal Lockout Simulator
            </h4>
            <p className="text-[0.68rem] text-muted-foreground">
              Master PIN authorization, inactivity auto-lock &amp; SMTP email OTP recovery
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-mono font-bold text-slate-800">
            Hint PIN: 1 3 7 9
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-[1.1fr_1fr] lg:divide-x lg:divide-y-0">
        {/* Left Column: Interactive 4-Digit Keypad */}
        <div className="p-4 sm:p-6 flex flex-col items-center justify-center">
          <div className="w-full max-w-xs text-center space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-tint text-primary-darker">
              {isUnlocked ? <Unlock className="h-6 w-6 text-emerald-600" /> : <Lock className="h-6 w-6" />}
            </div>

            <div>
              <p className="text-sm font-bold text-foreground">
                {isUnlocked ? "Dashboard & Reports Unlocked" : "Enter 4-Digit Master Security PIN"}
              </p>
              <p className="text-[0.68rem] text-muted-foreground">
                Protects financial data, price modifications &amp; settings
              </p>
            </div>

            {/* PIN Dots Display */}
            <div className="flex justify-center gap-3 py-2">
              {[0, 1, 2, 3].map((idx) => {
                const filled = pin.length > idx;
                return (
                  <motion.div
                    key={idx}
                    initial={false}
                    animate={{ scale: filled ? 1.15 : 1 }}
                    className={`h-4 w-4 rounded-full border-2 transition-colors ${
                      isUnlocked
                        ? "border-emerald-600 bg-emerald-500"
                        : filled
                        ? "border-primary bg-primary"
                        : "border-border bg-surface-muted"
                    }`}
                  />
                );
              })}
            </div>

            {/* Keypad Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((digit) => (
                <button
                  key={digit}
                  type="button"
                  onClick={() => handleDigit(digit)}
                  disabled={isUnlocked}
                  className="rounded-lg border border-border bg-white py-2.5 text-sm font-bold text-foreground shadow-xs transition-all hover:bg-surface-muted active:scale-95 disabled:opacity-50"
                >
                  {digit}
                </button>
              ))}
              <button
                type="button"
                onClick={handleClear}
                className="rounded-lg border border-border bg-surface-muted py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => handleDigit("0")}
                disabled={isUnlocked}
                className="rounded-lg border border-border bg-white py-2.5 text-sm font-bold text-foreground shadow-xs hover:bg-surface-muted active:scale-95 disabled:opacity-50"
              >
                0
              </button>
              <button
                type="button"
                onClick={() => setShowOtpModal(true)}
                className="rounded-lg border border-amber-200 bg-amber-50 py-2.5 text-[0.65rem] font-bold text-amber-800 hover:bg-amber-100"
              >
                Forgot?
              </button>
            </div>

            {isUnlocked && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-md bg-emerald-100 p-2 text-xs font-bold text-emerald-800"
              >
                ✓ PIN Verified. Full administrative privileges granted.
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Column: Inactivity Timer & Recovery Flow */}
        <div className="flex flex-col justify-between bg-slate-50/60 p-4 sm:p-6 space-y-4">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Fail-Safe Security Features
            </span>

            {/* Inactivity Screen Lock Feature */}
            <div className="rounded-lg border border-border bg-white p-3.5 space-y-2 shadow-xs">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <p className="text-xs font-bold text-foreground">Inactivity Timeout Auto-Lock</p>
              </div>
              <p className="text-[0.68rem] text-muted-foreground leading-relaxed">
                Prevents unauthorized billing or tampering when cashiers step away from the register.
              </p>
              <button
                type="button"
                onClick={() => setIsAutoLocked(!isAutoLocked)}
                className="rounded border border-border bg-surface-muted px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-slate-200"
              >
                {isAutoLocked ? "Unlock Frosted Shield" : "Simulate 3-Min Inactivity Lock"}
              </button>
            </div>

            {isAutoLocked && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg border border-slate-700 bg-slate-900 p-4 text-center text-white space-y-2"
              >
                <Lock className="mx-auto h-6 w-6 text-amber-400" />
                <p className="text-xs font-bold">TERMINAL TEMPORARILY LOCKED</p>
                <p className="text-[0.65rem] text-slate-300">
                  Screen blanked due to idle counter. Enter master PIN to resume.
                </p>
              </motion.div>
            )}

            {/* OTP Password Recovery */}
            <div className="rounded-lg border border-border bg-white p-3.5 space-y-2 shadow-xs">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-600" />
                <p className="text-xs font-bold text-foreground">SMTP Email OTP Recovery</p>
              </div>
              <p className="text-[0.68rem] text-muted-foreground leading-relaxed">
                Forgot the 4-digit PIN? BirStock securely generates an encrypted 6-digit OTP to the registered owner email address.
              </p>
              <button
                type="button"
                onClick={() => setShowOtpModal(true)}
                className="rounded border border-border bg-surface-muted px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-slate-200"
              >
                Test Forgot PIN Recovery
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white p-3 text-[0.65rem] text-muted-foreground text-center">
            100% Private: All authentication is computed locally without third-party server dependencies.
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      <AnimatePresence>
        {showOtpModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <KeyRound className="h-5 w-5 text-primary" />
                  <h5 className="font-bold text-sm text-foreground">Reset Master PIN</h5>
                </div>
                <button onClick={() => setShowOtpModal(false)} className="text-muted-foreground hover:text-foreground">
                  &times;
                </button>
              </div>

              {!otpSent ? (
                <div className="space-y-3 text-xs">
                  <p className="text-muted-foreground">
                    We will send a 6-digit verification code to the registered owner email: <strong>owner@retailstore.in</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="w-full rounded-md bg-primary py-2 text-xs font-bold text-white hover:bg-primary-dark"
                  >
                    Send 6-Digit Email OTP
                  </button>
                </div>
              ) : (
                <div className="space-y-3 text-xs">
                  <div className="rounded bg-emerald-50 border border-emerald-200 p-2.5 text-emerald-800 font-mono text-[0.7rem]">
                    ✓ OTP code <strong>849201</strong> sent to owner email via secure SMTP.
                  </div>
                  <input
                    type="text"
                    defaultValue="849201"
                    className="w-full rounded border border-border px-3 py-1.5 font-mono text-center text-sm font-bold tracking-widest text-foreground"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsUnlocked(true);
                      setPin(["1", "3", "7", "9"]);
                      setShowOtpModal(false);
                    }}
                    className="w-full rounded-md bg-emerald-600 py-2 text-xs font-bold text-white hover:bg-emerald-700"
                  >
                    Verify OTP &amp; Reset PIN
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
