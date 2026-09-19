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

export function FeaturePreviewDispatcher({ slug }: { slug: string }) {
  switch (slug) {
    case "pos-billing":
      return <PosBillingSimulator />;
    case "inventory-management":
      return <InventorySimulator />;
    case "customer-khata":
      return <KhataSimulator />;
    case "supplier-management":
      return <SupplierSimulator />;
    case "gst-billing":
      return <GstSimulator />;
    case "backup-sync":
      return <BackupSimulator />;
    case "reports-analytics":
      return <ReportsSimulator />;
    case "security":
      return <SecuritySimulator />;
    case "financial-year":
      return <FinancialYearSimulator />;
    default:
      return <PosBillingSimulator />;
  }
}
