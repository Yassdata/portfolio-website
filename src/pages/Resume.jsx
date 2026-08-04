import Container from '../components/Container.jsx'
import { site } from '../data/site.js'

export default function Resume() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Resume</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            View or download my latest resume below.
          </p>
        </div>
        <a
          href={site.resumeFile}
          download
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" />
          </svg>
          Download PDF
        </a>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        {/* object works for embedding a real PDF across desktop browsers; mobile browsers
            often can't render inline PDFs, so we show a fallback download prompt instead. */}
        <object
          data={site.resumeFile}
          type="application/pdf"
          className="hidden h-[80vh] w-full sm:block"
          aria-label="Resume PDF preview"
        >
          <p className="p-8 text-center text-slate-600 dark:text-slate-400">
            Your browser can&apos;t preview PDFs inline.{' '}
            <a href={site.resumeFile} className="font-semibold text-primary-600 dark:text-primary-400">
              Download the resume instead
            </a>
            .
          </p>
        </object>

        <div className="flex flex-col items-center gap-3 p-10 text-center sm:hidden">
          <p className="text-slate-600 dark:text-slate-400">
            PDF previews aren&apos;t well supported on mobile browsers.
          </p>
          <a href={site.resumeFile} download className="font-semibold text-primary-600 dark:text-primary-400">
            Download the resume to view it
          </a>
        </div>
      </div>
    </Container>
  )
}
