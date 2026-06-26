import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PublicationCard from "@/components/PublicationCard";
import CTASection from "@/components/CTASection";
import { publications, researchFocusAreas } from "@/content/publications";
import { socials } from "@/content/site";

export const metadata: Metadata = {
  title: "Research & Publications | Alexander Oburoh",
  description:
    "Research hub covering blue hydrogen, the UK net-zero transition, life cycle assessment, and energy policy.",
};

const profileLinks = [
  { label: "Google Scholar", href: socials.googleScholar },
  { label: "ORCID", href: socials.orcid },
  { label: "ResearchGate", href: socials.researchGate },
  { label: "LinkedIn", href: socials.linkedin },
];

export default function ResearchPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold text-emerald-400 mb-3">Research</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Research & Publications
          </h1>
          <p className="text-lg text-grey-200 leading-relaxed">
            Research focused on blue hydrogen, the UK net-zero transition, life cycle assessment, and energy
            policy.
          </p>
        </div>
      </section>

      {/* Research focus */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Research Focus" title="Areas of research interest" />
          <div className="mt-6 flex flex-wrap gap-2">
            {researchFocusAreas.map((area) => (
              <span key={area} className="text-sm font-medium px-3 py-1.5 rounded-full bg-blue-grey text-navy-700">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured research */}
      <section className="bg-grey-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Featured Research" title="PhD Research: Blue Hydrogen and the UK Net Zero Transition" />
          <p className="mt-5 text-base text-grey-600 leading-relaxed max-w-2xl">
            Alexander&apos;s PhD at Robert Gordon University examined the role blue hydrogen could play in
            enabling the UK&apos;s net-zero transition — work that underpins much of his current hydrogen
            strategy and policy advisory.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Publications"
            title="Publications and research outputs"
            description="Peer-reviewed journal articles, conference papers, technical reports, and white papers."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {publications.map((pub) => (
              <PublicationCard key={pub.title} publication={pub} />
            ))}
          </div>
          <p className="mt-6 text-sm text-grey-400 italic">
            This list will be updated as new publications are confirmed.
          </p>
        </div>
      </section>

      {/* Research profiles */}
      <section className="bg-grey-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Profiles" title="Research profiles" />
          <div className="mt-6 flex flex-wrap gap-4">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-md border border-grey-200 bg-white text-navy-950 hover:border-emerald-500 transition-colors"
              >
                {link.label}
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Interested in research collaboration, technical advisory, or policy analysis?"
        primaryLabel="Start a Conversation"
      />
    </>
  );
}
