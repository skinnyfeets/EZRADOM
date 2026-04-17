/**
 * PageContext — thin adapter over React Router.
 *
 * All components continue calling navigate('tools'), navigate('blog-all'), etc.
 * This file maps those string IDs to real URLs and reads the current URL back
 * into the legacy `page` string that components use for conditional logic.
 */
import { createContext, useContext } from 'react'
import { useNavigate as useRRNavigate, useLocation } from 'react-router-dom'

// ── String ID → URL ────────────────────────────────────────────────────────
const PAGE_TO_URL = {
  'home':                 '/',
  'about-page':           '/about',
  'tools':                '/tools',
  'blog-all':             '/blog',
  'sweatculture':         '/work/sweatculture',
  'trailside':            '/work/trailside',
  'archetype-finder':     '/tools/archetype-finder',
  'archetype-directory':  '/tools/archetype-directory',
  'positioning-builder':  '/tools/positioning-builder',
  'brand-audit':          '/tools/brand-audit',
}

// ── URL → string ID ────────────────────────────────────────────────────────
function urlToPage(pathname) {
  const blogMatch = pathname.match(/^\/blog\/(\d+)$/)
  if (blogMatch) return `blog-${blogMatch[1]}`
  const entry = Object.entries(PAGE_TO_URL).find(([, url]) => url === pathname)
  return entry ? entry[0] : 'home'
}

const PageContext = createContext(null)

export function PageProvider({ children }) {
  // PageProvider is kept for JSX compatibility but is a pass-through —
  // the real state lives in React Router's BrowserRouter.
  return children
}

export function usePage() {
  const rrNavigate = useRRNavigate()
  const { pathname } = useLocation()

  const navigate = (pageId) => {
    // Blog post IDs: 'blog-1', 'blog-2', …
    const blogMatch = pageId.match(/^blog-(\d+)$/)
    if (blogMatch) {
      rrNavigate(`/blog/${blogMatch[1]}`)
      return
    }
    const url = PAGE_TO_URL[pageId] ?? '/'
    rrNavigate(url)
  }

  return {
    page: urlToPage(pathname),
    navigate,
  }
}
