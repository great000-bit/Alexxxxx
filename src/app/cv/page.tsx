import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Download CV | Alexander Oburoh",
  description: "Download Alexander Oburoh's CV.",
};

// TODO: no CV file has been provided yet. Once a real PDF exists, place it in /public
// (e.g. /public/alexander-oburoh-cv.pdf) and replace this page with a direct download
// link/button, e.g.:
//   <a href="/alexander-oburoh-cv.pdf" download className="...">Download CV (PDF)</a>
export default function CVPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-navy-950 mb-4">
          CV coming soon
        </h1>
        <p className="text-base text-grey-600 leading-relaxed mb-6">
          A downloadable CV will be available here shortly. In the meantime, get in touch directly and a CV
          can be sent on request.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-navy-950 px-5 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
        >
          <Mail size={16} aria-hidden="true" />
          Request CV
        </Link>
      </div>
    </section>
  );
}
