import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PublicationCard from "@/components/PublicationCard";
import ResearchProfilesSection from "@/components/ResearchProfilesSection";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import Breadcrumb from "@/components/Breadcrumb";
import { publications, researchFocusAreas } from "@/content/publications";

export const metadata: Metadata = {
  title: { absolute: "Research | Dr. Alexander Oburoh" },
  description:
    "Research outputs, publications, technical reports, and academic work by Dr. Alexander Oburoh on hydrogen, net-zero transition, and sustainable energy systems.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <>
      <section className="bg-black -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Research" }]} />
          <p className="text-sm font-semibold mb-3" style={{ color: "#5ac8a7" }}>
            Research
          </p>
          <h1
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f8fafc" }}
          >
            Research & Publications
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
            Research focused on blue hydrogen, the UK net-zero transition, life cycle assessment, and energy
            policy.
          </p>
        </div>
      </section>

      {/* Editorial split: research focus + featured research on the left, stacked
          publication cards on the right — matches the brief's "left heading and
          positioning, right timeline/stacked publication cards" spec. */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
            <ScrollReveal direction="left">
              <SectionHeading eyebrow="Research Focus" title="Areas of research interest" />
              <div className="mt-6 flex flex-wrap gap-2">
                {researchFocusAreas.map((area) => (
                  <span
                    key={area}
                    className="text-sm font-medium px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#cbd5e1" }}
                  >
                    {area}
                  </span>
                ))}
              </div>

              <GlassCard className="mt-10 p-7">
                <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#c6a15b" }}>
                  Featured Research
                </p>
                <h2
                  className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3"
                  style={{ color: "#f8fafc" }}
                >
                  PhD Research: Blue Hydrogen and the UK Net Zero Transition
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
                  Alexander&apos;s PhD at Robert Gordon University examined the role blue hydrogen could play
                  in enabling the UK&apos;s net-zero transition, work that underpins much of his current
                  hydrogen strategy and policy advisory.
                </p>
              </GlassCard>

            </ScrollReveal>

            <ScrollReveal direction="right" delayMs={120}>
              <p className="text-sm font-semibold mb-4" style={{ color: "#f8fafc" }}>
                Publications and research outputs
              </p>
              <div className="space-y-4">
                {publications.map((pub, i) => (
                  <ScrollReveal key={pub.title} direction="right" delayMs={120 + i * 80}>
                    <PublicationCard publication={pub} />
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ResearchProfilesSection />

      <CTASection
        heading="Interested in research collaboration, technical advisory, or policy analysis?"
        primaryLabel="Start a Conversation"
      />
    </>
  );
}
