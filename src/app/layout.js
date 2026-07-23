import Script from "next/script";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

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
      <head>
        {/* Google Tag Manager */}
        {GTM_ID && (
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}

        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
