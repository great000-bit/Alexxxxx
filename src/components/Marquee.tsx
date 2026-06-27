"use client";

import { useState } from "react";

type MarqueeProps = {
  items: string[];
  durationSeconds?: number;
};

/**
 * Seamless horizontal marquee. The track renders the item list twice back-to-back, then
 * animates exactly -50% on the X axis — since the two halves are identical, the loop
 * point is invisible (no jump/reset). Pure CSS animation (no library), per the brief's
 * "CSS-first" performance requirement.
 *
 * Pauses on hover (the brief says "pause on hover if appropriate" — appropriate here,
 * since it lets a visitor actually read an item without it scrolling away).
 *
 * Reduced-motion: per the brief's explicit instruction, this swaps to a static wrapped
 * list instead of a paused-but-still-marquee-shaped track, since a wrapped list reads
 * more naturally as a non-scrolling list of credentials.
 */
export default function Marquee({ items, durationSeconds = 36 }: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      {/* Reduced-motion fallback: static wrapped list, hidden by default and shown only
          when the user's OS-level reduced-motion preference is on (handled in CSS via
          the motion-reduce: variant, so no JS media-query check is needed here). */}
      <div className="hidden motion-reduce:flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6">
        {items.map((item) => (
          <span key={item} className="text-sm font-medium text-slate-body whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>

      <div
        className="motion-reduce:hidden overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex w-max"
          style={{
            animation: `marquee-scroll ${durationSeconds}s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center text-sm font-medium uppercase tracking-wide text-slate-body whitespace-nowrap px-8"
            >
              {item}
              <span className="ml-8 text-teal-highlight/50" aria-hidden="true">
                /
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
