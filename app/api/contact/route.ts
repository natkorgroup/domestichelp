import { cities, getCity, getService, services } from "../../lib/content";

type Enquiry = { name?: unknown; email?: unknown; phone?: unknown; city?: unknown; service?: unknown; plan?: unknown; schedule?: unknown; startDate?: unknown; message?: unknown; website?: unknown; consent?: unknown };

const recentRequests = new Map<string, number[]>();

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] ?? character);
}

function limited(request: Request) {
  const address = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("cf-connecting-ip") || "anonymous";
  const now = Date.now();
  const recent = (recentRequests.get(address) ?? []).filter((timestamp) => now - timestamp < 15 * 60 * 1000);
  if (recent.length >= 5) return true;
  recent.push(now);
  recentRequests.set(address, recent);
  if (recentRequests.size > 500) for (const [key, timestamps] of recentRequests) if (timestamps.every((timestamp) => now - timestamp >= 15 * 60 * 1000)) recentRequests.delete(key);
  return false;
}

export async function POST(request: Request) {
  if (limited(request)) return Response.json({ error: "Please wait a little before sending another enquiry." }, { status: 429 });

  let body: Enquiry;
  try {
    body = await request.json() as Enquiry;
  } catch {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  if (text(body.website, 200)) return Response.json({ ok: true });

  const name = text(body.name, 100);
  const email = text(body.email, 160);
  const phone = text(body.phone, 40);
  const citySlug = text(body.city, 80);
  const serviceSlug = text(body.service, 100);
  const plan = text(body.plan, 100);
  const schedule = text(body.schedule, 80);
  const startDate = text(body.startDate, 100);
  const message = text(body.message, 3000);

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10 || body.consent !== true) {
    return Response.json({ error: "Please complete your name, email, message, and consent before sending." }, { status: 400 });
  }

  if (!cities.some((city) => city.slug === citySlug) && citySlug !== "other") return Response.json({ error: "Please choose a valid household location." }, { status: 400 });
  if (!services.some((service) => service.slug === serviceSlug) && serviceSlug !== "not-sure") return Response.json({ error: "Please choose the kind of household help you need." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL_TO || "hello@domestichelp.ca";
  const sender = process.env.CONTACT_EMAIL_FROM || "DomesticHelp.ca <onboarding@resend.dev>";
  if (!apiKey) return Response.json({ error: "Online enquiries are being configured. Please email " + recipient + " and we will be happy to help." }, { status: 503 });

  const city = getCity(citySlug)?.name ?? "Another Canadian community";
  const service = getService(serviceSlug)?.title ?? "Help choosing the right household role";
  const fields = [["Name", name], ["Email", email], ["Phone", phone || "Not provided"], ["City", city], ["Household role", service], ["Recruitment option", plan || "Help me decide"], ["Preferred schedule", schedule || "Not decided"], ["Preferred start", startDate || "Not specified"], ["Household details", message]] as const;
  const plainText = fields.map(([label, value]) => label + ": " + value).join("\n");
  const rows = fields.map(([label, value]) => "<tr><th style=\"padding:11px 14px;text-align:left;vertical-align:top;background:#f7f4ee;color:#173b32;font-size:13px\">" + escapeHtml(label) + "</th><td style=\"padding:11px 14px;font-size:13px;white-space:pre-wrap\">" + escapeHtml(value) + "</td></tr>").join("");
  const subject = ("New household enquiry: " + service + " in " + city).replace(/[\r\n]/g, " ").slice(0, 180);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": "Bearer " + apiKey, "Content-Type": "application/json", "Idempotency-Key": crypto.randomUUID() },
      body: JSON.stringify({ from: sender, to: [recipient], reply_to: email, subject, html: "<div style=\"font-family:Arial,sans-serif;color:#26332d;max-width:720px\"><h1 style=\"color:#173b32;font-size:24px\">New DomesticHelp.ca enquiry</h1><p>A family has submitted the household recruitment enquiry form.</p><table style=\"width:100%;border-collapse:collapse\">" + rows + "</table></div>", text: plainText }),
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) {
      console.error("Resend delivery failed with status", response.status);
      return Response.json({ error: "We could not send your enquiry just now. Please email " + recipient + " or try again shortly." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "We could not reach the email service. Please email " + recipient + " or try again shortly." }, { status: 502 });
  }
}
