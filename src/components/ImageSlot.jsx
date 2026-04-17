/**
 * ImageSlot — Designed placeholder for real photography.
 * Styled for the cream/red tech-spec palette.
 */

function CornerMark({ top, right, bottom, left }) {
  return (
    <div style={{ position: 'absolute', width: 12, height: 12, top, right, bottom, left, pointerEvents: 'none', zIndex: 2 }}>
      <div style={{ position: 'absolute', width: 12, height: 1, top: '50%', left: 0, transform: 'translateY(-50%)', background: 'rgba(200,16,46,0.50)' }} />
      <div style={{ position: 'absolute', width: 1, height: 12, left: '50%', top: 0, transform: 'translateX(-50%)', background: 'rgba(200,16,46,0.50)' }} />
    </div>
  )
}

export default function ImageSlot({ name, height = '400px', label, src, altText, objectFit = 'contain', objectPosition = 'center', className = '', style = {} }) {
  const displayLabel = label || '[ IMAGE SLOT ]'

  if (src) {
    return (
      <div data-slot={name} className={className} style={{ width: '100%', height, overflow: 'hidden', position: 'relative', ...style }}>
        <img src={src} alt={altText || name} style={{ width: '100%', height: '100%', objectFit, objectPosition, display: 'block' }} />
      </div>
    )
  }

  return (
    <div
      data-slot={name}
      className={className}
      style={{
        width: '100%', height,
        background: 'rgba(200,16,46,0.04)',
        border: '1px solid rgba(200,16,46,0.28)',
        position: 'relative',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Corner crosshairs */}
      <CornerMark top={7} left={7} />
      <CornerMark top={7} right={7} />
      <CornerMark bottom={7} left={7} />
      <CornerMark bottom={7} right={7} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(200,16,46,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,16,46,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* Label stack */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'rgba(200,16,46,0.35)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '5px' }}>
          {displayLabel}
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: 'rgba(200,16,46,0.20)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '3px' }}>
          swap via /src/assets/images/
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: 'rgba(200,16,46,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          {name}
        </div>
      </div>
    </div>
  )
}
