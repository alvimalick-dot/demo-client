"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // simulated send — demo has no live backend; wire to WhatsApp Cloud API later
    setTimeout(() => setSent(true), 800);
  };

  if (sent) {
    return (
      <div className="ticket ticket-notch flex flex-col items-center p-8 text-center">
        <CheckCircle2 size={40} className="text-leaf" />
        <h3 className="mt-3 font-display text-xl font-semibold text-cream">Message sent!</h3>
        <p className="mt-1 text-sm text-cream/55">
          We&apos;ll get back to you shortly. Prefer instant? Message us on WhatsApp instead.
        </p>
      </div>
    );
  }

  const field =
    "mt-1 w-full rounded-xl border border-cream/15 bg-ink-mid/60 px-3 py-2.5 text-sm text-cream outline-none placeholder:text-cream/30 focus:border-saffron";

  return (
    <form onSubmit={submit} className="ticket ticket-notch space-y-4 p-6">
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-cream/45">Your name</label>
        <input required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Ali Khan" />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-cream/45">Phone / WhatsApp</label>
        <input required value={phone} onChange={(e) => setPhone(e.target.value)} className={field} placeholder="03xx xxxxxxx" />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-cream/45">Message</label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className={`${field} resize-none`}
          placeholder="Table for four on Saturday? Bulk coffee order? Say the word…"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Send message
        <Send size={15} />
      </button>
    </form>
  );
}
