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

    return { ok: response.ok };
  } catch {
    return { ok: false };
  }
}
