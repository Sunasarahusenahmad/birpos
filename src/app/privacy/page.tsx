import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.company} collects, uses, and protects information related to the BirPOS website and application.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="31 August 2026">
      <div>
        <h2>Overview</h2>
        <p>
          This Privacy Policy explains how {siteConfig.company} (&quot;we&quot;, &quot;us&quot;)
          handles information in connection with the BirPOS website ({siteConfig.url}) and the
          BirPOS desktop application. BirPOS is built as an offline-first product, so the vast
          majority of your business data never leaves your own computer.
        </p>
      </div>

      <div>
        <h2>Information collected on this website</h2>
        <p>
          When you submit a form on this website (for example, a download request, demo
          request, or contact message), we collect the information you provide — such as your
          name, email address, phone number, business name, and message — solely to respond to
          your inquiry and provide the service you requested.
        </p>
        <p>
          Like most websites, we may collect basic technical information (such as browser type
          and pages visited) to help us understand how the site is used and to keep it secure.
        </p>
      </div>

      <div>
        <h2>Data inside the BirPOS application</h2>
        <p>
          BirPOS stores your business data — products, bills, customers, suppliers, and reports
          — locally in an embedded database on your own computer. We do not have access to this
          data unless you explicitly choose to share a backup file with our support team for
          troubleshooting.
        </p>
        <p>
          If you enable automated backups, BirPOS uploads an encrypted copy of your database to
          a Google Drive account that you connect and control. This backup goes to your own
          Google account, not to a server operated by {siteConfig.company}.
        </p>
      </div>

      <div>
        <h2>How we use information</h2>
        <ul>
          <li>To respond to download, demo, pricing, and support requests</li>
          <li>To provide product updates and, if you opt in, newsletter communications</li>
          <li>To improve this website and the BirPOS application</li>
          <li>To meet legal and accounting obligations</li>
        </ul>
      </div>

      <div>
        <h2>Third-party services</h2>
        <p>
          This website uses a third-party form service to deliver submissions to our inbox, and
          may use Google Maps to display our office location. The BirPOS application integrates
          with Google Drive (via OAuth2, at your choice) for backups, and may use an SMTP
          service to deliver PIN-recovery emails. These providers process data only as needed
          to deliver the relevant feature.
        </p>
      </div>

      <div>
        <h2>Your choices</h2>
        <p>
          You can request access to, correction of, or deletion of any information you&apos;ve
          submitted through this website by emailing{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-primary-darker hover:underline">
            {siteConfig.email}
          </a>
          . You can disconnect Google Drive backup or disable it entirely at any time from
          within the BirPOS application settings.
        </p>
      </div>

      <div>
        <h2>Contact us</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-primary-darker hover:underline">
            {siteConfig.email}
          </a>{" "}
          or by mail to {siteConfig.address.full}.
        </p>
      </div>
    </LegalPage>
  );
}
