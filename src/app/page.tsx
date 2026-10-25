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
          Hi, I love to build stuff & Write.
        </h1>
        <p className="text-neutral-400 leading-relaxed text-base">
          I'm fascinated by neural networks, human-computer interaction, and deep learning.
          AI is going to change the way we work, learn and create. Can we build it to continously perceve the world, learn from it, and make decisions based on that knowledge?
          Can we proliferate it to every human being on the planet so we all have access to the same knowledge and information?

        I want to dedicate the my undergrad to solving the former, in doing so, more talent, effort and resources can be devoted to the latter.
        </p>
      </section>

      {/* A Lil About Me Section */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-wider">
          // A little About Me
        </h2>
        <div className="text-neutral-400 text-base leading-relaxed space-y-4">
          <p>
            I'm currently doing my A-Levels at <a href="https://cruciblelusaka.org" target="_blank" rel="noreferrer" className="text-neutral-200 underline underline-offset-4 hover:text-white transition-colors">Crucible International Leadership Academy of Lusaka</a>. 
            I enjoy reading books (I occasionally write book reviews here). I'm deeply interested in human ingenuity, learning and working with like minded individuals to build products that solve real world problems. I love to learn and share knowledge, which is why I write about my experiences and learnings on this blog.
           Currenly, I'm the founder and lead organizer of <a href="https://tedxcruciblelusaka.netlify.app" target="_blank" rel="noreferrer" className="text-neutral-200 underline underline-offset-4 hover:text-white transition-colors">TEDx Crucible Lusaka</a>; previously I co-founded an electronics maker Lab, where we repurposed discarded e-waste to build robotics Projects.
          </p>
          <p>
            When I'm not writing code or building stuff, you can find me playing  Go, Walking in a park, playing padel or hiking and camping with friends and family. 
          </p>
          <p className="text-neutral-300 font-medium">
            I actively respond to emails and am always open to connecting with like-minded individuals. Say hello!
          </p>
        </div>
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
              An ultra-minimalist portfolio and blog platform built with Next.js App Router and Velite.
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