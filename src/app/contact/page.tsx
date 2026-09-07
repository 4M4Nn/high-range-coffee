import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us | Reach Our Export Desk",
  description:
    "Contact High Range Coffee Curing Private Limited in Kushalnagar, Coorg, Karnataka for green coffee bean export enquiries, quotes and shipping questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to Our Export Desk"
        description="Whether you need a quote, cupping notes, or answers about shipping — we typically respond within one business day."
        image={IMAGES.cupping}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="Get in Touch" title="Our Details" />
          <Reveal className="mt-8 space-y-6">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-primary">Curing Works &amp; Registered Office</p>
                <p className="text-sm text-muted-foreground">{siteConfig.address.full}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-primary">Phone</p>
                {siteConfig.contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block text-sm text-muted-foreground hover:text-secondary"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-primary">Email</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-muted-foreground hover:text-secondary"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <MessageCircle className="h-5 w-5 shrink-0 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-primary">WhatsApp</p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-secondary"
                >
                  Chat with our export desk
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="High Range Coffee location map"
              src="https://www.google.com/maps?q=Kushalnagar,Coorg,Karnataka,571107&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-3">
          <SectionHeading eyebrow="Send an Enquiry" title="Request a Quote or Ask a Question" />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
