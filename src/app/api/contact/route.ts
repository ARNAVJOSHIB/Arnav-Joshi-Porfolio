import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  area?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const area = body.area?.trim() ?? "General Inquiry";
  const message = body.message?.trim() ?? "";

  if (name.length < 2 || !EMAIL_RE.test(email) || subject.length < 2 || message.length < 10) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Please provide your name, a valid email address, a subject, and a message of at least 10 characters.",
      },
      { status: 400 }
    );
  }

  // Optional webhook forwarding when configured via environment variable.
  // Never claim an email was sent when no transport is configured.
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const upstream = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          area,
          message,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!upstream.ok) {
        return NextResponse.json(
          {
            ok: false,
            delivered: false,
            error: "Configured mail webhook rejected the submission.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        delivered: true,
        mode: "webhook_delivered",
        summary: `${subject} — ${area}`,
      });
    } catch {
      return NextResponse.json(
        {
          ok: false,
          delivered: false,
          error: "Unable to reach the configured contact delivery endpoint.",
        },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({
    ok: true,
    delivered: false,
    mode: "preview_validated",
    summary: `Validated locally for ${name} (${email}) — ${subject} [${area}]`,
  });
}
