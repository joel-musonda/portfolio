'use client'

import { useEffect, useState } from 'react'

interface Section {
  id: string
  title: string
}

const TICK_COUNT = 12

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

// Short standalone bold paragraphs (e.g. `**Focus**`) act as section titles in some posts.
function isBoldSubtitle(el: HTMLElement) {
  const text = el.textContent?.trim() ?? ''
  return (
    el.childNodes.length === 1 &&
    el.firstElementChild?.tagName === 'STRONG' &&
    !el.closest('blockquote') &&
    text.length <= 60 &&
    !/[.?!:]$/.test(text)
  )
}

function findHeadings(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>('h2, h3, p')).filter(
    (el) => el.tagName !== 'P' || isBoldSubtitle(el)
  )
}

export function ScrollTracker({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0)
  const [sections, setSections] = useState<Section[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const container = document.getElementById(targetId)
    if (!container) return

    const headings = findHeadings(container)
    const usedIds = new Set<string>()
    headings.forEach((el, i) => {
      if (!el.id) {
        let id = slugify(el.textContent ?? '') || `section-${i}`
        while (usedIds.has(id) || document.getElementById(id)) id += `-${i}`
        el.id = id
      }
      usedIds.add(el.id)
      el.style.scrollMarginTop = '6rem'
      el.tabIndex = -1
      el.style.outline = 'none'
    })

    const onScroll = () => {
      const rect = container.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      const read = scrollable > 0 ? -rect.top / scrollable : 1
      setProgress(Math.min(1, Math.max(0, read)))

      const marker = window.scrollY + window.innerHeight * 0.3
      let current: string | null = null
      for (const el of headings) {
        if (el.getBoundingClientRect().top + window.scrollY <= marker) current = el.id
      }
      setActiveId(current)
    }

    const frame = requestAnimationFrame(() => {
      setSections(headings.map((el) => ({ id: el.id, title: el.textContent ?? '' })))
      onScroll()
    })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [targetId])

  const filledTicks = Math.round(progress * (TICK_COUNT - 1))

  return (
    <nav
      aria-label="Article progress"
      className="group fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div
        tabIndex={0}
        aria-label="Reading progress"
        className="flex flex-col items-center gap-2.5 rounded-full border border-neutral-800 bg-neutral-900/80 px-2.5 py-4 backdrop-blur-md shadow-lg outline-none focus-visible:ring-1 focus-visible:ring-neutral-500"
      >
        {Array.from({ length: TICK_COUNT }, (_, i) => (
          <span
            key={i}
            className={`block h-px w-3 rounded-full transition-colors ${
              i <= filledTicks ? 'bg-neutral-200' : 'bg-neutral-600'
            }`}
          />
        ))}
      </div>

      {sections.length > 0 && (
        <div
          className="invisible absolute right-full top-1/2 -translate-y-1/2 pr-3 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100 group-has-[:focus-visible]:visible group-has-[:focus-visible]:opacity-100"
        >
          <ul className="w-56 space-y-1 rounded-xl border border-neutral-800 bg-neutral-900/95 p-3 text-xs shadow-lg backdrop-blur-md">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.getElementById(section.id)
                    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    target?.focus({ preventScroll: true })
                    history.replaceState(null, '', `#${section.id}`)
                  }}
                  className={`block truncate rounded px-2 py-1 transition-colors hover:bg-neutral-800 hover:text-neutral-100 ${
                    section.id === activeId ? 'text-neutral-100' : 'text-neutral-500'
                  }`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
