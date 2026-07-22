"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Reveal, SectionTitle, SectionLead } from "./Reveal";
import useCountUp from "../hooks/useCountUp";

function StatValue({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(stat.value, { enabled: inView });

  return (
    <div
      ref={ref}
      className="absolute bottom-7 left-7 z-20 flex max-w-[52%] flex-wrap items-baseline gap-x-2 gap-y-0 sm:bottom-8 sm:left-8"
    >
      <span className="font-body text-[2.75rem] font-bold leading-none tracking-tight text-gold sm:text-[3.25rem] lg:text-[3.75rem]">
        {count.toLocaleString()}
        {stat.suffix}
      </span>
      {stat.unit ? (
        <span className="font-body text-base font-medium text-ivory/55 sm:text-lg">
          {stat.unit}
        </span>
      ) : null}
    </div>
  );
}

function StatCardImages({ primary, secondary }) {
  return (
    <div
      className="pointer-events-none absolute bottom-0 right-0 z-0 h-[210px] w-[210px] sm:h-[230px] sm:w-[230px]"
      aria-hidden="true"
    >
      <div className="absolute bottom-[72px] right-[88px] z-0 origin-bottom-right rotate-[16deg] sm:bottom-[80px] sm:right-[98px]">
        <img
          src={secondary || primary}
          alt=""
          className="h-[140px] w-[98px] rounded-[20px] object-cover shadow-[0_12px_32px_rgba(0,0,0,0.35)] sm:h-[156px] sm:w-[108px]"
        />
      </div>
      <div className="absolute bottom-[-10px] right-[-10px] z-10 origin-bottom-right rotate-[16deg] sm:bottom-[-12px] sm:right-[-12px]">
        <img
          src={primary}
          alt=""
          className="h-[158px] w-[110px] rounded-[20px] object-cover shadow-[0_16px_40px_rgba(0,0,0,0.4)] sm:h-[176px] sm:w-[122px]"
        />
      </div>
    </div>
  );
}

function StatCard({ stat, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card-panel-lg relative flex h-full min-h-[320px] flex-col overflow-hidden p-7 sm:min-h-[340px] sm:p-8">
        <div className="relative z-10 pr-28 sm:pr-32">
          <h3 className="font-serif-display text-xl text-ivory sm:text-2xl">
            {stat.title}
          </h3>
          <p className="mt-3 font-body text-sm font-normal leading-relaxed text-ivory/60">
            {stat.text}
          </p>
        </div>

        <div className="mt-auto min-h-[120px]" aria-hidden="true" />

        <StatValue stat={stat} />
        <StatCardImages primary={stat.thumb} secondary={stat.thumbSecondary} />
      </article>
    </Reveal>
  );
}

export default function TrustStats({
  stats,
  heroImage,
  title,
  subtitle,
}) {
  return (
    <section
      id="trust-stats"
      className="bg-section px-6 py-14 sm:px-10 lg:py-20"
      data-testid="trust-stats-section"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionTitle className="text-center">{title}</SectionTitle>
          </Reveal>
          <Reveal delay={0.06}>
            <SectionLead className="mx-auto mt-6 max-w-2xl text-center">
              {subtitle}
            </SectionLead>
          </Reveal>
        </div>

        <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal delay={0.1} className="h-full lg:col-span-4">
            <div className="h-full min-h-[360px] overflow-hidden rounded-[1.75rem] ring-1 ring-gold/20 sm:min-h-[520px] lg:min-h-[680px]">
              <img
                src={heroImage}
                alt="Vedanta Mansions in Kufri"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8 lg:gap-6">
            {stats.map((stat, i) => (
              <StatCard key={stat.title} stat={stat} delay={0.06 * i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
