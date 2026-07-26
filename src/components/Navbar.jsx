"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Residences", to: "/villas" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blogs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (to) => {
    setOpen(false);
    if (to === "/") {
      if (pathname !== "/") {
        router.push("/");
      } else {
        window.scrollTo({ top: 0 });
      }
      return;
    }
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => document.getElementById(id)?.scrollIntoView(), 300);
      } else {
        document.getElementById(id)?.scrollIntoView();
      }
    } else {
      router.push(to);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <>
      <header
        data-testid="navbar"
        className="pointer-events-none fixed inset-x-0 top-0 z-[9995] px-4 pt-5 sm:px-6 sm:pt-6"
      >
        <div
          className={`pointer-events-auto mx-auto flex max-w-[1400px] items-center justify-between rounded-full bg-white px-4 py-3 shadow-[0_8px_40px_rgba(26,26,26,0.08)] transition-all duration-300 sm:px-6 sm:py-3.5 ${
            scrolled ? "shadow-[0_12px_48px_rgba(26,26,26,0.12)]" : ""
          }`}
        >
          <button
            onClick={() => handleNav("/")}
            data-testid="logo-home"
            className="text-left leading-none"
            aria-label="Vedanta by Vaishno Group — Home"
          >
            <img
              src="/Homepage/vedanta-logo.png"
              alt="Vedanta by Vaishno Group"
              className="h-9 w-auto sm:h-11"
            />
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <button
                key={l.label}
                data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => handleNav(l.to)}
                className="font-body text-sm font-medium text-slate/70 transition-colors duration-200 hover:text-forest"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              data-testid="nav-enquire"
              onClick={() => handleNav("/contact")}
              className="hidden rounded-full bg-forest px-5 py-2.5 font-body text-sm font-medium text-ivory transition-colors duration-200 hover:bg-forest-light sm:block"
            >
              Contact us
            </button>

            <button
              className="text-forest lg:hidden"
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu strokeWidth={1.75} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[9996] flex flex-col bg-forest-deep transition-opacity duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        data-testid="mobile-menu"
      >
        <div className="flex items-center justify-between px-6 py-6">
          <img
            src="/Homepage/vedanta-white-logo.png"
            alt="Vedanta by Vaishno Group"
            className="h-9 w-auto"
          />
          <button
            onClick={() => setOpen(false)}
            data-testid="mobile-menu-close"
            aria-label="Close menu"
            className="text-ivory"
          >
            <X strokeWidth={1.75} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.to)}
              className="font-body text-2xl font-medium text-ivory/90"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("/contact")}
            className="mt-4 rounded-full bg-ivory px-8 py-3 font-body text-sm font-medium text-forest"
          >
            Contact us
          </button>
        </nav>
      </div>
    </>
  );
}
