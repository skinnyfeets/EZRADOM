import { useState, useRef, useEffect } from 'react'
import { usePage } from '../../context/PageContext.jsx'
import { ARCHETYPES, CATEGORIES } from '../../data/archetypes.js'

// ─── ArchetypeCard ────────────────────────────────────────────────────────────
function ArchetypeCard({ archetype, inTray, onCompareToggle, onOpen, trayFull }) {
  return (
    <div
      style={{
        border: '1px solid var(--rule)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        cursor: 'pointer',
        transition: 'border-color 0.2s',
        borderColor: inTray ? '#C8102E' : 'var(--rule)',
      }}
      onClick={() => onOpen(archetype)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 2.2vw, 26px)',
            color: 'var(--ink)',
            letterSpacing: '0.02em',
            lineHeight: 1,
            marginBottom: '4px',
          }}>
            {archetype.name.toUpperCase()}
          </div>
          <span className="param-label">{archetype.category}</span>
        </div>
        <button
          onClick={e => { e.stopPropagation(); onCompareToggle(archetype.id) }}
          disabled={!inTray && trayFull}
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: '8px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '6px 12px',
            border: '1px solid',
            borderColor: inTray ? '#C8102E' : 'var(--rule)',
            background: inTray ? '#C8102E' : 'transparent',
            color: inTray ? '#F0EDE8' : (!inTray && trayFull ? 'var(--ink-faint)' : 'var(--ink)'),
            cursor: (!inTray && trayFull) ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            transition: 'all 0.2s',
          }}
        >
          {inTray ? '✓ ADDED' : 'COMPARE'}
        </button>
      </div>

      <div style={{ height: '1px', background: 'var(--rule)' }} />

      <p className="body body--sm" style={{ lineHeight: 1.65 }}>
        {archetype.definition}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '2px' }}>
        {archetype.keywords.map(k => (
          <span key={k} style={{
            fontFamily: 'var(--font-label)',
            fontSize: '7px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--ink-dim)',
            background: 'var(--rule)',
            padding: '3px 8px',
          }}>
            {k}
          </span>
        ))}
      </div>

      <span style={{
        fontFamily: 'var(--font-label)',
        fontSize: '8px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#C8102E',
        marginTop: '2px',
      }}>
        VIEW DETAIL →
      </span>
    </div>
  )
}

// ─── DetailModal ──────────────────────────────────────────────────────────────
function DetailModal({ archetype, onClose, inTray, onCompareToggle, trayFull }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(10,9,8,0.78)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg)',
          border: '1px solid var(--rule)',
          maxWidth: '640px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em', color: 'var(--ink-dim)', textTransform: 'uppercase' }}
        >
          ESC / CLOSE ✕
        </button>

        <span className="param-label" style={{ display: 'block', marginBottom: '8px' }}>{archetype.category}</span>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 6vw, 72px)', color: 'var(--ink)', letterSpacing: '0.02em', lineHeight: 1, marginBottom: '20px' }}>
          {archetype.name.toUpperCase()}
        </div>

        <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '20px' }} />

        <p className="body" style={{ marginBottom: '24px' }}>{archetype.definition}</p>

        <div style={{ marginBottom: '24px' }}>
          <span className="param-label" style={{ display: 'block', marginBottom: '10px' }}>KEYWORDS</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {archetype.keywords.map(k => (
              <span key={k} style={{
                fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--ink)',
                border: '1px solid var(--rule)', padding: '5px 12px',
              }}>
                {k}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <span className="param-label" style={{ display: 'block', marginBottom: '8px' }}>MYTHOLOGY / REFERENCE</span>
          <p className="body body--sm" style={{ fontStyle: 'italic', lineHeight: 1.7 }}>{archetype.mythology}</p>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <span className="param-label" style={{ display: 'block', marginBottom: '8px' }}>BRANDS THAT USE THIS ARCHETYPE</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {archetype.brands.map(b => (
              <span key={b} style={{
                fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.18em',
                textTransform: 'uppercase', background: 'var(--ink)', color: 'var(--bg)', padding: '5px 12px',
              }}>
                {b}
              </span>
            ))}
          </div>
        </div>

        <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '20px' }} />

        <button
          onClick={() => onCompareToggle(archetype.id)}
          disabled={!inTray && trayFull}
          style={{
            fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.22em',
            textTransform: 'uppercase',
            background: inTray ? '#C8102E' : 'var(--ink)',
            color: '#F0EDE8',
            border: 'none',
            padding: '14px 28px',
            cursor: (!inTray && trayFull) ? 'not-allowed' : 'pointer',
            opacity: (!inTray && trayFull) ? 0.4 : 1,
            transition: 'opacity 0.2s',
          }}
        >
          {inTray ? 'REMOVE FROM COMPARE' : trayFull ? 'COMPARE TRAY FULL (MAX 3)' : 'ADD TO COMPARE TRAY →'}
        </button>
      </div>
    </div>
  )
}

// ─── CompareModal ─────────────────────────────────────────────────────────────
function CompareModal({ archetypes, onClose }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const fields = [
    { label: 'DEFINITION', key: 'definition', render: v => <p className="body body--sm" style={{ lineHeight: 1.65 }}>{v}</p> },
    { label: 'KEYWORDS', key: 'keywords', render: v => (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {v.map(k => <span key={k} style={{ fontFamily: 'var(--font-label)', fontSize: '7px', letterSpacing: '0.16em', textTransform: 'uppercase', border: '1px solid var(--rule)', padding: '3px 8px' }}>{k}</span>)}
      </div>
    )},
    { label: 'MYTHOLOGY', key: 'mythology', render: v => <p className="body body--sm" style={{ fontStyle: 'italic', lineHeight: 1.65 }}>{v}</p> },
    { label: 'BRANDS', key: 'brands', render: v => (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {v.map(b => <span key={b} style={{ fontFamily: 'var(--font-label)', fontSize: '7px', letterSpacing: '0.16em', textTransform: 'uppercase', background: 'var(--ink)', color: 'var(--bg)', padding: '3px 8px' }}>{b}</span>)}
      </div>
    )},
  ]

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(10,9,8,0.82)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg)',
          border: '1px solid var(--rule)',
          width: '100%',
          maxWidth: '1100px',
          padding: '36px',
          marginTop: '20px',
          marginBottom: '40px',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em', color: 'var(--ink-dim)', textTransform: 'uppercase' }}
        >
          ESC / CLOSE ✕
        </button>

        <span className="param-label" style={{ display: 'block', marginBottom: '8px' }}>ARCHETYPE COMPARISON</span>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 48px)', color: 'var(--ink)', letterSpacing: '0.02em', lineHeight: 1, marginBottom: '24px' }}>
          SIDE-BY-SIDE BREAKDOWN
        </div>
        <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '28px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${archetypes.length}, 1fr)`, gap: '1px', background: 'var(--rule)', marginBottom: '1px' }}>
          {archetypes.map(a => (
            <div key={a.id} style={{ background: 'var(--bg)', padding: '16px 20px' }}>
              <span className="param-label" style={{ display: 'block', marginBottom: '4px' }}>{a.category}</span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 32px)', color: '#C8102E', letterSpacing: '0.02em', lineHeight: 1 }}>
                {a.name.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        {fields.map(field => (
          <div key={field.label}>
            <div style={{ background: 'var(--rule)', padding: '6px 20px', marginBottom: '1px' }}>
              <span className="param-label">{field.label}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${archetypes.length}, 1fr)`, gap: '1px', background: 'var(--rule)', marginBottom: '1px' }}>
              {archetypes.map(a => (
                <div key={a.id} style={{ background: 'var(--bg)', padding: '16px 20px' }}>
                  {field.render(a[field.key])}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── CompareTray ──────────────────────────────────────────────────────────────
function CompareTray({ ids, onRemove, onCompare, onClear }) {
  const archetypes = ids.map(id => ARCHETYPES.find(a => a.id === id)).filter(Boolean)
  if (archetypes.length === 0) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 150,
      background: 'var(--ink)',
      borderTop: '1px solid rgba(240,237,232,0.2)',
      padding: '14px max(var(--gutter), calc(50vw - var(--max) / 2))',
      display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap',
    }}>
      <span style={{ fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.5)', whiteSpace: 'nowrap' }}>
        COMPARE TRAY ({archetypes.length}/3)
      </span>

      <div style={{ display: 'flex', gap: '8px', flex: 1, flexWrap: 'wrap' }}>
        {archetypes.map(a => (
          <div key={a.id} style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            border: '1px solid rgba(240,237,232,0.3)',
            padding: '6px 12px',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '14px', color: '#F0EDE8', letterSpacing: '0.04em' }}>
              {a.name.toUpperCase()}
            </span>
            <button
              onClick={() => onRemove(a.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(240,237,232,0.5)', fontSize: '12px', lineHeight: 1, padding: '0 2px' }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
        <button
          onClick={onClear}
          style={{ fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', background: 'none', border: '1px solid rgba(240,237,232,0.3)', color: 'rgba(240,237,232,0.6)', padding: '8px 16px', cursor: 'pointer' }}
        >
          CLEAR
        </button>
        {archetypes.length >= 2 && (
          <button
            onClick={onCompare}
            style={{ fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', background: '#C8102E', border: 'none', color: '#F0EDE8', padding: '8px 20px', cursor: 'pointer' }}
          >
            COMPARE NOW →
          </button>
        )}
      </div>
    </div>
  )
}

// ─── CategoryAccordion ────────────────────────────────────────────────────────
function CategoryAccordion({ category, archetypes, isOpen, onToggle, compareTray, onCompareToggle, onOpen, trayFull }) {
  return (
    <div>
      <button
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 0', borderBottom: '1px solid var(--rule)',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2vw, 22px)', color: 'var(--ink)', letterSpacing: '0.04em', lineHeight: 1, textAlign: 'left' }}>
            {category}
          </span>
          <span className="param-label">{archetypes.length} ARCHETYPES</span>
        </div>
        <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em', color: 'var(--ink-dim)', textTransform: 'uppercase', flexShrink: 0 }}>
          {isOpen ? '↑ COLLAPSE' : '↓ EXPAND'}
        </span>
      </button>

      {isOpen && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'var(--rule)',
          marginTop: '1px',
          marginBottom: '1px',
        }} className="archetype-grid">
          {archetypes.map(a => (
            <div key={a.id} style={{ background: 'var(--bg)' }}>
              <ArchetypeCard
                archetype={a}
                inTray={compareTray.includes(a.id)}
                onCompareToggle={onCompareToggle}
                onOpen={onOpen}
                trayFull={trayFull}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ArchetypeDirectoryPage() {
  const { navigate } = usePage()
  const [search, setSearch] = useState('')
  const [openCategories, setOpenCategories] = useState(new Set())
  const [compareTray, setCompareTray] = useState([])
  const [selectedArchetype, setSelectedArchetype] = useState(null)
  const [showCompareModal, setShowCompareModal] = useState(false)

  const searchLower = search.toLowerCase()
  const filteredBySearch = search.trim()
    ? ARCHETYPES.filter(a =>
        a.name.toLowerCase().includes(searchLower) ||
        a.definition.toLowerCase().includes(searchLower) ||
        a.keywords.some(k => k.toLowerCase().includes(searchLower)) ||
        a.category.toLowerCase().includes(searchLower)
      )
    : ARCHETYPES

  const trayFull = compareTray.length >= 3

  const toggleCategory = (cat) => {
    setOpenCategories(prev => {
      const next = new Set(prev)
      next.has(cat) ? next.delete(cat) : next.add(cat)
      return next
    })
  }

  const expandAll = () => setOpenCategories(new Set(CATEGORIES))
  const collapseAll = () => setOpenCategories(new Set())

  const toggleCompare = (id) => {
    setCompareTray(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id)
      if (prev.length >= 3) return prev
      return [...prev, id]
    })
  }

  useEffect(() => {
    if (search.trim()) {
      const catsWithResults = new Set(filteredBySearch.map(a => a.category))
      setOpenCategories(catsWithResults)
    }
  }, [search])

  const totalFiltered = filteredBySearch.length

  return (
    <main style={{ paddingTop: '60px', paddingBottom: compareTray.length > 0 ? '80px' : '0' }}>
      <section>
        <div className="wrap">

          <div className="rule" />
          <div className="meta-row">
            <span className="meta-label">FREE TOOLS / T — 002</span>
            <span className="meta-label meta-label--faint">LUMINARY / EZRA DOM</span>
            <span className="meta-label meta-label--faint">BC CANADA</span>
          </div>
          <div className="rule" />

          <div style={{ padding: '4px 0' }}>
            <span className="display-line" style={{ fontSize: 'clamp(48px, 12vw, 170px)', display: 'block' }}>ARCHETYPE</span>
            <span className="display-line" style={{ fontSize: 'clamp(48px, 12vw, 170px)', display: 'block' }}>DIRECTORY.</span>
          </div>
          <div className="rule" />

          <div className="meta-row" style={{ padding: '10px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span className="meta-label meta-label--faint">100 ARCHETYPES ACROSS 17 CATEGORIES</span>
              <span className="meta-label meta-label--faint">BROWSE · COMPARE · BUILD YOUR BRAND STACK</span>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => navigate('archetype-finder')}
                style={{
                  fontFamily: 'var(--font-label)', fontSize: '10px', textTransform: 'uppercase',
                  letterSpacing: '0.22em', color: '#F0EDE8', background: '#C8102E',
                  border: 'none', padding: '10px 20px',
                  cursor: 'pointer', transition: 'opacity 0.2s', whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                TAKE THE QUIZ →
              </button>
              <button
                onClick={() => navigate('tools')}
                style={{
                  fontFamily: 'var(--font-label)', fontSize: '10px', textTransform: 'uppercase',
                  letterSpacing: '0.22em', color: 'var(--ink)', background: 'transparent',
                  border: '1px solid var(--rule-strong)', padding: '10px 20px',
                  cursor: 'pointer', transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                ← BACK TO TOOLS
              </button>
            </div>
          </div>
          <div className="rule" />

          <div style={{ padding: '16px 0', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="SEARCH ARCHETYPES..."
                style={{
                  width: '100%',
                  fontFamily: 'var(--font-label)',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding: '12px 16px',
                  background: 'transparent',
                  border: '1px solid var(--rule-strong)',
                  color: 'var(--ink)',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  style={{
                    position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--ink-dim)', fontSize: '12px',
                  }}
                >✕</button>
              )}
            </div>
            <span className="param-label" style={{ whiteSpace: 'nowrap' }}>
              {totalFiltered} RESULT{totalFiltered !== 1 ? 'S' : ''}
            </span>
            <button
              onClick={expandAll}
              style={{ fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.18em', textTransform: 'uppercase', background: 'none', border: '1px solid var(--rule)', color: 'var(--ink)', padding: '8px 14px', cursor: 'pointer' }}
            >
              EXPAND ALL
            </button>
            <button
              onClick={collapseAll}
              style={{ fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.18em', textTransform: 'uppercase', background: 'none', border: '1px solid var(--rule)', color: 'var(--ink)', padding: '8px 14px', cursor: 'pointer' }}
            >
              COLLAPSE ALL
            </button>
          </div>
          <div className="rule" />

          <div style={{ paddingBottom: '40px' }}>
            {CATEGORIES.map(cat => {
              const catArchetypes = filteredBySearch.filter(a => a.category === cat)
              if (catArchetypes.length === 0) return null
              return (
                <CategoryAccordion
                  key={cat}
                  category={cat}
                  archetypes={catArchetypes}
                  isOpen={openCategories.has(cat)}
                  onToggle={() => toggleCategory(cat)}
                  compareTray={compareTray}
                  onCompareToggle={toggleCompare}
                  onOpen={setSelectedArchetype}
                  trayFull={trayFull}
                />
              )
            })}
          </div>

          <div className="rule" />
          <div className="meta-row" style={{ padding: '8px 0 16px' }}>
            <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
            <span className="meta-label meta-label--faint">SRB ARC–002</span>
            <span className="meta-label meta-label--faint">EZRADOM.COM — BRAND STRATEGY — BC CANADA — © 2026</span>
          </div>
          <div className="rule" />
          <div style={{ height: '40px' }} />

        </div>
      </section>

      <CompareTray
        ids={compareTray}
        onRemove={id => setCompareTray(prev => prev.filter(x => x !== id))}
        onCompare={() => setShowCompareModal(true)}
        onClear={() => setCompareTray([])}
      />

      {selectedArchetype && (
        <DetailModal
          archetype={selectedArchetype}
          onClose={() => setSelectedArchetype(null)}
          inTray={compareTray.includes(selectedArchetype.id)}
          onCompareToggle={toggleCompare}
          trayFull={trayFull && !compareTray.includes(selectedArchetype.id)}
        />
      )}

      {showCompareModal && compareTray.length >= 2 && (
        <CompareModal
          archetypes={compareTray.map(id => ARCHETYPES.find(a => a.id === id)).filter(Boolean)}
          onClose={() => setShowCompareModal(false)}
        />
      )}

      <style>{`
        .archetype-grid > div { min-height: 0; }
        input::placeholder { color: var(--ink-faint); }
        @media (max-width: 640px) {
          .archetype-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
