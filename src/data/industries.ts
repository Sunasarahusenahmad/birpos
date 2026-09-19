export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  previewSlug: "pos-billing" | "inventory-management" | "customer-khata" | "supplier-management" | "gst-billing" | "backup-sync" | "reports-analytics";
  challenges: { problem: string; impact: string }[];
  solutions: { title: string; desc: string }[];
  keyHighlights: string[];
  hardwareRecommended: string[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "supermarkets",
    name: "Supermarkets & Departmental Stores",
    shortName: "Supermarket",
    tagline: "High-speed barcode billing that never halts on slow internet",
    metaTitle: "Offline Supermarket Billing Software & POS System | BirStock",
    metaDescription:
      "Run supermarket checkouts at sub-second speeds with BirStock offline POS. Fast barcode scanning, multi-counter Hold Cart multitasking, 80mm thermal receipts, and automated Google Drive backup.",
    headline: "The Offline Desktop POS Built for Rush-Hour Supermarket Queues",
    subheadline:
      "Zero internet dependency. Sub-second barcode scanning. Hold & resume interrupted carts so your counter queues keep moving effortlessly.",
    previewSlug: "pos-billing",
    challenges: [
      {
        problem: "Cloud Latency on Barcode Scans",
        impact: "Every barcode scan has to round-trip to cloud servers, creating agonizing 1-3 second delays per product during peak hours.",
      },
      {
        problem: "Cart Queue Blockage",
        impact: "When a shopper forgets an item or wallet, traditional POS locks the register, forcing the entire queue to wait.",
      },
      {
        problem: "High Monthly Recurring Fees",
        impact: "Cloud billing software charges ₹3,000–₹10,000 per month across multiple counters, draining retail margins.",
      },
    ],
    solutions: [
      {
        title: "Local WASM Engine Speed",
        desc: "BirStock processes scans locally in under 1 millisecond. Barcode input lands in the cart with zero screen lag.",
      },
      {
        title: "Minimize & Hold Cart",
        desc: "Dock any active customer cart to the sidebar badge with one keystroke, bill the next customer, and resume with all items intact.",
      },
      {
        title: "Automated Google Drive Sync",
        desc: "End-of-day sales and inventory snapshot automatically encrypted and uploaded directly to your own Google Drive.",
      },
    ],
    keyHighlights: [
      "Plug-and-play USB & wireless barcode scanner support with instant auto-add",
      "Minimize & Hold Cart: multi-counter bill docking to eliminate queue delays",
      "F1–F12 zero-mouse cashier flow with automatic tender & change calculation",
      "Multi-rate GST calculation (0%, 5%, 12%, 18%, 28%) with HSN/SAC codes",
      "80mm & 58mm thermal receipt printing with customizable store logo and UPI QR code",
      "100% offline reliability: zero cloud downtime during internet outages",
    ],
    hardwareRecommended: [
      "1D/2D Handheld or Omnidirectional Barcode Scanners (USB / Wireless)",
      "3-Inch (80mm) Thermal USB/Ethernet Receipt Printers (TVS, Epson, Xprinter)",
      "Electronic Weighing Scale Integration for loose produce / grains",
      "Standard Cash Drawer triggered on F10 checkout",
    ],
    faqs: [
      {
        q: "How fast can cashiers bill during festive rushes?",
        a: "Because BirStock runs 100% locally on an embedded SQLite WASM database, barcode scans register instantly (sub-millisecond) without internet lag.",
      },
      {
        q: "What happens if a customer steps away to grab one more item?",
        a: "Cashiers simply press Hold Cart (F9). The bill is safely minimized to the counter dock, letting the cashier serve the next customer immediately.",
      },
      {
        q: "Can BirStock print 80mm thermal receipts with store logo?",
        a: "Yes. BirStock auto-formats for both 3-inch (80mm) and 2-inch (58mm) thermal printers, complete with your custom store logo, address, GSTIN, and scan-to-pay UPI QR code.",
      },
    ],
  },
  {
    slug: "kirana-grocery",
    name: "Kirana & Provision Stores",
    shortName: "Kirana & Grocery",
    tagline: "Replace the paper notebook with digital Udhar Khata & instant billing",
    metaTitle: "Kirana Store Billing Software & Offline Udhar Khata | BirStock",
    metaDescription:
      "Modernize your Kirana store with BirStock desktop software. Offline Quick POS billing, color-coded customer Udhar Khata ledgers, 1-click WhatsApp statements, and zero monthly subscriptions.",
    headline: "Simple, Fast Desktop Billing & Customer Udhar Khata for Kirana Stores",
    subheadline:
      "Say goodbye to torn bahi-khata notebooks. Track customer credit balances, send WhatsApp statements in one click, and print bills in seconds - 100% offline.",
    previewSlug: "customer-khata",
    challenges: [
      {
        problem: "Unreliable Internet in Local Markets",
        impact: "Cloud-based POS systems stop working when local broadband or mobile hotspot drops, stranding daily billing.",
      },
      {
        problem: "Lost Udhar Records in Paper Registers",
        impact: "Forgotten credit entries and customer disputes over old balances cause thousands in lost revenue every month.",
      },
      {
        problem: "Difficult Software Interfaces",
        impact: "Most ERP systems are too complex for store assistants and require weeks of training.",
      },
    ],
    solutions: [
      {
        title: "100% Offline by Design",
        desc: "Runs smoothly on basic shop laptops or desktops with zero internet required for daily counter operations.",
      },
      {
        title: "Color-Coded Khata Timeline",
        desc: "Clear visual badges for 🔴 Debit (Sales), 🟢 Credit (Payments), and 🟠 Returns with automatic advance balance calculation.",
      },
      {
        title: "1-Click WhatsApp Statements",
        desc: "Generate professional branded PDF ledger statements and send them directly to customers' WhatsApp in seconds.",
      },
    ],
    keyHighlights: [
      "Dual-mode POS: Keyboard Quick POS for rapid typing or Touch POS for visual item selection",
      "Customer Khata directory with running due balances and advance payment handling",
      "Instant WhatsApp sharing of branded PDF balance statements",
      "Supports loose item sales by weight (Kg, Grams) as well as packaged units (Pcs, Box)",
      "Automated nightly encrypted backups to personal Google Drive",
      "One-time software purchase with zero forced recurring monthly fees",
    ],
    hardwareRecommended: [
      "Any basic Windows 10/11 desktop PC or laptop (Core i3 / 4GB RAM+)",
      "Handheld USB Barcode Scanner",
      "2-Inch (58mm) or 3-Inch (80mm) Mini Thermal Receipt Printer",
    ],
    faqs: [
      {
        q: "Does BirStock require internet to manage customer Udhar?",
        a: "No! All customer ledgers, credit bills, payments, and balances are stored securely in your local computer database.",
      },
      {
        q: "What if a customer gives an advance payment?",
        a: "BirStock automatically books any payment exceeding the current due as an Advance Balance, which seamlessly applies to their future purchases.",
      },
      {
        q: "Can I send ledger statements on WhatsApp without saving numbers?",
        a: "Yes, BirStock opens a pre-formatted WhatsApp chat with the customer's phone number and attaches the account statement PDF in one click.",
      },
    ],
  },
  {
    slug: "electronics-mobile",
    name: "Electronics & Mobile Retailers",
    shortName: "Electronics & Mobile",
    tagline: "Serial number & IMEI warranty tracking with GST Tax Invoicing",
    metaTitle: "Mobile Shop & Electronics POS Software with IMEI Tracking | BirStock",
    metaDescription:
      "Complete offline POS billing software for mobile and electronics stores. Serial number / IMEI tracking, warranty records, supplier purchase ledgers, and multi-rate GST Tax Invoicing.",
    headline: "Precision IMEI & Serial Warranty Tracking for Electronics Stores",
    subheadline:
      "Enforce serial/IMEI capture at purchase and checkout, track distributor warranties, and generate GST Tax Invoices with formal HSN breakdown.",
    previewSlug: "inventory-management",
    challenges: [
      {
        problem: "Untracked Serial & IMEI Numbers",
        impact: "Selling phones or appliances without capturing serial numbers leads to false warranty claims and disputes with distributors.",
      },
      {
        problem: "Complex Distributor Purchase Accounts",
        impact: "High-value mobile stock requires strict tracking of supplier dues, credit terms, and purchase return debit notes.",
      },
      {
        problem: "GST B2B & B2C Invoicing Compliance",
        impact: "Tax invoices require precise HSN codes, customer GSTIN verification, and amount in words to avoid input tax credit penalties.",
      },
    ],
    solutions: [
      {
        title: "Compulsory Serial / IMEI Guard",
        desc: "Turn on serial tracking per product category. App prompts for IMEI scan during both Stock Inward and POS sale.",
      },
      {
        title: "Supplier Ledger & Debit Notes",
        desc: "Easily return defective devices back to distributors with automated debit note generation that deducts supplier dues.",
      },
      {
        title: "A4 & Thermal GST Invoicing",
        desc: "Generate official GST Tax Invoices featuring IMEI numbers, HSN codes, CGST/SGST/IGST breakdown, and currency in words.",
      },
    ],
    keyHighlights: [
      "Serial number and IMEI tracking for phones, laptops, and home appliances",
      "Supplier Stock-In: auto-increments inventory and tracks distributor payable balances",
      "Supplier Returns (Debit Notes) for defective or damaged goods with automatic ledger credit",
      "B2B and B2C GST Tax Invoices with customer GSTIN and state tax logic",
      "Master PIN security: protects price adjustments and sensitive margin dashboards",
      "Disaster recovery: automated encrypted Google Drive backups of your entire serial catalog",
    ],
    hardwareRecommended: [
      "2D Barcode & QR Code Scanner (capable of scanning phone screen and box IMEIs)",
      "Standard A4 Laser / Inkjet Printer for formal GST Tax Invoices",
      "Optional 3-Inch Thermal Printer for quick accessory sales",
    ],
    faqs: [
      {
        q: "Can I print the IMEI number directly on the customer's tax invoice?",
        a: "Yes! When serial tracking is enabled for a product, BirStock prints the scanned IMEI/Serial number under the product line item on both A4 and thermal invoices.",
      },
      {
        q: "How does BirStock handle warranty lookup when a customer returns a defective phone?",
        a: "Simply search the IMEI or original invoice number in the Sales Return module. BirStock pulls up the purchase date, selling price, and warranty details instantly.",
      },
    ],
  },
  {
    slug: "hardware-sanitary",
    name: "Hardware, Paints & Sanitary Stores",
    shortName: "Hardware & Sanitary",
    tagline: "Manage thousands of SKUs, bulk units, and contractor credit accounts",
    metaTitle: "Hardware & Sanitary Store Billing Software Offline | BirStock",
    metaDescription:
      "Offline desktop billing and inventory software for hardware, sanitary, and paint stores. Handle loose units, contractor credit ledgers, supplier debit notes, and GST compliance.",
    headline: "Robust Inventory & Contractor Credit Management for Hardware Stores",
    subheadline:
      "Easily catalog thousands of hardware SKUs, track builder & plumber Udhar accounts, and generate compliant GST bills without internet dependency.",
    previewSlug: "inventory-management",
    challenges: [
      {
        problem: "Massive SKU Catalogs & Units",
        impact: "Hardware stores stock thousands of small parts, fittings, and liquids sold in varying units (Pcs, Kg, Meter, Box, Litre).",
      },
      {
        problem: "Heavy Contractor & Builder Credit",
        impact: "Plumbers and contractors buy materials daily and settle accounts monthly, creating chaotic paper balances.",
      },
      {
        problem: "Multi-Rate Tax Confusion",
        impact: "Hardware involves items across 5%, 12%, 18%, and 28% GST brackets on a single customer invoice.",
      },
    ],
    solutions: [
      {
        title: "Multi-Unit Inventory Master",
        desc: "Define custom units of measure and reorder thresholds. Filter and search thousands of SKUs in milliseconds.",
      },
      {
        title: "Contractor Khata Ledgers",
        desc: "Issue materials directly to builder accounts and send comprehensive monthly statement PDFs via WhatsApp.",
      },
      {
        title: "Multi-Rate GST Invoice Engine",
        desc: "Automatically splits CGST, SGST, and IGST by line item rate with complete HSN summary tables.",
      },
    ],
    keyHighlights: [
      "Custom units of measure: Pcs, Kg, Box, Litre, Bundle, Roll, and Meter",
      "Low-stock alerts: automatically flags fast-moving fittings and paints before stockouts",
      "Contractor credit accounts with payment receipt generation and running dues",
      "Supplier purchase orders and debit notes for returning damaged tiles or fixtures",
      "Full fiscal year isolation with automatic closing stock carry-forward",
      "100% offline desktop reliability for busy industrial and semi-urban counters",
    ],
    hardwareRecommended: [
      "Rugged USB Handheld Barcode Scanner",
      "A4/A5 Laser or Deskjet Printer for contractor bills",
      "3-Inch Thermal Printer for quick counter transactions",
    ],
    faqs: [
      {
        q: "Can I sell items in different units like Litres, Kilograms, and Pieces?",
        a: "Yes. BirStock lets you configure units of measure (UOM) for each SKU, with fractional quantity billing for weighed materials.",
      },
      {
        q: "Can I print A4 size invoices for contractors with itemized GST breakdown?",
        a: "Yes. BirStock provides an elegant A4 GST Tax Invoice template displaying complete HSN codes, taxable values, and CGST/SGST breakdowns.",
      },
    ],
  },
  {
    slug: "apparel-footwear",
    name: "Apparel, Garments & Footwear",
    shortName: "Apparel & Footwear",
    tagline: "Fast barcode checkout with customer exchange and sales return slips",
    metaTitle: "Apparel & Footwear POS Billing Software Offline | BirStock",
    metaDescription:
      "Desktop POS software for clothing boutiques, garment retailers, and footwear shops. Barcode scanning, Touch POS, size/color variant tracking, hold-cart counter billing, and sales returns.",
    headline: "Fast Fashion & Footwear POS Built for Retail Counter Speed",
    subheadline:
      "Speed through holiday sales rushes with barcode scanning, instant customer exchange handling, and hold-cart multitasking.",
    previewSlug: "pos-billing",
    challenges: [
      {
        problem: "Frequent Size/Fit Exchanges & Returns",
        impact: "Manual exchange calculations lead to stock discrepancies, cashier errors, and frustrated shoppers.",
      },
      {
        problem: "Counter Bottlenecks during Rush Hours",
        impact: "Slow cloud POS checkouts result in long changing-room and billing lines that hurt store reputation.",
      },
      {
        problem: "Seasonal Inventory Liquidations",
        impact: "Lack of item-level discount controls makes end-of-season sales difficult to manage at the register.",
      },
    ],
    solutions: [
      {
        title: "Smooth Sales Return & Credit Notes",
        desc: "Lookup past bills in seconds, select returned garments, auto-increment stock, and issue store credit or cash refunds.",
      },
      {
        title: "Sub-Second Barcode Scanning",
        desc: "Scan clothing tags and footwear barcodes instantly with zero latency or cloud spinning wheels.",
      },
      {
        title: "Item & Bill-Level Discounts",
        desc: "Apply flat rupee discounts or percentage markdowns per garment or across the entire customer ticket.",
      },
    ],
    keyHighlights: [
      "High-speed barcode scanner auto-add: scan and bill instantly",
      "Dual billing modes: Touch & Grid POS for boutiques or Keyboard Quick POS for busy garment counters",
      "Customer exchange & sales returns: generates official Credit Note slips with auto-inventory adjustment",
      "Hold Cart: dock in-progress checkouts when shoppers try on additional sizes",
      "Thermal 3-inch and 2-inch receipt printing with return policy terms printed at footer",
      "End-of-day sales reporting with fast/slow moving size analysis",
    ],
    hardwareRecommended: [
      "Laser Barcode Scanner with Stand for hands-free garment tag scanning",
      "3-Inch (80mm) Thermal Receipt Printer (customized with exchange policy terms)",
      "Touchscreen POS monitor or standard Windows laptop",
    ],
    faqs: [
      {
        q: "How does BirStock handle a customer exchanging a shirt for a different size?",
        a: "Open the Sales Return module, search the original bill, select the returned item to increment stock, and apply the refund value directly against the new replacement item in POS!",
      },
      {
        q: "Can I print exchange policy terms on the bottom of thermal receipts?",
        a: "Yes. In Settings > Visual Branding, you can add custom footer terms like 'Goods once sold can be exchanged within 7 days with original tag intact'.",
      },
    ],
  },
  {
    slug: "wholesale",
    name: "Wholesale Traders & Distributors",
    shortName: "Wholesale",
    tagline: "Bulk invoicing, supplier debit notes, and multi-year financial isolation",
    metaTitle: "Wholesale Billing & Inventory ERP Software Offline | BirStock",
    metaDescription:
      "Enterprise-grade desktop billing software for wholesale distributors and B2B traders. Bulk cataloging, supplier debit notes, credit Khata ledgers, and multi-year carry-forward.",
    headline: "Enterprise-Grade Desktop Invoicing & ERP for Wholesale Distributors",
    subheadline:
      "Manage high-volume bulk supply orders, customer credit terms, supplier debit notes, and financial year transitions with 100% offline data security.",
    previewSlug: "supplier-management",
    challenges: [
      {
        problem: "Vulnerable Cloud Data Exposure",
        impact: "Wholesale distributor client lists, margins, and supplier purchase rates are highly confidential and vulnerable on cloud servers.",
      },
      {
        problem: "Year-End Account Rollovers",
        impact: "Manually carrying forward opening stock and customer dues at the end of the financial year takes weeks and introduces audit errors.",
      },
      {
        problem: "Complex Damaged Stock Returns",
        impact: "Distributors constantly receive damaged goods from manufacturers and need official debit note records for accounting.",
      },
    ],
    solutions: [
      {
        title: "100% Private Local Storage",
        desc: "Your wholesale margins, supplier costs, and client directories remain strictly on your local PC with encrypted Drive backups.",
      },
      {
        title: "1-Click Financial Year Carry-Forward",
        desc: "Closing stock automatically becomes opening stock, customer dues transfer seamlessly, and past years remain tamper-proof.",
      },
      {
        title: "Integrated Debit Note Engine",
        desc: "Return damaged shipments to manufacturers, automatically decrement stock, and deduct balances from supplier payables.",
      },
    ],
    keyHighlights: [
      "B2B GST Tax Invoicing with formal HSN/SAC breakdowns, state tax logic, and currency in words",
      "Supplier purchase returns (Debit Notes) with automatic payable ledger adjustment",
      "Customer Khata ledgers with credit limit tracking and 1-click WhatsApp PDF statements",
      "Financial year management: PIN-secured transition with automatic balance carry-forward",
      "Master 4-digit PIN lock to shield wholesale cost prices and net profit margins",
      "Local backup retention (last 20 archives) + automated Google Drive sync",
    ],
    hardwareRecommended: [
      "A4 Laser Printer for heavy multi-page B2B wholesale invoices",
      "Wireless Long-Range Barcode Scanner for warehouse inventory checks",
      "Desktop PC running Windows 10/11 with dual-monitor support",
    ],
    faqs: [
      {
        q: "Can BirStock handle multi-page A4 wholesale invoices with dozens of line items?",
        a: "Yes! BirStock includes an A4 Modern Tax Invoice template optimized for wholesale with clean pagination, HSN summaries, and amount-in-words calculation.",
      },
      {
        q: "What happens when closing the financial year on March 31st?",
        a: "BirStock creates an isolated database for the new fiscal year, carries forward closing inventory as opening inventory, and carries forward all outstanding customer and supplier balances.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((ind) => ind.slug === slug);
}
