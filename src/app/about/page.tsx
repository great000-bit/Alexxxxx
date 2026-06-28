import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CredentialCard from "@/components/CredentialCard";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import PremiumButton from "@/components/PremiumButton";
import { bio, credentials } from "@/content/site";

export const metadata: Metadata = {
  title: "About Alexander Oburoh | Energy Systems & Net Zero Specialist",
  description:
    "Sustainability and energy systems analyst focused on hydrogen, net-zero transition, research, policy, and sustainable impact.",
};

const journey = [
  {
    label: "Academic foundation",
    description: "Built a technical foundation in sustainability and energy systems analysis.",
  },
  {
    label: "PhD research",
    description: "Completed a PhD at Robert Gordon University on blue hydrogen and the UK net-zero transition.",
  },
  {
    label: "Energy transition & hydrogen focus",
    description: "Developed specialist expertise in hydrogen pathways, value chains, and policy analysis.",
  },
  {
    label: "Sustainability & carbon management",
    description: "Extended into life cycle assessment, carbon management, and sustainability reporting.",
  },
  {
    label: "Community leadership & mentorship",
    description: "Took on Trustee and Operations Leader responsibilities at VolunteerNG, alongside academic mentorship.",
  },
];

const focusAreas = [
  "Hydrogen systems",
  "Net-zero strategy",
  "Life cycle assessment",
  "Policy analysis",
  "Industrial decarbonisation",
  "Community impact",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950/80 -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold mb-3" style={{ color: "#5ac8a7" }}>
            About
          </p>
          <h1
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f8fafc" }}
          >
            About Alexander Oburoh
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
            Sustainability and energy systems analyst focused on hydrogen, net-zero transition, research,
            policy, and sustainable impact.
          </p>
        </div>
      </section>

      {/* Professional bio */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <GlassCard className="p-8 sm:p-10">
              <div className="space-y-5">
                {bio.full.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)} className="text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Career / research journey — vertical timeline, glass card per entry */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Journey" title="Career & research journey" />
          </ScrollReveal>
          <div className="mt-12 space-y-6">
            {journey.map((item, i) => (
              <ScrollReveal key={item.label} delayMs={i * 90}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center flex-shrink-0 pt-1">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#5ac8a7" }} />
                    {i < journey.length - 1 && (
                      <span className="w-px flex-1 mt-2" style={{ backgroundColor: "rgba(255,255,255,0.14)" }} />
                    )}
                  </div>
                  <GlassCard className="p-5 flex-1 mb-2">
                    <p className="text-sm font-semibold" style={{ color: "#f8fafc" }}>
                      {item.label}
                    </p>
                    <p className="text-sm mt-1 leading-relaxed" style={{ color: "#94a3b8" }}>
                      {item.description}
                    </p>
                  </GlassCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of focus */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Focus" title="Areas of focus" />
            <div className="mt-8 flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="text-sm font-medium px-4 py-2 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#cbd5e1", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  {area}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Credentials" title="Credentials" />
          </ScrollReveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {credentials.map((c, i) => (
              <ScrollReveal key={c.title} delayMs={i * 80}>
                <CredentialCard title={c.title} detail={c.detail} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond research */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Beyond Research" title="Beyond the technical work" />
            <p className="mt-5 text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
              {bio.beyondResearch}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CV CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <GlassCard className="p-8 sm:p-10 flex flex-wrap gap-4">
              <PremiumButton as={Link} href="/cv" variant="primary">
                <Download size={16} aria-hidden="true" />
                Download CV
              </PremiumButton>
              <PremiumButton as={Link} href="/contact" variant="glass">
                <Mail size={16} aria-hidden="true" />
                Contact Alexander
              </PremiumButton>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <CTASection heading="Let's discuss hydrogen, sustainability, net-zero strategy, or research collaboration." />
    </>
  );
}
