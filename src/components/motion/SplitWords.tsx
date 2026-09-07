"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplitWordsProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
}

export default function SplitWords({ text, className, delay = 0, as = "h1" }: SplitWordsProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inners = el.querySelectorAll<HTMLElement>(".split-word-inner");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(inners, { y: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inners,
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.9,
          delay,
          stagger: 0.06,
          ease: "power4.out",
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, text]);

  const Tag = as;

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="split-word">
            <span className="split-word-inner">{word}</span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
