import { notFound } from "next/navigation";
import { posts } from '@velite'

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const post = posts.find((p) => p.slugAsParams === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-4 py-16">
      <header className="mb-8 border-b border-neutral-200 pb-8 dark:border-neutral-800">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-500">{post.date}</p>
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {post.summary}
      </div>
    </article>
  );
}