import GalleryPage from "@/views/Gallery";

export const dynamic = "force-static";

export const metadata = {
  title: "Gallery",
  description:
    "Browse the Vedanta gallery — exteriors, interiors, nature, and wellness moments from our private Himalayan sanctuary in Kufri.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Vedanta",
    description:
      "Exteriors, interiors, nature, and wellness moments from Vedanta in Kufri.",
    url: "/gallery",
  },
};

export default function Page() {
  return <GalleryPage />;
}
