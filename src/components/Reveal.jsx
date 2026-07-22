"use client";

import React from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export const Reveal = ({ children, delay = 0, y = 40, className = "", ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 1.2, ease: EASE, delay }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const Overline = ({ children, className = "" }) => (
  <span
    className={`font-body text-[11px] sm:text-xs uppercase tracking-[0.35em] text-gold ${className}`}
  >
    {children}
  </span>
);

export const SectionTitle = ({
  as: Tag = "h2",
  children,
  className = "",
  ...rest
}) => (
  <Tag
    className={`font-serif-display text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl ${className}`}
    {...rest}
  >
    {children}
  </Tag>
);

export const SectionLead = ({ children, className = "" }) => (
  <p
    className={`font-body text-base font-light leading-relaxed text-ivory/70 sm:text-lg ${className}`}
  >
    {children}
  </p>
);

export default Reveal;
