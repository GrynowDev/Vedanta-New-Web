import VillasPage from "@/views/Villas";

export const dynamic = "force-static";

export const metadata = {
  title: {
    absolute: "Luxury Villas in Kufri | Private Mountain-View Villas Near Shimla",
  },
  description:
    "Book private luxury villas in Kufri near Shimla. Mountain views, in-house cook, bonfire lawns and full privacy for families, groups and getaways. Enquire now.",
  alternates: {
    canonical: "/luxury-villas-in-kufri",
  },
  openGraph: {
    title: "Luxury Villas in Kufri | Private Mountain-View Villas Near Shimla",
    description:
      "Book private luxury villas in Kufri near Shimla. Mountain views, in-house cook, bonfire lawns and full privacy for families, groups and getaways.",
    url: "/luxury-villas-in-kufri",
  },
};

export default function Page() {
  return <VillasPage />;
}
