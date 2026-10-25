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
    | "financial-year"
    | "mobile"
    | "expenses"
    | "returns"
    | "company";
  name: string;
  shortName: string;
  /** Search-focused <title> (without the "| BirStock" suffix). */
  seoTitle: string;
  tagline: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  highlights: string[];
  /** Optional extra section rendered under the highlights (e.g. limitations, requirements). */
  note?: { title: string; points: string[] };
  workflow: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
  /** Slugs of closely related features shown at the bottom of the page. */
  related: string[];
};

export const features: Feature[] = [
  {
    slug: "pos-billing",
    icon: "billing",
    name: "Keyboard & Touch POS Billing",
    shortName: "POS Billing",
    seoTitle: "Fast POS Billing Software with Barcode Scanning",
    tagline: "Quick billing, whether you type or tap",
    metaDescription:
      "BirStock POS billing software: keyboard-first Quick POS, a regular POS screen for mouse or touch, barcode scanning, held bills, stock checks, discounts and change calculation - offline on Windows.",
    keywords: ["pos billing software", "barcode billing software", "quick pos software", "retail pos india", "hold bill pos"],
    summary:
      "BirStock gives your counter two ways to bill: a keyboard-first Quick POS for high-volume cashiers and the regular POS screen for mouse or touch. Both share barcode search, held bills, stock checks and discounts.",
    highlights: [
      "Quick POS: add items, set quantities and check out with keyboard shortcuts - no mouse needed",
      "Barcode scanning or type-ahead search drops items straight into the cart",
      "Stock check warns before you sell more units than you have",
      "Item-level and bill-level discounts, flat or percentage",
      "Enter the amount received and BirStock shows the change or balance due",
      "Hold Cart (F9): pause one bill and start another at the same counter, then resume it",
      "Print receipts on thermal rolls or A4 invoice layouts you choose in Settings",
    ],
    note: {
      title: "Held bills vs. multiple counters",
      points: [
        "Hold Cart lets one counter keep multiple bills open - pause a customer's bill, serve the next, then resume.",
        "Each Windows PC runs its own BirStock licence and database. Shared billing across separate desktop registers is not part of the current release.",
        "Want to bill from a phone on the shop floor? See the BirStock Mobile App.",
      ],
    },
    workflow: [
      { step: "Scan or search", detail: "Use a USB or wireless barcode scanner, or type-ahead search, to add products to the cart." },
      { step: "Adjust & discount", detail: "Change quantities and apply item or bill discounts - totals and GST recalculate as you go." },
      { step: "Hold if interrupted", detail: "Customer stepped away? Press Hold Cart, bill the next customer, and resume the held bill later." },
      { step: "Collect & print", detail: "Enter the amount received, check the change or due shown, and print on thermal or A4." },
    ],
    faqs: [
      {
        q: "Can one cashier keep multiple bills open at the same counter?",
        a: "Yes. Hold Cart (F9) pauses the current bill so the cashier can start another one, then resume the held bill with all its items intact. This is multiple bills at one counter - not networked billing across separate PCs.",
      },
      {
        q: "Does BirStock stop me from selling out-of-stock items?",
        a: "Yes. BirStock validates stock as you bill and warns the cashier when the quantity exceeds what is available.",
      },
      {
        q: "Which barcode scanners work with BirStock?",
        a: "Standard USB or wireless handheld scanners that work in keyboard mode work with BirStock without extra drivers.",
      },
      {
        q: "Can I bill from my phone?",
        a: "Yes, with the BirStock Mobile App (included in the Yearly plan). Your phone pairs with the desktop over shop Wi-Fi and supports sales billing plus selected customer, invoice and stock views.",
      },
    ],
    related: ["gst-billing", "inventory-management", "mobile-app"],
  },
  {
    slug: "inventory-management",
    icon: "inventory",
    name: "Inventory & Purchase Management",
    shortName: "Inventory",
    seoTitle: "Inventory Software with Excel Import & Stock Alerts",
    tagline: "Every product, every unit, always up to date",
    metaDescription:
      "Manage products with barcode, category, units and prices. Import or export your catalogue with Excel, update stock through purchases, get low-stock alerts and track serial/IMEI numbers.",
    keywords: ["inventory management software", "stock management software india", "excel product import billing software", "low stock alert software", "imei tracking software"],
    summary:
      "BirStock keeps one accurate record of your stock - from adding a single product to importing your whole catalogue from Excel. Purchases add stock, sales and returns adjust it, and low-stock views tell you what to reorder.",
    highlights: [
      "Barcode, SKU, category, unit (Pcs, Kg, Ltr, Box), cost price and sale price on every product",
      "Excel bulk import to load your catalogue in one go - and Excel export for audits and reviews",
      "Stock increases automatically when you record a supplier purchase",
      "Sales, customer returns and supplier returns adjust stock automatically",
      "Low-stock view flags products below their minimum quantity",
      "Optional serial/IMEI tracking for phones, electronics and appliances",
    ],
    workflow: [
      { step: "Import or add products", detail: "Import your product list from an Excel sheet, or add items one by one with barcode, category, prices and minimum stock." },
      { step: "Record purchases", detail: "Enter a supplier purchase bill - product stock goes up and the supplier's due is updated." },
      { step: "Sell & return", detail: "Every sale reduces stock; sales returns and purchase returns adjust it the right way." },
      { step: "Reorder on time", detail: "Check the low-stock list, or export the catalogue to Excel for a stock review." },
    ],
    faqs: [
      {
        q: "Can I import my existing product list from Excel?",
        a: "Yes. BirStock supports product Excel import for bulk setup and Excel export for stock reviews and audits.",
      },
      {
        q: "How does stock get updated when I buy from a supplier?",
        a: "Record the purchase against the supplier in BirStock. The purchased quantities are added to stock and the supplier's outstanding balance is updated.",
      },
      {
        q: "Can I track serial numbers or IMEI for mobiles and electronics?",
        a: "Yes. Turn on serial tracking for a product and BirStock records the serial/IMEI numbers for each unit.",
      },
      {
        q: "Does BirStock reorder stock automatically?",
        a: "No. BirStock shows low-stock alerts so you can decide what to reorder - it does not place orders with suppliers.",
      },
    ],
    related: ["supplier-management", "sales-purchase-returns", "pos-billing"],
  },
  {
    slug: "customer-khata",
    icon: "khata",
    name: "Customer Khata & Credit Ledger",
    shortName: "Customer Khata",
    seoTitle: "Customer Khata Software - Digital Udhar Ledger for Shops",
    tagline: "Digital Udhar, without the notebook",
    metaDescription:
      "Track customer credit (Khata/Udhar) in BirStock: credit bills, payments, bill history, sales returns and running dues, with customer statement PDF export - offline on your PC.",
    keywords: ["khata software", "udhar khata for shop", "customer ledger software", "credit billing software", "khata book for pc"],
    summary:
      "Replace the paper Khata notebook with a digital customer ledger. Every credit sale, payment and return is recorded against the customer, so their balance is always accurate.",
    highlights: [
      "Bill directly to a customer's account using Credit / Khata at checkout",
      "Customer ledger shows sales, payments and returns with the running due",
      "Record full or part payments from customers at any time",
      "Full bill history for every customer",
      "Sales returns adjust the customer's balance and your stock",
      "Export a customer statement as PDF to print or share",
    ],
    workflow: [
      { step: "Sell on credit", detail: "Choose Credit / Khata as the payment mode at checkout - the bill is added to the customer's account." },
      { step: "Track the balance", detail: "Open the customer to see every sale, payment and return with the running due." },
      { step: "Record a payment", detail: "Log a payment whenever the customer pays and the due updates immediately." },
      { step: "Share a statement", detail: "Export the customer's ledger as a PDF statement to print or send." },
    ],
    faqs: [
      {
        q: "Can I give a customer their statement?",
        a: "Yes. Export any customer's ledger as a PDF statement, then print it or share the file with the customer.",
      },
      {
        q: "How do customer returns affect the Khata balance?",
        a: "Record the return through Sales Returns. BirStock adds the items back to stock and adjusts the customer's ledger.",
      },
      {
        q: "Does Khata work without internet?",
        a: "Yes. Customer records and ledgers are stored in BirStock's local database on your PC.",
      },
    ],
    related: ["sales-purchase-returns", "pos-billing", "reports-analytics"],
  },
  {
    slug: "supplier-management",
    icon: "supplier",
    name: "Supplier & Purchase Management",
    shortName: "Suppliers",
    seoTitle: "Supplier Ledger & Purchase Management Software",
    tagline: "Every vendor, every rupee, tracked",
    metaDescription:
      "Supplier directory with purchase history, outstanding dues, payment settlement with reference notes, and purchase returns (debit notes) that adjust stock and dues - built into BirStock.",
    keywords: ["supplier ledger software", "purchase management software", "debit note software", "vendor payment tracking", "purchase return software"],
    summary:
      "From adding a distributor to settling a due with a cheque number, BirStock keeps a complete supplier ledger next to your inventory - not in a separate spreadsheet.",
    highlights: [
      "Supplier directory with total dues and full purchase history",
      "Line-item detail for every purchase, exportable as PDF",
      "Record supplier payments with reference notes (cheque no., bank UTR)",
      "Purchase returns with debit notes for damaged, expired or excess stock",
      "Stock and supplier dues adjust automatically after a return",
      "Supplier GSTIN and address on file for purchase records",
    ],
    workflow: [
      { step: "Add a supplier", detail: "Create a supplier with contact, GSTIN and address - it is ready for purchases and returns." },
      { step: "Record purchases", detail: "Each purchase adds stock and builds the supplier's purchase history and due balance." },
      { step: "Settle dues", detail: "Record payments by cash, UPI, cheque or bank transfer with a reference note." },
      { step: "Return goods", detail: "Select a past purchase, choose the items to return, and BirStock reduces stock and the supplier's due with a debit note." },
    ],
    faqs: [
      {
        q: "Can I return damaged or expired stock to a supplier?",
        a: "Yes. Use Purchase Returns: pick the original purchase, select the items, and BirStock records a debit note while adjusting stock and the supplier's due.",
      },
      {
        q: "Can I add a cheque or UTR number to a supplier payment?",
        a: "Yes. Every supplier payment has a reference note field for cheque numbers or bank UTR references.",
      },
    ],
    related: ["inventory-management", "sales-purchase-returns", "expenses-income"],
  },
  {
    slug: "gst-billing",
    icon: "gst",
    name: "GST Billing & Invoicing",
    shortName: "GST Billing",
    seoTitle: "GST Billing Software with CGST, SGST & IGST Invoices",
    tagline: "GST-ready invoices on the printer you already have",
    metaDescription:
      "Create GST tax invoices with five built-in GST rates, CGST/SGST for intra-state and IGST for inter-state sales, customer GSTIN and address, and thermal or A4 print layouts.",
    keywords: ["gst billing software", "gst invoice software", "cgst sgst igst billing", "gst bill format thermal", "a4 gst invoice software"],
    summary:
      "BirStock calculates GST on every line, shows the tax breakdown on the invoice, and prints on the layout you pick - a thermal roll at the counter or an A4 invoice for business customers.",
    highlights: [
      "Five built-in GST rates - 0%, 5%, 12%, 18% and 28%",
      "Intra-state CGST/SGST and inter-state IGST tax handling",
      "Tax Invoice with customer GSTIN and address for B2B sales",
      "Bill of Supply for non-taxable sales",
      "Tax breakdown on every invoice, with the total in words",
      "Choose thermal (58mm/80mm) or A4 invoice templates in Settings",
    ],
    note: {
      title: "Your accountant still has the final say",
      points: [
        "BirStock prepares GST invoices and GST/tax reports from your bills. Please review tax settings and filings with your CA.",
        "Product tax rates are set by you - double-check them when GST rates change.",
      ],
    },
    workflow: [
      { step: "Set up tax details", detail: "Enter your GSTIN and default GST settings once - new bills use them automatically." },
      { step: "Bill as usual", detail: "GST is calculated per line item as you bill, using each product's rate." },
      { step: "Pick the document", detail: "Issue a Tax Invoice with the customer's GSTIN, or a Bill of Supply where applicable." },
      { step: "Print your layout", detail: "Print on the thermal or A4 template selected in Settings." },
    ],
    faqs: [
      {
        q: "Which GST rates are built in?",
        a: "BirStock includes five built-in GST rate percentages - 0%, 5%, 12%, 18% and 28% - with intra-state CGST/SGST and inter-state IGST handling.",
      },
      {
        q: "Can I add the customer's GSTIN on the invoice?",
        a: "Yes. Customer and supplier records store GSTIN and address, which appear on tax invoices.",
      },
      {
        q: "Which printers can I use?",
        a: "Choose a 58mm or 80mm thermal template for counter receipts or an A4 template for formal invoices. Any printer Windows can print to will work with the matching layout.",
      },
      {
        q: "Does BirStock export GSTR-1 files for the GST portal?",
        a: "BirStock includes GST/tax reports you can print or export to PDF for your accountant. Direct GSTR-1 portal file export is not part of the current release.",
      },
    ],
    related: ["pos-billing", "reports-analytics", "customer-khata"],
  },
  {
    slug: "backup-sync",
    icon: "backup",
    name: "Local & Google Drive Backup",
    shortName: "Backup",
    seoTitle: "Automatic Google Drive Backup for Billing Software",
    tagline: "Cloud safety, while your data stays yours",
    metaDescription:
      "Automatic local backups plus optional Google Drive backup on your own schedule. 20 backups kept by default (configurable), with Clean Replace and Smart Merge restore options.",
    keywords: ["billing software google drive backup", "pos data backup", "restore billing data new pc", "offline software cloud backup"],
    summary:
      "BirStock backs up to your PC and, if you choose, to your own Google Drive - on a schedule you set. If your computer fails or you move to a new PC, restore from the latest backup.",
    highlights: [
      "Local ZIP backups with retention - 20 kept by default, configurable by you",
      "Optional Google Drive backup to your own Google account",
      "Daily or weekly automatic backups at the time you choose",
      "Clean Replace restore - replaces current data, with a safety backup taken first",
      "Smart Merge restore - combines a backup with your current data",
      "Manual backup and restore any time from Settings",
    ],
    workflow: [
      { step: "Connect Google Drive (optional)", detail: "Sign in once from Settings to link your own Google Drive. Local backups work without it." },
      { step: "Set your schedule", detail: "Choose daily or weekly backups and the time they should run." },
      { step: "Backups run automatically", detail: "BirStock saves local backups and uploads to Drive when you are online." },
      { step: "Restore when needed", detail: "Choose Clean Replace for a full restore or Smart Merge to combine data." },
    ],
    faqs: [
      {
        q: "Whose Google Drive does BirStock back up to?",
        a: "Your own. You connect your personal or business Google account - backup files go to your Drive, not to a BirStock server.",
      },
      {
        q: "When do automatic backups run?",
        a: "At the time you choose in Settings, daily or weekly. You can also run a backup manually at any time.",
      },
      {
        q: "How many backups are kept?",
        a: "BirStock keeps the latest 20 local backups by default. You can change this number in Settings.",
      },
      {
        q: "How do I move BirStock to a new computer?",
        a: "Install BirStock on the new PC, activate your licence, then restore your latest local or Google Drive backup using Clean Replace.",
      },
    ],
    related: ["security", "financial-year", "reports-analytics"],
  },
  {
    slug: "reports-analytics",
    icon: "reports",
    name: "Reports & Business Analytics",
    shortName: "Reports",
    seoTitle: "Sales, Profit & GST Reports for Retail Shops",
    tagline: "Know your numbers without waiting on a sync",
    metaDescription:
      "BirStock reports: sales, profit and loss, GST/tax reports and dashboard totals that include expenses and other income - print or export to PDF for your accountant.",
    keywords: ["sales report software", "profit and loss report retail", "gst report software", "shop accounting reports"],
    summary:
      "Every bill, purchase, return and expense you record in BirStock feeds your reports - so you can check sales, profit and tax totals straight from your own PC.",
    highlights: [
      "Sales reports for any date range",
      "Profit & loss based on cost and sale prices",
      "GST/tax reports for your accountant",
      "Expenses and other income included in report totals",
      "Customer dues and supplier payables from your ledgers",
      "Print any report or export it to PDF",
    ],
    workflow: [
      { step: "Bill as normal", detail: "Sales, returns, purchases and expenses are recorded as you work - no separate data entry." },
      { step: "Open reports", detail: "Pick sales, profit/loss or GST/tax reports and choose a date range." },
      { step: "Review totals", detail: "See totals that include your recorded expenses and other income." },
      { step: "Print or export", detail: "Print the report or export it to PDF for your accountant or partner." },
    ],
    faqs: [
      {
        q: "Which reports does BirStock include?",
        a: "Sales, profit and loss, and GST/tax reports, with print and PDF export. Expenses and other income are included in reporting totals.",
      },
      {
        q: "Are the dashboards on this website real data?",
        a: "No. The interactive previews on our website use illustrative sample figures to show how screens work. They are not connected to any store's data.",
      },
    ],
    related: ["expenses-income", "gst-billing", "customer-khata"],
  },
  {
    slug: "expenses-income",
    icon: "expenses",
    name: "Expenses & Other Income",
    shortName: "Expenses & Income",
    seoTitle: "Shop Expense Tracker & Other Income Entries",
    tagline: "See real profit, not just sales",
    metaDescription:
      "Record shop expenses like rent, salaries and electricity, plus other income, in BirStock. Entries are included in your reporting totals so profit reflects real costs.",
    keywords: ["shop expense tracker", "expense entry billing software", "other income entry", "retail expense management"],
    summary:
      "Sales alone don't tell you what you earned. Record day-to-day shop expenses and any other income in BirStock, and your reports include them in the totals.",
    highlights: [
      "Add expense entries - for example rent, salaries, electricity, transport",
      "Record other income that doesn't come from a sale",
      "Expenses and income are included in reporting totals",
      "Stored locally with the rest of your business data and included in backups",
    ],
    workflow: [
      { step: "Add an entry", detail: "Open Expenses/Income and record the amount and details." },
      { step: "Keep it current", detail: "Log expenses as they happen or at day end." },
      { step: "Check reports", detail: "Report totals include your expenses and other income." },
    ],
    faqs: [
      {
        q: "Do expenses show up in reports?",
        a: "Yes. Expense and other income entries are included in BirStock's reporting totals.",
      },
      {
        q: "Is this a full accounting package?",
        a: "No. Expenses & Income helps you track day-to-day shop costs and extra income. Keep using your accountant for statutory books and filings.",
      },
    ],
    related: ["reports-analytics", "supplier-management", "financial-year"],
  },
  {
    slug: "sales-purchase-returns",
    icon: "returns",
    name: "Sales Returns & Purchase Returns",
    shortName: "Returns",
    seoTitle: "Sales Return & Purchase Return (Debit Note) Software",
    tagline: "Returns that fix stock and balances automatically",
    metaDescription:
      "Handle customer sales returns and supplier purchase returns with debit notes in BirStock. Stock, customer Khata and supplier dues adjust automatically.",
    keywords: ["sales return software", "purchase return software", "debit note billing software", "return entry pos"],
    summary:
      "Returns happen every day. BirStock records customer returns and supplier returns against the original bills, and adjusts stock and balances so your books stay correct.",
    highlights: [
      "Customer sales returns linked to the original bill",
      "Returned items go back into stock",
      "Customer Khata balance adjusts for returns on credit sales",
      "Supplier purchase returns with debit notes",
      "Supplier dues and stock reduce automatically after a purchase return",
      "Return records stay in customer and supplier history",
    ],
    workflow: [
      { step: "Find the original bill", detail: "Search the sale or purchase you are returning against." },
      { step: "Select items", detail: "Choose the items and quantities being returned." },
      { step: "Save the return", detail: "BirStock adjusts stock and the customer or supplier balance." },
      { step: "Keep the record", detail: "The return appears in history - with a debit note for supplier returns." },
    ],
    faqs: [
      {
        q: "How do I process a customer return?",
        a: "Open Sales Returns, find the original bill, select the returned items and save. Stock goes back up and, for credit sales, the customer's Khata is adjusted.",
      },
      {
        q: "How do I return goods to a supplier?",
        a: "Open Purchase Returns, pick the original purchase, select the items and save. BirStock records a debit note and reduces stock and the supplier's due.",
      },
    ],
    related: ["customer-khata", "supplier-management", "inventory-management"],
  },
  {
    slug: "mobile-app",
    icon: "mobile",
    name: "BirStock Mobile App",
    shortName: "Mobile App",
    seoTitle: "BirStock Mobile App - Billing App Connected to Your Shop PC",
    tagline: "Your shop counter, in your pocket",
    metaDescription:
      "The BirStock Mobile App for Android and iOS pairs your phone with the BirStock desktop over shop Wi-Fi using a QR code. Make sales and check selected customer, invoice and stock details from your phone. Included in the Yearly plan.",
    keywords: ["billing software with mobile app", "pos mobile app india", "billing app connected to pc", "inventory app wifi sync", "birstock mobile app"],
    summary:
      "The BirStock Mobile App is the mobile companion to the BirStock desktop app. Pair your phone over your shop's Wi-Fi with a QR code, then bill customers and check key details from anywhere in the shop.",
    highlights: [
      "Available for Android and iOS phones",
      "Pair a phone with the desktop by scanning a QR code",
      "Works over your shop's local network (LAN/Wi-Fi) - no cloud server in between",
      "Create sales bills from your phone",
      "View selected customer, invoice and stock details",
      "Work queued while offline syncs to the desktop after reconnecting",
      "Your desktop stays the main database - the phone works alongside it",
    ],
    note: {
      title: "What to know before you start",
      points: [
        "The phone and the desktop PC must be on the same local network (Wi-Fi/LAN) to pair and sync.",
        "The BirStock Mobile App is a companion, not a full desktop replacement - setup, reports, backups and settings stay on the desktop.",
        "Included with the Yearly plan. Available as an add-on for Lifetime licences.",
      ],
    },
    workflow: [
      { step: "Open pairing on desktop", detail: "In BirStock on your PC, open device pairing to show a QR code." },
      { step: "Scan with your phone", detail: "Open the BirStock Mobile App and scan the QR code while both are on the same Wi-Fi." },
      { step: "Bill & check", detail: "Make sales and view selected customer, invoice and stock details on the phone." },
      { step: "Sync automatically", detail: "If the connection drops, work is queued and syncs when the phone reconnects." },
    ],
    faqs: [
      {
        q: "Is the mobile app available for Android and iPhone?",
        a: "Yes. The BirStock Mobile App supports both Android and iOS.",
      },
      {
        q: "Does the BirStock Mobile App need internet?",
        a: "It needs your shop's local network. The phone and desktop must be on the same Wi-Fi/LAN to pair and sync - the data goes between your own devices.",
      },
      {
        q: "What can I do on the phone?",
        a: "Make sales and view selected customer, invoice and stock details. Settings, reports, backups and most setup tasks stay on the desktop app.",
      },
      {
        q: "What if the Wi-Fi drops while I'm billing on the phone?",
        a: "Supported work is queued on the phone and syncs to the desktop when it reconnects.",
      },
      {
        q: "Which plans include the BirStock Mobile App?",
        a: "The BirStock Mobile App is included in the Yearly plan. Lifetime licence holders can add it as a paid add-on.",
      },
    ],
    related: ["pos-billing", "inventory-management", "customer-khata"],
  },
  {
    slug: "security",
    icon: "security",
    name: "PIN App Lock & Security",
    shortName: "App Lock",
    seoTitle: "PIN App Lock for Billing Software with Email OTP Reset",
    tagline: "Keep your counter locked when you step away",
    metaDescription:
      "BirStock App Lock: set a PIN, ask for it when the app starts, lock manually when you step away, and reset a forgotten PIN with an email OTP. Business data stays on your PC.",
    keywords: ["billing software pin lock", "pos app lock", "secure billing software", "offline data privacy"],
    summary:
      "BirStock's PIN App Lock stops others from opening your billing data. Ask for the PIN when the app starts, lock it yourself when you step away, and reset a forgotten PIN with a one-time code sent to your email.",
    highlights: [
      "Set a PIN to lock the BirStock app",
      "Optionally ask for the PIN every time BirStock starts",
      "Lock the app manually whenever you leave the counter",
      "Forgot your PIN? Reset it with an OTP sent to your registered email",
      "Business records are stored in a local database on your own PC",
    ],
    note: {
      title: "When App Lock needs internet",
      points: [
        "Setting up the recovery email, changing the PIN through email verification, and Forgot PIN all send an OTP through the BirStock licence server - internet is required for these steps.",
        "Locking and unlocking with your PIN works offline.",
      ],
    },
    workflow: [
      { step: "Set your PIN", detail: "Create your App Lock PIN and register a recovery email (internet required for email verification)." },
      { step: "Choose when to ask", detail: "Turn on PIN at startup so BirStock asks for it every time it opens." },
      { step: "Lock when you leave", detail: "Use Lock to secure the app instantly when you step away." },
      { step: "Reset if forgotten", detail: "Choose Forgot PIN - an OTP is sent to your registered email through our server so you can set a new PIN." },
    ],
    faqs: [
      {
        q: "What happens if I forget my App Lock PIN?",
        a: "Use Forgot PIN. BirStock sends a one-time code (OTP) to your registered email through the BirStock licence server, and you can set a new PIN. Internet is required for this step.",
      },
      {
        q: "Does BirStock lock itself automatically when idle?",
        a: "No. You can ask for the PIN when BirStock starts and lock it manually at any time. There is no inactivity timer in the current release.",
      },
      {
        q: "Is my business data sent to a BirStock server?",
        a: "Your business records (products, bills, customers, suppliers) stay in a local database on your PC. Licence checks and App Lock email OTPs do go through our server, and optional backups go to your own Google Drive. See our Privacy Policy for details.",
      },
    ],
    related: ["backup-sync", "financial-year", "pos-billing"],
  },
  {
    slug: "multi-company",
    icon: "company",
    name: "Multi-Company Management",
    shortName: "Multi-Company",
    seoTitle: "Multi-Company Billing Software - Separate Data per Firm",
    tagline: "Run more than one business from one BirStock",
    metaDescription:
      "Manage multiple companies or firms in BirStock with separate products, customers, bills and reports for each, and switch between them in a few clicks.",
    keywords: ["multi company billing software", "multiple firm billing software", "billing software for two businesses", "multi firm accounting software india"],
    summary:
      "Own more than one shop or firm? BirStock keeps each company's data separate and lets you switch between companies whenever you need - no second installation required.",
    highlights: [
      "Create multiple companies/firms in one BirStock installation",
      "Each company keeps its own products, customers, suppliers, bills and reports",
      "Separate business details and GSTIN for each company",
      "Switch between companies from within the app",
      "Backups cover your company data",
    ],
    workflow: [
      { step: "Add a company", detail: "Create a new company or firm and enter its business and GST details." },
      { step: "Set it up", detail: "Add or import that company's products, customers and suppliers." },
      { step: "Switch any time", detail: "Switch to the company you want to bill for - each one's data stays separate." },
      { step: "Report per company", detail: "Sales, profit and GST reports are kept per company." },
    ],
    faqs: [
      {
        q: "Can I manage two or more businesses in BirStock?",
        a: "Yes. BirStock supports multiple companies/firms, each with its own separate data, and you can switch between them inside the app.",
      },
      {
        q: "Is company data mixed together?",
        a: "No. Each company keeps its own products, customers, suppliers, bills and reports.",
      },
    ],
    related: ["financial-year", "gst-billing", "reports-analytics"],
  },
  {
    slug: "financial-year",
    icon: "financial-year",
    name: "Financial Year Management",
    shortName: "Financial Year",
    seoTitle: "Financial Year Closing & Carry-Forward for Billing Software",
    tagline: "Close the books without retyping balances",
    metaDescription:
      "Create a new financial year in BirStock and carry forward closing stock and customer/supplier balances. Switch between years to look up past records.",
    keywords: ["financial year closing software", "carry forward stock billing software", "year end closing retail", "new financial year billing"],
    summary:
      "Starting a new financial year shouldn't mean re-entering opening balances by hand. BirStock creates the new year and carries forward what should continue, while keeping each year's records separate.",
    highlights: [
      "Create a new financial year from within BirStock",
      "Closing stock carries forward as opening stock",
      "Customer and supplier balances carry forward",
      "Each year's records are kept separate",
      "Switch between financial years to look up past records",
    ],
    workflow: [
      { step: "Back up first", detail: "Take a backup before closing the year - always a good habit." },
      { step: "Create the new year", detail: "Start the new financial year from BirStock and follow the on-screen steps." },
      { step: "Carry forward", detail: "Closing stock and customer/supplier balances move into the new year." },
      { step: "Switch when needed", detail: "Switch back to an earlier year to look up past bills and ledgers." },
    ],
    faqs: [
      {
        q: "Do I need to re-enter opening stock every year?",
        a: "No. BirStock carries forward your closing stock as the new year's opening stock, along with customer and supplier balances.",
      },
      {
        q: "Can I still see last year's bills?",
        a: "Yes. Switch to the earlier financial year to look up its bills, ledgers and reports.",
      },
    ],
    related: ["backup-sync", "reports-analytics", "customer-khata"],
  },
];

export function getFeature(slug: string) {
  return features.find((f) => f.slug === slug);
}
