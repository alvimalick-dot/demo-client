"use client";

import { useLayoutEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** delay in seconds before the reveal starts */
  delay?: number;
  /** initial vertical offset in px */
  y?: number;
  /** stagger children that carry the data-reveal-child attribute */
  stagger?: number;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Wraps content and plays a fade/slide-in the first time it scrolls into view.
 * Set `stagger` and mark children with `data-reveal-child` for staggered groups.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  stagger = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: gsap.TweenTarget[] =
      stagger > 0
        ? Array.from(el.querySelectorAll("[data-reveal-child]"))
        : [el];

    const tween = gsap.fromTo(
      targets,
      { autoAlpha: 0, y },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay,
        stagger,
      }
    );

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => tween.play(),
    });
    tween.pause();

    // re-measure after images/fonts settle so triggers don't fire early
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      st.kill();
      tween.kill();
    };
  }, [delay, y, stagger]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
