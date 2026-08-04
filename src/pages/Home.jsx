import { Link } from 'react-router-dom'
import Container from '../components/Container.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { site } from '../data/site.js'
import { projects } from '../data/projects.js'

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,rgba(99,102,241,0.15),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(6,182,212,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_-10%,rgba(99,102,241,0.25),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(6,182,212,0.2),transparent_40%)]"
        />
        <Container className="flex flex-col items-start gap-6 py-20 sm:py-28">
          <span className="rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-500/10 dark:text-primary-300">
            {site.role}
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
            Hi, I&apos;m {site.name.split(' ')[0]}. {site.tagline}
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">{site.pitch}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/projects"
              className="rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
            >
              View my projects
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 py-16 sm:py-20 dark:border-slate-800">
        <Container>
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                Featured projects
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                A few case studies, with code, write-ups, and supporting appendices included.
              </p>
            </div>
            <Link
              to="/projects"
              className="text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              View all projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
