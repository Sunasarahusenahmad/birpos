import { Zap, IndianRupee, CloudUpload, ReceiptText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const pillars = [
  {
    icon: Zap,
    title: "Never stop billing",
    description:
      "No internet? Slow Wi-Fi? Doesn't matter. BirPOS runs entirely on your computer with instant response times — your counter never freezes and your business never stops.",
  },
  {
    icon: IndianRupee,
    title: "Zero monthly subscriptions",
    description:
      "Stop paying a SaaS company every single month just to run your own cash register. Own your software outright and keep the savings, year after year.",
  },
  {
    icon: CloudUpload,
    title: "Google Drive peace of mind",
    description:
      "Get cloud-grade safety without cloud vulnerability. BirPOS automatically backs up your encrypted database to your own personal Google Drive, on your schedule.",
  },
  {
    icon: ReceiptText,
    title: "GST & Khata, built in",
    description:
      "From thermal supermarket receipts to formal A4 GST tax invoices and digital Udhar Khata ledgers — every Indian retail requirement, out of the box.",
  },
];

export function ValuePillars() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why BirPOS"
          title="Built different from cloud POS, on purpose"
          description="Every design decision in BirPOS starts from one question: what actually helps a shop owner run their counter faster and keep more of what they earn?"
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="group h-full rounded-[var(--radius-lg)] border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-primary-tint text-primary-darker transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
