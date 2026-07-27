"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const GUEST_OPTIONS = ["1 – 2", "3 – 4", "5 – 6", "7 or more"];

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "8147cf74-7a1e-42f6-a622-e49f0113dc67";

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

/**
 * Shared enquiry form used by the homepage contact section, contact page,
 * and the enquiry popup. Submits via Web3Forms, then redirects to /thank-you.
 */
export default function EnquiryForm({
  idPrefix = "enq",
  title = "Plan Your Retreat",
  intro = "A minute now, and a quiet reply from our concierge.",
  showHeader = true,
  nameRef: externalNameRef,
  onSubmitted,
  testId = "enquiry-form",
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const internalNameRef = useRef(null);
  const nameRef = externalNameRef || internalNameRef;

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: false } : prev));
    if (formError) setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    const nextErrors = {
      name: !form.name.trim(),
      phone: !form.phone.trim(),
    };
    if (nextErrors.name || nextErrors.phone) {
      setErrors(nextErrors);
      return;
    }

    if (form.email.trim()) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
      if (!emailOk) {
        setFormError("Please enter a valid email address.");
        return;
      }
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append(
        "subject",
        `New Vedanta Enquiry – ${form.name.trim()}`,
      );
      formData.append("from_name", "Vedanta by Vaishno Group");
      formData.append("name", form.name.trim());
      formData.append("phone", `+91 ${form.phone.trim()}`);
      formData.append("email", form.email.trim() || "Not provided");
      formData.append("arrive", form.arrive || "Not provided");
      formData.append("leave", form.leave || "Not provided");
      formData.append("guests", form.guests || "Not provided");
      formData.append("message", form.notes.trim() || "No additional notes");
      if (form.email.trim()) {
        formData.append("replyto", form.email.trim());
      }
      // Honeypot — leave empty; bots often fill it
      formData.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Submission failed");
      }

      setForm(EMPTY_FORM);
      setErrors({});
      onSubmitted?.();
      router.push("/thank-you");
    } catch {
      setFormError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

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
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={update("name")}
            data-testid={`${testId}-name`}
            disabled={submitting}
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
              name="phone"
              inputMode="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={update("phone")}
              data-testid={`${testId}-phone`}
              disabled={submitting}
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
            name="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={update("email")}
            disabled={submitting}
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
              name="arrive"
              value={form.arrive}
              onChange={update("arrive")}
              disabled={submitting}
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
              name="leave"
              min={form.arrive || undefined}
              value={form.leave}
              onChange={update("leave")}
              disabled={submitting}
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
            name="guests"
            value={form.guests}
            onChange={update("guests")}
            disabled={submitting}
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
            name="message"
            rows={3}
            placeholder="Occasion, flexible dates, anything at all"
            value={form.notes}
            onChange={update("notes")}
            disabled={submitting}
            className={`${fieldBase} min-h-[70px] resize-y border-ink/[0.14]`}
          />
        </div>

        {formError ? (
          <p
            className="font-body text-sm text-[#b4553f]"
            data-testid={`${testId}-error`}
            role="alert"
          >
            {formError}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          data-testid={`${testId}-submit`}
          className="mt-1.5 w-full rounded-[3px] bg-forest-deep px-4 py-[15px] font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-parchment transition-colors duration-300 hover:bg-forest disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Sending…" : "Request availability"}
        </button>
        <p className="text-center font-body text-[11.5px] text-sage">
          No spam. Just a note from our concierge.
        </p>
      </form>
    </div>
  );
}
