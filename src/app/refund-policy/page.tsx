import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund terms for BirPOS software licenses purchased from ${siteConfig.company}.`,
  alternates: { canonical: "/refund-policy" },
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Refund Policy" updated="31 August 2026">
      <div>
        <h2>Trial before you buy</h2>
        <p>
          Because BirPOS is a one-time software purchase, we encourage every business to request
          a live demo or trial build before purchasing, so you can confirm it fits how your
          counter operates.
        </p>
      </div>

      <div>
        <h2>Refund eligibility</h2>
        <p>
          If BirPOS does not work as described on this website due to a verified defect in the
          software, and our support team is unable to resolve the issue within a reasonable
          time, you may request a refund within 7 days of purchase.
        </p>
        <p>Refund requests are evaluated case by case and are not guaranteed for:</p>
        <ul>
          <li>Change of mind after a working installation and demo</li>
          <li>Issues caused by hardware incompatible with your printer or scanner, once flagged during onboarding</li>
          <li>Data loss resulting from automated backups not being enabled</li>
          <li>Licenses purchased more than 7 days prior to the request</li>
        </ul>
      </div>

      <div>
        <h2>How to request a refund</h2>
        <p>
          Email{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-primary-darker hover:underline">
            {siteConfig.email}
          </a>{" "}
          with your order details and a description of the issue. We aim to respond within 2
          business days.
        </p>
      </div>

      <div>
        <h2>Processing time</h2>
        <p>
          Approved refunds are processed back to the original payment method within 7–10
          business days.
        </p>
      </div>
    </LegalPage>
  );
}
