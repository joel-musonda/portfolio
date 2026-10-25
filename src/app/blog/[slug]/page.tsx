import { notFound } from "next/navigation";
import { posts } from '@velite';
import { MdxContent } from "@/components/MdxContent";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export default async function BlogPostPage({ params }: PostPageProps) {
  // Await params in Next.js 15/16
  const { slug } = await params;
  const post = posts.find((p) => p.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-4 py-16">
      <header className="mb-8 border-b border-neutral-900 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-100">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-500 font-mono">{post.date}</p>
      </header>

      {/* Renders your MDX content with Tailwind typography prose styles */}
      <div className="prose prose-invert prose-neutral max-w-none">
        <MdxContent code={post.code} />
      </div>
    </article>
  );
}