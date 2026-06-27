"use client";

import { useState } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Mail, ExternalLink, BookOpen, FileText } from "lucide-react";
import { submitContactForm } from "@/lib/contact";
import { site, socials } from "@/content/site";
import ScrollReveal from "@/components/ScrollReveal";

const enquiryTypes = [
  "Consulting",
  "Job / recruitment opportunity",
  "Research collaboration",
  "Speaking or media",
  "Community / VolunteerNG",
  "General enquiry",
];

// Exact field styling per the contact section brief: dark translucent fields, soft
// border, white text, teal focus state.
const fieldStyle = {
  backgroundColor: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#ffffff",
};

function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const presetEnquiry = searchParams.get("enquiry");

  const presetMap: Record<string, string> = {
    consulting: "Consulting",
    speaking: "Speaking or media",
    research: "Research collaboration",
    community: "Community / VolunteerNG",
  };

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    organisation: "",
    role: "",
    enquiryType: presetMap[presetEnquiry ?? ""] ?? "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.enquiryType) newErrors.enquiryType = "Select an enquiry type";
    if (!form.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const { ok } = await submitContactForm(form);
    if (ok) {
      setStatus("success");
      setForm({ fullName: "", email: "", organisation: "", role: "", enquiryType: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-2xl p-8 text-center"
        style={{ backgroundColor: "rgba(90,200,167,0.08)", border: "1px solid rgba(90,200,167,0.3)" }}
      >
        <p className="text-base font-semibold mb-2" style={{ color: "#f8fafc" }}>
          Thank you for reaching out.
        </p>
        <p className="text-sm" style={{ color: "#cbd5e1" }}>
          Alexander will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1.5" style={{ color: "#f8fafc" }}>
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange("fullName")}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[#5ac8a7]"
            style={fieldStyle}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-xs mt-1" style={{ color: "#f87171" }}>
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: "#f8fafc" }}>
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[#5ac8a7]"
            style={fieldStyle}
          />
          {errors.email && (
            <p id="email-error" className="text-xs mt-1" style={{ color: "#f87171" }}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="organisation" className="block text-sm font-medium mb-1.5" style={{ color: "#f8fafc" }}>
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            value={form.organisation}
            onChange={handleChange("organisation")}
            className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[#5ac8a7]"
            style={fieldStyle}
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium mb-1.5" style={{ color: "#f8fafc" }}>
            Role / title
          </label>
          <input
            id="role"
            name="role"
            type="text"
            value={form.role}
            onChange={handleChange("role")}
            className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[#5ac8a7]"
            style={fieldStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="enquiryType" className="block text-sm font-medium mb-1.5" style={{ color: "#f8fafc" }}>
          Enquiry type <span aria-hidden="true">*</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={form.enquiryType}
          onChange={handleChange("enquiryType")}
          aria-invalid={!!errors.enquiryType}
          aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}
          className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[#5ac8a7]"
          style={{ ...fieldStyle, colorScheme: "dark" }}
        >
          <option value="" style={{ color: "#0a1628" }}>
            Select an enquiry type
          </option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type} style={{ color: "#0a1628" }}>
              {type}
            </option>
          ))}
        </select>
        {errors.enquiryType && (
          <p id="enquiryType-error" className="text-xs mt-1" style={{ color: "#f87171" }}>
            {errors.enquiryType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: "#f8fafc" }}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none resize-none transition-colors focus:border-[#5ac8a7]"
          style={fieldStyle}
        />
        {errors.message && (
          <p id="message-error" className="text-xs mt-1" style={{ color: "#f87171" }}>
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm" style={{ color: "#f87171" }}>
          Something went wrong. Please try again or email directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && <Send size={16} aria-hidden="true" />}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950/80 -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold mb-3" style={{ color: "#5ac8a7" }}>
            Contact
          </p>
          <h1
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f8fafc" }}
          >
            Get in touch
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
            Whether it&apos;s a consulting enquiry, a job opportunity, a research collaboration, or a speaking
            invitation — Alexander will respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Premium dark glass split panel: form left, direct contact methods right —
          the conversion-focused final section per the contact redesign brief. */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div
              className="rounded-2xl p-8 sm:p-12"
              style={{
                backgroundColor: "rgba(7,18,32,0.58)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
              }}
            >
              <div className="grid lg:grid-cols-[1fr_320px] gap-14">
                <Suspense fallback={<div className="text-sm" style={{ color: "#94a3b8" }}>Loading form…</div>}>
                  <ContactFormWithParams />
                </Suspense>

                <div className="lg:pl-10 lg:border-l" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                  <h2 className="text-sm font-semibold mb-4" style={{ color: "#f8fafc" }}>
                    Direct contact
                  </h2>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-2 text-sm transition-colors"
                      style={{ color: "#cbd5e1" }}
                    >
                      <Mail size={15} aria-hidden="true" style={{ color: "#5ac8a7" }} />
                      {site.email}
                    </a>
                    <a
                      href={socials.linkedin}
                      className="flex items-center gap-2 text-sm transition-colors"
                      style={{ color: "#cbd5e1" }}
                    >
                      <ExternalLink size={15} aria-hidden="true" style={{ color: "#5ac8a7" }} />
                      LinkedIn
                    </a>
                    <a
                      href={socials.googleScholar}
                      className="flex items-center gap-2 text-sm transition-colors"
                      style={{ color: "#cbd5e1" }}
                    >
                      <BookOpen size={15} aria-hidden="true" style={{ color: "#5ac8a7" }} />
                      Google Scholar
                    </a>
                    <a
                      href={socials.researchGate}
                      className="flex items-center gap-2 text-sm transition-colors"
                      style={{ color: "#cbd5e1" }}
                    >
                      <FileText size={15} aria-hidden="true" style={{ color: "#5ac8a7" }} />
                      ResearchGate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
