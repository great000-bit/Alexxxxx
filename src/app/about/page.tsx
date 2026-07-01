import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CredentialCard from "@/components/CredentialCard";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
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
      {/* Page header */}
      <section className="bg-black -mt-24 pt-40 pb-8 lg:pt-44 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        </div>
      </section>

      {/* Editorial split: bio text left, hex image mask right */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-start">
            <ScrollReveal direction="left">
              <p className="text-sm font-semibold mb-3" style={{ color: "#5ac8a7" }}>
                About
              </p>
              <h1
                className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-6"
                style={{ color: "#f8fafc" }}
              >
                About Alexander Oburoh
              </h1>
              <div className="space-y-5">
                {bio.full.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)} className="text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Focus area pills */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs font-medium px-3.5 py-1.5 rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "#cbd5e1", border: "1px solid rgba(255,255,255,0.10)" }}
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-2xl font-bold" style={{ color: "#5ac8a7" }}>
                    PhD
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>
                    Robert Gordon University
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-2xl font-bold" style={{ color: "#5ac8a7" }}>
                    PRINCE2
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>
                    Certified PM
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-2xl font-bold" style={{ color: "#5ac8a7" }}>
                    6+
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>
                    Focus areas
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Editorial portrait — clean rounded rectangle, no mask/scattered shapes */}
            <ScrollReveal direction="right" delayMs={200}>
              <div className="lg:pt-12">
                <div
                  className="relative w-full max-w-[480px] mx-auto lg:mx-0 lg:ml-auto overflow-hidden"
                  style={{
                    aspectRatio: "4 / 5",
                    borderRadius: "32px",
                    border: "1px solid rgba(255,255,255,0.14)",
                    boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
                  }}
                >
                  <Image
                    src="/images/alexander-oburoh.jpg"
                    alt="Dr. Alexander Oburoh"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 480px, 40vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Career / research journey — vertical timeline */}
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

      {/* Credentials — 2-col grid */}
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

      {/* Continue the conversation — premium CTA block replacing the old button-only box */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div
              className="relative overflow-hidden rounded-[32px] p-8 sm:p-12"
              style={{
                background: "linear-gradient(135deg, #0c1f33 0%, #050505 100%)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
              }}
            >
              {/* Restrained ambient accent — not a neon glow, just a soft light source */}
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(14,107,87,0.20) 0%, transparent 70%)",
                  filter: "blur(4px)",
                }}
              />

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-md">
                  <h3
                    className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-3"
                    style={{ color: "#ffffff" }}
                  >
                    Continue the conversation
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                    Access Alexander&apos;s CV or start a conversation about sustainability, hydrogen,
                    net-zero strategy, or research collaboration.
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 flex-shrink-0">
                  {/* TODO: CV file not uploaded yet — this href/download attribute is wired and
                      ready. Once /public/cv/alexander-oburoh-cv.pdf exists, this button works with
                      no further changes needed. */}
                  <a
                    href="/cv/alexander-oburoh-cv.pdf"
                    download="Alexander-Oburoh-CV.pdf"
                    className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.16)]"
                    style={{ backgroundColor: "#ffffff", color: "#071a2d" }}
                  >
                    <Download size={16} aria-hidden="true" className="transition-colors duration-200 group-hover:text-[#0e6b57]" />
                    <span className="transition-colors duration-200 group-hover:text-[#0e6b57]">Download CV</span>
                  </a>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(14,107,87,0.42)] hover:shadow-[0_0_24px_rgba(90,200,167,0.16)]"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.065)",
                      border: "1px solid rgba(229,231,235,0.16)",
                      color: "#ffffff",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                    }}
                  >
                    <Mail size={16} aria-hidden="true" />
                    Contact Alexander
                    <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection heading="Let's discuss hydrogen, sustainability, net-zero strategy, or research collaboration." />
    </>
  );
}
