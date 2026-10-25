"use client";

import { PosBillingSimulator } from "./pos-billing-simulator";
import { InventorySimulator } from "./inventory-simulator";
import { KhataSimulator } from "./khata-simulator";
import { SupplierSimulator } from "./supplier-simulator";
import { GstSimulator } from "./gst-simulator";
import { BackupSimulator } from "./backup-simulator";
import { ReportsSimulator } from "./reports-simulator";
import { SecuritySimulator } from "./security-simulator";
import { FinancialYearSimulator } from "./financial-year-simulator";
import { MobileAppSimulator } from "./mobile-app-simulator";
import { ExpensesSimulator } from "./expenses-simulator";

const simulators: Record<string, () => React.ReactElement> = {
  "pos-billing": PosBillingSimulator,
  "inventory-management": InventorySimulator,
  "customer-khata": KhataSimulator,
  "supplier-management": SupplierSimulator,
  "sales-purchase-returns": SupplierSimulator,
  "gst-billing": GstSimulator,
  "backup-sync": BackupSimulator,
  "reports-analytics": ReportsSimulator,
  "expenses-income": ExpensesSimulator,
  "security": SecuritySimulator,
  "financial-year": FinancialYearSimulator,
  "mobile-app": MobileAppSimulator,
};

export function FeaturePreviewDispatcher({ slug }: { slug: string }) {
  const Simulator = simulators[slug] ?? PosBillingSimulator;
  return <Simulator />;
}
