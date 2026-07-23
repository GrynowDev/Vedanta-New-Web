import HomePage from "@/views/Home";

export const dynamic = "force-static";

export const metadata = {
  title: "Vedanta — A Private Himalayan Sanctuary in Kufri",
  description:
    "Vedanta by Vaishno Group — private Himalayan residences in Kufri for intimate mountain stays. Forests, stillness, and elevated living at 8,500 feet.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vedanta — A Private Himalayan Sanctuary in Kufri",
    description:
      "A private collection of mountain mansions in Kufri, reserved for a handful of guests at a time.",
    url: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
