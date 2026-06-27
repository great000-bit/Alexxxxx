import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { socials } from "@/content/site";
import ScrollReveal from "./ScrollReveal";

type CTASectionProps = {
  heading: string;
  primaryLabel?: string;
  primaryHref?: string;
  showLinkedIn?: boolean;
};

export default function CTASection({
  heading,
  primaryLabel = "Get in Touch",
  primaryHref = "/contact",
  showLinkedIn = true,
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal>
          <div
            className="rounded-2xl p-10 sm:p-14 text-center"
            style={{
              backgroundColor: "rgba(7,18,32,0.58)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
            }}
          >
            <h2
              className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-8"
              style={{ color: "#f8fafc" }}
            >
              {heading}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
              >
                {primaryLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              {showLinkedIn && (
                <a
                  href={socials.linkedin}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[transform,border-color] duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    color: "#f8fafc",
                  }}
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Connect on LinkedIn
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
