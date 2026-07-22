import VillasPage from "@/views/Villas";

export const metadata = {
  title: "Residences & Villas",
  description:
    "Explore Vedanta residences in Kufri — spacious Himalayan villas with private decks, cedar interiors, and panoramic mountain views.",
  alternates: {
    canonical: "/villas",
  },
  openGraph: {
    title: "Residences & Villas | Vedanta",
    description:
      "Spacious Himalayan villas with private decks, cedar interiors, and panoramic mountain views in Kufri.",
    url: "/villas",
  },
};

export default function Page() {
  return <VillasPage />;
}
