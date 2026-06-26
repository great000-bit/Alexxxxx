import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { socials } from "@/content/site";

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
    <section className="bg-navy-950 py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-white mb-8">
          {heading}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-emerald-400 transition-colors"
          >
            {primaryLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          {showLinkedIn && (
            <a
              href={socials.linkedin}
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Connect on LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
