"use client";

import React from "react";
import { Star } from "lucide-react";
import { MEDIA } from "../data";
import { Reveal, Overline, SectionTitle, SectionLead } from "./Reveal";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < fullStars || (i === fullStars && hasHalf);
          return (
            <Star
              key={i}
              className={`h-4 w-4 ${filled ? "fill-gold text-gold" : "fill-transparent text-ivory/25"}`}
              strokeWidth={1.5}
            />
          );
        })}
      </div>
      <span className="font-body text-sm text-ivory/55">
        {rating.toFixed(1)} Rated by happy guests
      </span>
    </div>
  );
}

function TestimonialCard({ item, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="card-panel flex h-full flex-col p-6 sm:p-7">
        <StarRating rating={item.rating} />
        <p className="mt-5 flex-1 font-body text-sm leading-relaxed text-ivory/70 sm:text-base">
          {item.quote}
        </p>
        <div className="mt-6 flex items-center gap-3 border-t border-gold/10 pt-5">
          <img
            src={item.avatar}
            alt={item.name}
            loading="lazy"
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-gold/20"
          />
          <div>
            <p className="font-body text-sm font-semibold text-ivory">{item.name}</p>
            <p className="font-body text-xs text-ivory/50">{item.role}</p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function TestimonialsSection({ items }) {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-6 py-16 sm:px-10 lg:py-24"
      data-testid="testimonials-section"
    >
      <div className="absolute inset-0">
        <img
          src={MEDIA.testimonialsBg}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/90 via-forest-deep/70 to-forest-deep/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Overline>In Their Words</Overline>
          </Reveal>
          <Reveal delay={0.06}>
            <SectionTitle className="mt-6 text-center">
              Real experiences, real trust —
              <br />
              Himalayan retreats you can rely on
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLead className="mx-auto mt-6 max-w-2xl text-center">
              Hear from guests and partners who discovered stillness, privacy,
              and unhurried mountain living at Vedanta.
            </SectionLead>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item, i) => (
            <TestimonialCard key={item.name} item={item} delay={0.06 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
