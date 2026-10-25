// Feature slugs that have an interactive preview. Kept outside the client
// dispatcher so server components can check it.
export const PREVIEW_SLUGS = [
  "pos-billing",
  "inventory-management",
  "customer-khata",
  "supplier-management",
  "sales-purchase-returns",
  "gst-billing",
  "backup-sync",
  "reports-analytics",
  "expenses-income",
  "security",
  "financial-year",
  "mobile-app",
] as const;

export function hasFeaturePreview(slug: string) {
  return (PREVIEW_SLUGS as readonly string[]).includes(slug);
}
