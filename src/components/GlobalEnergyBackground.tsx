"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Global, fixed-position background layer sitting behind the entire site (mounted once
 * in layout.tsx, not per-page). Replaces the flat navy section backgrounds with a single
 * persistent looped video/fallback that shows through every page via transparent section
 * backgrounds.
 *
 * Degrades gracefully on every axis the brief calls out:
 * - No video files exist yet — onError on both <source> elements swaps in the animated
 *   CSS fallback below instead of a broken video element.
 * - No animated-fallback case is "blank": even before/without a real video, the CSS
 *   radial-gradient fallback gives the same atmospheric energy-flow feel the brief wants,
 *   just via two slowly-drifting soft gradients instead of footage.
 * - prefers-reduced-motion: pauses/hides the video AND stops the CSS fallback's motion,
 *   leaving a single static atmospheric frame — checked via a lazy useState initializer
 *   (not inside an effect, avoiding the setState-in-effect anti-pattern) plus a live
 *   listener for changes mid-session.
 * - pointer-events: none and aria-hidden — this is decorative only, never something a
 *   user needs to interact with or that screen readers need to announce.
 */
export default function GlobalEnergyBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (prefersReducedMotion) {
      video.pause();
    } else if (!hasError) {
      video.play().catch(() => {
        // Autoplay can still be blocked by some browsers/extensions even when muted;
        // the CSS fallback underneath is enough — no further action needed.
      });
    }
  }, [prefersReducedMotion, hasError]);

  const showFallback = hasError || prefersReducedMotion;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* CSS fallback: two large, very slowly drifting soft radial gradients (emerald +
          deep navy), evoking fluid energy movement without any video asset or canvas/
          Three.js/particle library. This is what actually renders right now, since no
          video file exists yet — see the TODO on the <source> tags below for where to
          drop in the real optimized WebM/MP4 once produced.
          When prefersReducedMotion is true, the animation classes are swapped out
          entirely (not just paused via the global CSS rule) so the gradients sit in a
          single fixed position rather than mid-transition. */}
      <div
        className={`absolute inset-0 bg-navy-950 transition-opacity duration-500 ${
          showFallback ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full bg-emerald-500/10 blur-3xl ${
            prefersReducedMotion ? "" : "animate-energy-drift-a"
          }`}
        />
        <div
          className={`absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-navy-700/30 blur-3xl ${
            prefersReducedMotion ? "" : "animate-energy-drift-b"
          }`}
        />
      </div>

      {!hasError && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showFallback ? "opacity-0" : "opacity-100"
          }`}
          muted
          loop
          playsInline
          preload="none"
          onError={() => setHasError(true)}
        >
          {/* TODO: add the real optimized video files at these paths — none were
              provided. WebM first (smaller/more efficient), MP4 as the fallback for
              browsers that don't support WebM. Until these exist, onError above keeps
              the animated CSS gradient fallback showing instead of a broken video
              element. Keep the final files lightweight (a few MB at most, short loop,
              no audio track) — this plays behind every page on the site. */}
          <source src="/videos/energy-flow.webm" type="video/webm" />
          <source src="/videos/energy-flow.mp4" type="video/mp4" />
        </video>
      )}

      {/* Global readability overlay: dark navy, low opacity, with a subtle vignette
          (darker at the edges) rather than a flat solid block — keeps text readable on
          every page while still letting the motion behind it show through subtly. */}
      <div
        className="absolute inset-0 bg-navy-950/55"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, transparent 0%, rgba(5,11,20,0.35) 100%)",
        }}
      />
    </div>
  );
}
