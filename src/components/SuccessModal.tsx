"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

type SuccessModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
};

export default function SuccessModal({ open, onClose, title, message }: SuccessModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      style={{ animation: "success-modal-fade 200ms ease-out" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-message"
        className="relative w-full max-w-md rounded-[28px] p-8 sm:p-10 text-center"
        style={{
          backgroundColor: "rgba(7, 18, 32, 0.86)",
          backdropFilter: "blur(22px) saturate(140%)",
          WebkitBackdropFilter: "blur(22px) saturate(140%)",
          border: "1px solid rgba(255, 255, 255, 0.14)",
          boxShadow: "0 24px 90px rgba(0, 0, 0, 0.45)",
          animation: "success-modal-scale-in 220ms ease-out",
        }}
      >
        <span
          className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
          style={{ backgroundColor: "rgba(14,107,87,0.15)", border: "1px solid rgba(90,200,167,0.35)" }}
        >
          <CheckCircle2 size={28} style={{ color: "#5ac8a7" }} aria-hidden="true" />
        </span>

        <h2
          id="success-modal-title"
          className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3"
          style={{ color: "#ffffff" }}
        >
          {title}
        </h2>
        <p id="success-modal-message" className="text-sm leading-relaxed mb-8" style={{ color: "#cbd5e1" }}>
          {message}
        </p>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-[transform,box-shadow,color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.16)] hover:text-[#0e6b57]"
          style={{ backgroundColor: "#ffffff", color: "#071a2d" }}
        >
          Close
        </button>
      </div>

      <style>{`
        @keyframes success-modal-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes success-modal-scale-in {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
