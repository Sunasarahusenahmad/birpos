import { WifiOff, IndianRupee, ShieldCheck, CloudUpload } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { PosMockup } from "@/components/home/pos-mockup";

const trustPoints = [
  { icon: ShieldCheck, label: "Your Data is Yours" },
  { icon: WifiOff, label: "100% Offline-First" },
  { icon: IndianRupee, label: "Zero Monthly Fees" },
  { icon: CloudUpload, label: "Google Drive Backup" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20 lg:pt-24">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex flex-col items-start text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-tint px-3.5 py-1.5 text-xs font-semibold text-primary-darker shadow-sm sm:text-sm">
                <ShieldCheck className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                <span className="font-extrabold tracking-tight">Your Data is Yours</span>
                <span className="text-primary/30">·</span>
                <span className="font-medium text-foreground/80">100% Offline-First POS &amp; ERP</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-balance mt-5 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
                Your data is yours.{" "}
                <span className="text-primary">Fast, offline POS &amp; inventory</span> for your
                store
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-balance mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                100% offline desktop billing, multi-rate GST invoicing, customer Khata, supplier
                ledgers, and automated Google Drive backup - one app, zero recurring
                subscription.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact?type=download" size="lg">
                  Download Now
                </ButtonLink>
                <ButtonLink href="/contact?type=demo" variant="outline" size="lg">
                  Schedule a Demo
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 grid w-full grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-7 sm:flex sm:flex-wrap sm:gap-x-8">
                {trustPoints.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <PosMockup />
        </div>
      </Container>
    </section>
  );
}
