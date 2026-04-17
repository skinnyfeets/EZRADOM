import { useRef, useEffect } from 'react'
import { typewriterIn } from '../../utils/typewriter.js'
import ezraTestimonials from '../../assets/images/ezra-testimonials.png'

const TESTIMONIALS = [
  {
    name: 'NINA',
    role: 'CO-FOUNDER / SWEAT CULTURE',
    ref_id: 'TST-001',
    quote: "We had the pleasure of working with Ezra from Luminary Graphix on the branding and logo design for our new athletics and sauna company, Sweat Culture. Ezra has a well defined creative process, and we're thrilled with the designs, colour schemes, photography style, and fonts he put together for us. He helped shape our brand into something that stands out, with its own voice and personality. Highly recommend this up-and-coming agency!",
  },
  {
    name: 'JACKSON',
    role: 'FOUNDER / TRAILSIDE OUTDOOR CO.',
    ref_id: 'TST-002',
    quote: "Working with Luminary Graphix has been nothing but top tier professionalism, and creativity. Ezra designed our logo, label, and branding and his attention to detail as well as implementing creative feedback was top notch. From the initial concept to the final design, Ezra was communicative, receptive to feedback, and delivered high quality work that truly represents what Trailside is all about. His designs not only look sick but also feel authentic to the brand.",
  },
  {
    name: 'EMILY JACKSON',
    role: 'OWNER / THE JACKSON RANCH',
    ref_id: 'TST-003',
    quote: "Working with Ezra from Luminary Graphix was such a pleasure! He went above and beyond what I expected. He was able to take my scattered ideas and create an entire brand identity that matched my vision perfectly! His communication and professionalism made him so great to work with!",
  },
  {
    name: 'NIEL LIVINGSTONE',
    role: 'INTERNATIONAL HOUSE OF PRAYER CANADA',
    ref_id: 'TST-004',
    quote: "Our organization recently commissioned a set of corporate graphics, logos and a letter head from Ezra. We gave him some rather difficult concepts and subtleties to incorporate and the board remains delighted with his work. I personally found him to be quick to grasp, pleasant to work with and reliable. We would collectively recommend him to you.",
  },
]

function TestBlock({ name, role, ref_id, quote }) {
  return (
    <div
      className="anim"
      style={{
        padding: '28px 24px',
        borderRight: '1px solid var(--rule)',
      }}
    >
      <div style={{ marginBottom: '14px' }}>
        <div className="param-label" style={{ marginBottom: '3px' }}>{ref_id}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--ink)', letterSpacing: '0.02em' }}>{name}</div>
        <div className="param-label" style={{ marginTop: '2px' }}>{role}</div>
      </div>
      <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '16px' }} />
      <p className="body body--sm" style={{ fontStyle: 'italic' }}>"{quote}"</p>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const tl = typewriterIn(ref.current, { trigger: ref.current, start: 'top 84%', once: true })
    return () => tl.kill()
  }, [])

  return (
    <section id="testimonials" ref={ref} style={{ position: 'relative' }}>
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        <div className="rule anim" />
        <div className="meta-row anim">
          <span className="meta-label">03 — TESTIMONIALS</span>
          <span className="meta-label meta-label--faint">SERIES 4 / 4</span>
        </div>
        <div className="rule anim" />
        <div style={{ padding: '4px 0', position: 'relative' }}>
          <span className="display-line anim" style={{ fontSize: 'clamp(64px, 16vw, 230px)' }}>WHAT THEY</span>
          <span className="display-line anim" style={{ fontSize: 'clamp(64px, 16vw, 230px)' }}>SAID.</span>

          {/* Glow behind photo */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            top: '30%',
            right: '18%',
            transform: 'translate(50%, -50%)',
            width: '100%',
            height: 0,
            paddingBottom: '100%',
            background: 'radial-gradient(circle, rgba(200,16,46,0.20) 0%, rgba(200,16,46,0.11) 35%, rgba(200,16,46,0.04) 55%, transparent 72%)',
            pointerEvents: 'none',
            zIndex: 9,
          }} />

          <img
            src={ezraTestimonials}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '2%',
              bottom: '-40%',
              height: 'clamp(260px, 36vw, 480px)',
              width: 'auto',
              objectFit: 'contain',
              zIndex: 10,
              pointerEvents: 'none',
              opacity: 0.90,
            }}
          />
        </div>
        <div className="rule anim" />

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
          className="test-grid"
        >
          {TESTIMONIALS.map(t => <TestBlock key={t.name} {...t} />)}
        </div>
        <div className="rule anim" />

        <div className="meta-row anim">
          <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
          <span className="meta-label meta-label--faint">SRB TST–03</span>
        </div>
        <div className="rule anim" />

      </div>
      <style>{`
        .test-grid > div:nth-child(odd)  { padding-left:  max(var(--gutter), calc((100vw - var(--max)) / 2)); }
        .test-grid > div:nth-child(even) { padding-right: max(var(--gutter), calc((100vw - var(--max)) / 2)); }
        @media (max-width: 640px) {
          .test-grid { grid-template-columns: 1fr !important; }
          .test-grid > div:nth-child(even) { padding-left: max(var(--gutter), calc((100vw - var(--max)) / 2)); }
        }
      `}</style>
    </section>
  )
}
