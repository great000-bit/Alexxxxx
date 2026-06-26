import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { speakingTopics } from "@/content/speaking";

export const metadata: Metadata = {
  title: "Speaking & Media | Alexander Oburoh",
  description:
    "Alexander Oburoh is available for talks, panels, and commentary on hydrogen, sustainability, net-zero transition, and industrial decarbonisation.",
};

export default function SpeakingPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold text-emerald-400 mb-3">Speaking & Media</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Speaking & Media
          </h1>
          <p className="text-lg text-grey-200 leading-relaxed">
            Available for conference presentations, invited talks, workshops, panel discussions, and
            commentary on hydrogen, sustainability, and industrial decarbonisation.
          </p>
        </div>
      </section>

      {/* Speaking topics */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Topics" title="Speaking topics" />
          <div className="mt-6 flex flex-wrap gap-2">
            {speakingTopics.map((topic) => (
              <span key={topic} className="text-sm font-medium px-3 py-1.5 rounded-full bg-blue-grey text-navy-700">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Selected talks / conferences - future ready */}
      <section className="bg-grey-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Selected Talks" title="Conferences, workshops & panels" />
          <div className="mt-8 rounded-lg border border-dashed border-grey-200 bg-white p-8 text-center">
            <p className="text-sm text-grey-600">
              Speaking engagements will be listed here as they are confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* Media enquiries */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Media" title="Media enquiries" />
          <p className="mt-5 text-base text-grey-600 leading-relaxed mb-6">
            For media enquiries, commentary requests, or speaking invitations, get in touch directly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact?enquiry=speaking"
              className="inline-flex items-center gap-2 rounded-md bg-navy-950 px-5 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
            >
              <Mail size={16} aria-hidden="true" />
              Contact for Speaking
            </Link>
            {/* TODO: link to a real downloadable speaker bio PDF once one is produced */}
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 rounded-md border border-grey-200 px-5 py-3 text-sm font-semibold text-navy-950 hover:bg-grey-50 transition-colors"
            >
              <Download size={16} aria-hidden="true" />
              Download Speaker Bio
            </Link>
          </div>
        </div>
      </section>

      <CTASection heading="Invite Alexander to speak at your event." />
    </>
  );
}
