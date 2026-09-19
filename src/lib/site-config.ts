export const siteConfig = {
  name: "BirStock",
  tagline: "Your Data is Yours - Fast, Offline POS & Inventory Software",
  description:
    "BirStock is a 100% offline-first desktop POS, inventory & ERP system for retailers and wholesalers. Multi-rate GST billing, customer Khata, supplier management, and automated Google Drive backup - with zero monthly fees.",
  url: "https://birstock.com",
  company: "Birtik Tech",
  email: "support@birstock.com",
  phone: "+91 81560 00337",
  phoneDisplay: "+91 81560 00337",
  address: {
    line1: "C/111, 1st Floor, Orchid Complex, Pirojpura",
    line2: "Chhapi, Vadgam, Banaskantha 385210, Gujarat, India",
    full: "C/111, 1st Floor, Orchid Complex, Pirojpura, Chhapi, Vadgam, Banaskantha 385210, Gujarat, India",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/birstockindia",
    facebook: "https://www.facebook.com/birstockindia",
    instagram: "https://www.instagram.com/bistockindia",
  },
  keywords: [
    "BirStock",
    "BirStock POS",
    "POS software India",
    "offline POS software",
    "offline billing software for PC",
    "desktop billing software for windows",
    "billing software for retail shops",
    "GST billing software for retail shop",
    "offline GST invoice maker",
    "inventory management software",
    "kirana store billing software",
    "supermarket POS software",
    "barcode billing software",
    "customer khata app",
    "wholesale billing software",
    "desktop POS software",
    "retail ERP software India",
    "billing software without monthly subscription",
  ],
} as const;

export const mainNav = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries/supermarkets" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Offline Billing Software", href: "/offline-billing-software" },
    { label: "GST Billing Software", href: "/gst-billing-software" },
    { label: "Retail Shop Billing", href: "/billing-software-for-retail-shop" },
    { label: "Pricing", href: "/pricing" },
    { label: "Download", href: "/contact?type=download" },
    { label: "Request a Demo", href: "/contact?type=demo" },
  ],
  industries: [
    { label: "Supermarkets", href: "/industries/supermarkets" },
    { label: "Kirana & Grocery", href: "/industries/kirana-grocery" },
    { label: "Electronics & Mobile", href: "/industries/electronics-mobile" },
    { label: "Hardware & Sanitary", href: "/industries/hardware-sanitary" },
    { label: "Apparel & Footwear", href: "/industries/apparel-footwear" },
    { label: "Wholesale Distributors", href: "/industries/wholesale" },
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
