import Link from 'next/link'
import { posts } from '@velite'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short', // use 'long' for "November", or '2-digit' for "11"
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC', // prevents off-by-one-day shifts from timezone conversion
  }).format(date)
}

export default function BlogPageIndex() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-white">Blog</h1>
        <p className="text-slate-400 text-sm">
          Thoughts on Software engineering, AI, Life, Entrepreneurship and Building products. (I write by hand, not AI generated)
        </p>
      </header>

      <div className="divide-y divide-slate-800 border-t border-b border-slate-800">
        {sortedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slugAsParams}`}
            className="group block py-6 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h2 className="font-medium text-slate-200 group-hover:text-white transition-colors">
                {post.title}
              </h2>
              <time dateTime={post.date} className="text-xs text-slate-500 font-mono">
                {formatDate(post.date)}
              </time>
            </div>
            <p className="mt-2 text-sm text-slate-400 line-clamp-2">
              {post.summary}
            </p>
          </Link>
        ))}
        {sortedPosts.length === 0 && (
          <p className="py-6 text-sm text-slate-500 italic">No posts found.</p>
        )}
      </div>
    </div>
  )
}