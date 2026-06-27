import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ImpactCard from "@/components/ImpactCard";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { volunteerNG, communityLeadership } from "@/content/impact";

export const metadata: Metadata = {
  title: "Leadership & Social Impact | Alexander Oburoh",
  description:
    "Alexander Oburoh's leadership at VolunteerNG, supporting diaspora fundraising, education, and community development.",
};

const glassPanel = {
  backgroundColor: "rgba(7,18,32,0.58)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
};

export default function ImpactPage() {
  return (
    <>
      <section className="bg-navy-950/80 -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold mb-3" style={{ color: "#5ac8a7" }}>
            Leadership & Social Impact
          </p>
          <h1
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f8fafc" }}
          >
            Technical expertise, grounded in people
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
            Alexander combines technical expertise with leadership, education, mentorship, diaspora
            engagement, and community development.
          </p>
        </div>
      </section>

      {/* Split: VolunteerNG story on the left, glass stat/contribution cards on the right */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <SectionHeading eyebrow="Main Feature" title={`${volunteerNG.role}, ${volunteerNG.organisation}`} />
              <p className="mt-5 text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                Alexander believes technical expertise and community impact reinforce each other &mdash;
                sustainable energy transition depends not only on sound research and policy, but on the
                people, partnerships, and trust built along the way.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delayMs={120}>
              <div className="rounded-2xl p-8" style={glassPanel}>
                <ul className="space-y-4">
                  {volunteerNG.contributions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#5ac8a7" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Community leadership */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Community Leadership" title="Additional community contributions" />
          </ScrollReveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {communityLeadership.map((item, i) => (
              <ScrollReveal key={item.title} delayMs={i * 90}>
                <ImpactCard title={item.title} description={item.description} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Interested in partnership or community collaboration?" />
    </>
  );
}
