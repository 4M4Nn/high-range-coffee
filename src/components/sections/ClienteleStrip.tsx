import { clients } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

export default function ClienteleStrip({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14"
          : "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
      }
    >
      {clients.map((client, i) =>
        compact ? (
          <Reveal key={client.name} delay={i * 0.04}>
            <span className="group flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70 transition-colors group-hover:bg-accent" />
              <span className="font-serif text-lg font-semibold uppercase tracking-wide text-muted-foreground/80 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                {client.name}
              </span>
            </span>
          </Reveal>
        ) : (
          <Reveal key={client.name} delay={i * 0.04}>
            <div className="group flex h-28 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md">
              <span className="font-serif text-base font-semibold uppercase tracking-wide text-muted-foreground/85 transition-colors duration-300 group-hover:text-primary sm:text-lg">
                {client.name}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-secondary/80">
                {client.category}
              </span>
            </div>
          </Reveal>
        )
      )}
    </div>
  );
}
