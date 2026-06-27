"use client";

import { useState } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Mail, ExternalLink, BookOpen, FileText } from "lucide-react";
import { submitContactForm } from "@/lib/contact";
import { site, socials } from "@/content/site";

const enquiryTypes = [
  "Consulting",
  "Job / recruitment opportunity",
  "Research collaboration",
  "Speaking or media",
  "Community / VolunteerNG",
  "General enquiry",
];

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
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-8 text-center">
        <p className="text-base font-semibold text-navy-950 mb-2">Thank you for reaching out.</p>
        <p className="text-sm text-grey-600">Alexander will respond as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-navy-950 mb-1.5">
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
            className="w-full rounded-md border border-grey-200 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:outline-none"
          />
          {errors.fullName && <p id="fullName-error" className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-950 mb-1.5">
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
            className="w-full rounded-md border border-grey-200 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:outline-none"
          />
          {errors.email && <p id="email-error" className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="organisation" className="block text-sm font-medium text-navy-950 mb-1.5">
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            value={form.organisation}
            onChange={handleChange("organisation")}
            className="w-full rounded-md border border-grey-200 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-navy-950 mb-1.5">
            Role / title
          </label>
          <input
            id="role"
            name="role"
            type="text"
            value={form.role}
            onChange={handleChange("role")}
            className="w-full rounded-md border border-grey-200 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="enquiryType" className="block text-sm font-medium text-navy-950 mb-1.5">
          Enquiry type <span aria-hidden="true">*</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={form.enquiryType}
          onChange={handleChange("enquiryType")}
          aria-invalid={!!errors.enquiryType}
          aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}
          className="w-full rounded-md border border-grey-200 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:outline-none bg-white"
        >
          <option value="">Select an enquiry type</option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.enquiryType && (
          <p id="enquiryType-error" className="text-xs text-red-600 mt-1">{errors.enquiryType}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-950 mb-1.5">
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
          className="w-full rounded-md border border-grey-200 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:outline-none resize-none"
        />
        {errors.message && <p id="message-error" className="text-xs text-red-600 mt-1">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or email directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-emerald-400 transition-colors disabled:opacity-60"
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
          <p className="text-sm font-semibold text-emerald-400 mb-3">Contact</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-grey-200 leading-relaxed">
            Whether it&apos;s a consulting enquiry, a job opportunity, a research collaboration, or a speaking
            invitation — Alexander will respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/40 shadow-sm p-8 sm:p-10">
          <div className="grid lg:grid-cols-[1fr_320px] gap-14">
            <Suspense fallback={<div className="text-sm text-grey-400">Loading form…</div>}>
              <ContactFormWithParams />
            </Suspense>

            <div>
              <h2 className="text-sm font-semibold text-navy-950 mb-4">Direct contact</h2>
              <div className="space-y-3">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 text-sm text-grey-600 hover:text-emerald-600 transition-colors"
                >
                  <Mail size={15} aria-hidden="true" />
                  {site.email}
                </a>
                <a
                  href={socials.linkedin}
                  className="flex items-center gap-2 text-sm text-grey-600 hover:text-emerald-600 transition-colors"
                >
                  <ExternalLink size={15} aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href={socials.googleScholar}
                  className="flex items-center gap-2 text-sm text-grey-600 hover:text-emerald-600 transition-colors"
                >
                  <BookOpen size={15} aria-hidden="true" />
                  Google Scholar
                </a>
                <a
                  href={socials.researchGate}
                  className="flex items-center gap-2 text-sm text-grey-600 hover:text-emerald-600 transition-colors"
                >
                  <FileText size={15} aria-hidden="true" />
                  ResearchGate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
