import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ClienteleSection from "@/components/sections/ClienteleSection";
import GradesPreview from "@/components/sections/GradesPreview";
import ProcessTeaser from "@/components/sections/ProcessTeaser";
import SustainabilityTeaser from "@/components/sections/SustainabilityTeaser";
import NewsTeaser from "@/components/sections/NewsTeaser";
import CTASection from "@/components/sections/CTASection";
import { heroStats, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Green Coffee Bean Exporter & Curing Works in India",
  description:
    "High Range Coffee is a premium exporter and curing works for unroasted Arabica and Robusta coffee beans from India's High Range growing belt, trusted by Nestle, ITC, Hindustan Unilever and Olam since 1995.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar stats={heroStats} />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:py-20 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
          A Tale of Love, Trust &amp; Taste
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl">
          Fifty Years of Coffee Heritage, One Trusted Name
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {siteConfig.legalName} was incorporated in {siteConfig.founded}, as the Indian
          coffee industry opened to the free market — but our relationship with coffee
          goes back over {siteConfig.heritageYears} years, to a plantation our forefathers
          started in the remote village of Nelliyampathy. Today, under the leadership of
          founder {siteConfig.founder.name}, that heritage powers a curing works with
          8,000 MT of installed capacity, serving the world&apos;s most demanding coffee
          buyers.
        </p>
      </section>

      <GradesPreview />
      <ProcessTeaser />
      <ClienteleSection />
      <SustainabilityTeaser />
      <NewsTeaser />
      <CTASection />
    </>
  );
}
