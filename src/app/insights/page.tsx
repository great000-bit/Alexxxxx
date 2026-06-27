import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Insights | Alexander Oburoh",
  description:
    "Thinking on hydrogen, net zero, industrial decarbonisation, energy policy, and sustainability from Alexander Oburoh.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-navy-950 -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold text-emerald-400 mb-3">Insights</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Insights
          </h1>
          <p className="text-lg text-grey-200 leading-relaxed">
            Thinking on hydrogen, net zero, industrial decarbonisation, energy policy, and sustainability.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <p className="mt-8 text-sm text-grey-400 italic">
            These are upcoming article topics — full pieces will be published here.
          </p>
        </div>
      </section>

      <CTASection heading="Have a question or topic you'd like covered? Get in touch." />
    </>
  );
}
