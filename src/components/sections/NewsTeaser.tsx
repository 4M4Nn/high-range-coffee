import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsItems } from "@/lib/data";
import NewsCard from "@/components/news/NewsCard";
import SectionHeading from "@/components/sections/SectionHeading";

export default function NewsTeaser() {
  const latest = [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="News & Consignments"
            title="Fresh Harvest & Export Updates"
            description="Follow upcoming consignments, new-crop harvest progress and export milestones straight from our curing works."
          />
          <Link
            href="/news"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-secondary hover:text-accent sm:flex"
          >
            View all news <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((item, i) => (
            <NewsCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
