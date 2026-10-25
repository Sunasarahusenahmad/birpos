import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { CURRENCY, PRICES_INCLUDE_GST, plans } from "@/data/pricing";

/** Canonical path with the trailing slash the static export serves (`/` stays `/`). */
export function canonicalPath(path: string) {
  if (path === "" || path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${canonicalPath(path)}`;
}

/** Path of the generated Open Graph image for a page key (see scripts/brand/og-pages.json). */
export function ogImagePath(key: string) {
  return `/brand/og/${key}.png`;
}

type PageMetaInput = {
  /** Page title without the "| BirStock" suffix (the layout template adds it). */
  title: string;
  description: string;
  path: string;
  /** Key of the page's OG image in /brand/og/. */
  og: string;
  keywords?: string[];
  /** Use the title as-is, without the layout template suffix. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
};

/**
 * Builds complete page metadata. Next.js shallow-merges `openGraph`/`twitter` per
 * segment, so every page must supply the full objects - this helper does that.
 */
export function pageMetadata({
  title,
  description,
  path,
  og,
  keywords,
  absoluteTitle,
  type = "website",
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  const image = {
    url: ogImagePath(og),
    width: 1200,
    height: 630,
    alt: fullTitle,
    type: "image/png",
  };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: {
      canonical: canonicalPath(path),
      languages: { "en-IN": canonicalPath(path), "x-default": canonicalPath(path) },
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url: canonicalPath(path),
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD builders (schema.org)
// ---------------------------------------------------------------------------

const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;
const APP_ID = `${siteConfig.url}/#software`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.company,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.brand.logoSquare}`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.url}${siteConfig.brand.logo}`,
    email: siteConfig.email,
    telephone: siteConfig.phone.replace(/\s+/g, ""),
    address: postalAddress(),
    sameAs: Object.values(siteConfig.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        telephone: siteConfig.phone.replace(/\s+/g, ""),
        areaServed: "IN",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phone.replace(/\s+/g, ""),
        areaServed: "IN",
      },
    ],
    brand: { "@type": "Brand", name: siteConfig.name, logo: `${siteConfig.url}${siteConfig.brand.logoSquare}` },
    knowsAbout: ["Point of sale software", "GST billing", "Inventory management", "Custom software development"],
  };
}

export function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: `${siteConfig.name} by ${siteConfig.company}`,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.brand.logo}`,
    logo: `${siteConfig.url}${siteConfig.brand.logoSquare}`,
    email: siteConfig.email,
    telephone: siteConfig.phone.replace(/\s+/g, ""),
    address: postalAddress(),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    parentOrganization: { "@id": ORG_ID },
    sameAs: Object.values(siteConfig.social),
  };
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

export function offersSchema() {
  return plans.map((plan) => ({
    "@type": "Offer",
    name: `${siteConfig.name} ${plan.name} plan`,
    price: plan.price,
    priceCurrency: CURRENCY,
    availability: "https://schema.org/InStock",
    url: absoluteUrl("/pricing"),
    category: plan.billingDuration ? "Subscription" : "Lifetime licence",
    seller: { "@id": ORG_ID },
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: plan.price,
      priceCurrency: CURRENCY,
      valueAddedTaxIncluded: PRICES_INCLUDE_GST,
      ...(plan.billingDuration
        ? {
            billingDuration: plan.billingDuration,
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: plan.billingDuration === "P1M" ? "MON" : "ANN",
            },
          }
        : {}),
    },
  }));
}

export function softwareApplicationSchema() {
  return {
    "@type": "SoftwareApplication",
    "@id": APP_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.brand.defaultOg}`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Point of Sale, GST Billing & Inventory Software",
    operatingSystem: "Windows 10, Windows 11",
    description: siteConfig.description,
    inLanguage: "en-IN",
    countriesSupported: "IN",
    publisher: { "@id": ORG_ID },
    featureList: [
      "Offline keyboard (Quick POS) and touch billing",
      "Barcode scanning and held bills",
      "GST invoices with CGST/SGST and IGST",
      "Inventory with low-stock alerts and Excel import/export",
      "Customer Khata ledger and sales returns",
      "Supplier purchases and purchase returns (debit notes)",
      "Expenses and other income",
      "Sales, profit/loss and GST reports",
      "Local and Google Drive backup",
      "PIN App Lock with email OTP recovery",
      "Financial year carry-forward",
      "Multiple companies/firms with separate data",
      "BirStock Mobile App for Android and iOS over local Wi-Fi",
    ],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: Math.min(...plans.map((p) => p.price)),
      highPrice: Math.max(...plans.map((p) => p.price)),
      priceCurrency: CURRENCY,
      offerCount: plans.length,
      offers: offersSchema(),
    },
  };
}

export function mobileApplicationSchema() {
  return {
    "@type": "MobileApplication",
    "@id": `${siteConfig.url}/#mobile-app`,
    name: `${siteConfig.name} Mobile App`,
    url: absoluteUrl("/features/mobile-app"),
    operatingSystem: "Android, iOS",
    applicationCategory: "BusinessApplication",
    description:
      "Companion app for the BirStock desktop. Pair over shop Wi-Fi with a QR code to make sales and view selected customer, invoice and stock details.",
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": APP_ID },
    offers: {
      "@type": "Offer",
      price: plans.find((p) => p.id === "yearly")!.price,
      priceCurrency: CURRENCY,
      description: "Included in the BirStock Yearly plan",
      url: absoluteUrl("/pricing"),
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
  og,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  og: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "FAQPage" | "CollectionPage";
}) {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": SITE_ID },
    about: { "@id": APP_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: `${siteConfig.url}${ogImagePath(og)}`, width: 1200, height: 630 },
  };
}

export function howToSchema(name: string, steps: { step: string; detail: string }[]) {
  return {
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.step,
      text: s.detail,
    })),
  };
}

/** Wraps nodes into one @graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
