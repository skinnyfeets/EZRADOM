import { useRef, useEffect } from 'react'
import { typewriterIn } from '../../utils/typewriter.js'
import ImageSlot from '../ImageSlot.jsx'
import { usePage } from '../../context/PageContext.jsx'
import scHero from '../../assets/images/sc-lifestyle-lake.jpg'
import scBrand from '../../assets/images/sc-inside-sauna.jpg'
import scLifestyle from '../../assets/images/sc-founders-trailer.jpg'

function animateIn(el) {
  return typewriterIn(el, { trigger: el, start: 'top 84%', once: true })
}

function Rule() { return <div className="rule" /> }

function MetaRow({ children }) {
  return <div className="meta-row">{children}</div>
}

function ParamRow({ label, value }) {
  return (
    <div style={{ padding: '11px 0', borderBottom: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: '160px 1fr', gap: '16px' }}>
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

export default function SweatCulturePage() {
  const { navigate } = usePage()
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    window.scrollTo(0, 0)
    refs.forEach(r => { if (r.current) animateIn(r.current) })
  }, [])

  return (
    <div style={{ paddingTop: '60px' }}>
      <div className="wrap">

        {/* ── 01 HEADER ── */}
        <div ref={refs[0]}>
          <Rule />
          <MetaRow>
            <BackBtn navigate={navigate} />
            <span className="meta-label meta-label--faint">SWEAT CULTURE / CASE STUDY</span>
            <span className="meta-label meta-label--faint">PEACHLAND, BC / WWW.SWEATCULTURE.CA</span>
          </MetaRow>
          <Rule />
          <div style={{ padding: '4px 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(64px, 17vw, 240px)' }}>SWEAT</span>
            <span className="display-line anim" style={{ fontSize: 'clamp(64px, 17vw, 240px)' }}>CULTURE.</span>
          </div>
          <Rule />
          <MetaRow>
            <span className="meta-label anim">BRAND STRATEGY + IDENTITY + CAMPAIGNS + ADVISORY</span>
            <span className="meta-label meta-label--faint anim">2023 — ONGOING</span>
          </MetaRow>
          <Rule />
          <div style={{ padding: '14px 0 6px' }}>
            <span className="anim" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 52px)', color: 'var(--ink-dim)', letterSpacing: '0.03em' }}>
              FIND YOUR PEOPLE.
            </span>
          </div>
          <Rule />
        </div>

        {/* ── 02 HERO IMAGE + BRIEF ── */}
        <div ref={refs[1]}>
          <div><ImageSlot name="sweatculture-hero" height="560px" src={scHero} altText="Sweat Culture brand identity — hero photography by Luminary Graphix, brand strategist Ezra Dom" objectFit="cover" objectPosition="center 30%" /></div>
          <Rule />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="sc-2col">
            <div style={{ padding: '32px 40px 32px 0', borderRight: '1px solid var(--rule)' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '16px' }}>THE BRIEF</span>
              <Rule />
              <div style={{ paddingTop: '16px' }}>
                <p className="body anim" style={{ marginBottom: '16px' }}>
                  Sweat Culture started in Peachland, BC — an outdoor sauna and cold plunge experience built around community, adventure, and shared transformation. Founders Braden and Nina didn't want to run a spa. They wanted to start a movement.
                </p>
                <p className="body anim" style={{ marginBottom: '16px' }}>
                  I came in at inception and have stayed through identity, launch, campaigns, and ongoing advisory. The goal was never just a visual identity — it was to build a brand foundation strong enough to carry a movement. One that people could see themselves in before they ever walked through the door.
                </p>
                <p className="body anim">
                  The core strategic insight: the transformation isn't something Sweat Culture does to people. It's something the brand reflects back at them. When someone sees the fire, the beach, the people around the pit — they don't think "that looks cool." They think "that looks like me. The me I meant to be."
                </p>
              </div>
            </div>
            <div style={{ padding: '32px 0 32px 40px' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '16px' }}>PROJECT PARAMETERS</span>
              <Rule />
              <div style={{ paddingTop: '8px' }}>
                <ParamRow label="CLIENT" value="Sweat Culture / Braden + Nina" />
                <ParamRow label="LOCATION" value="Peachland, BC, Canada" />
                <ParamRow label="TIMELINE" value="2023 — Ongoing" />
                <ParamRow label="SCOPE" value="Brand Strategy / Identity / Campaign Direction / Ongoing Advisory" />
                <ParamRow label="ARCHETYPES" value="The Everyman + The Explorer" />
                <ParamRow label="CATEGORY" value="Outdoor Wellness / Community Experience" />
                <ParamRow label="WEBSITE" value="www.sweatculture.ca" />
              </div>
            </div>
          </div>
          <Rule />
        </div>

        {/* ── 03 STRATEGY ── */}
        <div ref={refs[2]}>
          <MetaRow>
            <span className="meta-label anim">THE STRATEGY</span>
            <span className="meta-label meta-label--faint anim">SECTION 02</span>
          </MetaRow>
          <Rule />
          <div style={{ padding: '4px 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 11vw, 160px)' }}>NOT JUST A SAUNA.</span>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 11vw, 160px)' }}>AN ADVENTURE MOVEMENT.</span>
          </div>
          <Rule />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="sc-2col">
            <div style={{ padding: '32px 40px 32px 0', borderRight: '1px solid var(--rule)' }}>
              <p className="body anim" style={{ marginBottom: '16px' }}>
                Sweat Culture was never pitched as a sauna business. A sauna is an amenity. What Braden and Nina were building was an adventure movement — a place where ordinary people go to do something hard, feel something real, and find a community that makes them want to come back.
              </p>
              <p className="body anim" style={{ marginBottom: '16px' }}>
                The entire strategy was built on one core truth: every person we identified was already carrying the adventurer identity inside them. They just hadn't acted on it yet. The brand doesn't convince anyone. It reflects back who they already are — clearly enough that they finally move.
              </p>
              <p className="body anim" style={{ marginBottom: '16px' }}>
                I anchored the identity in two archetypes: the Everyman and the Explorer. Everyman keeps it accessible — you don't need to be an athlete, you just need to show up. Explorer gives it aspiration and forward momentum. The tension between the two is exactly where the brand lives.
              </p>
              <p className="body anim">
                The voice was built to be grounded, honest, and warm — never performative. The message stayed at three words: Find your people. Simple enough to repeat. Deep enough to mean something different to every person who hears it. And flexible enough to travel far beyond Peachland.
              </p>
            </div>
            <div style={{ padding: '32px 0 32px 40px' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '16px' }}>BRAND FRAMEWORK</span>
              <Rule />
              <div style={{ paddingTop: '8px' }}>
                <ParamRow label="PRIMARY ARCHETYPE" value="The Everyman — accessible, grounded, community-first" />
                <ParamRow label="SECONDARY ARCHETYPE" value="The Explorer — adventurous, forward-moving, aspirational" />
                <ParamRow label="BRAND VOICE" value="Grounded, honest, warm. Not performative. Never salesy." />
                <ParamRow label="CORE MESSAGE" value="Find your people." />
                <ParamRow label="POSITIONING" value="Not just a sauna. An adventure movement for people who want to feel alive and find their people." />
                <ParamRow label="TRANSFORMATION FRAME" value="The brand is a mirror. People don't get convinced — they recognise themselves." />
                <ParamRow label="SCALE DESIGN" value="Identity built to carry multiple locations and product lines without drift." />
              </div>
            </div>
          </div>
          <Rule />
        </div>

        {/* ── 04 THE AUDIENCE ── */}
        <div ref={refs[3]}>
          <MetaRow>
            <span className="meta-label anim">THE AUDIENCE</span>
            <span className="meta-label meta-label--faint anim">SECTION 03</span>
          </MetaRow>
          <Rule />
          <div style={{ padding: '4px 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 10vw, 140px)' }}>SIX AUDIENCES.</span>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 10vw, 140px)' }}>ONE ADVENTURER.</span>
          </div>
          <Rule />
          <div style={{ padding: '24px 0 8px', maxWidth: '720px' }}>
            <p className="body anim">
              Six distinct audience personas — each carrying the adventurer identity inside, each waiting for a story that reflects it back clearly enough to act on. The brand was built to speak to all of them simultaneously without diluting its message for any of them.
            </p>
          </div>
          <Rule />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }} className="sc-3col">
            {[
              {
                name: 'SARAH',
                tag: 'The Performer Who\'s Ready to Actually Feel It',
                story: 'She saves cold plunge content because it feels like her — the her she\'s been meaning to become. When she sees real women, Peachland beach, wood smoke, laughing in towels by the lake, she doesn\'t see a brand. She sees herself already there.',
                transform: 'Walks in performing the adventurer. Walks out being one.',
              },
              {
                name: 'MICHELLE',
                tag: 'The Woman Who Remembers Who She Was',
                story: 'Somewhere between the career and the kids and the invisible labour of holding everything together, that version of herself went quiet. Sweat Culture doesn\'t tell her to try something new. It tells her she never stopped being her.',
                transform: 'Walks in going through the motions. Walks out knowing she\'s still capable of choosing herself.',
              },
              {
                name: 'LINDA',
                tag: 'The Woman Who\'s Just Getting Started',
                story: 'Post-menopause, empty nest, calendar suddenly hers. Most stories for this chapter are about acceptance and slowing down. Linda doesn\'t want to embrace the transition. She wants to do something. The brand gives her permission.',
                transform: 'Walks in anchorless. Walks out as someone who just surprised herself.',
              },
              {
                name: 'TYLER',
                tag: 'The Guy Who\'s Been Meaning To',
                story: 'He has consumed every piece of content on heat exposure and cold therapy. He is sold on the identity. He has done zero sessions. When he sees a crew of guys on a beach, fire going, lake waiting — he screenshots it. He sends it to the group chat.',
                transform: 'Walks in the guy who watches. Walks out the guy who went.',
              },
              {
                name: 'DAVE',
                tag: 'The Athlete Who Never Actually Left',
                story: 'The athlete identity didn\'t die — it went quiet while life got louder. The heat, the physical endurance, the cold lake, the earned quiet afterward — that\'s his language. The brand tells him: that part of you never left. It\'s been waiting for the right door.',
                transform: 'Walks in the former athlete. Walks out casting votes for the man he\'s still becoming.',
              },
              {
                name: 'GARY',
                tag: 'The Man Who Needs a Place to Be',
                story: 'Retired and discovered that without the title, the desk, the reason to be somewhere at 9am, he doesn\'t quite know who he is. When he sees regulars around a fire, a place with its own rhythm and ritual — he doesn\'t see a sauna. He sees his third place.',
                transform: 'Walks in without a title. Walks out as a regular. That\'s enough.',
              },
            ].map((p, i) => (
              <div key={i} style={{ padding: '28px 24px 28px 0', borderRight: i % 3 < 2 ? '1px solid var(--rule)' : 'none', borderBottom: '1px solid var(--rule)' }} className="anim">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 30px)', color: 'var(--ink)', letterSpacing: '0.02em', marginBottom: '4px' }}>{p.name}</div>
                <span className="param-label" style={{ display: 'block', marginBottom: '14px', color: 'var(--ink-faint)', fontStyle: 'italic' }}>{p.tag}</span>
                <Rule />
                <p className="body body--sm" style={{ paddingTop: '12px', marginBottom: '16px' }}>{p.story}</p>
                <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '10px' }}>
                  <p className="body body--sm" style={{ fontStyle: 'italic', color: 'var(--ink-faint)' }}>{p.transform}</p>
                </div>
              </div>
            ))}
          </div>
          <Rule />
        </div>

        {/* ── 05 IDENTITY + DELIVERABLES ── */}
        <div ref={refs[4]}>
          <MetaRow>
            <span className="meta-label anim">THE IDENTITY</span>
            <span className="meta-label meta-label--faint anim">SECTION 04</span>
          </MetaRow>
          <Rule />
          <div style={{ padding: '4px 0 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 11vw, 160px)' }}>SHOW UP FOR IT.</span>
          </div>
          <Rule />
          <div><ImageSlot name="sweatculture-brand" height="520px" src={scBrand} altText="Sweat Culture visual identity and brand design system by Ezra Dom, Luminary Graphix" objectFit="cover" objectPosition="center center" /></div>
          <Rule />
          <div style={{ paddingTop: '20px', paddingBottom: '16px' }}>
            <span className="param-label">DELIVERABLES</span>
          </div>
          <Rule />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }} className="sc-deliverables">
            {[
              'Brand archetypes + positioning',
              'Visual identity system',
              'Brand guidelines',
              'Photography direction',
              'Poster campaigns',
              'Merch design',
              'Sauna logos',
              'Business cards',
              'Road signage',
              'Facebook community content (50,000+ views)',
              'Ongoing marketing advisory',
            ].map((item, i) => (
              <div key={i} style={{ padding: '9px 16px 9px 0', borderBottom: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: 0 }}>
                <span className="param-value" style={{ fontSize: '11px', minWidth: 0, wordBreak: 'break-word', paddingRight: '8px' }}>{item}</span>
                <span className="param-label" style={{ fontSize: '8px', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
          <Rule />
          <div><ImageSlot name="sweatculture-lifestyle" height="480px" src={scLifestyle} altText="Sweat Culture lifestyle brand photography — brand strategy and identity creation by Luminary Graphix" objectFit="cover" objectPosition="center 40%" /></div>
          <Rule />
        </div>

        {/* ── 06 OUTCOMES ── */}
        <div ref={refs[5]}>
          <MetaRow>
            <span className="meta-label anim">THE PROOF</span>
            <span className="meta-label meta-label--faint anim">SECTION 05</span>
          </MetaRow>
          <Rule />
          <div style={{ padding: '4px 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 10vw, 140px)' }}>PEOPLE KEEP</span>
            <span className="display-line anim" style={{ fontSize: 'clamp(48px, 10vw, 140px)' }}>COMING BACK.</span>
          </div>
          <Rule />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }} className="sc-3col">
            {[
              {
                label: 'VISITORS IN 4 MONTHS',
                value: '2,000+',
                sub: 'Braden and Nina projected 100 in month one. Actual came in at 350. By month four, total visitors had crossed 2,000.',
              },
              {
                label: 'REPEAT BOOKING RATE',
                value: '40%',
                sub: 'Four in ten bookings are repeat customers — guests who came once and chose to come back. That\'s not a product metric. That\'s a community signal.',
              },
              {
                label: 'REVENUE / FIRST 4 MONTHS',
                value: '$35,000+',
                sub: 'Generated in the first four months of operation — before any paid advertising. Built entirely on word of mouth, organic content, and a brand people wanted to talk about.',
              },
            ].map((stat, i) => (
              <div key={i} style={{ padding: '28px', borderRight: i < 2 ? '1px solid var(--rule)' : 'none' }} className="anim">
                <span className="param-label" style={{ display: 'block', marginBottom: '8px' }}>{stat.label}</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 64px)', color: 'var(--ink)', lineHeight: 1, marginBottom: '8px' }}>{stat.value}</div>
                <p className="body body--sm">{stat.sub}</p>
              </div>
            ))}
          </div>
          <Rule />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="sc-2col">
            <div style={{ padding: '28px 40px 28px 0', borderRight: '1px solid var(--rule)' }} className="anim">
              <span className="param-label" style={{ display: 'block', marginBottom: '12px' }}>COMMUNITY SIGNAL</span>
              <Rule />
              <p className="body" style={{ paddingTop: '16px' }}>
                The cultural response has accelerated growth. Guests regularly share their experiences on Instagram and TikTok, inviting others to the beachside sauna. The city has expressed support due to the wellness focus and tourism potential. Members bring homemade food and coffee to the founders as a gesture of thanks — unprompted. No ad spend. No influencer partnerships. Just a brand people wanted to talk about.
              </p>
            </div>
            <div style={{ padding: '28px 0 28px 40px' }} className="anim">
              <span className="param-label" style={{ display: 'block', marginBottom: '12px' }}>TESTIMONY / TST-001</span>
              <Rule />
              <p className="body" style={{ paddingTop: '16px', fontStyle: 'italic', marginBottom: '12px' }}>
                "We had the pleasure of working with Ezra from Luminary Graphix on the branding and logo design for our new athletics and sauna company, Sweat Culture. Ezra has a well defined creative process, and we're thrilled with the designs, colour schemes, photography style, and fonts he put together for us. He helped shape our brand into something that stands out, with its own voice and personality."
              </p>
              <span className="param-label">NINA / CO-FOUNDER, SWEAT CULTURE</span>
            </div>
          </div>
          <Rule />
        </div>

        {/* ── 07 MY THOUGHTS ── */}
        <div ref={refs[6]}>
          <MetaRow>
            <span className="meta-label anim">MY THOUGHTS</span>
            <span className="meta-label meta-label--faint anim">SECTION 06</span>
          </MetaRow>
          <Rule />
          <div style={{ padding: '4px 0' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(40px, 8vw, 110px)' }}>BUILT TO SCALE.</span>
          </div>
          <Rule />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="sc-2col">
            <div style={{ padding: '32px 40px 32px 0', borderRight: '1px solid var(--rule)' }} className="anim">
              <p className="body" style={{ marginBottom: '16px' }}>
                The thing I'm most proud of with Sweat Culture isn't the numbers — it's the architecture underneath them. We built a brand foundation that can carry six different audiences, across multiple locations, without ever changing what the brand fundamentally is.
              </p>
              <p className="body" style={{ marginBottom: '16px' }}>
                The transformation story framework was the key. Instead of targeting a narrow demographic or building around a single customer avatar, we identified the shared psychological gap across all six personas — the adventurer identity they already carry but haven't yet acted on. The brand doesn't convince anyone. It reflects. When the right person sees Sweat Culture, they don't think "that looks interesting." They think "that looks like me."
              </p>
              <p className="body">
                That's why the brand can scale. The Everyman + Explorer archetype tension holds as you add locations, product lines, events, and merch. "Find your people" still works at 10 locations. The visual language travels. The voice is distinct enough to be recognisable and flexible enough to grow. We didn't just build a brand for Peachland — we built a platform for a movement.
              </p>
            </div>
            <div style={{ padding: '32px 0 32px 40px' }} className="anim">
              <span className="param-label" style={{ display: 'block', marginBottom: '12px' }}>SCALE ARCHITECTURE</span>
              <Rule />
              <div style={{ paddingTop: '8px' }}>
                <ParamRow label="FOUNDATION" value="Transformation story framework — six audiences, one shared gap, one mirror." />
                <ParamRow label="VOICE SYSTEM" value="Grounded, honest, warm. Travels across formats and locations without drift." />
                <ParamRow label="ARCHETYPE TENSION" value="Everyman + Explorer. Accessible enough for anyone. Aspirational enough to pull." />
                <ParamRow label="MESSAGE" value="Find your people. Three words that scale infinitely." />
                <ParamRow label="SCALE SIGNAL" value="40% repeat rate at one location. Imagine what that means at five." />
              </div>
            </div>
          </div>
          <Rule />
          <div className="meta-row anim" style={{ padding: '12px 0 20px' }}>
            <BackBtn navigate={navigate} />
            <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
            <span className="meta-label meta-label--faint">SRB SC–01</span>
          </div>
          <Rule />
          <div style={{ height: '40px' }} />
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .sc-2col { grid-template-columns: 1fr !important; }
          .sc-2col > div { border-right: none !important; border-left: none !important; padding-left: 0 !important; padding-right: 0 !important; min-width: 0; }
          .sc-2col > div + div { border-top: 1px solid var(--rule); padding-top: 28px; }
          .sc-3col { grid-template-columns: 1fr !important; }
          .sc-3col > div { border-right: none !important; border-bottom: 1px solid var(--rule); min-width: 0; }
          .sc-deliverables { grid-template-columns: 1fr !important; }
          .sc-deliverables > div { padding-right: 0 !important; min-width: 0; }
          .display-line { white-space: normal !important; word-break: break-word !important; }
          .body, .param-value, .param-label { overflow-wrap: break-word !important; word-break: break-word !important; }
        }
      `}</style>
    </div>
  )
}
