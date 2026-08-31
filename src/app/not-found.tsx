import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-20">
      <Container className="flex flex-col items-center text-center">
        <Logo />
        <p className="mt-8 font-display text-7xl font-extrabold text-primary/20">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-foreground">
          This page wandered off the counter
        </h1>
        <p className="mt-3 max-w-sm text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex gap-3">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
