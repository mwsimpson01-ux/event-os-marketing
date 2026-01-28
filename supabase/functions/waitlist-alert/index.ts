import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

type WaitlistRow = {
  name: string;
  email: string;
  company: string;
  role: string;
  created_at?: string;
};

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const payload = await req.json();
  const record: WaitlistRow | undefined = payload?.record;

  if (!record) {
    return new Response("Missing record", { status: 400 });
  }

  const apiKey = Deno.env.get("RESEND_API_KEY");
  const from = Deno.env.get("RESEND_FROM");
  const to = Deno.env.get("ALERT_EMAIL");

  if (!apiKey || !from || !to) {
    return new Response("Missing env vars", { status: 500 });
  }

  const emailBody = `
New waitlist submission:

Name: ${record.name}
Email: ${record.email}
Company: ${record.company}
Role: ${record.role}
`.trim();

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: "New Event.OS waitlist submission",
      text: emailBody,
    }),
  });

  if (!resendResponse.ok) {
    const error = await resendResponse.text();
    return new Response(`Resend error: ${error}`, { status: 500 });
  }

  return new Response("OK", { status: 200 });
});
