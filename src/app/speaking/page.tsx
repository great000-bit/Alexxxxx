import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumButton from "@/components/PremiumButton";
import Breadcrumb from "@/components/Breadcrumb";
import { speakingTopics } from "@/content/speaking";

export const metadata: Metadata = {
  title: "Speaking & Media | Alexander Oburoh",
  description:
    "Alexander Oburoh is available for talks, panels, and commentary on hydrogen, sustainability, net-zero transition, and industrial decarbonisation.",
};

export default function SpeakingPage() {
  return (
    <>
      <section className="bg-black -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Speaking & Media" }]} />
          <p className="text-sm font-semibold mb-3" style={{ color: "#5ac8a7" }}>
            Speaking & Media
          </p>
          <h1
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f8fafc" }}
          >
            Speaking & Media
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
            Available for conference presentations, invited talks, workshops, panel discussions, and
            commentary on hydrogen, sustainability, and industrial decarbonisation.
          </p>
        </div>
      </section>

      {/* Speaking topics */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Topics" title="Speaking topics" />
            <div className="mt-6 flex flex-wrap gap-2">
              {speakingTopics.map((topic) => (
                <span
                  key={topic}
                  className="text-sm font-medium px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#cbd5e1" }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Selected talks / conferences - future ready. Intentionally dashed/empty-state
          styling here, not the standard GlassCard pattern, since this is a placeholder
          rather than content-bearing glass panel. */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Selected Talks" title="Conferences, workshops & panels" />
            <div
              className="mt-8 rounded-2xl p-8 text-center"
              style={{
                backgroundColor: "rgba(7,18,32,0.58)",
                backdropFilter: "blur(20px)",
                border: "1px dashed rgba(255,255,255,0.18)",
              }}
            >
              <p className="text-sm" style={{ color: "#94a3b8" }}>
                Speaking engagements will be listed here as they are confirmed.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Media enquiries */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Media" title="Media enquiries" />
            <p className="mt-5 text-base leading-relaxed mb-6" style={{ color: "#cbd5e1" }}>
              For media enquiries, commentary requests, or speaking invitations, get in touch directly.
            </p>
            <div className="flex flex-wrap gap-4">
              <PremiumButton as={Link} href="/contact?enquiry=speaking" variant="primary">
                <Mail size={16} aria-hidden="true" />
                Contact for Speaking
              </PremiumButton>
              {/* TODO: link to a real downloadable speaker bio PDF once one is produced */}
              <PremiumButton as={Link} href="/cv" variant="glass">
                <Download size={16} aria-hidden="true" />
                Download Speaker Bio
              </PremiumButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection heading="Invite Alexander to speak at your event." />
    </>
  );
}
