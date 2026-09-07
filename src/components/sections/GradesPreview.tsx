import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { coffeeGrades } from "@/lib/data";
import GradeCard from "@/components/coffee/GradeCard";
import SectionHeading from "@/components/sections/SectionHeading";

export default function GradesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Our Coffee"
          title="Grades Trusted by the World's Leading Buyers"
          description="From washed Plantation grades to sun-dried natural cherry, every lot is graded to Coffee Board of India standards and cupped before it leaves our curing works."
        />
        <Link
          href="/coffee"
          className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-secondary hover:text-accent sm:flex"
        >
          View all grades <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coffeeGrades.slice(0, 3).map((grade, i) => (
          <GradeCard key={grade.slug} grade={grade} index={i} />
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Link href="/coffee" className="flex items-center gap-1 text-sm font-semibold text-secondary">
          View all grades <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
