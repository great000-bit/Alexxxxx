"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Global, fixed-position background layer sitting behind the entire site (mounted once
 * in layout.tsx). Rebuilt following the actual implementation pattern used by the
 * Creative Emman Limited reference site (studied directly from its source code, since
 * the live site itself is blocked by this sandbox's network egress allowlist — see the
 * note on that in the PR/commit description).
 *
 * Key lesson taken from the reference: their current background is a deliberate
 * *replacement* for an earlier version that JS-animated background-position/scale on
 * full-viewport blend-mode layers — their own code comments say that was the actual
 * cause of site-wide slowness. So this version uses STATIC CSS gradients for the colour
 * mood (no animation loop at all) plus the genuinely subtle motion living only in the
 * (currently-fallback) video layer itself — exactly their tradeoff, not a JS animation
 * pretending to be a video.
 *
 * Degrades gracefully:
 * - No video files exist yet — onError on both <source> elements keeps the static
 *   gradient + grain combination showing, which already reads as a complete, intentional
 *   background on its own (not a "broken state" fallback).
 * - prefers-reduced-motion: pauses/hides the video. The gradient/grain layers were never
 *   animated in the first place, so there's nothing further to stop.
 * - pointer-events: none and aria-hidden — decorative only.
 */
export default function GlobalEnergyBackground() {
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
        // the static layer underneath is enough — no further action needed.
      });
    }
  }, [prefersReducedMotion, hasError]);

  const showFallback = hasError || prefersReducedMotion;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base — deep navy, per the exact palette spec. */}
      <div className="absolute inset-0" style={{ backgroundColor: "#030812" }} />

      {/* Static colour-mood layer: three radial gradients (emerald, teal, muted gold),
          deliberately NOT animated — see the file-level comment on why. Genuinely visible
          at rest (this was the single biggest complaint about the previous version —
          confirmed by screenshot that it was too faint to register as a background at
          all once stacked under the old heavier overlay). */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: showFallback ? 1 : 0 }}
      >
        <div
          className="absolute -top-[10%] -left-[15%] w-[85vw] h-[85vw] rounded-full blur-[110px]"
          style={{ backgroundColor: "#0e6b57", opacity: 0.42 }}
        />
        <div
          className="absolute -bottom-[15%] -right-[10%] w-[75vw] h-[75vw] rounded-full blur-[110px]"
          style={{ backgroundColor: "#5ac8a7", opacity: 0.22 }}
        />
        <div
          className="absolute top-[35%] left-[55%] w-[45vw] h-[45vw] rounded-full blur-[120px]"
          style={{ backgroundColor: "#c6a15b", opacity: 0.08 }}
        />
      </div>

      {!hasError && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: showFallback ? 0 : 1 }}
          muted
          loop
          playsInline
          preload="none"
          onError={() => setHasError(true)}
        >
          {/* TODO: add the real optimized video files at these paths — none were
              provided. WebM first (smaller/more efficient), MP4 as the fallback for
              browsers that don't support WebM. Until these exist, onError above keeps
              the static gradient + grain layers showing instead of a broken video
              element. Keep the final files lightweight (a few MB at most, short loop,
              no audio track) — this plays behind every page on the site. */}
          <source src="/videos/energy-flow.webm" type="video/webm" />
          <source src="/videos/energy-flow.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay — heavier than a hero-only treatment would need, since this layer
          now sits behind text-bearing sections on every page, not just one hero. Still a
          vignette (darker at the edges) rather than a flat block. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(3,8,18,0.30) 0%, rgba(3,8,18,0.58) 100%)",
        }}
      />

      {/* Static grain texture — single non-animated layer, cheap (a tiny inline SVG noise
          filter, not an image asset), adds a subtle cinematic texture rather than a flat
          gradient feel. Matches the reference site's own approach. */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')",
        }}
      />
    </div>
  );
}
