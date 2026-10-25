import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { features } from "@/data/features";
import { industries } from "@/data/industries";
import { landingPages } from "@/data/landing-pages";
import { absoluteUrl, graph, pageMetadata, webPageSchema } from "@/lib/seo";

const title = "Sitemap - All BirStock Pages";
const description =
  "Every page on the BirStock website in one place: features, mobile app, industries, pricing, download, guides, support and legal pages.";

export const metadata = pageMetadata({ title, description, path: "/site-map", og: "site-map", absoluteTitle: true });

type LinkItem = { label: string; href: string };

const sections: { heading: string; links: LinkItem[] }[] = [
  {
    heading: "Main pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Pricing", href: "/pricing" },
      { label: "All Features", href: "/features" },
      { label: "All Industries", href: "/industries" },
      { label: "Download", href: "/download" },
      { label: "Custom Billing Software", href: "/custom-billing-software" },
    ],
  },
  {
    heading: "Features",
    links: features.map((f) => ({ label: f.name, href: `/features/${f.slug}` })),
  },
  {
    heading: "Industries",
    links: industries.map((ind) => ({ label: ind.name, href: `/industries/${ind.slug}` })),
  },
  {
    heading: "Solutions",
    links: Object.values(landingPages).map((p) => ({ label: p.breadcrumb, href: `/${p.slug}` })),
  },
  {
    heading: "Company & support",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Request a Demo", href: "/contact?type=demo" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export default function SiteMapPage() {
  const jsonLd = graph(
    webPageSchema({ name: title, description, path: "/site-map", og: "site-map", type: "CollectionPage" }),
    {
      "@type": "SiteNavigationElement",
      name: sections.flatMap((s) => s.links.map((l) => l.label)),
      url: sections.flatMap((s) => s.links.map((l) => absoluteUrl(l.href.split("?")[0]))),
    }
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: "Sitemap", path: "/site-map" }]} />
      <PageHero
        className="pt-8 sm:pt-12"
        eyebrow="Sitemap"
        title="Every BirStock page in one place"
        description="Find any feature, industry guide, pricing detail or support page quickly."
      />

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.04}>
                <div className="h-full rounded-[var(--radius-lg)] border border-border bg-white p-6">
                  <h2 className="font-display text-lg font-semibold text-foreground">{section.heading}</h2>
                  <ul className="mt-4 space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary-darker"
                        >
                          <ArrowRight className="h-3.5 w-3.5 text-primary transition-transform group-hover:translate-x-0.5" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
