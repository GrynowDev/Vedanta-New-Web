"use client";

import { Toaster } from "@/components/ui/sonner";

export default function AppToaster() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#1A362D",
          border: "1px solid rgba(212,175,55,0.3)",
          color: "#F9F6F0",
          fontFamily: "Outfit, sans-serif",
        },
      }}
    />
  );
}
