import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/lib/images";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/motion/Reveal";

export default function ProcessTeaser() {
  return (
    <section className="bg-muted">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
          <Image
            src={IMAGES.dryingYard}
            alt="Green coffee sun-drying on patios at High Range Coffee's curing works in Coorg"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Sourcing & Process"
            title="From High Range Estate to Export-Ready Green Coffee"
            description="Every lot passes through six carefully controlled stages — sourcing, harvest, curing, grading, storage and export — at our Periyapatna and Kushalnagar curing works in Coorg."
          />
          <Link
            href="/sourcing-process"
            className={cn(buttonVariants(), "mt-6 bg-primary text-primary-foreground hover:bg-primary/90")}
          >
            See Our Process <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
