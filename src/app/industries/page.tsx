import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { FinalCta } from "@/components/home/final-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { industries } from "@/data/industries";
import { absoluteUrl, graph, pageMetadata, webPageSchema } from "@/lib/seo";

const title = "Billing Software by Industry - Retail & Wholesale | BirStock";
const description =
  "See how BirStock fits your shop: supermarkets, kirana stores, electronics & mobile shops, hardware & sanitary, apparel & footwear, and wholesale distributors.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/industries",
  og: "industries",
  absoluteTitle: true,
  keywords: ["billing software for shops", "retail billing software by industry", "shop billing software india"],
});

export default function IndustriesPage() {
  const jsonLd = graph(
    webPageSchema({ name: title, description, path: "/industries", og: "industries", type: "CollectionPage" }),
    {
      "@type": "ItemList",
      name: "Industries served by BirStock",
      itemListElement: industries.map((ind, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: ind.name,
        url: absoluteUrl(`/industries/${ind.slug}`),
      })),
    }
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: "Industries", path: "/industries" }]} />
      <PageHero
        className="pt-8 sm:pt-12"
        eyebrow="Industries"
        title="Billing software that fits your kind of shop"
        description="BirStock is used across Indian retail and wholesale. Pick your business to see the workflows that matter most to you."
      />

      <section className="pb-20 sm:pb-28">
        <Container>
          <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <StaggerItem key={ind.slug}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-primary-tint text-primary-darker">
                    <Store className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-semibold text-foreground">{ind.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.tagline}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary-darker">
                    Explore {ind.shortName}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
