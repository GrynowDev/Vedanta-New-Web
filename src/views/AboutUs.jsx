"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import { CONTACT } from "../data";

const TEAM = [
  { name: "Sunil Miglani", role: "Chairman", initials: "SM" },
  { name: "Akash Miglani", role: "Director", initials: "AM" },
];

export default function AboutUs() {
  return (
    <div className="bg-forest-deep" data-testid="about-us-page">
      <section className="px-6 pb-28 pt-36 sm:px-10 lg:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Overline>About Vedanta</Overline>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-serif-display text-5xl font-light leading-none text-ivory sm:text-7xl">
                About Us
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mx-auto mt-8 max-w-2xl font-body text-lg font-light leading-relaxed text-ivory/70 sm:text-xl">
                Vedanta by Vaishno Group is a private collection of Himalayan residences
                in Kufri — designed for calm, crafted with care, and guided by leadership
                that believes in thoughtful hospitality.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 sm:px-10 lg:pb-32" aria-label="Leadership">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
                Leadership
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={0.06 * i}>
                <article className="relative overflow-hidden rounded-3xl border border-gold/10 bg-[#0E1C16] p-7">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />

                  <div className="relative">
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-forest-deep text-gold">
                        <span className="font-serif-display text-2xl font-light">
                          {member.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-body text-[11px] uppercase tracking-[0.28em] text-gold">
                          {member.role}
                        </p>
                        <h3 className="mt-3 font-serif-display text-3xl font-light text-ivory">
                          {member.name}
                        </h3>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start gap-3 font-body text-sm font-light leading-relaxed text-ivory/70">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-gold" strokeWidth={2} />
                        Commitment to privacy-first living in Kufri.
                      </li>
                      <li className="flex items-start gap-3 font-body text-sm font-light leading-relaxed text-ivory/70">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-gold" strokeWidth={2} />
                        Crafted spaces that feel quiet, warm, and timeless.
                      </li>
                      <li className="flex items-start gap-3 font-body text-sm font-light leading-relaxed text-ivory/70">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-gold" strokeWidth={2} />
                        Concierge-led guest experience, built around your needs.
                      </li>
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-24 pt-10 sm:px-10 lg:pb-32" data-testid="about-cta">
        <div className="absolute inset-0 bg-forest-deep/60" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Overline>Next step</Overline>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif-display text-4xl font-light leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
                Enquire About A Stay In Kufri
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mx-auto mt-6 max-w-xl font-body text-base font-light leading-relaxed text-ivory/70">
                Share your dates and group size. Our concierge will confirm availability and guide you to the best villa.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-gold px-10 py-3.5 font-body text-xs font-semibold uppercase tracking-[0.22em] text-forest transition-colors duration-300 hover:bg-ivory"
              >
                Contact us
              </Link>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-10 py-3.5 font-body text-xs font-semibold uppercase tracking-[0.22em] text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                WhatsApp Now
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

