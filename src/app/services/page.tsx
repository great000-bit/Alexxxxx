import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services | Sustainability, Hydrogen & Net Zero Advisory",
  description:
    "Sustainability consulting, hydrogen advisory, net-zero strategy, life cycle assessment, and policy analysis services from Alexander Oburoh.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold text-emerald-400 mb-3">Services</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Advisory and consulting services
          </h1>
          <p className="text-lg text-grey-200 leading-relaxed">
            Practical support for organisations, consultancies, and research teams navigating sustainability,
            hydrogen, and net-zero challenges.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Discuss Your Net-Zero Challenge" />
    </>
  );
}
