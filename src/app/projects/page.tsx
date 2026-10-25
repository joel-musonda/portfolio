import { ExternalLink} from 'lucide-react'
import Image from 'next/image'

// Case-insensitive tech map helper for emojis
const techMap: Record<string, string> = {
  'next.js': 'Next.js',
  'typescript': 'TypeScript',
  'tailwind': 'Tailwind',
  'velite': 'Velite',
  'react': 'React',
  'python': 'Python',
  'streamlit': 'Streamlit',
  'pinecone': ' Pinecone',
  'openai api': 'OpenAI API',
  'numpy': 'NumPy',
  'pandas': 'Pandas',
  'google colab': 'Google Colab',
}

const projects = [
  {
    title: 'Pneumonia Classifier (CNN)',
    description: 'Pneumonia classification using a Convolutional Neural Network built and trained from scratch using Numpy and Pandas.',
    tags: ['python', 'numpy', 'pandas', 'google colab'],
    link: 'https://github.com/joel-musonda/cnn-pneumonia-classification',
    github: 'https://github.com/joel-musonda/cnn-pneumonia-classification',
    year: '2026',
    image: '/static/projects/cnn.png',
  },
  {
    title: 'Nzelu AI',
    description: 'An AI chatbot built using retrieval-augmented generation (RAG), langchain, Pinecone vector database and Gemini integrations. It lives in your documents and grounds the LLM responses in your data',
    tags: ['python', 'streamlit', 'pinecone', 'gemini api'],
    link: 'nzeluai.streamlit.app',
    github: 'https://github.com/joel-musonda/nzelu-ai',
    year: '2026',
    image: '/static/projects/nzelu.png',
  },
   {
    title: 'Flagellar-Motor-Detection-in-Bacterial-Tomograms',
    description: 'Web based machine learning model to automatically identify flagellar motors in 3D tomographic reconstructions of bacterial cells built with opus 4.8  and Javascript.',
    tags: ['JavaScript', 'claude code', 'anthropic api', 'scikit-learn'],
    link: '#',
    github: 'https://github.com/joel-musonda/Flagellar-Motor-Detection-in-Bacterial-Tomograms',
    year: '2026',
    image: '/static/projects/bac.png',
  },
  {
    title: 'Ping ',
    description: 'A collaborative social platform for writing blogs and articles in notebooks with chapters instead of standlone posts. users can organize thoughts, learning journeys, and articles.',
    tags: ['next.js', 'typescript', 'tailwind'],
    link: 'pingblogs.com',
    github: 'https://github.com/joel-musonda/ping-app',
    year: '2026',
    image: '/static/projects/ping.png',
  },
  {
    title: 'TEDxCrucibleLusaka Website',
    description: 'A responsive event website featuring smooth animations, speaker submission forms, and modern layout design.',
    tags: ['react', 'tailwind', 'typescript'],
    link: 'https://tedxcruciblelusaka.netlify.app/',
    github: 'https://github.com/joel-musonda/TEDxcrucibleLusaka-website',
    year: '2026',
    image: '/static/projects/tedx.png',
  },
   {
    title: 'Theta',
    description: 'A web application built to help folks find, compare and learn how to use the right AI tools for their specified use cases and workflows.',
    tags: ['next.js', 'typescript', 'three.js', 'unity'],
    link: 'https://thetafoundation.netlify.app/directory',
    github: '#',
    year: '2025',
    image: '/static/projects/theta.png',
  },
  
  {
    title: 'Learnscape',
    description: 'A mobile and web application built to help students learn and revise concepts through interactive VR experiments that run on the web as well as flashcards and quizzes.',
    tags: ['next.js', 'typescript', 'three js', 'unity'],
    link: 'https://pilearnscape.netlify.app/',
    github: 'https://github.com/joel-musonda',
    year: '2024',
    image: '/static/projects/learnscape.png',
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-100">Projects</h1>
        <p className="text-neutral-400 text-sm">
          I like building things because building gives me a very efficient way of discovering what I don't understand.
        </p>
      </header>

      <div className="grid gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/85 transition-all flex flex-col lg:flex-row gap-6 items-center justify-between"
          >
            {/* Left Content Column */}
            <div className="space-y-4 flex-1 w-full">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
                  {project.title}
                </h2>
                <span className="text-xs text-neutral-500 font-mono">{project.year}</span>
              </div>
              
              <p className="text-sm text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Badges with Emojis */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="inline-flex items-center px-2.5 py-1 text-xs rounded-md border border-neutral-800 bg-neutral-900 text-neutral-300 font-mono"
                  >
                    {techMap[tag.toLowerCase()] || tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-neutral-800/60 text-xs font-mono text-neutral-400">
                <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-neutral-100 transition-colors">
                  Live Demo <ExternalLink size={12} />
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-neutral-100 transition-colors">
                  Source Code
                </a>
              </div>
            </div>

            {/* Right Screenshot Preview Column */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="aspect-video w-full rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden relative group-hover:border-neutral-700 transition-colors shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}