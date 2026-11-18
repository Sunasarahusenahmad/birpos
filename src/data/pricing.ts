// Single source of truth for plan prices. Update the numbers here and the pricing
// page, home teaser, JSON-LD offers, and FAQ answers all follow.

export type Plan = {
  id: "basic" | "pro" | "lifetime";
  name: string;
  /** Price in INR (whole rupees). */
  price: number;
  /** Short billing label shown after the price. */
  period: string;
  /** ISO 8601 duration for schema.org billing (omitted for one-time). */
  billingDuration?: "P1Y";
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
/** Whether published prices include GST. Flip this one value to change it site-wide. */
export const PRICES_INCLUDE_GST = false;
export const TAX_LABEL = PRICES_INCLUDE_GST ? "incl. GST" : "+ GST";
/** Sentence used on the pricing page, FAQ and Terms. */
export const TAX_SENTENCE = PRICES_INCLUDE_GST
  ? "All prices are inclusive of GST."
  : "All prices are exclusive of GST - GST is charged extra as applicable.";

/** Free support bundled with a Lifetime licence, in months. */
export const LIFETIME_FREE_SUPPORT_MONTHS = 6;
/** Yearly support renewal for Lifetime licences once the free period ends. */
export const SUPPORT_RENEWAL_PRICE = 5000;

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 999,
    period: "/year",
    billingDuration: "P1Y",
    description: "Essential desktop billing at the lowest yearly price. Ideal for a single small shop starting out.",
    bestFor: "Small & new shops",
    priceNote: "Just ₹83/month, billed yearly",
    includesMobile: false,
    features: [
      "Quick POS & Touch POS billing with barcode scanning",
      "Inventory with low-stock alerts & Excel import/export",
      "Customer Khata, payments & sales returns",
      "Supplier purchases, dues & purchase returns",
      "GST invoices - thermal & A4 layouts",
      "Sales, profit/loss & GST reports",
      "Expenses & other income tracking",
      "Single company/firm",
      "Local backup",
      "PIN App Lock & financial year management",
      "Software updates for the full year",
      "Full support - email, phone & remote setup help",
    ],
    notIncluded: [
      "BirStock Mobile App",
      "Multiple companies/firms",
      "Google Drive backup",
      "New feature modules",
    ],
    cta: "Get Basic Plan",
  },
  {
    id: "pro",
    name: "Pro",
    price: 2999,
    period: "/year",
    billingDuration: "P1Y",
    description: "Every BirStock feature plus the BirStock Mobile App, renewed yearly with full support.",
    bestFor: "Most retail & wholesale shops",
    badge: "Most Popular · Includes Mobile App",
    highlighted: true,
    priceNote: "Just ₹250/month, billed yearly",
    includesMobile: true,
    features: [
      "Everything in Basic",
      "BirStock Mobile App included",
      "Bill and check stock from your phone over shop Wi-Fi",
      "Multiple companies/firms with separate data",
      "Local + Google Drive backup",
      "New features released during your plan included",
      "Software updates for the full year",
      "Full priority support with remote setup help",
    ],
    cta: "Get Pro Plan",
  },
  {
    id: "lifetime",
    name: "Lifetime",
    price: 12999,
    period: "one-time",
    description: "Pay once and own BirStock permanently - all features and the BirStock Mobile App included.",
    bestFor: "Owners who want no recurring fees",
    badge: "Own It Forever · Includes Mobile App",
    priceNote: `One-time payment · ${LIFETIME_FREE_SUPPORT_MONTHS} months support included`,
    includesMobile: true,
    features: [
      "Permanent licence - no renewal needed to keep billing",
      "All BirStock desktop features",
      "BirStock Mobile App included",
      "Bug-fix & stability updates for included features",
      "Free installation & onboarding help",
      `${LIFETIME_FREE_SUPPORT_MONTHS} months of full support included`,
      `Support after ${LIFETIME_FREE_SUPPORT_MONTHS} months: ${formatINR(SUPPORT_RENEWAL_PRICE)}/year (optional)`,
      "New feature modules available as optional add-ons, priced per feature",
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

/** Plain-English pricing summary reused in FAQ answers and meta descriptions. */
export const pricingSummary = `${formatINR(getPlan("basic").price)}/year (Basic), ${formatINR(
  getPlan("pro").price
)}/year (Pro, includes the BirStock Mobile App), or ${formatINR(
  getPlan("lifetime").price
)} one-time for a permanent licence with the mobile app and ${LIFETIME_FREE_SUPPORT_MONTHS} months of support${PRICES_INCLUDE_GST ? " (GST included)" : " (plus GST)"}`;
