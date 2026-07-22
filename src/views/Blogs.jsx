"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import { BLOGS, formatBlogDate } from "../data";

const CATS = ["All", ...Array.from(new Set(BLOGS.map((b) => b.category)))];

export default function Blogs() {
  const [cat, setCat] = useState("All");
  const items = useMemo(
    () => (cat === "All" ? BLOGS : BLOGS.filter((b) => b.category === cat)),
    [cat],
  );
  const [featured, ...rest] = items;

  return (
    <div className="bg-forest-deep px-6 pb-28 pt-36 sm:px-10 lg:pt-44" data-testid="blogs-page">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Overline>Journal</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif-display text-5xl font-light leading-none text-ivory sm:text-7xl">
              Stories from the mountain.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl font-body text-base font-light leading-relaxed text-ivory/65 sm:text-lg">
              Notes on Kufri, slow stays, design, and the quiet craft of Himalayan living at Vedanta.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              data-testid={`blog-filter-${c.toLowerCase()}`}
              onClick={() => setCat(c)}
              className={`rounded-full border px-6 py-2.5 font-body text-[11px] uppercase tracking-[0.22em] transition-all duration-300 ${
                cat === c
                  ? "border-gold bg-gold text-forest"
                  : "border-ivory/25 text-ivory/70 hover:border-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {featured && (
          <Reveal delay={0.1}>
            <Link
              href={`/blogs/${featured.slug}`}
              data-testid="blog-featured"
              className="group mt-16 grid overflow-hidden border border-gold/15 lg:grid-cols-2"
            >
              <div className="img-zoom-wrap relative min-h-[280px] sm:min-h-[360px] lg:min-h-[460px]">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="img-zoom absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center bg-forest/40 px-8 py-10 sm:px-12 sm:py-14">
                <span className="font-body text-[11px] uppercase tracking-[0.3em] text-gold">
                  {featured.category} · {formatBlogDate(featured.date)}
                </span>
                <h2 className="mt-5 font-serif-display text-3xl font-light leading-tight text-ivory transition-colors duration-300 group-hover:text-gold sm:text-4xl lg:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-lg font-body text-sm font-light leading-relaxed text-ivory/65 sm:text-base">
                  {featured.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.25em] text-ivory/80">
                  Read article
                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/blogs/${post.slug}`}
                data-testid={`blog-card-${post.slug}`}
                className="group block"
              >
                <div className="img-zoom-wrap relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="img-zoom h-full w-full object-cover"
                  />
                </div>
                <span className="mt-5 block font-body text-[10px] uppercase tracking-[0.28em] text-gold">
                  {post.category} · {post.readTime}
                </span>
                <h3 className="mt-3 font-serif-display text-2xl font-light leading-snug text-ivory transition-colors duration-300 group-hover:text-gold">
                  {post.title}
                </h3>
                <p className="mt-3 font-body text-sm font-light leading-relaxed text-ivory/60 line-clamp-3">
                  {post.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        {!items.length && (
          <p className="mt-20 text-center font-body text-ivory/50">No stories in this category yet.</p>
        )}
      </div>
    </div>
  );
}
