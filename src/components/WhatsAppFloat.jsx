"use client";

import { CONTACT } from "../data";

function WhatsAppIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2a10 10 0 00-8.7 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm5.5 14c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3-1s-3.3-3.4-3.4-3.6-.9-1.2-.9-2.3.6-1.6.8-1.8a.8.8 0 01.6-.3h.4c.2 0 .3 0 .5.5l.7 1.7c0 .2.1.3 0 .5l-.4.5c-.2.2-.3.3-.1.6s.7 1.1 1.4 1.7c1 .8 1.6 1 1.9 1.1s.4 0 .6-.2l.7-.9c.2-.2.3-.2.6-.1l1.6.8c.3.1.4.2.5.3s0 .6-.1 1z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const href = `https://api.whatsapp.com/send?phone=${CONTACT.whatsapp}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      data-testid="whatsapp-float"
      className="fixed bottom-[5.75rem] right-6 z-[9997] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 hover:scale-105 hover:bg-[#20bd5a]"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
