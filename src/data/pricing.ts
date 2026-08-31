export type Plan = {
  id: string;
  name: string;
  description: string;
  bestFor: string;
  highlighted?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For a single counter getting off paper registers and notebooks.",
    bestFor: "Kirana stores & single-counter shops",
    features: [
      "Keyboard & Touch POS billing",
      "Inventory management with low-stock alerts",
      "Customer Khata / credit ledger",
      "GST-compliant invoicing (all rate slabs)",
      "Local automated backups",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description: "For stores running multiple counters and active supplier relationships.",
    bestFor: "Supermarkets, electronics & apparel retailers",
    highlighted: true,
    features: [
      "Everything in Starter",
      "Multi-counter billing with Hold Cart",
      "Supplier & purchase management",
      "Serial number tracking (electronics/mobiles)",
      "Automated Google Drive cloud backup",
      "Reports & business analytics dashboard",
      "Priority email + call support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For wholesalers and multi-store operators who need it all.",
    bestFor: "Wholesale distributors & multi-store chains",
    features: [
      "Everything in Growth",
      "Multi-store licensing",
      "Financial year management with carry-forward",
      "Custom onboarding & data migration",
      "Dedicated account support",
    ],
  },
];
