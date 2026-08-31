import { Container } from "@/components/ui/container";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const stats = [
  { value: "0", label: "Internet required to bill" },
  { value: "6", label: "GST rate slabs supported" },
  { value: "20", label: "Local backups auto-retained" },
  { value: "58mm–A4", label: "Printer sizes supported" },
];

export function StatsBar() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <StaggerGroup className="grid grid-cols-2 gap-6 rounded-[var(--radius-lg)] border border-border bg-white px-6 py-10 shadow-[var(--shadow-soft)] sm:px-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-primary-darker sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
