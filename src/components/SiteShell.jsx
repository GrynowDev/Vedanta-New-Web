"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Snowfall from "@/components/Snowfall";
import AmbientSound from "@/components/AmbientSound";

export default function SiteShell({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App grain min-h-screen">
      <Navbar />
      <Snowfall count={55} />
      <AmbientSound />
      <main>{children}</main>
      <Footer />
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
    </div>
  );
}
