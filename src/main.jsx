import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// WebMCP: expose site tools to AI agents via the browser (navigator.modelContext API)
if (typeof navigator !== 'undefined' && 'modelContext' in navigator) {
  navigator.modelContext.provideContext({
    tools: [
      {
        name: 'get_site_info',
        description: 'Get information about Ezra Dombowsky — freelance brand strategist and designer based in Kelowna, BC, Canada',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => ({
          name: 'Ezra Dombowsky',
          role: 'Brand Strategist & Designer',
          studio: 'Luminary Graphix',
          location: 'Kelowna, BC, Canada',
          services: ['Brand Strategy', 'Visual Identity Design', 'Brand Design', 'Logo Design', 'Brand Audit'],
          areaServed: ['Kelowna', 'Okanagan', 'British Columbia', 'Canada'],
          url: 'https://ezradom.com',
          contact: 'itsezradom@gmail.com',
          instagram: 'https://www.instagram.com/itsezradom_/',
          linkedin: 'https://www.linkedin.com/in/ezradom',
        }),
      },
      {
        name: 'list_brand_tools',
        description: 'List the free brand strategy tools available on ezradom.com — archetype quiz, archetype directory, positioning builder, brand audit',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => ({
          tools: [
            {
              name: 'Brand Archetype Quiz',
              url: 'https://ezradom.com/tools/archetype-finder',
              description: 'Identify your brand archetypes with a 10-question quiz across 100 archetypes and 17 categories',
            },
            {
              name: 'Brand Archetype Directory',
              url: 'https://ezradom.com/tools/archetype-directory',
              description: '100 archetypes across 17 categories with definitions, keywords, mythology, and real brand examples',
            },
            {
              name: 'Positioning Statement Builder',
              url: 'https://ezradom.com/tools/positioning-builder',
              description: 'Build your brand positioning statement in 7 steps using the Neumeier Onliness framework',
            },
            {
              name: 'Brand Audit Checklist',
              url: 'https://ezradom.com/tools/brand-audit',
              description: '20-point brand audit scoring positioning, visual identity, voice, consistency, and proof',
            },
          ],
        }),
      },
      {
        name: 'list_portfolio',
        description: 'Get portfolio case studies from Ezra Dombowsky — brand strategy and identity projects',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => ({
          projects: [
            {
              name: 'Sweat Culture',
              type: 'Sauna & Wellness Brand',
              location: 'Peachland, BC',
              url: 'https://ezradom.com/work/sweatculture',
              description: 'Full brand build — archetype strategy, positioning, visual identity, web presence. Result: 2,000+ visitors in 4 months.',
            },
            {
              name: 'Trailside Outdoor Co.',
              type: 'Craft Outdoor Brand',
              url: 'https://ezradom.com/work/trailside',
              description: 'Brand positioning, logo design, and label design for a craft outdoor/lemonade brand.',
            },
          ],
        }),
      },
    ],
  }).catch(() => {})
}

// ── Lenis Smooth Scroll ──────────────────────────────────────────────────────
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
})

gsap.ticker.add((time) => { lenis.raf(time * 1000) })
gsap.ticker.lagSmoothing(0)
window.__lenis = lenis

// ── Scroll to top on route change ────────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname])
  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
