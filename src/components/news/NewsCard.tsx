import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import type { NewsItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/motion/Reveal";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsCard({ item, index = 0 }: { item: NewsItem; index?: number }) {
  return (
    <Reveal delay={index * 0.06}>
      <Link href={`/news/${item.slug}`} className="group block h-full">
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
          <div className="relative h-44 w-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex items-center gap-3">
              <Badge className="bg-secondary text-secondary-foreground">{item.category}</Badge>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" />
                {formatDate(item.date)}
              </span>
            </div>
            <h3 className="font-serif text-lg font-semibold leading-snug text-primary group-hover:text-secondary">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
            <span className="mt-4 text-sm font-semibold text-secondary">Read more &rarr;</span>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}
