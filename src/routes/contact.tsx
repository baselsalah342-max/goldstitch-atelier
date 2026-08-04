import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Nav } from "../components/aurion/nav";
import { Footer } from "../components/aurion/footer";
import { SerpentMotif } from "../components/aurion/emblems";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AURION — Custom Requests & Private Drops" },
      {
        name: "description",
        content:
          "Reach the AURION atelier in Cairo for custom requests, sizing, collaborations, or private drop access.",
      },
      { property: "og:title", content: "Reach out — AURION" },
      {
        property: "og:description",
        content:
          "For custom requests, sizing, collaborations, or private drop access.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "WhatsApp", href: "https://wa.me/20" },
  { label: "Email", href: "mailto:atelier@aurion.studio" },
];

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) next["name"] = "Tell us your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      next["email"] = "A reachable email, please.";
    if (String(data.get("message") ?? "").trim().length < 8)
      next["message"] = "A few more words.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  };

  return (
    <>
      <Nav />
      <main
        className="relative overflow-hidden"
        style={{
          minHeight: "100svh",
          padding: "9rem var(--page-padding) 4rem",
          background:
            "radial-gradient(circle at 20% 10%, rgba(176,141,87,0.16), transparent 28rem), #0a0908",
        }}
      >
        <SerpentMotif className="pointer-events-none absolute -bottom-24 -right-16 hidden h-[34rem] w-[34rem] opacity-25 lg:block" />

        <div className="relative mx-auto grid w-full max-w-[var(--max-width)] gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div className="rise">
            <p className="mono-label" style={{ letterSpacing: "0.24em", color: "#b08d57" }}>
              The atelier
            </p>
            <h1
              className="mt-8"
              style={{
                fontSize: "clamp(3.6rem, 11vw, 9rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.055em",
                color: "#e8e2d5",
              }}
            >
              Reach <em>out</em>
            </h1>
            <p
              className="mt-8 max-w-[28rem]"
              style={{ color: "rgba(232, 226, 213, 0.58)" }}
            >
              For custom requests, sizing, collaborations, or private drop access.
            </p>
          </div>

          <form
            noValidate
            onSubmit={onSubmit}
            className="rise flex flex-col gap-10"
            style={{ animationDelay: "180ms" }}
          >
            <Field
              id="name"
              label="Name"
              placeholder="Your name"
              error={errors["name"]}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              placeholder="you@studio.com"
              error={errors["email"]}
            />

            <div>
              <label htmlFor="message" className="mono-label block" style={{ letterSpacing: "0.22em", color: "#b08d57", fontSize: "0.68rem" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us what you have in mind"
                className="thread-input mt-2 min-h-[9rem] resize-y"
                aria-describedby={errors["message"] ? "message-error" : undefined}
              />
              {errors["message"] && (
                <p id="message-error" className="mt-3 font-mono text-[0.66rem] uppercase" style={{ letterSpacing: "0.18em", color: "#d4b483", opacity: 0.75 }}>
                  {errors["message"]}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button type="submit" className="thread-btn">
                Send message
              </button>
              {sent && (
                <p className="font-mono text-[0.66rem] uppercase" style={{ letterSpacing: "0.18em", color: "#d4b483", opacity: 0.75 }}>
                  Received — we reply slowly, but we reply.
                </p>
              )}
            </div>

            <div
              className="mt-4 h-px w-full"
              style={{ background: "rgba(176, 141, 87, 0.16)" }}
              aria-hidden
            />

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="nav-link" style={{ fontSize: "0.7rem" }}>
                  {s.label}
                </a>
              ))}
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  error?: string | undefined;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono uppercase"
        style={{ letterSpacing: "0.22em", fontSize: "0.68rem", color: "#b08d57" }}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="thread-input mt-2"
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p
          id={`${id}-error`}
          className="mt-3 font-mono text-[0.66rem] uppercase"
          style={{ letterSpacing: "0.18em", color: "#d4b483", opacity: 0.75 }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
