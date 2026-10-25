export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
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
    tagline: "Fast barcode billing that keeps going when the internet doesn't",
    metaTitle: "Supermarket Billing Software & Offline POS System",
    metaDescription:
      "Offline POS for supermarkets and departmental stores: fast barcode billing, Hold Cart for multiple bills at one counter, GST invoices, thermal receipts, Excel product import and Google Drive backup.",
    keywords: ["supermarket billing software", "supermarket pos software", "departmental store billing software", "grocery store pos india"],
    headline: "Offline Desktop POS Built for Supermarket Rush Hours",
    subheadline:
      "Barcode billing that runs on your PC, held bills when a shopper steps away, and GST invoices on your thermal printer - no cloud lag at the counter.",
    previewSlug: "pos-billing",
    challenges: [
      {
        problem: "Cloud lag on barcode scans",
        impact: "When every scan waits on a remote server, a slow connection adds delay to every item in a busy queue.",
      },
      {
        problem: "Blocked counters",
        impact: "When a shopper forgets an item or their wallet, a single-bill POS forces the whole queue to wait.",
      },
      {
        problem: "Thousands of products to set up",
        impact: "Typing a large supermarket catalogue into new software by hand takes days.",
      },
    ],
    solutions: [
      {
        title: "Local billing on your PC",
        desc: "Scans and searches run against BirStock's local database, so billing doesn't wait on the internet.",
      },
      {
        title: "Hold Cart",
        desc: "Pause the current bill, serve the next customer at the same counter, then resume with every item intact.",
      },
      {
        title: "Excel product import",
        desc: "Import your catalogue from a spreadsheet with barcodes, prices and categories in one go.",
      },
    ],
    keyHighlights: [
      "USB and wireless barcode scanners (keyboard mode) work out of the box",
      "Hold Cart: multiple bills at one counter",
      "Keyboard-first Quick POS with change calculation",
      "Five built-in GST rates with CGST/SGST and IGST handling",
      "58mm/80mm thermal receipts or A4 invoices",
      "Local backups plus optional Google Drive backup",
    ],
    hardwareRecommended: [
      "USB or wireless handheld barcode scanner",
      "80mm thermal receipt printer",
      "Windows 10/11 PC or laptop",
    ],
    faqs: [
      {
        q: "Will billing stop if our internet goes down?",
        a: "No. Day-to-day billing runs from BirStock's local database on your PC. Internet is only needed for licence activation/checks, updates, optional Google Drive backup and PIN email OTP recovery.",
      },
      {
        q: "What happens if a customer steps away to grab one more item?",
        a: "Press Hold Cart (F9). The bill is paused so the cashier can serve the next customer, and it can be resumed when the shopper returns.",
      },
      {
        q: "Can several checkout PCs share one billing database?",
        a: "Not in the current release - each Windows PC runs its own BirStock licence and database. Hold Cart handles multiple bills at a single counter.",
      },
    ],
  },
  {
    slug: "kirana-grocery",
    name: "Kirana & Provision Stores",
    shortName: "Kirana & Grocery",
    tagline: "Replace the paper notebook with a digital Udhar Khata",
    metaTitle: "Kirana Store Billing Software with Udhar Khata",
    metaDescription:
      "Billing software for kirana and provision stores: quick billing, digital customer Udhar Khata, PDF statements, loose and packed units, and Google Drive backup. Works offline on your PC.",
    keywords: ["kirana store billing software", "kirana billing app for pc", "udhar khata software", "provision store billing software"],
    headline: "Simple Billing & Customer Udhar Khata for Kirana Stores",
    subheadline:
      "Track every customer's credit, record payments and returns, and print bills in seconds - from your shop PC, even when the internet is down.",
    previewSlug: "customer-khata",
    challenges: [
      {
        problem: "Patchy internet in local markets",
        impact: "Cloud billing apps stall when broadband or a mobile hotspot drops.",
      },
      {
        problem: "Lost Udhar entries",
        impact: "Missed credit entries in paper registers lead to disputes over old balances and lost money.",
      },
      {
        problem: "Complicated software",
        impact: "Many ERP systems are too complex for busy shop assistants.",
      },
    ],
    solutions: [
      {
        title: "Offline daily billing",
        desc: "Runs on a basic shop PC or laptop - daily billing doesn't need internet after activation.",
      },
      {
        title: "Digital Khata ledger",
        desc: "Every credit sale, payment and return is recorded against the customer with a running due.",
      },
      {
        title: "PDF statements",
        desc: "Export a customer's statement as a PDF to print or share when they ask for their balance.",
      },
    ],
    keyHighlights: [
      "Keyboard Quick POS for speed, or the regular POS screen for mouse/touch",
      "Customer Khata with running dues, payments and bill history",
      "Customer statement PDF export",
      "Sell loose items by weight (Kg, grams) and packed items (Pcs, Box)",
      "Scheduled local and Google Drive backups",
      "Lifetime licence option - pay once, keep billing",
    ],
    hardwareRecommended: [
      "Windows 10/11 desktop or laptop",
      "USB handheld barcode scanner",
      "58mm or 80mm thermal receipt printer",
    ],
    faqs: [
      {
        q: "Do I need internet to manage customer Udhar?",
        a: "No. Customer ledgers, credit bills, payments and balances are stored in BirStock's local database on your PC.",
      },
      {
        q: "Can I give customers a statement of their balance?",
        a: "Yes. Export the customer's ledger as a PDF statement, then print it or share the file.",
      },
      {
        q: "Can I sell loose items like rice or sugar by weight?",
        a: "Yes. Set the product's unit (for example Kg) and bill fractional quantities.",
      },
    ],
  },
  {
    slug: "electronics-mobile",
    name: "Electronics & Mobile Retailers",
    shortName: "Electronics & Mobile",
    tagline: "Serial/IMEI tracking with GST tax invoices",
    metaTitle: "Mobile Shop Billing Software with IMEI Tracking",
    metaDescription:
      "Billing software for mobile and electronics shops: serial/IMEI tracking, supplier purchase ledgers, purchase returns with debit notes, and GST tax invoices with customer GSTIN.",
    keywords: ["mobile shop billing software", "imei tracking software", "electronics shop billing software", "mobile shop software india"],
    headline: "Serial & IMEI Tracking for Electronics and Mobile Stores",
    subheadline:
      "Record serial/IMEI numbers for every unit, keep distributor accounts in order, and issue GST tax invoices to walk-in and business customers.",
    previewSlug: "inventory-management",
    challenges: [
      {
        problem: "Untracked serial & IMEI numbers",
        impact: "Selling high-value devices without recording serials makes warranty claims and disputes harder to resolve.",
      },
      {
        problem: "Complex distributor accounts",
        impact: "High-value stock needs careful tracking of supplier dues and returns of defective units.",
      },
      {
        problem: "B2B and B2C GST invoices",
        impact: "Business buyers need tax invoices with their GSTIN and a clear tax breakdown.",
      },
    ],
    solutions: [
      {
        title: "Serial/IMEI tracking",
        desc: "Turn on serial tracking for a product and record serial/IMEI numbers for each unit.",
      },
      {
        title: "Supplier ledger & debit notes",
        desc: "Return defective devices to distributors with a debit note that adjusts stock and the supplier's due.",
      },
      {
        title: "GST tax invoices",
        desc: "Issue tax invoices with customer GSTIN and address, the tax breakdown and the total in words - on A4 or thermal.",
      },
    ],
    keyHighlights: [
      "Serial/IMEI tracking for phones, laptops and appliances",
      "Supplier purchases update stock and distributor dues",
      "Purchase returns with debit notes",
      "Customer sales returns linked to the original bill",
      "PIN App Lock to keep the app locked when you step away",
      "Local and Google Drive backups of your full catalogue",
    ],
    hardwareRecommended: [
      "2D barcode scanner for box labels",
      "A4 printer for formal tax invoices",
      "Optional 80mm thermal printer for accessory sales",
    ],
    faqs: [
      {
        q: "Can BirStock record IMEI numbers for each phone?",
        a: "Yes. Enable serial tracking on the product and BirStock records the serial/IMEI numbers of each unit.",
      },
      {
        q: "How do I handle a defective unit from a distributor?",
        a: "Use Purchase Returns against the original purchase. BirStock records a debit note and reduces stock and the supplier's due.",
      },
    ],
  },
  {
    slug: "hardware-sanitary",
    name: "Hardware, Paints & Sanitary Stores",
    shortName: "Hardware & Sanitary",
    tagline: "Thousands of SKUs, mixed units and contractor credit accounts",
    metaTitle: "Hardware & Sanitary Store Billing Software",
    metaDescription:
      "Billing and inventory software for hardware, paint and sanitary stores: mixed units of measure, Excel product import, contractor credit ledgers, supplier debit notes and multi-rate GST invoices.",
    keywords: ["hardware shop billing software", "sanitary shop billing software", "paint shop billing software", "hardware store inventory software"],
    headline: "Inventory & Contractor Credit Management for Hardware Stores",
    subheadline:
      "Catalogue thousands of fittings, keep plumber and contractor accounts straight, and bill mixed GST rates on one invoice.",
    previewSlug: "inventory-management",
    challenges: [
      {
        problem: "Huge catalogues & mixed units",
        impact: "Hardware stores stock thousands of parts sold in Pcs, Kg, metres, boxes and litres.",
      },
      {
        problem: "Contractor credit",
        impact: "Plumbers and contractors buy daily and settle monthly, which is hard to track on paper.",
      },
      {
        problem: "Multiple GST rates per bill",
        impact: "A single invoice often mixes items across different GST rates.",
      },
    ],
    solutions: [
      {
        title: "Units & Excel import",
        desc: "Set the unit for each product and import your catalogue from Excel instead of typing it in.",
      },
      {
        title: "Contractor Khata ledgers",
        desc: "Bill materials to a contractor's account, record payments and export a PDF statement.",
      },
      {
        title: "Line-level GST",
        desc: "Each line uses its product's GST rate, and the invoice shows the full tax breakdown.",
      },
    ],
    keyHighlights: [
      "Units of measure such as Pcs, Kg, Box, Litre and Meter",
      "Low-stock alerts for fast-moving fittings and paints",
      "Contractor credit accounts with running dues and payments",
      "Purchase returns with debit notes for damaged goods",
      "Financial year carry-forward of stock and balances",
      "Daily billing that works offline",
    ],
    hardwareRecommended: [
      "USB handheld barcode scanner",
      "A4 printer for contractor invoices",
      "80mm thermal printer for quick counter sales",
    ],
    faqs: [
      {
        q: "Can I sell items in different units like litres, kilograms and pieces?",
        a: "Yes. Set the unit of measure for each product and bill fractional quantities where needed.",
      },
      {
        q: "Can I print A4 invoices with a GST breakdown for contractors?",
        a: "Yes. Choose the A4 invoice layout to print tax invoices with the GST breakdown.",
      },
    ],
  },
  {
    slug: "apparel-footwear",
    name: "Apparel, Garments & Footwear",
    shortName: "Apparel & Footwear",
    tagline: "Fast barcode checkout with easy returns",
    metaTitle: "Apparel & Footwear Shop Billing Software",
    metaDescription:
      "Billing software for clothing and footwear shops: barcode checkout, touch or keyboard POS, held bills while customers try sizes, item and bill discounts, and sales returns that update stock.",
    keywords: ["garment shop billing software", "clothing store pos software", "footwear shop billing software", "boutique billing software"],
    headline: "Fast Fashion & Footwear POS for Busy Counters",
    subheadline:
      "Scan tags quickly, hold a bill while the customer tries another size, and process returns that put stock back automatically.",
    previewSlug: "pos-billing",
    challenges: [
      {
        problem: "Frequent size returns",
        impact: "Manual return calculations cause stock mismatches and cashier errors.",
      },
      {
        problem: "Rush-hour bottlenecks",
        impact: "Slow checkouts during sales and festivals create long billing lines.",
      },
      {
        problem: "Season-end discounts",
        impact: "Without item-level discounts, markdowns are hard to apply at the counter.",
      },
    ],
    solutions: [
      {
        title: "Sales returns",
        desc: "Find the original bill, select the returned items, and BirStock adds them back to stock.",
      },
      {
        title: "Barcode checkout",
        desc: "Scan clothing and footwear tags straight into the cart.",
      },
      {
        title: "Item & bill discounts",
        desc: "Apply flat or percentage discounts per item or across the whole bill.",
      },
    ],
    keyHighlights: [
      "Barcode scanning straight into the cart",
      "Quick POS for keyboards or the regular POS screen for touch",
      "Sales returns linked to the original bill",
      "Hold Cart while shoppers try another size",
      "58mm/80mm thermal receipts",
      "Sales and profit reports",
    ],
    hardwareRecommended: [
      "Barcode scanner with stand for tag scanning",
      "80mm thermal receipt printer",
      "Touchscreen monitor or standard Windows laptop",
    ],
    faqs: [
      {
        q: "How do I handle a customer returning a shirt for a different size?",
        a: "Record the returned item in Sales Returns against the original bill so it goes back into stock, then bill the replacement item as a new sale.",
      },
      {
        q: "Can I keep a bill open while the customer tries another size?",
        a: "Yes. Press Hold Cart to pause the bill, serve the next customer, and resume it when they're ready.",
      },
    ],
  },
  {
    slug: "wholesale",
    name: "Wholesale Traders & Distributors",
    shortName: "Wholesale",
    tagline: "B2B invoicing, supplier debit notes and year-end carry-forward",
    metaTitle: "Wholesale Billing & Inventory Software for Distributors",
    metaDescription:
      "Billing and inventory software for wholesalers and distributors: B2B GST invoices on A4, customer credit ledgers, supplier debit notes, Excel import and financial year carry-forward.",
    keywords: ["wholesale billing software", "distributor billing software", "b2b gst billing software", "wholesale inventory software india"],
    headline: "Desktop Invoicing & Inventory for Wholesale Distributors",
    subheadline:
      "Manage bulk orders, customer credit, supplier returns and financial year changes - with your business records stored on your own PC.",
    previewSlug: "supplier-management",
    challenges: [
      {
        problem: "Confidential margins on the cloud",
        impact: "Client lists, purchase rates and margins are sensitive business information.",
      },
      {
        problem: "Year-end rollovers",
        impact: "Manually carrying forward stock and dues at year end is slow and error-prone.",
      },
      {
        problem: "Damaged stock returns",
        impact: "Returns to manufacturers need proper debit note records.",
      },
    ],
    solutions: [
      {
        title: "Records on your own PC",
        desc: "Margins, supplier costs and client lists live in BirStock's local database, with backups to your own Google Drive.",
      },
      {
        title: "Financial year carry-forward",
        desc: "Closing stock becomes opening stock, and customer and supplier balances carry into the new year.",
      },
      {
        title: "Debit notes",
        desc: "Return damaged shipments with a debit note that reduces stock and the supplier's due.",
      },
    ],
    keyHighlights: [
      "B2B GST tax invoices with customer GSTIN and address",
      "Purchase returns with debit notes",
      "Customer credit ledgers with PDF statements",
      "Financial year management with carry-forward",
      "PIN App Lock",
      "Local backups (20 by default) plus Google Drive backup",
    ],
    hardwareRecommended: [
      "A4 laser printer for multi-line B2B invoices",
      "Wireless barcode scanner for warehouse checks",
      "Windows 10/11 desktop PC",
    ],
    faqs: [
      {
        q: "Can BirStock print A4 invoices with many line items?",
        a: "Yes. Use the A4 invoice layout for B2B tax invoices with the GST breakdown and total in words.",
      },
      {
        q: "What happens when we close the financial year on 31 March?",
        a: "Create the new financial year in BirStock. Closing stock carries forward as opening stock, and customer and supplier balances move into the new year. Earlier years stay available to look up.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((ind) => ind.slug === slug);
}
