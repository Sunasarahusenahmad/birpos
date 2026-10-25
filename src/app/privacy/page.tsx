import { LegalPage } from "@/components/shared/legal-page";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, graph, pageMetadata, webPageSchema } from "@/lib/seo";

const title = "Privacy Policy";
const description = `How ${siteConfig.company} handles information for the BirStock website, desktop app and mobile app: local business records, Google Drive backups, licence checks, PIN recovery email and website forms.`;

export const metadata = pageMetadata({ title, description, path: "/privacy", og: "privacy" });

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ name: title, description, path: "/privacy", og: "privacy" }),
          breadcrumbSchema([{ name: title, path: "/privacy" }])
        )}
      />
      <LegalPage eyebrow="Legal" title="Privacy Policy" updated="25 October 2026">
        <div>
          <h2>Overview</h2>
          <p>
            This Privacy Policy explains how {siteConfig.company} (&quot;we&quot;, &quot;us&quot;) handles
            information in connection with the BirStock website ({siteConfig.url}), the BirStock desktop
            application and the BirStock Mobile App. BirStock is built to be local-first: your business
            records stay on your own computer. A few features do send limited information to our server or
            to Google, and we explain each one below.
          </p>
        </div>

        <div>
          <h2>1. Business records in the app (stored locally)</h2>
          <p>
            Products, stock, bills, customers, suppliers, ledgers, expenses and reports are stored in a
            local database on the computer where BirStock is installed. We do not receive or have access to
            these records unless you choose to share a backup file with our support team for
            troubleshooting.
          </p>
          <p>
            When you use the BirStock Mobile App, data moves directly between your phone and your BirStock
            desktop over your local network (Wi-Fi/LAN). It is not routed through our servers.
          </p>
        </div>

        <div>
          <h2>2. Optional Google Drive backups</h2>
          <p>
            If you connect Google Drive, BirStock uploads backup files of your database to the Google
            account you choose, on the schedule you set. These backups are stored in your own Google Drive,
            under Google&apos;s terms and privacy policy - not on a server operated by {siteConfig.company}.
            You can disconnect Google Drive at any time from BirStock&apos;s settings. Local backups are
            saved on your computer.
          </p>
        </div>

        <div>
          <h2>3. Licence and device verification</h2>
          <p>
            To activate BirStock and check licence status, the app communicates with the BirStock licence
            server. This involves licence and device information - such as your licence key, a device
            identifier, app version, and activation/check timestamps - and the contact details linked to
            your purchase. We use this only to issue, verify and support your licence and to prevent misuse.
          </p>
        </div>

        <div>
          <h2>4. App Lock recovery email and OTP</h2>
          <p>
            If you set up App Lock, you register a recovery email address. When you set up or verify that
            email, change your PIN through email verification, or use Forgot PIN, a one-time code (OTP) is
            sent to that address through our licence server and an email delivery provider. We process the
            email address and OTP only to deliver and verify the code. Your PIN itself is used by the app on
            your computer. Internet access is required for these steps.
          </p>
        </div>

        <div>
          <h2>5. Software updates</h2>
          <p>
            When BirStock checks for or downloads updates, it contacts our update service and shares basic
            technical information such as the app version, so we can provide the correct release.
          </p>
        </div>

        <div>
          <h2>6. Website forms and contact</h2>
          <p>
            When you submit a form on this website (download, demo, pricing, support or newsletter), we
            collect the details you provide - such as your name, email, phone number, business name, chosen
            plan and message - to respond to your request. Form submissions are delivered to our inbox
            through a third-party form service. Like most websites, our hosting may record basic technical
            information (such as browser type and pages visited) to keep the site secure and working.
          </p>
        </div>

        <div>
          <h2>How we use information</h2>
          <ul>
            <li>To activate, verify and support BirStock licences</li>
            <li>To send App Lock OTP emails you request</li>
            <li>To respond to download, demo, pricing and support requests</li>
            <li>To send product updates and, if you opt in, newsletters</li>
            <li>To improve the website and the BirStock apps</li>
            <li>To meet legal, tax and accounting obligations</li>
          </ul>
          <p>We do not sell your personal information.</p>
        </div>

        <div>
          <h2>Third-party services</h2>
          <p>
            We use a small number of providers to run these features: Google (Drive backups you connect, and
            the map on our contact page), an email delivery provider for OTP emails, a form service for
            website submissions, and our hosting provider. They process data only as needed to deliver their
            service.
          </p>
        </div>

        <div>
          <h2>Retention</h2>
          <p>
            Local records and backups stay under your control until you delete them. We keep licence records
            for as long as your licence is active and as required for legal and accounting purposes, and keep
            website enquiries for as long as needed to respond and follow up.
          </p>
        </div>

        <div>
          <h2>Your choices</h2>
          <p>
            You can request access to, correction of, or deletion of personal information we hold by emailing{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary-darker hover:underline">
              {siteConfig.email}
            </a>
            . You can disconnect Google Drive backup, change your recovery email, or unsubscribe from emails
            at any time.
          </p>
        </div>

        <div>
          <h2>Contact us</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary-darker hover:underline">
              {siteConfig.email}
            </a>{" "}
            or by post to {siteConfig.company}, {siteConfig.address.full}.
          </p>
        </div>
      </LegalPage>
    </>
  );
}
