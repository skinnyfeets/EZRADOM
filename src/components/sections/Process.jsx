import { useRef, useEffect, useState } from 'react'
import { typewriterIn } from '../../utils/typewriter.js'

const STEPS = [
  {
    number: '01',
    title: 'THE DIAGNOSIS',
    body: 'Before anything is designed, the business is pulled apart. Category, competition, founder story, audience psychology. The goal: find the one position the brand can own that no one else can claim. Different is better than better.',
    param: 'PHASE 01',
  },
  {
    number: '02',
    title: 'THE SCRIPT',
    body: 'Brand archetypes. Transformation story. Positioning statement. Campaign naming. This is pre-production — the strategic document everything else is built from. No visuals until this is locked.',
    param: 'PHASE 02',
  },
  {
    number: '03',
    title: 'THE PRODUCTION',
    body: 'Visual identity. Photography direction. Ad creative. Content scripts. Campaign assets. The script becomes the film. Every creative decision traces back to strategy.',
    param: 'PHASE 03',
  },
  {
    number: '04',
    title: 'THE LAUNCH',
    body: 'Campaign execution. Meta ads setup. Micro-influencer outreach. KPI tracking. The brand goes live. The movement begins.',
    param: 'PHASE 04',
  },
]

function StepRow({ step, i, total }) {
  return (
    <div
      className="anim"
      style={{
        borderBottom: i < total - 1 ? '1px solid var(--rule)' : 'none',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        paddingLeft: 'max(var(--gutter), calc(50vw - var(--max) / 2))',
        paddingRight: 'max(var(--gutter), calc(50vw - var(--max) / 2))',
      }}
    >
      <div style={{
        display: 'grid', gridTemplateColumns: '120px 1fr auto',
        gap: '32px', padding: '28px 0', alignItems: 'start',
      }} className="step-row">
        <span className="param-label" style={{ paddingTop: '4px' }}>
          STEP {step.number}
        </span>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,3vw,36px)', color: 'var(--ink)', letterSpacing: '0.02em', lineHeight: 1, marginBottom: '12px' }}>
            {step.title}
          </div>
          <p className="body body--sm" style={{ maxWidth: '540px' }}>
            {step.body}
          </p>
        </div>
        <span className="param-label" style={{ paddingTop: '4px', textAlign: 'right' }}>
          {step.param}
        </span>
      </div>
    </div>
  )
}

function StrategyCTA() {
  const [hovered, setHovered] = useState(false)
  return (
    <div style={{
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      background: 'var(--ink)',
      paddingLeft: 'max(var(--gutter), calc(50vw - var(--max) / 2))',
      paddingRight: 'max(var(--gutter), calc(50vw - var(--max) / 2))',
      paddingTop: '72px',
      paddingBottom: '72px',
    }}>
      {/* Top rule */}
      <div style={{ height: '1px', background: 'rgba(240,237,232,0.2)', marginBottom: '28px' }} />

      {/* Eyebrow */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(240,237,232,0.5)' }}>
          STOP WASTING YOUR MARKETING BUDGET
        </span>
        <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(240,237,232,0.5)' }}>
          LUMINARY / EZRA DOM
        </span>
      </div>

      {/* Headline */}
      <div style={{ marginBottom: '32px' }}>
        <span style={{
          display: 'block',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 10vw, 140px)',
          color: '#F0EDE8',
          letterSpacing: '0.01em',
          lineHeight: 0.9,
          marginBottom: '0.04em',
        }}>
          MARKETING WITHOUT
        </span>
        <span style={{
          display: 'block',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 10vw, 140px)',
          color: '#F0EDE8',
          letterSpacing: '0.01em',
          lineHeight: 0.9,
        }}>
          A BRAND IS JUST NOISE.
        </span>
      </div>

      {/* Body + button row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'end' }} className="cta-inner">
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.72, color: 'rgba(240,237,232,0.72)', maxWidth: '560px' }}>
          Most businesses pour money into ads, content, and campaigns before they've built the foundation those things need to work. Strategy first means every marketing dollar goes further — because people already know what you stand for before they see the ad. Build the brand that sticks in people's minds. Then market it.
        </p>
        <a
          href="mailto:itsezradom@gmail.com?subject=Brand%20Strategy%20Inquiry"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 2.2vw, 28px)',
            letterSpacing: '0.04em',
            color: hovered ? 'var(--ink)' : '#F0EDE8',
            background: hovered ? '#F0EDE8' : 'transparent',
            border: '2px solid rgba(240,237,232,0.7)',
            padding: '20px 36px 22px',
            lineHeight: 1,
            transition: 'all 0.25s ease',
            whiteSpace: 'nowrap',
            display: 'inline-block',
            textDecoration: 'none',
          }}
        >
          LET'S BUILD YOUR BRAND →
        </a>
      </div>

      {/* Bottom rule */}
      <div style={{ height: '1px', background: 'rgba(240,237,232,0.2)', marginTop: '48px' }} />
    </div>
  )
}

export default function Process() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const tl = typewriterIn(ref.current, { trigger: ref.current, start: 'top 84%', once: true })
    return () => tl.kill()
  }, [])

  return (
    <section id="process" ref={ref}>
      <div className="wrap">

        <div className="rule anim" />
        <div className="meta-row anim">
          <span className="meta-label">04 — THE PROCESS</span>
          <span className="meta-label meta-label--faint">4 PHASES</span>
          <span className="meta-label meta-label--faint">STRATEGY FIRST</span>
        </div>
        <div className="rule anim" />

        <div style={{ padding: '4px 0' }}>
          <span className="display-line anim" style={{ fontSize: 'clamp(56px, 13vw, 190px)' }}>STORY FIRST.</span>
          <span className="display-line anim" style={{ fontSize: 'clamp(56px, 13vw, 190px)' }}>VISUALS SECOND.</span>
        </div>
        <div className="rule anim" />

        <div style={{ padding: '24px 0', maxWidth: '720px' }} className="anim">
          <p className="body">
            Most designers ask: what looks good? That's the wrong question. The right question is: what does the audience actually perceive? Strategy starts with the human mind, psychology, archetypes, narrative, and the visuals follow. A brand is not decoration. It is the space between what a business does and what its audience believes about it. Branding is the discipline of closing that gap.
          </p>
        </div>
        <div className="rule anim" />

        {STEPS.map((step, i) => (
          <StepRow key={step.number} step={step} i={i} total={STEPS.length} />
        ))}

        <div className="rule anim" />

        <div style={{ padding: '20px 0' }}>
          <p className="anim" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.8vw, 36px)', color: 'var(--ink-dim)', letterSpacing: '0.02em', lineHeight: 1.2 }}>
            YOUR BRAND IS YOUR REPUTATION.<br />BRANDING IS REPUTATION MANAGEMENT.
          </p>
        </div>
        <div className="rule anim" />

        <div className="meta-row anim">
          <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
          <span className="meta-label meta-label--faint">SRB IJA–04</span>
        </div>
        <div className="rule anim" />

      </div>

      <StrategyCTA />

      <style>{`
        @media (max-width: 640px) {
          .step-row { grid-template-columns: 1fr !important; gap: 8px !important; }
          .cta-inner { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  )
}
