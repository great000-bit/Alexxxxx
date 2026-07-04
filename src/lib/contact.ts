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
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => ({ ok: false }));
    return { ok: response.ok && data.ok === true };
  } catch {
    return { ok: false };
  }
}
