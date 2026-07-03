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
  title: { absolute: "About Dr. Alexander Oburoh | Sustainability & Energy Systems" },
  description:
    "Learn about Dr. Alexander Oburoh's work in hydrogen, net-zero strategy, life cycle assessment, energy policy, sustainability research, and community leadership.",
  alternates: { canonical: "/about" },
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

const faqs = [
  {
    question: "What does Dr. Alexander Oburoh specialise in?",
    answer:
      "Dr. Alexander Oburoh specialises in hydrogen, net-zero transition, life cycle assessment, carbon management, value chain analysis, and energy policy, with a focus on industrial decarbonisation.",
  },
  {
    question: "What is his research focus?",
    answer:
      "His research centres on blue hydrogen and the UK's net-zero transition, examined through his PhD at Robert Gordon University, alongside broader work in sustainable energy systems and industrial decarbonisation.",
  },
  {
    question: "Does Alexander Oburoh provide consulting or advisory support?",
    answer:
      "Yes. He provides consulting and technical advisory support across hydrogen strategy, sustainability, life cycle assessment, and net-zero planning for organisations navigating the energy transition.",
  },
  {
    question: "How can organisations contact him for research collaboration?",
    answer:
      "Organisations can reach out directly via the contact page or by email to discuss research collaboration, consulting, speaking, or advisory enquiries.",
  },
  {
    question: "Where can I find his research profiles?",
    answer:
      "His research and professional profiles are linked in the footer and on the Research page, including Google Scholar, Medium, and LinkedIn.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

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
                    alt="Dr. Alexander Oburoh, Hydrogen and Net Zero Consultant"
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

      {/* Frequently asked questions — GEO/entity clarity + FAQPage schema */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <ScrollReveal>
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
            <div className="mt-8 divide-y" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
              {faqs.map((faq) => (
                <div key={faq.question} className="py-6 first:pt-0">
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#f8fafc" }}>
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Continue the conversation — image itself is the CTA container/background */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="group relative overflow-hidden rounded-[32px] min-h-[360px] sm:min-h-[400px] shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition-shadow duration-700 hover:shadow-[0_32px_100px_rgba(0,0,0,0.32)]">
              <Image
                src="/images/alexander-oburoh-speaking.jpg"
                alt="Dr. Alexander Oburoh speaking at the Canadian Hydrogen Convention"
                fill
                className="object-cover object-center transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-75"
                sizes="(max-width: 768px) 100vw, 896px"
              />

              {/* Subtle default overlay for text readability, darkens slightly on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 transition-colors duration-700"
                style={{ backgroundColor: "rgba(0,0,0,0.32)" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ backgroundColor: "rgba(0,0,0,0.16)" }}
              />

              {/* Frosted-glass effect on hover only */}
              <div
                aria-hidden="true"
                className="absolute inset-0 backdrop-blur-0 transition-[backdrop-filter] duration-700 group-hover:backdrop-blur-[8px]"
              />

              {/* Fluid glass sweep — one soft light band, right to left, on hover only */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:[animation:fluid-sweep_1100ms_ease-out_1_forwards]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(90,200,167,0.06) 25%, rgba(255,255,255,0.10) 45%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0) 100%)",
                  backgroundSize: "60% 100%",
                  backgroundRepeat: "no-repeat",
                  filter: "blur(18px)",
                }}
              />

              {/* Restrained emerald glow ring on hover — not neon */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[32px] pointer-events-none transition-[box-shadow] duration-700"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[32px] pointer-events-none opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ boxShadow: "inset 0 0 0 1px rgba(90,200,167,0.35)" }}
              />

              <div className="relative z-10 h-full p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="max-w-md">
                  <h3
                    className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-3"
                    style={{ color: "#ffffff", textShadow: "0 2px 12px rgba(0,0,0,0.35)" }}
                  >
                    Continue the conversation
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#e5e7eb", textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
                  >
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
                    className="group/btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                    style={{ backgroundColor: "#ffffff", color: "#071a2d" }}
                  >
                    <Download size={16} aria-hidden="true" className="transition-colors duration-200 group-hover/btn:text-[#0e6b57]" />
                    <span className="transition-colors duration-200 group-hover/btn:text-[#0e6b57]">Download CV</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(14,107,87,0.45)]"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.24)",
                      color: "#ffffff",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                    }}
                  >
                    <Mail size={16} aria-hidden="true" />
                    Contact Alexander
                    <ArrowUpRight size={14} aria-hidden="true" />
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
