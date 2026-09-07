import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import ProcessStepCard from "@/components/process/ProcessStepCard";
import CTASection from "@/components/sections/CTASection";
import { processSteps } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sourcing & Process | From High Range Estate to Export",
  description:
    "See how High Range Coffee sources green coffee from the High Range growing belt and processes it through curing, grading and export at our Coorg curing works.",
  alternates: { canonical: "/sourcing-process" },
};

export default function SourcingProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Sourcing & Process"
        title="From High Range Estate to Export-Ready Green Coffee"
        description="A six-stage journey — sourcing, harvest, curing, grading, storage and export — refined over three decades of curing works experience."
        image={IMAGES.dryingYard}
      />

      <section className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="Six Stages, One Standard of Quality"
          description="Every consignment we export passes through the same disciplined process, regardless of grade or destination."
          align="center"
          className="mx-auto"
        />
        <div className="space-y-16">
          {processSteps.map((step, i) => (
            <ProcessStepCard key={step.step} step={step} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <CTASection
        title="Have Questions About Our Process?"
        description="From harvest timing to quality control methods, our export desk is happy to walk you through exactly how your consignment will be handled."
        primaryLabel="Ask a Question"
        primaryHref="/contact"
      />
    </>
  );
}
