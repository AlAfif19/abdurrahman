const assets = [
  ['floating-cube', 'AI'],
  ['floating-ring', 'UX'],
  ['floating-slab', 'QA'],
  ['floating-chip', 'ML'],
  ['floating-sphere', 'DATA'],
  ['floating-prism', 'WEB'],
  ['floating-capsule', 'CV'],
  ['floating-disc', 'UI'],
]

export default function Floating3DAssets() {
  return (
    <div className="floating-3d-assets" data-testid="floating-3d-assets" aria-hidden="true">
      {assets.map(([shape, label]) => (
        <span className={`floating-asset ${shape}`} key={shape}>
          <span>{label}</span>
        </span>
      ))}
    </div>
  )
}
