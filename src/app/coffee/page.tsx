import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import GradeCard from "@/components/coffee/GradeCard";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/motion/Reveal";
import { coffeeGrades, certifications, gradeTiers } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Coffee | Arabica & Robusta — AAA, AA, A, B & C Grades",
  description:
    "High Range Coffee exports Arabica and Robusta in AAA, AA, A, B and C grades, classified by screen size, density and defect count to Coffee Board of India standards.",
  alternates: { canonical: "/coffee" },
};

const arabicaGrades = coffeeGrades.filter((g) => g.species === "Arabica");
const robustaGrades = coffeeGrades.filter((g) => g.species === "Robusta");

export default function CoffeePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Coffee"
        title="Arabica & Robusta, Graded AAA Through C"
        description="Every lot — Arabica or Robusta — is classified by screen size, density and defect count into five clear grades, cupped and certified before it leaves our curing works."
        image={IMAGES.greenBeans}
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="How We Grade"
          title="The Same Five-Tier Grade Ladder, Across Both Varieties"
          description="Both our Arabica and Robusta lines are classified into AAA, AA, A, B and C grades — the bigger and denser the bean, the higher the grade. Every tier is available in both varieties, so you can match grade to your exact quality and budget requirement."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead className="bg-muted text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-5 py-3 font-semibold">Grade</th>
                <th className="px-5 py-3 font-semibold">What It Means</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {gradeTiers.map((t) => (
                <tr key={t.tier} className="bg-card">
                  <td className="px-5 py-3">
                    <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-primary px-2 font-serif text-xs font-bold text-primary-foreground">
                      {t.tier}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{t.blurb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Arabica"
          title="Arabica — AAA to C"
          description="Grown across the misty, high-altitude tracts of the High Range belt, our Arabica is sorted through all five grades for a clean, bright cup at every tier."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {arabicaGrades.map((grade, i) => (
            <GradeCard key={grade.slug} grade={grade} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="Robusta"
            title="Robusta — AAA to C"
            description="Our Robusta parchment lots deliver the strength, body and crema base sought by espresso and instant-coffee blenders, across the same five-tier grade ladder."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {robustaGrades.map((grade, i) => (
              <GradeCard key={grade.slug} grade={grade} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Quality Assurance"
          title="Graded, Cupped & Certified"
          description="Every grade we export is backed by consistent quality control and industry recognition."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <Reveal key={cert.name}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 text-center">
                <h3 className="font-serif text-lg font-semibold text-primary">{cert.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </Reveal>
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
