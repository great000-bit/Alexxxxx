import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import Breadcrumb from "@/components/Breadcrumb";
import { expertiseAreas } from "@/content/expertise";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Expertise | Hydrogen, Net Zero, LCA & Energy Policy",
  description:
    "Alexander Oburoh's technical and advisory expertise across hydrogen, net-zero strategy, life cycle assessment, value chain analysis, and energy policy.",
};

export default function ExpertisePage() {
  return (
    <>
      <section className="bg-black -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Expertise" }]} />
          <p className="text-sm font-semibold mb-3" style={{ color: "#5ac8a7" }}>
            Expertise
          </p>
          <h1
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f8fafc" }}
          >
            Technical and advisory expertise
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
            Where Alexander&apos;s expertise can create value — across hydrogen, net-zero strategy, life
            cycle assessment, value chain analysis, and energy policy.
          </p>
        </div>
      </section>

      {/* Bento-style quick overview, jump links to the detailed anchors below */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertiseAreas.map((area, i) => (
              <ScrollReveal
                key={area.slug}
                delayMs={(i % 4) * 90}
                className={i % 5 === 0 ? "sm:col-span-2" : ""}
              >
                <GlassCard as="a" href={`#${area.slug}`} className="block p-6 h-full">
                  <span className="font-[family-name:var(--font-heading)] text-sm font-semibold" style={{ color: "#5ac8a7" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold" style={{ color: "#f8fafc" }}>
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {area.shortDescription}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections, one per area */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-6">
          {expertiseAreas.map((area, i) => {
            const relatedProjects = projects.filter((p) => area.relatedProjectSlugs.includes(p.slug));
            return (
              <ScrollReveal key={area.slug} delayMs={Math.min(i, 4) * 60}>
                <GlassCard as="article" id={area.slug} className="p-8 sm:p-10 scroll-mt-24">
                  <h2
                    className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3"
                    style={{ color: "#f8fafc" }}
                  >
                    {area.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-6 max-w-2xl" style={{ color: "#cbd5e1" }}>
                    {area.description}
                  </p>

                  <p className="relative z-10 text-sm font-semibold mb-3" style={{ color: "#f8fafc" }}>
                    Can support:
                  </p>
                  <ul className="relative z-10 grid sm:grid-cols-2 gap-2 mb-6">
                    {area.canHelpWith.map((item) => (
                      <li key={item} className="text-sm flex items-start gap-2" style={{ color: "#cbd5e1" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#5ac8a7" }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {relatedProjects.length > 0 && (
                    <div className="relative z-10 mb-6">
                      <p className="text-sm font-semibold mb-3" style={{ color: "#f8fafc" }}>
                        Related projects:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {relatedProjects.map((p) => (
                          <Link
                            key={p.slug}
                            href={`/projects/${p.slug}`}
                            className="text-sm px-3 py-1.5 rounded-full transition-colors"
                            style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#cbd5e1" }}
                          >
                            {p.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    href={`/contact?enquiry=consulting&expertise=${area.slug}`}
                    className="relative z-10 inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "#5ac8a7" }}
                  >
                    Discuss a {area.title} Project
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <CTASection heading="Have a project that touches one of these areas? Let's talk." />
    </>
  );
}
