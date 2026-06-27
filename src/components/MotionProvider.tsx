"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps the app once so every Framer Motion animation (ScrollReveal, button hovers,
 * etc.) automatically respects the user's OS-level prefers-reduced-motion setting,
 * without each individual component needing its own check. This has to be a small
 * client-component wrapper, not inline in layout.tsx, since MotionConfig relies on
 * React context and layout.tsx itself is a Server Component (it exports metadata).
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
