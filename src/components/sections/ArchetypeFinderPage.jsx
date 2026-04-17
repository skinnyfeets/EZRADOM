import { useState } from 'react'
import { usePage } from '../../context/PageContext.jsx'
import { ARCHETYPES } from '../../data/archetypes.js'

// ─── Quiz Data ────────────────────────────────────────────────────────────────
// Each option: { label, scores: [[id, pts], ...] }
const QUESTIONS = [
  {
    id: 1,
    question: 'What is the core promise your brand makes?',
    subtext: 'If your customer could describe your brand in a single sentence, what would it be?',
    options: [
      { label: 'I help people push past their limits and win.', scores: [['hero',3],['warrior',2],['champion',2],['coach',1]] },
      { label: 'I take people somewhere new — discovery, freedom, the unknown.', scores: [['explorer',3],['adventurer',2],['pioneer',2],['wanderer',1]] },
      { label: 'I create things of beauty and meaning that didn\'t exist before.', scores: [['creator',3],['artisan',2],['maker',1],['inventor',1]] },
      { label: 'I share knowledge that changes the way people think.', scores: [['sage',3],['mentor',2],['teacher',2],['philosopher',1]] },
      { label: 'I challenge the broken system and offer a better way.', scores: [['rebel',3],['disruptor',2],['challenger',2],['agitator',1]] },
      { label: 'I take care of people and make them feel safe and supported.', scores: [['caregiver',3],['guardian',2],['healer',2],['nurturer',1]] },
    ],
  },
  {
    id: 2,
    question: 'Who is your brand actually built for?',
    subtext: 'Not the broadest possible audience — the person who deeply needs what you do.',
    options: [
      { label: 'Ambitious people who want to achieve, compete, and reach the top.', scores: [['champion',3],['victor',2],['hero',2],['warrior',1]] },
      { label: 'Curious people who want to explore, learn, and discover.', scores: [['explorer',3],['sage',2],['seeker',2],['student',1]] },
      { label: 'People who want to belong and be part of something real.', scores: [['everyman',3],['connector',2],['neighbor',2],['caregiver',1]] },
      { label: 'People who reject the status quo and do things their own way.', scores: [['rebel',3],['outlaw',2],['disruptor',2],['challenger',1]] },
      { label: 'Creative people who value beauty, craft, and self-expression.', scores: [['creator',3],['artisan',2],['lover',2],['maker',1]] },
      { label: 'People actively seeking transformation — to become someone different.', scores: [['transformer',3],['coach',2],['magician',2],['mentor',1]] },
    ],
  },
  {
    id: 3,
    question: 'How does your brand communicate?',
    subtext: 'Think tone of voice, content style, and the feeling your words leave behind.',
    options: [
      { label: 'Bold and inspiring — stories of struggle, growth, and triumph.', scores: [['hero',3],['warrior',2],['storyteller',2],['champion',1]] },
      { label: 'Educational and rigorous — evidence-based, thought-leading, insightful.', scores: [['sage',3],['scholar',2],['teacher',2],['advisor',1]] },
      { label: 'Warm and personal — emotional, human, deeply relatable.', scores: [['caregiver',3],['lover',2],['everyman',2],['storyteller',1]] },
      { label: 'Provocative and raw — anti-establishment, honest, unapologetic.', scores: [['rebel',3],['outlaw',2],['provocateur',2],['challenger',1]] },
      { label: 'Playful and witty — humour, irreverence, and unexpected fun.', scores: [['jester',3],['comedian',2],['trickster',2],['entertainer',1]] },
      { label: 'Visionary and possibility-driven — future-focused, ahead of the curve.', scores: [['visionary',3],['pioneer',2],['prophet',2],['dreamer',1]] },
    ],
  },
  {
    id: 4,
    question: 'Which aesthetic direction does your brand lean toward?',
    subtext: 'Gut feeling — what does your brand look and feel like?',
    options: [
      { label: 'Bold, strong, high-contrast — performance and power.', scores: [['warrior',3],['hero',2],['champion',2],['victor',1]] },
      { label: 'Elegant, refined, premium — the highest standard of taste.', scores: [['ruler',3],['king-queen',2],['artisan',2],['lover',1]] },
      { label: 'Raw, authentic, gritty — substance over polish.', scores: [['rebel',3],['outlaw',2],['everyman',2],['adventurer',1]] },
      { label: 'Clean, precise, technical — function before form.', scores: [['sage',3],['engineer',2],['architect',2],['strategist',1]] },
      { label: 'Warm, natural, approachable — human, organic, caring.', scores: [['caregiver',3],['nurturer',2],['neighbor',2],['innocent',1]] },
      { label: 'Playful, colourful, imaginative — unexpected and joyful.', scores: [['creator',3],['jester',2],['dreamer',2],['eternal-child',1]] },
    ],
  },
  {
    id: 5,
    question: 'Your brand is at a party. Which person are they?',
    subtext: 'Not who you want to be — who you actually are.',
    options: [
      { label: 'The one who just launched something huge and is already building the next thing.', scores: [['entrepreneur',3],['conqueror',2],['builder',2],['hero',1]] },
      { label: 'The one everyone trusts — the wisest, most knowledgeable person in the room.', scores: [['sage',3],['mentor',2],['advisor',2],['philosopher',1]] },
      { label: 'The rebel in the corner who doesn\'t care what anyone thinks.', scores: [['rebel',3],['outlaw',2],['dissenter',2],['challenger',1]] },
      { label: 'The host making sure everyone feels welcome and included.', scores: [['caregiver',3],['everyman',2],['neighbor',2],['connector',1]] },
      { label: 'The artist with a project that will change things.', scores: [['creator',3],['visionary',2],['magician',2],['inventor',1]] },
      { label: 'The entertainer keeping everyone laughing and engaged.', scores: [['jester',3],['comedian',2],['entertainer',2],['performer',1]] },
    ],
  },
  {
    id: 6,
    question: 'What is your real competitive advantage?',
    subtext: 'The honest reason your audience chooses you over everyone else.',
    options: [
      { label: 'My results — proof, performance, and a track record that speaks for itself.', scores: [['victor',3],['champion',2],['warrior',2],['authority',1]] },
      { label: 'My expertise — depth of knowledge and credibility no one else has.', scores: [['sage',3],['scholar',2],['advisor',2],['strategist',1]] },
      { label: 'My voice — personality, energy, and the unmistakable way I say things.', scores: [['storyteller',3],['influencer',2],['performer',2],['jester',1]] },
      { label: 'My community — the people who believe in what I stand for.', scores: [['everyman',3],['connector',2],['caregiver',2],['guardian',1]] },
      { label: 'My aesthetic and craft — the taste and quality of what I make.', scores: [['artisan',3],['creator',2],['lover',2],['king-queen',1]] },
      { label: 'My mission — I\'m building something that matters beyond the transaction.', scores: [['idealist',3],['visionary',2],['agitator',2],['reformer',1]] },
    ],
  },
  {
    id: 7,
    question: 'What transformation do you offer your audience?',
    subtext: 'Who does your customer become after working with you?',
    options: [
      { label: 'Stronger, more capable, more competitive — physically or professionally.', scores: [['warrior',3],['coach',2],['hero',2],['champion',1]] },
      { label: 'More successful — wealthier, higher status, greater reach.', scores: [['ruler',3],['entrepreneur',2],['victor',2],['strategist',1]] },
      { label: 'More connected — to themselves, to others, to what actually matters.', scores: [['lover',3],['healer',2],['caregiver',2],['transformer',1]] },
      { label: 'More creative — unlocked, expressive, and building something of their own.', scores: [['creator',3],['magician',2],['alchemist',2],['inventor',1]] },
      { label: 'Smarter and sharper — new perspective, better thinking, deeper understanding.', scores: [['sage',3],['philosopher',2],['teacher',2],['mentor',1]] },
      { label: 'More free — from the system, from fear, from limits they accepted as fixed.', scores: [['rebel',3],['explorer',2],['pioneer',2],['disruptor',1]] },
    ],
  },
  {
    id: 8,
    question: 'What does your brand stand firmly against?',
    subtext: 'Every strong brand is as much about what it rejects as what it claims.',
    options: [
      { label: 'Mediocrity — average standards, average results, average ambition.', scores: [['hero',3],['warrior',2],['victor',2],['artisan',1]] },
      { label: 'Misinformation — false claims, spin, and things dressed up as truth.', scores: [['sage',3],['truth-seeker',2],['idealist',2],['dissenter',1]] },
      { label: 'Inauthenticity — fake, polished, corporate, performative.', scores: [['rebel',3],['outlaw',2],['everyman',2],['purist',1]] },
      { label: 'Disconnection — isolation, loneliness, and people feeling invisible.', scores: [['connector',3],['caregiver',2],['neighbor',2],['lover',1]] },
      { label: 'Boredom — the safe, predictable, forgettable experience.', scores: [['entertainer',3],['jester',2],['creator',2],['adventurer',1]] },
      { label: 'The status quo — broken systems that no one is brave enough to fix.', scores: [['disruptor',3],['pioneer',2],['agitator',2],['challenger',1]] },
    ],
  },
  {
    id: 9,
    question: 'What does success actually look like for your brand?',
    subtext: 'Not revenue goals — the impact you actually want to have.',
    options: [
      { label: 'People say working with me genuinely changed their life.', scores: [['transformer',3],['coach',2],['mentor',2],['hero',1]] },
      { label: 'I become the undisputed authority in my category.', scores: [['sage',3],['ruler',2],['victor',2],['authority',1]] },
      { label: 'I build a loyal tribe who deeply identify with what I stand for.', scores: [['rebel',3],['storyteller',2],['connector',2],['influencer',1]] },
      { label: 'I create something beautiful and lasting that outlives me.', scores: [['creator',3],['artisan',2],['builder',2],['dreamer',1]] },
      { label: 'I disrupt the industry — the old way becomes obsolete.', scores: [['disruptor',3],['pioneer',2],['trailblazer',2],['entrepreneur',1]] },
      { label: 'People feel genuinely cared for, seen, and safe.', scores: [['caregiver',3],['guardian',2],['healer',2],['nurturer',1]] },
    ],
  },
  {
    id: 10,
    question: 'Complete the sentence: "My brand exists because..."',
    subtext: 'The honest reason. Not the polished version.',
    options: [
      { label: '...most people are capable of far more than they currently believe.', scores: [['hero',3],['coach',2],['mentor',2],['warrior',1]] },
      { label: '...the industry is broken and someone has to say it out loud.', scores: [['rebel',3],['disruptor',2],['challenger',2],['agitator',1]] },
      { label: '...beauty, craft, and meaning deserve to exist in the world.', scores: [['creator',3],['artisan',2],['lover',2],['maker',1]] },
      { label: '...knowledge should be accessible and knowledge changes everything.', scores: [['sage',3],['teacher',2],['mentor',2],['everyman',1]] },
      { label: '...people deserve to feel genuinely cared for and protected.', scores: [['caregiver',3],['healer',2],['guardian',2],['nurturer',1]] },
      { label: '...there\'s a better future ahead and I can already see it.', scores: [['visionary',3],['pioneer',2],['dreamer',2],['prophet',1]] },
    ],
  },
]

// ─── Score calculator ─────────────────────────────────────────────────────────
function calculateResults(answers) {
  const totals = {}
  answers.forEach(optionIdx => {
    if (optionIdx === null) return
  })
  QUESTIONS.forEach((q, qi) => {
    const selected = answers[qi]
    if (selected === null || selected === undefined) return
    const option = q.options[selected]
    option.scores.forEach(([id, pts]) => {
      totals[id] = (totals[id] || 0) + pts
    })
  })
  const sorted = Object.entries(totals)
    .sort(([, a], [, b]) => b - a)
    .map(([id]) => ARCHETYPES.find(a => a.id === id))
    .filter(Boolean)
  return sorted.slice(0, 3)
}

// ─── Archetype Result Block ───────────────────────────────────────────────────
function ResultBlock({ archetype, rank }) {
  const labels = ['PRIMARY', 'SECONDARY', 'CREATIVE TENSION']
  const isFirst = rank === 0
  return (
    <div style={{
      borderTop: '1px solid var(--rule)',
      padding: '32px 0',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div>
          <span style={{
            fontFamily: 'var(--font-label)',
            fontSize: '8px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: isFirst ? '#C8102E' : 'var(--ink-dim)',
            display: 'block',
            marginBottom: '6px',
          }}>
            {labels[rank]} ARCHETYPE
          </span>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: isFirst ? 'clamp(36px, 8vw, 96px)' : 'clamp(28px, 5vw, 64px)',
            color: 'var(--ink)',
            letterSpacing: '0.02em',
            lineHeight: 1,
          }}>
            {archetype.name.toUpperCase()}
          </div>
        </div>
        <span className="param-label" style={{ paddingTop: '4px' }}>{archetype.category}</span>
      </div>

      <p className="body" style={{ maxWidth: '680px', marginBottom: '20px' }}>
        {archetype.definition}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {archetype.keywords.map(k => (
          <span key={k} style={{
            fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--ink)',
            border: '1px solid var(--rule)', padding: '5px 12px',
          }}>
            {k}
          </span>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="result-sub-grid">
        <div>
          <span className="param-label" style={{ display: 'block', marginBottom: '8px' }}>MYTHOLOGY</span>
          <p className="body body--sm" style={{ fontStyle: 'italic', lineHeight: 1.7 }}>{archetype.mythology}</p>
        </div>
        <div>
          <span className="param-label" style={{ display: 'block', marginBottom: '8px' }}>BRANDS</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {archetype.brands.map(b => (
              <span key={b} style={{
                fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.16em',
                textTransform: 'uppercase', background: 'var(--ink)', color: 'var(--bg)', padding: '4px 10px',
              }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Results Screen ───────────────────────────────────────────────────────────
function ResultsScreen({ results, onRetake, onDirectory }) {
  const [primary, secondary, tension] = results

  return (
    <main style={{ paddingTop: '60px' }}>
      <div className="wrap">

        <div className="rule" />
        <div className="meta-row">
          <span className="meta-label">FREE TOOLS / T — 001 / RESULTS</span>
          <span className="meta-label meta-label--faint">LUMINARY / EZRA DOM</span>
        </div>
        <div className="rule" />

        <div style={{ padding: '4px 0' }}>
          <span className="display-line" style={{ fontSize: 'clamp(48px, 11vw, 150px)', display: 'block' }}>YOUR BRAND</span>
          <span className="display-line" style={{ fontSize: 'clamp(48px, 11vw, 150px)', display: 'block' }}>STACK.</span>
        </div>
        <div className="rule" />

        <div className="meta-row" style={{ padding: '10px 0' }}>
          <span className="meta-label meta-label--faint">BASED ON YOUR 10 ANSWERS — 3 ARCHETYPES IDENTIFIED</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={onRetake}
              style={{
                fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em',
                textTransform: 'uppercase', background: 'none', border: '1px solid var(--rule)',
                color: 'var(--ink)', padding: '9px 18px', cursor: 'pointer',
              }}
            >
              RETAKE QUIZ
            </button>
          </div>
        </div>
        <div className="rule" />

        {/* The 3 archetype blocks */}
        {results.map((a, i) => (
          <ResultBlock key={a.id} archetype={a} rank={i} />
        ))}

        <div className="rule" />

        {/* How to combine section */}
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
              HOW TO BUILD YOUR STACK
            </span>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(240,237,232,0.5)' }}>
              LUMINARY / EZRA DOM
            </span>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 7vw, 100px)',
              color: '#F0EDE8',
              letterSpacing: '0.01em',
              lineHeight: 0.92,
              marginBottom: '0.04em',
            }}>
              {primary.name.toUpperCase()} +
            </span>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 7vw, 100px)',
              color: '#C8102E',
              letterSpacing: '0.01em',
              lineHeight: 0.92,
            }}>
              {secondary.name.toUpperCase()}.
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }} className="stack-grid">
            <div>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.5)', display: 'block', marginBottom: '10px' }}>
                THE ROLE
              </span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.72, color: 'rgba(240,237,232,0.8)' }}>
                Let <strong style={{ color: '#F0EDE8' }}>{primary.name}</strong> define your brand's core identity — the role you play in your customer's story. This is who you are at your most essential: the first instinct, the default mode, the energy that shows up before strategy does.
              </p>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.5)', display: 'block', marginBottom: '10px' }}>
                THE METHOD
              </span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.72, color: 'rgba(240,237,232,0.8)' }}>
                Layer in <strong style={{ color: '#F0EDE8' }}>{secondary.name}</strong> to define how you do it — your style, your method, your approach. While {primary.name} is what you stand for, {secondary.name} is how you show up. Together they give your brand both depth and dimension.
              </p>
            </div>
          </div>

          {tension && (
            <div style={{ borderTop: '1px solid rgba(240,237,232,0.18)', paddingTop: '28px', marginBottom: '40px' }}>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.5)', display: 'block', marginBottom: '10px' }}>
                THE EDGE
              </span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.72, color: 'rgba(240,237,232,0.8)', maxWidth: '640px' }}>
                <strong style={{ color: '#F0EDE8' }}>{tension.name}</strong> adds creative tension to the stack. It's the unexpected edge that makes your brand harder to imitate — the quality that keeps your audience slightly off-balance in the best way. Don't lead with it. Let it surface in the work.
              </p>
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="mailto:itsezradom@gmail.com?subject=Brand%20Strategy%20Inquiry"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(14px, 1.8vw, 22px)',
                letterSpacing: '0.04em',
                color: 'var(--ink)',
                background: '#F0EDE8',
                border: '2px solid #F0EDE8',
                padding: '18px 32px 20px',
                lineHeight: 1,
                textDecoration: 'none',
                display: 'inline-block',
                whiteSpace: 'nowrap',
              }}
            >
              START A PROJECT →
            </a>
            <button
              onClick={onDirectory}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(14px, 1.8vw, 22px)',
                letterSpacing: '0.04em',
                color: '#F0EDE8',
                background: 'transparent',
                border: '2px solid rgba(240,237,232,0.4)',
                padding: '18px 32px 20px',
                lineHeight: 1,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              EXPLORE FULL DIRECTORY →
            </button>
          </div>

          <div style={{ height: '1px', background: 'rgba(240,237,232,0.18)', marginTop: '48px' }} />
        </div>

        <div className="rule" />
        <div className="meta-row" style={{ padding: '8px 0 16px' }}>
          <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
          <span className="meta-label meta-label--faint">SRB ARC–001</span>
          <span className="meta-label meta-label--faint">EZRADOM.COM — BRAND STRATEGY — © 2026</span>
        </div>
        <div className="rule" />
        <div style={{ height: '40px' }} />

      </div>

      <style>{`
        @media (max-width: 640px) {
          .result-sub-grid { grid-template-columns: 1fr !important; }
          .stack-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}

// ─── Question Screen ──────────────────────────────────────────────────────────
function QuestionScreen({ question, qIndex, total, selected, onSelect, onNext, onBack }) {
  const progress = ((qIndex) / total) * 100

  return (
    <main style={{ paddingTop: '60px', minHeight: '100vh' }}>
      <div className="wrap">

        <div className="rule" />

        {/* Progress */}
        <div style={{ padding: '14px 0', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span className="param-label" style={{ whiteSpace: 'nowrap' }}>
            QUESTION {String(qIndex + 1).padStart(2,'0')} / {String(total).padStart(2,'0')}
          </span>
          <div style={{ flex: 1, height: '2px', background: 'var(--rule)', position: 'relative' }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, height: '100%',
              width: `${progress}%`, background: '#C8102E',
              transition: 'width 0.4s ease',
            }} />
          </div>
          <span className="param-label" style={{ whiteSpace: 'nowrap' }}>{Math.round(progress)}%</span>
        </div>

        <div className="rule" />

        {/* Question */}
        <div style={{ padding: '28px 0 24px' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 4vw, 52px)',
            color: 'var(--ink)',
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            marginBottom: '12px',
            maxWidth: '800px',
          }}>
            {question.question}
          </div>
          <p className="body body--sm" style={{ color: 'var(--ink-dim)', maxWidth: '600px' }}>
            {question.subtext}
          </p>
        </div>

        <div className="rule" />

        {/* Options */}
        <div style={{ padding: '8px 0', display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
          {question.options.map((opt, i) => {
            const isSelected = selected === i
            return (
              <button
                key={i}
                onClick={() => onSelect(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px 24px',
                  background: isSelected ? 'rgba(200,16,46,0.06)' : 'var(--bg)',
                  border: 'none',
                  borderLeft: `3px solid ${isSelected ? '#C8102E' : 'transparent'}`,
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { if (!isSelected) e.currentTarget.style.background = 'rgba(200,16,46,0.03)' }}
                onMouseLeave={e => { if (!isSelected) e.currentTarget.style.background = 'var(--bg)' }}
              >
                <span style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  color: isSelected ? '#C8102E' : 'var(--ink-faint)',
                  flexShrink: 0,
                  width: '24px',
                  transition: 'color 0.15s',
                }}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(14px, 1.6vw, 18px)',
                  color: isSelected ? 'var(--ink)' : 'var(--ink-dim)',
                  lineHeight: 1.5,
                  transition: 'color 0.15s',
                }}>
                  {opt.label}
                </span>
                {isSelected && (
                  <span style={{ marginLeft: 'auto', color: '#C8102E', fontSize: '16px', flexShrink: 0 }}>✓</span>
                )}
              </button>
            )
          })}
        </div>

        {/* Nav */}
        <div style={{ padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <button
            onClick={onBack}
            disabled={qIndex === 0}
            style={{
              fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em',
              textTransform: 'uppercase', background: 'none', border: '1px solid var(--rule)',
              color: qIndex === 0 ? 'var(--ink-faint)' : 'var(--ink)',
              padding: '12px 20px', cursor: qIndex === 0 ? 'default' : 'pointer',
              opacity: qIndex === 0 ? 0.4 : 1,
            }}
          >
            ← BACK
          </button>
          <button
            onClick={onNext}
            disabled={selected === null || selected === undefined}
            style={{
              fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: (selected !== null && selected !== undefined) ? '#C8102E' : 'transparent',
              border: `1px solid ${(selected !== null && selected !== undefined) ? '#C8102E' : 'var(--rule)'}`,
              color: (selected !== null && selected !== undefined) ? '#F0EDE8' : 'var(--ink-faint)',
              padding: '12px 28px', cursor: (selected !== null && selected !== undefined) ? 'pointer' : 'default',
              transition: 'all 0.2s',
            }}
          >
            {qIndex < total - 1 ? 'NEXT QUESTION →' : 'SEE MY RESULTS →'}
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
          <span className="meta-label">FREE TOOLS / T — 001</span>
          <span className="meta-label meta-label--faint">LUMINARY / EZRA DOM</span>
          <span className="meta-label meta-label--faint">BC CANADA</span>
        </div>
        <div className="rule" />

        <div style={{ padding: '4px 0' }}>
          <span className="display-line" style={{ fontSize: 'clamp(52px, 13vw, 180px)', display: 'block' }}>ARCHETYPE</span>
          <span className="display-line" style={{ fontSize: 'clamp(52px, 13vw, 180px)', display: 'block' }}>FINDER.</span>
        </div>
        <div className="rule" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', padding: '32px 0', alignItems: 'end' }} className="intro-grid">
          <div>
            <p className="body" style={{ marginBottom: '20px' }}>
              10 questions. 3 archetypes. Your brand identity, mapped to the characters that have shaped human culture for thousands of years.
            </p>
            <p className="body body--sm" style={{ color: 'var(--ink-dim)' }}>
              Answer honestly — not how you want your brand to be seen, but how it actually shows up today. The results will reveal your primary archetype, a secondary layer, and a tension that gives your brand its edge. From there, you'll know exactly what kind of brand you're building and how to position it.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
              {['10 QUESTIONS', '3 ARCHETYPES REVEALED', 'FREE, NO SIGNUP', '~5 MINUTES'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C8102E', flexShrink: 0 }} />
                  <span className="param-label">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rule" />

        <div style={{ padding: '24px 0', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onStart}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px, 2.8vw, 36px)',
              letterSpacing: '0.04em',
              color: '#F0EDE8',
              background: '#C8102E',
              border: '2px solid #C8102E',
              padding: '20px 48px 22px',
              lineHeight: 1,
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            START THE QUIZ →
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
          <span className="meta-label meta-label--faint">SRB ARC–001</span>
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
export default function ArchetypeFinderPage() {
  const { navigate } = usePage()
  const [screen, setScreen] = useState('intro') // 'intro' | 'quiz' | 'results'
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null))
  const [results, setResults] = useState(null)

  const handleSelect = (optionIdx) => {
    setAnswers(prev => {
      const next = [...prev]
      next[currentQ] = optionIdx
      return next
    })
  }

  const handleNext = () => {
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(q => q + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const res = calculateResults(answers)
      setResults(res)
      setScreen('results')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    if (currentQ > 0) {
      setCurrentQ(q => q - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleRetake = () => {
    setAnswers(Array(QUESTIONS.length).fill(null))
    setCurrentQ(0)
    setResults(null)
    setScreen('intro')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (screen === 'intro') {
    return <IntroScreen onStart={() => setScreen('quiz')} onBack={() => navigate('tools')} />
  }

  if (screen === 'quiz') {
    return (
      <QuestionScreen
        question={QUESTIONS[currentQ]}
        qIndex={currentQ}
        total={QUESTIONS.length}
        selected={answers[currentQ]}
        onSelect={handleSelect}
        onNext={handleNext}
        onBack={handleBack}
      />
    )
  }

  return (
    <ResultsScreen
      results={results}
      onRetake={handleRetake}
      onDirectory={() => navigate('archetype-directory')}
    />
  )
}
