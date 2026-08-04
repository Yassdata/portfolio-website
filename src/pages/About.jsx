import Container from '../components/Container.jsx'
import { site } from '../data/site.js'

const timeline = [
  {
    period: 'Apr 2025 - Present',
    title: 'Junior Data Scientist, Indicata (Autorola Group)',
    description:
      'Design Power BI dashboards that turn automotive market data into actionable insights, and build ETL pipelines with Databricks, PySpark, SQL, and DLT. Use star schema data modeling for scalable reporting, and built a user performance dashboard that replaced manual processes and enabled early churn detection.',
  },
  {
    period: 'Aug 2025 - Present',
    title: 'Tutor, SDU (Volunteering)',
    description:
      'Organize learning activities within the study program and deliver a hands-on Power BI session introducing dashboarding and data workflows to fellow students.',
  },
  {
    period: 'May 2022 - Aug 2023',
    title: 'Account Manager, Airwallet',
    description:
      'Supported B2B sales and client relationships for SaaS solutions in the French market, including prospecting, proposal development, and representing the company at international fairs.',
  },
  {
    period: 'Jan 2020 - Jul 2022',
    title: 'Data Research Analyst, ForeFlight',
    description:
      'Collected, validated, and maintained aviation data from multiple sources, contributing to structured data handling and quality processes that supported reliable downstream analysis.',
  },
  {
    period: 'Sep 2024 - Graduating June 2026',
    title: 'MSc in Data Science (Economics & Business Administration), Syddansk Universitet (SDU)',
    description:
      'Currently developing an AI-driven forecasting model for a master’s thesis, in collaboration with industry, to predict market dynamics and support better commercial decisions.',
  },
  {
    period: '2021 - 2023',
    title: 'Bachelor in International Sales & Marketing, UCL University College',
    description: 'Odense, Denmark.',
  },
]

export default function About() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <img
            src={`${import.meta.env.BASE_URL}images/yassine-headshot.jpg`}
            alt={`${site.name} headshot`}
            className="aspect-square w-full max-w-xs rounded-2xl object-cover shadow-sm"
          />
        </div>

        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">About me</h1>
          <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-400">
            <p>{site.pitch}</p>
            <p>
              Working with automotive clients, I&apos;ve built end-to-end analytics solutions, from
              data pipelines to reporting that support both operational execution and strategic
              direction. This experience has shaped how I approach data: not as an output, but as a
              tool for driving real business impact. At the same time, I&apos;m deepening this approach
              through my master&apos;s thesis, where I&apos;m developing an AI-driven forecasting model
              in collaboration with industry to predict market dynamics and support better commercial
              decisions.
            </p>
            <p>
              For me, technical work is never the end goal. It&apos;s how I create clarity, align
              data with business reality, and help organizations make better strategic choices. Based
              in {site.location}.
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
