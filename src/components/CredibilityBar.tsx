import { credentials } from "@/content/site";

export default function CredibilityBar() {
  return (
    <section className="bg-navy-900 border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {credentials.map((c) => (
            <div key={c.title} className="text-center">
              <p className="text-sm font-semibold text-white whitespace-nowrap">{c.title}</p>
              <p className="text-xs text-grey-400 whitespace-nowrap">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
