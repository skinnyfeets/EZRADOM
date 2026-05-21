import { useRef, useEffect, useState } from 'react'
import { typewriterIn } from '../../utils/typewriter.js'
import ImageSlot from '../ImageSlot.jsx'
import { usePage } from '../../context/PageContext.jsx'
import core4Thumb from '../../assets/images/core4-thumb.png'
import mcgeeCycleThumb from '../../assets/images/mcgee-cycle-thumb.png'
import mcgeeCycleGroup from '../../assets/images/mcgee-cycle-group.png'
import obscuraModal from '../../assets/images/obscura-modal.png'
import core4Modal from '../../assets/images/core4-modal.png'
import jaksonRanchModal from '../../assets/images/jakson-ranch-modal.png'
import jaksonRanchThumb from '../../assets/images/jakson-ranch-thumb.png'
import obscuraThumb from '../../assets/images/obscura-thumb.png'
import sweatcultureHero from '../../assets/images/sweatculture-hero.png'
import sweatcultureBrand from '../../assets/images/sweatculture-brand.png'
import sweatcultureLifestyle from '../../assets/images/sweatculture-lifestyle.png'
import trailsideHero from '../../assets/images/trailside-hero.png'
import trailsideBrand from '../../assets/images/trailside-brand.png'
import trailsideLifestyle from '../../assets/images/trailside-lifestyle.png'

function animateIn(el) {
  return typewriterIn(el, { trigger: el, start: 'top 84%', once: true })
}

function StatShowcase({ stats }) {
  return (
    <div className="anim stat-showcase" style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
      borderTop: '1px solid var(--rule)',
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          padding: '18px 20px 16px',
          borderRight: i < stats.length - 1 ? '1px solid var(--rule)' : 'none',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 3.5vw, 48px)',
            color: 'var(--ink)',
            letterSpacing: '0.01em',
            lineHeight: 1,
            marginBottom: '6px',
          }}>
            {s.value}
          </div>
          <span className="param-label stat-cell-label" style={{ color: 'var(--ink-faint)', display: 'block', lineHeight: 1.4, wordBreak: 'break-word' }}>{s.label}</span>
        </div>
      ))}
    </div>
  )
}

function ProjectBlock({ meta, displayName, tagline, subline, body, stats, deliverables, slots, callout, projectKey }) {
  const ref = useRef(null)
  const { navigate } = usePage()
  useEffect(() => { if (ref.current) animateIn(ref.current) }, [])

  return (
    <div ref={ref}>
      <div className="rule anim" />
      <div className="meta-row anim">
        <span className="meta-label">{meta[0]}</span>
        <span className="meta-label meta-label--faint">{meta[2]}</span>
      </div>
      <div className="rule anim" />

      {/* Display name */}
      <div style={{ padding: '4px 0' }}>
        <h3
          className="anim"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 9vw, 120px)',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            lineHeight: 0.88,
            letterSpacing: '0.01em',
          }}
        >
          {displayName}
        </h3>
      </div>
      <div className="rule anim" />

      {/* Discipline + callout strip */}
      <div className="meta-row anim">
        <span className="meta-label meta-label--faint">{meta[1]}</span>
        {callout && callout.map((c, i) => (
          <span key={i} className="meta-label meta-label--faint">{c}</span>
        ))}
      </div>
      <div className="rule anim" />

      {/* Tagline */}
      <div className="meta-row anim" style={{ padding: '10px 0' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2.5vw, 28px)', color: 'var(--ink-dim)', letterSpacing: '0.03em' }}>
          {tagline}
        </span>
        {subline && <span className="meta-label meta-label--faint">{subline}</span>}
      </div>
      <div className="rule anim" />

      {/* Hero image — no animation */}
      <div>
        <ImageSlot name={slots[0].name} height="380px" src={slots[0].src} objectFit="cover" objectPosition={slots[0].objectPosition || 'center'} />
      </div>
      <div className="rule anim" />

      {/* Two-column: body+deliverables left / images right */}
      <div className="col-2" style={{ borderBottom: '1px solid var(--rule)' }}>
        {/* Left — animated */}
        <div className="anim" style={{ padding: '20px 24px 20px 0', borderRight: '1px solid var(--rule)' }}>
          {body.map((p, i) => (
            <p key={i} className="body body--sm" style={{ marginBottom: '12px' }}>{p}</p>
          ))}
          <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--rule)' }}>
            <div style={{ marginBottom: '6px' }}>
              <span className="param-label">DELIVERABLES</span>
            </div>
            <p className="body body--sm" style={{ color: 'var(--ink-faint)', fontSize: '12px' }}>{deliverables}</p>
          </div>
        </div>

        {/* Right — images, no animation */}
        <div className="project-images-col" style={{ padding: '20px 0 20px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ImageSlot name={slots[1].name} height="180px" src={slots[1].src} objectFit="cover" />
          <ImageSlot name={slots[2].name} height="180px" src={slots[2].src} objectFit="cover" />
        </div>
      </div>

      {/* Stats — full width, prominent */}
      <StatShowcase stats={stats} />

      {/* SEE MORE button — bottom of card */}
      <div className="anim" style={{ marginTop: '20px' }}>
        <button
          onClick={() => navigate(projectKey)}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 2vw, 26px)',
            letterSpacing: '0.04em',
            color: 'var(--bg)',
            background: 'var(--ink)',
            border: '2px solid var(--ink)',
            borderRadius: 0,
            padding: '10px 32px 12px',
            cursor: 'pointer',
            display: 'block',
            width: '100%',
            textAlign: 'center',
            transition: 'opacity 0.2s ease',
            lineHeight: 1,
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.80'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          SEE MORE →
        </button>
      </div>
    </div>
  )
}

function SecModal({ card, onClose }) {
  useEffect(() => {
    if (!card) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [card, onClose])

  if (!card) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="theme-inverted"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {/* Header bar */}
        <div style={{ borderBottom: '1px solid var(--rule)', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="param-label" style={{ color: 'var(--ink-faint)' }}>{card.type}</span>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--ink)', padding: '4px 8px' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            CLOSE ✕
          </button>
        </div>

        {/* Image */}
        <ImageSlot name={card.slotName} height="340px" src={card.modalSrc || card.src} objectFit="cover" objectPosition={card.objectPosition || 'center'} />

        <div style={{ padding: '28px 32px 36px' }}>
          {/* Title */}
          <div style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '20px', marginBottom: '20px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: '0.02em', lineHeight: 1, marginBottom: '8px' }}>
              {card.title}
            </div>
            <span className="param-label" style={{ color: 'var(--ink-faint)' }}>{card.type}</span>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '28px' }}>
            <span className="param-label" style={{ display: 'block', marginBottom: '10px' }}>OVERVIEW</span>
            {card.fullDesc.map((p, i) => (
              <p key={i} className="body" style={{ marginBottom: '12px' }}>{p}</p>
            ))}
          </div>

          {/* Brand guidelines */}
          {card.guidelines?.length > 0 && (
            <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '24px' }}>
              <span className="param-label" style={{ display: 'block', marginBottom: '16px' }}>BRAND GUIDELINES</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                {card.guidelines.map((g, i) => (
                  <div key={i} style={{ borderTop: '1px solid var(--rule)', paddingTop: '12px' }}>
                    <span className="param-label" style={{ display: 'block', marginBottom: '6px', color: 'var(--ink-faint)' }}>{g.label}</span>
                    <p className="body body--sm">{g.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function SecCard({ type, title, desc, slotName, src, objectPosition = 'center', onOpen, gridIndex }) {
  const borderRight = gridIndex % 2 === 0 ? '1px solid var(--rule)' : 'none'
  const borderBottom = gridIndex < 2 ? '1px solid var(--rule)' : 'none'
  return (
    <div style={{ borderRight, borderBottom, padding: '16px', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
      <span className="param-label anim sec-card-type" style={{ display: 'block', marginBottom: '6px', fontSize: '8px', minHeight: '2.6em' }}>{type}</span>
      <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '10px' }} />
      <ImageSlot name={slotName} height="216px" src={src} objectFit="cover" objectPosition={objectPosition} />
      <div className="anim" style={{ marginTop: '10px', minWidth: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2vw, 22px)', color: 'var(--ink)', letterSpacing: '0.02em', marginBottom: '4px', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
          {title}
        </div>
        <p className="body body--sm" style={{ fontSize: '12px', wordBreak: 'break-word', overflowWrap: 'break-word', flexGrow: 1 }}>{desc}</p>
        <button
          onClick={onOpen}
          style={{
            marginTop: '12px',
            fontFamily: 'var(--font-label)', fontSize: '9px', letterSpacing: '0.20em',
            textTransform: 'uppercase', color: '#F0EDE8', background: '#C8102E',
            border: 'none', padding: '8px 12px', cursor: 'pointer',
            transition: 'opacity 0.2s ease', width: '100%',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          SEE MORE →
        </button>
      </div>
    </div>
  )
}

const SEC_CARDS = [
  {
    type: 'Non-Profit MTB Skills Camp',
    title: 'McGEE CYCLE',
    desc: 'Brand guidelines for a grassroots mountain bike skills program.',
    slotName: 'mcgee-cycle-group',
    src: null, // replaced below with import
    fullDesc: [
      "Willi and his brother started McGee Cycle because they were passionate and invested in mountain biking — but they saw a need for more support within the MTB community for things like group rides, bike maintenance, and race hosting.",
      "The McGee Brothers have a vision to host mountain bike skills camps around the world to help spread the joy of mountain biking with as many people as possible.",
      "McGee Cycle values meaningful relationships with the community, hosting events for people to experience and enjoy, and educating within their skills camps to encourage better and safer riding.",
    ],
    guidelines: [],
  },
  {
    type: 'Brand Concept Case Study',
    title: 'OBSCURA',
    desc: 'A brand concept exploring identity security, power, and controlled perception.',
    slotName: 'obscura-thumb',
    src: null,
    objectPosition: 'center 30%',
    fullDesc: [
      "Obscura is a thought experiment exploring identity security in a world where digital history, public perception, and personal records can be shaped or rewritten.",
      "The concept focuses on services for high-level clients — using brutalist design and an elitist, controlled voice to reflect power, secrecy, and systemized authority.",
    ],
    guidelines: [],
  },
  {
    type: 'Fast-Moving Start-Up',
    title: 'CORE 4 REAL ESTATE',
    desc: 'Brand identity for the fastest growing real estate startup in Canada.',
    slotName: 'core4-thumb',
    src: null,
    fullDesc: [
      "Core 4 Real Estate is a real estate investment startup operating in Kelowna and Grande Prairie. They acquire properties, renovate them, and rent them out for income — with big, ambitious goals and the momentum to back it up.",
      "They are the fastest growing real estate startup in Canada. The brand needed to match that energy — bold enough to turn heads, credible enough to earn trust, and built to scale as fast as the business itself.",
    ],
    guidelines: [],
  },
  {
    type: 'Family-Run Small Business',
    title: 'JAKSON RANCH',
    desc: 'Brand identity for a family-owned ranch outside Regina, Saskatchewan.',
    slotName: 'jakson-ranch-thumb',
    src: null,
    fullDesc: [
      "Jakson Ranch is a family-owned ranch located outside Regina, Saskatchewan. They raise bucking bulls and meat cows on a really cool farm, and sell grass-fed beef direct to customers.",
      "The brand needed to feel as genuine as the people behind it — rooted in the land, honest about what they do, and proud of how they do it. Nothing manufactured. Nothing overstated.",
    ],
    guidelines: [],
  },
]

export default function Work() {
  const myProofRef = useRef(null)
  const studioRef = useRef(null)
  const gridRef = useRef(null)
  const [activeCard, setActiveCard] = useState(null)
  useEffect(() => {
    if (myProofRef.current) animateIn(myProofRef.current)
    if (studioRef.current) animateIn(studioRef.current)
    if (gridRef.current) animateIn(gridRef.current)
  }, [])

  return (
    <section id="work" style={{ paddingTop: 0, paddingBottom: 0 }}>

      <div className="wrap">
        {/* Section header — cream */}
        <div ref={myProofRef}>
          <div className="rule anim" />
          <div style={{ padding: '2px 0' }}>
            <span className="display-line display-script anim" style={{ fontSize: 'clamp(64px, 17vw, 240px)' }}>
              My Proof.
            </span>
          </div>
          <div className="rule anim" />
        </div>
      </div>

      {/* Studio Luminary intro — cream */}
      <div className="wrap">
        <div ref={studioRef} style={{ paddingTop: '40px' }}>
          <div className="rule anim" />
          <div className="meta-row anim">
            <span className="meta-label">STUDIO LUMINARY</span>
            <span className="meta-label meta-label--faint">BC CANADA — 2022 — PRESENT</span>
          </div>
          <div className="rule anim" />
          <div style={{ padding: '4px 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(52px, 13vw, 190px)' }}>STUDIO</span>
            <span className="display-line anim" style={{ fontSize: 'clamp(52px, 13vw, 190px)' }}>LUMINARY.</span>
          </div>
          <div className="rule anim" />
          <div className="meta-row anim" style={{ padding: '10px 0' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2.2vw, 28px)', color: 'var(--ink)', letterSpacing: '0.03em' }}>
              MY BRAND STRATEGY AGENCY. BUILT FOR FOUNDER-LED BUSINESSES.
            </span>
          </div>
          <div className="rule anim" style={{ marginBottom: '40px' }} />
        </div>
      </div>

      <div className="wrap" style={{ paddingTop: '0', paddingBottom: '0' }}>

        {/* Project 01: SweatCulture */}
        <div className="theme-inverted" style={{ border: '1px solid rgba(200,16,46,0.4)', padding: '0 28px 28px', marginBottom: '28px' }}>
          <ProjectBlock
            projectKey="sweatculture"
            meta={['SWEATCULTURE', 'BRAND STRATEGY + IDENTITY + CAMPAIGNS + ADVISORY', 'PEACHLAND, BC']}
            displayName="SWEAT CULTURE"
            tagline="Find your people."
            callout={['EVERYMAN', 'EXPLORER']}
            body={[
              "Sweat Culture started in Peachland, BC — an outdoor sauna and cold plunge experience built around community, adventure, and shared transformation. The founders didn't want to run a spa. They wanted to start a movement.",
              "I came in at inception. I've stayed through identity, launch, marketing campaigns, and ongoing brand advisory. Brand strategy is always at the core. The audience perspective is always front of mind.",
              "I anchored the identity in two archetypes: the Everyman and the Explorer. Inclusive enough for anyone. Progressive enough to inspire transformation. The result is a brand that people don't just use. They show up for it.",
            ]}
            stats={[
              { label: 'VISITORS IN FIRST 4 MONTHS', value: '2,000+' },
              { label: 'REPEAT BOOKING RATE', value: '40%' },
              { label: 'REVENUE IN FIRST 4 MONTHS', value: '$35,000' },
              { label: 'REGULAR MEMBERS', value: '20+' },
            ]}
            deliverables="Brand archetypes + positioning / Visual identity system / Brand guidelines / Photography direction / Poster campaigns / Merch / Sauna logos / Business cards / Road signage / Facebook community content (50,000+ views) / Ongoing marketing"
            slots={[
              { name: 'sweatculture-hero', height: '480px', src: sweatcultureHero, objectPosition: 'center 70%' },
              { name: 'sweatculture-brand', height: '260px', src: sweatcultureBrand },
              { name: 'sweatculture-lifestyle', height: '260px', src: sweatcultureLifestyle },
            ]}
          />
        </div>

        {/* Project 02: Trailside */}
        <div className="theme-inverted" style={{ border: '1px solid rgba(200,16,46,0.4)', padding: '0 28px 28px', marginBottom: '28px' }}>
          <ProjectBlock
            projectKey="trailside"
            meta={['TRAILSIDE LEMONADE', 'BRAND STRATEGY + IDENTITY', 'BC CANADA']}
            displayName="TRAILSIDE"
            tagline="Get outside, drink Trailside."
            subline="THE MOUNTAIN BIKERS' LEMONADE"
            callout={['DIFFERENT', 'NOT', 'BETTER']}
            body={[
              "When I came on, Trailside was a bag-in-box lemonade concentrate selling to four or five restaurants. The category was crowded. Most competitors went neutral. We went the opposite direction.",
              "I built the brand to be different rather than a better version of the competition. Bright, bold, energetic. A drink made by riders for riders. Jackson grew up riding trails. So did I. That insider understanding shaped everything.",
              "The brand is now bigger than the drink. Supply cannot meet demand. Opportunities are opening up organically because the identity is clear, the audience feels ownership, and the culture is real.",
            ]}
            stats={[
              { label: 'POINTS OF SALE', value: '4 → 12+' },
              { label: 'INSTAGRAM FOLLOWERS', value: '1,000+' },
              { label: 'CANS SOLD TO DATE', value: '1,000+' },
              { label: 'SOLD OUT EVERY TIME', value: '100%' },
            ]}
            deliverables="Brand strategy + positioning / Logo + identity system / Can labels / Concentrate labels / Poster campaigns + flyers / Brand guidelines"
            slots={[
              { name: 'trailside-hero', height: '480px', src: trailsideHero, objectPosition: 'center top' },
              { name: 'trailside-brand', height: '260px', src: trailsideBrand },
              { name: 'trailside-lifestyle', height: '260px', src: trailsideLifestyle },
            ]}
          />
        </div>

        {/* More Work grid */}
        <div ref={gridRef}>
          <div className="rule anim" />
          <div className="meta-row anim">
            <span className="meta-label">MORE WORK</span>
            <span className="meta-label meta-label--faint">SECONDARY PROJECTS</span>
          </div>
          <div className="rule anim" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0 }}>
            {[
              { ...SEC_CARDS[0], src: mcgeeCycleThumb, modalSrc: mcgeeCycleGroup },
              { ...SEC_CARDS[1], src: obscuraThumb, modalSrc: obscuraModal },
              { ...SEC_CARDS[2], src: core4Thumb, modalSrc: core4Modal },
              { ...SEC_CARDS[3], src: jaksonRanchThumb, modalSrc: jaksonRanchModal },
            ].map((card, i) => (
              <SecCard
                key={card.title}
                {...card}
                gridIndex={i}
                onOpen={() => setActiveCard(card)}
              />
            ))}
          </div>
          <div className="rule anim" />
        </div>

      </div>{/* end wrap */}

      <SecModal card={activeCard} onClose={() => setActiveCard(null)} />

      <style>{`
        @media (max-width: 640px) {
          .stat-showcase { grid-template-columns: 1fr 1fr !important; }
          .stat-showcase > div { padding: 12px 10px 10px !important; }
          .stat-cell-label { font-size: 7px !important; line-height: 1.5 !important; word-break: break-word !important; }
          .project-images-col { padding-left: 0 !important; }
          .sec-card-type { min-height: auto !important; }
        }
      `}</style>
    </section>
  )
}
