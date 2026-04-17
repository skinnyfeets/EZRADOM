import { useState, useEffect, useRef } from 'react'
import { typewriterIn } from '../../utils/typewriter.js'
import { usePage } from '../../context/PageContext.jsx'
import { BLOG_POSTS } from './BlogPostPage.jsx'

function Rule() { return <div className="rule" /> }

const ALL_TAGS = [...new Set(BLOG_POSTS.flatMap(p => p.tags || []))]

export default function BlogAllPage() {
  const { navigate } = usePage()
  const ref = useRef(null)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('newest')
  const [activeTag, setActiveTag] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (ref.current) {
      const tl = typewriterIn(ref.current, { trigger: ref.current, start: 'top 90%', once: true })
      return () => tl.kill()
    }
  }, [])

  const filtered = BLOG_POSTS
    .filter(p => {
      const q = search.toLowerCase()
      const matchSearch = !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle?.toLowerCase().includes(q) ||
        (p.tags || []).some(t => t.toLowerCase().includes(q))
      const matchTag = !activeTag || (p.tags || []).includes(activeTag)
      return matchSearch && matchTag
    })
    .sort((a, b) => sort === 'newest'
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date)
    )

  return (
    <div style={{ paddingTop: '60px' }} ref={ref}>
      <div className="wrap">

        {/* Header */}
        <Rule />
        <div className="meta-row anim">
          <button
            onClick={() => navigate('home')}
            className="meta-label"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)', letterSpacing: '0.18em', fontFamily: 'var(--font-label)', fontSize: '10px', textTransform: 'uppercase', padding: 0 }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            ← BACK TO HOME
          </button>
          <span className="meta-label meta-label--faint">BLOG — THE ENTREPRENEURS GUIDE TO BRANDING</span>
          <span className="meta-label meta-label--faint">{BLOG_POSTS.length} POSTS</span>
        </div>
        <Rule />

        <div style={{ padding: '4px 0' }}>
          <span className="display-line display-script anim" style={{ fontSize: 'clamp(60px, 15vw, 210px)' }}>Blog.</span>
        </div>
        <Rule />

        <div className="anim" style={{ padding: '14px 0' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 56px)', color: 'var(--ink)', letterSpacing: '0.02em', lineHeight: 1 }}>
            THE ENTREPRENEURS GUIDE TO BRANDING
          </span>
        </div>
        <Rule />

        {/* Filter bar */}
        <div className="anim" style={{ padding: '20px 0 16px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          {/* Search */}
          <input
            type="text"
            placeholder="SEARCH POSTS..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--ink)',
              background: 'transparent',
              border: '1px solid var(--rule-strong)',
              padding: '10px 16px',
              outline: 'none',
              width: '220px',
              borderRadius: 0,
            }}
          />

          {/* Sort */}
          <div style={{ display: 'flex', gap: '4px' }}>
            {['newest', 'oldest'].map(s => (
              <button
                key={s}
                onClick={() => setSort(s)}
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: sort === s ? 'var(--bg)' : 'var(--ink)',
                  background: sort === s ? 'var(--ink)' : 'transparent',
                  border: '1px solid var(--rule-strong)',
                  padding: '9px 14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  borderRadius: 0,
                }}
              >
                {s === 'newest' ? 'NEWEST FIRST' : 'OLDEST FIRST'}
              </button>
            ))}
          </div>

          {/* Tag filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: activeTag === tag ? 'var(--bg)' : 'var(--ink-faint)',
                  background: activeTag === tag ? 'var(--ink)' : 'transparent',
                  border: '1px solid var(--rule)',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  borderRadius: 0,
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <Rule />

        {/* Results count */}
        <div style={{ padding: '10px 0 4px' }}>
          <span className="param-label">{filtered.length} {filtered.length === 1 ? 'POST' : 'POSTS'}{search || activeTag ? ' MATCHING' : ''}</span>
        </div>

        {/* Cards grid */}
        {filtered.length === 0 ? (
          <div style={{ padding: '60px 0', textAlign: 'center' }}>
            <span className="param-label">NO POSTS MATCH YOUR SEARCH.</span>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px', paddingTop: '16px' }} className="blog-all-grid">
            {filtered.map(post => (
              <BlogCard key={post.id} post={post} navigate={navigate} />
            ))}
          </div>
        )}

        <div style={{ paddingBottom: '24px' }} />
        <Rule />
        <div className="meta-row" style={{ padding: '12px 0 20px' }}>
          <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
          <span className="meta-label meta-label--faint">EZRADOM.COM — © 2026</span>
        </div>
        <Rule />
        <div style={{ height: '40px' }} />

      </div>

      <style>{`
        .blog-all-grid { grid-template-columns: repeat(2, 1fr) !important; }
        @media (max-width: 768px) {
          .blog-all-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder {
          color: var(--ink-faint);
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

function BlogCard({ post, navigate }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={() => navigate(post.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#a80d27' : 'var(--ink)',
        color: 'var(--bg)',
        padding: '32px',
        cursor: 'pointer',
        transition: 'background 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '320px',
        minWidth: 0,
      }}
    >
      {/* Top row: number + date */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
        <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(240,237,232,0.55)' }}>
          {post.number}
        </span>
        <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(240,237,232,0.55)' }}>
          {post.dateLabel}
        </span>
      </div>

      {/* Hairline */}
      <div style={{ height: '1px', background: 'rgba(240,237,232,0.25)', marginBottom: '20px' }} />

      {/* Title */}
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 38px)', color: '#F0EDE8', letterSpacing: '0.02em', lineHeight: 1.05, marginBottom: '12px', flex: 1 }}>
        {Array.isArray(post.displayTitle)
          ? post.displayTitle.map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>)
          : post.displayTitle}
      </div>

      {/* Subtitle */}
      <p style={{ fontFamily: 'var(--font-label)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(240,237,232,0.65)', marginBottom: '20px', lineHeight: 1.5 }}>
        {post.subtitle}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
        {(post.tags || []).map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--font-label)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.14em',
            color: 'rgba(240,237,232,0.55)', border: '1px solid rgba(240,237,232,0.25)',
            padding: '4px 8px',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2vw, 24px)', color: '#F0EDE8', letterSpacing: '0.04em', transition: 'opacity 0.2s ease', opacity: hovered ? 0.7 : 1 }}>
          READ →
        </span>
      </div>
    </div>
  )
}
