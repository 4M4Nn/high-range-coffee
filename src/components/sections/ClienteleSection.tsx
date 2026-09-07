import SectionHeading from "@/components/sections/SectionHeading";
import ClienteleStrip from "@/components/sections/ClienteleStrip";

export default function ClienteleSection({
  eyebrow = "Our Clientele",
  title = "Trusted by the World's Leading Coffee Buyers",
  description = "For nearly three decades, global trading houses and FMCG majors have relied on High Range Coffee for consistent quality and dependable supply — a client roster few Indian curing works can match.",
  compact = false,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  compact?: boolean;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
        className="mx-auto"
      />
      <div className="mt-10">
        <ClienteleStrip compact={compact} />
      </div>
    </section>
  );
}
