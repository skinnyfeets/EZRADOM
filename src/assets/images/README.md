# Image Slots — ezradom.com

All images on this site use the `<ImageSlot>` component as designed placeholders.
Replace any slot by:

1. Drop your image file into `/src/assets/images/`
2. Import it in the relevant section component
3. Pass it as the `src` prop: `<ImageSlot src={myImage} name="slot-name" height="520px" />`

The slot dimensions are preserved — your photo fills the exact same space.

---

## Slot Directory

### Hero Section
| Slot name | File to drop | Description |
|-----------|-------------|-------------|
| *(no image slots in hero)* | — | Hero is type/layout only |

---

### Section 02 — Work

#### SweatCulture
| Slot name | Suggested file | Description |
|-----------|---------------|-------------|
| `sweatculture-hero` | `sweatculture-hero.jpg` | Full-width hero visual — sauna exterior, community gathering, or dramatic landscape shot. **520px tall.** |
| `sweatculture-brand` | `sweatculture-brand.jpg` | Brand identity / guidelines spread — logo lockup, color palette, type specimen, or brand sheet. **320px tall.** |
| `sweatculture-lifestyle` | `sweatculture-lifestyle.jpg` | Lifestyle photography — people using the sauna, cold plunge, community moments. **320px tall.** |

#### Trailside Lemonade
| Slot name | Suggested file | Description |
|-----------|---------------|-------------|
| `trailside-hero` | `trailside-hero.jpg` | Full-width hero — product on trail, MTB rider, energetic outdoor scene. **520px tall.** |
| `trailside-brand` | `trailside-brand.jpg` | Identity / can label — logo, can design, label artwork, or brand sheet. **320px tall.** |
| `trailside-lifestyle` | `trailside-lifestyle.jpg` | MTB lifestyle photography — rider, trail scene, product in natural environment. **320px tall.** |

#### Case Studies Grid (Secondary Cards)
| Slot name | Suggested file | Description |
|-----------|---------------|-------------|
| `mcgee-cycle-thumb` | `mcgee-cycle.jpg` | McGee Cycle — non-profit MTB camp thumbnail. **200px tall.** |
| `obscura-thumb` | `obscura.jpg` | Obscura — brand trust case study thumbnail. **200px tall.** |
| `core4-thumb` | `core4.jpg` | Core 4 Real Estate — startup brand identity thumbnail. **200px tall.** |
| `jakson-ranch-thumb` | `jakson-ranch.jpg` | Jakson Ranch — small business brand thumbnail. **200px tall.** |
| `coming-soon-1` | *(leave as placeholder)* | Locked — coming soon card 1. |
| `coming-soon-2` | *(leave as placeholder)* | Locked — coming soon card 2. |

---

### Section 05 — About
| Slot name | Suggested file | Description |
|-----------|---------------|-------------|
| `ezra-portrait` | `ezra-portrait.jpg` | Portrait of Ezra Dom. Clean, confident. Studio or outdoor. **600px tall.** |

---

## How to wire up an image (example)

**Before (placeholder):**
```jsx
<ImageSlot name="sweatculture-hero" height="520px" />
```

**After (real photo):**
```jsx
import sweatcultureHero from '../assets/images/sweatculture-hero.jpg'

// ...

<ImageSlot src={sweatcultureHero} name="sweatculture-hero" height="520px" />
```

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`

For best performance use `.webp` at 2× the display width (e.g. a slot 1200px wide → export at 2400px wide).
