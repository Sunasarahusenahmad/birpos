"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";
import { submitToWeb3Forms } from "@/lib/web3forms";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (new FormData(form).get("email") as string) ?? "";
    if (!email) return;

    setStatus("loading");
    setError("");
    try {
      await submitToWeb3Forms({
        subject: "New BirPOS newsletter signup",
        email,
        message: `New newsletter subscriber: ${email}`,
        inquiry_type: "Newsletter Signup",
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <p className="mt-4 flex items-center gap-2 rounded-[var(--radius-sm)] border border-primary-tint-strong bg-primary-tint px-3.5 py-2.5 text-sm font-medium text-primary-darker">
        <Check className="h-4 w-4" /> You&apos;re subscribed. Thanks!
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="you@business.com"
          className="w-full min-w-0 rounded-[var(--radius-sm)] border border-border-strong bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-[var(--radius-sm)] bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Join"}
        </button>
      </div>
      {status === "error" ? <p className="mt-2 text-xs text-danger">{error}</p> : null}
    </form>
  );
}
