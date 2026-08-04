import { useState } from 'react'
import Container from '../components/Container.jsx'
import { site } from '../data/site.js'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const hasFormspree = Boolean(site.formspreeEndpoint)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function mailtoFallback() {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `${site.social.email}?subject=${subject}&body=${body}`
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!hasFormspree) {
      mailtoFallback()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Container className="py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Get in touch</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Have a project, role, or question in mind? Send a message below, or email me directly at{' '}
          <a href={site.social.email} className="font-medium text-primary-600 dark:text-primary-400">
            {site.email}
          </a>
          {site.phone && (
            <>
              {' '}
              or call{' '}
              <a
                href={`tel:${site.phone.replace(/\s+/g, '')}`}
                className="font-medium text-primary-600 dark:text-primary-400"
              >
                {site.phone}
              </a>
            </>
          )}
          .
        </p>

        {!hasFormspree && (
          <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-500/10 dark:text-amber-300">
            Contact form isn&apos;t wired up yet — submitting will open your email client instead. Set{' '}
            <code className="font-mono">formspreeEndpoint</code> in{' '}
            <code className="font-mono">src/data/site.js</code> (see the{' '}
            <a href="https://formspree.io" target="_blank" rel="noreferrer" className="underline">
              Formspree
            </a>{' '}
            free tier) to send messages directly from the form.
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={update('name')}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={update('message')}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : hasFormspree ? 'Send message' : 'Open in email client'}
          </button>

          {status === 'success' && (
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Thanks — your message has been sent.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              Something went wrong. Please email {site.email} directly.
            </p>
          )}
        </form>
      </div>
    </Container>
  )
}
