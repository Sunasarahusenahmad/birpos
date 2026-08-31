import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={`Last updated: ${updated}`} />
      <section className="pb-24 sm:pb-28">
        <Container className="max-w-3xl">
          <div className="prose-legal space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mt-3 [&_li]:mt-1.5 [&_ul]:list-disc [&_ul]:pl-5">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
