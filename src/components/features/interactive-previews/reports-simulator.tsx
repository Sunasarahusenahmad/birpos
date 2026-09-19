"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  DollarSign,
  ArrowUpRight,
  Clock,
  Printer,
  FileSpreadsheet,
  Zap,
} from "lucide-react";

export function ReportsSimulator() {
  const [timeframe, setTimeframe] = useState<"today" | "week" | "month">("today");

  const revenueData = {
    today: { revenue: 38450, profit: 8920, bills: 42, margin: 23.2 },
    week: { revenue: 248900, profit: 57200, bills: 284, margin: 22.9 },
    month: { revenue: 984000, profit: 228000, bills: 1140, margin: 23.1 },
  }[timeframe];

  const topItems = [
    { name: "Amul Butter 500g", sold: 64, rev: 18240, status: "Fast Moving" },
    { name: "Fortune Sunflower Oil 1L", sold: 48, rev: 7920, status: "Fast Moving" },
    { name: "Tata Salt 1kg", sold: 35, rev: 980, status: "Steady" },
    { name: "Brite Detergent 1kg", sold: 3, rev: 420, status: "Slow Moving" },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white shadow-[var(--shadow-lifted)]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-muted px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
            <BarChart3 className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground sm:text-sm">
              BirStock Real-Time Analytics &amp; Profit Engine
            </h4>
            <p className="text-[0.68rem] text-muted-foreground">
              Instant local calculations · Zero cloud lag or monthly sync waits
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 rounded-full bg-primary-tint px-2.5 py-0.5 text-xs font-semibold text-primary-darker">
            <Zap className="h-3 w-3" /> 0.2ms Query Speed
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        {/* Timeframe Filter Tabs */}
        <div className="flex items-center justify-between">
          <div className="inline-flex rounded-lg border border-border bg-surface-muted p-1">
            {(["today", "week", "month"] as const).map((tf) => (
              <button
                key={tf}
                type="button"
                onClick={() => setTimeframe(tf)}
                className={`rounded-md px-3 py-1 text-xs font-bold capitalize transition-all ${
                  timeframe === tf ? "bg-white text-primary-darker shadow-xs" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tf === "today" ? "Today" : tf === "week" ? "This Week" : "This Month"}
              </button>
            ))}
          </div>

          <span className="text-[0.68rem] font-mono text-muted-foreground">
            Live local snapshot · Auto-updates on every bill
          </span>
        </div>

        {/* 4 Stat Metrics */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-border bg-white p-3.5 shadow-xs">
            <span className="text-[0.68rem] font-bold text-muted-foreground uppercase">Gross Revenue</span>
            <p className="mt-1 font-display text-lg font-extrabold text-foreground sm:text-xl">
              &#8377;{revenueData.revenue.toLocaleString("en-IN")}
            </p>
            <span className="mt-1 flex items-center gap-1 text-[0.65rem] font-semibold text-emerald-700">
              <ArrowUpRight className="h-3 w-3" /> +14.2% vs last {timeframe}
            </span>
          </div>

          <div className="rounded-lg border border-border bg-white p-3.5 shadow-xs">
            <span className="text-[0.68rem] font-bold text-muted-foreground uppercase">Estimated Profit</span>
            <p className="mt-1 font-display text-lg font-extrabold text-primary sm:text-xl">
              &#8377;{revenueData.profit.toLocaleString("en-IN")}
            </p>
            <span className="mt-1 text-[0.65rem] font-semibold text-muted-foreground">
              Margin: {revenueData.margin}%
            </span>
          </div>

          <div className="rounded-lg border border-border bg-white p-3.5 shadow-xs">
            <span className="text-[0.68rem] font-bold text-muted-foreground uppercase">Total Invoices</span>
            <p className="mt-1 font-display text-lg font-extrabold text-foreground sm:text-xl">
              {revenueData.bills} Bills
            </p>
            <span className="mt-1 text-[0.65rem] text-muted-foreground">
              Avg: &#8377;{Math.round(revenueData.revenue / revenueData.bills)}/bill
            </span>
          </div>

          <div className="rounded-lg border border-border bg-white p-3.5 shadow-xs">
            <span className="text-[0.68rem] font-bold text-muted-foreground uppercase">Customer Dues</span>
            <p className="mt-1 font-display text-lg font-extrabold text-danger sm:text-xl">
              &#8377;42,850
            </p>
            <span className="mt-1 text-[0.65rem] text-muted-foreground">
              Across 18 Khata accounts
            </span>
          </div>
        </div>

        {/* Dynamic Simulated Revenue Graph */}
        <div className="rounded-lg border border-border bg-slate-50/70 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold text-foreground">Sales Velocity Curve</span>
            <span className="text-[0.68rem] font-semibold text-primary">Hourly Peak: 11:00 AM &amp; 7:30 PM</span>
          </div>

          {/* Bar chart simulation */}
          <div className="flex h-32 items-end justify-between gap-1.5 pt-4 sm:gap-3">
            {[40, 65, 85, 95, 70, 50, 80, 100, 90, 60, 45, 75].map((height, idx) => (
              <div key={idx} className="flex flex-1 flex-col items-center gap-1.5">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.5, delay: idx * 0.03 }}
                  className={`w-full rounded-t-sm ${
                    height > 80 ? "bg-primary" : "bg-primary/40"
                  } hover:bg-primary-dark transition-colors`}
                />
                <span className="text-[0.55rem] font-mono text-muted-foreground">
                  {idx * 2}:00
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Fast vs Slow Moving Item Table */}
        <div className="rounded-lg border border-border bg-white p-4 shadow-xs">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Inventory Movement Leaderboard
            </span>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
            >
              <Printer className="h-3.5 w-3.5" /> Export PDF
            </button>
          </div>

          <div className="divide-y divide-border text-xs">
            {topItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between py-2">
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-[0.65rem] text-muted-foreground">{item.sold} units sold</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">&#8377;{item.rev.toLocaleString("en-IN")}</p>
                  <span
                    className={`inline-block rounded px-1.5 py-0.5 text-[0.6rem] font-bold ${
                      item.status === "Fast Moving"
                        ? "bg-emerald-100 text-emerald-800"
                        : item.status === "Slow Moving"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-surface-muted text-muted-foreground"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
