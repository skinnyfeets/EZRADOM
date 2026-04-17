import { useRef, useEffect, useState } from 'react'
import { typewriterIn } from '../../utils/typewriter.js'
import { usePage } from '../../context/PageContext.jsx'
import { BLOG_POSTS } from './BlogPostPage.jsx'

function PostRow({ post, navigate }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="anim"
      onClick={() => navigate(post.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: 'pointer',
        background: hovered ? 'var(--bg)' : 'var(--ink)',
        borderBottom: `1px solid ${hovered ? 'var(--rule)' : 'rgba(240,237,232,0.25)'}`,
        transition: 'background 0.25s ease',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        paddingLeft: 'max(var(--gutter), calc(50vw - var(--max) / 2))',
        paddingRight: 'max(var(--gutter), calc(50vw - var(--max) / 2))',
      }}
    >
      <div className="blog-row-grid" style={{
        display: 'grid',
        gridTemplateColumns: '120px 1fr auto',
        gap: '24px',
        alignItems: 'center',
        padding: '24px 0',
      }}>
        <span className="param-label" style={{
          color: hovered ? 'var(--ink-faint)' : 'rgba(240,237,232,0.55)',
          transition: 'color 0.25s ease',
          flexShrink: 0,
        }}>
          {post.number}
        </span>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 5vw, 72px)',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            color: hovered ? 'var(--ink)' : 'var(--bg)',
            letterSpacing: '0.02em',
            lineHeight: 1.05,
            marginBottom: '4px',
            transition: 'color 0.25s ease',
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
          }}>
            {Array.isArray(post.displayTitle)
              ? post.displayTitle.map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>)
              : post.displayTitle}
          </div>
          <span className="param-label" style={{
            color: hovered ? 'var(--ink-faint)' : 'rgba(240,237,232,0.55)',
            transition: 'color 0.25s ease',
          }}>
            {post.subtitle}
          </span>
        </div>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(16px, 1.8vw, 26px)',
          color: hovered ? 'var(--ink)' : 'rgba(240,237,232,0.7)',
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
          transition: 'color 0.25s ease',
          flexShrink: 0,
        }}>
          READ →
        </span>
      </div>
    </div>
  )
}

function ViewAllBtn({ navigate, count }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onClick={() => navigate('blog-all')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        paddingLeft: 'max(var(--gutter), calc(50vw - var(--max) / 2))',
        paddingRight: 'max(var(--gutter), calc(50vw - var(--max) / 2))',
        background: hovered ? 'var(--bg)' : 'var(--ink)',
        cursor: 'pointer',
        borderBottom: `1px solid ${hovered ? 'var(--rule)' : 'rgba(240,237,232,0.15)'}`,
        transition: 'background 0.25s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '36px 0' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 6vw, 88px)',
          color: hovered ? 'var(--ink)' : 'var(--bg)',
          letterSpacing: '0.03em',
          lineHeight: 1,
          transition: 'color 0.25s ease',
        }}>
          VIEW ALL {count} POSTS
        </span>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 6vw, 88px)',
          color: hovered ? 'var(--ink)' : 'var(--bg)',
          letterSpacing: '0.03em',
          transition: 'color 0.25s ease',
        }}>
          →
        </span>
      </div>
    </div>
  )
}

export default function Blog() {
  const ref = useRef(null)
  const { navigate } = usePage()

  useEffect(() => {
    if (!ref.current) return
    const tl = typewriterIn(ref.current, { trigger: ref.current, start: 'top 84%', once: true })
    return () => tl.kill()
  }, [])

  return (
    <section id="blog" ref={ref}>
      <div className="wrap">

        <div className="rule anim" />
        <div className="meta-row anim">
          <span className="meta-label">BLOG — THE ENTREPRENEURS GUIDE TO BRANDING</span>
          <span className="meta-label meta-label--faint">{BLOG_POSTS.length} POSTS</span>
        </div>
        <div className="rule anim" />

        <div style={{ padding: '4px 0' }}>
          <span className="display-line display-script anim" style={{ fontSize: 'clamp(60px, 15vw, 210px)' }}>Blog.</span>
        </div>
        <div className="rule anim" />

        <div className="anim" style={{ padding: '14px 0' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 56px)', color: 'var(--ink)', letterSpacing: '0.02em', lineHeight: 1 }}>
            THE ENTREPRENEURS GUIDE TO BRANDING
          </span>
        </div>
        <div className="rule anim" />

        {[...BLOG_POSTS]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3)
          .map(post => (
            <PostRow key={post.id} post={post} navigate={navigate} />
          ))}

        {/* View All button */}
        <ViewAllBtn navigate={navigate} count={BLOG_POSTS.length} />

        <div className="rule anim" />
        <div className="meta-row anim">
          <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
          <span className="meta-label meta-label--faint">SRB IJA–06</span>
        </div>
        <div className="rule anim" />

      </div>
      <style>{`
        @media (max-width: 640px) {
          .blog-row-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  )
}
