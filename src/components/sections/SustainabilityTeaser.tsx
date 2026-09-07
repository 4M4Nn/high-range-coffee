import Link from "next/link";
import { ArrowRight, Droplets, Handshake, Leaf, TreePine } from "lucide-react";
import { sustainabilityPoints } from "@/lib/data";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/motion/Reveal";

const iconMap = { TreePine, Leaf, Handshake, Droplets };

export default function SustainabilityTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Sustainability"
        title="Shade-Grown, Forest-First, Built to Last"
        description="21% of our land is preserved as natural forest — a deliberate choice that protects biodiversity, soil health and the long-term future of the High Range growing belt."
        align="center"
        className="mx-auto"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sustainabilityPoints.map((point, i) => {
          const Icon = iconMap[point.icon as keyof typeof iconMap] ?? Leaf;
          return (
            <Reveal key={point.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-primary">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/sustainability"
          className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-accent"
        >
          Learn about our sustainability practices <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
