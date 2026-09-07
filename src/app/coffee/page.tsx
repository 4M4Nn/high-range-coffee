import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import GradeCard from "@/components/coffee/GradeCard";
import CTASection from "@/components/sections/CTASection";
import { coffeeGrades, certifications } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Coffee | Arabica & Robusta Grades — Plantation, Cherry, Parchment",
  description:
    "Explore the green coffee grades exported by High Range Coffee: washed Arabica Plantation A/B/C, natural Arabica Cherry AB, Robusta Cherry AB and Robusta Parchment, graded to Coffee Board of India standards.",
  alternates: { canonical: "/coffee" },
};

const arabicaGrades = coffeeGrades.filter((g) => g.species === "Arabica");
const robustaGrades = coffeeGrades.filter((g) => g.species === "Robusta");

export default function CoffeePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Coffee"
        title="Green Coffee Grades for Every Roast Profile"
        description="From clean, washed Plantation grades to fruit-forward natural cherry, every lot is cupped and graded to Coffee Board of India standards before export."
        image={IMAGES.greenBeans}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Arabica"
          title="Washed Plantation & Natural Cherry Arabica"
          description="Grown across the misty, high-altitude tracts of the High Range belt, our Arabica lots range from clean, bright washed Plantation grades to fuller-bodied, fruit-forward natural Cherry."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {arabicaGrades.map((grade, i) => (
            <GradeCard key={grade.slug} grade={grade} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Robusta"
            title="Bold, Dependable Robusta for Espresso & Blends"
            description="Our Robusta lots deliver the strength, body and crema base sought by espresso and instant-coffee blenders, available in both natural cherry and washed parchment processing."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {robustaGrades.map((grade, i) => (
              <GradeCard key={grade.slug} grade={grade} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quality Assurance"
          title="Graded, Cupped & Certified"
          description="Every grade we export is backed by consistent quality control and industry recognition."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert.name} className="rounded-2xl border border-border bg-card p-6 text-center">
              <h3 className="font-serif text-lg font-semibold text-primary">{cert.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Request Cupping Notes & a Custom Quote"
        description="Tell us the grade, screen size and volume you need — our export desk will share cupping notes, specifications and pricing for the current season."
      />
    </>
  );
}
