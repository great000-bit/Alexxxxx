import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import PremiumButton from "@/components/PremiumButton";

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
      <GlassCard className="mx-auto max-w-2xl px-6 lg:px-8 text-center p-8 sm:p-10">
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
        <PremiumButton as={Link} href="/contact" variant="primary" className="relative z-10">
          <Mail size={16} aria-hidden="true" />
          Request CV
        </PremiumButton>
      </GlassCard>
    </section>
  );
}
