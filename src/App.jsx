import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect, useRef } from 'react'
import { PageProvider } from './context/PageContext.jsx'
import Nav from './components/Nav.jsx'

import Hero from './components/sections/Hero.jsx'
import Work from './components/sections/Work.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import Process from './components/sections/Process.jsx'
import About from './components/sections/About.jsx'
import Blog from './components/sections/Blog.jsx'
import Contact from './components/sections/Contact.jsx'

import ToolsPromo from './components/sections/ToolsPromo.jsx'
import AboutPage from './components/sections/AboutPage.jsx'
import SweatCulturePage from './components/sections/SweatCulturePage.jsx'
import TrailsidePage from './components/sections/TrailsidePage.jsx'
import ToolsPage from './components/sections/ToolsPage.jsx'
import BlogPostPage, { BLOG_POSTS } from './components/sections/BlogPostPage.jsx'
import BlogAllPage from './components/sections/BlogAllPage.jsx'
import ArchetypeFinderPage from './components/sections/ArchetypeFinderPage.jsx'
import ArchetypeDirectoryPage from './components/sections/ArchetypeDirectoryPage.jsx'
import PositioningBuilderPage from './components/sections/PositioningBuilderPage.jsx'
import BrandAuditPage from './components/sections/BrandAuditPage.jsx'

import { ARCHETYPES } from './data/archetypes.js'

const SITE_URL = 'https://ezradom.com'
const SITE_NAME = 'Ezra Dom — Brand Strategist'
const OG_IMAGE = `${SITE_URL}/og-image.jpg`

// ── Per-route SEO ─────────────────────────────────────────────────────────────
const ROUTE_SEO = {
  '/': {
    title: 'Ezra Dombowsky | Brand Strategist & Designer | BC, Canada',
    description: 'Freelance brand strategist & designer in Kelowna, BC. Ezra Dombowsky builds strategy-first brand identities for small businesses and founders — archetypes, positioning, and visual identity.',
  },
  '/work/sweatculture': {
    title: 'Sweat Culture — Brand Strategy & Identity Case Study | Ezra Dom',
    description: 'Full brand build for Sweat Culture: archetype strategy, brand positioning, visual identity, and web presence. 2,000+ visitors in 4 months. Brand identity case study by Ezra Dom, Luminary Graphix.',
  },
  '/work/trailside': {
    title: 'Trailside Outdoor Co. — Brand Identity Case Study | Ezra Dom',
    description: 'Brand identity project for Trailside Outdoor Co. — brand positioning, logo design, and label design for a craft outdoor brand. Case study by Ezra Dom, Luminary Graphix.',
  },
  '/tools': {
    title: 'Free Brand Strategy Tools for Founders | Ezra Dom',
    description: 'Free brand strategy tools — Brand Archetype Quiz, Archetype Directory, Positioning Statement Builder, and Brand Audit Checklist. No signup. Built by brand strategist Ezra Dom.',
  },
  '/tools/archetype-finder': {
    title: 'Brand Archetype Quiz — Find Your Brand Archetypes Free | Ezra Dom',
    description: 'Discover your brand\'s primary, secondary, and tension archetypes with this free 10-question quiz. Built on 100 archetypes across 17 categories. Free brand strategy tool for founders and personal brands.',
  },
  '/tools/archetype-directory': {
    title: 'Brand Archetype Directory — 100 Archetypes Explained | Ezra Dom',
    description: 'The most complete brand archetype reference available free. 100 archetypes across 17 categories — definitions, keywords, mythology, and real brand examples. Built by brand strategist Ezra Dom.',
  },
  '/tools/positioning-builder': {
    title: 'Brand Positioning Statement Builder — Free | Ezra Dom',
    description: 'Build your brand positioning statement in 7 steps. Generates a Neumeier Onliness Statement and a full positioning document — your brand foundation. Free brand strategy tool by Ezra Dom.',
  },
  '/tools/brand-audit': {
    title: 'Brand Audit Checklist — Free 20-Point Brand Assessment | Ezra Dom',
    description: 'Score your brand across positioning, visual identity, voice, consistency, and proof. 20-point brand audit with a prioritized fix list. Free tool by brand strategist Ezra Dom.',
  },
  '/about': {
    title: 'About Ezra Dom (Ezra Dombowsky) — Brand Strategist | Luminary Graphix',
    description: 'Ezra Dombowsky, known as Ezra Dom or ezradom online, is a brand strategist and identity designer based in Kelowna, BC. Founder of Luminary Graphix. Self-taught, 10+ brands built, heading to IED Milano in 2026.',
  },
  '/blog': {
    title: 'Brand Strategy Blog — Archetypes, Positioning & Identity | Ezra Dom',
    description: 'Brand strategy writing from Ezra Dom. Deep dives on brand archetypes, positioning, differentiation, and the thinking behind brands that stick in people\'s minds.',
  },
}

// ── JSON-LD schemas ───────────────────────────────────────────────────────────
const PERSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ezra Dombowsky',
  alternateName: ['Ezra Dom', 'ezradom'],
  jobTitle: 'Brand Strategist & Designer',
  url: SITE_URL,
  image: OG_IMAGE,
  sameAs: [
    'https://www.instagram.com/itsezradom_/',
    'https://www.linkedin.com/in/ezradom',
    SITE_URL,
  ],
  description: 'Freelance brand strategist and designer based in Kelowna, BC, Canada. Founder of Luminary Graphix. Builds strategy-first brand identities for small businesses and founders in the Okanagan and beyond.',
  knowsAbout: [
    'Brand Strategy',
    'Brand Identity Design',
    'Visual Identity',
    'Brand Positioning',
    'Brand Archetypes',
    'Brand Architecture',
    'Logo Design',
    'Brand Audit',
    'Branding for Small Business',
    'Freelance Brand Design',
    'Kelowna Branding',
    'Okanagan Brand Strategy',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kelowna',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  founder: [{ '@type': 'Organization', name: 'Luminary Graphix', url: SITE_URL }],
}

const ORGANIZATION_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Luminary Graphix',
  alternateName: 'Luminary',
  url: SITE_URL,
  logo: OG_IMAGE,
  founder: { '@type': 'Person', name: 'Ezra Dombowsky', url: SITE_URL },
  description: 'Strategy-first brand identity studio based in Kelowna, BC. Serving small businesses, founders, and entrepreneurs in the Okanagan and across Canada.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kelowna',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  areaServed: ['Kelowna', 'Okanagan', 'British Columbia', 'Canada'],
  serviceType: ['Brand Strategy', 'Visual Identity Design', 'Brand Design', 'Logo Design', 'Brand Positioning'],
  sameAs: [
    'https://www.instagram.com/itsezradom_/',
    'https://www.linkedin.com/in/ezradom',
  ],
}

const WEBSITE_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ezra Dombowsky — Brand Strategist & Designer',
  url: SITE_URL,
  author: { '@type': 'Person', name: 'Ezra Dombowsky', url: SITE_URL },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

const DIRECTORY_LD = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Brand Archetype Directory',
  description: '100 brand and storytelling archetypes across 17 categories with definitions, keywords, mythology references, and real-world brand examples.',
  url: `${SITE_URL}/tools/archetype-directory`,
  keywords: 'brand archetypes, storytelling archetypes, brand strategy, archetype framework',
  creator: { '@type': 'Person', name: 'Ezra Dom', url: SITE_URL },
  hasPart: ARCHETYPES.map(a => ({
    '@type': 'DefinedTerm',
    name: a.name,
    description: a.definition,
    inDefinedTermSet: `${SITE_URL}/tools/archetype-directory`,
    termCode: a.id,
  })),
}

// ── Breadcrumb data ───────────────────────────────────────────────────────────
const BREADCRUMBS = {
  '/about': [
    { pos: 1, name: 'Home', item: SITE_URL + '/' },
    { pos: 2, name: 'About Ezra Dombowsky', item: SITE_URL + '/about' },
  ],
  '/work/sweatculture': [
    { pos: 1, name: 'Home', item: SITE_URL + '/' },
    { pos: 2, name: 'Brand Design Work', item: SITE_URL + '/#work' },
    { pos: 3, name: 'Sweat Culture Brand Identity', item: SITE_URL + '/work/sweatculture' },
  ],
  '/work/trailside': [
    { pos: 1, name: 'Home', item: SITE_URL + '/' },
    { pos: 2, name: 'Brand Design Work', item: SITE_URL + '/#work' },
    { pos: 3, name: 'Trailside Outdoor Co. Brand Identity', item: SITE_URL + '/work/trailside' },
  ],
  '/tools': [
    { pos: 1, name: 'Home', item: SITE_URL + '/' },
    { pos: 2, name: 'Free Brand Strategy Tools', item: SITE_URL + '/tools' },
  ],
  '/tools/archetype-finder': [
    { pos: 1, name: 'Home', item: SITE_URL + '/' },
    { pos: 2, name: 'Tools', item: SITE_URL + '/tools' },
    { pos: 3, name: 'Brand Archetype Quiz', item: SITE_URL + '/tools/archetype-finder' },
  ],
  '/tools/archetype-directory': [
    { pos: 1, name: 'Home', item: SITE_URL + '/' },
    { pos: 2, name: 'Tools', item: SITE_URL + '/tools' },
    { pos: 3, name: 'Brand Archetype Directory', item: SITE_URL + '/tools/archetype-directory' },
  ],
  '/tools/positioning-builder': [
    { pos: 1, name: 'Home', item: SITE_URL + '/' },
    { pos: 2, name: 'Tools', item: SITE_URL + '/tools' },
    { pos: 3, name: 'Brand Positioning Statement Builder', item: SITE_URL + '/tools/positioning-builder' },
  ],
  '/tools/brand-audit': [
    { pos: 1, name: 'Home', item: SITE_URL + '/' },
    { pos: 2, name: 'Tools', item: SITE_URL + '/tools' },
    { pos: 3, name: 'Brand Audit Checklist', item: SITE_URL + '/tools/brand-audit' },
  ],
  '/blog': [
    { pos: 1, name: 'Home', item: SITE_URL + '/' },
    { pos: 2, name: 'Brand Strategy Blog', item: SITE_URL + '/blog' },
  ],
}

function makeBreadcrumbLD(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(b => ({
      '@type': 'ListItem',
      position: b.pos,
      name: b.name,
      item: b.item,
    })),
  }
}

// ── SEO component ─────────────────────────────────────────────────────────────
function RouteSEO() {
  const { pathname } = useLocation()

  // Blog post — dynamic title from post data
  const blogMatch = pathname.match(/^\/blog\/(\d+)$/)
  if (blogMatch) {
    const post = BLOG_POSTS.find(p => p.id === `blog-${blogMatch[1]}`)
    const title = post ? (post.seoTitle || `${post.title} | Ezra Dom`) : `Blog Post | ${SITE_NAME}`
    const description = post ? (post.seoDescription || post.subtitle || post.intro?.[0] || '') : ''
    const articleLD = post ? {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: description,
      author: { '@type': 'Person', name: 'Ezra Dom', url: SITE_URL },
      publisher: { '@type': 'Person', name: 'Ezra Dom', url: SITE_URL },
      datePublished: post.date,
      url: `${SITE_URL}${pathname}`,
    } : null

    const blogBreadcrumbs = [
      { pos: 1, name: 'Home', item: SITE_URL + '/' },
      { pos: 2, name: 'Brand Strategy Blog', item: SITE_URL + '/blog' },
      { pos: 3, name: post?.title || 'Article', item: SITE_URL + pathname },
    ]

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Ezra Dombowsky" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}${pathname}`} />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Ezra Dombowsky — Brand Strategist & Designer" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}${pathname}`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@itsezradom_" />
        <meta name="twitter:creator" content="@itsezradom_" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={OG_IMAGE} />
        {articleLD && <script type="application/ld+json">{JSON.stringify(articleLD)}</script>}
        <script type="application/ld+json">{JSON.stringify(makeBreadcrumbLD(blogBreadcrumbs))}</script>
      </Helmet>
    )
  }

  const seo = ROUTE_SEO[pathname] || ROUTE_SEO['/']
  const isHome = pathname === '/'
  const isDirectory = pathname === '/tools/archetype-directory'
  const breadcrumbs = BREADCRUMBS[pathname]

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content="Ezra Dombowsky" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${SITE_URL}${pathname}`} />

      {/* Open Graph */}
      <meta property="og:locale" content="en_CA" />
      <meta property="og:site_name" content="Ezra Dombowsky — Brand Strategist & Designer" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE_URL}${pathname}`} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Ezra Dombowsky — Brand Strategist & Designer, Kelowna BC Canada" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@itsezradom_" />
      <meta name="twitter:creator" content="@itsezradom_" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="Ezra Dombowsky — Brand Strategist & Designer, Kelowna BC Canada" />

      {/* JSON-LD */}
      {isHome && <script type="application/ld+json">{JSON.stringify(PERSON_LD)}</script>}
      {isHome && <script type="application/ld+json">{JSON.stringify(ORGANIZATION_LD)}</script>}
      {isHome && <script type="application/ld+json">{JSON.stringify(WEBSITE_LD)}</script>}
      {isDirectory && <script type="application/ld+json">{JSON.stringify(DIRECTORY_LD)}</script>}
      {breadcrumbs && <script type="application/ld+json">{JSON.stringify(makeBreadcrumbLD(breadcrumbs))}</script>}
    </Helmet>
  )
}

// ── Cursor glow ───────────────────────────────────────────────────────────────
function CursorGlow() {
  const glowRef = useRef(null)
  useEffect(() => {
    const el = glowRef.current
    if (!el) return
    const move = (e) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (
    <div ref={glowRef} aria-hidden="true" style={{
      position: 'fixed', pointerEvents: 'none', zIndex: 9999,
      width: '480px', height: '480px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(200,16,46,0.11) 0%, rgba(200,16,46,0.04) 30%, rgba(200,16,46,0.02) 50%, transparent 70%)',
      transform: 'translate(-50%, -50%)', top: 0, left: 0,
    }} />
  )
}

// ── Blog post wrapper — reads :postId param ───────────────────────────────────
function BlogPostWrapper() {
  const { postId } = useParams()
  return <BlogPostPage postId={`blog-${postId}`} />
}

// ── Routes ────────────────────────────────────────────────────────────────────
function Pages() {
  return (
    <Routes>
      <Route path="/" element={
        <main style={{ paddingTop: '60px' }}>
          <Hero />
          <Work />
          <Testimonials />
          <ToolsPromo />
          <Process />
          <About />
          <Blog />
          <Contact />
        </main>
      } />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work/sweatculture" element={<SweatCulturePage />} />
      <Route path="/work/trailside" element={<TrailsidePage />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="/tools/archetype-finder" element={<ArchetypeFinderPage />} />
      <Route path="/tools/archetype-directory" element={<ArchetypeDirectoryPage />} />
      <Route path="/tools/positioning-builder" element={<PositioningBuilderPage />} />
      <Route path="/tools/brand-audit" element={<BrandAuditPage />} />
      <Route path="/blog" element={<BlogAllPage />} />
      <Route path="/blog/:postId" element={<BlogPostWrapper />} />
      {/* Fallback */}
      <Route path="*" element={
        <main style={{ paddingTop: '60px' }}>
          <Hero />
          <Work />
          <Testimonials />
          <ToolsPromo />
          <Process />
          <About />
          <Blog />
          <Contact />
        </main>
      } />
    </Routes>
  )
}

export default function App() {
  return (
    <PageProvider>
      <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <RouteSEO />
        <CursorGlow />
        <Nav />
        <Pages />
      </div>
    </PageProvider>
  )
}
