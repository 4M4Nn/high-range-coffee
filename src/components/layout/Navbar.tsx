"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl font-semibold tracking-tight text-primary sm:text-2xl">
            High Range Coffee
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            Curing Works &amp; Exporters — Est. 1995
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-foreground/80 transition-colors hover:text-accent",
                pathname === link.href && "text-accent"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phones[0].replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.contact.phones[0]}
          </a>
          <Link
            href="/export"
            className={cn(buttonVariants(), "bg-primary text-primary-foreground hover:bg-primary/90")}
          >
            Request a Quote
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "lg:hidden")}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[340px]">
            <SheetHeader>
              <SheetTitle className="font-serif text-lg text-primary">High Range Coffee</SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-base font-medium text-foreground/85 hover:bg-muted",
                    pathname === link.href && "bg-muted text-accent"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/export"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants(),
                  "mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                Request a Quote
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
