import { useMemo, useState } from 'react'
import Container from '../components/Container.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All')

  const allTags = useMemo(() => {
    const tags = new Set()
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
    return ['All', ...Array.from(tags).sort()]
  }, [])

  const filtered = activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Projects</h1>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
        Each project includes a write-up, code, and a downloadable appendix. To add a new one, see the
        README.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={[
              'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
              activeTag === tag
                ? 'bg-primary-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700',
            ].join(' ')}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-slate-500 dark:text-slate-400">No projects match that tag yet.</p>
      )}
    </Container>
  )
}
