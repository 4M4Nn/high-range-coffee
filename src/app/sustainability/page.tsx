import type { Metadata } from "next";
import Image from "next/image";
import { Droplets, Handshake, Leaf, TreePine } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import StatsBar from "@/components/sections/StatsBar";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/motion/Reveal";
import { estateStats, sustainabilityPoints } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sustainability | Shade-Grown, Forest-First Coffee",
  description:
    "High Range Coffee preserves 21% of its estate land as natural forest and holds 4C accreditation, reflecting our commitment to shade-grown, responsibly sourced coffee.",
  alternates: { canonical: "/sustainability" },
};

const iconMap = { TreePine, Leaf, Handshake, Droplets };

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Shade-Grown, Forest-First, Built to Last"
        description="Coffee grown in balance with the land — 21% of our estate is deliberately preserved as natural forest."
        image={IMAGES.aerialEstate}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Our Commitment"
            title="Protecting the Land That Grows Our Coffee"
            description="Shade-grown cultivation across the High Range belt does more than protect flavour — it protects the biodiversity, water tables and soil health that our growers, and future harvests, depend on."
          />
        </div>
        <Reveal className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
          <Image
            src={IMAGES.heroEstate}
            alt="Shade-grown coffee cultivation preserving forest cover in the High Range belt"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      <StatsBar stats={estateStats} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Practices"
          title="How We Put Sustainability Into Practice"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {sustainabilityPoints.map((point, i) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap] ?? Leaf;
            return (
              <Reveal key={point.title} delay={i * 0.08}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Sourcing Coffee That Aligns With Your Values"
        description="Talk to us about traceable, 4C-aligned, shade-grown green coffee for your roasting or blending programme."
      />
    </>
  );
}
