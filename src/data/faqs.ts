import { formatINR, getPlan, pricingSummary } from "@/data/pricing";

export type FaqCategory = {
  category: string;
  items: { q: string; a: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        q: "Do I need internet to create bills in BirStock?",
        a: "No, not for day-to-day billing. BirStock's billing and business database run locally on your computer, so after licence activation you can create bills without internet, subject to licence status. Internet is required for licence activation and checks, software updates, optional Google Drive backup, and email OTP PIN recovery.",
      },
      {
        q: "What do I need to install BirStock?",
        a: "A Windows 10 or Windows 11 PC. BirStock installs like any desktop app and includes its own local database - there is no separate database server to set up.",
      },
      {
        q: "How long does setup take for a new store?",
        a: "Most stores can bill their first customer the same day: enter your store and GST details, import your product list from Excel (or add products manually), and start billing.",
      },
      {
        q: "How do software updates work?",
        a: "BirStock can check for new releases, download them and install them. When an update is ready, save your work and restart BirStock to finish installing. Downloading updates needs internet.",
      },
    ],
  },
  {
    category: "Billing & Hardware",
    items: [
      {
        q: "Which printers and barcode scanners can I use?",
        a: "Standard USB or wireless barcode scanners that work in keyboard mode work out of the box. For printing, choose a 58mm or 80mm thermal template for receipts or an A4 template for invoices in Settings - any printer installed in Windows can be used with the matching layout.",
      },
      {
        q: "Can I run BirStock on a touchscreen counter?",
        a: "Yes. Alongside the keyboard-first Quick POS, the regular POS screen works with a mouse or a touchscreen.",
      },
      {
        q: "What is Hold Cart - is it the same as multiple counters?",
        a: "Hold Cart lets one counter keep multiple bills open: pause a customer's bill, bill the next customer, then resume the held bill. It is not networked billing across separate PCs - each Windows PC runs its own BirStock licence and database. To bill from a phone on the same shop network, use the BirStock Mobile App.",
      },
      {
        q: "How do customer returns and supplier returns work?",
        a: "Use Sales Returns for customer returns - stock goes back up and, for credit sales, the customer's Khata is adjusted. Use Purchase Returns for supplier returns - BirStock records a debit note and reduces stock and the supplier's due.",
      },
    ],
  },
  {
    category: "BirStock Mobile App",
    items: [
      {
        q: "What is the BirStock Mobile App?",
        a: "The BirStock Mobile App is the mobile companion to the BirStock desktop app. Pair your phone with the desktop using a QR code over your shop's Wi-Fi/LAN, then make sales and view selected customer, invoice and stock details from your phone.",
      },
      {
        q: "Does the mobile app work on Android and iPhone?",
        a: "Yes. The BirStock Mobile App is available for both Android and iOS.",
      },
      {
        q: "Does the BirStock Mobile App replace the desktop app?",
        a: "No. The desktop remains the main database. Setup, reports, backups and settings stay on the desktop; the mobile app handles supported phone workflows alongside it.",
      },
      {
        q: "What happens if the Wi-Fi drops while using the BirStock Mobile App?",
        a: "Supported work is queued on the phone and syncs to the desktop after the phone reconnects to the same network.",
      },
      {
        q: "Which plan includes the mobile app?",
        a: `The BirStock Mobile App is included in the Yearly plan (${formatINR(getPlan("yearly").price)}/year). Lifetime licence holders can add it as a paid add-on.`,
      },
    ],
  },
  {
    category: "Data, Backup & Security",
    items: [
      {
        q: "How does the Google Drive backup work?",
        a: "Connect your own Google account once in Settings and choose daily or weekly backups at the time you prefer. Backups are saved to your Google Drive. BirStock also keeps local backups - 20 by default, and you can change that number.",
      },
      {
        q: "What if my computer crashes or I move to a new PC?",
        a: "Install BirStock on the new PC, activate your licence, and restore your latest local or Google Drive backup. Use Clean Replace for a full restore or Smart Merge to combine a backup with your current data.",
      },
      {
        q: "How does App Lock and PIN recovery work?",
        a: "Set a PIN to lock BirStock. You can ask for the PIN every time BirStock starts and lock it manually when you step away. If you forget the PIN, Forgot PIN sends an OTP to your registered email through the BirStock licence server - internet is required for recovery-email setup and PIN reset. Unlocking with your PIN works offline.",
      },
      {
        q: "Is my business data sent to a BirStock server?",
        a: "Your business records - products, bills, customers and suppliers - stay in a local database on your PC. Some things do involve our server: licence activation and device checks, and App Lock recovery emails/OTPs. Optional backups go to your own Google Drive. See our Privacy Policy for the full breakdown.",
      },
    ],
  },
  {
    category: "GST, Khata & Accounting",
    items: [
      {
        q: "Can I manage customer credit (Udhar / Khata)?",
        a: "Yes. Bill to a customer's account, record payments at any time, see the full bill history and running due, process returns, and export a customer statement as PDF.",
      },
      {
        q: "Which GST rates does BirStock support?",
        a: "Five built-in GST rate percentages - 0%, 5%, 12%, 18% and 28% - with intra-state CGST/SGST and inter-state IGST handling. Tax invoices can include the customer's GSTIN and address.",
      },
      {
        q: "Can I manage more than one company or firm?",
        a: "Yes. BirStock supports multiple companies/firms in one installation. Each company keeps its own products, customers, bills and reports, and you can switch between them in the app.",
      },
      {
        q: "Can I track shop expenses?",
        a: "Yes. Record expenses (like rent, salaries or electricity) and other income in BirStock - they are included in your reporting totals.",
      },
      {
        q: "What happens at the end of the financial year?",
        a: "Create a new financial year in BirStock. Closing stock carries forward as opening stock, and customer and supplier balances move into the new year. You can switch back to earlier years to look up past records. We recommend taking a backup first.",
      },
    ],
  },
  {
    category: "Pricing & Licensing",
    items: [
      {
        q: "How much does BirStock cost?",
        a: `BirStock costs ${pricingSummary}. All plans include the full desktop app with POS, inventory, Khata, GST invoices, reports and backup.`,
      },
      {
        q: "What does the Lifetime licence include?",
        a: `The ${formatINR(getPlan("lifetime").price)} Lifetime licence is a one-time payment for a permanent licence with all current desktop features and bug-fix updates for them. New feature modules released later, and the BirStock Mobile App, are available as optional add-ons priced per feature.`,
      },
      {
        q: "Can I use BirStock on more than one PC?",
        a: "Each plan covers one Windows PC. For more counters or branches, contact us for additional licences - each PC runs its own BirStock database.",
      },
      {
        q: "Can I try BirStock before buying?",
        a: "Yes. Request a demo and our team will walk you through BirStock and help you set up a trial so you can test it with your own products.",
      },
    ],
  },
];

export const flatFaqs = faqCategories.flatMap((c) => c.items);
