// Sends the contact form via Resend's HTTP API directly (no `resend` package
// added, to keep this change to the smallest possible dependency footprint).
// RESEND_API_KEY is read server-side only via process.env — this file is a
// route handler, never bundled to the client, so the key cannot leak to the
// browser.

export const runtime = "nodejs";

const RECIPIENT = "alexander.oburoh@gmail.com";
const VERIFIED_SENDER = "Alexander Oburoh <contact@alexanderoburoh.com>";
const FALLBACK_SENDER = "Alexander Oburoh (via site) <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendViaResend(apiKey: string, from: string, html: string, subject: string, replyTo: string) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: RECIPIENT,
      reply_to: replyTo,
      subject,
      html,
    }),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return Response.json({ ok: false }, { status: 400 });
    }

    const { fullName, email, organisation, enquiryType, message } = body as Record<string, string>;

    if (!fullName?.trim() || !email?.trim() || !enquiryType?.trim() || !message?.trim()) {
      return Response.json({ ok: false }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY is not set.");
      return Response.json({ ok: false }, { status: 500 });
    }

    const submittedAt = new Date().toLocaleString("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "UTC",
    });

    // Note: the current form does not collect a phone number, so it is
    // omitted rather than fabricated. Organisation is included as it's part
    // of the existing form and useful context.
    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; background: #071a2d; padding: 32px; border-radius: 16px;">
        <h2 style="color: #ffffff; font-size: 18px; margin: 0 0 20px;">New enquiry from alexanderoburoh.com</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #cbd5e1;">
          <tr><td style="padding: 8px 0; color: #94a3b8; width: 140px; vertical-align: top;">Name</td><td style="padding: 8px 0;">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8; vertical-align: top;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #5ac8a7;">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8; vertical-align: top;">Organisation</td><td style="padding: 8px 0;">${escapeHtml(organisation || "") || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8; vertical-align: top;">Subject</td><td style="padding: 8px 0;">${escapeHtml(enquiryType)}</td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8; vertical-align: top;">Submitted</td><td style="padding: 8px 0;">${submittedAt} UTC</td></tr>
        </table>
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.12);">
          <p style="color: #94a3b8; font-size: 13px; margin: 0 0 8px;">Message</p>
          <p style="color: #ffffff; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
        </div>
      </div>
    `;

    const subject = `New enquiry: ${enquiryType} — ${fullName}`;

    let response = await sendViaResend(apiKey, VERIFIED_SENDER, html, subject, email);

    // If the verified domain sender fails (e.g. not yet fully propagated),
    // retry once with Resend's shared address rather than failing outright.
    if (!response.ok) {
      const errBody = await response.text().catch(() => "");
      console.error("[contact] Resend error with verified sender:", response.status, errBody);
      response = await sendViaResend(apiKey, FALLBACK_SENDER, html, subject, email);
    }

    if (!response.ok) {
      const errBody = await response.text().catch(() => "");
      console.error("[contact] Resend error with fallback sender:", response.status, errBody);
      return Response.json({ ok: false }, { status: 502 });
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Unhandled error:", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}
