import { Link } from 'react-router-dom'
import Container from '../components/Container.jsx'

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center gap-4 py-32 text-center">
      <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">404</p>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Page not found</h1>
      <p className="text-slate-600 dark:text-slate-400">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className="mt-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-700">
        Back home
      </Link>
    </Container>
  )
}
