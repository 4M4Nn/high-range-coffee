import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Reveal from "@/components/motion/Reveal";

export default function CTASection({
  title = "Ready to Source Premium Indian Green Coffee?",
  description = "Tell us your required grade, volume and shipping window — our export desk will confirm availability, cupping notes and a quote within one business day.",
  primaryLabel = "Request a Quote",
  primaryHref = "/export",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-forest text-forest-foreground">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-forest-foreground/85">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className={cn(buttonVariants({ size: "lg" }), "h-11 px-6 bg-accent text-primary hover:bg-accent/90")}
            >
              {primaryLabel} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href={secondaryHref}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 px-6 border-forest-foreground/30 bg-transparent text-forest-foreground hover:bg-white/10"
              )}
            >
              {secondaryLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
