"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CloudUpload,
  HardDrive,
  ShieldCheck,
  RotateCw,
  CheckCircle,
  Database,
  ArrowRight,
  Lock,
  Calendar,
} from "lucide-react";

export function BackupSimulator() {
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [backupSuccess, setBackupSuccess] = useState(false);
  const [restoreMode, setRestoreMode] = useState<"clean" | "merge">("merge");
  const [retentionCount, setRetentionCount] = useState(20);

  const handleTriggerBackup = () => {
    setIsBackingUp(true);
    setBackupSuccess(false);
    setTimeout(() => {
      setIsBackingUp(false);
      setBackupSuccess(true);
    }, 1500);
  };

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white shadow-[var(--shadow-lifted)]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-muted px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
            <CloudUpload className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground sm:text-sm">
              BirStock Dual-Backup &amp; Google Drive Disaster Recovery
            </h4>
            <p className="text-[0.68rem] text-muted-foreground">
              Local encrypted zip archives + personal Google Drive OAuth2 sync
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
            <ShieldCheck className="h-3.5 w-3.5" /> 100% Private Cloud
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-[1.15fr_1fr] lg:divide-x lg:divide-y-0">
        {/* Left Column: Live Backup Pipeline Visualization */}
        <div className="p-4 sm:p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-border pb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Dual-Backup Redundancy Pipeline
            </span>
            <span className="text-[0.68rem] text-muted-foreground font-mono">
              Auto Schedule: Daily @ 22:00
            </span>
          </div>

          {/* Pipeline visual cards */}
          <div className="space-y-3">
            {/* Step 1: Local SQLite WASM */}
            <div className="flex items-center gap-3 rounded-lg border border-border bg-white p-3 shadow-xs">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-tint text-primary-darker">
                <Database className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-foreground">1. Local SQLite Embedded WASM DB</p>
                <p className="text-[0.68rem] text-muted-foreground">
                  Ultra-fast local storage · No external server or port required
                </p>
              </div>
              <span className="text-emerald-700 text-xs font-bold">Active</span>
            </div>

            {/* Step 2: Encrypted Local Archive */}
            <div className="flex items-center gap-3 rounded-lg border border-border bg-white p-3 shadow-xs">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Lock className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-foreground">2. AES-Encrypted Local .ZIP Archive</p>
                <p className="text-[0.68rem] text-muted-foreground">
                  Saved to disk · Auto-pruning keeps last {retentionCount} snapshots
                </p>
              </div>
              <span className="rounded bg-surface-muted px-1.5 py-0.5 text-[0.65rem] font-mono font-bold">
                20 Copies
              </span>
            </div>

            {/* Step 3: Google Drive OAuth2 Sync */}
            <div className="flex items-center gap-3 rounded-lg border border-border bg-white p-3 shadow-xs">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <CloudUpload className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-foreground">3. Google Drive OAuth2 Sync</p>
                <p className="text-[0.68rem] text-muted-foreground">
                  Target: /Inventory_App_Backups on your own Gmail
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-700">Connected</span>
            </div>
          </div>

          {/* Trigger Backup Button */}
          <div className="space-y-2 pt-2">
            <button
              type="button"
              onClick={handleTriggerBackup}
              disabled={isBackingUp}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-xs font-bold text-white shadow-xs transition-all hover:bg-primary-dark disabled:opacity-60"
            >
              <RotateCw className={`h-4 w-4 ${isBackingUp ? "animate-spin" : ""}`} />
              {isBackingUp ? "Generating Encrypted Zip & Syncing to Drive…" : "Run Manual Backup Now"}
            </button>

            <AnimatePresence>
              {backupSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 rounded-md bg-emerald-100 p-2.5 text-xs font-bold text-emerald-800"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>Snapshot BirStock_Backup_2025_09_04.zip uploaded to Google Drive!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Smart Restore Engine (Clean Replace vs Smart Merge) */}
        <div className="flex flex-col justify-between bg-slate-50/60 p-4 sm:p-6 space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Disaster Recovery &amp; Restore Modes
              </span>
              <span className="text-[0.68rem] font-bold text-primary">Conflict-Free</span>
            </div>

            {/* Restore Mode Switcher */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRestoreMode("merge")}
                className={`rounded-lg border p-3 text-left transition-all ${
                  restoreMode === "merge"
                    ? "border-primary bg-white shadow-xs"
                    : "border-border bg-white/50 opacity-70 hover:opacity-100"
                }`}
              >
                <p className="text-xs font-bold text-foreground">Mode A: Smart Merge</p>
                <p className="mt-1 text-[0.65rem] text-muted-foreground leading-relaxed">
                  Merges items &amp; sales without erasing newer records. De-duplicates by Barcode &amp; Phone.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setRestoreMode("clean")}
                className={`rounded-lg border p-3 text-left transition-all ${
                  restoreMode === "clean"
                    ? "border-primary bg-white shadow-xs"
                    : "border-border bg-white/50 opacity-70 hover:opacity-100"
                }`}
              >
                <p className="text-xs font-bold text-foreground">Mode B: Clean Replace</p>
                <p className="mt-1 text-[0.65rem] text-muted-foreground leading-relaxed">
                  Full snapshot restore. Automatically creates a safety backup before overwriting.
                </p>
              </button>
            </div>

            {/* Detailed Explanation Box */}
            <div className="rounded-lg border border-border bg-white p-3.5 text-xs space-y-2">
              <p className="font-bold text-foreground">
                Selected: {restoreMode === "merge" ? "Smart Merge Conflict Resolver" : "Clean Replace with Safety Guard"}
              </p>
              {restoreMode === "merge" ? (
                <ul className="space-y-1.5 text-[0.68rem] text-muted-foreground list-disc pl-4">
                  <li>Resolves ID collisions between multiple backup databases</li>
                  <li>Prevents duplicate customers by matching mobile numbers</li>
                  <li>Keeps modern stock levels while importing historical invoices</li>
                </ul>
              ) : (
                <ul className="space-y-1.5 text-[0.68rem] text-muted-foreground list-disc pl-4">
                  <li>Takes a zero-risk timestamped safety archive before touching data</li>
                  <li>Exact bit-for-bit restoration of audited accounts</li>
                  <li>Ideal for migrating to a brand-new counter computer</li>
                </ul>
              )}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white p-3 text-[0.65rem] text-muted-foreground text-center">
            Zero SaaS lock-in: You own the SQLite file and your Google Drive credentials.
          </div>
        </div>
      </div>
    </div>
  );
}
