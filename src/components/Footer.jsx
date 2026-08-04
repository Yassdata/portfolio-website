import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8 dark:text-slate-400">
        <p>© {new Date().getFullYear()} {site.name}. Built with React &amp; Tailwind CSS.</p>
        <div className="flex items-center gap-4">
          <a href={site.social.github} target="_blank" rel="noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400">
            GitHub
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400">
            LinkedIn
          </a>
          <a href={site.social.email} className="hover:text-primary-600 dark:hover:text-primary-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
