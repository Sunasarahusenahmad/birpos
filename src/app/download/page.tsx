import { Monitor, Wifi, WifiOff, RefreshCw, KeyRound, HardDrive, Smartphone, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FinalCta } from "@/components/home/final-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, graph, howToSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const title = "Download BirStock for Windows - Install, Activate & Update";
const description =
  "Get BirStock for Windows 10/11: system requirements, installation and licence activation, how software updates work, moving to a new PC, and when internet is needed.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/download",
  og: "download",
  absoluteTitle: true,
  keywords: ["birstock download", "billing software download for pc", "pos software download windows", "offline billing software download"],
});

const steps = [
  { step: "Request your download", detail: "Fill in the short form and our team sends you the BirStock installer for Windows." },
  { step: "Install on your PC", detail: "Run the installer on your Windows 10 or 11 PC. BirStock includes its own local database - nothing else to set up." },
  { step: "Activate your licence", detail: "Activate BirStock with your licence. Activation needs an internet connection." },
  { step: "Set up and start billing", detail: "Add your store and GST details, import products from Excel, and start billing - daily billing works offline." },
];

const internetUse = [
  { icon: WifiOff, label: "Daily billing, inventory, Khata, reports", value: "Works offline" },
  { icon: KeyRound, label: "Licence activation & licence checks", value: "Internet needed" },
  { icon: RefreshCw, label: "Downloading software updates", value: "Internet needed" },
  { icon: HardDrive, label: "Google Drive backup (optional)", value: "Internet needed" },
  { icon: KeyRound, label: "App Lock recovery email & Forgot PIN OTP", value: "Internet needed" },
  { icon: Smartphone, label: "BirStock Mobile App pairing & sync", value: "Same shop Wi-Fi/LAN" },
];

const faqs = [
  {
    q: "How do BirStock updates work?",
    a: "BirStock can check for new releases, download them and install them. When an update is ready, save your work and restart BirStock to finish. Downloading updates requires internet.",
  },
  {
    q: "Does BirStock update itself silently in the background?",
    a: "No. Updates follow a normal check, download and install flow, and BirStock restarts to apply the new version.",
  },
  {
    q: "How do I move BirStock to a new computer?",
    a: "Take a backup on the old PC (or make sure your Google Drive backup is current), install BirStock on the new PC, activate your licence, and restore the backup.",
  },
  {
    q: "What are the system requirements?",
    a: "A Windows 10 or Windows 11 PC or laptop. A barcode scanner and receipt printer are optional.",
  },
];

export default function DownloadPage() {
  const jsonLd = graph(
    webPageSchema({ name: title, description, path: "/download", og: "download" }),
    howToSchema("How to install and start using BirStock", steps),
    faqSchema(faqs)
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: "Download", path: "/download" }]} />
      <PageHero
        className="pt-8 sm:pt-12"
        eyebrow="Download"
        title="Get BirStock for Windows"
        description="Request the installer, activate your licence, and bill your first customer the same day."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href="/contact?type=download" size="lg">
            <Download className="h-4 w-4" /> Request Download
          </ButtonLink>
          <ButtonLink href="/contact?type=demo" variant="outline" size="lg">
            Book a Live Demo
          </ButtonLink>
        </div>
      </PageHero>

      <section className="pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
              From download to first bill
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.06}>
                <div className="h-full rounded-[var(--radius-lg)] border border-border bg-white p-6">
                  <span className="font-display text-2xl font-extrabold text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-foreground">{s.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-20 sm:py-24">
        <Container className="max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="rounded-[var(--radius-lg)] border border-border bg-white p-7">
                <Monitor className="h-6 w-6 text-primary" />
                <h2 className="mt-4 font-display text-lg font-semibold text-foreground">System requirements</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Windows 10 or Windows 11 PC/laptop</li>
                  <li>Internet for activation and updates</li>
                  <li>Optional: USB/wireless barcode scanner</li>
                  <li>Optional: 58mm/80mm thermal or A4 printer</li>
                  <li>Mobile App: Android or iOS phone on the same Wi-Fi</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-[var(--radius-lg)] border border-border bg-white p-7">
                <Wifi className="h-6 w-6 text-primary" />
                <h2 className="mt-4 font-display text-lg font-semibold text-foreground">When BirStock needs internet</h2>
                <StaggerGroup className="mt-4 divide-y divide-border">
                  {internetUse.map(({ icon: Icon, label, value }) => (
                    <StaggerItem key={label}>
                      <div className="flex items-center justify-between gap-4 py-2.5 text-sm">
                        <span className="flex items-center gap-2 text-foreground">
                          <Icon className="h-4 w-4 shrink-0 text-muted-foreground" /> {label}
                        </span>
                        <span className="shrink-0 text-xs font-semibold text-primary-darker">{value}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
              Installing &amp; updating
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
