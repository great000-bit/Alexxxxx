"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HeroBackgroundVideo from "./HeroBackgroundVideo";
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
    <section className="relative -mt-24 bg-navy-950 overflow-hidden">
      <HeroBackgroundVideo />

      {/* Dark overlay between the video and the content, for readability — not a flat
          page background, just enough contrast to keep text legible over the video. */}
      <div className="absolute inset-0 bg-navy-950/55" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-60 pb-20 lg:pt-68 lg:pb-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-center">
          <div className="max-w-[620px]">
            <Reveal delayMs={0}>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm text-grey-200">Open to research, advisory &amp; collaboration</span>
              </div>
            </Reveal>

            <Reveal delayMs={80}>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Dr. Alexander Oburoh
              </h1>
            </Reveal>

            <Reveal delayMs={160}>
              <p className="text-lg font-medium text-grey-200 leading-snug mb-6">
                Sustainability &amp; Energy Systems Analyst
                <br />
                Hydrogen &amp; Net Zero Consultant
              </p>
            </Reveal>

            <Reveal delayMs={240}>
              <p className="text-base text-grey-200/90 leading-relaxed mb-9 max-w-xl">
                Helping organisations make evidence-based decisions on hydrogen, carbon
                management, and net-zero transition through research, policy analysis, life
                cycle assessment, and strategic advisory.
              </p>
            </Reveal>

            <Reveal delayMs={320}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-grey-100"
                >
                  Explore My Work
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-white/60"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/cv"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-white/40"
                >
                  Download CV
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={200} className="hidden lg:block">
            <HeroPortraitFrame />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
