import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumb from "@/components/Breadcrumb";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services | Sustainability, Hydrogen & Net Zero Advisory",
  description:
    "Sustainability consulting, hydrogen advisory, net-zero strategy, life cycle assessment, and policy analysis services from Alexander Oburoh.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-black -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <p className="text-sm font-semibold mb-3" style={{ color: "#5ac8a7" }}>
            Services
          </p>
          <h1
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f8fafc" }}
          >
            Advisory and consulting services
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
            Practical support for organisations, consultancies, and research teams navigating sustainability,
            hydrogen, and net-zero challenges.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delayMs={(i % 3) * 110}>
                <ServiceCard service={service} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Discuss Your Net-Zero Challenge" />
    </>
  );
}
