const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykqlppp";

export type ContactFormPayload = {
  fullName: string;
  email: string;
  organisation: string;
  enquiryType: string;
  message: string;
  /** Honeypot field — should always be empty. If a bot fills it, we quietly no-op. */
  _gotcha?: string;
};

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<{ ok: boolean }> {
  // Silent honeypot trap: if this hidden field got filled in, it was a bot. Pretend
  // success without ever hitting the network, so the bot doesn't learn anything either.
  if (payload._gotcha) {
    return { ok: true };
  }

  try {
    const formData = new FormData();
    formData.append("name", payload.fullName);
    formData.append("email", payload.email);
    formData.append("organisation", payload.organisation);
    formData.append("enquiryType", payload.enquiryType);
    formData.append("message", payload.message);
    formData.append("_subject", "New enquiry from Alexander Oburoh website");

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    // Secondary delivery via Resend, additional to (not instead of) Formspree.
    // Fired only after Formspree succeeds, and never allowed to affect the
    // result the UI sees: the site's success/error state is Formspree's
    // response alone, exactly as before this addition.
    if (response.ok) {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {
        // Intentionally swallowed — Resend is a best-effort duplicate notification,
        // not a requirement for the visitor's submission to be considered successful.
      });
    }

    return { ok: response.ok };
  } catch {
    return { ok: false };
  }
}
