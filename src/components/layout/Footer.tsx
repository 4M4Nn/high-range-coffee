import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl font-semibold">High Range Coffee</h3>
            <p className="mt-3 text-sm text-primary-foreground/75">
              {siteConfig.legalName} — premium green Arabica &amp; Robusta coffee bean
              curing works and exporter, sourcing from the High Range growing belt since
              1995.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Explore
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              For Buyers
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.slice(6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Reach Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${siteConfig.contact.phones[0].replace(/\s/g, "")}`} className="hover:text-accent">
                  {siteConfig.contact.phones[0]}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/15" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Coffee Board of India Recognised &middot; 4C Accredited</p>
        </div>
      </div>
    </footer>
  );
}
