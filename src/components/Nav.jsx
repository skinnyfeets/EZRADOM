import { useState } from 'react'
import { usePage } from '../context/PageContext.jsx'

const LINKS = [
  { label: 'HOME',    href: null },
  { label: 'WORK',    href: '#work' },
  { label: 'PROCESS', href: '#process' },
  { label: 'ABOUT',   page: 'about-page' },
  { label: 'TOOLS',   page: 'tools' },
  { label: 'BLOG',    page: 'blog-all' },
  { label: 'CONTACT', href: '#contact' },
]

function scrollToSection(href) {
  const el = document.querySelector(href)
  if (!el) return
  window.__lenis ? window.__lenis.scrollTo(el, { offset: -60, duration: 1.2 }) : el.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { page, navigate } = usePage()

  const handleLink = (href, navPage) => {
    setOpen(false)
    if (navPage) {
      navigate(navPage)
      return
    }
    if (!href) {
      navigate('home')
      return
    }
    if (page !== 'home') {
      navigate('home')
      setTimeout(() => scrollToSection(href), 200)
    } else {
      scrollToSection(href)
    }
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
        background: 'var(--bg)',
        borderBottom: '1px solid var(--rule)',
      }}>
        <div className="wrap">
          <div style={{ minHeight: '40px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '7px 0' }}>
            {/* Left — EZRADOM.COM */}
            <a
              href="#"
              onClick={e => { e.preventDefault(); handleLink(null) }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '18px',
                letterSpacing: '0.06em', color: 'var(--ink)', lineHeight: 1,
              }}>EZRADOM.COM</span>
            </a>

            {/* Centre — BRAND STRATEGIST */}
            <span style={{
              fontFamily: 'var(--font-label)', fontSize: '8px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgb(200,16,46)', lineHeight: 1,
            }}>BRAND STRATEGIST</span>

            {/* Right — nav links + mobile trigger */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <div className="nav-links" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
                {LINKS.map(({ label, href, page: navPage }) => (
                  <a
                    key={label}
                    href={href || '#'}
                    onClick={e => { e.preventDefault(); handleLink(href, navPage) }}
                    className="meta-label"
                    style={{ transition: 'opacity .2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {label}
                  </a>
                ))}
              </div>
              <button
                onClick={() => setOpen(v => !v)}
                className="nav-burger"
                style={{ background: 'none', border: 'none', cursor: 'crosshair', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
                aria-label="Menu"
              >
                {[0, 1, 2].map(i => (
                  <span key={i} style={{
                    display: 'block', width: '20px', height: '1px', background: 'var(--ink)',
                    transform: open && i === 0 ? 'rotate(45deg) translate(4px,4px)' : open && i === 2 ? 'rotate(-45deg) translate(4px,-4px)' : 'none',
                    opacity: open && i === 1 ? 0 : 1,
                    transition: 'transform .2s, opacity .2s',
                  }} />
                ))}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, background: 'var(--bg)', zIndex: 99,
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
          justifyContent: 'center', padding: '0 var(--gutter)', gap: '24px',
          borderTop: '1px solid var(--rule)',
        }}>
          {LINKS.map(({ label, href, page: navPage }) => (
            <a
              key={label}
              href={href || '#'}
              onClick={e => { e.preventDefault(); handleLink(href, navPage) }}
              style={{ fontFamily: 'var(--font-display)', fontSize: '48px', color: 'var(--ink)', letterSpacing: '0.02em' }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
