// Auto-loads every JSON file in ./projects/. Drop a new file in that folder
// (see README "Adding a new project") and it appears here automatically.
const modules = import.meta.glob('./projects/*.json', { eager: true })

export const projects = Object.values(modules)
  .map((mod) => mod.default)
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
