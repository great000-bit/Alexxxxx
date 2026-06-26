import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { site } from "@/content/site";
import EnergyNetworkVisual from "./EnergyNetworkVisual";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      {/* Background energy-network visual, subtle, decorative only */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <EnergyNetworkVisual className="w-full h-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-emerald-400 mb-4">
              {site.professionalTitle}
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
              {site.positioningStatement}
            </h1>
            <p className="text-lg text-grey-200 leading-relaxed max-w-xl mb-3">
              {site.supportingCopy}
            </p>
            <p className="text-sm font-medium text-emerald-400/90 mb-8">{site.tagline}</p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-navy-950 hover:bg-emerald-400 transition-colors"
              >
                Explore My Work
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/cv"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
              >
                <Mail size={16} aria-hidden="true" />
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
