"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";

/**
 * Homepage-only fluid energy video background. Scoped to "/" via usePathname().
 * Internal pages get plain #000000 from globals.css body rule.
 *
 * Video loops continuously with safety handlers:
 * - onEnded restarts if the native loop attribute fails
 * - visibilitychange resumes playback when the tab becomes active
 * - onPause re-attempts play if not reduced-motion and document is visible
 */
export default function GlobalEnergyBackground() {
  const pathname = usePathname();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  /** Safely call play(), catching the promise rejection browsers may throw. */
  const safePlay = useCallback((video: HTMLVideoElement) => {
    const p = video.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {});
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasError) return;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    // Initial play
    safePlay(video);

    // Safety: if "ended" fires despite loop attribute, restart
    const handleEnded = () => {
      video.currentTime = 0;
      safePlay(video);
    };

    // Safety: if browser pauses unexpectedly, resume when tab is visible
    const handlePause = () => {
      if (!prefersReducedMotion && document.visibilityState === "visible") {
        safePlay(video);
      }
    };

    // Resume on tab re-focus
    const handleVisibility = () => {
      if (document.visibilityState === "visible" && video.paused && !prefersReducedMotion) {
        safePlay(video);
      }
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("pause", handlePause);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("pause", handlePause);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [prefersReducedMotion, hasError, safePlay]);

  if (pathname !== "/") return null;

  const showFallback = hasError || prefersReducedMotion;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Static fallback, visible only when video cannot play */}
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
          autoPlay
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

      {/* Dark overlay for readability */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(3,8,18,0.50)" }} />
    </div>
  );
}
