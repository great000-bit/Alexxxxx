import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/content/blog";
import GlassCard from "./GlassCard";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <GlassCard className="flex flex-col p-6">
      <span className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#5ac8a7" }}>
        {post.category}
      </span>
      <h3 className="text-base font-semibold mb-2 leading-snug" style={{ color: "#f8fafc" }}>
        {post.title}
      </h3>
      <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#94a3b8" }}>
        {post.excerpt}
      </p>
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs" style={{ color: "#64748b" }}>
          <Clock size={13} aria-hidden="true" />
          {post.readingTime}
        </span>
        {post.isPlaceholder ? (
          <span className="text-xs italic" style={{ color: "#64748b" }}>
            Coming soon
          </span>
        ) : (
          <Link
            href={`/insights/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "#5ac8a7" }}
          >
            Read Insight
            <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </GlassCard>
  );
}
