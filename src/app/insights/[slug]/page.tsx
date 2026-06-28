import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import CTASection from "@/components/CTASection";
import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts } from "@/content/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Alexander Oburoh`,
    description: post.excerpt,
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-black -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: post.title },
            ]}
          />
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#5ac8a7" }}>
            {post.category}
          </span>
          <h1
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mt-3 mb-4"
            style={{ color: "#f8fafc" }}
          >
            {post.title}
          </h1>
          <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: "#94a3b8" }}>
            <Clock size={14} aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <GlassCard className="p-8 sm:p-10">
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#cbd5e1" }}>
                {post.excerpt}
              </p>
              {post.isPlaceholder && (
                <div
                  className="relative z-10 rounded-xl p-8 text-center"
                  style={{ border: "1px dashed rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <p className="text-sm" style={{ color: "#94a3b8" }}>
                    The full article is being written and will be published here soon.
                  </p>
                </div>
              )}
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <CTASection heading="Want to discuss this topic directly?" />
    </>
  );
}
