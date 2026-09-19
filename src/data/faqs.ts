export type FaqCategory = {
  category: string;
  items: { q: string; a: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        q: "Does BirStock require an active internet connection to create bills?",
        a: "No. BirStock is completely offline-first. Inventory, billing, customer Khata, and reports all work 100% offline. Internet is only needed if you want automatic cloud backups to your Google Drive.",
      },
      {
        q: "What do I need to install BirStock?",
        a: "BirStock runs as a native Windows desktop app (NSIS installer or Portable build), with macOS and Linux support on the roadmap. There's no separate database server to install - everything is bundled.",
      },
      {
        q: "How long does setup take for a new store?",
        a: "Most stores are billing their first customer within an hour - enter your store profile and GST details, add your product catalog, and you're ready to go.",
      },
    ],
  },
  {
    category: "Billing & Hardware",
    items: [
      {
        q: "What printers and barcode scanners are supported?",
        a: "BirStock supports all standard USB and wireless handheld barcode scanners (plug-and-play). For printing, it auto-detects 80mm thermal, 58mm mini thermal, and standard A4/A5 laser and inkjet printers from brands like TVS, Epson, HP, Canon, and Xprinter.",
      },
      {
        q: "Can I run BirStock on a touchscreen counter?",
        a: "Yes. Alongside the keyboard-driven Quick POS, BirStock includes a Touch & Grid POS mode with category tabs and tap-to-add product cards, purpose-built for touchscreen counters.",
      },
      {
        q: "Can multiple bills be open at the same counter?",
        a: "Yes - use Minimize & Hold Cart to dock an in-progress bill and start a new one instantly, then restore the held cart with one click whenever the customer returns.",
      },
    ],
  },
  {
    category: "Data, Backup & Security",
    items: [
      {
        q: "How does the Google Drive backup work?",
        a: "Connect your Google account once in Settings. Set backups to run automatically every night or week, and BirStock saves your database directly into your own Google Drive storage - giving you full ownership with no third-party data access.",
      },
      {
        q: "What if my computer crashes or I need to move to a new machine?",
        a: "Restore from your latest local or Google Drive backup using Clean Replace for a full restore, or Smart Merge to combine backup data with your current database without duplicate records.",
      },
      {
        q: "Is my business data ever uploaded to a BirStock server?",
        a: "No. BirStock is offline-first and your data lives locally on your machine. The only optional transfer is the encrypted backup you choose to send to your own Google Drive account.",
      },
    ],
  },
  {
    category: "GST, Khata & Accounting",
    items: [
      {
        q: "Can I manage customer credit (Udhar / Khata) in the app?",
        a: "Yes. BirStock includes a full credit ledger system - issue credit bills, track outstanding dues, accept partial or advance payments, and print or WhatsApp customer statements.",
      },
      {
        q: "Which GST rates does BirStock support?",
        a: "BirStock supports GST 0%, 5%, 12%, 18%, 28%, and Inter-State IGST, with automatic CGST/SGST/IGST breakdown and HSN/SAC codes on every invoice.",
      },
      {
        q: "What happens at the end of the financial year?",
        a: "Create a new financial year with a single click. Set your closing date, and BirStock automatically carries forward your closing stock as opening stock and transfers customer and supplier balances into a fresh, isolated ledger.",
      },
    ],
  },
  {
    category: "Pricing & Licensing",
    items: [
      {
        q: "Is BirStock really a one-time purchase?",
        a: "Yes - BirStock is licensed as a one-time purchase per business, not a recurring subscription. There are no forced monthly fees to keep billing.",
      },
      {
        q: "Can I use BirStock across multiple store counters?",
        a: "Yes, BirStock supports multi-counter billing within a store, and multi-store licensing is available on our Enterprise plan. Reach out and we'll help you pick the right fit.",
      },
    ],
  },
];

export const flatFaqs = faqCategories.flatMap((c) => c.items);
