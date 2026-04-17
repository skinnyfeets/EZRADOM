import { useRef, useEffect } from 'react'
import { typewriterIn } from '../../utils/typewriter.js'
import ImageSlot from '../ImageSlot.jsx'
import { usePage } from '../../context/PageContext.jsx'
import tsHero from '../../assets/images/ts-hero.png'
import tsCan from '../../assets/images/ts-can.png'
import tsLifestyle from '../../assets/images/ts-lifestyle.png'

function animateIn(el) {
  return typewriterIn(el, { trigger: el, start: 'top 84%', once: true })
}

function Rule() { return <div className="rule" /> }
function MetaRow({ children }) { return <div className="meta-row">{children}</div> }

function ParamRow({ label, value }) {
  return (
    <div style={{ padding: '12px 0', borderBottom: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: '180px 1fr', gap: '16px' }}>
      <span className="param-label" style={{ paddingTop: '2px' }}>{label}</span>
      <span className="param-value" style={{ fontSize: '12px', lineHeight: 1.5 }}>{value}</span>
    </div>
  )
}

function BackBtn({ navigate }) {
  return (
    <button
      onClick={() => navigate('home')}
      className="meta-label"
      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)', letterSpacing: '0.18em', fontFamily: 'var(--font-label)', fontSize: '10px', textTransform: 'uppercase', padding: 0 }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      ← BACK TO WORK
    </button>
  )
}

export default function TrailsidePage() {
  const { navigate } = usePage()
  const s1 = useRef(null), s2 = useRef(null), s3 = useRef(null),
        s4 = useRef(null), s5 = useRef(null), s6 = useRef(null), s7 = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    ;[s1, s2, s3, s4, s5, s6, s7].forEach(r => { if (r.current) animateIn(r.current) })
  }, [])

  return (
    <div style={{ paddingTop: '60px' }}>
      <div className="wrap">

        {/* ── HEADER ── */}
        <div ref={s1}>
          <Rule />
          <MetaRow>
            <BackBtn navigate={navigate} />
            <span className="meta-label meta-label--faint">TRAILSIDE OUTDOOR CO. / CASE STUDY</span>
            <span className="meta-label meta-label--faint">BC CANADA</span>
          </MetaRow>
          <Rule />

          <div style={{ padding: '4px 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(64px, 17vw, 240px)' }}>TRAILSIDE</span>
            <span className="display-line anim" style={{ fontSize: 'clamp(64px, 17vw, 240px)' }}>OUTDOOR CO.</span>
          </div>
          <Rule />

          <MetaRow>
            <span className="meta-label anim">BRAND STRATEGY + IDENTITY</span>
            <span className="meta-label meta-label--faint anim">LUMINARY</span>
            <span className="meta-label meta-label--faint anim">2023 — 2024</span>
          </MetaRow>
          <Rule />

          <div style={{ padding: '14px 0' }}>
            <span className="anim" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 52px)', color: 'var(--ink-dim)', letterSpacing: '0.03em' }}>
              GET OUTSIDE, DRINK TRAILSIDE.
            </span>
          </div>
          <div style={{ paddingBottom: '6px' }}>
            <span className="meta-label meta-label--faint anim">THE MOUNTAIN BIKERS' LEMONADE</span>
          </div>
          <Rule />
        </div>

        {/* ── HERO IMAGE + BRIEF ── */}
        <div ref={s2}>
          <div>
            <ImageSlot name="trailside-hero" height="560px" src={tsHero} altText="Trailside Outdoor Co. brand identity — hero photography by Luminary Graphix, brand strategist Ezra Dom" objectFit="cover" objectPosition="center 30%" />
          </div>
          <Rule />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="ts-2col">
            <div style={{ padding: '32px 40px 32px 0', borderRight: '1px solid var(--rule)' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '16px' }}>THE BRIEF</span>
              <Rule />
              <div style={{ paddingTop: '16px' }}>
                <p className="body anim" style={{ marginBottom: '16px' }}>
                  When I came on, Trailside Outdoor Co. was a bag-in-box lemonade concentrate selling to four or five restaurants. The category was crowded. Shelf space was competitive. Most competitors went neutral — greens and earth tones to signal nature. We went the opposite direction.
                </p>
                <p className="body anim" style={{ marginBottom: '16px' }}>
                  Jackson, the founder, grew up riding trails. So did I. That shared insider perspective shaped everything. We narrowed the focus to the outdoor adventure community and stopped apologizing for it.
                </p>
                <p className="body anim">
                  The core strategic insight: don't compete for shelf space. Compete for cultural space. Own a specific community so completely that the community becomes the distribution channel.
                </p>
              </div>
            </div>
            <div style={{ padding: '32px 0 32px 40px' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '16px' }}>PROJECT PARAMETERS</span>
              <Rule />
              <div style={{ paddingTop: '8px' }}>
                <ParamRow label="CLIENT" value="Trailside Outdoor Co. / Jackson" />
                <ParamRow label="WEBSITE" value="trailsideoutdoors.ca" />
                <ParamRow label="LOCATION" value="BC, Canada" />
                <ParamRow label="TIMELINE" value="2023 — 2024" />
                <ParamRow label="SCOPE" value="Brand Strategy / Identity / Can Labels / Guidelines" />
                <ParamRow label="CATEGORY" value="Outdoor Adventure / Beverage" />
                <ParamRow label="POSITIONING" value="Different, not better. Made for riders." />
                <ParamRow label="PALETTE" value="Raspberry Red / Lemon Yellow" />
              </div>
            </div>
          </div>
          <Rule />
        </div>

        {/* ── STRATEGY ── */}
        <div ref={s3}>
          <MetaRow>
            <span className="meta-label anim">01 — THE STRATEGY</span>
            <span className="meta-label meta-label--faint anim">CULTURAL OWNERSHIP</span>
          </MetaRow>
          <Rule />

          <div style={{ padding: '4px 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 11vw, 160px)' }}>DIFFERENT,</span>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 11vw, 160px)' }}>NOT BETTER.</span>
          </div>
          <Rule />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="ts-2col">
            <div style={{ padding: '32px 40px 32px 0', borderRight: '1px solid var(--rule)' }}>
              <p className="body anim" style={{ marginBottom: '16px' }}>
                Most beverage brands compete on taste claims. Fresher. Cleaner. More natural. These are comparisons — they position the brand as a slightly better version of something that already exists.
              </p>
              <p className="body anim" style={{ marginBottom: '16px' }}>
                We didn't compete. We claimed a culture. Trailside is the drink of the outdoor community — mountain bikers, trail runners, anyone who prefers trails to sidewalks. That audience already exists. They already have tribal loyalty. The strategy was to earn a place inside that tribe, not advertise at it from outside.
              </p>
              <p className="body anim">
                Sacrificing broad appeal for cultural depth was intentional. The outdoor adventure community is tight-knit and highly influential within its own sphere. One rider recommending Trailside at a trailhead is worth more than a billboard.
              </p>
            </div>
            <div style={{ padding: '32px 0 32px 40px' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '16px' }}>STRATEGIC FRAMEWORK</span>
              <Rule />
              <div style={{ paddingTop: '8px' }}>
                <ParamRow label="CORE INSIGHT" value="Don't be a better lemonade. Be the lemonade for riders." />
                <ParamRow label="APPROACH" value="Category ownership over category competition" />
                <ParamRow label="TRADE-OFF" value="Sacrificed broad appeal for cultural depth" />
                <ParamRow label="AUDIENCE" value="Outdoor adventure community, primarily MTB" />
                <ParamRow label="VISUAL DIRECTION" value="Bold, bright, energetic — anti-neutral" />
                <ParamRow label="CULTURAL HOOK" value="Insider perspective. Jackson rides. Ezra rides." />
              </div>
            </div>
          </div>
          <Rule />
        </div>

        {/* ── CUSTOMER PERSONA ── */}
        <div ref={s4}>
          <MetaRow>
            <span className="meta-label anim">02 — TARGET CUSTOMER</span>
            <span className="meta-label meta-label--faint anim">PERSONA PROFILE / CON-001</span>
          </MetaRow>
          <Rule />

          <div style={{ padding: '4px 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 11vw, 160px)' }}>MEET CONNOR.</span>
          </div>
          <Rule />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="ts-2col">
            <div style={{ padding: '32px 40px 32px 0', borderRight: '1px solid var(--rule)' }}>
              <p className="body anim" style={{ marginBottom: '16px' }}>
                Connor is 18. He rides mountain bikes. He knows the difference between a hardtail and a full-suspension, he has an opinion on geometry, and he's watched every Berm Peak video. He follows Greg Minnaar and Brandon Semenuk. He reads Pinkbike.
              </p>
              <p className="body anim" style={{ marginBottom: '16px' }}>
                His bike is a Specialized, Trek, or Santa Cruz — he saved for it. His gear is functional, not performative. He's not riding for clout, but he's definitely filming his lines.
              </p>
              <p className="body anim">
                His aspiration: a RedBull sponsorship. A clean backflip. 100k on Instagram. He's not there yet — but the brands he buys today are the brands he expects to see at that level. Trailside had to belong to that world from day one.
              </p>
            </div>
            <div style={{ padding: '32px 0 32px 40px' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '16px' }}>PERSONA DATA / CON-001</span>
              <Rule />
              <div style={{ paddingTop: '8px' }}>
                <ParamRow label="NAME" value="Connor" />
                <ParamRow label="AGE" value="18" />
                <ParamRow label="PRIMARY ACTIVITY" value="Mountain biking / trail riding" />
                <ParamRow label="FOLLOWS" value="Berm Peak, Pinkbike, Greg Minnaar, Brandon Semenuk" />
                <ParamRow label="RIDES" value="Specialized / Trek / Santa Cruz" />
                <ParamRow label="ASPIRES TO" value="RedBull sponsorship, backflip, 100k Instagram" />
                <ParamRow label="TRUST SIGNALS" value="Insider language, authentic rider culture, community endorsement" />
                <ParamRow label="RED FLAGS" value="Corporate tone, generic outdoor imagery, no rider credibility" />
              </div>
            </div>
          </div>
          <Rule />
        </div>

        {/* ── IDENTITY + DELIVERABLES ── */}
        <div ref={s5}>
          <MetaRow>
            <span className="meta-label anim">03 — THE IDENTITY</span>
            <span className="meta-label meta-label--faint anim">MADE FOR RIDERS</span>
          </MetaRow>
          <Rule />

          <div style={{ padding: '4px 0 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 11vw, 160px)' }}>BUILT TO BE</span>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 11vw, 160px)' }}>RECOGNIZED.</span>
          </div>
          <Rule />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="ts-2col">
            <div>
              <ImageSlot name="trailside-brand" height="480px" src={tsCan} altText="Trailside Outdoor Co. can label and visual identity design by Ezra Dom, Luminary Graphix" objectFit="cover" objectPosition="center center" />
            </div>
            <div style={{ borderLeft: '1px solid var(--rule)' }}>
              <div style={{ padding: '0 0 0 40px' }}>
                <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                  <p className="body anim" style={{ marginBottom: '0' }}>
                    Raspberry Red and Lemon Yellow. The palette was the first decision — deliberately loud, deliberately anti-category. While every other beverage on the shelf whispered "natural," Trailside shouted. The visual identity had to announce from across the room that this drink belongs to trail culture.
                  </p>
                </div>
                <Rule />
                <div style={{ paddingTop: '16px', paddingBottom: '20px' }}>
                  <span className="param-label" style={{ display: 'block', marginBottom: '12px' }}>DELIVERABLES</span>
                  {[
                    'Brand strategy + positioning',
                    'Logo + identity system',
                    'Can labels',
                    'Concentrate labels',
                    'Poster campaigns + flyers',
                    'Brand guidelines',
                  ].map((item, i) => (
                    <div key={i} className="anim" style={{ padding: '9px 0', borderBottom: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="param-value" style={{ fontSize: '11px' }}>{item}</span>
                      <span className="param-label" style={{ fontSize: '8px' }}>{String(i + 1).padStart(3, '0')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Rule />

          <div>
            <ImageSlot name="trailside-lifestyle" height="480px" src={tsLifestyle} altText="Trailside Outdoor Co. lifestyle photography — outdoor brand identity by Luminary Graphix" objectFit="cover" objectPosition="center 40%" />
          </div>
          <Rule />
        </div>

        {/* ── OUTCOMES ── */}
        <div ref={s6}>
          <MetaRow>
            <span className="meta-label anim">04 — THE OUTCOMES</span>
            <span className="meta-label meta-label--faint anim">MEASURED RESULTS</span>
          </MetaRow>
          <Rule />

          <div style={{ padding: '4px 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 10vw, 140px)' }}>THE BRAND IS</span>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 10vw, 140px)' }}>BIGGER THAN</span>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 10vw, 140px)' }}>THE DRINK.</span>
          </div>
          <Rule />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }} className="ts-3col">
            {[
              { label: 'DISTRIBUTION', value: '10-12', sub: 'Points of sale. Up from 4-5 restaurants at project start.' },
              { label: 'INSTAGRAM', value: '1,000+', sub: 'From zero. Organic community growth, no paid acquisition.' },
              { label: 'DEMAND', value: 'EXCEEDS SUPPLY', sub: 'Production cannot keep pace. Scaling underway.' },
            ].map((stat, i) => (
              <div key={i} style={{ padding: '28px', borderRight: i < 2 ? '1px solid var(--rule)' : 'none' }} className="anim">
                <span className="param-label" style={{ display: 'block', marginBottom: '8px' }}>{stat.label}</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 56px)', color: 'var(--ink)', lineHeight: 1, marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <p className="body body--sm">{stat.sub}</p>
              </div>
            ))}
          </div>
          <Rule />

          {/* Additional signals */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="ts-2col anim">
            <div style={{ padding: '28px 40px 28px 0', borderRight: '1px solid var(--rule)' }}>
              <span className="param-label" style={{ display: 'block', marginBottom: '12px' }}>COMMUNITY SIGNAL</span>
              <Rule />
              <p className="body body--sm" style={{ paddingTop: '16px' }}>
                MTB skills camps began approaching Trailside about partnerships. The brand had become recognizable within the riding community fast enough that event organizers saw it as an authentic fit — not a sponsor looking for exposure, but a brand that already belonged.
              </p>
            </div>
            <div style={{ padding: '28px 0 28px 40px' }}>
              <span className="param-label" style={{ display: 'block', marginBottom: '12px' }}>PRODUCT EXPANSION SIGNAL</span>
              <Rule />
              <p className="body body--sm" style={{ paddingTop: '16px' }}>
                Customers began requesting energy drinks and electrolytes unprompted. The brand had built enough trust and cultural identity that the community was ready to follow it into adjacent categories — a signal that the positioning had landed.
              </p>
            </div>
          </div>
          <Rule />

          {/* Testimonial */}
          <div style={{ padding: '40px 0', maxWidth: '720px' }} className="anim">
            <span className="param-label" style={{ display: 'block', marginBottom: '16px' }}>CLIENT TESTIMONY / TST-002</span>
            <Rule />
            <p className="body" style={{ fontStyle: 'italic', paddingTop: '20px', marginBottom: '16px' }}>
              "Working with Luminary Graphix has been nothing but top tier professionalism, and creativity. Ezra designed our logo, label, and branding and his attention to detail as well as implementing creative feedback was top notch. His designs not only look sick but also feel authentic to the brand — something that's hard to find in a designer. Ezra knows how to take an idea and turn it into something that stands out."
            </p>
            <span className="param-label">JACKSON / FOUNDER, TRAILSIDE OUTDOOR CO.</span>
          </div>
          <Rule />
        </div>

        {/* ── MY THOUGHTS ── */}
        <div ref={s7}>
          <MetaRow>
            <span className="meta-label anim">05 — MY THOUGHTS</span>
            <span className="meta-label meta-label--faint anim">DESIGNER REFLECTION</span>
          </MetaRow>
          <Rule />

          <div style={{ padding: '4px 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 10vw, 140px)' }}>WHAT I LEARNED.</span>
          </div>
          <Rule />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="ts-2col">
            <div style={{ padding: '32px 40px 32px 0', borderRight: '1px solid var(--rule)' }}>
              <p className="body anim" style={{ marginBottom: '16px' }}>
                This was a personal project in the real sense — Jackson and I grew up riding the same trails. I had genuine insider knowledge of the culture I was designing for, and that mattered. I wasn't researching an audience from the outside. I was part of it.
              </p>
              <p className="body anim" style={{ marginBottom: '16px' }}>
                That connection shaped the work in ways a brief couldn't have. The palette, the tone, the specific cultural references — they came from lived experience, not a mood board. The brand feels authentic because it is.
              </p>
              <p className="body anim">
                If I could do it again, I would have formalized the research earlier and built a stronger distribution strategy from the start. The brand outgrew its infrastructure. That's a good problem, but a solvable one with better planning.
              </p>
            </div>
            <div style={{ padding: '32px 0 32px 40px' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '16px' }}>KEY LEARNINGS</span>
              <Rule />
              <div style={{ paddingTop: '8px' }}>
                <ParamRow
                  label="INSIDER ADVANTAGE"
                  value="Cultural authenticity isn't manufactured. Growing up in the culture I was designing for gave the brand a credibility that couldn't be faked."
                />
                <ParamRow
                  label="FORMALIZE EARLY"
                  value="I would have documented the customer research more formally from the start. The insights were real — they just lived in my head instead of a brief."
                />
                <ParamRow
                  label="DISTRIBUTION STRATEGY"
                  value="Brand success outpaced operational capacity. Next time: build the distribution plan in parallel with the brand, not after."
                />
                <ParamRow
                  label="STRONGER GUIDELINES"
                  value="As the brand expanded to new touchpoints, tighter guidelines from the beginning would have maintained consistency without back-and-forth."
                />
              </div>
            </div>
          </div>
          <Rule />

          {/* Footer nav */}
          <div className="meta-row anim" style={{ padding: '12px 0 20px' }}>
            <BackBtn navigate={navigate} />
            <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
            <span className="meta-label meta-label--faint">SRB TL–02</span>
          </div>
          <Rule />
          <div style={{ height: '40px' }} />
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .ts-2col { grid-template-columns: 1fr !important; }
          .ts-2col > div { border-right: none !important; border-left: none !important; padding-left: 0 !important; padding-right: 0 !important; }
          .ts-2col > div + div { border-top: 1px solid var(--rule); }
          .ts-3col { grid-template-columns: 1fr !important; }
          .ts-3col > div { border-right: none !important; border-bottom: 1px solid var(--rule); min-width: 0; }
          .ts-2col > div { min-width: 0; }
          .display-line { white-space: normal !important; word-break: break-word !important; }
          .body, .param-value, .param-label { overflow-wrap: break-word !important; word-break: break-word !important; }
        }
      `}</style>
    </div>
  )
}
