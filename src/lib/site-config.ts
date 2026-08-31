export const siteConfig = {
  name: "BirPOS",
  tagline: "The Fastest, Most Reliable POS & Inventory Software for Indian Businesses",
  description:
    "BirPOS is a 100% offline-first desktop POS, inventory & ERP system for retailers and wholesalers. Multi-rate GST billing, customer Khata, supplier management, and automated Google Drive backup — with zero monthly fees.",
  url: "https://birpos.birtiktech.com",
  company: "Birtik Tech",
  email: "connect@birtiktech.com",
  phone: "+91 81560 00337",
  phoneDisplay: "+91 81560 00337",
  address: {
    line1: "C/111, 1st Floor, Orchid Complex, Pirojpura",
    line2: "Chhapi, Vadgam, Banaskantha 385210, Gujarat, India",
    full: "C/111, 1st Floor, Orchid Complex, Pirojpura, Chhapi, Vadgam, Banaskantha 385210, Gujarat, India",
  },
  social: {
    twitter: "https://twitter.com/birtiktech",
    linkedin: "https://www.linkedin.com/company/birtiktech",
    youtube: "https://www.youtube.com/@birtiktech",
    facebook: "https://www.facebook.com/birtiktech",
    instagram: "https://www.instagram.com/birtiktech",
  },
  keywords: [
    "POS software India",
    "offline POS software",
    "billing software for retail shops",
    "GST billing software",
    "inventory management software",
    "kirana store billing software",
    "customer khata app",
    "wholesale billing software",
    "desktop POS software",
    "retail ERP software India",
  ],
} as const;

export const mainNav = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Download", href: "/contact?type=download" },
    { label: "Request a Demo", href: "/contact?type=demo" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
} as const;
