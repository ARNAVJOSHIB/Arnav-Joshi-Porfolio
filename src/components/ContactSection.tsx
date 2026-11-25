"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Mail, User } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { Reveal } from "@/components/ui/Reveal";

interface SubmissionResult {
  type: "idle" | "delivered" | "preview" | "error";
  message: string;
}

/**
 * Editorial Contact & Collaboration section combining an honest validated form
 * with transparent configurable direct channels (GitHub, Email, LinkedIn, Portfolio).
 */
export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [area, setArea] = useState<string>(SITE_CONFIG.collaborationAreas[0]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<SubmissionResult>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setResult({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, area, message }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        delivered?: boolean;
        error?: string;
        summary?: string;
      };

      if (!response.ok || !data.ok) {
        setResult({
          type: "error",
          message:
            data.error ?? "Please verify all fields and try submitting again.",
        });
        return;
      }

      if (data.delivered) {
        setResult({
          type: "delivered",
          message:
            "Your inquiry was delivered via the configured contact webhook.",
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setResult({
          type: "preview",
          message:
            "Inquiry validated locally. No outbound email transport (CONTACT_WEBHOOK_URL) is configured yet — copy the summary below or connect your handler in src/app/api/contact/route.ts.",
        });
      }
    } catch {
      setResult({
        type: "error",
        message: "Network error while submitting the inquiry form.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  async function copyDraft() {
    const formatted = `To: Arnav Joshi\nFrom: ${name} <${email}>\nArea: ${area}\nSubject: ${subject}\n\n${message}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  const { email: emailLink, linkedin, github, portfolio } =
    SITE_CONFIG.socialLinks;

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-[var(--burgundy)] px-5 py-20 text-[var(--butter-yellow)] sm:px-8 md:px-12 md:py-28 lg:px-14"
    >
      <div className="mx-auto grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left column: Headline, collaboration topics & direct contact coordinates */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <Reveal>
            <h2 className="font-display text-[clamp(3.1rem,6vw,5.1rem)] uppercase leading-[0.88] tracking-[0.01em] text-[var(--butter-yellow)]">
              LET&apos;S CREATE
              <br />
              SOMETHING
            </h2>
            <p className="mt-4 max-w-md text-[12px] leading-relaxed uppercase tracking-[0.06em] text-[var(--cream)]/82">
              I am always interested in ideas, projects, collaborations and
              conversations that challenge conventional thinking and bring
              business, finance, technology and creativity together.
            </p>

            <div className="mt-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                AREAS OF COLLABORATION
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {SITE_CONFIG.collaborationAreas.map((topic) => (
                  <li key={topic}>
                    <button
                      type="button"
                      onClick={() => setArea(topic)}
                      className={`cursor-pointer border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                        area === topic
                          ? "border-[var(--butter-yellow)] bg-[var(--butter-yellow)] text-[var(--burgundy-dark)]"
                          : "border-[var(--butter-yellow)]/22 text-[var(--cream)]/80 hover:border-[var(--butter-yellow)]/55"
                      }`}
                    >
                      {topic}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Direct Channels Index matching reference bottom-left dark wine pill card */}
          <Reveal delay={0.1} className="mt-10">
            <div className="border border-[var(--butter-yellow)]/15 bg-[var(--burgundy-dark)] p-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                    {github.label}
                  </span>
                  <a
                    href={github.href ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--butter-yellow)] hover:text-[var(--cream)]"
                  >
                    <span>{github.value}</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>

                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                    {portfolio.label}
                  </span>
                  <a
                    href={portfolio.href ?? "#hero"}
                    className="mt-1 inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--butter-yellow)] hover:text-[var(--cream)]"
                  >
                    {portfolio.value}
                  </a>
                </div>

                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                    {emailLink.label}
                  </span>
                  {emailLink.href ? (
                    <a
                      href={emailLink.href}
                      className="mt-1 inline-block text-[11px] font-semibold tracking-[0.06em] text-[var(--butter-yellow)] hover:text-[var(--cream)]"
                    >
                      {emailLink.value}
                    </a>
                  ) : (
                    <span className="mt-1 block text-[11px] text-[var(--cream)]/60">
                      {emailLink.value}
                    </span>
                  )}
                </div>

                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                    {linkedin.label}
                  </span>
                  {linkedin.href ? (
                    <a
                      href={linkedin.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--butter-yellow)] hover:text-[var(--cream)]"
                    >
                      <span>{linkedin.value}</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="mt-1 block text-[11px] text-[var(--cream)]/60">
                      {linkedin.value}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right column: Dark Wine structured editorial inquiry form */}
        <Reveal delay={0.08} className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="border border-[var(--butter-yellow)]/15 bg-[var(--burgundy-dark)] p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--butter-yellow)]"
                >
                  NAME *
                </label>
                <div className="relative mt-2">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="YOUR FULL NAME"
                    className="w-full border border-[var(--butter-yellow)]/20 bg-[var(--burgundy)]/55 px-3.5 py-3 pr-9 text-xs tracking-[0.06em] text-[var(--cream)] placeholder:text-[var(--cream)]/35 focus:border-[var(--butter-yellow)] focus:outline-none"
                  />
                  <User
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 right-3 h-3.5 w-3.5 -translate-y-1/2 text-[var(--cream)]/40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--butter-yellow)]"
                >
                  EMAIL *
                </label>
                <div className="relative mt-2">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOU@DOMAIN.COM"
                    className="w-full border border-[var(--butter-yellow)]/20 bg-[var(--burgundy)]/55 px-3.5 py-3 pr-9 text-xs tracking-[0.06em] text-[var(--cream)] placeholder:text-[var(--cream)]/35 focus:border-[var(--butter-yellow)] focus:outline-none"
                  />
                  <Mail
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 right-3 h-3.5 w-3.5 -translate-y-1/2 text-[var(--cream)]/40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--butter-yellow)]"
                >
                  SUBJECT *
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="PROJECT, RESEARCH OR COLLABORATION"
                  className="mt-2 w-full border border-[var(--butter-yellow)]/20 bg-[var(--burgundy)]/55 px-3.5 py-3 text-xs tracking-[0.06em] text-[var(--cream)] placeholder:text-[var(--cream)]/35 focus:border-[var(--butter-yellow)] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-area"
                  className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--butter-yellow)]"
                >
                  COLLABORATION FOCUS
                </label>
                <select
                  id="contact-area"
                  name="area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="mt-2 w-full border border-[var(--butter-yellow)]/20 bg-[var(--burgundy)] px-3.5 py-3 text-xs uppercase tracking-[0.06em] text-[var(--cream)] focus:border-[var(--butter-yellow)] focus:outline-none"
                >
                  {SITE_CONFIG.collaborationAreas.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--butter-yellow)]"
              >
                MESSAGE *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="SHARE CONTEXT, IDEAS, OR WHAT YOU ARE BUILDING..."
                className="mt-2 w-full resize-y border border-[var(--butter-yellow)]/20 bg-[var(--burgundy)]/55 px-3.5 py-3 text-xs leading-relaxed tracking-[0.05em] text-[var(--cream)] placeholder:text-[var(--cream)]/35 focus:border-[var(--butter-yellow)] focus:outline-none"
              />
            </div>

            {result.type !== "idle" && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-5 border p-4 text-xs leading-relaxed ${
                  result.type === "error"
                    ? "border-red-300/40 bg-red-950/40 text-[var(--cream)]"
                    : "border-[var(--butter-yellow)]/35 bg-[var(--burgundy)]/80 text-[var(--cream)]"
                }`}
              >
                <p>{result.message}</p>
                {result.type === "preview" && (
                  <button
                    type="button"
                    onClick={copyDraft}
                    className="mt-3 inline-flex cursor-pointer items-center gap-1.5 border border-[var(--butter-yellow)]/45 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--butter-yellow)] hover:bg-[var(--butter-yellow)] hover:text-[var(--burgundy-dark)]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3" />
                        <span>COPIED INQUIRY DRAFT</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>COPY INQUIRY DRAFT</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <EditorialButton type="submit" disabled={submitting}>
                {submitting ? "VALIDATING..." : "LET'S TALK"}
              </EditorialButton>

              <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--cream)]/55">
                CONFIGURABLE HANDLER · /API/CONTACT
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
