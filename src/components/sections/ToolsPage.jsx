import { useRef, useEffect } from 'react'
import { typewriterIn } from '../../utils/typewriter.js'
import { usePage } from '../../context/PageContext.jsx'

function ToolCard({ number, title, desc, tag, href, page: navPage }) {
  const { navigate } = usePage()
  const handleOpen = () => {
    if (navPage) { navigate(navPage); return }
    if (href) window.open(href, '_blank', 'noopener,noreferrer')
  }
  const isLive = !!(href || navPage)
  return (
    <div style={{ borderBottom: '1px solid var(--rule)', padding: '28px 0' }} className="anim">
      {/* Desktop layout: number | content | button */}
      <div className="tool-card-desktop" style={{ display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '24px', alignItems: 'start' }}>
        <span className="param-label" style={{ paddingTop: '4px' }}>{number}</span>
        <div>
          <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '14px' }} />
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 40px)', color: 'var(--ink)', letterSpacing: '0.02em', marginBottom: '8px', lineHeight: 1 }}>
            {title}
          </div>
          <p className="body body--sm" style={{ marginBottom: '10px' }}>{desc}</p>
          <span className="param-label">{tag}</span>
        </div>
        {isLive ? (
          <button
            onClick={handleOpen}
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: 'var(--bg)',
              background: 'var(--ink)',
              border: 'none',
              padding: '12px 24px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            OPEN TOOL →
          </button>
        ) : (
          <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.18em', color: 'var(--ink-faint)', textTransform: 'uppercase', whiteSpace: 'nowrap', paddingTop: '4px' }}>
            COMING SOON
          </span>
        )}
      </div>

      {/* Mobile layout: number + button on top, content below */}
      <div className="tool-card-mobile" style={{ display: 'none' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span className="param-label">{number}</span>
          {isLive ? (
            <button
              onClick={handleOpen}
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                color: 'var(--bg)',
                background: 'var(--ink)',
                border: 'none',
                padding: '10px 18px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              OPEN TOOL →
            </button>
          ) : (
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.18em', color: 'var(--ink-faint)', textTransform: 'uppercase' }}>
              COMING SOON
            </span>
          )}
        </div>
        <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '14px' }} />
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 7vw, 36px)', color: 'var(--ink)', letterSpacing: '0.02em', marginBottom: '8px', lineHeight: 1 }}>
          {title}
        </div>
        <p className="body body--sm" style={{ marginBottom: '10px' }}>{desc}</p>
        <span className="param-label">{tag}</span>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .tool-card-desktop { display: none !important; }
          .tool-card-mobile { display: block !important; }
        }
      `}</style>
    </div>
  )
}

const TOOLS = [
  {
    number: 'T — 001',
    title: 'BRAND ARCHETYPE FINDER',
    desc: '10 questions. 3 archetypes. Answer honestly and get your primary archetype, a secondary layer, and the creative tension that gives your brand its edge.',
    tag: 'BRAND STRATEGY / FREE / ~5 MIN',
    href: null,
    page: 'archetype-finder',
  },
  {
    number: 'T — 002',
    title: 'BRAND ARCHETYPE DIRECTORY',
    desc: 'Browse all 100 archetypes across 17 categories. Learn the mythology, keywords, and real-world brands behind each one. Compare up to 3 side by side.',
    tag: 'BRAND STRATEGY / FREE / REFERENCE',
    href: null,
    page: 'archetype-directory',
  },
  {
    number: 'T — 003',
    title: 'POSITIONING STATEMENT BUILDER',
    desc: '7 inputs. 2 statement formats. Answer honestly and walk away with a Neumeier Onliness Statement and a full positioning statement — ready to use as your brand foundation document.',
    tag: 'BRAND STRATEGY / FREE / ~7 MIN',
    href: null,
    page: 'positioning-builder',
  },
  {
    number: 'T — 004',
    title: 'BRAND AUDIT CHECKLIST',
    desc: '20 checkpoints across 6 categories. Find the gaps between what you believe your brand communicates and what your audience actually experiences. Includes a priority fix list.',
    tag: 'BRAND STRATEGY / FREE / ~10 MIN',
    href: null,
    page: 'brand-audit',
  },
]

export default function ToolsPage() {
  const ref = useRef(null)
  const { navigate } = usePage()

  useEffect(() => {
    if (!ref.current) return
    const tl = typewriterIn(ref.current)
    return () => tl.kill()
  }, [])

  return (
    <main style={{ paddingTop: '60px' }} ref={ref}>
      <section>
        <div className="wrap">

          <div className="rule anim" />
          <div className="meta-row anim">
            <span className="meta-label">FREE TOOLS</span>
            <span className="meta-label meta-label--faint">LUMINARY / EZRA DOM</span>
            <span className="meta-label meta-label--faint">BC CANADA</span>
          </div>
          <div className="rule anim" />

          <div style={{ padding: '4px 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(60px, 15vw, 210px)' }}>FREE</span>
            <span className="display-line anim" style={{ fontSize: 'clamp(60px, 15vw, 210px)' }}>TOOLS.</span>
          </div>
          <div className="rule anim" />

          <div className="meta-row anim" style={{ padding: '10px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span className="meta-label meta-label--faint">BRAND STRATEGY TOOLS FOR FOUNDERS</span>
              <span className="meta-label meta-label--faint">FREE. NO SIGNUP REQUIRED.</span>
            </div>
            <button
              onClick={() => navigate('home')}
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                color: 'var(--ink)',
                background: 'transparent',
                border: '1px solid var(--rule-strong)',
                padding: '10px 20px',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              ← BACK
            </button>
          </div>
          <div className="rule anim" />

          <div style={{ paddingBottom: '40px' }}>
            {TOOLS.map(t => <ToolCard key={t.number} {...t} />)}
          </div>

          <div className="rule anim" />
          <div className="meta-row anim" style={{ padding: '8px 0 16px' }}>
            <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
            <span className="meta-label meta-label--faint">SRB TLS–01</span>
            <span className="meta-label meta-label--faint">EZRADOM.COM — BRAND STRATEGY — BC CANADA — © 2026</span>
          </div>
          <div className="rule anim" />
          <div style={{ height: '40px' }} />

        </div>
      </section>
    </main>
  )
}
