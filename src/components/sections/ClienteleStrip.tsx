import { clients } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";

export default function ClienteleStrip({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {clients.map((client, i) => (
        <Reveal key={client.name} delay={i * 0.04}>
          <div
            className={
              compact
                ? "flex h-20 items-center justify-center rounded-lg border border-border bg-card px-3 text-center"
                : "flex h-28 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-center shadow-sm"
            }
          >
            <span className="font-serif text-sm font-semibold text-primary sm:text-base">
              {client.name}
            </span>
            {!compact && (
              <Badge variant="secondary" className="bg-muted text-[10px] text-muted-foreground">
                {client.category}
              </Badge>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
