import { redirect } from "next/navigation";

// Redirect old /blog/[slug] to /en/blog/[slug]
export default function OldBlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  redirect(`/en/blog/${params.slug}`);
}
