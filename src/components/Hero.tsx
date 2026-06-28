"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HeroPortraitFrame from "./HeroPortraitFrame";

/**
 * Reveal-on-mount wrapper. No AOS or Framer Motion exists in this project (checked
 * package.json before building this) and the brief explicitly says not to install a
 * library just for this effect — a plain CSS transition toggled once after mount
 * reproduces the same restrained "fade up, no bounce" entrance with zero new
 * dependencies. `delayMs` staggers each hero element subtly, per the brief's spec.
 */
function Reveal({
  children,
  delayMs = 0,
  className = "",
}: {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  return (
    <div
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    // No per-hero video/background here anymore — GlobalEnergyBackground (mounted once
    // in layout.tsx) now plays behind the entire site, hero included. This section is
    // transparent so that shows through; it only adds its own light readability overlay
    // on top, since the hero has the densest text over the most "open" stretch of video.
    <section className="relative -mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950/35" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8 pt-60 pb-20 lg:pt-68 lg:pb-28 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-center w-full">
          <div className="max-w-[620px]">
            <Reveal delayMs={90}>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Dr. Alexander Oburoh
              </h1>
            </Reveal>

            <Reveal delayMs={180}>
              <p className="text-lg font-medium text-grey-200 leading-snug mb-6">
                Sustainability &amp; Energy Systems Analyst
                <br />
                Hydrogen &amp; Net Zero Consultant
              </p>
            </Reveal>

            <Reveal delayMs={270}>
              <p className="text-base text-grey-200/90 leading-relaxed mb-9 max-w-xl">
                Helping organisations make evidence-based decisions on hydrogen, carbon
                management, and net-zero transition through research, policy analysis, life
                cycle assessment, and strategic advisory.
              </p>
            </Reveal>

            <Reveal delayMs={360}>
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary: white background, deep navy text, subtle border, slight
                    premium glow on hover only — per the CTA button style brief. */}
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 border border-white/40 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
                >
                  Explore My Work
                  <span aria-hidden="true">→</span>
                </Link>

                {/* Secondary + third: glassmorphism — transparent white layer, subtle
                    white border, backdrop blur, slight hover glow. No neon. */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-white/45 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/cv"
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:shadow-[0_0_20px_rgba(110,231,183,0.12)]"
                >
                  Download CV
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={220} className="hidden lg:block">
            <HeroPortraitFrame />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
