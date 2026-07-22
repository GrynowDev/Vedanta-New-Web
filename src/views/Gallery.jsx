"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Overline } from "../components/Reveal";
import { GALLERY } from "../data";

const CATS = ["All", "Exterior", "Interior", "Nature", "Wellness"];

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat);

  return (
    <div className="bg-forest-deep px-6 pb-28 pt-36 sm:px-10 lg:pt-44" data-testid="gallery-page">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><Overline>Gallery</Overline></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif-display text-5xl font-light leading-none text-ivory sm:text-7xl">
              An editorial of stillness.
            </h1>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {CATS.map((c) => (
            <button
              key={c}
              data-testid={`gallery-filter-${c.toLowerCase()}`}
              onClick={() => setCat(c)}
              className={`rounded-full border px-6 py-2.5 font-body text-[11px] uppercase tracking-[0.22em] transition-all duration-300 ${
                cat === c ? "border-gold bg-gold text-forest" : "border-ivory/25 text-ivory/70 hover:border-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          <AnimatePresence>
            {items.map((g, i) => (
              <motion.div
                layout
                key={g.img}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (i % 6) * 0.04 }}
                className="img-zoom-wrap group relative break-inside-avoid rounded-3xl"
                data-testid={`gallery-item-${i}`}
              >
                <img src={g.img} alt={g.cat} className="img-zoom w-full rounded-3xl object-cover" />
                <div className="absolute inset-0 flex items-end rounded-3xl bg-gradient-to-t from-forest-deep/80 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold">{g.cat}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
