import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-gradient-to-br from-primary-darker via-primary to-primary-dark px-6 py-16 text-center sm:px-16 sm:py-20">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]" />
            <div className="relative">
              <h2 className="text-balance mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to run your counter without the internet — or the invoice?
              </h2>
              <p className="text-balance mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
                Download BirPOS and bill your first customer in under an hour, or book a live
                walkthrough with our team.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink
                  href="/contact?type=download"
                  size="lg"
                  className="bg-white text-primary-darker hover:bg-white/90"
                >
                  Download Now
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href="/contact?type=demo"
                  variant="ghost"
                  size="lg"
                  className="border border-white/30 text-white hover:bg-white/10"
                >
                  Schedule a Demo
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
