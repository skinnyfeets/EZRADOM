import { useRef, useEffect } from 'react'
import { typewriterIn } from '../../utils/typewriter.js'
import { usePage } from '../../context/PageContext.jsx'

export const BLOG_POSTS = [
  {
    id: 'blog-1',
    number: 'POST NO. 001',
    date: '2026-03-10',
    dateLabel: 'MAR 10, 2026',
    tags: ['BRANDING', 'STRATEGY', 'STARTUPS'],
    seoTitle: '5 Branding Mistakes Startup Founders Make (And How to Fix Them) | Ezra Dom',
    seoDescription: 'Most founders confuse a logo with a brand. These are the 5 biggest branding mistakes startup founders make — what a brand actually is, and the fixes that build real trust. Brand strategy by Ezra Dom.',
    title: '5 Branding Mistakes Startup Founders Make When Starting Out',
    displayTitle: ['5 BRANDING MISTAKES STARTUP', 'FOUNDERS MAKE WHEN STARTING OUT'],
    pageTitle: ['5 BRANDING MISTAKES STARTUP', 'FOUNDERS MAKE WHEN STARTING'],
    subtitle: 'And what you can do to fix them',
    intro: [
      "There's some common branding misconceptions in the entrepreneurship space and in this blog post we'll discuss the 5 biggest mistakes founders make with their branding.",
      "Many entrepreneurs believe that a professional logo and some consistent colours are all that a business needs to have a strong brand presence, but this couldn't be further from the truth.",
    ],
    items: [
      {
        number: 'MISTAKE 01',
        title: 'NOT UNDERSTANDING THE IMPORTANCE OF A BRAND',
        body: "Your brand is your reputation. It's what people say about you when you're not in the room. Branding is simply reputation management — it's shaping and protecting how people perceive you.",
        fix: 'Ask yourself, "How do I want people to describe my business after working with me?" Write it down and use it as your compass. Hint: It\'s probably in your mission statement.',
      },
      {
        number: 'MISTAKE 02',
        title: 'BELIEVING A LOGO = A BRAND',
        body: "A logo is a symbol of recognition. Your brand is the reputation and trust behind that symbol. A logo without a strong reputation is just a nice decoration.",
        fix: "Focus less on perfecting the logo and more on delivering experiences that make your audience trust and remember you.",
      },
      {
        number: 'MISTAKE 03',
        title: 'NOT HAVING A CLEAR ENOUGH BRAND STORY',
        body: "If you can't explain your story in a sentence, neither can your customers. A clear brand story helps people instantly \"get\" who you are and why you exist.",
        fix: 'Use this simple framework: We help [people who struggle] solve [problem] by [solution], so they can [achieve result].',
      },
      {
        number: 'MISTAKE 04',
        title: 'WAITING TOO LONG TO "BRAND"',
        body: "Branding isn't something you add later — it should grow alongside your business as you launch your product or service. The earlier you shape it, the faster people will trust you.",
        fix: "Create a minimum viable brand from day one: your positioning, your voice, your visuals. Keep it simple but consistent.",
      },
      {
        number: 'MISTAKE 05',
        title: 'LACK OF CONSISTENCY = LACK OF TRUST',
        body: "People trust what feels familiar. If your tone, visuals, or messaging change constantly, you look unstable — and startups can't afford to lose trust.",
        fix: "Choose your voice, colours, and core message once, and repeat them everywhere until they stick. Consistency builds credibility.",
      },
    ],
    note: "In the startup stage, it's normal to test, experiment, and even change direction. Don't stress about making the \"wrong\" decision — just make sure that whatever you choose, you stick with it long enough to build consistency.",
    takeaway: "Your brand isn't an optional extra — it's the foundation that builds trust, credibility, and momentum. Start early. Stay consistent. Build a reputation worth remembering.",
  },
  {
    id: 'blog-2',
    number: 'POST NO. 002',
    date: '2026-03-24',
    dateLabel: 'MAR 24, 2026',
    tags: ['TOOLS', 'PRODUCTIVITY', 'STARTUPS'],
    seoTitle: '3 Free Tools Every Startup Founder Needs (That Aren\'t ChatGPT) | Ezra Dom',
    seoDescription: 'Notion, Canva, and a notebook — three free tools that help founders organize their startup, build their brand, and stay productive from day one. No paid subscriptions required.',
    title: '3 Free Tools Founders Can\'t Live Without',
    displayTitle: '3 FREE TOOLS FOUNDERS CAN\'T LIVE WITHOUT',
    subtitle: 'That aren\'t ChatGPT',
    intro: [
      "When you're getting a startup off the ground every dollar counts. You don't need fancy software or expensive subscriptions to get organized, design your brand, and keep your head clear. The best part is that some of the greatest tools you'll ever use are free!",
    ],
    items: [
      {
        number: 'TOOL 01',
        title: 'NOTION — THE FREE BRAIN FOR YOUR STARTUP',
        body: "Think of Notion as your all-in-one digital workspace. It's a free tool where you can manage notes, build a content calendar, track customers, or create simple databases.",
        fix: "Create a one-page brand guide (mission, vision, values). Set up a simple CRM to track leads. Organize weekly tasks so nothing slips through the cracks.",
      },
      {
        number: 'TOOL 02',
        title: 'CANVA — DESIGN WITHOUT THE DESIGNER PRICE TAG',
        body: "Your brand's visuals matter, but you don't need Adobe-level skills to make them look sharp. Canva gives you drag-and-drop design tools and templates for everything from pitch decks to Instagram posts.",
        fix: "Design social media posts that match your branding. Build mockups for flyers, posters, or business cards. Create a polished investor deck — all without hiring a designer.",
      },
      {
        number: 'TOOL 03',
        title: 'NOTEBOOK & PENCIL — THE ORIGINAL PRODUCTIVITY HACK',
        body: "It sounds too simple, but writing by hand forces clarity. A notebook is more than just a place to dump thoughts — it's also a history of your ideas.",
        fix: "Start with 5 minutes of brain dump. Write whatever's on your mind. Set some goals for yourself and your business. Look back every month to see patterns and growth.",
      },
    ],
    note: null,
    takeaway: "Tools don't have to be expensive to be powerful. Between Notion, Canva, and a simple notebook, you've got everything you need to organize your startup, design your brand, and capture the ideas that fuel growth. Start with what's free, stay consistent, and build momentum.",
  },
  {
    id: 'blog-3',
    number: 'POST NO. 003',
    date: '2026-04-07',
    dateLabel: 'APR 7, 2026',
    tags: ['STARTUPS', 'STRATEGY', 'MINDSET'],
    seoTitle: 'You Have a Business Idea — Now What? 3 Steps to Take Today | Ezra Dom',
    seoDescription: 'Got the idea — now what? Three concrete steps every new entrepreneur should take immediately: define your buyer persona, research competitors, and attack the task you keep avoiding.',
    title: 'You Have a Business Idea… Now What?',
    displayTitle: ['YOU HAVE A BUSINESS IDEA…', 'NOW WHAT?'],
    subtitle: '3 Things You Can Do Right Now to Be Productive',
    intro: [
      "So you've got the idea. Maybe it came to you in the shower, maybe while talking with a friend. Either way you're fired up. But here's the trap most new entrepreneurs fall into: they sit on the idea instead of acting on it.",
      "Here are three simple things you can do today to make some real progress:",
    ],
    items: [
      {
        number: 'STEP 01',
        title: 'CREATE A BUYER PERSONA',
        body: "Ask yourself: who does your business actually serve? The clearer you are about your ideal customer, the easier every decision becomes.",
        fix: "Identify the #1 problem your ideal customer needs solved. Write down the interests, struggles, and motivations of your customer. Give them a name so they feel real (ex. \"Budget Ben\"). When you know who you're serving, your messaging practically writes itself.",
      },
      {
        number: 'STEP 02',
        title: 'RESEARCH YOUR COMPETITORS',
        body: "Don't reinvent the wheel. Look at who's already in your space and see what they're doing well and where they're dropping the ball.",
        fix: "Use Google and social media to search for conversations about your niche. Read competitor reviews — what do customers rave about and what do they complain about? Make a two-column list: \"Likes\" vs. \"Dislikes.\" These gaps are your biggest opportunities.",
      },
      {
        number: 'STEP 03',
        title: "DO THAT THING YOU'VE BEEN PUTTING OFF",
        body: "We all have that one task we keep procrastinating on. The truth: the thing you're avoiding is usually the thing that will move the needle the most.",
        fix: "Write down your entire problem in detail. Break it into tiny steps. Tackle just the first step today — chances are, once you start, you'll keep going. A problem well-documented is a problem half-solved.",
      },
    ],
    note: null,
    takeaway: "Having a business idea is exciting, but ideas don't build businesses — action does. Define your buyer, study the market, and attack the thing you've been avoiding. If you do just these three things today, you're no longer \"thinking about starting.\" You'll already be building.",
  },
  {
    id: 'blog-4',
    number: 'POST NO. 004',
    date: '2026-04-08',
    dateLabel: 'APR 8, 2026',
    tags: ['STRATEGY', 'STARTUPS', 'PLANNING'],
    seoTitle: 'The 3 Types of Business Plans — Which One Should You Use? | Ezra Dom',
    seoDescription: 'Traditional, lean canvas, and mind map business plans — what each one is for and when to use it. A practical business planning guide for founders and early-stage startups.',
    title: 'The 3 Types of Business Plans (And Which One You Should Actually Use)',
    displayTitle: ['THE 3 TYPES OF', 'BUSINESS PLANS'],
    subtitle: 'And Which One You Should Actually Use',
    intro: [
      "So you've got a business idea — but before you sprint into marketing, design, or product development, you need a plan. Not just any plan, but the kind that matches your goals, current position, and personality as a founder.",
      "Let's break down the three main types of business plans, their strengths and weaknesses, and when to use each.",
    ],
    items: [
      {
        number: 'PLAN 01',
        title: 'THE TRADITIONAL BUSINESS PLAN (15–25 PAGES)',
        body: "The classic format — long, detailed, and perfect for formal or investor-facing scenarios. It usually covers ten components: Executive Summary (written last, read first), Business Background, Products & Services, The Market, Marketing Strategy, Competitor Analysis, Operations & Logistics, Costs & Pricing Strategy, Financial Forecasts, and a Backup Plan.",
        fixLabel: 'WHEN TO USE IT',
        fix: "When pitching investors, applying for funding, or when you need to demonstrate professionalism and depth. Pros: Comprehensive, professional, detailed. Cons: Time-consuming, hard to update, rarely read in full.",
      },
      {
        number: 'PLAN 02',
        title: 'THE LEAN BUSINESS PLAN (ONE PAGE)',
        body: "The startup-friendly version — short, visual, and built for speed. Often formatted as a Lean Canvas, it covers: Problem, Solution, Unique Value Proposition, Customer Segments, Key Metrics, Channels, and Cost Structure & Revenue Streams.",
        fixLabel: 'WHEN TO USE IT',
        fix: "Perfect for early-stage founders, side hustles, or small teams validating an idea. Pros: Quick to make, easy to update, keeps you focused. Cons: Lacks depth needed for serious funding or partnerships.",
      },
      {
        number: 'PLAN 03',
        title: 'THE MIND MAP PLAN (VISUAL BRAINSTORM)',
        body: "The most creative and underrated approach — a freeform, visual map connecting all parts of your business on one sheet. Draw 'Business Plan' in the center, then branch out to Product, Market, Operations, Financials, and Goals, with smaller branches under each.",
        fixLabel: 'WHEN TO USE IT',
        fix: "Ideal for visual thinkers, early brainstorming sessions, or creative businesses that evolve rapidly. Pros: Inspires creativity, easy to start, makes connections visible. Cons: Less professional and harder to present formally.",
      },
    ],
    note: null,
    takeaway: "Each plan serves a different purpose: Traditional is best for investors and lenders, Lean is best for startups that need agility, and Mind Map is best for brainstorming and creative direction. Start with a mind map to explore your ideas, turn it into a lean plan to clarify your model, and evolve into a traditional plan once you're ready to scale or raise funds.",
  },
  {
    id: 'blog-5',
    number: 'POST NO. 005',
    date: '2026-04-09',
    dateLabel: 'APR 9, 2026',
    tags: ['CREATIVITY', 'BRANDING', 'MINDSET'],
    seoTitle: 'Why Creative Constraints Build Better Brands Than Total Freedom | Ezra Dom',
    seoDescription: 'Total creative freedom kills great brand work. Constraints produce it. How to use creative limits deliberately to build more original, distinctive brands and campaigns.',
    title: 'Why Freedom Kills Creativity (And Constraints Bring It to Life)',
    displayTitle: ['WHY FREEDOM KILLS', 'CREATIVITY'],
    subtitle: 'And Constraints Bring It to Life',
    intro: [
      "What is creativity? Most people think it's some mysterious spark that only artists or geniuses have. But in reality, creativity is just the combination of new things — the process of connecting existing ideas in ways no one has before.",
      "And the good news is that anyone can do it.",
    ],
    items: [
      {
        number: 'INSIGHT 01',
        title: 'CREATIVITY THRIVES UNDER CONSTRAINTS',
        body: "It's easy to think creativity requires total freedom — but the opposite is true. When we're forced to work within limits, our brains are pushed to find new paths. Constraints — time, budget, materials, and rules — force us to innovate. They trigger problem-solving and open the mind to new outcomes. When everything is possible, it's hard to choose anything. But when your options are limited, you have to get clever.",
        fixLabel: 'THE LESSON',
        fix: "Embrace limits. They don't block great work — they produce it. Next time you feel stuck, try adding a constraint instead of removing one.",
      },
      {
        number: 'INSIGHT 02',
        title: 'YOU CAN MANUFACTURE CREATIVITY',
        body: "You don't have to wait for inspiration — you can force it by creating constraints on purpose. Directors do this all the time: 'Let's film this entire movie in one continuous shot.' Artists do it too: 'Let's draw a face without ever lifting the pen.' When you set artificial boundaries, you create a challenge — and challenges spark creativity.",
        fixLabel: 'THE LESSON',
        fix: "Set creative constraints deliberately. Give yourself a time limit, a word count, a single colour, or one tool. Then solve the problem inside those walls.",
      },
      {
        number: 'INSIGHT 03',
        title: 'PLAN FOR THE UNPLANNED',
        body: "Every project hits snags. But here's the mindset shift: don't fight the problem — use it. In Jaws, the animatronic shark kept malfunctioning, so they shot without it. The resulting suspense made it one of the most iconic scenes in film history. Some of the best ideas in history came from accidents and limitations.",
        fixLabel: 'THE LESSON',
        fix: "In a world full of copy-paste work and 'me too' products, being different is refreshing. Our brains are wired to notice pattern breaks — we remember them, and we talk about them.",
      },
      {
        number: 'INSIGHT 04',
        title: 'WHY WE STRUGGLE TO THINK DIFFERENTLY',
        body: "If creativity is so valuable, why is it so hard to be original? Our brains are wired for survival, not creativity. There's safety in sticking with the group. When you stand out, you risk rejection or failure. When something works, your instinct says 'don't change it.' That's human nature talking — and it's the enemy of originality.",
        fixLabel: 'THE LESSON',
        fix: "Creative breakthroughs come from risking comfort and trying something that might not work. You can't innovate if you only do what feels safe.",
      },
    ],
    note: null,
    takeaway: "Creativity isn't luck, and it's not magic. It's the intentional act of combining old ideas in new ways — often under pressure, within limits, or through problems. So the next time something goes wrong or you feel stuck, embrace the problem and use it to forge your creative advantage. When you do, you'll stop waiting for creativity and start creating it.",
  },
  {
    id: 'blog-6',
    number: 'POST NO. 006',
    date: '2026-04-11',
    dateLabel: 'APR 11, 2026',
    tags: ['BRANDING', 'STRATEGY', 'PERCEPTION'],
    seoTitle: 'How Brand Framing Affects Perceived Value (And 3 Ways to Use It) | Ezra Dom',
    seoDescription: 'Why do some brands charge more for the same thing? It\'s not quality — it\'s framing. Learn how context and brand storytelling increase your brand\'s perceived value and what customers will pay.',
    title: 'How Framing Affects Your Brand\'s Value (And 3 Steps To Make Your Business More Valuable)',
    displayTitle: ['HOW FRAMING AFFECTS', 'YOUR BRAND\'S VALUE'],
    subtitle: 'And 3 Steps To Make Your Business More Valuable',
    intro: [
      "Ever wonder why some brands can charge more for what seems like the same thing? It's not always about quality — it's framing.",
      "Framing means context. It's the story that surrounds your brand, product, or service, and it shapes how people perceive its value. When branding, our job is to manipulate perception by controlling the contexts in which people interact with our brand.",
    ],
    items: [
      {
        number: 'CONCEPT 01',
        title: 'WHY CONTEXT CREATES VALUE',
        body: "Think of Nike. They sponsor professional athletes not because those athletes need free shoes, but because it builds context — associating their brand with elite performance. In a famous study, researchers gave participants two glasses of identical cheap wine, one labeled $5 and the other $50. People who believed they were drinking the expensive one rated it as tasting better — and brain scans showed more pleasure activity. It was the same wine.",
        fixLabel: 'KEY INSIGHT',
        fix: "Perception is reality and the story changes the experience. As entrepreneurs, we get to write that story — and that's one of the most powerful tools in branding.",
      },
      {
        number: 'CONCEPT 02',
        title: 'DIRECT CONTEXT VS ENVIRONMENTAL CONTEXT',
        body: "Picture your brand as artwork on a wall. Direct context is the frame — your visuals, tone, website, packaging, and customer experience. These you design intentionally. Environmental context is the room — the culture, market, and world outside your direct control. The same artwork in a thrift store is valued differently than in a gallery.",
        fixLabel: 'KEY INSIGHT',
        fix: "You can't control every external factor, but you can choose the rooms you show up in — the partnerships, media placements, and audiences that surround your brand.",
      },
      {
        number: 'STEP 01',
        title: 'INVEST IN GOOD STORYTELLING',
        body: "The story behind your brand determines how people experience it. If your brand feels like the $50 bottle of wine, people will value it that way.",
        fixLabel: 'HOW TO APPLY',
        fix: "Build a narrative that makes people feel something. Define what your brand stands for and express that consistently across every touchpoint.",
      },
      {
        number: 'STEP 02',
        title: 'COLLECT AND SHARE SOCIAL PROOF',
        body: "Reviews and testimonials shape external context. They tell new customers how others perceive your brand — and people trust people.",
        fixLabel: 'HOW TO APPLY',
        fix: "If you don't have reviews yet, get them. Ask happy clients. Feature them prominently on your website and across social media.",
      },
      {
        number: 'STEP 03',
        title: 'POSITION YOUR BRAND AS THE EXPERT',
        body: "Experts get paid more, period. Whether you're in marketing, real estate, design, or anything else, people pay a premium for authority.",
        fixLabel: 'HOW TO APPLY',
        fix: "Show up as the specialist in your space by publishing insights, sharing case studies, and teaching what you know.",
      },
    ],
    note: null,
    takeaway: "Your brand's value isn't just in what you offer — it's in how it's framed. The story, the presentation, and the environment all work together to create perception, and perception creates value. Frame your brand like art, choose the right gallery, and tell the story that makes your business worth more.",
  },
  {
    id: 'blog-7',
    number: 'POST NO. 007',
    date: '2026-04-13',
    dateLabel: 'APR 13, 2026',
    tags: ['BRANDING', 'PERSONAL BRAND', 'STRATEGY'],
    seoTitle: 'Personal Brand vs Corporate Brand — 5 Key Differences | Ezra Dom',
    seoDescription: 'Personal branding and corporate branding work differently. The 5 differences in who leads, what they offer, and how they grow — and how to build a personal brand or business brand that actually works.',
    title: 'Don\'t Miss These 5 Differences in Personal vs Corporate Branding (And How You Can Leverage Them)',
    displayTitle: ['5 DIFFERENCES IN PERSONAL', 'VS CORPORATE BRANDING'],
    subtitle: 'And How You Can Leverage Them',
    intro: [
      "Every brand, whether personal or corporate, exists to create transformation. Artists transform people through art. Businesses transform people through solutions.",
      "Both aim to make an impact — but how they do it, and who they do it for, is where things change.",
    ],
    items: [
      {
        number: 'DIFFERENCE 01',
        title: 'WHO COMES FIRST',
        body: "Personal brand: The creator leads. They give from their own mind, experience, and worldview — their art is the medium through which we connect. Corporate brand: Everything starts with the question, 'Who has this problem and how can we help?' The customer's needs drive every decision.",
        fixLabel: 'THE DISTINCTION',
        fix: "A personal brand is an extension of the person. A corporate brand is a system built around the customer's transformation.",
      },
      {
        number: 'DIFFERENCE 02',
        title: 'WHAT THEY OFFER',
        body: "Personal brand: Originality matters. A personal brand thrives on unique fingerprints and creative expression — the artist constantly creates new work to present. Corporate brand: Instead of originality for art's sake, corporate brands focus on providing useful, needed solutions in exchange for money.",
        fixLabel: 'THE DISTINCTION',
        fix: "Personal brands give people something new. Corporate brands give people something needed.",
      },
      {
        number: 'DIFFERENCE 03',
        title: 'WHAT THEY SEEK',
        body: "Personal brand: The artist wants to be understood, valued, and appreciated. Growth happens when others resonate with their work. Corporate brand: Their measure of success is sales. Their goal is to turn appreciation into real purchases.",
        fixLabel: 'THE DISTINCTION',
        fix: "Personal brands seek appreciation. Corporate brands seek purchase.",
      },
      {
        number: 'DIFFERENCE 04',
        title: 'WHOSE STORY THEY TELL',
        body: "Personal brand: The artist is the main character. Their journey, failures, and insights are what people follow. Corporate brand: The main character is the buyer — the identity or outcome they can achieve through the brand.",
        fixLabel: 'THE DISTINCTION',
        fix: "In a personal brand, you are the story. In a corporate brand, your customer is.",
      },
      {
        number: 'DIFFERENCE 05',
        title: 'HOW THEY EXPRESS THEMSELVES',
        body: "Personal brand: Content is the art. Posts, videos, writings, and visuals are how the creator shares their perspective. Corporate brand: Marketing is the expression. While personal brands lean on creative content, corporate brands express through structured marketing efforts.",
        fixLabel: 'THE DISTINCTION',
        fix: "Personal brands express through content. Corporate brands express through marketing.",
      },
    ],
    note: "Whether personal or corporate, your brand is your reputation — and branding is reputation management. Every decision, post, collaboration, and product shapes how people perceive you. Ask yourself: 'What will this make of my reputation?' Your reputation comes from how you express your identity. Define who you want to become before you act.",
    takeaway: "Personal brands make art for people to transform their thoughts. Corporate brands make money by solving problems and selling solutions. If you want a personal brand, be prepared to be an artist — create unique work and share your perspective. If you want to build a business, keep the consumer front of mind and make every decision through the lens of problem and solution.",
  },
  {
    id: 'blog-8',
    number: 'POST NO. 008',
    date: '2026-04-16',
    dateLabel: 'APR 16, 2026',
    tags: ['BRANDING', 'MARKETING', 'STRATEGY'],
    seoTitle: 'Branding vs Marketing — What\'s the Difference and Why It Matters | Ezra Dom',
    seoDescription: 'What is branding? What is marketing? Branding is the script — identity, story, direction. Marketing is the production. Understanding the difference is the foundation of brand strategy that actually builds a business.',
    title: 'The Difference Between Branding and Marketing (And Why You Need Both)',
    displayTitle: ['THE DIFFERENCE BETWEEN', 'BRANDING AND MARKETING'],
    subtitle: 'And Why You Need Both for a Successful Business',
    intro: [
      "If business was a movie, branding would be the script and marketing would be the production. You can't have a great movie without a strong story, and you can't have a great story without turning it into something people can actually experience.",
      "That's exactly how branding and marketing work together.",
    ],
    items: [
      {
        number: 'CONCEPT 01',
        title: 'BRANDING — THE SCRIPT OF YOUR BUSINESS',
        body: "Branding is where everything begins. It's the identity, message, and emotional direction of your business — the story that your marketing will later bring to life. Picture it as the scriptwriting phase of a movie: the story is written, the characters are developed, the emotional journey is defined. Without a brand identity, your marketing will lack depth and direction.",
        fixLabel: 'KEY INSIGHT',
        fix: "Branding gives meaning to your business. It defines who you are, why you exist, and what story you're telling to your audience.",
      },
      {
        number: 'CONCEPT 02',
        title: 'MARKETING — THE PRODUCTION THAT BRINGS IT TO LIFE',
        body: "Once the script is ready, the production team takes over. Marketing brings your brand's story to the world — turning ideas into visuals, words, ads, and experiences people can interact with. If branding is your identity, marketing is your expression. Just as you can't have a good movie without great direction, you can't have a successful brand without great marketing execution.",
        fixLabel: 'KEY INSIGHT',
        fix: "Marketing without a brand is noise. A brand without marketing is invisible. You need both.",
      },
      {
        number: 'CONCEPT 03',
        title: 'WHY BRANDING COMES FIRST',
        body: "Many businesses skip the story and focus only on their product. But consumers aren't just buying products anymore — they're buying meaning. As The 60-Minute Brand Strategist puts it: 'Companies used to be product producers, and now they must become meaning brokers.' Consumers don't just want what you sell; they want what it says about them.",
        fixLabel: 'KEY INSIGHT',
        fix: "When done right, your brand becomes an identity your audience can buy into — and your marketing becomes the vehicle that delivers it.",
      },
    ],
    note: "In a world filled with copy-paste ideas and AI-generated noise, different is better than better. Your uniqueness is your power — but only if your brand and marketing work together to express it clearly.",
    takeaway: "Branding is the script — identity, story, and direction. Marketing is the production — expression, communication, and impact. A great story with poor production goes unseen. Great production without a story falls flat. Give your branders the freedom to craft the story, and your marketers the freedom to tell it.",
  },
]

export default function BlogPostPage({ postId }) {
  const ref = useRef(null)
  const { navigate } = usePage()
  const post = BLOG_POSTS.find(p => p.id === postId)

  useEffect(() => {
    if (!ref.current) return
    const tl = typewriterIn(ref.current, { trigger: ref.current, start: 'top 90%', once: true })
    return () => tl.kill()
  }, [postId])

  if (!post) return null

  return (
    <main style={{ paddingTop: '60px' }} ref={ref}>
      <section>
        <div className="wrap">

          <div className="rule anim" />
          <div className="meta-row anim">
            <span className="meta-label">{post.number}</span>
            <span className="meta-label meta-label--faint">LUMINARY / EZRA DOM</span>
            <span className="meta-label meta-label--faint">BC CANADA</span>
          </div>
          <div className="rule anim" />

          <div style={{ padding: '4px 0', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
            {(() => {
              const t = post.pageTitle || post.displayTitle
              const lines = Array.isArray(t) ? t : [t]
              return (
                <span className="display-line anim" style={{ fontSize: 'clamp(40px, 8vw, 110px)', lineHeight: 0.9, whiteSpace: 'normal', wordBreak: 'break-word' }}>
                  {lines.map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>)}
                </span>
              )
            })()}
          </div>

          <div className="rule anim" />
          <div className="meta-row anim" style={{ padding: '8px 0' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2.2vw, 28px)', color: 'var(--ink-dim)', letterSpacing: '0.03em' }}>
              {post.subtitle}
            </span>
            <button
              onClick={() => navigate('home')}
              style={{
                fontFamily: 'var(--font-label)', fontSize: '10px', textTransform: 'uppercase',
                letterSpacing: '0.22em', color: 'var(--ink)', background: 'transparent',
                border: '1px solid var(--rule-strong)', padding: '10px 20px', cursor: 'pointer',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              ← BACK
            </button>
          </div>
          <div className="rule anim" />

          {/* Intro */}
          <div style={{ padding: '24px 0', maxWidth: '720px' }}>
            {post.intro.map((p, i) => (
              <p key={i} className="body anim" style={{ marginBottom: '14px' }}>{p}</p>
            ))}
          </div>
          <div className="rule anim" />

          {/* Items */}
          {post.items.map((item, i) => (
            <div key={i} className="anim" style={{ borderBottom: '1px solid var(--rule)', padding: '28px 0' }}>
              <div className="blog-post-item-grid" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '32px', alignItems: 'start' }}>
                <span className="param-label" style={{ paddingTop: '6px', flexShrink: 0 }}>{item.number}</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 40px)', color: 'var(--ink)', letterSpacing: '0.02em', lineHeight: 1, marginBottom: '12px' }}>
                    {item.title}
                  </div>
                  <p className="body body--sm" style={{ marginBottom: '16px' }}>{item.body}</p>
                  <div style={{ paddingTop: '12px', borderTop: '1px solid var(--rule)' }}>
                    <span className="param-label" style={{ display: 'block', marginBottom: '8px' }}>{item.fixLabel || 'FIX IT'}</span>
                    <p className="body body--sm" style={{ color: 'var(--ink-faint)' }}>{item.fix}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Note */}
          {post.note && (
            <div style={{ padding: '20px 0', maxWidth: '720px', borderBottom: '1px solid var(--rule)' }}>
              <p className="body body--sm anim" style={{ fontStyle: 'italic', color: 'var(--ink-faint)' }}>{post.note}</p>
            </div>
          )}

          {/* Takeaway */}
          <div className="rule anim" />
          <div style={{ padding: '28px 0', maxWidth: '720px' }}>
            <span className="param-label anim" style={{ display: 'block', marginBottom: '12px' }}>THE TAKEAWAY</span>
            <p className="body anim">{post.takeaway}</p>
          </div>
          <div className="rule anim" />

          <div className="meta-row anim" style={{ padding: '8px 0 16px' }}>
            <span className="meta-label meta-label--faint">END PARAMETER 00 – 00</span>
            <span className="meta-label meta-label--faint">EZRADOM.COM — BRAND STRATEGY — BC CANADA — © 2026</span>
          </div>
          <div className="rule anim" />
          <div style={{ height: '40px' }} />

        </div>
      </section>
      <style>{`
        @media (max-width: 640px) {
          .blog-post-item-grid { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </main>
  )
}
