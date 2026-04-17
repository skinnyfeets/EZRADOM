import { useEffect, useRef } from 'react'
import { typewriterHeroIn } from '../../utils/typewriter.js'
import ezraPhoto from '../../assets/images/ezra-hero.png'
import { usePage } from '../../context/PageContext.jsx'

export default function Hero() {
  const ref = useRef(null)
  const { navigate } = usePage()

  useEffect(() => {
    if (!ref.current) return
    const tl = typewriterHeroIn(ref.current)
    return () => tl.kill()
  }, [])

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    const t = document.querySelector(id)
    if (window.__lenis) window.__lenis.scrollTo(t, { offset: -60 })
    else t?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" ref={ref} style={{ position: 'relative', overflow: 'visible' }}>
      <div className="wrap">

        {/* ── PORTFOLIO heading ── */}
        <div style={{ padding: '0' }}>
          <span className="display-line display-script hero-anim" style={{ fontSize: 'clamp(72px, 17vw, 230px)' }}>
            Portfolio
          </span>
        </div>

        {/* ── Top meta row ── */}
        <div className="rule hero-anim" />
        <div className="meta-row hero-anim">
          <span className="meta-label">STUDIO LUMINARY</span>
          <span className="meta-label meta-label--faint">PEACHLAND, BC</span>
          <span className="meta-label meta-label--faint">SERIES 1 / 2026</span>
        </div>
        <div className="rule hero-anim" />

        {/* ── Overlay block ──
            Photo sits at the right in the background.
            EZRA DOM is centered on top of the photo.
        ── */}
        {/* Glow — outside overflow:hidden so it flows freely */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          top: '35%',
          right: '25%',
          transform: 'translate(50%, -50%)',
          width: '80%',
          height: 0,
          paddingBottom: '80%',
          background: 'radial-gradient(circle, rgba(200,16,46,0.22) 0%, rgba(200,16,46,0.12) 35%, rgba(200,16,46,0.05) 55%, transparent 72%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div className="hero-overlay" style={{
          position: 'relative',
          minHeight: 'clamp(420px, 52vw, 680px)',
          overflow: 'hidden',
        }}>

          {/* Photo — absolute, right-anchored, behind */}
          <img
            src={ezraPhoto}
            alt="Ezra Dom — brand strategist and identity designer, founder of Luminary Graphix, BC Canada"
            className="hero-photo-img"
            style={{
              position: 'absolute',
              right: '-2%',
              bottom: 0,
              width: '54%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom center',
              zIndex: 0,
              display: 'block',
            }}
          />

          {/* Corner crosshairs — framing the photo column */}
          <div className="ph-corner ph-tl" style={{ right: 'auto', left: '42%' }} />
          <div className="ph-corner ph-tr" style={{ right: '0' }} />
          <div className="ph-corner ph-br" style={{ right: '0' }} />
          <div className="ph-corner ph-bl" style={{ right: 'auto', left: '42%' }} />

          {/* Coord labels */}
          <span className="param-label" style={{
            position: 'absolute', top: '14px', left: 'calc(42% + 8px)', fontSize: '8px', zIndex: 2,
          }}>N 49°52′</span>
          <span className="param-label" style={{
            position: 'absolute', top: '14px', right: '8px', fontSize: '8px', zIndex: 2,
          }}>W 119°44′</span>
          <span className="param-label" style={{
            position: 'absolute', bottom: '10px', left: 'calc(42% + 8px)', fontSize: '8px', zIndex: 2,
          }}>ED — 01</span>
          <span className="param-label" style={{
            position: 'absolute', bottom: '10px', right: '8px', fontSize: '8px', zIndex: 2,
          }}>2026</span>

          {/* EZRA DOM + BRAND STRATEGIST — slightly right of left edge, overlaps into photo */}
          <div className="hero-name-overlay hero-anim" style={{
            position: 'absolute',
            left: '4%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '70%',
            textAlign: 'left',
            zIndex: 1,
            paddingBottom: '4%',
          }}>
            <span className="display-line" style={{
              fontSize: 'clamp(80px, 19vw, 256px)',
              display: 'block',
            }}>
              EZRA
            </span>
            <span className="display-line" style={{
              fontSize: 'clamp(80px, 19vw, 256px)',
              display: 'block',
              marginTop: '-0.05em',
            }}>
              DOM
            </span>
            {/* BRAND STRATEGIST — directly under the name */}
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 3.6vw, 48px)',
              letterSpacing: '0.02em',
              lineHeight: 1,
              background: 'var(--ink)',
              color: 'var(--bg)',
              padding: '4px 14px 6px',
              display: 'inline-block',
              marginTop: '14px',
            }}>
              BRAND STRATEGIST
            </span>
          </div>

        </div>

        {/* ── Below overlay: subheading + params ── */}
        <div className="rule hero-anim" />

        <div style={{ padding: '24px 0 28px' }} className="hero-anim">
          <span className="display-line" style={{
            fontSize: 'clamp(32px, 5.5vw, 74px)',
            color: 'var(--ink)',
            whiteSpace: 'normal',
            lineHeight: 1.0,
          }}>
            DIFFERENT IS BETTER THAN BETTER.
          </span>
        </div>

        <div className="rule hero-anim" />

        {/* ── Body + CTAs ── */}
        <div style={{ padding: '16px 0 4px', maxWidth: '600px' }} className="hero-anim">
          <p className="body" style={{ fontSize: '15px', lineHeight: 1.72 }}>
            Brand strategy lives at the intersection of creativity and business structure, always thinking systematically, always making something worth looking at, always asking what the audience actually perceives.
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 0 32px',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div style={{ display: 'flex', gap: '8px', width: '100%' }} className="hero-anim">
            <button
              onClick={() => navigate('tools')}
              style={{
                flex: 1,
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(20px, 2.8vw, 36px)',
                letterSpacing: '0.04em',
                color: 'var(--bg)',
                background: 'var(--ink)',
                border: '2px solid var(--ink)',
                borderRadius: 0,
                padding: '14px 20px 16px',
                cursor: 'pointer',
                lineHeight: 1,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              FREE TOOLS →
            </button>
            <button
              onClick={() => navigate('blog-all')}
              style={{
                flex: 1,
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(20px, 2.8vw, 36px)',
                letterSpacing: '0.04em',
                color: 'var(--ink)',
                background: 'transparent',
                border: '1px solid var(--ink)',
                borderRadius: 0,
                padding: '14px 20px 16px',
                cursor: 'pointer',
                lineHeight: 1,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              THE BLOG →
            </button>
          </div>
          <span className="meta-label meta-label--faint hero-anim">0.1</span>
        </div>

        <div className="rule hero-anim" />
        <div className="meta-row hero-anim">
          <span className="meta-label">02</span>
          <span className="meta-label meta-label--faint">LUMINARY GRAPHIX</span>
          <span className="meta-label meta-label--faint">BC CANADA</span>
          <span className="meta-label meta-label--faint">2022 — PRESENT</span>
        </div>
        <div className="rule hero-anim" />

      </div>

      <style>{`
        .cta-arrow-btn {
          font-family: var(--font-label);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: var(--bg);
          background: var(--ink);
          padding: 11px 20px;
          border: none;
          border-radius: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: opacity 0.2s ease;
          text-decoration: none;
        }
        .cta-arrow-btn:hover { opacity: 0.82; }
        .cta-arrow-icon { font-size: 14px; letter-spacing: 0; line-height: 1; }

        .ph-corner { position: absolute; width: 14px; height: 14px; }
        .ph-tl { top: 0;    right: auto; border-top: 1px solid var(--rule-strong); border-left: 1px solid var(--rule-strong); }
        .ph-tr { top: 0;    right: 0;    border-top: 1px solid var(--rule-strong); border-right: 1px solid var(--rule-strong); }
        .ph-br { bottom: 0; right: 0;    border-bottom: 1px solid var(--rule-strong); border-right: 1px solid var(--rule-strong); }
        .ph-bl { bottom: 0; right: auto; border-bottom: 1px solid var(--rule-strong); border-left: 1px solid var(--rule-strong); }

        @media (max-width: 640px) {
          .hero-overlay { min-height: clamp(260px, 75vw, 420px) !important; }
          .hero-photo-img {
            width: 80% !important;
            right: -13% !important;
          }
          .hero-name-overlay {
            width: 88% !important;
          }
          .hero-params { grid-template-columns: 1fr !important; row-gap: 10px !important; }
        }
      `}</style>

    </section>
  )
}
