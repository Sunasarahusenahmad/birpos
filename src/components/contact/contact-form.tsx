"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitToWeb3Forms } from "@/lib/web3forms";

const inquiryTypes = [
  { value: "download", label: "Download Request" },
  { value: "demo", label: "Schedule a Demo" },
  { value: "pricing", label: "Request Pricing" },
  { value: "support", label: "Support" },
  { value: "general", label: "General Inquiry" },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") ?? "general";
  const plan = searchParams.get("plan");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const inquiryType = data.get("inquiry_type") as string;
    const inquiryLabel =
      inquiryTypes.find((t) => t.value === inquiryType)?.label ?? "General Inquiry";

    setStatus("loading");
    setError("");

    try {
      await submitToWeb3Forms({
        subject: `BirStock website: ${inquiryLabel}${plan ? ` (${plan} plan)` : ""}`,
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        business_name: String(data.get("business") ?? ""),
        inquiry_type: inquiryLabel,
        plan: plan ?? "",
        message: String(data.get("message") ?? ""),
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-[var(--radius-lg)] border border-primary-tint-strong bg-primary-tint px-6 py-14 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary-darker" strokeWidth={1.5} />
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">Message sent!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out - our team will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-primary-darker hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            name="email"
            required
            placeholder="you@business.com"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone number">
          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" className={inputClass} />
        </Field>
        <Field label="Business name">
          <input type="text" name="business" placeholder="Your store / business" className={inputClass} />
        </Field>
      </div>

      <Field label="What can we help with?" required>
        <select name="inquiry_type" defaultValue={initialType} required className={inputClass}>
          {inquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message">
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your store and what you need…"
          className={inputClass}
        />
      </Field>

      {status === "error" ? (
        <p className="rounded-[var(--radius-sm)] border border-danger/30 bg-danger/5 px-4 py-3 text-sm text-danger">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-[var(--radius-sm)] border border-border-strong bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-danger"> *</span> : null}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
