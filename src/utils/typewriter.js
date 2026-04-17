import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CHAR_SPEED  = 0.028
const ELEM_OFFSET = 0.055

function splitIntoChars(el) {
  const text = el.textContent.trim()
  if (!text) return []
  el.dataset.twOriginal = text
  el.innerHTML = ''
  const spans = []
  for (const char of text) {
    if (char === ' ') {
      el.appendChild(document.createTextNode('\u00A0'))
    } else {
      const s = document.createElement('span')
      s.textContent = char
      s.className = 'tw-char'
      s.style.cssText = 'display:inline;opacity:0'
      el.appendChild(s)
      spans.push(s)
    }
  }
  return spans
}

function restore(container) {
  container.querySelectorAll('[data-tw-original]').forEach(el => {
    el.textContent = el.dataset.twOriginal
    delete el.dataset.twOriginal
  })
}

function leafTextEls(el) {
  if (el.childElementCount === 0) return el.textContent.trim() ? [el] : []
  return Array.from(el.children).flatMap(leafTextEls)
}

function buildTimeline(container, cls) {
  const tl = gsap.timeline()
  Array.from(container.querySelectorAll(`.${cls}`)).forEach((el, i) => {
    if (el.classList.contains('rule')) return
    const at = i * ELEM_OFFSET
    leafTextEls(el).forEach(leaf => {
      const text = leaf.textContent.trim()
      if (!text) return
      if (text.length > 60) {
        // Long text: hide then fade in
        leaf.style.opacity = '0'
        tl.to(leaf, { opacity: 1, duration: 0.35, ease: 'power1.out', clearProps: 'opacity' }, at)
        return
      }
      splitIntoChars(leaf).forEach((c, ci) => {
        tl.to(c, { opacity: 1, duration: 0 }, at + ci * CHAR_SPEED)
      })
    })
  })
  return tl
}

/**
 * Scroll-triggered typewriter. Text stays fully visible until the section
 * enters the viewport — then the animation fires. If it never fires, text
 * remains visible.
 */
export function typewriterIn(container, scrollTriggerConfig) {
  restore(container)
  let innerTl = null
  const st = ScrollTrigger.create({
    trigger: scrollTriggerConfig?.trigger || container,
    start: scrollTriggerConfig?.start || 'top 84%',
    once: true,
    onEnter: () => {
      innerTl = buildTimeline(container, 'anim')
    },
  })
  return { kill: () => { st.kill(); if (innerTl) innerTl.kill(); restore(container) } }
}

/**
 * On-load typewriter for hero (no scroll trigger). Fires immediately on mount.
 */
export function typewriterHeroIn(container, delay = 0.08) {
  restore(container)
  // Small delay so the page has painted before we hide+retype text
  const id = setTimeout(() => {
    buildTimeline(container, 'hero-anim')
  }, delay * 1000)
  return { kill: () => { clearTimeout(id); restore(container) } }
}
