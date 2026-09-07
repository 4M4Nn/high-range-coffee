import Image from "next/image";
import SplitWords from "@/components/motion/SplitWords";
import Reveal from "@/components/motion/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-primary text-white sm:min-h-[52vh]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 hero-scrim-page"
        style={{ transform: "translateZ(0)", willChange: "opacity" }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-32 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {eyebrow}
          </p>
        </Reveal>
        <SplitWords
          as="h1"
          text={title}
          className="max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-5xl"
        />
        {description ? (
          <Reveal delay={0.25} className="mt-4 max-w-2xl">
            <p className="text-base leading-relaxed text-white/80">{description}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
