import { useRef, useEffect } from 'react'
import { typewriterIn } from '../../utils/typewriter.js'
import { usePage } from '../../context/PageContext.jsx'
import ezraAbout from '../../assets/images/ezra-about.jpg'

const CREDENTIALS = [
  { label: 'STUDIO',   value: 'LUMINARY / BRAND CAMPAIGN STUDIO, FOUNDER' },
  { label: 'SCOPE',    value: '10+ BRANDS BUILT / 20+ LOGO + DESIGN PROJECTS' },
  { label: 'PROJECT 01', value: 'SWEATCULTURE / BRAND STRATEGY + IDENTITY + ADVISORY' },
  { label: 'PROJECT 02', value: 'TRAILSIDE LEMONADE / BRAND STRATEGY + IDENTITY' },
  { label: 'ACADEMIC', value: 'IED MASTERS IN BRAND STRATEGY + MANAGEMENT / ACCEPTED NOV 2026' },
  { label: 'SOCIAL',   value: 'INSTAGRAM: @ITSEZRADOM_' },
]

const BODY = [
  "I'm Ezra Dom. I'm 19 years old, based in BC, Canada, and I'm the founder of Luminary, a brand campaign studio built for founder-led businesses who want to be known for what they actually stand for.",
  "I started in graphic design in 2022 out of curiosity, and it quickly became discipline. I studied typography, hierarchy, color, composition, and psychology obsessively. Design taught me how people see, feel, and decide. But I hit a wall. A client told me to just make it look good, don't worry about the strategy. That was the moment I realized I didn't want to be a pixel pusher for the rest of my career.",
  "I was also watching AI get genuinely good at the visual stuff. I had to be honest with myself. If I stayed focused only on execution, I was building on a foundation that was getting commoditized. I needed to go deeper, into the thinking behind the thinking. Into why brands actually work. Into the psychology of identity, story, and decision-making.",
  "That's what pushed me into brand strategy. Into Marty Neumeier's positioning frameworks, Jungian archetypes, and the fundamental idea that great brands don't sell products. They broker identity. They help people become someone. I've since built 10+ brands and worked on 20+ logo and design projects, and I'm building Luminary to bring that level of thinking to more founders who deserve it.",
  "I want to be the kind of person people trust and listen to, not because of my visual eye, but because of my judgement. That's the difference between a designer and a strategist.",
]

export default function About() {
  const ref = useRef(null)
  const { navigate } = usePage()
  useEffect(() => {
    if (!ref.current) return
    const tl = typewriterIn(ref.current, { trigger: ref.current, start: 'top 84%', once: true })
    return () => tl.kill()
  }, [])

  return (
    <section id="about" ref={ref}>
      <div className="wrap">

        <div className="rule anim" />
        <div className="meta-row anim">
          <span className="meta-label">05 — ABOUT</span>
          <span className="meta-label meta-label--faint">EZRA DOM / LUMINARY</span>
          <span className="meta-label meta-label--faint">BC CANADA</span>
        </div>
        <div className="rule anim" />

        <div style={{ padding: '4px 0' }}>
          <span className="display-line anim" style={{ fontSize: 'clamp(60px, 14vw, 200px)' }}>I THINK IN</span>
          <span className="display-line anim" style={{ fontSize: 'clamp(60px, 14vw, 200px)' }}>STORIES.</span>
        </div>
        <div className="rule anim" />
        <div className="meta-row anim" style={{ padding: '10px 0' }}>
          <span className="meta-label meta-label--faint">BRAND STRATEGIST — BRANDING EXPERT — FOUNDER, LUMINARY</span>
          <button
            onClick={() => navigate('about-page')}
            style={{
              fontFamily: 'var(--font-label)', fontSize: '10px', textTransform: 'uppercase',
              letterSpacing: '0.22em', color: 'var(--bg)', background: 'var(--ink)',
              border: 'none', padding: '12px 24px', cursor: 'pointer', transition: 'opacity 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            FULL STORY →
          </button>
        </div>
        <div className="rule anim" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '0' }} className="about-grid">
          {/* Left */}
          <div className="anim" style={{ padding: '32px 40px 32px 0', borderRight: '1px solid var(--rule)' }}>
            <div style={{ marginBottom: '20px' }}>
              <span className="meta-label">DESIGN BUILD</span>
            </div>
            <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '20px' }} />
            {BODY.map((para, i) => (
              <p key={i} className="body" style={{ marginBottom: '18px' }}>{para}</p>
            ))}
          </div>

          {/* Right */}
          <div style={{ padding: '32px 0 32px 32px' }}>
            <div style={{ height: '400px', overflow: 'hidden' }}>
              <img
                src={ezraAbout}
                alt="Ezra Dom, brand strategist and branding expert, founder of Luminary Graphix"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '50% 47%',
                  transform: 'scale(1)',
                  transformOrigin: '50% 47%',
                  display: 'block',
                }}
              />
            </div>
            <div style={{ marginTop: '24px' }}>
              {CREDENTIALS.map((c, i) => (
                <div key={i} style={{ padding: '10px 0', borderBottom: i < CREDENTIALS.length - 1 ? '1px solid var(--rule)' : 'none', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '12px', alignItems: 'baseline' }}>
                  <span className="param-label">{c.label}</span>
                  <span className="param-value" style={{ fontSize: '9px', lineHeight: 1.5 }}>{c.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rule anim" />

        <div className="meta-row anim">
          <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
          <span className="meta-label meta-label--faint">SRB IJA–05</span>
        </div>
        <div className="rule anim" />

      </div>
      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:first-child { padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid var(--rule); padding-bottom: 32px; }
          .about-grid > div:last-child { padding-left: 0 !important; padding-right: 0 !important; padding-top: 32px; }
        }
      `}</style>
    </section>
  )
}
