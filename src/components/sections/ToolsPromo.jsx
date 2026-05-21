import { usePage } from '../../context/PageContext.jsx'

const FEATURED = [
  {
    number: 'T — 001',
    title: 'BRAND ARCHETYPE FINDER',
    desc: '10 questions. Discover your primary archetype, secondary layer, and the creative tension that gives your brand its edge.',
    tag: 'FREE / ~5 MIN',
    page: 'archetype-finder',
  },
  {
    number: 'T — 003',
    title: 'POSITIONING STATEMENT BUILDER',
    desc: '7 inputs. Walk away with a Neumeier Onliness Statement and a full positioning document — your brand foundation.',
    tag: 'FREE / ~7 MIN',
    page: 'positioning-builder',
  },
]

export default function ToolsPromo() {
  const { navigate } = usePage()

  return (
    <section style={{ background: '#C8102E', color: '#F0EDE8', paddingTop: 0, paddingBottom: 0 }}>
      <div className="wrap">

        <div style={{ height: '1px', background: 'rgba(240,237,232,0.25)' }} />
        <div className="meta-row" style={{ padding: '8px 0' }}>
          <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.7)' }}>
            FREE TOOLS
          </span>
          <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.5)' }}>
            BRAND STRATEGY FOR FOUNDERS
          </span>
        </div>
        <div style={{ height: '1px', background: 'rgba(240,237,232,0.25)' }} />

        <div style={{ padding: '4px 0' }}>
          <span className="display-line" style={{ fontSize: 'clamp(52px, 13vw, 190px)', color: '#F0EDE8', display: 'block' }}>STRATEGY</span>
          <span className="display-line" style={{ fontSize: 'clamp(52px, 13vw, 190px)', color: '#F0EDE8', display: 'block' }}>TOOLS.</span>
        </div>

        <div style={{ height: '1px', background: 'rgba(240,237,232,0.25)' }} />

        <div className="tools-promo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {FEATURED.map((tool, i) => (
            <div
              key={tool.number}
              style={{
                padding: '28px 28px 28px 0',
                borderRight: i === 0 ? '1px solid rgba(240,237,232,0.25)' : 'none',
                paddingLeft: i === 1 ? '28px' : '0',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.6)' }}>
                  {tool.number}
                </span>
                <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.5)' }}>
                  {tool.tag}
                </span>
              </div>
              <div style={{ height: '1px', background: 'rgba(240,237,232,0.25)', marginBottom: '16px' }} />
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 2.4vw, 30px)',
                color: '#F0EDE8',
                letterSpacing: '0.02em',
                lineHeight: 1,
                marginBottom: '12px',
              }}>
                {tool.title}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.65, color: 'rgba(240,237,232,0.75)', marginBottom: '20px' }}>
                {tool.desc}
              </p>
              <button
                onClick={() => navigate(tool.page)}
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                  color: '#C8102E',
                  background: '#F0EDE8',
                  border: 'none',
                  padding: '12px 24px',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                OPEN TOOL →
              </button>
            </div>
          ))}
        </div>

        <div style={{ height: '1px', background: 'rgba(240,237,232,0.25)' }} />

        <div style={{ padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2.2vw, 26px)', color: 'rgba(240,237,232,0.7)', letterSpacing: '0.03em' }}>
            ALL TOOLS ARE FREE. NO SIGNUP REQUIRED.
          </span>
          <button
            onClick={() => navigate('tools')}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(16px, 2vw, 24px)',
              letterSpacing: '0.04em',
              color: '#C8102E',
              background: '#F0EDE8',
              border: 'none',
              padding: '12px 28px 14px',
              cursor: 'pointer',
              lineHeight: 1,
              transition: 'opacity 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            SEE ALL FREE TOOLS →
          </button>
        </div>

        <div style={{ height: '1px', background: 'rgba(240,237,232,0.25)' }} />

      </div>

      <style>{`
        @media (max-width: 640px) {
          .tools-promo-grid { grid-template-columns: 1fr !important; }
          .tools-promo-grid > div { padding-left: 0 !important; padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid rgba(240,237,232,0.2); }
          .tools-promo-grid > div:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}
