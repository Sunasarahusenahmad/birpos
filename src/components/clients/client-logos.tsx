import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { clients } from "@/data/clients";

/** Uses the logo only if the file really exists in public/ (checked at build time). */
function logoFor(logo?: string) {
  if (!logo) return null;
  return fs.existsSync(path.join(process.cwd(), "public", logo)) ? logo : null;
}

export function ClientLogos({ className }: { className?: string }) {
  return (
    <section className={className ?? "border-y border-border bg-surface-muted py-16 sm:py-20"}>
      <Container>
        <SectionHeading
          eyebrow="Our clients"
          title="Businesses that run on BirStock"
          description="From ready-to-use plans to fully customised builds."
        />
        <StaggerGroup className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {clients.map((client) => {
            const logo = logoFor(client.logo);
            return (
              <StaggerItem key={client.slug}>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener"
                  title={client.about ? `${client.name} - ${client.about}` : client.name}
                  className="group relative flex h-28 items-center justify-center rounded-[var(--radius-lg)] border border-border bg-white px-6 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
                >
                  {logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={logo}
                      alt={`${client.name} logo`}
                      loading="lazy"
                      className="max-h-14 w-auto max-w-[75%] object-contain transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-display text-xl font-extrabold tracking-tight text-foreground/70 group-hover:text-foreground">
                      {client.name}
                    </span>
                  )}
                  {client.customized ? (
                    <span className="absolute right-3 top-3 rounded-full bg-primary-tint px-2 py-0.5 text-[0.65rem] font-semibold text-primary-darker">
                      Custom build
                    </span>
                  ) : null}
                </a>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
