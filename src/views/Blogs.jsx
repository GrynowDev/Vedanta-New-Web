"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Reveal, Overline } from "../components/Reveal";
import { BLOGS } from "../data";

const CATS = ["All", ...Array.from(new Set(BLOGS.map((b) => b.category)))];

export default function Blogs() {
  const [cat, setCat] = useState("All");
  const items = useMemo(
    () => (cat === "All" ? BLOGS : BLOGS.filter((b) => b.category === cat)),
    [cat],
  );

  return (
    <div
      className="bg-forest-deep px-6 pb-28 pt-36 sm:px-10 lg:pt-44"
      data-testid="blogs-page"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Overline>Journal</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif-display text-5xl font-light leading-none text-ivory sm:text-7xl">
              Stories From The Mountain.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl font-body text-base font-light leading-relaxed text-ivory/65 sm:text-lg">
              Notes on Kufri, slow stays, design, and the quiet craft of
              Himalayan living at Vedanta.
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

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {items.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/blogs/${post.slug}`}
                data-testid={`blog-card-${post.slug}`}
                className="group block"
              >
                <div className="img-zoom-wrap relative overflow-hidden">
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
          <p className="mt-20 text-center font-body text-ivory/50">
            No stories in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
