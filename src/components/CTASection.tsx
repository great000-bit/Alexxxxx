import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

type CTASectionProps = {
  heading: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/**
 * Unified premium CTA band — dark glass panel with strong heading, short paragraph,
 * white primary button, glass secondary button. Fades into surrounding section via
 * the section-fade class. Matches the company website CTA style with Alexander's colours.
 */
export default function CTASection({
  heading,
  description = "Whether it's a consulting enquiry, research collaboration, or speaking invitation — let's connect.",
  primaryLabel = "Get in Touch",
  primaryHref = "/contact",
  secondaryLabel = "Explore Projects",
  secondaryHref = "/projects",
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <ScrollReveal>
          <div
            className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center"
            style={{
              backgroundColor: "rgba(7,18,32,0.65)",
              backdropFilter: "blur(24px) saturate(135%)",
              WebkitBackdropFilter: "blur(24px) saturate(135%)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 32px 100px rgba(0,0,0,0.3)",
            }}
          >
            {/* Subtle ambient glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] blur-3xl opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(90,200,167,0.5) 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            <h2
              className="relative font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 max-w-2xl mx-auto"
              style={{ color: "#f8fafc" }}
            >
              {heading}
            </h2>
            <p
              className="relative text-base leading-relaxed mb-9 max-w-lg mx-auto"
              style={{ color: "#94a3b8" }}
            >
              {description}
            </p>

            <div className="relative flex flex-wrap items-center justify-center gap-4">
              {/* Primary: white bg, deep navy text */}
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-[transform,box-shadow,color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.16)] hover:text-[#0e6b57]"
                style={{ backgroundColor: "#ffffff", color: "#071a2d" }}
              >
                {primaryLabel}
                <span aria-hidden="true">→</span>
              </Link>

              {/* Secondary: glass */}
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold border border-[rgba(255,255,255,0.16)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(14,107,87,0.42)] hover:shadow-[0_0_24px_rgba(90,200,167,0.16)]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.075)",
                  backdropFilter: "blur(16px)",
                  color: "#f8fafc",
                }}
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
