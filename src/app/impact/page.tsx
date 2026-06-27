import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ImpactCard from "@/components/ImpactCard";
import CTASection from "@/components/CTASection";
import { volunteerNG, communityLeadership } from "@/content/impact";

export const metadata: Metadata = {
  title: "Leadership & Social Impact | Alexander Oburoh",
  description:
    "Alexander Oburoh's leadership at VolunteerNG, supporting diaspora fundraising, education, and community development.",
};

export default function ImpactPage() {
  return (
    <>
      <section className="bg-navy-950/80 -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold text-emerald-400 mb-3">Leadership & Social Impact</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical expertise, grounded in people
          </h1>
          <p className="text-lg text-grey-200 leading-relaxed">
            Alexander combines technical expertise with leadership, education, mentorship, diaspora
            engagement, and community development.
          </p>
        </div>
      </section>

      {/* VolunteerNG feature */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/40 shadow-sm p-8 sm:p-10">
          <SectionHeading eyebrow="Main Feature" title={`${volunteerNG.role}, ${volunteerNG.organisation}`} />
          <ul className="mt-8 space-y-4">
            {volunteerNG.contributions.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-grey-600 leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Community leadership */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-2xl bg-grey-50/85 backdrop-blur-xl border border-white/40 shadow-sm p-8 sm:p-10">
          <SectionHeading eyebrow="Community Leadership" title="Additional community contributions" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {communityLeadership.map((item) => (
              <ImpactCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Tone note: warm but still premium, per PRD */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/40 shadow-sm p-8 sm:p-10">
          <p className="text-base text-grey-600 leading-relaxed">
            Alexander believes technical expertise and community impact reinforce each other — sustainable
            energy transition depends not only on sound research and policy, but on the people, partnerships,
            and trust built along the way.
          </p>
        </div>
      </section>

      <CTASection heading="Interested in partnership or community collaboration?" />
    </>
  );
}
