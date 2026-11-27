import { notFound } from "next/navigation";
import { posts } from "@velite";
import { MdxContent } from "@/components/MdxContent";
import { ScrollTracker } from "@/components/ScrollTracker";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
      <header className="mb-10 border-b border-neutral-800 pb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 leading-snug">
          {post.title}
        </h1>
        <p className="mt-3 text-xs text-neutral-400 font-mono">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {" · "}
          {post.metadata.readingTime} min read
        </p>
      </header>

      <div id="post-content" className="prose prose-invert max-w-none">
        <MdxContent code={post.code} />
      </div>

      <ScrollTracker targetId="post-content" />
    </article>
  );
}