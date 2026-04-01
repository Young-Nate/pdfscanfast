import { redirect } from "next/navigation";

// Redirect old /blog to /en/blog
export default function OldBlogPage() {
  redirect("/en/blog");
}
