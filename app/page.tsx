import { redirect } from "next/navigation";

// This page should never be reached in normal operation —
// the middleware redirects / to /{locale}.
// This is a fallback redirect to English.
export default function RootPage() {
  redirect("/en");
}
