"use client";

import React from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";
import { MEDIA, CONTACT } from "../data";

export default function Contact() {
  const waLink = `https://wa.me/${CONTACT.whatsapp}`;
  const details = [
    { icon: MapPin, label: "Location", value: CONTACT.address },
    { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with concierge", href: waLink },
  ];
  return (
    <div className="bg-forest-deep px-6 pb-28 pt-36 sm:px-10 lg:pt-44" data-testid="contact-page">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <Reveal><Overline>Reservations</Overline></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif-display text-5xl font-light leading-none text-ivory sm:text-7xl">
              Plan your stay.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl font-body text-lg font-light leading-relaxed text-ivory/70">
              Share your dates and our concierge will confirm availability and craft your retreat —
              from a quiet weekend to a longer season of stillness in the Himalayas.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="img-zoom-wrap rounded-3xl">
              <img src={MEDIA.heroMountains} alt="Vedanta location" className="img-zoom h-80 w-full rounded-3xl object-cover" />
            </div>
            <div className="mt-10 space-y-6">
              {details.map((d) => {
                const Icon = d.icon;
                const inner = (
                  <div className="flex items-start gap-4 border-t border-gold/15 pt-5">
                    <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-gold" strokeWidth={1.4} />
                    <div>
                      <p className="font-body text-[10px] uppercase tracking-[0.3em] text-gold">{d.label}</p>
                      <p className="mt-1 font-body text-sm font-light text-ivory/75">{d.value}</p>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} target="_blank" rel="noreferrer" className="block transition-opacity duration-300 hover:opacity-80">
                    {inner}
                  </a>
                ) : (
                  <div key={d.label}>{inner}</div>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.15} className="rounded-3xl border border-gold/15 bg-forest/40 p-8 backdrop-blur-sm sm:p-10">
            <EnquiryForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
