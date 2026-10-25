import { formatINR, getPlan } from "@/data/pricing";

export const siteConfig = {
  name: "BirStock",
  legalName: "Birtik Tech",
  tagline: "Offline POS, GST Billing & Inventory Software",
  description: `Offline-first POS, GST billing & inventory software for Indian shops: barcode billing, Khata, Drive backup & mobile app. From ${formatINR(
    getPlan("monthly").price
  )}/month or ${formatINR(getPlan("lifetime").price)} lifetime.`,
  url: "https://birstock.com",
  company: "Birtik Tech",
  email: "support@birstock.com",
  phone: "+91 81560 00334",
  phoneDisplay: "+91 81560 00334",
  locale: "en_IN",
  address: {
    line1: "C/111, 1st Floor, Orchid Complex, Pirojpura",
    line2: "Chhapi, Vadgam, Banaskantha 385210, Gujarat, India",
    full: "C/111, 1st Floor, Orchid Complex, Pirojpura, Chhapi, Vadgam, Banaskantha 385210, Gujarat, India",
    street: "C/111, 1st Floor, Orchid Complex, Pirojpura, Chhapi",
    locality: "Vadgam",
    region: "Gujarat",
    postalCode: "385210",
    country: "IN",
  },
  hours: "Mon–Sat, 10:00 AM – 7:00 PM IST",
  social: {
    instagram: "https://www.instagram.com/birstockindia/",
    facebook: "https://www.facebook.com/profile.php?id=61594033592898",
    linkedin: "https://www.linkedin.com/company/birstockindia",
  },
  brand: {
    logo: "/brand/logo/birstock-logo.png",
    logoSquare: "/brand/logo/birstock-icon-512.png",
    defaultOg: "/brand/og/home.png",
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
    "inventory management software",
    "kirana store billing software",
    "supermarket POS software",
    "barcode billing software",
    "customer khata software",
    "wholesale billing software",
    "billing software with mobile app",
    "lifetime billing software India",
    "retail ERP software India",
  ],
} as const;

export const mainNav = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Mobile App", href: "/features/mobile-app" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  product: [
    { label: "All Features", href: "/features" },
    { label: "BirStock Mobile App", href: "/features/mobile-app" },
    { label: "Offline Billing Software", href: "/offline-billing-software" },
    { label: "GST Billing Software", href: "/gst-billing-software" },
    { label: "Retail Shop Billing", href: "/billing-software-for-retail-shop" },
    { label: "Pricing", href: "/pricing" },
    { label: "Custom Billing Software", href: "/custom-billing-software" },
    { label: "Download", href: "/download" },
    { label: "Request a Demo", href: "/contact?type=demo" },
  ],
  industries: [
    { label: "All Industries", href: "/industries" },
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
    { label: "Sitemap", href: "/site-map" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
} as const;
