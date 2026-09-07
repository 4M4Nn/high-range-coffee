import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import FAQAccordion from "@/components/faq/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { faqItems } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "FAQ | Green Coffee Bean Export Questions Answered",
  description:
    "Answers to common questions about importing green coffee beans from High Range Coffee — grades, certifications, minimum order quantities and how to get started.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything importers and roasters ask us most about sourcing green coffee from High Range Coffee."
        image={IMAGES.cupping}
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Answers" title="Common Questions From Buyers" />
        <div className="mt-10">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="Our export desk is happy to answer anything specific to your grade, volume or shipping requirements."
      />
    </>
  );
}
