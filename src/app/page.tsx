import Link from 'next/link'
import { posts } from '@velite'
export default function Home() {
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="space-y-4 pt-4">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
          Hi, I'm a Developer & Writer.
        </h1>
        <p className="text-neutral-400 leading-relaxed text-base">
          I'm fascinated by neural networks, human computer interaction, economic growth and the wonderfully inconvenient process of making computers do useful things.
          AI is going to fundamentally change the way we work, learn, create and interact with computers, Can we create it so it can continously perceve the world, learn from it, and make decisions based on that knowledge?
          Can we proliferate it to every human being on the planet, so that we can all have access to the same knowledge and information? 
          I hope to study Computer Science to get the Theoretical and mathematical foundation needed to attempt at the former, in doing so more talent, effort and resources can be devoted to the latter 
        </p>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="space-y-6">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-wider">
          // Selected Projects
        </h2>
        <div className="grid gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="group block p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-neutral-200 group-hover:text-white transition-colors">
                Personal Web Workspace
              </h3>
              <span className="text-xs text-neutral-500 font-mono">2026</span>
            </div>
            <p className="mt-2 text-sm text-neutral-400">
              A ultra-minimalist portfolio and blog platform built with Next.js App Router and Velite.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="px-2 py-0.5 text-xs rounded bg-neutral-800 text-neutral-300 font-mono">Next.js</span>
              <span className="px-2 py-0.5 text-xs rounded bg-neutral-800 text-neutral-300 font-mono">TypeScript</span>
              <span className="px-2 py-0.5 text-xs rounded bg-neutral-800 text-neutral-300 font-mono">Tailwind</span>
            </div>
          </a>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="space-y-6">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-wider">
          // Writing
        </h2>
        <div className="divide-y divide-neutral-900">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slugAsParams}`}
              className="group block py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 hover:opacity-80 transition-opacity"
            >
              <span className="font-medium text-neutral-200 group-hover:text-white">
                {post.title}
              </span>
              <time className="text-xs text-neutral-500 font-mono">
                {post.date}
              </time>
            </Link>
          ))}
          {sortedPosts.length === 0 && (
            <p className="text-sm text-neutral-500 italic">No posts published yet.</p>
          )}
        </div>
      </section>

    </div>
  )
}