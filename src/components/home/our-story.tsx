import { WifiOff, Receipt, Server, Calculator, ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { formatINR, getPlan } from "@/data/pricing";

const chapters = [
  {
    icon: WifiOff,
    problem: "The internet drops right when the queue is longest.",
    answer:
      "BirStock bills from a database on your own PC. After activation, scanning, invoicing and printing keep working with no internet.",
  },
  {
    icon: Receipt,
    problem: "The renewal bill comes back every year, and it keeps going up.",
    answer: `Choose ${formatINR(getPlan("basic").price)}/year, or pay ${formatINR(
      getPlan("lifetime").price
    )} once and keep billing forever. Every price is published on our website. No dealer quotes, no surprise AMC.`,
  },
  {
    icon: Server,
    problem: "Your sales, margins and customer Khata sit on somebody else's server.",
    answer:
      "Your records stay on your computer and back up to your own Google Drive. Your business data is yours, not ours.",
  },
  {
    icon: Calculator,
    problem: "Most “billing software” is accounting software made for accountants.",
    answer:
      "BirStock is built for the counter first: barcode scan, touch billing, Hold Cart for a waiting customer, and one key to check out.",
  },
];

export function OurStory() {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why BirStock exists"
          title="Four problems every Indian shop counter knows, and how we solved them"
          description="We didn't set out to build another invoicing app. We set out to build the software a shop owner would design for themselves."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {chapters.map(({ icon: Icon, problem, answer }, i) => (
            <StaggerItem key={problem}>
              <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-6 shadow-[var(--shadow-soft)] sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-danger/10 text-danger">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    Problem {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground sm:text-xl">
                  {problem}
                </h3>
                <div className="mt-5 flex gap-3 border-t border-border pt-5">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                  <p className="text-sm leading-relaxed text-foreground/80 sm:text-[0.95rem]">
                    <span className="font-semibold text-primary-darker">BirStock: </span>
                    {answer}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 flex max-w-2xl items-start justify-center gap-2 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
            <span>
              Built by a small team in Banaskantha, Gujarat, close to the kirana, hardware and
              wholesale counters we build for. Every feature exists because a real shop needed it.
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
