/** Prefix for files in `public/` (respects Vite `base`, e.g. `/wewin-webapp/`). */
export function publicPath(path: string): string {
  const base = import.meta.env.BASE_URL
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`
}
