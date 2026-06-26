import { Award } from "lucide-react";

export default function CredentialCard({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-grey-200 bg-white p-5">
      <div className="rounded-md bg-emerald-50 p-2 flex-shrink-0">
        <Award size={18} className="text-emerald-600" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold text-navy-950">{title}</p>
        <p className="text-xs text-grey-600 mt-0.5">{detail}</p>
      </div>
    </div>
  );
}
