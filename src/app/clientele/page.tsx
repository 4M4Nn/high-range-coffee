import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import ClienteleStrip from "@/components/sections/ClienteleStrip";
import CTASection from "@/components/sections/CTASection";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Clientele | Trusted by Nestle, ITC, Olam & More",
  description:
    "High Range Coffee supplies green coffee to global trading houses and FMCG majors including Nestle, ITC, Hindustan Unilever, Olam Agri, Louis Dreyfus Company and more.",
  alternates: { canonical: "/clientele" },
};

export default function ClientelePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Clientele"
        title="Trusted by the World's Leading Coffee Buyers"
        description="For nearly three decades, global trading houses and FMCG majors have relied on High Range Coffee for consistent quality and dependable supply."
        image={IMAGES.aerialEstate}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Serve"
          title="A Client Roster Built on Consistency"
          description="Our buyers span global commodity trading houses to household FMCG names — each relationship built and maintained on the same standard of quality and reliability."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12">
          <ClienteleStrip />
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:py-20 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Buyers Choose Us"
            title="Consistency, Traceability & Nearly Three Decades of Trust"
            description="Global buyers don't just need coffee — they need a partner who delivers the same quality, lot after lot, season after season. Our long-standing relationships with trading houses like Olam Agri and Louis Dreyfus Company, and FMCG majors like Nestle, ITC and Hindustan Unilever, reflect a track record built on exactly that."
            align="center"
            className="mx-auto"
          />
        </div>
      </section>

      <CTASection
        title="Become Our Next Trusted Buyer"
        description="Join a client roster built on nearly three decades of consistent quality and reliable export — request a quote to get started."
      />
    </>
  );
}
