import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div
      className="rounded-2xl p-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1"
      style={{
        backgroundColor: "rgba(7,18,32,0.58)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
      }}
    >
      <span className="font-[family-name:var(--font-heading)] text-sm font-semibold" style={{ color: "#5ac8a7" }}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 text-base font-semibold mb-2" style={{ color: "#f8fafc" }}>
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
        {service.forWho}
      </p>
      <ul className="space-y-1.5 mb-5">
        {service.canSupport.slice(0, 3).map((item) => (
          <li key={item} className="text-sm flex items-start gap-2" style={{ color: "#cbd5e1" }}>
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#5ac8a7" }} />
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={`/contact?enquiry=consulting&service=${service.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium"
        style={{ color: "#5ac8a7" }}
      >
        Discuss This
        <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </div>
  );
}
