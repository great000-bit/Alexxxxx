"use client";

import { useState } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Mail, ExternalLink, BookOpen, FileText } from "lucide-react";
import { submitContactForm } from "@/lib/contact";
import { site, socials } from "@/content/site";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumb from "@/components/Breadcrumb";

const enquiryTypes = [
  "Consulting",
  "Research collaboration",
  "Speaking or media",
  "Job / recruitment opportunity",
  "Community / VolunteerNG",
  "General enquiry",
];

const fieldStyle = {
  backgroundColor: "rgba(255,255,255,0.06)",
  color: "#ffffff",
};

const fieldClassName =
  "w-full rounded-[14px] px-4 py-3.5 text-sm outline-none transition-[border-color,box-shadow] border border-[rgba(229,231,235,0.14)] focus:border-[#0e6b57] focus:shadow-[0_0_0_3px_rgba(14,107,87,0.18)] placeholder:text-[#94a3b8]";

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
      setForm({ fullName: "", email: "", organisation: "", enquiryType: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-[14px] p-8 text-center"
        style={{ backgroundColor: "rgba(14,107,87,0.1)", border: "1px solid rgba(14,107,87,0.35)" }}
      >
        <p className="text-base font-semibold mb-2" style={{ color: "#ffffff" }}>
          Thank you for reaching out.
        </p>
        <p className="text-sm" style={{ color: "#cbd5e1" }}>
          Alexander will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-[28px] p-6 sm:p-8"
      style={{
        backgroundColor: "rgba(255,255,255,0.055)",
        backdropFilter: "blur(20px) saturate(135%)",
        WebkitBackdropFilter: "blur(20px) saturate(135%)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Honeypot */}
        <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2" style={{ color: "#ffffff" }}>
              Full Name <span style={{ color: "#5ac8a7" }}>*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your full name"
              value={form.fullName}
              onChange={handleChange("fullName")}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={fieldClassName}
              style={fieldStyle}
            />
            {errors.fullName && (
              <p id="fullName-error" className="text-xs mt-1.5" style={{ color: "#f87171" }}>
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#ffffff" }}>
              Email <span style={{ color: "#5ac8a7" }}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={fieldClassName}
              style={fieldStyle}
            />
            {errors.email && (
              <p id="email-error" className="text-xs mt-1.5" style={{ color: "#f87171" }}>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="organisation" className="block text-sm font-medium mb-2" style={{ color: "#ffffff" }}>
              Organisation
            </label>
            <input
              id="organisation"
              name="organisation"
              type="text"
              placeholder="Company or institution"
              value={form.organisation}
              onChange={handleChange("organisation")}
              className={fieldClassName}
              style={fieldStyle}
            />
          </div>

          <div>
            <label htmlFor="enquiryType" className="block text-sm font-medium mb-2" style={{ color: "#ffffff" }}>
              Project / Enquiry Type <span style={{ color: "#5ac8a7" }}>*</span>
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={form.enquiryType}
              onChange={handleChange("enquiryType")}
              aria-invalid={!!errors.enquiryType}
              aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}
              className={fieldClassName}
              style={{ ...fieldStyle, colorScheme: "dark" }}
            >
              <option value="" style={{ color: "#0a1628" }}>
                Select enquiry type
              </option>
              {enquiryTypes.map((type) => (
                <option key={type} value={type} style={{ color: "#0a1628" }}>
                  {type}
                </option>
              ))}
            </select>
            {errors.enquiryType && (
              <p id="enquiryType-error" className="text-xs mt-1.5" style={{ color: "#f87171" }}>
                {errors.enquiryType}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#ffffff" }}>
            Message <span style={{ color: "#5ac8a7" }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell Alexander about your project, timeline, and what support you need..."
            value={form.message}
            onChange={handleChange("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldClassName} resize-none`}
            style={fieldStyle}
          />
          {errors.message && (
            <p id="message-error" className="text-xs mt-1.5" style={{ color: "#f87171" }}>
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
          className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-[transform,box-shadow,color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.16)] hover:text-[#0e6b57] disabled:opacity-60"
          style={{ backgroundColor: "#ffffff", color: "#071a2d" }}
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
          {status !== "submitting" && <Send size={16} aria-hidden="true" />}
        </button>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Page header with hero-style headline */}
      <section className="-mt-24 pt-40 pb-10 lg:pt-48 lg:pb-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <ScrollReveal>
            <h1
              className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 max-w-3xl leading-tight"
              style={{ color: "#f8fafc" }}
            >
              Let&apos;s discuss energy transition, sustainability, or research{" "}
              <span style={{ color: "#5ac8a7" }}>collaboration.</span>
            </h1>
            <p className="mt-5 text-lg max-w-2xl" style={{ color: "#94a3b8" }}>
              For consulting, research collaboration, speaking, or advisory enquiries, send a short
              note with the context, timeline, and what you need support with.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Premium split: left info / right form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-14 lg:gap-20">
            {/* Left column — contact methods */}
            <ScrollReveal direction="left">
              <div>
                <h2
                  className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3"
                  style={{ color: "#ffffff" }}
                >
                  Direct Line
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
                  Currently available for research, advisory, and collaboration work.
                </p>

                <div className="space-y-5">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 text-sm transition-colors group"
                  >
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 transition-colors"
                      style={{ backgroundColor: "rgba(14,107,87,0.15)", border: "1px solid rgba(14,107,87,0.25)" }}
                    >
                      <Mail size={16} style={{ color: "#5ac8a7" }} />
                    </span>
                    <span className="[color:#cbd5e1] group-hover:[color:#5ac8a7] transition-colors break-all">
                      {site.email}
                    </span>
                  </a>

                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile (opens in a new tab)"
                    className="flex items-center gap-3 text-sm transition-colors group"
                  >
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
                    >
                      <ExternalLink size={16} style={{ color: "#cbd5e1" }} />
                    </span>
                    <span className="[color:#cbd5e1] group-hover:[color:#5ac8a7] transition-colors">
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href={socials.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Scholar profile (opens in a new tab)"
                    className="flex items-center gap-3 text-sm transition-colors group"
                  >
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
                    >
                      <BookOpen size={16} style={{ color: "#cbd5e1" }} />
                    </span>
                    <span className="[color:#cbd5e1] group-hover:[color:#5ac8a7] transition-colors">
                      Google Scholar
                    </span>
                  </a>

                  <a
                    href={socials.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium profile (opens in a new tab)"
                    className="flex items-center gap-3 text-sm transition-colors group"
                  >
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
                    >
                      <FileText size={16} style={{ color: "#cbd5e1" }} />
                    </span>
                    <span className="[color:#cbd5e1] group-hover:[color:#5ac8a7] transition-colors">
                      Medium
                    </span>
                  </a>
                </div>

                {/* Availability card */}
                <div
                  className="mt-10 rounded-2xl p-5"
                  style={{
                    backgroundColor: "rgba(14,107,87,0.08)",
                    border: "1px solid rgba(14,107,87,0.2)",
                  }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ color: "#5ac8a7" }}>
                    Open to collaboration
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
                    Prefer to chat directly? Reach out on LinkedIn or send an email with the context
                    of your enquiry.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right column — form */}
            <ScrollReveal direction="right" delayMs={120}>
              <Suspense fallback={<div className="text-sm" style={{ color: "#94a3b8" }}>Loading form…</div>}>
                <ContactFormWithParams />
              </Suspense>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
