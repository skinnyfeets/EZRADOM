import { useRef, useEffect } from 'react'
import { typewriterIn } from '../../utils/typewriter.js'
import { usePage } from '../../context/PageContext.jsx'

import imgHero      from '../../assets/images/ezra-emergency-exit.jpg'
import imgProfile   from '../../assets/images/ezra-profile.jpg'
import imgPhone     from '../../assets/images/ezra-phone-shot.jpg'
import imgShoes     from '../../assets/images/ezra-shoes.jpg'
import imgCity      from '../../assets/images/ezra-city.jpg'
import imgCamera    from '../../assets/images/ezra-camera.jpg'

const CREDENTIALS = [
  { label: 'FULL NAME', value: 'EZRA DOMBOWSKY' },
  { label: 'KNOWN AS',  value: 'EZRA DOM / EZRADOM' },
  { label: 'LOCATION',  value: 'KELOWNA, BC, CANADA' },
  { label: 'STUDIO',    value: 'LUMINARY GRAPHIX, BRAND CAMPAIGN STUDIO, FOUNDER' },
  { label: 'STARTED',   value: 'GRAPHIC DESIGN 2022 / BRANDING CLIENTS 2023' },
  { label: 'SCOPE',     value: '10+ BRANDS BUILT / 20+ LOGO + DESIGN PROJECTS' },
  { label: 'CLIENT 01', value: 'SWEAT CULTURE, BRAND STRATEGY + IDENTITY + ADVISORY' },
  { label: 'CLIENT 02', value: 'TRAILSIDE OUTDOOR CO., BRAND STRATEGY + IDENTITY' },
  { label: 'NEXT',      value: 'IED MILANO, MASTERS IN BRAND STRATEGY + MANAGEMENT, NOV 2026' },
  { label: 'PARTNER',   value: 'LANDOR & FITCH (IED PROGRAM PARTNER)' },
  { label: 'SOCIAL',    value: '@ITSEZRADOM' },
]

export default function AboutPage() {
  const ref = useRef(null)
  const { navigate } = usePage()

  useEffect(() => {
    if (!ref.current) return
    const tl = typewriterIn(ref.current)
    return () => tl.kill()
  }, [])

  return (
    <main style={{ paddingTop: '60px' }} ref={ref}>
      <section>
        <div className="wrap">

          {/* ── HEADER ── */}
          <div className="rule anim" />
          <div className="meta-row anim">
            <span className="meta-label">ABOUT</span>
            <span className="meta-label meta-label--faint">EZRA DOMBOWSKY / EZRADOM</span>
            <span className="meta-label meta-label--faint">KELOWNA, BC</span>
          </div>
          <div className="rule anim" />

          <div style={{ padding: '4px 0', overflow: 'hidden' }}>
            <span className="display-line anim" style={{ fontSize: 'clamp(52px, 10vw, 148px)', whiteSpace: 'nowrap' }}>EZRA DOM.</span>
          </div>
          <div className="rule anim" />

          <div className="meta-row anim" style={{ padding: '10px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span className="meta-label meta-label--faint">BRAND STRATEGIST / IDENTITY DESIGNER / FOUNDER, LUMINARY GRAPHIX</span>
              <span className="meta-label meta-label--faint">SELF-TAUGHT / KELOWNA BC / IED MILANO 2026</span>
            </div>
            <button
              onClick={() => navigate('home')}
              style={{
                fontFamily: 'var(--font-label)', fontSize: '10px', textTransform: 'uppercase',
                letterSpacing: '0.22em', color: 'var(--ink)', background: 'transparent',
                border: '1px solid var(--rule-strong)', padding: '10px 20px', cursor: 'pointer',
                transition: 'opacity 0.2s ease', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              ← BACK
            </button>
          </div>
          <div className="rule anim" />

          {/* ── HERO IMAGE ── */}
          <div className="anim about-hero-wrap">
            <img
              src={imgHero}
              alt="Ezra Dom (Ezra Dombowsky), brand strategist and founder of Luminary Graphix, sitting against an emergency exit door in Kelowna BC"
              className="about-hero-img"
              style={{ display: 'block' }}
            />
          </div>
          <div className="rule anim" />

          {/* ── OPENING STATEMENT ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="about-intro-grid">
            <div style={{ padding: '40px 48px 40px 0', borderRight: '1px solid var(--rule)' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '20px' }}>IN MY OWN WORDS</span>
              <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '24px' }} />
              <p className="body anim" style={{ marginBottom: '20px', fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.7 }}>
                I've been thinking about business since I was five years old, selling handmade birthday cards at the end of my driveway for fifty cents each. That never really stopped.
              </p>
              <p className="body anim" style={{ marginBottom: '20px' }}>
                I'm a brand strategist and designer based in Kelowna, BC, founder of Luminary Graphix, and someone who spent the last four years building a real body of work without a traditional degree to lean on.
              </p>
              <p className="body anim" style={{ marginBottom: '20px' }}>
                I taught myself design in 2022, took on my first branding clients in 2023, and somewhere in between learned that the thing I actually love isn't the logo or the colour palette. It's the strategy underneath it. The positioning. The story. The reason someone chooses one brand over another and then tells their friends about it.
              </p>
              <p className="body anim" style={{ marginBottom: 0 }}>
                I started in graphic design. Learned the craft, got good at it, and pretty quickly realized I was in the wrong conversation. Clients weren't asking for beautiful work. They were asking for work that <em>did something</em>. That distinction changed everything.
              </p>
            </div>

            <div style={{ padding: '40px 0 40px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
              <div style={{ width: '100%', height: '420px', overflow: 'hidden' }}>
                <img
                  src={imgProfile}
                  alt="Ezra Dombowsky (Ezra Dom), young brand strategist, Kelowna BC — profile portrait"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block' }}
                />
              </div>
            </div>
          </div>
          <div className="rule anim" />

          {/* ── THE WORK ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 0 }} className="about-work-grid">
            <div style={{ borderRight: '1px solid var(--rule)', padding: '40px 32px 40px 0' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '8px' }}>THE WORK</span>
              <span className="param-label anim" style={{ color: 'var(--ink-faint)' }}>2022 / PRESENT</span>
            </div>
            <div style={{ padding: '40px 0 40px 40px' }}>
              <p className="body anim" style={{ marginBottom: '20px' }}>
                By 2023 I was doing branding projects for real businesses. Not just logos. Strategy. Positioning. Figuring out what a brand actually stands for before anyone opens Illustrator. I built Luminary, a brand studio focused on founder-led businesses, and started doing the kind of work where the thinking matters as much as the execution.
              </p>
              <p className="body anim" style={{ marginBottom: '20px' }}>
                I've since built 10+ brands and worked on 20+ logo and design projects. That includes building Sweat Culture from the ground up: archetypes, positioning, visual identity, and ongoing advisory, and developing the brand identity for Trailside Outdoor Co., a craft outdoor drinks brand.
              </p>
              <p className="body anim" style={{ marginBottom: 0 }}>
                Every project starts with the same question: what does this brand need to <em>mean</em> to someone? The visual executes that answer. Not the other way around.
              </p>
            </div>
          </div>
          <div className="rule anim" />

          {/* ── PHONE SHOT ── */}
          <div className="anim" style={{ width: '100%', height: 'clamp(380px, 62vw, 640px)', overflow: 'hidden' }}>
            <img
              src={imgPhone}
              alt="Ezra Dom holding up a phone showing a photo of himself, brand strategist and creative director, Kelowna BC"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
            />
          </div>
          <div className="rule anim" />

          {/* ── THE PROCESS ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="about-process-grid">
            <div style={{ padding: '40px 48px 40px 0', borderRight: '1px solid var(--rule)' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '20px' }}>THE PROCESS</span>
              <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '24px' }} />
              <p className="body anim" style={{ marginBottom: '20px' }}>
                My process is a little unconventional. It starts with pencil and paper, sticky notes, journals, sometimes a song that sets the emotional tone for the whole project, and only reaches the computer once the thinking is already there.
              </p>
              <p className="body anim" style={{ marginBottom: '20px' }}>
                I believe different is better than better. The strongest brands aren't competing on features. They're giving people a way to see themselves. Everything I build starts with story, psychology, and archetypes. The visuals follow.
              </p>
              <p className="body anim" style={{ marginBottom: 0 }}>
                Branding is transformation. Not aesthetics. Not logos. It's about helping people understand who they can become through association with a brand.
              </p>
            </div>

            <div style={{ padding: '40px 0 40px 40px' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '16px' }}>WHAT I BUILD FROM</span>
              <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '0' }} />
              {[
                'Jungian archetypes + brand psychology',
                "Marty Neumeier's positioning frameworks",
                'The Onliness Statement',
                'Story structure + narrative identity',
                'Pencil, paper, and thinking first',
                'The belief that different beats better',
              ].map((item, i) => (
                <div key={i} className="anim" style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: '28px 1fr', gap: '12px', alignItems: 'baseline' }}>
                  <span className="param-label" style={{ fontSize: '8px' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="param-value" style={{ fontSize: '11px', lineHeight: 1.5, wordBreak: 'break-word', minWidth: 0 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rule anim" />

          {/* ── SHOES + QUOTE ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="about-shoes-grid">
            <div style={{ height: 'clamp(280px, 40vw, 460px)', overflow: 'hidden' }}>
              <img
                src={imgShoes}
                alt="Worn Nike Air Force 1s, Ezra Dom brand strategist and creative, Kelowna BC"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
              />
            </div>
            <div style={{ borderLeft: '1px solid var(--rule)', padding: '40px 0 40px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '24px' }}>THE STANDARD</span>
              <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '28px' }} />
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(20px, 3vw, 42px)',
                color: 'var(--ink)',
                letterSpacing: '0.02em',
                lineHeight: 1.05,
                marginBottom: '28px',
                textAlign: 'left',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                maxWidth: '100%',
              }} className="anim">
                "DIFFERENT IS BETTER THAN BETTER. EVERY TIME."
              </p>
              <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '20px' }} />
              <p className="body body--sm anim">
                I want to be the kind of person people trust and listen to, not because of my visual eye, but because of my judgement. That's the difference between a designer and a strategist. Anyone can make something look good. Not everyone can tell you why it needs to exist.
              </p>
            </div>
          </div>
          <div className="rule anim" />

          {/* ── MILAN ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="about-milan-grid">
            <div style={{ padding: '40px 48px 40px 0', borderRight: '1px solid var(--rule)' }}>
              <span className="param-label anim" style={{ display: 'block', marginBottom: '20px' }}>NOVEMBER 2026</span>
              <div style={{ height: '1px', background: 'var(--rule)', marginBottom: '24px' }} />
              <div style={{ padding: '4px 0 24px' }}>
                <span className="display-line anim" style={{ fontSize: 'clamp(36px, 6vw, 90px)', lineHeight: 0.9 }}>MILAN.</span>
              </div>
              <p className="body anim" style={{ marginBottom: '20px' }}>
                In November 2026, I'm moving to Milan to complete a Master's in Brand Strategy and Management at IED Milano, a program run in partnership with Landor & Fitch, one of the world's leading brand consultancies.
              </p>
              <p className="body anim" style={{ marginBottom: '20px' }}>
                I'm going because I'm proud of what I've built, and I'm not satisfied. I want to work on harder problems, with bigger brands, alongside people who push me.
              </p>
              <p className="body anim" style={{ marginBottom: 0 }}>
                I'm documenting the whole thing in real time: the thinking, the systems, the mistakes, and the wins. If you're a designer who feels like execution alone won't be enough for much longer, you're right. This is for you.
              </p>
            </div>

            <div style={{ padding: '40px 0 40px 40px' }}>
              <div style={{ height: '100%', minHeight: '400px', overflow: 'hidden' }}>
                <img
                  src={imgCamera}
                  alt="Sony camera screen showing Ezra Dombowsky (Ezra Dom), documenting the brand strategy journey, Kelowna BC"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
                />
              </div>
            </div>
          </div>
          <div className="rule anim" />

          {/* ── CITY SHOT ── */}
          <div className="anim" style={{ width: '100%', height: 'clamp(320px, 50vw, 540px)', overflow: 'hidden' }}>
            <img
              src={imgCity}
              alt="Ezra Dom (Ezra Dombowsky), brand strategist, looking up at a city building, Kelowna BC Canada"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
            />
          </div>
          <div className="rule anim" />

          {/* ── CREDENTIALS ── */}
          <div className="anim" style={{ padding: '10px 0 4px' }}>
            <span className="meta-label">CREDENTIALS</span>
          </div>
          <div className="rule anim" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="about-creds-grid">
            <div style={{ borderRight: '1px solid var(--rule)', paddingRight: '40px' }}>
              {CREDENTIALS.slice(0, Math.ceil(CREDENTIALS.length / 2)).map((c, i) => (
                <div key={i} className="anim" style={{ padding: '12px 0', borderBottom: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: '90px 1fr', gap: '12px', alignItems: 'baseline' }}>
                  <span className="param-label" style={{ flexShrink: 0 }}>{c.label}</span>
                  <span className="param-value" style={{ fontSize: '9px', lineHeight: 1.6, wordBreak: 'break-word', overflowWrap: 'break-word', minWidth: 0 }}>{c.value}</span>
                </div>
              ))}
            </div>
            <div style={{ paddingLeft: '40px' }}>
              {CREDENTIALS.slice(Math.ceil(CREDENTIALS.length / 2)).map((c, i) => (
                <div key={i} className="anim" style={{ padding: '12px 0', borderBottom: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: '90px 1fr', gap: '12px', alignItems: 'baseline' }}>
                  <span className="param-label" style={{ flexShrink: 0 }}>{c.label}</span>
                  <span className="param-value" style={{ fontSize: '9px', lineHeight: 1.6, wordBreak: 'break-word', overflowWrap: 'break-word', minWidth: 0 }}>{c.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rule anim" />

          {/* ── CTA ── */}
          <div style={{
            background: 'var(--ink)',
            margin: '0 calc(-1 * var(--gutter))',
            padding: 'clamp(48px, 8vw, 88px) var(--gutter)',
          }}>
            <span className="anim" style={{ display: 'block', fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '12px' }}>
              YOUR BRAND IS YOUR REPUTATION
            </span>
            <div style={{ padding: '4px 0 36px' }}>
              <span className="display-line anim" style={{ fontSize: 'clamp(44px, 10vw, 140px)', color: 'var(--bg)', lineHeight: 0.9 }}>LET'S BUILD</span>
              <span className="display-line anim" style={{ fontSize: 'clamp(44px, 10vw, 140px)', color: 'var(--bg)', lineHeight: 0.9 }}>SOMETHING.</span>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('home')}
                style={{
                  fontFamily: 'var(--font-label)', fontSize: '10px', textTransform: 'uppercase',
                  letterSpacing: '0.22em', color: 'var(--ink)', background: 'var(--bg)',
                  border: 'none', padding: '14px 32px', cursor: 'pointer', transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                VIEW MY WORK →
              </button>
              <button
                onClick={() => {
                  navigate('home')
                  setTimeout(() => {
                    const el = document.querySelector('#contact')
                    if (el) window.__lenis ? window.__lenis.scrollTo(el, { offset: -60 }) : el.scrollIntoView({ behavior: 'smooth' })
                  }, 300)
                }}
                style={{
                  fontFamily: 'var(--font-label)', fontSize: '10px', textTransform: 'uppercase',
                  letterSpacing: '0.22em', color: 'rgba(255,255,255,0.65)', background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)', padding: '14px 32px', cursor: 'pointer', transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                GET IN TOUCH →
              </button>
            </div>
          </div>
          <div className="rule anim" />

          <div className="meta-row anim" style={{ padding: '8px 0 16px' }}>
            <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
            <span className="meta-label meta-label--faint">EZRADOM.COM / BRAND STRATEGY / KELOWNA BC / © 2026</span>
          </div>
          <div className="rule anim" />
          <div style={{ height: '40px' }} />

        </div>
      </section>

      <style>{`
        .about-hero-wrap { width: 100%; height: clamp(560px, 90vw, 920px); overflow: hidden; }
        .about-hero-img { width: 100%; height: 100%; object-fit: cover; object-position: center 10%; }
        @media (max-width: 768px) {
          .about-hero-wrap { height: auto; overflow: visible; }
          .about-hero-img { height: auto; object-fit: unset; }
        }
        @media (max-width: 860px) {
          .about-intro-grid,
          .about-process-grid,
          .about-milan-grid { grid-template-columns: 1fr !important; }
          .about-intro-grid > div:first-child,
          .about-process-grid > div:first-child,
          .about-milan-grid > div:first-child {
            padding-right: 0 !important; border-right: none !important;
            border-bottom: 1px solid var(--rule); padding-bottom: 32px;
          }
          .about-intro-grid > div:last-child,
          .about-process-grid > div:last-child,
          .about-milan-grid > div:last-child {
            padding-left: 0 !important; padding-top: 32px;
          }
        }
        @media (max-width: 720px) {
          .about-work-grid { grid-template-columns: 1fr !important; }
          .about-work-grid > div:first-child { border-right: none !important; padding-right: 0 !important; border-bottom: 1px solid var(--rule); padding-bottom: 16px; }
          .about-work-grid > div:last-child { padding-left: 0 !important; padding-top: 24px; }
          .about-shoes-grid { grid-template-columns: 1fr !important; }
          .about-shoes-grid > div:last-child { border-left: none !important; padding-left: 0 !important; padding-top: 32px; }
          .about-creds-grid { grid-template-columns: 1fr !important; }
          .about-creds-grid > div:first-child { border-right: none !important; padding-right: 0 !important; }
          .about-creds-grid > div:last-child { padding-left: 0 !important; }
        }
      `}</style>
    </main>
  )
}
