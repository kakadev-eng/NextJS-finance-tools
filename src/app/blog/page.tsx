import Link from "next/link";

import { getPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="mb-10 text-5xl font-bold">
        Finance Blog
      </h1>

      <div className="space-y-6">
        {posts.map((post: any) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h2 className="mb-2 text-3xl font-bold">
              {post.title}
            </h2>

            <p className="text-zinc-400">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}