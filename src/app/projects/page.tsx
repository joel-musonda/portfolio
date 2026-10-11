import { ExternalLink} from 'lucide-react'

const projects = [
  {
    title: 'Personal Web Workspace',
    description: 'An ultra-minimalist portfolio and blog platform built with Next.js App Router, Tailwind CSS, and Velite.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Velite'],
    link: 'https://github.com/joel-musonda',
    github: 'https://github.com/joel-musonda',
    year: '2026',
  },
  {
    title: 'TEDxCrucibleLusaka Website',
    description: 'A responsive event website featuring smooth animations, speaker forms, and modern layout design.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    link: 'https://github.com/joel-musonda',
    github: 'https://github.com/joel-musonda',
    year: '2026',
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-100">Projects</h1>
        <p className="text-neutral-400 text-sm">
          A selection of full-stack apps, experiments, and community web projects.
        </p>
      </header>

      <div className="grid gap-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all space-y-3"
          >
            <div className="flex justify-between items-start">
              <h2 className="font-medium text-neutral-200 group-hover:text-white transition-colors">
                {project.title}
              </h2>
              <span className="text-xs text-neutral-500 font-mono">{project.year}</span>
            </div>
            
            <p className="text-sm text-neutral-400 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2 py-0.5 text-xs rounded bg-neutral-800 text-neutral-300 font-mono">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2 border-t border-neutral-800/60 text-xs font-mono text-neutral-400">
              <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-neutral-100 transition-colors">
                Live Demo <ExternalLink size={12} />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-neutral-100 transition-colors">
                Source <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}