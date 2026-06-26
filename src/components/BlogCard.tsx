import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/content/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-col rounded-lg border border-grey-200 bg-white p-6">
      <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-3">
        {post.category}
      </span>
      <h3 className="text-base font-semibold text-navy-950 mb-2 leading-snug">{post.title}</h3>
      <p className="text-sm text-grey-600 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs text-grey-400">
          <Clock size={13} aria-hidden="true" />
          {post.readingTime}
        </span>
        {post.isPlaceholder ? (
          <span className="text-xs text-grey-400 italic">Coming soon</span>
        ) : (
          <Link
            href={`/insights/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-500"
          >
            Read Insight
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
}
