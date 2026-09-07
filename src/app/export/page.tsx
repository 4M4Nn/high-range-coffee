import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Globe2, ShieldCheck, TimerReset, Truck } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import ClienteleStrip from "@/components/sections/ClienteleStrip";
import StatsBar from "@/components/sections/StatsBar";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { certifications, coffeeGrades, heroStats, siteConfig } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "For Importers | How to Import Green Coffee Beans From India",
  description:
    "A step-by-step guide for importers and roasters on how to buy and import unroasted Arabica and Robusta coffee beans from High Range Coffee — a Coffee Board of India-recognised exporter trusted by Nestle, ITC, Hindustan Unilever and Olam Agri since 1995.",
  alternates: { canonical: "/export" },
};

const exportSteps = [
  {
    title: "Share Your Requirement",
    description: "Tell us your required grade, screen size, process type, volume and preferred shipping window via our enquiry form or export desk.",
  },
  {
    title: "Sample & Cupping Notes",
    description: "We confirm available lots and share cupping notes, specifications and, where required, physical samples for your evaluation.",
  },
  {
    title: "Quote & Contract",
    description: "We issue a formal quote covering price, Incoterms, packaging and delivery timeline, and finalise a sales contract once agreed.",
  },
  {
    title: "Documentation & Compliance",
    description: "Our export desk prepares all required documentation — commercial invoice, packing list, phytosanitary certificate and certificate of origin — in line with Coffee Board of India export regulations.",
  },
  {
    title: "Container Loading & Dispatch",
    description: "Graded, quality-checked coffee is loaded and dispatched from our Coorg curing works to the nominated gateway port, with shipment tracking shared throughout.",
  },
];

const differentiators = [
  {
    icon: Globe2,
    title: "A Client Roster Global Buyers Recognise",
    description:
      "We already supply Nestle, ITC, Hindustan Unilever, Olam Agri, Louis Dreyfus Company and other global trading houses — proof our quality and reliability hold up at the highest volumes.",
  },
  {
    icon: ShieldCheck,
    title: "Recognised Certification, Not Just Claims",
    description:
      "Coffee Board of India recognition and 4C accreditation back every consignment, alongside full export documentation support — commercial invoice, packing list, phytosanitary and certificate of origin.",
  },
  {
    icon: TimerReset,
    title: "Nearly Three Decades of Delivery Discipline",
    description:
      "Incorporated in 1995 with a family coffee heritage stretching back over 50 years — we've built our reputation on consistent, on-time delivery, season after season.",
  },
  {
    icon: Truck,
    title: "8,000 MT Capacity, One Point of Contact",
    description:
      "From sourcing across the High Range belt to grading, storage and export documentation, everything runs through our Coorg curing works — one accountable partner for your entire order.",
  },
];

export default function ExportPage() {
  return (
    <>
      <PageHero
        eyebrow="For Importers"
        title="How to Import Green Coffee Beans From India"
        description="Coffee Board of India-recognised, 4C-accredited, and trusted by global trading houses — here's how to start sourcing from High Range Coffee."
        image={IMAGES.exportContainers}
      />

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <SectionHeading
          eyebrow="Trusted Already, at Scale"
          title="The Same Curing Works Nestle, ITC and Olam Agri Rely On"
          description="Before you take a chance on an unfamiliar supplier, see who already trusts us with their volumes."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10">
          <ClienteleStrip compact />
        </div>
      </section>

      <div className="mt-12 sm:mt-16">
        <StatsBar stats={heroStats} />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Buyers Choose Us"
          title="What Makes High Range Coffee a Low-Risk, High-Reliability Supplier"
          description="Global buyers don't just need cheap coffee — they need a partner who delivers the same quality, on schedule, every season."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <item.icon className="h-6 w-6 shrink-0 text-secondary" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Certifications & Compliance"
            title="Export-Ready Credentials Buyers Can Rely On"
            description="Every consignment we export is backed by recognised industry certification and full documentation support."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {certifications.map((cert) => (
              <Reveal key={cert.name}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-forest" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary">{cert.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Grades Available for Export"
            title="Choose the Grade That Fits Your Roast Profile"
            description="A quick reference across our AAA-to-C grades in both Arabica and Robusta — full cupping notes are on our Coffee page."
          />
          <Link
            href="/coffee"
            className={cn(buttonVariants({ variant: "outline" }), "h-11 shrink-0 px-5")}
          >
            View Full Grade Details
          </Link>
        </div>
        <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="bg-muted text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-5 py-3 font-semibold">Grade</th>
                <th className="px-5 py-3 font-semibold">Species</th>
                <th className="px-5 py-3 font-semibold">Process</th>
                <th className="px-5 py-3 font-semibold">Screen / Class</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {coffeeGrades.map((grade) => (
                <tr key={grade.slug} className="bg-card">
                  <td className="px-5 py-3 font-medium text-primary">
                    <Link href="/coffee" className="flex items-center gap-2.5 hover:text-secondary">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-[11px] font-bold text-primary-foreground">
                        {grade.grade}
                      </span>
                      {grade.name}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{grade.species}</td>
                  <td className="px-5 py-3 text-muted-foreground">{grade.process}</td>
                  <td className="px-5 py-3 text-muted-foreground">{grade.screenSize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Export Process"
            title="From Enquiry to Container: Our 5-Step Export Process"
            align="center"
            className="mx-auto"
          />
          <ol className="mt-12 space-y-8">
            {exportSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <li className="flex gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Shipping & Terms"
          title="Shipping Terms & Minimum Order Quantities"
          description="We ship via FCL container, typically routed through Cochin (Kochi) or Mangalore — South India's principal coffee-export gateway ports — on standard Incoterms (FOB, CFR, CIF) agreed per contract. Minimum order quantities vary by grade and container type; share your target volume with our export desk and we'll confirm the most efficient shipment plan and packaging (jute bags, GrainPro/vacuum-lined bags, or as specified)."
        />
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-xl font-semibold sm:text-3xl">
              Prefer to Talk Directly? Our Export Desk Is One Call Away
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
              For urgent volume enquiries or an active shipping window, call or WhatsApp us
              directly and we&apos;ll confirm availability the same day.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={`tel:${siteConfig.contact.phones[0].replace(/\s/g, "")}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full justify-center px-6 bg-accent text-primary hover:bg-accent/90 sm:h-11 sm:w-auto"
                )}
              >
                Call {siteConfig.contact.phones[0]}
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 w-full justify-center border-white/40 bg-white/5 px-6 text-white hover:bg-white/15 hover:text-white sm:h-11 sm:w-auto"
                )}
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Request a Quote"
            title="Get a Quote for Your Next Consignment"
            description="Share your grade, volume and shipping window — our export desk will respond within one business day."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
