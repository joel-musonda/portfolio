import Link from 'next/link'
import { posts } from '@velite'
import { ExternalLink } from 'lucide-react'

// Featured projects list highlighting your latest work
const featuredProjects = [
  {
    title: 'Pneumonia Classifier (CNN)',
    description: 'How many labeled chest X-rays does a convolutional neural network need to detect pneumonia, and how much of the performance lost to scarce labels can data augmentation and self-supervised pretraining recover?.',
    tags: [' Python', ' NumPy', ' Pandas', ' Google Colab'],
    link: 'https://github.com/joel-musonda',
    github: 'https://github.com/joel-musonda/cnn-pneumonia-classification',
    year: '2026',
  }
]

export default function Home() {
  // Sort posts by date (newest first) and limit to latest 3 if desired
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="space-y-4 pt-4">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
          Hi, I'm Joel,
        </h1>
        <p className="text-neutral-400 leading-relaxed text-base">
        A software developer, writer and aspiring AI Researcher. I&apos;m fascinated by neural networks, human-computer interaction, and deep learning.
          AI is going to change the way we work, learn, and create. Can we build it to continuously perceive the world, learn from it, and make decisions based on that knowledge?
          Can we proliferate it to every human being on the planet so we all have access to the same knowledge and information?
        </p>
        <p className="text-neutral-400 leading-relaxed text-base">
          I want to dedicate my undergrad to solving the former; in doing so, more talent, effort, and resources can be devoted to the latter.
        </p>
      </section>

      {/* A Lil About Me Section */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-wider">
          // A little About Me
        </h2>
        <div className="text-neutral-400 text-base leading-relaxed space-y-4">
          <p>
            I&apos;m currently doing my A-Levels at <a href="https://cruciblelusaka.org" target="_blank" rel="noreferrer" className="text-neutral-200 underline underline-offset-4 hover:text-white transition-colors">Crucible International Leadership Academy of Lusaka</a>. 
            I enjoy reading books (I occasionally write book reviews here). I&apos;m deeply interested in human ingenuity, learning, and working with like-minded individuals to build products that solve real-world problems. I love to learn and share knowledge, which is why I write about my experiences and learnings on this blog.
          </p>
          <p>
            Currently, I&apos;m the founder and lead organizer of <a href="https://tedxcruciblelusaka.netlify.app" target="_blank" rel="noreferrer" className="text-neutral-200 underline underline-offset-4 hover:text-white transition-colors">TEDx Crucible Lusaka</a>; previously I co-founded an electronics maker lab, where we repurposed discarded e-waste to build robotics projects.
          </p>
          <p>
            When I&apos;m not writing code or building stuff, you can find me playing Go, padel or swimming. I also enjoy walking in parks, hiking as well as camping with friends and family. 
          </p>
          <p className="text-neutral-300 font-medium">
            I actively respond to emails and am always open to connecting with like-minded individuals. Say hello!
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="space-y-6">
        <div className="flex justify-between items-baseline">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-wider">
            // What I'm Working on
          </h2>
          <Link href="/projects" className="text-xs font-mono text-neutral-400 hover:text-white transition-colors">
            View all projects →
          </Link>
        </div>
        <div className="grid gap-4">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group block p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all space-y-3"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-neutral-200 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-neutral-500 font-mono">{project.year}</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 text-xs rounded border border-neutral-800 bg-neutral-900 text-neutral-300 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-2 border-t border-neutral-800/60 text-xs font-mono text-neutral-400">
                <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-neutral-100 transition-colors">
                  Live Demo <ExternalLink size={11} />
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-neutral-100 transition-colors">
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="space-y-6">
        <div className="flex justify-between items-baseline">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-wider">
            // Recent Writings
          </h2>
          <Link href="/blog" className="text-xs font-mono text-neutral-400 hover:text-white transition-colors">
            View all writing →
          </Link>
        </div>
        <div className="divide-y divide-neutral-900 border-t border-b border-neutral-900">
          {sortedPosts.slice(0, 4).map((post) => (
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
            <p className="py-4 text-sm text-neutral-500 italic">No posts published yet.</p>
          )}
        </div>
      </section>

    </div>
  )
}