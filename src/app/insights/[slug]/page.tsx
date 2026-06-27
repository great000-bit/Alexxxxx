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
      <section className="bg-navy-950 -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm text-grey-400 hover:text-emerald-400 mb-6 transition-colors"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            All insights
          </Link>
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-400">{post.category}</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            {post.title}
          </h1>
          <span className="inline-flex items-center gap-1.5 text-sm text-grey-400">
            <Clock size={14} aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-lg text-grey-600 leading-relaxed mb-8">{post.excerpt}</p>
          {post.isPlaceholder && (
            <div className="rounded-lg border border-dashed border-grey-200 bg-grey-50 p-8 text-center">
              <p className="text-sm text-grey-600">
                The full article is being written and will be published here soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection heading="Want to discuss this topic directly?" />
    </>
  );
}
