import { useRef, useEffect } from 'react'
import { typewriterIn } from '../../utils/typewriter.js'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const tl = typewriterIn(ref.current, { trigger: ref.current, start: 'top 84%', once: true })
    return () => tl.kill()
  }, [])

  const scrollToTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact" ref={ref} style={{ paddingBottom: 0 }}>
      <div className="wrap">

        <div className="rule anim" />
        <div className="meta-row anim">
          <span className="meta-label">07 — START A PROJECT</span>
          <span className="meta-label meta-label--faint">LUMINARY</span>
          <span className="meta-label meta-label--faint">BC CANADA</span>
        </div>
        <div className="rule anim" />

        {/* Display */}
        <div style={{ padding: '4px 0' }}>
          <span className="display-line display-script anim" style={{ fontSize: 'clamp(60px, 15vw, 210px)' }}>Let's Talk.</span>
        </div>
        <div className="rule anim" />

        {/* Two-col: body / CTAs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }} className="contact-split anim">
          <div style={{ padding: '32px 40px 32px 0', borderRight: '1px solid var(--rule)' }}>
            <p className="body">
              If you're building a business and you don't want to compete on price, build a brand with me.
            </p>
            <p className="body" style={{ marginTop: '16px', opacity: 0.6, fontSize: '13px' }}>
              Based in BC, Canada — working with clients in the Okanagan, across Canada, and worldwide.
            </p>
          </div>
          <div style={{ padding: '32px 0 32px 40px', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
            <a href="https://www.instagram.com/itsezradom/" target="_blank" rel="noopener noreferrer" className="cta-primary" style={{ textAlign: 'center' }}>
              DM ME ON INSTAGRAM
            </a>
            <a href="mailto:itsezradom@gmail.com?subject=Brand%20Strategy%20Inquiry" className="cta-ghost" style={{ textAlign: 'center' }}>
              SEND AN EMAIL
            </a>
            <div style={{ marginTop: '8px' }}>
              <a
                href="https://instagram.com/itsezradom_"
                target="_blank"
                rel="noopener noreferrer"
                className="link-ink"
              >
                @ITSEZRADOM_
              </a>
            </div>
          </div>
        </div>
        <div className="rule anim" />

      </div>

        {/* EZRADOM bleed numeral — full viewport width, clickable, scrolls to top */}
        <div
          style={{ cursor: 'pointer', width: '100vw', marginLeft: 'calc(-50vw + 50%)', lineHeight: 0.85, overflow: 'visible' }}
          onClick={scrollToTop}
          title="Back to top"
        >
          <span
            className="bleed-numeral anim"
            style={{
              display: 'block',
              fontSize: '33vw',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              color: 'var(--ink)',
              pointerEvents: 'auto',
              transition: 'opacity 0.2s ease',
              lineHeight: 0.85,
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.55'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            EZRADOM
          </span>
        </div>

      <div className="wrap">

        <div className="rule anim" />

        {/* Footer meta row */}
        <div className="meta-row anim" style={{ padding: '8px 0 16px' }}>
          <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
          <span className="meta-label meta-label--faint">SRB IJA–48</span>
          <span className="meta-label meta-label--faint">EZRADOM.COM — BRAND STRATEGY — BC CANADA — © 2026</span>
        </div>
        <div className="rule anim" />
        <div style={{ height: '24px' }} />

      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-split { grid-template-columns: 1fr !important; }
          .contact-split > div:first-child { padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid var(--rule); padding-bottom: 24px; }
          .contact-split > div:last-child { padding-left: 0 !important; padding-top: 24px; }
        }
      `}</style>
    </section>
  )
}
