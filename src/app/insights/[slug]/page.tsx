import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import CTASection from "@/components/CTASection";
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
      <section className="bg-navy-950/80 -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm mb-6 transition-colors"
            style={{ color: "#94a3b8" }}
          >
            <ArrowLeft size={14} aria-hidden="true" />
            All insights
          </Link>
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
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              backgroundColor: "rgba(7,18,32,0.58)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
            }}
          >
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#cbd5e1" }}>
              {post.excerpt}
            </p>
            {post.isPlaceholder && (
              <div
                className="rounded-xl p-8 text-center"
                style={{ border: "1px dashed rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <p className="text-sm" style={{ color: "#94a3b8" }}>
                  The full article is being written and will be published here soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection heading="Want to discuss this topic directly?" />
    </>
  );
}
