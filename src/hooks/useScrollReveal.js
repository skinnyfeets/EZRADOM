import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animates a section container: finds all `.anim-child` elements and staggers
 * them in with translateY(20px) → translateY(0) + opacity, 600ms ease-out.
 * Falls back to animating the container itself if no children are found.
 *
 * @returns {React.RefObject} — attach to the section or wrapper div
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const children = el.querySelectorAll('.anim-child')

    let ctx = gsap.context(() => {
      if (children.length > 0) {
        gsap.fromTo(
          children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: options.duration ?? 0.65,
            ease: 'power2.out',
            stagger: options.stagger ?? 0.12,
            scrollTrigger: {
              trigger: el,
              start: options.start ?? 'top 82%',
              once: true,
            },
          }
        )
      } else {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: options.duration ?? 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: options.start ?? 'top 82%',
              once: true,
            },
          }
        )
      }
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}
