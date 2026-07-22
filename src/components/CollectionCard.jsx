"use client";

import React from "react";
import { BedDouble, Bath, ArrowUpRight } from "lucide-react";
import { Reveal, Overline, SectionTitle, SectionLead } from "./Reveal";

export default function CollectionCard({ item, onClick }) {
  const CardWrapper = onClick ? "button" : "article";

  return (
    <CardWrapper
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={`group w-full text-left ${onClick ? "cursor-pointer" : ""}`}
      data-testid={`collection-card-${item.slug}`}
    >
      <div className="relative overflow-hidden rounded-[1.25rem] border border-gold/15">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          className="h-[240px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:h-[280px]"
        />
        {item.badge && (
          <span className="absolute left-4 top-4 rounded-full border border-gold/25 bg-forest/80 px-4 py-1.5 font-body text-xs font-medium text-ivory shadow-sm backdrop-blur-sm">
            {item.badge}
          </span>
        )}
        <div className="absolute inset-x-3 bottom-3 rounded-xl border border-gold/15 bg-forest/85 px-5 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-colors duration-300 group-hover:bg-forest">
          <h3 className="font-serif-display text-lg text-ivory sm:text-xl">
            {item.title}
          </h3>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-sm text-ivory/60">
        <span className="inline-flex items-center gap-1.5">
          <BedDouble className="h-4 w-4" strokeWidth={1.5} />
          {item.beds}
        </span>
        <span className="text-ivory/25">·</span>
        <span className="inline-flex items-center gap-1.5">
          <Bath className="h-4 w-4" strokeWidth={1.5} />
          {item.baths}
        </span>
      </div>

      <p className="mt-2 font-body text-sm text-ivory/60">
        <span className="font-semibold text-gold">{item.area}</span>
        <span className="mx-2 text-ivory/25">·</span>
        <span>{item.location}</span>
      </p>
    </CardWrapper>
  );
}

export function CollectionHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <Overline>The Collection</Overline>
      </Reveal>
      <Reveal delay={0.06}>
        <SectionTitle className="mt-6 text-center">
          Step inside,
          <br />
          and exhale.
        </SectionTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <SectionLead className="mx-auto mt-6 max-w-2xl text-center">
          Eight private Himalayan mansions — each room considered, each view
          unhurried. Explore the spaces that define life at Vedanta.
        </SectionLead>
      </Reveal>
    </div>
  );
}

export function CollectionSeeAll({ onClick }) {
  if (!onClick) return null;

  return (
    <Reveal delay={0.2} className="mt-14 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        data-testid="collection-see-all-btn"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-sm font-medium text-forest transition-colors duration-200 hover:bg-ivory"
      >
        See All Residences
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
      </button>
    </Reveal>
  );
}
