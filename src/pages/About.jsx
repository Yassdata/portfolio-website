import Container from '../components/Container.jsx'
import { site } from '../data/site.js'

const timeline = [
  {
    period: '2023 — Present',
    title: 'Senior Data Scientist, Placeholder Co.',
    description: 'Replace with your real role. Describe the team, scope, and a couple of concrete outcomes.',
  },
  {
    period: '2021 — 2023',
    title: 'Data Analyst, Example Corp.',
    description: 'Replace with your real role and highlights — dashboards shipped, experiments run, impact delivered.',
  },
  {
    period: '2021',
    title: 'M.Sc. in Data Science, Placeholder University',
    description: 'Replace with your real degree, thesis topic, or relevant coursework.',
  },
]

export default function About() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <img
            src={`${import.meta.env.BASE_URL}images/headshot-placeholder.svg`}
            alt={`${site.name} headshot placeholder`}
            className="aspect-square w-full max-w-xs rounded-2xl object-cover shadow-sm"
          />
        </div>

        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">About me</h1>
          <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-400">
            <p>{site.pitch}</p>
            <p>
              This is placeholder bio text — replace it with a couple of real paragraphs about your
              background, what kind of problems you like working on, and what you're looking for next.
              Mention your location ({site.location}) and anything that makes your path distinctive.
            </p>
          </div>

          <h2 className="mt-12 text-xl font-semibold text-slate-900 dark:text-white">Experience &amp; education</h2>
          <ol className="mt-6 space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
            {timeline.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-primary-500 bg-white dark:bg-slate-950" />
                <p className="text-sm font-medium text-primary-600 dark:text-primary-400">{item.period}</p>
                <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Container>
  )
}
