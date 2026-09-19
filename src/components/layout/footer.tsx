import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { footerNav, siteConfig } from "@/lib/site-config";
import { NewsletterForm } from "@/components/layout/newsletter-form";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1fr_0.8fr_1.2fr]">
          <div className="max-w-sm sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="rounded-full border border-primary/20 bg-primary-tint px-2.5 py-0.5 text-[11px] font-semibold text-primary-darker">
                Your data is yours
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-2.5 hover:text-primary-darker"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="flex items-start gap-2.5 hover:text-primary-darker"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {siteConfig.phoneDisplay}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{siteConfig.address.full}</span>
              </div>
            </div>
          </div>

          <FooterCol title="Product" links={footerNav.product} />
          <FooterCol title="Industries" links={footerNav.industries} />
          <FooterCol title="Company" links={footerNav.company} />

          <div>
            <p className="text-sm font-semibold text-foreground">Stay in the loop</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Product updates, new feature drops, and retail-tech tips - no spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.company}. {siteConfig.name} is a product
            of {siteConfig.company}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-primary-darker"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary-darker"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
