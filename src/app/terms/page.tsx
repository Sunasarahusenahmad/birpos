import { LegalPage } from "@/components/shared/legal-page";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";
import { TAX_SENTENCE } from "@/data/pricing";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms that govern use of the BirStock website and application, provided by ${siteConfig.company}.`,
  path: "/terms",
  og: "terms",
});

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="25 October 2026">
      <div>
        <h2>Agreement to terms</h2>
        <p>
          These Terms of Service govern your use of the BirStock website ({siteConfig.url}) and
          the BirStock desktop application, both provided by {siteConfig.company}
          (&quot;{siteConfig.company}&quot;, &quot;we&quot;). By using this website or
          purchasing a BirStock license, you agree to these terms.
        </p>
      </div>

      <div>
        <h2>License to use BirStock</h2>
        <p>
          A BirStock plan grants you a non-exclusive, non-transferable licence to install and use the
          BirStock application on the number of PCs covered by your plan. Monthly and Yearly plans are
          valid for the period paid for. A Lifetime licence is a one-time purchase that does not expire
          for the features included at the time of purchase. New feature modules and the BirStock Mobile
          App may be offered to Lifetime licence holders as separately priced add-ons.
          BirStock is licensed, not sold - ownership of the underlying software remains with{" "}
          {siteConfig.company}, while you retain full ownership of the business data you create
          within it.
        </p>
      </div>

      <div>
        <h2>Acceptable use</h2>
        <ul>
          <li>You will not reverse-engineer, decompile, or resell the BirStock software without written permission.</li>
          <li>You will not use BirStock for any unlawful purpose or in a way that infringes another party&apos;s rights.</li>
          <li>You are responsible for the accuracy of tax, pricing, and business data you enter into the application.</li>
        </ul>
      </div>

      <div>
        <h2>Availability &amp; support</h2>
        <p>
          BirStock runs locally on your device, so day-to-day billing, inventory and ledger
          features do not depend on our servers being online, subject to licence status. Licence
          activation and checks, software updates, and App Lock email OTP recovery require internet
          access and our servers. Google Drive backup depends on Google&apos;s services and your
          internet connection. The BirStock Mobile App requires your phone and PC to be on the same
          local network.
        </p>
      </div>

      <div>
        <h2>Payments &amp; pricing</h2>
        <p>
          Current plan prices are published on our{" "}
          <a href="/pricing/" className="text-primary-darker hover:underline">
            pricing page
          </a>
          . Monthly and Yearly plans are paid for each period; to keep using BirStock after a period
          ends, renew your plan. The Lifetime licence is a one-time payment. {TAX_SENTENCE} Prices may change for
          future purchases and renewals; changes do not affect a period you have already paid for.
        </p>
      </div>

      <div>
        <h2>Disclaimer &amp; limitation of liability</h2>
        <p>
          BirStock is provided &quot;as is&quot;. While we test the application thoroughly, we do
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
