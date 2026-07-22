import chipArtwork from '../assets/floating-chip.png'
import paperArtwork from '../assets/floating-paper.png'

const assetsByMode = {
  professional: [
    ['floating-cube', 'AI'],
    ['floating-ring', 'ML'],
    ['floating-slab', 'QA'],
    ['floating-chip', 'DATA'],
    ['floating-sphere', 'NLP'],
    ['floating-prism', 'WEB'],
    ['floating-capsule', 'RAG'],
    ['floating-disc', 'LLM'],
  ],
  casual: [
    ['floating-cube', 'IDE'],
    ['floating-ring', 'AKSI'],
    ['floating-slab', 'ACARA'],
    ['floating-chip', 'TIM'],
    ['floating-sphere', 'SUARA'],
    ['floating-prism', 'KARYA'],
    ['floating-capsule', 'CERITA'],
    ['floating-disc', 'PANGGUNG'],
  ],
}

export default function Floating3DAssets({ mode, visible }) {
  const isProfessional = mode === 'professional'
  const artwork = isProfessional ? chipArtwork : paperArtwork

  return (
    <div
      className="floating-3d-assets"
      data-mode={mode}
      data-testid="floating-3d-assets"
      aria-hidden="true"
    >
      <img
        className="persona-3d-artwork"
        data-artwork={isProfessional ? 'chip' : 'paper'}
        data-side={isProfessional ? 'right' : 'left'}
        data-testid="persona-3d-artwork"
        data-visible={visible}
        src={artwork}
        alt=""
      />
      {assetsByMode[mode].map(([shape, label]) => (
        <span className={`floating-asset ${shape}`} key={shape}>
          <span>{label}</span>
        </span>
      ))}
    </div>
  )
}
