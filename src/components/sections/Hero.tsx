import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SplitWords from "@/components/motion/SplitWords";
import Reveal from "@/components/motion/Reveal";
import { IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-primary text-white">
      <Image
        src={IMAGES.heroEstate}
        alt="Misty hills of the High Range coffee growing belt in Kerala and Coorg"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 hero-scrim"
        style={{ transform: "translateZ(0)", willChange: "opacity" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:px-8 lg:pb-24">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Curing Works &amp; Green Coffee Exporters &middot; Est. 1995
          </p>
        </Reveal>
        <SplitWords
          as="h1"
          text="Premium Unroasted Coffee, Cured With Fifty Years of Trust"
          className="max-w-4xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
        />
        <Reveal delay={0.3} className="mt-6 max-w-2xl">
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            High Range Coffee Curing Private Limited sources green Arabica and Robusta
            coffee from the High Range growing belt and processes it at our curing works
            in Coorg, Karnataka — trusted by Nestle, ITC, Hindustan Unilever, Olam and
            other global buyers.
          </p>
        </Reveal>
        <Reveal delay={0.45} className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/export"
            className={cn(buttonVariants({ size: "lg" }), "h-11 px-6 bg-accent text-primary hover:bg-accent/90")}
          >
            Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          <Link
            href="/coffee"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-11 px-6 border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            )}
          >
            Explore Our Coffee
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
