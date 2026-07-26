"use client";

import React, { useRef, useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { CONTACT } from "../data";

const GUEST_OPTIONS = ["1 – 2", "3 – 4", "5 – 6", "7 or more"];

const EMPTY_FORM = {
  name: "",
  phone: "",
  email: "",
  arrive: "",
  leave: "",
  guests: "",
  notes: "",
};

const fieldBase =
  "w-full rounded-[3px] border bg-white px-3.5 py-2.5 font-body text-sm text-ink transition-colors duration-200 placeholder:text-[#a6a598] focus:border-brass focus:outline-none focus:ring-[3px] focus:ring-brass/20";
const labelBase =
  "font-body text-[11px] font-bold uppercase tracking-[0.14em] text-ink";

function IndiaFlag() {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      aria-hidden="true"
      className="rounded-[2px]"
    >
      <rect width="20" height="4.66" y="0" fill="#FF9933" />
      <rect width="20" height="4.66" y="4.66" fill="#fff" />
      <rect width="20" height="4.68" y="9.32" fill="#138808" />
      <circle
        cx="10"
        cy="7"
        r="1.4"
        fill="none"
        stroke="#0a3a8f"
        strokeWidth=".5"
      />
    </svg>
  );
}

function buildEnquiryMessage(form) {
  const lines = [
    "Hello Vedanta, I would like to plan a stay.",
    "",
    `Name: ${form.name.trim()}`,
    `Phone: +91 ${form.phone.trim()}`,
  ];
  if (form.email.trim()) lines.push(`Email: ${form.email.trim()}`);
  if (form.arrive) {
    lines.push(`Arrive: ${form.arrive}`);
  }
  if (form.leave) {
    lines.push(`Leave: ${form.leave}`);
  }
  if (form.guests) lines.push(`Guests: ${form.guests}`);
  if (form.notes.trim()) lines.push("", `Notes: ${form.notes.trim()}`);
  return lines.join("\n");
}

/**
 * Shared enquiry form used by the homepage contact section, contact page,
 * and the enquiry popup. Matches the parchment popup design.
 */
export default function EnquiryForm({
  idPrefix = "enq",
  title = "Plan your retreat",
  intro = "A minute now, and a quiet reply from our concierge.",
  showHeader = true,
  nameRef: externalNameRef,
  onSubmitted,
  testId = "enquiry-form",
}) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const internalNameRef = useRef(null);
  const nameRef = externalNameRef || internalNameRef;

  const waLink = `https://wa.me/${CONTACT.whatsapp}`;

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: false } : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {
      name: !form.name.trim(),
      phone: !form.phone.trim(),
    };
    if (nextErrors.name || nextErrors.phone) {
      setErrors(nextErrors);
      return;
    }

    const text = buildEnquiryMessage(form);
    window.open(
      `${waLink}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
    setForm(EMPTY_FORM);
    setErrors({});
    onSubmitted?.();
  };

  if (sent) {
    return (
      <div
        className="flex min-h-[320px] flex-col items-center justify-center px-2 py-10 text-center sm:min-h-[420px]"
        data-testid={`${testId}-success`}
      >
        <div className="mb-[22px] flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-brass text-brass">
          <Check className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="font-serif-display text-[30px] font-medium text-ink">
          Thank you.
        </h3>
        <p className="mt-2.5 max-w-[340px] font-body text-[14.5px] leading-relaxed text-sage">
          We have your details, and our concierge will be in touch shortly. In
          the meantime, the mountains are keeping a place for you.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="mt-[22px] inline-flex items-center gap-2 border-b border-brass pb-[3px] font-body text-[13px] font-semibold text-forest-deep transition-colors duration-200 hover:text-brass"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
          Chat with us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div data-testid={testId}>
      {showHeader && (
        <>
          <h3
            id={`${idPrefix}-title`}
            className="font-serif-display text-[32px] font-medium leading-[1.05] text-ink"
          >
            {title}
          </h3>
          {intro ? (
            <p className="mt-1.5 font-body text-sm text-sage">{intro}</p>
          ) : null}
        </>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className={`${showHeader ? "mt-5" : ""} flex flex-col gap-3.5`}
      >
        <div className="flex flex-col gap-[7px]">
          <label htmlFor={`${idPrefix}-name`} className={labelBase}>
            Name <span className="text-brass">*</span>
          </label>
          <input
            ref={nameRef}
            id={`${idPrefix}-name`}
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={update("name")}
            data-testid={`${testId}-name`}
            className={`${fieldBase} ${errors.name ? "border-[#b4553f]" : "border-ink/[0.14]"}`}
          />
        </div>

        <div className="flex flex-col gap-[7px]">
          <label htmlFor={`${idPrefix}-phone`} className={labelBase}>
            Phone number <span className="text-brass">*</span>
          </label>
          <div className="grid grid-cols-[78px_1fr] gap-2.5">
            <div className="flex items-center justify-center gap-1.5 rounded-[3px] border border-ink/[0.14] bg-white font-body text-sm font-semibold text-ink">
              <IndiaFlag />
              +91
            </div>
            <input
              id={`${idPrefix}-phone`}
              type="tel"
              inputMode="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={update("phone")}
              data-testid={`${testId}-phone`}
              className={`${fieldBase} ${errors.phone ? "border-[#b4553f]" : "border-ink/[0.14]"}`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[7px]">
          <label htmlFor={`${idPrefix}-email`} className={labelBase}>
            Email{" "}
            <span className="font-medium normal-case tracking-normal text-sage">
              (optional)
            </span>
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={update("email")}
            className={`${fieldBase} border-ink/[0.14]`}
          />
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2">
          <div className="flex flex-col gap-[7px]">
            <label htmlFor={`${idPrefix}-arrive`} className={labelBase}>
              Arrive
            </label>
            <input
              id={`${idPrefix}-arrive`}
              type="date"
              value={form.arrive}
              onChange={update("arrive")}
              className={`${fieldBase} border-ink/[0.14]`}
            />
          </div>
          <div className="flex flex-col gap-[7px]">
            <label htmlFor={`${idPrefix}-leave`} className={labelBase}>
              Leave
            </label>
            <input
              id={`${idPrefix}-leave`}
              type="date"
              min={form.arrive || undefined}
              value={form.leave}
              onChange={update("leave")}
              className={`${fieldBase} border-ink/[0.14]`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[7px]">
          <label htmlFor={`${idPrefix}-guests`} className={labelBase}>
            Guests{" "}
            <span className="font-medium normal-case tracking-normal text-sage">
              (optional)
            </span>
          </label>
          <select
            id={`${idPrefix}-guests`}
            value={form.guests}
            onChange={update("guests")}
            className={`${fieldBase} appearance-none border-ink/[0.14] bg-[url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%235C6B5C' stroke-width='1.5'/></svg>")] bg-[right_14px_center] bg-no-repeat pr-9 ${
              form.guests ? "text-ink" : "text-[#a6a598]"
            }`}
          >
            <option value="">Select group size</option>
            {GUEST_OPTIONS.map((g) => (
              <option key={g} value={g} className="text-ink">
                {g}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-[7px]">
          <label htmlFor={`${idPrefix}-notes`} className={labelBase}>
            Anything else we should know?{" "}
            <span className="font-medium normal-case tracking-normal text-sage">
              (optional)
            </span>
          </label>
          <textarea
            id={`${idPrefix}-notes`}
            rows={3}
            placeholder="Occasion, flexible dates, anything at all"
            value={form.notes}
            onChange={update("notes")}
            className={`${fieldBase} min-h-[70px] resize-y border-ink/[0.14]`}
          />
        </div>

        <button
          type="submit"
          data-testid={`${testId}-submit`}
          className="mt-1.5 w-full rounded-[3px] bg-forest-deep px-4 py-[15px] font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-parchment transition-colors duration-300 hover:bg-forest"
        >
          Request availability
        </button>
        <p className="text-center font-body text-[11.5px] text-sage">
          No spam. Just a note from our concierge.
        </p>
      </form>
    </div>
  );
}
