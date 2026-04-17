/**
 * CrosshairDiagram — technical diagram SVG from the reference poster.
 * Simple circle with perpendicular crosshair lines and inner circle.
 */
export default function CrosshairDiagram({ size = 160 }) {
  const cx = size / 2
  const cy = size / 2
  const r1 = size * 0.36   // outer circle
  const r2 = size * 0.14   // inner circle
  const stroke = 'rgba(200,16,46,0.55)'
  const strokeThin = 'rgba(200,16,46,0.30)'

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx={cx} cy={cy} r={r1} stroke={stroke} strokeWidth="1" />

      {/* Inner circle */}
      <circle cx={cx} cy={cy} r={r2} stroke={stroke} strokeWidth="1" />

      {/* Horizontal crosshair — full width */}
      <line x1="0" y1={cy} x2={size} y2={cy} stroke={strokeThin} strokeWidth="1" />

      {/* Vertical crosshair — full height */}
      <line x1={cx} y1="0" x2={cx} y2={size} stroke={strokeThin} strokeWidth="1" />

      {/* Small tick marks at cardinal edges of outer circle */}
      <line x1={cx - r1 - 6} y1={cy} x2={cx - r1 + 2} y2={cy} stroke={stroke} strokeWidth="1" />
      <line x1={cx + r1 - 2} y1={cy} x2={cx + r1 + 6} y2={cy} stroke={stroke} strokeWidth="1" />
      <line x1={cx} y1={cy - r1 - 6} x2={cx} y2={cy - r1 + 2} stroke={stroke} strokeWidth="1" />
      <line x1={cx} y1={cy + r1 - 2} x2={cx} y2={cy + r1 + 6} stroke={stroke} strokeWidth="1" />

      {/* Center dot */}
      <circle cx={cx} cy={cy} r="1.5" fill={stroke} />

      {/* Corner tick marks (like corner registration marks) */}
      <line x1="0" y1="0" x2="12" y2="0" stroke={strokeThin} strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="12" stroke={strokeThin} strokeWidth="1" />
      <line x1={size} y1="0" x2={size - 12} y2="0" stroke={strokeThin} strokeWidth="1" />
      <line x1={size} y1="0" x2={size} y2="12" stroke={strokeThin} strokeWidth="1" />
      <line x1="0" y1={size} x2="12" y2={size} stroke={strokeThin} strokeWidth="1" />
      <line x1="0" y1={size} x2="0" y2={size - 12} stroke={strokeThin} strokeWidth="1" />
      <line x1={size} y1={size} x2={size - 12} y2={size} stroke={strokeThin} strokeWidth="1" />
      <line x1={size} y1={size} x2={size} y2={size - 12} stroke={strokeThin} strokeWidth="1" />
    </svg>
  )
}
