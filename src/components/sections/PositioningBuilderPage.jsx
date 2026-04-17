import { useState } from 'react'
import { usePage } from '../../context/PageContext.jsx'

// ─── Step definitions ─────────────────────────────────────────────────────────
const STEPS = [
  {
    id: 'brandName',
    number: '01',
    label: 'BRAND NAME',
    question: 'What is your brand called?',
    hint: 'The name people will know you by. Could be your personal name, a studio name, or a product name.',
    placeholder: 'e.g. Luminary Graphix',
    multiline: false,
  },
  {
    id: 'category',
    number: '02',
    label: 'THE CATEGORY',
    question: 'What category do you compete in?',
    hint: 'Be precise — not "marketing agency" but "brand strategy for fitness founders." The narrower the category, the easier it is to own. Vague categories attract vague customers.',
    placeholder: 'e.g. brand strategy for early-stage consumer brands',
    multiline: false,
  },
  {
    id: 'target',
    number: '03',
    label: 'TARGET CUSTOMER',
    question: 'Who specifically is this for?',
    hint: 'Describe the one person who needs this most. Resist the urge to say "everyone" or "small businesses." A focused audience is a stronger position. The right customer should read this and think: that\'s me.',
    placeholder: 'e.g. founders launching their first consumer product brand',
    multiline: false,
  },
  {
    id: 'problem',
    number: '04',
    label: 'THE PROBLEM',
    question: 'What problem does your customer have that isn\'t being solved well?',
    hint: 'Use the language they\'d actually use — not industry language, customer language. The more precisely you name the problem, the more valuable the solution appears. Start with "they..."',
    placeholder: 'e.g. they spend money on ads and content before building the brand foundation those things need to work',
    multiline: true,
  },
  {
    id: 'benefit',
    number: '05',
    label: 'THE BENEFIT',
    question: 'What outcome does your customer walk away with?',
    hint: 'Not what you do — what they get. Focus on the transformation, not the service. The difference between "logo design" and "a visual identity that makes them impossible to ignore" is a positioning problem.',
    placeholder: 'e.g. a brand identity so clear and differentiated that every marketing dollar goes further',
    multiline: true,
  },
  {
    id: 'differentiator',
    number: '06',
    label: 'THE DIFFERENTIATOR',
    question: 'What makes you the only one who delivers it this way?',
    hint: 'Your unfair advantage. Your process, method, background, or perspective that a competitor couldn\'t copy without becoming you. If a competitor could say the same thing, it\'s not a differentiator.',
    placeholder: 'e.g. a strategy-first process where brand story and positioning are locked before a single visual is made',
    multiline: true,
  },
  {
    id: 'proof',
    number: '07',
    label: 'REASON TO BELIEVE',
    question: 'Why should they believe you can actually deliver?',
    hint: 'Track record, methodology, specific results, credentials. A claim specific enough that a competitor couldn\'t make the same one. "10 years experience" is weak. "12 brands built, 3 featured in Forbes within 18 months of launch" is proof.',
    placeholder: 'e.g. 10 consumer brands built from zero with clients generating $2M+ in combined revenue in year one',
    multiline: true,
  },
]

// ─── Statement assembler ──────────────────────────────────────────────────────
function buildOnliness(f) {
  return {
    parts: [
      { text: f.brandName, placeholder: 'YOUR BRAND' },
      { text: ' is the only ', static: true },
      { text: f.category, placeholder: 'CATEGORY' },
      { text: ' that ', static: true },
      { text: f.differentiator, placeholder: 'DIFFERENTIATOR' },
      { text: ' for ', static: true },
      { text: f.target, placeholder: 'TARGET CUSTOMER' },
      { text: '.', static: true },
    ]
  }
}

function buildFull(f) {
  return {
    parts: [
      { text: 'For ', static: true },
      { text: f.target, placeholder: 'TARGET CUSTOMER' },
      { text: ' who ', static: true },
      { text: f.problem, placeholder: 'PROBLEM' },
      { text: ', ', static: true },
      { text: f.brandName, placeholder: 'BRAND NAME' },
      { text: ' is the ', static: true },
      { text: f.category, placeholder: 'CATEGORY' },
      { text: ' that delivers ', static: true },
      { text: f.benefit, placeholder: 'BENEFIT' },
      { text: '. ', static: true },
      { text: f.differentiator, placeholder: 'DIFFERENTIATOR' },
      { text: '. ', static: true },
      { text: f.proof, placeholder: 'REASON TO BELIEVE' },
      { text: '.', static: true },
    ]
  }
}

function assembleText(parts) {
  return parts.map(p => p.static ? p.text : (p.text || `[${p.placeholder}]`)).join('')
}

// ─── StatementPreview ─────────────────────────────────────────────────────────
function StatementPreview({ fields, compact }) {
  const onliness = buildOnliness(fields)
  const full = buildFull(fields)

  const renderParts = (parts) => parts.map((p, i) => {
    if (p.static) return <span key={i}>{p.text}</span>
    if (p.text) return <span key={i} style={{ color: 'var(--ink)', fontWeight: 600 }}>{p.text}</span>
    return <span key={i} style={{ color: 'var(--ink-faint)', fontStyle: 'italic' }}>[{p.placeholder}]</span>
  })

  if (compact) {
    return (
      <div style={{
        border: '1px solid var(--rule)',
        padding: '20px 24px',
        background: 'rgba(200,16,46,0.03)',
        borderLeft: '3px solid #C8102E',
      }}>
        <span className="param-label" style={{ display: 'block', marginBottom: '10px', color: '#C8102E' }}>
          ONLINESS STATEMENT — LIVE PREVIEW
        </span>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          lineHeight: 1.7,
          color: 'var(--ink-dim)',
        }}>
          {renderParts(onliness.parts)}
        </p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ border: '1px solid var(--rule)', padding: '24px', borderLeft: '3px solid #C8102E' }}>
        <span className="param-label" style={{ display: 'block', marginBottom: '12px', color: '#C8102E' }}>
          ONLINESS STATEMENT
        </span>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.75, color: 'var(--ink-dim)' }}>
          {renderParts(onliness.parts)}
        </p>
      </div>
      <div style={{ border: '1px solid var(--rule)', padding: '24px', borderLeft: '3px solid var(--ink)' }}>
        <span className="param-label" style={{ display: 'block', marginBottom: '12px' }}>
          FULL POSITIONING STATEMENT
        </span>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.75, color: 'var(--ink-dim)' }}>
          {renderParts(full.parts)}
        </p>
      </div>
    </div>
  )
}

// ─── CopyButton ───────────────────────────────────────────────────────────────
function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button
      onClick={handleCopy}
      style={{
        fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.2em',
        textTransform: 'uppercase',
        background: copied ? 'var(--ink)' : 'transparent',
        border: `1px solid ${copied ? 'var(--ink)' : 'var(--rule)'}`,
        color: copied ? 'var(--bg)' : 'var(--ink)',
        padding: '8px 16px', cursor: 'pointer', transition: 'all 0.2s',
        whiteSpace: 'nowrap',
      }}
    >
      {copied ? '✓ COPIED' : 'COPY →'}
    </button>
  )
}

// ─── Results Screen ───────────────────────────────────────────────────────────
function ResultsScreen({ fields, onEdit, onReset, onBack }) {
  const onlinessText = assembleText(buildOnliness(fields).parts)
  const fullText = assembleText(buildFull(fields).parts)

  const STRESS_TESTS = [
    { q: 'Could a direct competitor copy this word for word?', good: 'If yes — your differentiator isn\'t specific enough. Go back to step 06 and make it more concrete.' },
    { q: 'Does your target customer immediately recognise themselves?', good: 'If not — your target description is still too broad. The right person should feel seen.' },
    { q: 'Does the problem statement sting a little?', good: 'If it doesn\'t provoke a reaction, it\'s not the real problem. The best positioning makes people say "that\'s exactly it."' },
  ]

  return (
    <main style={{ paddingTop: '60px' }}>
      <div className="wrap">

        <div className="rule" />
        <div className="meta-row">
          <span className="meta-label">FREE TOOLS / T — 003 / RESULTS</span>
          <span className="meta-label meta-label--faint">LUMINARY / EZRA DOM</span>
        </div>
        <div className="rule" />

        <div style={{ padding: '4px 0' }}>
          <span className="display-line" style={{ fontSize: 'clamp(42px, 10vw, 140px)', display: 'block' }}>YOUR</span>
          <span className="display-line" style={{ fontSize: 'clamp(42px, 10vw, 140px)', display: 'block' }}>POSITION.</span>
        </div>
        <div className="rule" />

        <div className="meta-row" style={{ padding: '10px 0' }}>
          <span className="meta-label meta-label--faint">BASED ON YOUR 7 INPUTS — 2 STATEMENT FORMATS</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={onEdit}
              style={{
                fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em',
                textTransform: 'uppercase', background: 'none', border: '1px solid var(--rule)',
                color: 'var(--ink)', padding: '9px 18px', cursor: 'pointer',
              }}
            >
              ← EDIT INPUTS
            </button>
          </div>
        </div>
        <div className="rule" />

        {/* Onliness Statement */}
        <div style={{ padding: '32px 0', borderBottom: '1px solid var(--rule)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div>
              <span className="param-label" style={{ display: 'block', marginBottom: '6px', color: '#C8102E' }}>FORMAT 01 — THE ONLINESS STATEMENT</span>
              <span className="param-label" style={{ display: 'block' }}>NEUMEIER / ZAG FRAMEWORK</span>
            </div>
            <CopyButton text={onlinessText} />
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(20px, 3.5vw, 48px)',
            color: 'var(--ink)',
            letterSpacing: '0.02em',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            {onlinessText}
          </div>
          <p className="body body--sm" style={{ maxWidth: '600px', color: 'var(--ink-dim)' }}>
            The Onliness Statement tests whether your brand truly owns a position. If you can't say "the only," you don't have a position yet — you have a preference. Use this version internally to stress-test every brand decision.
          </p>
        </div>

        {/* Full Statement */}
        <div style={{ padding: '32px 0', borderBottom: '1px solid var(--rule)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div>
              <span className="param-label" style={{ display: 'block', marginBottom: '6px' }}>FORMAT 02 — THE FULL POSITIONING STATEMENT</span>
              <span className="param-label" style={{ display: 'block' }}>GEOFFREY MOORE / CROSSING THE CHASM</span>
            </div>
            <CopyButton text={fullText} />
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(15px, 2vw, 20px)',
            lineHeight: 1.75,
            color: 'var(--ink)',
            maxWidth: '780px',
            marginBottom: '16px',
          }}>
            {fullText}
          </p>
          <p className="body body--sm" style={{ maxWidth: '600px', color: 'var(--ink-dim)' }}>
            Use this version as your brand brief — the document that should inform your visual identity, your messaging, your hiring, and your content strategy. Every brand decision should be able to trace back to this statement.
          </p>
        </div>

        {/* Your inputs breakdown */}
        <div style={{ padding: '32px 0', borderBottom: '1px solid var(--rule)' }}>
          <span className="param-label" style={{ display: 'block', marginBottom: '20px' }}>YOUR INPUTS — BREAKDOWN</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--rule)' }} className="inputs-grid">
            {STEPS.map(step => (
              <div key={step.id} style={{ background: 'var(--bg)', padding: '20px 24px' }}>
                <span className="param-label" style={{ display: 'block', marginBottom: '6px' }}>{step.label}</span>
                <p className="body body--sm" style={{ color: fields[step.id] ? 'var(--ink)' : 'var(--ink-faint)', fontStyle: fields[step.id] ? 'normal' : 'italic' }}>
                  {fields[step.id] || 'Not provided'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stress test */}
        <div style={{ padding: '32px 0', borderBottom: '1px solid var(--rule)' }}>
          <span className="param-label" style={{ display: 'block', marginBottom: '4px' }}>STRESS TEST YOUR POSITION</span>
          <p className="body body--sm" style={{ color: 'var(--ink-dim)', marginBottom: '24px', maxWidth: '520px' }}>
            A positioning statement is only as strong as its weakest answer. Run these three tests before you commit.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
            {STRESS_TESTS.map((t, i) => (
              <div key={i} style={{ background: 'var(--bg)', padding: '20px 24px', display: 'grid', gridTemplateColumns: '24px 1fr', gap: '16px', alignItems: 'start' }}>
                <span className="param-label">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(15px, 2vw, 22px)', color: 'var(--ink)', letterSpacing: '0.02em', lineHeight: 1.2, marginBottom: '8px' }}>
                    {t.q}
                  </div>
                  <p className="body body--sm" style={{ color: 'var(--ink-dim)', fontStyle: 'italic' }}>{t.good}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA block */}
        <div style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          background: 'var(--ink)',
          paddingLeft: 'max(var(--gutter), calc(50vw - var(--max) / 2))',
          paddingRight: 'max(var(--gutter), calc(50vw - var(--max) / 2))',
          paddingTop: '56px',
          paddingBottom: '56px',
        }}>
          <div style={{ height: '1px', background: 'rgba(240,237,232,0.18)', marginBottom: '28px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(240,237,232,0.5)' }}>
              POSITIONING IS JUST THE BEGINNING
            </span>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(240,237,232,0.5)' }}>
              LUMINARY / EZRA DOM
            </span>
          </div>
          <div style={{ marginBottom: '32px' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 7vw, 96px)', color: '#F0EDE8', letterSpacing: '0.01em', lineHeight: 0.92, marginBottom: '0.05em' }}>
              YOUR POSITION
            </span>
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 7vw, 96px)', color: '#C8102E', letterSpacing: '0.01em', lineHeight: 0.92 }}>
              IS YOUR REPUTATION.
            </span>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.72, color: 'rgba(240,237,232,0.72)', maxWidth: '560px', marginBottom: '32px' }}>
            A positioning statement is a strategic document, not a marketing tagline. It should inform your visual identity, your messaging, your content strategy, and every creative decision. If you want help translating your position into a full brand system, that's exactly what I do.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="mailto:itsezradom@gmail.com?subject=Brand%20Strategy%20Inquiry"
              style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 1.8vw, 22px)',
                letterSpacing: '0.04em', color: 'var(--ink)', background: '#F0EDE8',
                border: '2px solid #F0EDE8', padding: '18px 32px 20px',
                lineHeight: 1, textDecoration: 'none', display: 'inline-block', whiteSpace: 'nowrap',
              }}
            >
              LET'S BUILD YOUR BRAND →
            </a>
            <button
              onClick={onReset}
              style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 1.8vw, 22px)',
                letterSpacing: '0.04em', color: '#F0EDE8', background: 'transparent',
                border: '2px solid rgba(240,237,232,0.4)', padding: '18px 32px 20px',
                lineHeight: 1, cursor: 'pointer', whiteSpace: 'nowrap',
              }}
            >
              START OVER →
            </button>
          </div>
          <div style={{ height: '1px', background: 'rgba(240,237,232,0.18)', marginTop: '48px' }} />
        </div>

        <div className="rule" />
        <div className="meta-row" style={{ padding: '8px 0 16px' }}>
          <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
          <span className="meta-label meta-label--faint">SRB POS–003</span>
          <span className="meta-label meta-label--faint">EZRADOM.COM — BRAND STRATEGY — © 2026</span>
        </div>
        <div className="rule" />
        <div style={{ height: '40px' }} />

      </div>

      <style>{`
        @media (max-width: 640px) {
          .inputs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}

// ─── Step Screen ──────────────────────────────────────────────────────────────
function StepScreen({ step, stepIndex, total, value, onChange, onNext, onBack, fields }) {
  const progress = (stepIndex / total) * 100
  const canProceed = value.trim().length > 0

  const handleKey = (e) => {
    if (e.key === 'Enter' && !step.multiline && canProceed) onNext()
  }

  return (
    <main style={{ paddingTop: '60px', minHeight: '100vh' }}>
      <div className="wrap">

        <div className="rule" />
        <div style={{ padding: '14px 0', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span className="param-label" style={{ whiteSpace: 'nowrap' }}>
            STEP {step.number} / {String(total).padStart(2, '0')}
          </span>
          <div style={{ flex: 1, height: '2px', background: 'var(--rule)', position: 'relative' }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, height: '100%',
              width: `${progress}%`, background: '#C8102E',
              transition: 'width 0.4s ease',
            }} />
          </div>
          <span className="param-label" style={{ whiteSpace: 'nowrap' }}>{step.label}</span>
        </div>
        <div className="rule" />

        {/* Question */}
        <div style={{ padding: '28px 0 20px' }}>
          <span className="param-label" style={{ display: 'block', marginBottom: '10px', color: '#C8102E' }}>
            {step.label}
          </span>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 4vw, 52px)',
            color: 'var(--ink)',
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            marginBottom: '16px',
            maxWidth: '800px',
          }}>
            {step.question}
          </div>
          <p className="body body--sm" style={{ color: 'var(--ink-dim)', maxWidth: '640px', lineHeight: 1.7 }}>
            {step.hint}
          </p>
        </div>

        <div className="rule" />

        {/* Input */}
        <div style={{ padding: '24px 0' }}>
          {step.multiline ? (
            <textarea
              autoFocus
              value={value}
              onChange={e => onChange(e.target.value)}
              placeholder={step.placeholder}
              rows={4}
              style={{
                width: '100%',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 2vw, 20px)',
                lineHeight: 1.65,
                padding: '16px 20px',
                background: 'transparent',
                border: '1px solid var(--rule-strong)',
                borderLeft: `3px solid ${value.trim() ? '#C8102E' : 'var(--rule)'}`,
                color: 'var(--ink)',
                outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
              }}
            />
          ) : (
            <input
              autoFocus
              type="text"
              value={value}
              onChange={e => onChange(e.target.value)}
              onKeyDown={handleKey}
              placeholder={step.placeholder}
              style={{
                width: '100%',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(18px, 3vw, 36px)',
                lineHeight: 1.3,
                padding: '16px 20px',
                background: 'transparent',
                border: '1px solid var(--rule-strong)',
                borderLeft: `3px solid ${value.trim() ? '#C8102E' : 'var(--rule)'}`,
                color: 'var(--ink)',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
              }}
            />
          )}
          {!step.multiline && canProceed && (
            <p className="param-label" style={{ marginTop: '8px', color: 'var(--ink-faint)' }}>
              PRESS ENTER OR CLICK NEXT →
            </p>
          )}
        </div>

        {/* Live preview */}
        <StatementPreview fields={fields} compact />

        {/* Nav */}
        <div style={{ padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <button
            onClick={onBack}
            disabled={stepIndex === 0}
            style={{
              fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em',
              textTransform: 'uppercase', background: 'none', border: '1px solid var(--rule)',
              color: stepIndex === 0 ? 'var(--ink-faint)' : 'var(--ink)',
              padding: '12px 20px', cursor: stepIndex === 0 ? 'default' : 'pointer',
              opacity: stepIndex === 0 ? 0.4 : 1,
            }}
          >
            ← BACK
          </button>
          <button
            onClick={onNext}
            disabled={!canProceed}
            style={{
              fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: canProceed ? '#C8102E' : 'transparent',
              border: `1px solid ${canProceed ? '#C8102E' : 'var(--rule)'}`,
              color: canProceed ? '#F0EDE8' : 'var(--ink-faint)',
              padding: '12px 28px', cursor: canProceed ? 'pointer' : 'default',
              transition: 'all 0.2s',
            }}
          >
            {stepIndex < total - 1 ? 'NEXT →' : 'BUILD MY STATEMENT →'}
          </button>
        </div>

        <div className="rule" />
        <div style={{ height: '24px' }} />
      </div>

      <style>{`
        textarea::placeholder, input::placeholder { color: var(--ink-faint); }
      `}</style>
    </main>
  )
}

// ─── Intro Screen ─────────────────────────────────────────────────────────────
function IntroScreen({ onStart, onBack }) {
  return (
    <main style={{ paddingTop: '60px' }}>
      <div className="wrap">

        <div className="rule" />
        <div className="meta-row">
          <span className="meta-label">FREE TOOLS / T — 003</span>
          <span className="meta-label meta-label--faint">LUMINARY / EZRA DOM</span>
          <span className="meta-label meta-label--faint">BC CANADA</span>
        </div>
        <div className="rule" />

        <div style={{ padding: '4px 0' }}>
          <span className="display-line" style={{ fontSize: 'clamp(40px, 10vw, 140px)', display: 'block' }}>POSITIONING</span>
          <span className="display-line" style={{ fontSize: 'clamp(40px, 10vw, 140px)', display: 'block' }}>BUILDER.</span>
        </div>
        <div className="rule" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', padding: '32px 0', alignItems: 'start' }} className="intro-grid">
          <div>
            <p className="body" style={{ marginBottom: '20px' }}>
              Your positioning defines your perception. Your perception defines your reputation. Your reputation is your brand. This tool guides you through 7 focused inputs and assembles them into two professionally formatted positioning statements — ready to use as your brand foundation document.
            </p>
            <p className="body body--sm" style={{ color: 'var(--ink-dim)', marginBottom: '20px' }}>
              Built on Neumeier's Onliness Statement and Geoffrey Moore's positioning framework. Use it internally to align your team, brief your designers, and make every brand decision traceable back to strategy.
            </p>
            <p className="body body--sm" style={{ color: 'var(--ink-dim)' }}>
              There are no wrong answers — only vague ones. The more specific your inputs, the sharper your position. Don't write what sounds good. Write what is actually true.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flexShrink: 0 }}>
            {['7 FOCUSED INPUTS', 'BUILDS IN REAL TIME', '2 STATEMENT FORMATS', 'COPY TO CLIPBOARD', 'FREE, NO SIGNUP'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '4px 0' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C8102E', flexShrink: 0 }} />
                <span className="param-label">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rule" />

        {/* Principle rows */}
        {[
          { num: '01', title: 'Positioning is not a tagline.', body: 'A tagline is a headline. Positioning is the strategic document that every tagline, visual, and campaign must answer to. One comes first.' },
          { num: '02', title: 'If a competitor can say it, it\'s not positioning.', body: 'The test of a good position is exclusivity. "We care about our customers" is not positioning. "The only brand strategy firm that locks story before visuals" is.' },
          { num: '03', title: 'Vague categories attract vague customers.', body: 'The narrower your category, the stronger your position. You cannot own "marketing." You can own "brand strategy for bootstrapped fitness founders."' },
        ].map(p => (
          <div key={p.num} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '24px', padding: '20px 0', borderBottom: '1px solid var(--rule)' }}>
            <span className="param-label" style={{ paddingTop: '3px' }}>{p.num}</span>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2.2vw, 26px)', color: 'var(--ink)', letterSpacing: '0.02em', lineHeight: 1.1, marginBottom: '8px' }}>
                {p.title}
              </div>
              <p className="body body--sm" style={{ color: 'var(--ink-dim)' }}>{p.body}</p>
            </div>
          </div>
        ))}

        <div style={{ padding: '24px 0', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onStart}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.8vw, 36px)',
              letterSpacing: '0.04em', color: '#F0EDE8', background: '#C8102E',
              border: '2px solid #C8102E', padding: '20px 48px 22px',
              lineHeight: 1, cursor: 'pointer', transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            BUILD MY POSITION →
          </button>
          <button
            onClick={onBack}
            style={{
              fontFamily: 'var(--font-label)', fontSize: '10px', textTransform: 'uppercase',
              letterSpacing: '0.22em', color: 'var(--ink)', background: 'transparent',
              border: '1px solid var(--rule)', padding: '12px 20px',
              cursor: 'pointer', transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            ← BACK TO TOOLS
          </button>
        </div>

        <div className="rule" />
        <div className="meta-row" style={{ padding: '8px 0 16px' }}>
          <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
          <span className="meta-label meta-label--faint">SRB POS–003</span>
        </div>
        <div className="rule" />
        <div style={{ height: '40px' }} />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .intro-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
const EMPTY_FIELDS = { brandName: '', category: '', target: '', problem: '', benefit: '', differentiator: '', proof: '' }

export default function PositioningBuilderPage() {
  const { navigate } = usePage()
  const [screen, setScreen] = useState('intro')
  const [currentStep, setCurrentStep] = useState(0)
  const [fields, setFields] = useState({ ...EMPTY_FIELDS })

  const step = STEPS[currentStep]
  const value = fields[step?.id] || ''

  const setFieldValue = (val) => {
    setFields(prev => ({ ...prev, [step.id]: val }))
  }

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(s => s + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setScreen('results')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(s => s - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleEdit = () => {
    setScreen('quiz')
    setCurrentStep(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleReset = () => {
    setFields({ ...EMPTY_FIELDS })
    setCurrentStep(0)
    setScreen('intro')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (screen === 'intro') {
    return <IntroScreen onStart={() => setScreen('quiz')} onBack={() => navigate('tools')} />
  }

  if (screen === 'quiz') {
    return (
      <StepScreen
        step={step}
        stepIndex={currentStep}
        total={STEPS.length}
        value={value}
        onChange={setFieldValue}
        onNext={handleNext}
        onBack={handleBack}
        fields={fields}
      />
    )
  }

  return (
    <ResultsScreen
      fields={fields}
      onEdit={handleEdit}
      onReset={handleReset}
      onBack={() => navigate('tools')}
    />
  )
}
