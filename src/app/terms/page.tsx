import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern use of the BirPOS website and application, provided by ${siteConfig.company}.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="31 August 2026">
      <div>
        <h2>Agreement to terms</h2>
        <p>
          These Terms of Service govern your use of the BirPOS website ({siteConfig.url}) and
          the BirPOS desktop application, both provided by {siteConfig.company}
          (&quot;{siteConfig.company}&quot;, &quot;we&quot;). By using this website or
          purchasing a BirPOS license, you agree to these terms.
        </p>
      </div>

      <div>
        <h2>License to use BirPOS</h2>
        <p>
          A BirPOS purchase grants you a non-exclusive, non-transferable license to install and
          use the BirPOS application on the number of devices or counters covered by your plan.
          BirPOS is licensed, not sold — ownership of the underlying software remains with{" "}
          {siteConfig.company}, while you retain full ownership of the business data you create
          within it.
        </p>
      </div>

      <div>
        <h2>Acceptable use</h2>
        <ul>
          <li>You will not reverse-engineer, decompile, or resell the BirPOS software without written permission.</li>
          <li>You will not use BirPOS for any unlawful purpose or in a way that infringes another party&apos;s rights.</li>
          <li>You are responsible for the accuracy of tax, pricing, and business data you enter into the application.</li>
        </ul>
      </div>

      <div>
        <h2>Availability &amp; support</h2>
        <p>
          BirPOS runs locally on your device, so its core billing, inventory, and ledger
          features do not depend on our servers being online. Optional cloud features, such as
          Google Drive backup, depend on the availability of Google&apos;s services and your own
          internet connection.
        </p>
      </div>

      <div>
        <h2>Payments &amp; pricing</h2>
        <p>
          Plan pricing is provided on request based on your business needs and confirmed in
          writing before purchase. Unless otherwise agreed, a BirPOS license fee is a one-time
          charge and does not renew automatically.
        </p>
      </div>

      <div>
        <h2>Disclaimer &amp; limitation of liability</h2>
        <p>
          BirPOS is provided &quot;as is&quot;. While we test the application thoroughly, we do
          not guarantee it will be error-free or uninterrupted. To the extent permitted by law,{" "}
          {siteConfig.company} is not liable for indirect or consequential losses arising from
          use of the application, including data loss where automated backups were not enabled.
        </p>
      </div>

      <div>
        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. Material changes will be reflected by
          updating the date at the top of this page.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-primary-darker hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
