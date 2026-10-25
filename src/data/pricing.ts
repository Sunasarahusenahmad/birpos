// Single source of truth for plan prices. Update the numbers here and the pricing
// page, home teaser, JSON-LD offers, and FAQ answers all follow.

export type Plan = {
  id: "monthly" | "yearly" | "lifetime";
  name: string;
  /** Price in INR (whole rupees). */
  price: number;
  /** Short billing label shown after the price. */
  period: string;
  /** ISO 8601 duration for schema.org billing (omitted for one-time). */
  billingDuration?: "P1M" | "P1Y";
  description: string;
  bestFor: string;
  badge?: string;
  highlighted?: boolean;
  priceNote: string;
  includesMobile: boolean;
  features: string[];
  notIncluded?: string[];
  cta: string;
};

export const CURRENCY = "INR";
/** Published prices include GST. */
export const PRICES_INCLUDE_GST = true;
export const TAX_LABEL = PRICES_INCLUDE_GST ? "incl. GST" : "+ GST";

export const plans: Plan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: 799,
    period: "/month",
    billingDuration: "P1M",
    description: "Start billing today with a low monthly payment. Ideal if you want to try BirStock at your counter first.",
    bestFor: "New shops & seasonal businesses",
    priceNote: "Billed every month",
    includesMobile: false,
    features: [
      "Quick POS & Touch POS billing with barcode scanning",
      "Inventory with low-stock alerts & Excel import/export",
      "Customer Khata, payments & sales returns",
      "Supplier purchases, dues & purchase returns",
      "GST invoices - thermal & A4 layouts",
      "Sales, profit/loss & GST reports",
      "Expenses & other income tracking",
      "Multiple companies/firms with separate data",
      "Local backup + Google Drive backup",
      "PIN App Lock & financial year management",
      "Software updates while your plan is active",
      "Email & phone support",
    ],
    notIncluded: ["BirStock Mobile App"],
    cta: "Start Monthly",
  },
  {
    id: "yearly",
    name: "Yearly",
    price: 2999,
    period: "/year",
    billingDuration: "P1Y",
    description: "Everything in BirStock plus the BirStock Mobile App - at the lowest cost per month.",
    bestFor: "Most retail & wholesale shops",
    badge: "Best Value · Includes Mobile App",
    highlighted: true,
    priceNote: "Just ₹250/month, billed yearly",
    includesMobile: true,
    features: [
      "Everything in Monthly",
      "BirStock Mobile App included",
      "Bill and check stock from your phone over shop Wi-Fi",
      "New features released during your plan included",
      "Software updates for the full year",
      "Priority support with remote setup help",
    ],
    cta: "Get Yearly Plan",
  },
  {
    id: "lifetime",
    name: "Lifetime",
    price: 12999,
    period: "one-time",
    description: "Pay once and own your BirStock licence permanently. No renewals to keep billing.",
    bestFor: "Owners who want no recurring fees",
    badge: "Own It Forever",
    priceNote: "One-time payment · permanent licence",
    includesMobile: false,
    features: [
      "Permanent licence - no renewal needed to keep billing",
      "All current BirStock desktop features",
      "Bug-fix & stability updates for included features",
      "Free installation & onboarding help",
      "Email & phone support",
      "New feature modules available as optional add-ons, priced per feature",
      "BirStock Mobile App available as an add-on",
    ],
    cta: "Buy Lifetime Licence",
  },
];

export function getPlan(id: Plan["id"]) {
  return plans.find((p) => p.id === id)!;
}

export function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

/** Yearly saving compared to paying monthly for 12 months. */
export function yearlySaving() {
  const monthly = getPlan("monthly").price * 12;
  const yearly = getPlan("yearly").price;
  return { amount: monthly - yearly, percent: Math.round(((monthly - yearly) / monthly) * 100) };
}

/** Plain-English pricing summary reused in FAQ answers and meta descriptions. */
export const pricingSummary = `${formatINR(getPlan("monthly").price)}/month, ${formatINR(
  getPlan("yearly").price
)}/year (includes the BirStock Mobile App), or ${formatINR(getPlan("lifetime").price)} one-time for a permanent licence`;
