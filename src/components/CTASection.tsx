import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type CTASectionProps = {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/**
 * Premium CTA band matching the company website style: open centered layout,
 * large bold headline, supporting text, two clean buttons. No enclosing card or
 * glass box. Calm, spacious, consultant-grade feel.
 */
export default function CTASection({
  heading = "Let\u2019s discuss energy transition, sustainability, or research collaboration.",
  description = "For consulting, research collaboration, speaking, or advisory enquiries, share the context, timeline, and the support you need.",
  primaryLabel = "Get in Touch",
  primaryHref = "/contact",
  secondaryLabel = "Explore Research",
  secondaryHref = "/research",
}: CTASectionProps) {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Subtle decorative side elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-px opacity-[0.06]" style={{ background: "linear-gradient(to bottom, transparent, #5ac8a7, transparent)" }} aria-hidden="true" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-px opacity-[0.06]" style={{ background: "linear-gradient(to bottom, transparent, #5ac8a7, transparent)" }} aria-hidden="true" />

      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight"
            style={{ color: "#f8fafc" }}
          >
            {heading}
          </h2>
          <p
            className="mt-6 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: "#94a3b8" }}
          >
            {description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Primary: white bg, deep navy text */}
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold transition-[transform,box-shadow,color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.16)] hover:text-[#0e6b57]"
              style={{ backgroundColor: "#ffffff", color: "#071a2d" }}
            >
              {primaryLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            {/* Secondary: glass outline */}
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(14,107,87,0.42)] hover:shadow-[0_0_24px_rgba(90,200,167,0.16)]"
              style={{
                backgroundColor: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(229,231,235,0.18)",
                backdropFilter: "blur(16px)",
                color: "#ffffff",
              }}
            >
              {secondaryLabel}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
