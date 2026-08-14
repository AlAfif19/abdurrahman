import paperArtwork from '../assets/floating-paper.png'

const assetsByMode = {
  professional: [
    ['floating-cube', 'AI'],
    ['floating-ring', 'ML'],
    ['floating-slab', 'QA'],
    ['floating-sphere', 'NLP'],
    ['floating-prism', 'WEB'],
    ['floating-capsule', 'RAG'],
    ['floating-disc', 'LLM'],
  ],
  casual: [
    ['floating-cube', 'IDE'],
    ['floating-ring', 'AKSI'],
    ['floating-slab', 'ACARA'],
    ['floating-sphere', 'SUARA'],
    ['floating-prism', 'KARYA'],
    ['floating-capsule', 'CERITA'],
    ['floating-disc', 'PANGGUNG'],
  ],
}

export default function Floating3DAssets({ mode, visible }) {
  const showPaperArtwork = mode === 'casual'

  return (
    <div
      className="floating-3d-assets"
      data-mode={mode}
      data-testid="floating-3d-assets"
      aria-hidden="true"
    >
      {showPaperArtwork ? (
        <img
          className="persona-3d-artwork"
          data-artwork="paper"
          data-side="left"
          data-testid="persona-3d-artwork"
          data-visible={visible}
          src={paperArtwork}
          alt=""
        />
      ) : null}
      {assetsByMode[mode].map(([shape, label]) => (
        <span className={`floating-asset ${shape}`} key={shape}>
          <span>{label}</span>
        </span>
      ))}
    </div>
  )
}
