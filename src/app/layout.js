import "./globals.css";
import SiteShell from "@/components/SiteShell";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vedanta — A Private Himalayan Sanctuary in Kufri",
    template: "%s | Vedanta by Vaishno Group",
  },
  description:
    "Vedanta — a private collection of Himalayan mansions in Kufri, kept for immersive short stays. Cedar forests, mountain air, and the rare quiet of 8,500 feet.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Vedanta by Vaishno Group",
    title: "Vedanta — A Private Himalayan Sanctuary in Kufri",
    description:
      "Come back to yourself. A private collection of mountain mansions in Kufri, reserved for a handful of guests at a time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedanta — A Private Himalayan Sanctuary in Kufri",
    description:
      "Come back to yourself. A private collection of mountain mansions in Kufri, reserved for a handful of guests at a time.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#12241D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
