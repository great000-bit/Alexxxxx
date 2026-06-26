import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CredentialCard from "@/components/CredentialCard";
import CTASection from "@/components/CTASection";
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
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold text-emerald-400 mb-3">About</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
            About Alexander Oburoh
          </h1>
          <p className="text-lg text-grey-200 leading-relaxed">
            Sustainability and energy systems analyst focused on hydrogen, net-zero transition, research,
            policy, and sustainable impact.
          </p>
        </div>
      </section>

      {/* Professional bio */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-5">
            {bio.full.map((paragraph) => (
              <p key={paragraph.slice(0, 30)} className="text-base text-grey-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Career / research journey */}
      <section className="bg-grey-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Journey" title="Career & research journey" />
          <div className="mt-10 space-y-8">
            {journey.map((item, i) => (
              <div key={item.label} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  {i < journey.length - 1 && <span className="w-px flex-1 bg-grey-200 mt-1" />}
                </div>
                <div className="pb-2">
                  <p className="text-sm font-semibold text-navy-950">{item.label}</p>
                  <p className="text-sm text-grey-600 mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of focus */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Focus" title="Areas of focus" />
          <div className="mt-8 flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="text-sm font-medium px-4 py-2 rounded-full bg-blue-grey text-navy-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-grey-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Credentials" title="Credentials" />
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {credentials.map((c) => (
              <CredentialCard key={c.title} title={c.title} detail={c.detail} />
            ))}
          </div>
        </div>
      </section>

      {/* Beyond research */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Beyond Research" title="Beyond the technical work" />
          <p className="mt-5 text-base text-grey-600 leading-relaxed">{bio.beyondResearch}</p>
        </div>
      </section>

      {/* CV CTA */}
      <section className="bg-grey-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-wrap gap-4">
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 rounded-md bg-navy-950 px-5 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-grey-200 px-5 py-3 text-sm font-semibold text-navy-950 hover:bg-white transition-colors"
          >
            <Mail size={16} aria-hidden="true" />
            Contact Alexander
          </Link>
        </div>
      </section>

      <CTASection heading="Let's discuss hydrogen, sustainability, net-zero strategy, or research collaboration." />
    </>
  );
}
