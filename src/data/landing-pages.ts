import type { LucideIcon } from "lucide-react";
import {
  WifiOff,
  Zap,
  ShieldCheck,
  Printer,
  CloudUpload,
  Coins,
  Percent,
  Receipt,
  FileText,
  Building2,
  Calculator,
  ScanBarcode,
  PauseCircle,
  BookOpen,
  AlertTriangle,
  BarChart3,
  FileSpreadsheet,
  Boxes,
  Truck,
  Undo2,
  Smartphone,
  QrCode,
  RefreshCw,
  Infinity as InfinityIcon,
  PackagePlus,
  BadgeIndianRupee,
} from "lucide-react";
import { formatINR, getPlan } from "@/data/pricing";

export type LandingPageData = {
  slug: string;
  /** Key of the OG image in /brand/og/. */
  og: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  intro: string;
  breadcrumb: string;
  benefits: { heading: string; intro: string; items: { icon: LucideIcon; title: string; desc: string }[] };
  comparison?: { heading: string; intro: string; otherLabel: string; rows: { label: string; birstock: string; other: string }[] };
  faqs: { q: string; a: string }[];
  /** Internal links to related feature pages. */
  related: { label: string; href: string }[];
};

const monthly = formatINR(getPlan("monthly").price);
const yearly = formatINR(getPlan("yearly").price);
const lifetime = formatINR(getPlan("lifetime").price);

export const landingPages: Record<string, LandingPageData> = {
  "offline-billing-software": {
    slug: "offline-billing-software",
    og: "offline-billing-software",
    seoTitle: "Offline Billing Software for PC & Windows - BirStock",
    metaDescription: `BirStock is offline billing software for Windows PCs: bill, scan barcodes, manage stock and Khata without internet after activation. Optional Google Drive backup. From ${monthly}/month or ${lifetime} lifetime.`,
    keywords: [
      "offline billing software for pc",
      "desktop billing software",
      "offline pos software india",
      "billing software without internet",
      "offline invoice software windows",
      "pc pos software india",
    ],
    eyebrow: "Windows Desktop POS & Invoicing",
    h1: "Offline Billing Software for Your Windows PC",
    intro:
      "Don't let an internet outage stop your checkout. BirStock runs billing, barcode scanning, GST invoices and customer Khata from a local database on your PC - so daily billing keeps going even when the Wi-Fi doesn't.",
    breadcrumb: "Offline Billing Software",
    benefits: {
      heading: "Why shops choose offline billing",
      intro: "Cloud billing apps look modern until the Wi-Fi drops during the evening rush. Here's what running on your own PC gives you.",
      items: [
        { icon: WifiOff, title: "Bill through internet outages", desc: "After licence activation, day-to-day billing runs locally on your computer - no waiting for a cloud server." },
        { icon: Zap, title: "Fast barcode billing", desc: "Scans and searches run against the database on your PC, without a round-trip to a remote server." },
        { icon: ShieldCheck, title: "Your records on your PC", desc: "Products, bills, customers and suppliers are stored in a local database on your own machine." },
        { icon: Printer, title: "Thermal & A4 printing", desc: "Choose a 58mm or 80mm thermal template for receipts or an A4 layout for invoices." },
        { icon: CloudUpload, title: "Optional Google Drive backup", desc: "Keep local backups and, when you're online, back up to your own Google Drive on your schedule." },
        { icon: Coins, title: "Own it if you prefer", desc: `Pay ${monthly}/month, ${yearly}/year, or a one-time ${lifetime} for a permanent licence.` },
      ],
    },
    comparison: {
      heading: "Offline desktop vs. cloud web POS",
      intro: "How a local Windows app compares with typical browser-based billing for everyday counter work.",
      otherLabel: "Typical cloud web POS",
      rows: [
        { label: "Daily billing during an internet outage", birstock: "Keeps working", other: "Usually stops" },
        { label: "Where business records are stored", birstock: "Local database on your PC", other: "Vendor's cloud servers" },
        { label: "Backup", birstock: "Local + your own Google Drive", other: "Vendor-controlled" },
        { label: "Pricing", birstock: `Monthly, yearly, or ${lifetime} lifetime`, other: "Ongoing subscription" },
        { label: "When internet is needed", birstock: "Activation, updates, Drive backup, PIN OTP", other: "All the time" },
      ],
    },
    faqs: [
      {
        q: "Does BirStock need internet to create bills?",
        a: "Not for day-to-day billing. After licence activation you can create bills without internet, subject to licence status. Internet is needed for licence activation/checks, software updates, optional Google Drive backup, and email OTP PIN recovery.",
      },
      {
        q: "Which Windows versions does BirStock support?",
        a: "BirStock runs on Windows 10 and Windows 11 PCs and laptops.",
      },
      {
        q: "How does backup work if I'm mostly offline?",
        a: "BirStock keeps local backups on your PC (20 by default). If you connect Google Drive, backups are uploaded at the time you choose whenever you're online.",
      },
      {
        q: "Is there a monthly fee?",
        a: `You choose: ${monthly}/month, ${yearly}/year (includes the BirStock Mobile App), or a one-time ${lifetime} Lifetime licence with no renewals.`,
      },
    ],
    related: [
      { label: "POS Billing", href: "/features/pos-billing" },
      { label: "Backup & Restore", href: "/features/backup-sync" },
      { label: "Pricing", href: "/pricing" },
    ],
  },

  "gst-billing-software": {
    slug: "gst-billing-software",
    og: "gst-billing-software",
    seoTitle: "GST Billing Software for Retail & Wholesale Shops - BirStock",
    metaDescription:
      "Create GST tax invoices with CGST/SGST and IGST, five built-in GST rates, customer GSTIN and address, and thermal or A4 layouts. Offline GST billing software for Windows.",
    keywords: [
      "gst billing software",
      "gst billing software for retail shop",
      "offline gst billing software pc",
      "gst invoice software windows",
      "cgst sgst igst billing software",
      "gst pos software india",
    ],
    eyebrow: "GST Billing for Indian Shops",
    h1: "GST Billing Software for Retail & Wholesale Shops",
    intro:
      "BirStock calculates GST on every line as you bill, shows the CGST/SGST or IGST breakdown on the invoice, and prints on the layout you choose - thermal at the counter or A4 for business customers.",
    breadcrumb: "GST Billing Software",
    benefits: {
      heading: "GST invoicing that fits your counter",
      intro: "From walk-in customers to B2B buyers, BirStock keeps the tax math consistent on every bill.",
      items: [
        { icon: Percent, title: "Five built-in GST rates", desc: "0%, 5%, 12%, 18% and 28% are built in, with intra-state CGST/SGST and inter-state IGST handling." },
        { icon: Receipt, title: "Tax invoices with GSTIN", desc: "Store customer and supplier GSTIN and address, and show them on tax invoices." },
        { icon: FileText, title: "Bill of Supply", desc: "Issue a Bill of Supply for non-taxable sales where applicable." },
        { icon: Calculator, title: "Clear tax breakdown", desc: "Every invoice shows the tax split and the total in words." },
        { icon: Printer, title: "Thermal or A4", desc: "Pick a 58mm/80mm thermal template or an A4 invoice layout in Settings." },
        { icon: Building2, title: "GST reports for your CA", desc: "Print or export GST/tax reports to PDF for your accountant." },
      ],
    },
    faqs: [
      {
        q: "Does BirStock handle CGST, SGST and IGST?",
        a: "Yes. BirStock supports intra-state CGST/SGST and inter-state IGST tax handling, with the breakdown shown on invoices.",
      },
      {
        q: "Which GST rates are built in?",
        a: "Five built-in GST rate percentages: 0%, 5%, 12%, 18% and 28%, plus IGST handling for inter-state sales.",
      },
      {
        q: "Can I export GSTR-1 files for the GST portal?",
        a: "BirStock includes GST/tax reports you can print or export to PDF for your accountant. Direct GSTR-1 portal file export is not part of the current release.",
      },
      {
        q: "Which printers can I use for GST invoices?",
        a: "Any printer installed in Windows. Choose the 58mm or 80mm thermal template for counter receipts or the A4 template for formal invoices.",
      },
      {
        q: "Is BirStock GST compliant?",
        a: "BirStock prepares GST invoices and reports from the tax settings you enter. Please review your tax setup and filings with your CA, especially when GST rates change.",
      },
    ],
    related: [
      { label: "GST Billing feature", href: "/features/gst-billing" },
      { label: "Reports", href: "/features/reports-analytics" },
      { label: "Pricing", href: "/pricing" },
    ],
  },

  "billing-software-for-retail-shop": {
    slug: "billing-software-for-retail-shop",
    og: "billing-software-for-retail-shop",
    seoTitle: "Billing Software for Retail Shops in India - BirStock",
    metaDescription:
      "Billing software for retail shops: barcode billing, held bills, stock checks, customer Khata, thermal receipts and Excel product import. Works offline on Windows - from ₹799/month.",
    keywords: [
      "billing software for retail shop",
      "retail billing software india",
      "pos software for retail shop",
      "barcode billing software for shop",
      "counter billing software windows",
      "retail shop inventory and billing software",
    ],
    eyebrow: "Retail Counter POS",
    h1: "Fast, Reliable Billing Software for Retail Shops",
    intro:
      "Serve customers faster, keep customer credit in order, and avoid selling stock you don't have - with desktop POS software built for busy Indian retail counters.",
    breadcrumb: "Retail Shop Billing",
    benefits: {
      heading: "Built for real retail counters",
      intro: "Keyboard shortcuts, held bills and stock checks save seconds on every bill so queues keep moving.",
      items: [
        { icon: ScanBarcode, title: "Barcode billing", desc: "Scan and the product lands in the cart, ready for the quantity - or search by name." },
        { icon: PauseCircle, title: "Hold & resume bills", desc: "Customer stepped away? Hold their bill, serve the next person, and resume later at the same counter." },
        { icon: BookOpen, title: "Customer Khata", desc: "Bill on credit, record payments and returns, and export a PDF statement." },
        { icon: AlertTriangle, title: "Stock checks", desc: "BirStock warns the cashier before selling more than the available stock." },
        { icon: FileSpreadsheet, title: "Excel product import", desc: "Bring your existing product list in from a spreadsheet instead of typing it all." },
        { icon: BarChart3, title: "Sales & profit reports", desc: "Check sales, profit/loss and GST reports, and print or export them to PDF." },
      ],
    },
    faqs: [
      {
        q: "Is BirStock suitable for a small single-counter shop?",
        a: "Yes. BirStock is designed for single-counter shops as well as busy supermarket counters, and runs on standard Windows 10/11 PCs and laptops.",
      },
      {
        q: "Can I use my barcode scanner and thermal printer?",
        a: "Yes. Standard USB or wireless scanners in keyboard mode work out of the box, and you can print on 58mm/80mm thermal or A4 printers installed in Windows.",
      },
      {
        q: "How do I bring in my existing products?",
        a: "Use the product Excel import to load your catalogue in bulk, or add products one by one.",
      },
      {
        q: "What is Hold Cart?",
        a: "Hold Cart pauses the current bill so you can bill the next customer at the same counter, then resume the held bill. It is not shared billing across separate PCs.",
      },
    ],
    related: [
      { label: "POS Billing", href: "/features/pos-billing" },
      { label: "Customer Khata", href: "/features/customer-khata" },
      { label: "Inventory", href: "/features/inventory-management" },
    ],
  },

  "inventory-management-software": {
    slug: "inventory-management-software",
    og: "inventory-management-software",
    seoTitle: "Inventory Management Software for Shops & Wholesalers - BirStock",
    metaDescription:
      "Inventory and stock management software for Indian shops: Excel product import/export, purchase-based stock updates, low-stock alerts, returns and serial/IMEI tracking - with billing built in.",
    keywords: [
      "inventory management software",
      "stock management software for shop",
      "inventory software india",
      "inventory and billing software",
      "stock maintain software pc",
      "imei tracking software",
    ],
    eyebrow: "Stock & Purchase Management",
    h1: "Inventory Management Software with Billing Built In",
    intro:
      "BirStock keeps stock accurate automatically - purchases add it, sales and returns adjust it, and low-stock alerts tell you what to reorder. Start fast by importing your products from Excel.",
    breadcrumb: "Inventory Management Software",
    benefits: {
      heading: "Stock you can trust",
      intro: "One record for every product, updated by the work you already do at the counter.",
      items: [
        { icon: FileSpreadsheet, title: "Excel import & export", desc: "Load your catalogue from a spreadsheet and export it for stock reviews and audits." },
        { icon: Truck, title: "Purchase-based stock-in", desc: "Record a supplier purchase and stock increases while the supplier's due updates." },
        { icon: Boxes, title: "Units, categories & barcodes", desc: "Pcs, Kg, Ltr, Box and more - with barcode, SKU, category, cost and sale price." },
        { icon: AlertTriangle, title: "Low-stock alerts", desc: "See which products have dropped below their minimum quantity." },
        { icon: Undo2, title: "Returns adjust stock", desc: "Customer returns add stock back; purchase returns with debit notes reduce it." },
        { icon: ScanBarcode, title: "Serial / IMEI tracking", desc: "Turn on serial tracking for phones, electronics and appliances." },
      ],
    },
    faqs: [
      {
        q: "Can I import my product list from Excel?",
        a: "Yes. BirStock supports product Excel import for bulk setup and Excel export for reviews.",
      },
      {
        q: "Does BirStock reorder stock automatically?",
        a: "No. It shows low-stock alerts so you decide what to reorder; it does not place supplier orders for you.",
      },
      {
        q: "Is inventory stored in the cloud?",
        a: "No. Inventory is stored in BirStock's local database on your PC. You can back it up to your own Google Drive.",
      },
    ],
    related: [
      { label: "Inventory feature", href: "/features/inventory-management" },
      { label: "Suppliers", href: "/features/supplier-management" },
      { label: "Returns", href: "/features/sales-purchase-returns" },
    ],
  },

  "lifetime-billing-software": {
    slug: "lifetime-billing-software",
    og: "lifetime-billing-software",
    seoTitle: `Lifetime Billing Software - One-Time ${lifetime} Licence | BirStock`,
    metaDescription: `Buy BirStock once for ${lifetime} and keep a permanent billing software licence - offline POS, GST invoices, inventory, Khata and backup with no renewal needed to keep billing.`,
    keywords: [
      "lifetime billing software",
      "one time payment billing software",
      "billing software lifetime license india",
      "billing software without subscription",
      "billing software one time purchase",
    ],
    eyebrow: "One-Time Licence",
    h1: `Lifetime Billing Software - Pay Once, Keep Billing`,
    intro: `Tired of renewing software every year just to keep your counter running? A BirStock Lifetime licence is a one-time ${lifetime} payment for a permanent licence - no renewal needed to keep billing.`,
    breadcrumb: "Lifetime Billing Software",
    benefits: {
      heading: "What the Lifetime licence includes",
      intro: "Everything you need to run the counter today, yours to keep.",
      items: [
        { icon: InfinityIcon, title: "Permanent licence", desc: "Pay once. Keep using the features included at purchase without renewals." },
        { icon: Receipt, title: "Full desktop app", desc: "POS, GST invoices, inventory, Khata, suppliers, returns, expenses, reports and backup." },
        { icon: RefreshCw, title: "Bug-fix updates", desc: "Keep receiving bug-fix and stability updates for the features you bought." },
        { icon: PackagePlus, title: "Add only what you need", desc: "New feature modules released later are optional add-ons, priced per feature." },
        { icon: Smartphone, title: "Mobile app add-on", desc: "Add the BirStock Mobile App to your Lifetime licence when you need it." },
        { icon: BadgeIndianRupee, title: "Clear pricing", desc: `${lifetime} one-time. Prefer to start small? Monthly is ${monthly}, Yearly ${yearly}.` },
      ],
    },
    comparison: {
      heading: "Lifetime vs. subscription",
      intro: "How the totals compare over a few years (BirStock plans, excluding optional add-ons).",
      otherLabel: `Monthly plan (${monthly}/mo)`,
      rows: [
        { label: "Year 1", birstock: lifetime, other: formatINR(getPlan("monthly").price * 12) },
        { label: "After 3 years", birstock: lifetime, other: formatINR(getPlan("monthly").price * 36) },
        { label: "After 5 years", birstock: lifetime, other: formatINR(getPlan("monthly").price * 60) },
        { label: "Renewal needed to keep billing", birstock: "No", other: "Yes, every month" },
      ],
    },
    faqs: [
      {
        q: "Is the Lifetime licence really permanent?",
        a: "Yes. It is a one-time payment for a permanent licence to the features included at purchase, with bug-fix updates for those features.",
      },
      {
        q: "Do I get new features for free?",
        a: "New feature modules released later are optional add-ons for Lifetime licences, priced per feature. If you want new features included automatically, the Yearly plan includes them during your plan.",
      },
      {
        q: "Is the mobile app included in Lifetime?",
        a: "The BirStock Mobile App is available as an add-on for Lifetime licences. It is included in the Yearly plan.",
      },
    ],
    related: [
      { label: "Compare all plans", href: "/pricing" },
      { label: "All features", href: "/features" },
      { label: "BirStock Mobile App", href: "/features/mobile-app" },
    ],
  },

  "billing-software-with-mobile-app": {
    slug: "billing-software-with-mobile-app",
    og: "billing-software-with-mobile-app",
    seoTitle: "Billing Software with Mobile App - BirStock",
    metaDescription: `Desktop billing software with a mobile companion: the BirStock Mobile App pairs your phone with your shop PC over Wi-Fi to make sales and check stock, customers and invoices. Included in the ${yearly}/year plan.`,
    keywords: [
      "billing software with mobile app",
      "pos software with mobile app",
      "billing app connected to computer",
      "shop billing app wifi",
      "inventory app for shop owner",
    ],
    eyebrow: "Desktop + Phone",
    h1: "Billing Software with a Mobile App for Your Shop",
    intro:
      "Keep BirStock's full desktop power at the counter and add your phone on the shop floor. The BirStock Mobile App pairs over your shop's Wi-Fi with a QR code - no cloud server in between.",
    breadcrumb: "Billing Software with Mobile App",
    benefits: {
      heading: "What you can do with the BirStock Mobile App",
      intro: "A companion for the desktop - designed for the jobs you do away from the counter.",
      items: [
        { icon: Smartphone, title: "Android & iOS", desc: "Use the BirStock Mobile App on Android phones and iPhones." },
        { icon: QrCode, title: "QR code pairing", desc: "Scan a QR code shown on the desktop to pair your phone in seconds." },
        { icon: Smartphone, title: "Bill from your phone", desc: "Create sales bills from the phone while the desktop stays the main database." },
        { icon: Boxes, title: "Check stock & customers", desc: "View selected stock, customer and invoice details on the go." },
        { icon: RefreshCw, title: "Offline queue", desc: "If the Wi-Fi drops, supported work is queued and syncs after reconnecting." },
        { icon: Coins, title: "Included in Yearly", desc: `Get the BirStock Mobile App with the ${yearly}/year plan, or as an add-on to Lifetime.` },
      ],
    },
    faqs: [
      {
        q: "Does the mobile app work without the desktop?",
        a: "No. The BirStock Mobile App is a companion to the BirStock desktop app. The phone and the PC must be on the same local network to pair and sync.",
      },
      {
        q: "Can I use the BirStock Mobile App from home over the internet?",
        a: "BirStock Mobile App works over your shop's local network (Wi-Fi/LAN). Remote access over the internet is not part of the current release.",
      },
      {
        q: "Which plan includes the mobile app?",
        a: `The Yearly plan (${yearly}/year) includes the BirStock Mobile App. Lifetime licence holders can add it as a paid add-on.`,
      },
    ],
    related: [
      { label: "Mobile App feature", href: "/features/mobile-app" },
      { label: "POS Billing", href: "/features/pos-billing" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
};
