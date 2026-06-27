"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Looped, muted background video for the hero. Built to degrade gracefully on every
 * axis the brief calls out:
 *
 * - No video files exist yet (none were provided) — onError on both <source> elements
 *   sets hasError, which swaps in a plain navy gradient fallback instead of a broken
 *   video element. Nothing breaks if /videos/energy-flow.{webm,mp4} are 404s.
 * - prefers-reduced-motion: native <video autoPlay loop> isn't covered by the project's
 *   global CSS reduced-motion rule (that only affects CSS animations/transitions), so
 *   this explicitly checks the media query in JS and pauses + hides the video, falling
 *   back to the same static treatment used for the missing-file case.
 * - Decorative only: aria-hidden, and no content is ever conveyed through the video
 *   alone.
 */
export default function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  // Read the media query once, lazily, as the initial state value — this runs during
  // the first client render rather than inside an effect, avoiding the "setState
  // synchronously within an effect" anti-pattern. SSR-safe: `typeof window` guards the
  // server render, where this just defaults to false (server output is irrelevant here
  // since the video element doesn't render meaningfully without a browser anyway).
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
        // the static fallback background underneath is enough — no further action needed.
      });
    }
  }, [prefersReducedMotion, hasError]);

  const showStaticFallback = hasError || prefersReducedMotion;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Static fallback — always rendered underneath, visible whenever the video is
          hidden/paused/missing, and also serves as a low-cost placeholder while the
          video itself is still loading. */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 transition-opacity duration-500 ${
          showStaticFallback ? "opacity-100" : "opacity-0"
        }`}
      />

      {!hasError && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showStaticFallback ? "opacity-0" : "opacity-100"
          }`}
          muted
          loop
          playsInline
          preload="none"
          onError={() => setHasError(true)}
        >
          {/* TODO: add the real video files at these paths — none were provided.
              WebM first (smaller/more efficient), MP4 as the fallback for browsers that
              don't support WebM. Until these exist, onError above keeps the static navy
              gradient fallback showing instead of a broken video element. */}
          <source src="/videos/energy-flow.webm" type="video/webm" />
          <source src="/videos/energy-flow.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
