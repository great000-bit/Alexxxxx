// TODO: No form backend (Formspree endpoint, email service, etc.) was specified in the
// PRD. This currently logs the submission and simulates success so the UI/UX can be
// reviewed and the success state can be seen, but no email or notification is actually
// sent anywhere. Before this goes live, wire this up to a real service — e.g. Formspree
// (https://formspree.io), Resend (https://resend.com), or a Next.js API route that sends
// mail via your provider of choice.
export type ContactFormPayload = {
  fullName: string;
  email: string;
  organisation: string;
  role?: string;
  enquiryType: string;
  message: string;
};

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<{ ok: boolean }> {
  // Simulate network latency so the loading state is visible during review.
  await new Promise((resolve) => setTimeout(resolve, 600));

  console.log("[contact form submission — not actually sent anywhere yet]", payload);

  return { ok: true };
}
