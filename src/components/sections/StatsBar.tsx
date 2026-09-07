import type { StatItem } from "@/types";
import Reveal from "@/components/motion/Reveal";

export default function StatsBar({
  stats,
  dark = true,
}: {
  stats: StatItem[];
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? "bg-primary text-primary-foreground"
          : "bg-muted text-foreground"
      }
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <p className="font-serif text-3xl font-semibold text-accent sm:text-4xl">
              {stat.value}
              <span className="text-2xl">{stat.suffix}</span>
            </p>
            <p
              className={
                dark
                  ? "mt-2 text-xs uppercase tracking-wide text-primary-foreground/70 sm:text-sm"
                  : "mt-2 text-xs uppercase tracking-wide text-muted-foreground sm:text-sm"
              }
            >
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
