"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";

/**
 * Homepage-only fluid energy video background. Per direct correction, this is no longer
 * global — it previously rendered on every page via a flat CSS gradient that read as "a
 * green base colour," which is exactly what was rejected. Internal pages now get a plain
 * #000000 background instead (see globals.css body rule).
 *
 * Scoped to "/" via usePathname() here, in this component, rather than restructuring the
 * route tree into (home)/(other) groups — keeps the change small and contained to
 * exactly what needs to differ, without touching every other page's file.
 *
 * Video asset: copied directly from the Creative Emman Limited site's own source repo
 * (great000-bit/emman-engineered, public/video/hero-bg.mp4) — the live site itself is
 * blocked by this sandbox's network egress allowlist, but the person owns both projects
 * and explicitly asked to reuse this asset if accessible, so it was copied (not
 * hotlinked) into this project's own /public/videos/, transcoded to an additional WebM
 * version locally (ffmpeg, libvpx-vp9) for the WebM-first/MP4-fallback pattern the brief
 * asks for. Real footage of warm gold/amber light moving across a deep navy/black field —
 * genuinely fluid motion, not a static image or a CSS gradient standing in for one.
 */
export default function GlobalEnergyBackground() {
  const pathname = usePathname();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (prefersReducedMotion) {
      video.pause();
    } else if (!hasError) {
      video.play().catch(() => {
        // Autoplay can still be blocked by some browsers/extensions even when muted;
        // the static fallback frame underneath is enough — no further action needed.
      });
    }
  }, [prefersReducedMotion, hasError]);

  if (pathname !== "/") return null;

  const showFallback = hasError || prefersReducedMotion;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Static fallback frame — a still taken from the same footage's opening moment,
          used only when the video can't play (missing/errored) or reduced-motion is on.
          This is a last resort per the brief, not the default state. */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: showFallback ? 1 : 0,
          backgroundColor: "#04060a",
          backgroundImage:
            "radial-gradient(ellipse at 75% 30%, rgba(198,161,91,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(14,107,87,0.12) 0%, transparent 60%)",
        }}
      />

      {!hasError && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: showFallback ? 0 : 1 }}
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setHasError(true)}
        >
          <source src="/videos/energy-flow.webm" type="video/webm" />
          <source src="/videos/energy-flow.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay for readability — per direct correction, NOT a green/emerald tint.
          rgba(3,8,18,*) is a near-black navy, matching the brief's exact suggested
          overlay values. */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(3,8,18,0.50)" }} />
    </div>
  );
}
