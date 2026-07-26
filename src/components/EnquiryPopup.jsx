"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { BROCHURE } from "../data";
import EnquiryForm from "./EnquiryForm";

/** Any button on the site can open the popup by dispatching this event. */
export const OPEN_ENQUIRY_EVENT = "vedanta:open-enquiry";

export const openEnquiryPopup = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_ENQUIRY_EVENT));
  }
};

const EASE = [0.16, 0.84, 0.44, 1];

const HIGHLIGHTS = [
  "Eight private Himalayan mansions",
  "Set at 8,500 ft, full valley views",
  "5,500 sq.ft villas with private lawns",
];

function Contours() {
  return (
    <svg
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]"
    >
      <g fill="none" stroke="#C4A878" strokeWidth="1">
        <path d="M-20 120 C 80 70 150 150 240 100 S 420 130 460 90" />
        <path d="M-20 180 C 90 130 160 210 250 160 S 430 190 470 150" />
        <path d="M-20 250 C 70 200 170 280 260 230 S 440 260 480 220" />
        <path d="M-20 330 C 100 280 150 360 250 310 S 430 340 470 300" />
        <path d="M-20 420 C 80 370 180 450 270 400 S 440 430 480 390" />
        <path d="M-20 510 C 90 460 160 540 260 490 S 430 520 470 480" />
      </g>
    </svg>
  );
}

export default function EnquiryPopup({ autoOpenDelay = 6000, autoOpen = true }) {
  const [open, setOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const nameRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!autoOpen) return;
    const timer = setTimeout(() => {
      setOpen(true);
    }, autoOpenDelay);
    return () => clearTimeout(timer);
  }, [autoOpen, autoOpenDelay]);

  useEffect(() => {
    const handleOpen = () => {
      setFormKey((k) => k + 1);
      setOpen(true);
    };
    window.addEventListener(OPEN_ENQUIRY_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_ENQUIRY_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = setTimeout(() => nameRef.current?.focus(), 420);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      clearTimeout(focusTimer);
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="enquiry-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#09110D]/[0.62] p-4 backdrop-blur-[3px] sm:p-6"
          data-testid="enquiry-popup-overlay"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-enq-title"
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.985 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative grid max-h-[calc(100vh-2rem)] w-full max-w-[940px] overflow-y-auto rounded-[4px] bg-parchment shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:max-h-[calc(100vh-3rem)] md:grid-cols-[0.82fr_1fr] md:grid-rows-[minmax(0,1fr)] md:overflow-hidden"
            data-testid="enquiry-popup"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              data-testid="enquiry-popup-close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 bg-forest-deep/35 text-parchment transition-colors duration-200 hover:bg-forest-deep/60"
            >
              <X className="h-4 w-4" strokeWidth={1.8} />
            </button>

            <aside className="relative flex min-h-0 flex-col overflow-hidden bg-forest-deep px-7 pb-8 pt-9 text-parchment sm:px-9 sm:pb-10 sm:pt-11">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${BROCHURE.villaTwilight}')` }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#0D1B15]/[0.62] to-[#0D1B15]/90"
                aria-hidden="true"
              />
              <Contours />

              <div className="relative">
                <span className="block font-serif-display text-[26px] font-semibold leading-none tracking-[0.16em]">
                  VEDANTA
                </span>
                <span className="mt-[7px] block font-body text-[9.5px] uppercase tracking-[0.34em] text-brass-soft">
                  by Vaishno Group
                </span>
              </div>

              <span className="relative mt-7 self-start rounded-full border border-ivory/15 bg-brass/[0.12] px-[15px] py-2 font-body text-[10.5px] font-semibold uppercase tracking-[0.2em]">
                Only 8 residences · Kufri
              </span>

              <h2 className="relative mt-8 font-serif-display text-[34px] font-medium leading-[1.02] tracking-[0.01em] md:mt-auto lg:text-[46px]">
                Come back to
                <br />
                <em className="italic text-brass-soft">yourself.</em>
              </h2>

              <p className="relative mt-4 font-body text-[14.5px] font-light leading-relaxed text-parchment/[0.78]">
                Share a few details and our concierge will check availability
                and shape a stay around you. Usually the same day.
              </p>

              <ul className="relative mt-6 flex flex-col gap-3">
                {HIGHLIGHTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-[13.5px] text-parchment/90"
                  >
                    <Check
                      className="mt-0.5 h-[15px] w-[15px] shrink-0 text-brass-soft"
                      strokeWidth={2.4}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="relative mt-7 hidden border-t border-ivory/15 pt-6 font-serif-display text-base italic text-parchment/75 md:block">
                Above the noise. Yours for a while.
              </p>
            </aside>

            <div className="min-h-0 px-7 py-8 sm:px-10 sm:py-9 md:overflow-y-auto md:overscroll-contain">
              <EnquiryForm
                key={formKey}
                idPrefix="popup-enq"
                testId="enquiry-popup"
                nameRef={nameRef}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
