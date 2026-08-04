import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container.jsx'
import { getProjectBySlug } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const base = import.meta.env.BASE_URL

  if (!project) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Project not found</h1>
        <Link to="/projects" className="mt-4 inline-block text-primary-600 dark:text-primary-400">
          ← Back to all projects
        </Link>
      </Container>
    )
  }

  const dateLabel = new Date(project.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
  })

  return (
    <article>
      <div className="border-b border-slate-200 dark:border-slate-800">
        <Container className="py-12 sm:py-16">
          <Link to="/projects" className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400">
            ← All projects
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">{project.title}</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">{project.summary}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <time dateTime={project.date}>{dateLabel}</time>
            <span aria-hidden="true">·</span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-500/10 dark:text-primary-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Container className="grid grid-cols-1 gap-12 py-12 sm:py-16 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <img
            src={`${base}${project.coverImage}`}
            alt={`${project.title} cover`}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800"
          />

          <div className="prose-p:text-slate-600 dark:prose-p:text-slate-400 space-y-4">
            {project.explanation.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-slate-600 dark:text-slate-400">
                {paragraph}
              </p>
            ))}
          </div>

          {project.highlights?.length > 0 && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="font-semibold text-slate-900 dark:text-white">Highlights</h2>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.screenshots?.map((src) => (
            <img
              key={src}
              src={`${base}${src}`}
              alt={`${project.title} screenshot`}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800"
            />
          ))}
        </div>

        <aside className="space-y-4 lg:sticky lg:top-20 lg:h-fit">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="font-semibold text-slate-900 dark:text-white">Project files</h2>
            <div className="mt-4 space-y-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary-300 hover:bg-primary-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-primary-700 dark:hover:bg-primary-500/10"
                >
                  View source on GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.codeFile && (
                <a
                  href={`${base}${project.codeFile}`}
                  download
                  className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary-300 hover:bg-primary-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-primary-700 dark:hover:bg-primary-500/10"
                >
                  Download {project.codeFileLabel}
                  <span aria-hidden="true">↓</span>
                </a>
              )}
              {project.appendixFile && (
                <a
                  href={`${base}${project.appendixFile}`}
                  download
                  className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary-300 hover:bg-primary-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-primary-700 dark:hover:bg-primary-500/10"
                >
                  {project.appendixLabel}
                  <span aria-hidden="true">↓</span>
                </a>
              )}
              {project.extraFiles?.map((file) => (
                <a
                  key={file.path}
                  href={`${base}${file.path}`}
                  download
                  className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary-300 hover:bg-primary-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-primary-700 dark:hover:bg-primary-500/10"
                >
                  {file.label}
                  <span aria-hidden="true">↓</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </Container>
    </article>
  )
}
