import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

const mono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Joel Musonda | Software Developer',
  description: 'Minimalist personal website and blog.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${mono.variable}`}>
      <body className="bg-neutral-950 text-neutral-100 font-sans antialiased min-h-screen flex flex-col selection:bg-neutral-800 selection:text-neutral-100">
        
        {/* Floating Glassmorphism Header */}
        <header className="sticky top-3 sm:top-4 z-50 mx-auto max-w-2xl px-3 sm:px-4 w-full">
          <nav className="flex items-center justify-between rounded-full border border-neutral-800 bg-neutral-900/80 px-4 sm:px-6 py-2.5 sm:py-3 backdrop-blur-md shadow-lg text-xs sm:text-sm">
            <Link href="/" className="font-semibold tracking-tight hover:text-neutral-400 transition-colors shrink-0">
              Joel Musonda
            </Link>
            <div className="flex items-center space-x-3 sm:space-x-5 text-neutral-400 font-medium">
              <Link href="/projects" className="hover:text-neutral-100 transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="hover:text-neutral-100 transition-colors">
                Blog
              </Link>
              <Link href="/questions" className="hover:text-neutral-100 transition-colors">
                Questions
              </Link>
              <a 
                href="https://github.com/joel-musonda" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-neutral-100 transition-colors"
              >
                github ↗
              </a>
            </div>
          </nav>
        </header>

        {/* Main Page Content */}
        <main className="flex-1 max-w-2xl mx-auto px-4 w-full py-8 sm:py-12">
          {children}
        </main>

        {/* Minimal Footer */}
        <footer className="max-w-2xl mx-auto px-4 py-6 sm:py-8 w-full border-t border-neutral-900 text-xs text-neutral-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} • Built by Joel Musonda</p>
        </footer>

      </body>
    </html>
  )
}