import Container from '../components/Container.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Skills &amp; tools</h1>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
        Edit <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm dark:bg-slate-800">src/data/skills.js</code> to
        add, remove, or regroup these.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{group.category}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
