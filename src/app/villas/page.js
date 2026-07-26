import { redirect } from "next/navigation";

export const dynamic = "force-static";

/** Legacy URL — permanently redirected in next.config.js; keep page for safety. */
export default function Page() {
  redirect("/luxury-villas-in-kufri");
}
