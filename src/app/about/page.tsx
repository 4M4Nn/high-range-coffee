import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import StatsBar from "@/components/sections/StatsBar";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/motion/Reveal";
import { estateStats, siteConfig, timeline } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us | Our Coffee Heritage Since 1995",
  description:
    "Learn the story of High Range Coffee Curing Private Limited — founded in 1995 by K.H.M. Saly, rooted in over 50 years of family coffee heritage from Nelliyampathy, Kerala.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Tale of Love, Trust & Taste"
        description="Fifty years of family coffee heritage, formalised into a curing works trusted by the world's leading coffee buyers."
        image={IMAGES.aerialEstate}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
          <Image
            src={IMAGES.farmerPortrait}
            alt={`${siteConfig.founder.name}, founder of High Range Coffee, in the coffee fields`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Our Founder"
            title={`${siteConfig.founder.name} — ${siteConfig.founder.experience} in Coffee`}
            description={siteConfig.founder.bio}
          />
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Story"
            title="From a Village Plantation to a Global Export House"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 space-y-10 border-l border-border pl-8">
            {timeline.map((event, i) => (
              <Reveal key={event.year} delay={i * 0.08} className="relative">
                <span className="absolute -left-[2.55rem] flex h-5 w-5 items-center justify-center rounded-full bg-accent" />
                <p className="font-serif text-sm font-semibold uppercase tracking-wider text-secondary">
                  {event.year}
                </p>
                <h3 className="mt-1 font-serif text-xl font-semibold text-primary">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {event.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Estate"
          title="A Heritage Measured in Hectares and Trees"
          align="center"
          className="mx-auto"
        />
      </section>
      <StatsBar stats={estateStats} dark={false} />

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Mission"
          title="An Image Built on Trust and Values"
          description="We have steadily upgraded and up-scaled our operations with significant investment over the years — not to chase scale for its own sake, but to keep the trust we've built with planters, traders and buyers for nearly three decades."
          align="center"
          className="mx-auto"
        />
      </section>

      <CTASection
        title="Partner With a Curing Works Global Buyers Trust"
        description="From Nestle to ITC, Hindustan Unilever to Olam — see who relies on High Range Coffee, or reach out to start a conversation."
        primaryLabel="View Our Clientele"
        primaryHref="/clientele"
      />
    </>
  );
}
