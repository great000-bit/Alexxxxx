import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { socials } from "@/content/site";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import PremiumButton from "./PremiumButton";

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
          <GlassCard className="p-10 sm:p-14 text-center">
            <h2
              className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-8"
              style={{ color: "#f8fafc" }}
            >
              {heading}
            </h2>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
              <PremiumButton as={Link} href={primaryHref} variant="primary" showArrow>
                {primaryLabel}
              </PremiumButton>
              {showLinkedIn && (
                <PremiumButton as="a" href={socials.linkedin} variant="glass">
                  <ExternalLink size={16} aria-hidden="true" />
                  Connect on LinkedIn
                </PremiumButton>
              )}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
