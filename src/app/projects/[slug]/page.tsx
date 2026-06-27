import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { projects } from "@/content/projects";
import { expertiseAreas } from "@/content/expertise";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Alexander Oburoh`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const relatedExpertise = expertiseAreas.filter((e) => e.relatedProjectSlugs.includes(project.slug));

  return (
    <>
      <section className="bg-navy-950 -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-grey-400 hover:text-emerald-400 mb-6 transition-colors"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            All projects
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-emerald-300">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-grey-200 leading-relaxed">{project.summary}</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">Overview</h2>
            <p className="text-base text-grey-600 leading-relaxed">{project.overview}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              Problem / Context
            </h2>
            <p className="text-base text-grey-600 leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              Approach / Methodology
            </h2>
            <p className="text-base text-grey-600 leading-relaxed">{project.approach}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">Key Insights</h2>
            <ul className="space-y-2">
              {project.insights.map((insight) => (
                <li key={insight} className="text-base text-grey-600 leading-relaxed flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  {insight}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              Skills & Methods Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="text-sm px-3 py-1.5 rounded-full bg-grey-100 text-navy-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {relatedExpertise.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
                Related Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {relatedExpertise.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/expertise#${e.slug}`}
                    className="text-sm px-3 py-1.5 rounded-full bg-blue-grey text-navy-700 hover:bg-grey-200 transition-colors"
                  >
                    {e.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-500"
          >
            Discuss a project like this
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CTASection heading="Interested in research collaboration or a similar project?" />
    </>
  );
}
