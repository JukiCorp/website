"use client";
import { useState } from "react";

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // No backend yet: opens the visitor's mail app. Replace with your API route or form service later.
    const subject = encodeURIComponent("Early access request");
    const body = encodeURIComponent(`Please add ${email} to the early access list.`);
    window.location.href = `mailto:hello@jukicorp.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) return <p className="text-brand-soft">Thanks. Your email app should open with your request. If it doesn't, write to hello@jukicorp.com.</p>;

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="email" className="sr-only">Email address</label>
      <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="h-12 flex-1 rounded-xl border border-line bg-panel px-4 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-brand focus:ring-2 focus:ring-brand/40" />
      <button type="submit"
        className="h-12 rounded-xl bg-gradient-to-r from-brand to-brand-blue px-6 text-sm font-semibold text-white shadow-soft transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
        Get Early Access
      </button>
    </form>
  );
}
