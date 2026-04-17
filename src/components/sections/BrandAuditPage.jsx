import { useState } from 'react'
import { usePage } from '../../context/PageContext.jsx'

// ─── Checklist data ───────────────────────────────────────────────────────────
// priority: true = surfaces as a fix if answered NO
const CATEGORIES = [
  {
    id: 'positioning',
    label: 'POSITIONING',
    number: '01',
    intro: 'Your position is the single most important strategic decision your brand will ever make. It defines what you are, who you\'re for, and why anyone should choose you over everything else.',
    items: [
      {
        id: 'p1',
        text: 'You can state your brand\'s differentiated position in one sentence — without using the words "quality," "passion," or "solutions."',
        priority: true,
        fix: 'Write a one-sentence position: "[Brand] is the only [category] that [differentiator] for [audience]." If you can\'t complete it cleanly, your position isn\'t defined yet — it\'s just an intention.',
      },
      {
        id: 'p2',
        text: 'Your category is narrow enough that you could plausibly be the #1 choice within it.',
        priority: true,
        fix: 'Narrow your category. "Marketing agency" is too broad to own. "Brand strategy for bootstrapped consumer brands" is ownable. The narrower the category, the faster you become the obvious choice.',
      },
      {
        id: 'p3',
        text: 'Your position is meaningfully different from your top 3 competitors — they couldn\'t copy it word for word.',
        priority: true,
        fix: 'Pull up your top 3 competitors\' websites. If your messaging sounds like a variation of the same theme, you don\'t have a position — you have a preference. Find the one thing only you can claim.',
      },
      {
        id: 'p4',
        text: 'Your positioning statement has been written down and shared with everyone who creates content or materials for your brand.',
        priority: false,
        fix: 'Write a positioning statement and share it with every designer, writer, and collaborator who touches your brand. If it only exists in your head, it doesn\'t exist.',
      },
    ],
  },
  {
    id: 'audience',
    label: 'TARGET AUDIENCE',
    number: '02',
    intro: 'A brand that speaks to everyone speaks to no one. The more precisely you define who you\'re for, the more powerfully your brand resonates with them — and the more clearly it repels everyone else.',
    items: [
      {
        id: 'a1',
        text: 'You can describe your ideal customer in a single paragraph — including their #1 frustration before they find you.',
        priority: true,
        fix: 'Write a one-paragraph customer profile. Name them, give them a job, describe the problem they have before they find you. The more specific, the more useful. "Small business owner" is not specific.',
      },
      {
        id: 'a2',
        text: 'Your target audience is specific enough that some people would self-select out. Not everyone wants what you offer.',
        priority: true,
        fix: 'If your answer to "who is this for?" is "anyone who wants to grow their business" — you don\'t have a target audience. Narrow until some people are clearly not your customer.',
      },
      {
        id: 'a3',
        text: 'Every major brand decision is filtered through the question: "would this resonate with my specific customer?"',
        priority: false,
        fix: 'Before any content, design, or campaign decision, ask: "does this speak to [your specific customer]?" Make it a filter, not an afterthought. Brand drift happens one compromise at a time.',
      },
    ],
  },
  {
    id: 'visual',
    label: 'VISUAL IDENTITY',
    number: '03',
    intro: 'Visual identity is not decoration. It is the first impression before a word is read — and it either confirms or contradicts everything your messaging tries to communicate.',
    items: [
      {
        id: 'v1',
        text: 'Your logo is legible, works in black and white, and holds up at small sizes — favicon, business card, embroidery.',
        priority: true,
        fix: 'Test your logo at 1cm wide, on a black background, and as a browser favicon. If it fails any of these, it needs to be rebuilt from strategy, not just redesigned. A logo that only works big isn\'t a logo — it\'s a graphic.',
      },
      {
        id: 'v2',
        text: 'You use a defined colour palette of no more than 3 primary colours — consistently, across every touchpoint.',
        priority: true,
        fix: 'Open your website, your last 9 Instagram posts, and any printed materials side by side. If the colours don\'t match, document your HEX codes today and share them with everyone who creates assets.',
      },
      {
        id: 'v3',
        text: 'You use a maximum of 2 font families — applied consistently across website, social, and print.',
        priority: false,
        fix: 'Choose one display font and one body font. Apply them everywhere. Inconsistent typography is one of the fastest ways a brand looks unprofessional — without anyone being able to say exactly why.',
      },
      {
        id: 'v4',
        text: 'Your visual identity looks noticeably different from your top 3 competitors. A side-by-side comparison reveals a distinct visual voice.',
        priority: true,
        fix: 'Screenshot your site and your top 3 competitors and put them side by side. If they look like variations of the same brand, your visual identity is expressing a category convention — not a brand position.',
      },
    ],
  },
  {
    id: 'voice',
    label: 'VOICE & MESSAGING',
    number: '04',
    intro: 'How your brand speaks is as important as what it says. Voice is personality made consistent. Messaging is strategy made legible. Both require intentional decisions — not default habits.',
    items: [
      {
        id: 'm1',
        text: 'You have a defined brand voice — at minimum, 3–5 adjectives that describe how your brand writes and speaks.',
        priority: true,
        fix: 'Choose 3 contrasting pairs: e.g. "Direct, not harsh. Expert, not academic. Warm, not casual." Share them with anyone who writes for your brand. This is the minimum viable voice guide.',
      },
      {
        id: 'm2',
        text: 'Your website headline communicates what you do, who it\'s for, and why it\'s different — without vague words like "innovative," "trusted," or "world-class."',
        priority: true,
        fix: 'Rewrite your headline to answer three questions: what do you do, who is it for, what\'s the specific outcome? Cut every adjective a competitor could also claim. If it could belong to anyone, it belongs to no one.',
      },
      {
        id: 'm3',
        text: 'Your About page tells a brand story — not just a list of services, credentials, or years of experience.',
        priority: false,
        fix: 'Reframe your About page around a transformation: where were you, what changed, why does that make you the right choice for your specific customer? Story is more credible than credentials.',
      },
      {
        id: 'm4',
        text: 'A stranger could read your website copy and immediately know whether they are — or are not — your ideal customer.',
        priority: true,
        fix: 'The goal of your copy is not to appeal to everyone. It\'s to make the right person feel immediately seen. If your copy doesn\'t gently push people away, it\'s not pulling the right people in strongly enough.',
      },
    ],
  },
  {
    id: 'consistency',
    label: 'CONSISTENCY',
    number: '05',
    intro: 'Brand consistency is not a design problem — it\'s a trust problem. Every inconsistency is a small leak in credibility. Most audiences can\'t name what feels off. They just feel it.',
    items: [
      {
        id: 'c1',
        text: 'Your brand looks and sounds the same across your website, social profiles, and any physical or printed materials.',
        priority: true,
        fix: 'Do a consistency audit: open your website, Instagram, and any recent print materials simultaneously. Count the inconsistencies. Each one is a trust leak. Fix them in order of visibility.',
      },
      {
        id: 'c2',
        text: 'You have a brand guide — even a simple one-pager — that documents your colours, fonts, logo rules, and voice.',
        priority: false,
        fix: 'Create a one-page brand reference: HEX codes, font names, logo dos and don\'ts, and 3–5 voice adjectives. Share it with every collaborator. This is the minimum viable brand system.',
      },
      {
        id: 'c3',
        text: 'A new contractor or collaborator could maintain your brand identity without asking you for direction.',
        priority: true,
        fix: 'If your brand can\'t survive without you approving every asset, it\'s not a brand — it\'s personal taste. Document your standards and test them by handing a collaborator your guide and seeing what they produce.',
      },
    ],
  },
  {
    id: 'proof',
    label: 'PERCEPTION & PROOF',
    number: '06',
    intro: 'Perception is the gap between what you believe your brand communicates and what your audience actually receives. The only way to close it is to ask.',
    items: [
      {
        id: 'pr1',
        text: 'You have at least 3 testimonials or case studies describing the specific transformation your customers experienced — not just "great to work with."',
        priority: true,
        fix: 'Contact your 3 best clients. Ask them: "Before we worked together, what was the problem? After, what changed?" Their answer is more valuable than any generic testimonial about professionalism.',
      },
      {
        id: 'pr2',
        text: 'You know how your customers describe your brand to other people — because you\'ve asked them directly.',
        priority: true,
        fix: 'Ask your best 3 customers: "If you were telling a friend about us, how would you describe what we do?" Their words are your most accurate positioning data. Compare their answer to how you describe yourself.',
      },
    ],
  },
]

const TOTAL_ITEMS = CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0)

function getGrade(score, total) {
  const pct = score / total
  if (pct >= 0.9) return { label: 'EXCEPTIONAL', color: '#C8102E', desc: 'This is a high-performing brand identity. The gaps you have are refinements, not repairs. Protect the position you\'ve built and consider whether it\'s ambitious enough for where you\'re going.' }
  if (pct >= 0.75) return { label: 'ADVANCED', color: 'var(--ink)', desc: 'Strong foundation with a few clear gaps. Your weak areas are identifiable and fixable — prioritise them in order of audience visibility.' }
  if (pct >= 0.55) return { label: 'DEVELOPING', color: 'var(--ink)', desc: 'Solid effort with significant room to sharpen. You have pieces of a brand — now they need to work together as a system. Start with positioning, then consistency.' }
  if (pct >= 0.35) return { label: 'WEAK', color: 'var(--ink)', desc: 'Real gaps exist across core areas. The brand is present but not coherent. Fix your positioning and target audience definition before spending more on marketing.' }
  return { label: 'CRITICAL', color: 'var(--ink)', desc: 'The brand needs a foundation rebuild. The risk is continuing to market before the foundation is in place — every dollar spent compounds the misalignment. Start from strategy.' }
}

// ─── Results Screen ───────────────────────────────────────────────────────────
function ResultsScreen({ answers, onRetake, onBack }) {
  const score = Object.values(answers).filter(Boolean).length
  const grade = getGrade(score, TOTAL_ITEMS)

  const categoryScores = CATEGORIES.map(cat => ({
    ...cat,
    yes: cat.items.filter(item => answers[item.id] === true).length,
    total: cat.items.length,
  }))

  const priorityFixes = CATEGORIES.flatMap(cat =>
    cat.items.filter(item => item.priority && answers[item.id] === false)
  ).slice(0, 5)

  return (
    <main style={{ paddingTop: '60px' }}>
      <div className="wrap">

        <div className="rule" />
        <div className="meta-row">
          <span className="meta-label">FREE TOOLS / T — 004 / RESULTS</span>
          <span className="meta-label meta-label--faint">LUMINARY / EZRA DOM</span>
        </div>
        <div className="rule" />

        <div style={{ padding: '4px 0' }}>
          <span className="display-line" style={{ fontSize: 'clamp(42px, 10vw, 140px)', display: 'block' }}>YOUR AUDIT</span>
          <span className="display-line" style={{ fontSize: 'clamp(42px, 10vw, 140px)', display: 'block' }}>RESULTS.</span>
        </div>
        <div className="rule" />

        <div className="meta-row" style={{ padding: '10px 0' }}>
          <span className="meta-label meta-label--faint">{score} OF {TOTAL_ITEMS} CHECKPOINTS PASSED</span>
          <button
            onClick={onRetake}
            style={{
              fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em',
              textTransform: 'uppercase', background: 'none', border: '1px solid var(--rule)',
              color: 'var(--ink)', padding: '9px 18px', cursor: 'pointer',
            }}
          >
            RETAKE AUDIT
          </button>
        </div>
        <div className="rule" />

        {/* Score + Grade */}
        <div style={{ padding: '32px 0', borderBottom: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '48px', alignItems: 'center' }} className="score-top">
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(64px, 12vw, 160px)',
              color: grade.color,
              letterSpacing: '0.01em',
              lineHeight: 1,
            }}>
              {score}
            </div>
            <div style={{ fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em', color: 'var(--ink-dim)', textTransform: 'uppercase', marginTop: '4px' }}>
              OUT OF {TOTAL_ITEMS}
            </div>
          </div>
          <div>
            <span className="param-label" style={{ display: 'block', marginBottom: '8px' }}>BRAND HEALTH GRADE</span>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 5vw, 64px)',
              color: grade.color,
              letterSpacing: '0.04em',
              lineHeight: 1,
              marginBottom: '16px',
            }}>
              {grade.label}
            </div>
            <p className="body body--sm" style={{ maxWidth: '520px', lineHeight: 1.7 }}>
              {grade.desc}
            </p>
          </div>
        </div>

        {/* Category breakdown */}
        <div style={{ padding: '32px 0', borderBottom: '1px solid var(--rule)' }}>
          <span className="param-label" style={{ display: 'block', marginBottom: '20px' }}>SCORE BY CATEGORY</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {categoryScores.map(cat => {
              const pct = cat.yes / cat.total
              return (
                <div key={cat.id} style={{ display: 'grid', gridTemplateColumns: '200px 1fr 48px', gap: '16px', alignItems: 'center' }} className="cat-row">
                  <span className="param-label">{cat.label}</span>
                  <div style={{ height: '4px', background: 'var(--rule)', position: 'relative' }}>
                    <div style={{
                      position: 'absolute', top: 0, left: 0, height: '100%',
                      width: `${pct * 100}%`,
                      background: pct >= 0.75 ? '#C8102E' : pct >= 0.5 ? 'var(--ink)' : 'var(--ink-dim)',
                      transition: 'width 0.6s ease',
                    }} />
                  </div>
                  <span className="param-label" style={{ textAlign: 'right' }}>
                    {cat.yes}/{cat.total}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Detailed breakdown */}
        <div style={{ padding: '32px 0', borderBottom: '1px solid var(--rule)' }}>
          <span className="param-label" style={{ display: 'block', marginBottom: '20px' }}>FULL BREAKDOWN</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
            {CATEGORIES.map(cat => (
              cat.items.map((item, i) => {
                const passed = answers[item.id] === true
                return (
                  <div key={item.id} style={{
                    background: 'var(--bg)',
                    padding: '14px 20px',
                    display: 'grid',
                    gridTemplateColumns: '20px 1fr 48px',
                    gap: '16px',
                    alignItems: 'start',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-label)', fontSize: '10px',
                      letterSpacing: '0.1em', color: passed ? '#C8102E' : 'var(--ink-faint)',
                      paddingTop: '2px', fontWeight: 700,
                    }}>
                      {passed ? '✓' : '✗'}
                    </span>
                    <div>
                      {i === 0 && (
                        <span className="param-label" style={{ display: 'block', marginBottom: '6px', color: 'var(--ink-dim)' }}>
                          {cat.label}
                        </span>
                      )}
                      <p className="body body--sm" style={{ color: passed ? 'var(--ink)' : 'var(--ink-dim)' }}>
                        {item.text}
                      </p>
                    </div>
                    <span className="param-label" style={{ textAlign: 'right', color: passed ? '#C8102E' : 'var(--ink-faint)', paddingTop: '2px' }}>
                      {passed ? 'YES' : 'NO'}
                    </span>
                  </div>
                )
              })
            ))}
          </div>
        </div>

        {/* Priority fixes */}
        {priorityFixes.length > 0 && (
          <div style={{ padding: '32px 0', borderBottom: '1px solid var(--rule)' }}>
            <span className="param-label" style={{ display: 'block', marginBottom: '6px', color: '#C8102E' }}>
              PRIORITY FIXES
            </span>
            <p className="body body--sm" style={{ color: 'var(--ink-dim)', marginBottom: '24px', maxWidth: '520px' }}>
              These are the highest-impact gaps in your brand — the ones where a fix will create the most visible improvement. Address them in order.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
              {priorityFixes.map((item, i) => (
                <div key={item.id} style={{ background: 'var(--bg)', padding: '20px 24px', display: 'grid', gridTemplateColumns: '28px 1fr', gap: '16px', alignItems: 'start' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.5vw, 28px)',
                    color: '#C8102E', letterSpacing: '0.02em', lineHeight: 1,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="body body--sm" style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--ink)', lineHeight: 1.5 }}>
                      {item.text}
                    </p>
                    <p className="body body--sm" style={{ color: 'var(--ink-dim)', fontStyle: 'italic', lineHeight: 1.7 }}>
                      FIX: {item.fix}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
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
              THE AUDIT IS THE DIAGNOSIS. NOW BUILD THE BRAND.
            </span>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(240,237,232,0.5)' }}>
              LUMINARY / EZRA DOM
            </span>
          </div>
          <div style={{ marginBottom: '32px' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 7vw, 96px)', color: '#F0EDE8', letterSpacing: '0.01em', lineHeight: 0.92, marginBottom: '0.05em' }}>
              THE GAPS ARE CLEAR.
            </span>
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 7vw, 96px)', color: '#C8102E', letterSpacing: '0.01em', lineHeight: 0.92 }}>
              NOW CLOSE THEM.
            </span>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.72, color: 'rgba(240,237,232,0.72)', maxWidth: '560px', marginBottom: '32px' }}>
            A brand audit tells you what's broken. A brand strategy tells you how to fix it — and in what order. If you want to close these gaps with a professional system built on strategy before visuals, that's exactly what I do.
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
              onClick={onRetake}
              style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 1.8vw, 22px)',
                letterSpacing: '0.04em', color: '#F0EDE8', background: 'transparent',
                border: '2px solid rgba(240,237,232,0.4)', padding: '18px 32px 20px',
                lineHeight: 1, cursor: 'pointer', whiteSpace: 'nowrap',
              }}
            >
              RETAKE AUDIT →
            </button>
          </div>
          <div style={{ height: '1px', background: 'rgba(240,237,232,0.18)', marginTop: '48px' }} />
        </div>

        <div className="rule" />
        <div className="meta-row" style={{ padding: '8px 0 16px' }}>
          <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
          <span className="meta-label meta-label--faint">SRB AUD–004</span>
          <span className="meta-label meta-label--faint">EZRADOM.COM — BRAND STRATEGY — © 2026</span>
        </div>
        <div className="rule" />
        <div style={{ height: '40px' }} />

      </div>

      <style>{`
        @media (max-width: 640px) {
          .score-top { grid-template-columns: 1fr !important; gap: 24px !important; }
          .cat-row { grid-template-columns: 1fr 1fr !important; }
          .cat-row > :nth-child(2) { display: none; }
        }
      `}</style>
    </main>
  )
}

// ─── Category Screen ──────────────────────────────────────────────────────────
function CategoryScreen({ category, catIndex, total, answers, onAnswer, onNext, onBack }) {
  const allAnswered = category.items.every(item => answers[item.id] !== undefined)
  const catScore = category.items.filter(item => answers[item.id] === true).length

  return (
    <main style={{ paddingTop: '60px', minHeight: '100vh' }}>
      <div className="wrap">

        <div className="rule" />
        <div style={{ padding: '14px 0', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span className="param-label" style={{ whiteSpace: 'nowrap' }}>
            SECTION {category.number} / {String(total).padStart(2, '0')}
          </span>
          <div style={{ flex: 1, height: '2px', background: 'var(--rule)', position: 'relative' }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, height: '100%',
              width: `${(catIndex / total) * 100}%`,
              background: '#C8102E', transition: 'width 0.4s ease',
            }} />
          </div>
          <span className="param-label" style={{ whiteSpace: 'nowrap' }}>{category.label}</span>
        </div>
        <div className="rule" />

        {/* Category header */}
        <div style={{ padding: '28px 0 20px' }}>
          <span className="param-label" style={{ display: 'block', marginBottom: '8px', color: '#C8102E' }}>
            {category.label}
          </span>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 4.5vw, 60px)',
            color: 'var(--ink)',
            letterSpacing: '0.02em',
            lineHeight: 1.05,
            marginBottom: '16px',
            maxWidth: '800px',
          }}>
            {category.intro}
          </div>
        </div>
        <div className="rule" />

        {/* Items */}
        <div style={{ padding: '4px 0', display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
          {category.items.map((item, i) => {
            const val = answers[item.id]
            const isYes = val === true
            const isNo = val === false

            return (
              <div
                key={item.id}
                style={{
                  background: 'var(--bg)',
                  padding: '20px 24px',
                  display: 'grid',
                  gridTemplateColumns: '28px 1fr auto',
                  gap: '20px',
                  alignItems: 'start',
                  borderLeft: `3px solid ${isYes ? '#C8102E' : isNo ? 'var(--rule)' : 'transparent'}`,
                  transition: 'border-color 0.2s',
                }}
              >
                <span className="param-label" style={{ paddingTop: '3px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="body body--sm" style={{ lineHeight: 1.7, paddingTop: '2px', color: (isNo) ? 'var(--ink-dim)' : 'var(--ink)' }}>
                  {item.text}
                </p>
                <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                  <button
                    onClick={() => onAnswer(item.id, true)}
                    style={{
                      fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.18em',
                      textTransform: 'uppercase', padding: '8px 14px',
                      background: isYes ? '#C8102E' : 'transparent',
                      border: `1px solid ${isYes ? '#C8102E' : 'var(--rule)'}`,
                      color: isYes ? '#F0EDE8' : 'var(--ink)',
                      cursor: 'pointer', transition: 'all 0.15s',
                    }}
                  >
                    YES
                  </button>
                  <button
                    onClick={() => onAnswer(item.id, false)}
                    style={{
                      fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.18em',
                      textTransform: 'uppercase', padding: '8px 14px',
                      background: isNo ? 'var(--ink)' : 'transparent',
                      border: `1px solid ${isNo ? 'var(--ink)' : 'var(--rule)'}`,
                      color: isNo ? 'var(--bg)' : 'var(--ink)',
                      cursor: 'pointer', transition: 'all 0.15s',
                    }}
                  >
                    NO
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Section score + nav */}
        <div style={{ padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', align: 'center', gap: '16px' }}>
            <button
              onClick={onBack}
              disabled={catIndex === 0}
              style={{
                fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em',
                textTransform: 'uppercase', background: 'none', border: '1px solid var(--rule)',
                color: catIndex === 0 ? 'var(--ink-faint)' : 'var(--ink)',
                padding: '12px 20px', cursor: catIndex === 0 ? 'default' : 'pointer',
                opacity: catIndex === 0 ? 0.4 : 1,
              }}
            >
              ← BACK
            </button>
            {allAnswered && (
              <span className="param-label" style={{ alignSelf: 'center' }}>
                {catScore}/{category.items.length} IN THIS SECTION
              </span>
            )}
          </div>
          <button
            onClick={onNext}
            disabled={!allAnswered}
            style={{
              fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: allAnswered ? '#C8102E' : 'transparent',
              border: `1px solid ${allAnswered ? '#C8102E' : 'var(--rule)'}`,
              color: allAnswered ? '#F0EDE8' : 'var(--ink-faint)',
              padding: '12px 28px', cursor: allAnswered ? 'pointer' : 'default',
              transition: 'all 0.2s',
            }}
          >
            {!allAnswered
              ? `ANSWER ALL ${category.items.length} TO CONTINUE`
              : catIndex < total - 1
                ? 'NEXT SECTION →'
                : 'SEE MY RESULTS →'
            }
          </button>
        </div>

        <div className="rule" />
        <div style={{ height: '24px' }} />
      </div>
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
          <span className="meta-label">FREE TOOLS / T — 004</span>
          <span className="meta-label meta-label--faint">LUMINARY / EZRA DOM</span>
          <span className="meta-label meta-label--faint">BC CANADA</span>
        </div>
        <div className="rule" />

        <div style={{ padding: '4px 0' }}>
          <span className="display-line" style={{ fontSize: 'clamp(52px, 13vw, 180px)', display: 'block' }}>BRAND</span>
          <span className="display-line" style={{ fontSize: 'clamp(52px, 13vw, 180px)', display: 'block' }}>AUDIT.</span>
        </div>
        <div className="rule" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', padding: '32px 0', alignItems: 'start' }} className="intro-grid">
          <div>
            <p className="body" style={{ marginBottom: '20px' }}>
              20 checkpoints across 6 categories. This audit is designed to find the gaps between what you believe your brand communicates and what your audience actually experiences. The score matters less than the pattern — where you consistently answer NO is where your brand is leaking trust.
            </p>
            <p className="body body--sm" style={{ color: 'var(--ink-dim)', marginBottom: '16px' }}>
              Answer honestly — not how you want your brand to perform, but how it actually performs right now. A false YES is just a deferred problem.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flexShrink: 0 }}>
            {['20 CHECKPOINTS', '6 CATEGORIES', 'YES / NO FORMAT', 'PRIORITY FIX LIST', 'FREE, NO SIGNUP'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '4px 0' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C8102E', flexShrink: 0 }} />
                <span className="param-label">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rule" />

        {/* Category overview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--rule)', marginBottom: '1px' }} className="cat-preview-grid">
          {CATEGORIES.map(cat => (
            <div key={cat.id} style={{ background: 'var(--bg)', padding: '18px 20px' }}>
              <span className="param-label" style={{ display: 'block', marginBottom: '4px', color: '#C8102E' }}>{cat.number}</span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 1.8vw, 20px)', color: 'var(--ink)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '4px' }}>
                {cat.label}
              </div>
              <span className="param-label">{cat.items.length} CHECKPOINTS</span>
            </div>
          ))}
        </div>

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
            START THE AUDIT →
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
          <span className="meta-label meta-label--faint">SRB AUD–004</span>
        </div>
        <div className="rule" />
        <div style={{ height: '40px' }} />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .intro-grid { grid-template-columns: 1fr !important; }
          .cat-preview-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function BrandAuditPage() {
  const { navigate } = usePage()
  const [screen, setScreen] = useState('intro')
  const [catIndex, setCatIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const handleAnswer = (id, val) => {
    setAnswers(prev => ({ ...prev, [id]: val }))
  }

  const handleNext = () => {
    if (catIndex < CATEGORIES.length - 1) {
      setCatIndex(i => i + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setScreen('results')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    if (catIndex > 0) {
      setCatIndex(i => i - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleRetake = () => {
    setAnswers({})
    setCatIndex(0)
    setScreen('intro')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (screen === 'intro') {
    return <IntroScreen onStart={() => setScreen('audit')} onBack={() => navigate('tools')} />
  }

  if (screen === 'audit') {
    return (
      <CategoryScreen
        category={CATEGORIES[catIndex]}
        catIndex={catIndex}
        total={CATEGORIES.length}
        answers={answers}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onBack={handleBack}
      />
    )
  }

  return <ResultsScreen answers={answers} onRetake={handleRetake} onBack={() => navigate('tools')} />
}
