import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20", className)}>
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]" />
      <Container className="relative flex flex-col items-center text-center">
        {eyebrow ? (
          <Reveal>
            <Badge>{eyebrow}</Badge>
          </Reveal>
        ) : null}
        <Reveal delay={0.06}>
          <h1 className="text-balance mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.12}>
            <p className="text-balance mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>
        ) : null}
        {children ? (
          <Reveal delay={0.18} className="mt-8">
            {children}
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
