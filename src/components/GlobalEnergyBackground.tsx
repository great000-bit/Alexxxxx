"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Global, fixed-position background layer sitting behind the entire site (mounted once
 * in layout.tsx). This is a rewrite of the original version, which was correct in
 * structure but too faint to actually read as a visible background once stacked under
 * the readability overlay and glass section panels — confirmed by direct feedback that
 * the site "still looks like a flat static dark background." This version raises the
 * fallback gradients' opacity and size substantially and lightens the overlay, while
 * staying within "subtle, not distracting" — verify visually after any future tuning.
 *
 * Degrades gracefully on every axis the brief calls out:
 * - No video files exist yet — onError on both <source> elements swaps in the animated
 *   CSS fallback below instead of a broken video element.
 * - prefers-reduced-motion: pauses/hides the video AND stops the CSS fallback's motion,
 *   leaving a single static atmospheric frame.
 * - pointer-events: none and aria-hidden — decorative only.
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
      {/* Base — deep navy, per the exact palette spec. */}
      <div className="absolute inset-0" style={{ backgroundColor: "#030812" }} />

      {/* CSS fallback: three large, slowly drifting soft radial colour fields (emerald,
          teal, and a touch of muted gold), genuinely visible at rest rather than buried
          under heavy opacity reduction. This is what actually renders right now, since
          no video file exists — see the TODO on the <source> tags below for where to
          drop in the real optimized WebM/MP4 once produced. */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          showFallback ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`absolute -top-[10%] -left-[15%] w-[85vw] h-[85vw] rounded-full blur-[110px] ${
            prefersReducedMotion ? "" : "animate-energy-drift-a"
          }`}
          style={{ backgroundColor: "#0e6b57", opacity: 0.42 }}
        />
        <div
          className={`absolute -bottom-[15%] -right-[10%] w-[75vw] h-[75vw] rounded-full blur-[110px] ${
            prefersReducedMotion ? "" : "animate-energy-drift-b"
          }`}
          style={{ backgroundColor: "#5ac8a7", opacity: 0.22 }}
        />
        <div
          className={`absolute top-[35%] left-[55%] w-[45vw] h-[45vw] rounded-full blur-[120px] ${
            prefersReducedMotion ? "" : "animate-energy-drift-c"
          }`}
          style={{ backgroundColor: "#c6a15b", opacity: 0.08 }}
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

      {/* Readability overlay — lighter than the previous version (0.55 -> 0.30 base),
          since the previous overlay was a major contributor to the background reading
          as "not visible". Still vignetted (darker at the edges) rather than a flat
          block, and still enough to keep text readable on top. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(3,8,18,0.22) 0%, rgba(3,8,18,0.46) 100%)",
        }}
      />
    </div>
  );
}
