"use client";

import { useEffect, useRef, useState } from "react";

type RevealDirection = "up" | "left" | "right" | "none";

type ScrollRevealProps = {
  children: React.ReactNode;
  direction?: RevealDirection;
  delayMs?: number;
  className?: string;
};

/**
 * Scroll-triggered reveal wrapper. Neither AOS nor Framer Motion exists in this project
 * (checked package.json before building this — same finding as the hero's mount-based
 * Reveal component) and the brief explicitly says not to install a new library if a
 * lightweight IntersectionObserver utility can do the job instead.
 *
 * Fires once per element (per the brief's "once: true" spec) the first time it crosses
 * the viewport threshold, then disconnects its own observer — never re-triggers on
 * scroll-back-up, never loops.
 */
export default function ScrollReveal({
  children,
  direction = "up",
  delayMs = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Lazy initializer reads reduced-motion once during the first client render rather
  // than inside an effect (avoids the "setState synchronously within an effect"
  // anti-pattern). If true, the element starts already visible and the observer effect
  // below skips entirely.
  const [prefersReducedMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false,
  );
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;

    // Safety net for instant scroll jumps (End key, drag-scrollbar, programmatic
    // window.scrollTo with no smooth behavior): in these cases the browser may render
    // the new scroll position directly without an intersection event ever firing for
    // elements that "passed through" the viewport between frames. Checking the
    // bounding rect immediately on mount catches anything already on-screen (or close
    // to it) before the observer even attaches, so it can't get stuck invisible.
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    if (rect.top < viewportHeight + 200 && rect.bottom > -200) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setIsVisible(true), delayMs);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      // Generous rootMargin: extends the intersection zone 200px below the viewport's
      // bottom edge. This is deliberately wide (not the brief's literal "offset 80-120,"
      // which in practice was too narrow) — a narrower margin meant a fast scroll-to-
      // bottom (End key, drag-scrollbar, or a single large wheel flick) could skip an
      // element from "below viewport" straight to "above viewport" without the browser
      // ever firing an intersection event for it, leaving it permanently stuck at
      // opacity: 0. Confirmed this was a real bug (not just a screenshot artifact) by
      // testing window.scrollTo straight to document.body.scrollHeight and finding
      // dozens of elements stuck invisible afterward.
      { threshold: 0, rootMargin: "0px 0px 200px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs, prefersReducedMotion]);

  const hiddenTransform =
    direction === "up"
      ? "translate-y-6"
      : direction === "left"
        ? "translate-x-6"
        : direction === "right"
          ? "-translate-x-6"
          : "";

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-[800ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransform}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
