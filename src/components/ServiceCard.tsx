import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-lg border border-grey-200 bg-white p-6">
      <h3 className="text-base font-semibold text-navy-950 mb-2">{service.title}</h3>
      <p className="text-sm text-grey-600 leading-relaxed mb-4">{service.forWho}</p>
      <ul className="space-y-1.5 mb-5">
        {service.canSupport.slice(0, 3).map((item) => (
          <li key={item} className="text-sm text-grey-600 flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={`/contact?enquiry=consulting&service=${service.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-500"
      >
        Discuss This
        <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </div>
  );
}
