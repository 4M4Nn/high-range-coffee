import Image from "next/image";
import type { CoffeeGrade } from "@/types";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/motion/Reveal";

export default function GradeCard({ grade, index = 0 }: { grade: CoffeeGrade; index?: number }) {
  return (
    <Reveal delay={index * 0.06}>
      <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={grade.image}
            alt={`${grade.name} — ${grade.species} coffee, ${grade.process} process`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center gap-2">
            <Badge className="bg-secondary text-secondary-foreground">{grade.species}</Badge>
            {grade.screenSize ? (
              <Badge variant="outline" className="text-muted-foreground">
                {grade.screenSize}
              </Badge>
            ) : null}
          </div>
          <h3 className="font-serif text-xl font-semibold text-primary">{grade.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-wide text-secondary">{grade.process} Process</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{grade.description}</p>
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
