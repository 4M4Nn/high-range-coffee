import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import NewsCard from "@/components/news/NewsCard";
import { newsItems } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "News & Consignments | Harvest & Export Updates",
  description:
    "The latest harvest progress, export consignment dispatches and milestones from High Range Coffee's curing works in Coorg, Karnataka.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const sorted = [...newsItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <PageHero
        eyebrow="News & Consignments"
        title="Fresh Harvest & Export Updates"
        description="Follow upcoming consignments, new-crop harvest progress and export milestones straight from our curing works in Coorg."
        image={IMAGES.cherries}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Latest Updates"
          title="All News & Consignments"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((item, i) => (
            <NewsCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
