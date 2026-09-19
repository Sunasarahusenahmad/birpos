export type Feature = {
  slug: string;
  icon:
    | "billing"
    | "inventory"
    | "khata"
    | "supplier"
    | "gst"
    | "backup"
    | "reports"
    | "security"
    | "financial-year";
  name: string;
  shortName: string;
  tagline: string;
  metaDescription: string;
  summary: string;
  highlights: string[];
  workflow: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

export const features: Feature[] = [
  {
    slug: "pos-billing",
    icon: "billing",
    name: "Keyboard & Touch POS Billing",
    shortName: "POS Billing",
    tagline: "Sub-second billing, whether you type or tap",
    metaDescription:
      "BirStock gives you two billing modes in one app: a keyboard-driven Quick POS for high-volume cashiers and a touch-friendly Grid POS for cafes and boutiques. Barcode scanning, stock guards, and hold-cart multitasking included.",
    summary:
      "BirStock ships with two dedicated billing modes so every kind of counter - from a high-speed supermarket checkout to a touchscreen boutique register - gets an interface built for it, not a compromise.",
    highlights: [
      "Zero-mouse Quick POS: complete an entire sale with Tab, Enter and F1–F12 shortcuts",
      "Barcode scanner auto-add - scan and the item lands in the cart with the cursor already on quantity",
      "Stock Limit Guard blocks overselling with an instant alert before checkout",
      "Item-level and bill-level discounts, flat or percentage",
      "Built-in tender & change calculator for cash transactions",
      "Touch & Grid POS with category tabs and image cards for tap-to-bill checkout",
      "Minimize & Hold Cart - dock an in-progress bill and start a fresh one instantly",
    ],
    workflow: [
      {
        step: "Scan or search",
        detail: "Use a USB/wireless barcode scanner or type-ahead search to add products to the cart in milliseconds.",
      },
      {
        step: "Adjust & apply discounts",
        detail: "Modify quantity, apply per-item or bill-wide discounts, and BirStock recalculates totals and tax live.",
      },
      {
        step: "Hold if interrupted",
        detail: "If a customer steps away, minimize the cart to the sidebar and start billing the next customer without losing a single line item.",
      },
      {
        step: "Collect payment & print",
        detail: "Enter the amount tendered, get the exact change instantly, and print a branded receipt on thermal or A4.",
      },
    ],
    faqs: [
      {
        q: "Can one cashier run multiple bills at the same counter?",
        a: "Yes. The Minimize & Hold Cart feature lets a cashier dock an active bill and open a new one, then restore any held cart with a single click.",
      },
      {
        q: "Does BirStock stop me from selling out-of-stock items?",
        a: "Yes - the Stock Limit Guard blocks checkout and shows an alert the moment a cashier tries to sell more units than are available.",
      },
      {
        q: "What barcode scanners work with BirStock?",
        a: "Any standard USB or wireless handheld barcode scanner that emulates keyboard input works out of the box - no special drivers needed.",
      },
    ],
  },
  {
    slug: "inventory-management",
    icon: "inventory",
    name: "Smart Inventory Management",
    shortName: "Inventory",
    tagline: "Every product, every unit, always accurate",
    metaDescription:
      "Catalog products with barcodes, categories, cost & sale price, and minimum stock alerts. Track serial numbers for electronics and auto-update stock on every purchase, sale, and return.",
    summary:
      "BirStock keeps a single, always-accurate source of truth for stock - from single-item entry to bulk supplier stock-in - so you never sell what you don't have and never miss a reorder.",
    highlights: [
      "Barcode, SKU, category, unit (Pcs, Kg, Ltr, Box) and pricing on every product",
      "Minimum stock alerts flag low inventory before you run out",
      "Serial number tracking for electronics, mobiles and appliances with warranty history",
      "Supplier Stock-In records a purchase invoice and auto-increments stock instantly",
      "Auto-updates supplier outstanding dues the moment stock is recorded",
      "Fast bulk search and filtering across your entire catalog",
    ],
    workflow: [
      {
        step: "Add or import products",
        detail: "Create products individually or in bulk with barcode, category, cost price, sale price, and minimum stock threshold.",
      },
      {
        step: "Record stock-in",
        detail: "Open Record Stock In, pick a supplier, enter the bill number, and add the purchased items and quantities.",
      },
      {
        step: "Auto stock & ledger update",
        detail: "BirStock increments product stock and updates the supplier's outstanding balance the instant the purchase is saved.",
      },
      {
        step: "Get a printable receipt",
        detail: "A purchase receipt PDF is generated automatically for your records and reconciliation.",
      },
    ],
    faqs: [
      {
        q: "Can I track serial numbers for electronics and mobiles?",
        a: "Yes. Turn on serial tracking per product to enforce IMEI/serial capture at sale time and maintain a warranty history.",
      },
      {
        q: "What happens to supplier dues when I record a purchase?",
        a: "The supplier's outstanding balance updates automatically based on the payment mode you select - cash, UPI, or credit.",
      },
    ],
  },
  {
    slug: "customer-khata",
    icon: "khata",
    name: "Customer Khata & Credit Ledger",
    shortName: "Customer Khata",
    tagline: "Digital Udhar, without the notebook",
    metaDescription:
      "Manage customer credit sales (Khata/Udhar) with color-coded ledgers, advance payments, and 1-click WhatsApp & PDF statements - fully offline and always accurate.",
    summary:
      "Replace the paper Khata notebook with a color-coded digital ledger that tracks every credit sale, payment, and return per customer - and can be shared instantly over WhatsApp.",
    highlights: [
      "Bill directly to a customer's account in Credit / Khata mode at checkout",
      "Color-coded timeline: Debit (sale), Credit (payment), and Return entries",
      "Record customer payments anytime - overpayments automatically become an Advance Balance",
      "1-click WhatsApp & PDF statement sharing for any customer",
      "Full searchable customer directory with running due totals",
    ],
    workflow: [
      {
        step: "Sell on credit",
        detail: "Select Credit / Khata as the payment mode during checkout - the bill amount is charged straight to the customer's account.",
      },
      {
        step: "Track the running balance",
        detail: "Every sale, payment, and return appears on a single color-coded timeline per customer.",
      },
      {
        step: "Record a payment",
        detail: "Log a customer payment at any time; if it exceeds the due amount, BirStock books the surplus as an advance.",
      },
      {
        step: "Share a statement",
        detail: "Generate a branded PDF ledger statement and send it straight to WhatsApp in one click.",
      },
    ],
    faqs: [
      {
        q: "What happens if a customer overpays their due amount?",
        a: "BirStock automatically records the excess as an Advance Balance, which is applied against their next credit sale.",
      },
      {
        q: "Can I send a customer their outstanding balance on WhatsApp?",
        a: "Yes - every customer ledger has a 1-click option to generate and share a branded PDF statement over WhatsApp.",
      },
    ],
  },
  {
    slug: "supplier-management",
    icon: "supplier",
    name: "Supplier & Purchase Management",
    shortName: "Suppliers",
    tagline: "Every vendor, every rupee, tracked",
    metaDescription:
      "A full vendor directory with purchase history, outstanding dues, direct payment settlement, and supplier purchase returns (debit notes) - built into BirStock.",
    summary:
      "From onboarding a new distributor to settling a due with a cheque number, BirStock gives you a complete supplier ledger alongside your inventory - not a separate spreadsheet.",
    highlights: [
      "Comprehensive vendor directory with total dues and full purchase history",
      "Line-item detail view for every purchase, downloadable as PDF",
      "Direct payment settlement with reference notes (Cheque No., Bank UTR No.)",
      "Supplier Purchase Returns (Debit Notes) for damaged, expired, or excess stock",
      "Stock and supplier balance adjust automatically on every return",
    ],
    workflow: [
      {
        step: "Add a supplier",
        detail: "Create a vendor profile with contact details - it immediately appears in your purchase and return workflows.",
      },
      {
        step: "Record purchases",
        detail: "Every Stock-In against this supplier builds their purchase history and running due balance automatically.",
      },
      {
        step: "Settle dues",
        detail: "Log a payment against any supplier with cash, UPI, cheque, or bank transfer, complete with a reference note.",
      },
      {
        step: "Process a return",
        detail: "Look up a past purchase bill, select the items to return, and BirStock decrements stock and deducts the refund from the supplier's due - with a Debit Note generated automatically.",
      },
    ],
    faqs: [
      {
        q: "Can I return damaged or expired stock to a supplier?",
        a: "Yes - look up the original purchase bill, select the items, and BirStock generates a Debit Note while adjusting stock and the supplier's due balance.",
      },
      {
        q: "Can I attach a cheque or UTR number to a supplier payment?",
        a: "Yes, every payment settlement supports a reference note field for cheque numbers or bank UTR references.",
      },
    ],
  },
  {
    slug: "gst-billing",
    icon: "gst",
    name: "Multi-Rate GST & Invoicing",
    shortName: "GST Billing",
    tagline: "Fully compliant, every single bill",
    metaDescription:
      "Generate GST-compliant Tax Invoices and Bills of Supply with CGST/SGST/IGST breakdown, HSN/SAC codes, and automatic amount-in-words - printable on thermal or A4.",
    summary:
      "BirStock handles every GST rate slab used by Indian retailers and wholesalers, and prints a fully compliant invoice on whatever hardware you already own - from a 58mm thermal roll to A4 laser paper.",
    highlights: [
      "Supports GST 0%, 5%, 12%, 18%, 28% and Inter-State IGST",
      "Official Tax Invoice (B2B/B2C) with GSTIN and CGST/SGST/IGST breakup",
      "Bill of Supply generation for non-taxable or composite dealers",
      "HSN/SAC code support on every line item",
      "Automatic grand total conversion to Indian currency in words",
      "Auto-detects and prints on 58mm, 80mm thermal, or A4/A5 laser & inkjet printers",
    ],
    workflow: [
      {
        step: "Configure tax defaults",
        detail: "Set your default GST rates and GSTIN once in Settings - every new bill inherits them.",
      },
      {
        step: "Bill as usual",
        detail: "Tax is calculated live per line item as you bill, with CGST/SGST or IGST applied automatically by customer state.",
      },
      {
        step: "Choose the right document",
        detail: "Issue a Tax Invoice or a Bill of Supply depending on the customer and your registration type.",
      },
      {
        step: "Print anywhere",
        detail: "BirStock auto-detects your connected printer - thermal or laser - and formats the invoice to fit.",
      },
    ],
    faqs: [
      {
        q: "Does BirStock calculate CGST/SGST vs IGST automatically?",
        a: "Yes - based on your store's state and the customer's billing state, BirStock applies the correct intra-state or inter-state tax split.",
      },
      {
        q: "Can I print HSN/SAC codes on invoices?",
        a: "Yes, HSN/SAC codes are supported per product and printed on GST Tax Invoices.",
      },
    ],
  },
  {
    slug: "backup-sync",
    icon: "backup",
    name: "Automated Google Drive Backup",
    shortName: "Cloud Backup",
    tagline: "Cloud safety, without giving up your data",
    metaDescription:
      "Automated local and Google Drive backups on your own schedule, with Clean Replace and Smart Merge restore modes - so your business data is never one crash away from gone.",
    summary:
      "BirStock backs up to your own personal Google Drive account, on your own schedule, so you get cloud-grade disaster recovery without handing your business data to a third-party server.",
    highlights: [
      "Encrypted local zip backups with automatic retention (last 20 kept)",
      "Direct OAuth2 Google Drive sync to a dedicated Inventory_App_Backups folder",
      "Custom daily or weekly backup scheduling at a time you choose",
      "Clean Replace restore mode, with an automatic safety backup taken first",
      "Smart Merge restore mode - merges items, customers and sales, de-duplicating by barcode and phone number",
    ],
    workflow: [
      {
        step: "Connect your Google account",
        detail: "Authorize BirStock once from Settings to link your own Google Drive - your data stays in your own account.",
      },
      {
        step: "Set your schedule",
        detail: "Choose daily or weekly automated backups at a custom time, e.g. every night at 10 PM.",
      },
      {
        step: "Backups run silently",
        detail: "Local zip snapshots and Drive uploads happen automatically in the background with no action needed.",
      },
      {
        step: "Restore when needed",
        detail: "Pick Clean Replace for a full restore or Smart Merge to combine a backup with your current data - conflicts are resolved automatically.",
      },
    ],
    faqs: [
      {
        q: "Whose Google Drive does BirStock back up to?",
        a: "Your own. BirStock connects to your personal or business Google account via OAuth2 - Birtik Tech never stores or has access to your backup files.",
      },
      {
        q: "What's the difference between Clean Replace and Smart Merge restore?",
        a: "Clean Replace fully replaces your current database with the backup (after taking a safety snapshot first). Smart Merge instead combines the backup's items, customers, and sales into your current data, deduplicating by barcode and phone number.",
      },
    ],
  },
  {
    slug: "reports-analytics",
    icon: "reports",
    name: "Reports & Business Analytics",
    shortName: "Reports",
    tagline: "Know what's selling before you run out",
    metaDescription:
      "Real-time sales dashboards, profit/loss estimates, fast and slow-moving item reports, and exportable customer/supplier due lists - all generated instantly from your local data.",
    summary:
      "Every bill, purchase, and return in BirStock feeds a live analytics dashboard - so you always know your numbers without waiting on a cloud sync or a monthly export.",
    highlights: [
      "Real-time sales dashboard with daily and monthly revenue graphs",
      "Profit & loss estimates based on cost vs. sale price",
      "Fast-moving and slow-moving item reports to guide reordering",
      "Customer dues and supplier payables lists, always current",
      "One-click export to print or PDF for any report",
    ],
    workflow: [
      {
        step: "Bill as normal",
        detail: "Every sale, return, and purchase automatically feeds the reporting engine - no manual data entry.",
      },
      {
        step: "Open the dashboard",
        detail: "See today's revenue, monthly trends, and top-selling categories the moment you open BirStock.",
      },
      {
        step: "Drill into a report",
        detail: "Pull fast/slow-movers, dues lists, or profit estimates for any date range.",
      },
      {
        step: "Export & share",
        detail: "Print any report directly or export it to PDF for your accountant or business partner.",
      },
    ],
    faqs: [
      {
        q: "Do reports update in real time?",
        a: "Yes - since BirStock runs on a local embedded database, every report reflects the latest bill the instant it's saved.",
      },
      {
        q: "Can I export reports for my accountant?",
        a: "Yes, every report can be printed or exported to PDF directly from the Reports module.",
      },
    ],
  },
  {
    slug: "security",
    icon: "security",
    name: "Enterprise Security & Access Control",
    shortName: "Security",
    tagline: "Locked down at the counter, recoverable everywhere else",
    metaDescription:
      "A 4-digit master PIN, automatic inactivity lock, and email OTP PIN recovery protect BirStock - while your data stays 100% private on your own local machine.",
    summary:
      "BirStock protects sensitive screens with PIN-level access control and locks itself automatically when idle, while keeping every byte of your business data on your own machine - not a third-party server.",
    highlights: [
      "4-digit Master PIN protects dashboard, settings, financial data, and bill edits",
      "Automatic inactivity timeout locks the screen to stop unauthorized counter access",
      "Email OTP recovery sends a secure 6-digit code if the PIN is forgotten",
      "100% local, offline database - your data never touches a third-party server",
    ],
    workflow: [
      {
        step: "Set your master PIN",
        detail: "Choose a 4-digit PIN during setup to protect settings, financial data, and editing of past bills.",
      },
      {
        step: "Auto-lock on idle",
        detail: "BirStock automatically locks the screen after a configurable idle period.",
      },
      {
        step: "Recover if forgotten",
        detail: "Trigger Forgot PIN and BirStock emails a 6-digit OTP to your registered owner email to securely reset it.",
      },
    ],
    faqs: [
      {
        q: "What happens if I forget my master PIN?",
        a: "Use the Forgot PIN flow - BirStock sends a 6-digit OTP to your registered owner email so you can securely set a new one.",
      },
      {
        q: "Is my business data ever sent to a BirStock server?",
        a: "No. BirStock is offline-first - your data lives in a local database on your own computer. The only optional transfer is the encrypted backup you choose to send to your own Google Drive.",
      },
    ],
  },
  {
    slug: "financial-year",
    icon: "financial-year",
    name: "Financial Year Management",
    shortName: "Financial Year",
    tagline: "Close the books without losing a beat",
    metaDescription:
      "Create a new financial year in one click with automatic carry-forward of closing stock and customer/supplier dues, and PIN-protected switching between years.",
    summary:
      "Closing a financial year shouldn't mean re-entering opening balances by hand. BirStock isolates each year cleanly while carrying forward exactly what should continue.",
    highlights: [
      "One-click new financial year creation with a custom closing date",
      "Closing stock automatically becomes next year's opening stock",
      "Customer and supplier dues carry forward automatically",
      "Past years stay isolated and protected from accidental edits",
      "PIN-protected switching between financial years",
    ],
    workflow: [
      {
        step: "Set a closing date",
        detail: "Choose your financial year-end date, e.g. 31-Mar, to trigger the year-end process.",
      },
      {
        step: "Authenticate",
        detail: "Confirm with your master PIN to authorize creating the new isolated year.",
      },
      {
        step: "Automatic carry-forward",
        detail: "Closing stock becomes opening stock, and customer/supplier balances transfer automatically into the new year.",
      },
      {
        step: "Switch anytime",
        detail: "Move between financial years whenever you need to reference historical data, protected by PIN.",
      },
    ],
    faqs: [
      {
        q: "Will switching financial years affect my current billing?",
        a: "No - each financial year is fully isolated. You can reference a past year's data without any risk of editing live records.",
      },
      {
        q: "Do I need to manually re-enter opening stock every year?",
        a: "No, BirStock automatically carries forward your closing stock as the new year's opening stock.",
      },
    ],
  },
];

export function getFeature(slug: string) {
  return features.find((f) => f.slug === slug);
}
