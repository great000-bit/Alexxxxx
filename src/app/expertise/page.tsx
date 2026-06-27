import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
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
      <section className="bg-navy-950/80 -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold text-emerald-400 mb-3">Expertise</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical and advisory expertise
          </h1>
          <p className="text-lg text-grey-200 leading-relaxed">
            Where Alexander&apos;s expertise can create value — across hydrogen, net-zero strategy, life
            cycle assessment, value chain analysis, and energy policy.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 divide-y divide-grey-200 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/40 shadow-sm p-8 sm:p-10">
          {expertiseAreas.map((area) => {
            const relatedProjects = projects.filter((p) => area.relatedProjectSlugs.includes(p.slug));
            return (
              <article key={area.slug} id={area.slug} className="py-12 first:pt-0 scroll-mt-24">
                <h2 className="text-2xl font-bold text-navy-950 mb-3">{area.title}</h2>
                <p className="text-base text-grey-600 leading-relaxed mb-6 max-w-2xl">{area.description}</p>

                <p className="text-sm font-semibold text-navy-950 mb-3">Can support:</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {area.canHelpWith.map((item) => (
                    <li key={item} className="text-sm text-grey-600 flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {relatedProjects.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-navy-950 mb-3">Related projects:</p>
                    <div className="flex flex-wrap gap-2">
                      {relatedProjects.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/projects/${p.slug}`}
                          className="text-sm px-3 py-1.5 rounded-full bg-grey-100 text-navy-700 hover:bg-blue-grey transition-colors"
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  href={`/contact?enquiry=consulting&expertise=${area.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-500"
                >
                  Discuss a {area.title} Project
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection heading="Have a project that touches one of these areas? Let's talk." />
    </>
  );
}
