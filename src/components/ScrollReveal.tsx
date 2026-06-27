"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "none";

type ScrollRevealProps = {
  children: ReactNode;
  direction?: RevealDirection;
  delayMs?: number;
  className?: string;
};

/**
 * Scroll-triggered reveal wrapper, rebuilt on Framer Motion to match the exact feel of
 * the Creative Emman Limited reference site (studied directly from its source code,
 * since the live site is blocked by this sandbox's network egress allowlist).
 *
 * PREMIUM_EASE is lifted directly from their ScrollReveal component — a slightly
 * decelerating "ease-out-expo"-style curve that reads as noticeably more premium than a
 * generic ease-out, which is what the previous CSS-only version of this component used.
 * duration and the -80px viewport margin are also taken directly from their
 * implementation.
 *
 * whileInView + viewport={{ once: true }} replaces the previous hand-rolled
 * IntersectionObserver entirely — Framer Motion's own viewport tracking already handles
 * the "fires once, never re-triggers, respects reduced motion" behaviour this needs.
 */
const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const directionOffset = (direction: RevealDirection) => {
  switch (direction) {
    case "up":
      return { y: 28, x: 0 };
    case "left":
      return { x: 28, y: 0 };
    case "right":
      return { x: -28, y: 0 };
    case "none":
      return { x: 0, y: 0 };
  }
};

export default function ScrollReveal({
  children,
  direction = "up",
  delayMs = 0,
  className = "",
}: ScrollRevealProps) {
  const offset = directionOffset(direction);

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay: delayMs / 1000, ease: PREMIUM_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
