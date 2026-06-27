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
    <section className="py-20">
      <div
        className="mx-auto max-w-2xl px-6 lg:px-8 text-center rounded-2xl p-8 sm:p-10"
        style={{
          backgroundColor: "rgba(7,18,32,0.58)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
        }}
      >
        <h1
          className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4"
          style={{ color: "#f8fafc" }}
        >
          CV coming soon
        </h1>
        <p className="text-base leading-relaxed mb-6" style={{ color: "#cbd5e1" }}>
          A downloadable CV will be available here shortly. In the meantime, get in touch directly and a CV
          can be sent on request.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-950 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
        >
          <Mail size={16} aria-hidden="true" />
          Request CV
        </Link>
      </div>
    </section>
  );
}
