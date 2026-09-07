import Image from "next/image";
import type { ProcessStep } from "@/types";
import Reveal from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export default function ProcessStepCard({
  step,
  reverse = false,
}: {
  step: ProcessStep;
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={cn(
          "grid items-center gap-8 md:grid-cols-2",
          reverse && "md:[&>*:first-child]:order-2"
        )}
      >
        <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
          <Image
            src={step.image}
            alt={step.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <span className="font-serif text-5xl font-semibold text-accent/40">
            {String(step.step).padStart(2, "0")}
          </span>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-primary">{step.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.description}</p>
        </div>
      </div>
    </Reveal>
  );
}
