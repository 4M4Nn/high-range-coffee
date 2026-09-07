import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/sections/CTASection";
import { newsItems } from "@/lib/data";

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/news/${item.slug}` },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <section className="relative flex min-h-[42vh] items-end overflow-hidden bg-primary text-white">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 hero-scrim-page"
          style={{ transform: "translateZ(0)", willChange: "opacity" }}
        />
        <div className="relative mx-auto w-full max-w-4xl px-4 pb-14 pt-32 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Back to News
          </Link>
          <div className="mb-3 flex items-center gap-3">
            <Badge className="bg-accent text-primary">{item.category}</Badge>
            <span className="flex items-center gap-1 text-xs text-white/75">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatDate(item.date)}
            </span>
          </div>
          <h1 className="max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            {item.title}
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base leading-relaxed text-foreground/90">
          {item.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>

      <CTASection
        title="Interested in This Consignment or Season's Harvest?"
        description="Reach out to our export desk to discuss availability, grades and shipping windows."
      />
    </>
  );
}
