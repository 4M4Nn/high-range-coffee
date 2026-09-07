import Image from "next/image";
import type { CoffeeGrade } from "@/types";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/motion/Reveal";

export default function GradeCard({ grade, index = 0 }: { grade: CoffeeGrade; index?: number }) {
  return (
    <Reveal delay={index * 0.06} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
        <div className="relative h-44 w-full overflow-hidden sm:h-48">
          <Image
            src={grade.image}
            alt={`${grade.name} — ${grade.species} coffee, ${grade.process} process`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-primary/90 font-serif text-sm font-bold text-accent shadow-md backdrop-blur-sm">
            {grade.grade}
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge className="bg-secondary text-secondary-foreground">{grade.species}</Badge>
            <Badge variant="outline" className="text-muted-foreground">
              {grade.screenSize}
            </Badge>
          </div>
          <h3 className="font-serif text-lg font-semibold text-primary sm:text-xl">{grade.name}</h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-secondary">
            {grade.process}
          </p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {grade.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {grade.cuppingNotes.map((note) => (
              <li
                key={note}
                className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}
