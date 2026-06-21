import { useState } from 'react'
import { ChevronLeft, ChevronRight, Images } from 'lucide-react'
import SectionShell from './SectionShell'
import leadershipStage from '../assets/gallery-leadership-stage.jpeg'
import organizationTeam from '../assets/gallery-organization-team.jpeg'
import publicSpeaking from '../assets/gallery-public-speaking.jpeg'

const galleryItems = [
  {
    title: 'Leadership Stage',
    caption: 'Speaking in an organization setting with a formal leadership presence.',
    image: leadershipStage,
    alt: 'Al Afif speaking on a leadership stage',
  },
  {
    title: 'Organization Team',
    caption: 'Collaborating with organization members across campus activities.',
    image: organizationTeam,
    alt: 'Organization team group photo',
  },
  {
    title: 'Public Speaking Moment',
    caption: 'Representing event communication with confident delivery.',
    image: publicSpeaking,
    alt: 'Public speaking moment from campus event publication',
  },
]

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = galleryItems[activeIndex]

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1,
    )
  }

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1,
    )
  }

  return (
    <SectionShell id="gallery" eyebrow="Moments" title="Gallery">
      <div className="gallery-layout">
        <article className="gallery-feature" aria-live="polite">
          <div className="gallery-image-wrap">
            <img src={activeItem.image} alt={activeItem.alt} />
          </div>
          <div className="gallery-copy">
            <div className="gallery-kicker">
              <Images size={18} aria-hidden="true" />
              <span>
                {activeIndex + 1} / {galleryItems.length}
              </span>
            </div>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.caption}</p>
          </div>
        </article>

        <div className="gallery-controls" aria-label="Gallery controls">
          <button type="button" onClick={showPrevious} aria-label="Previous gallery item">
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" onClick={showNext} aria-label="Next gallery item">
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="gallery-track">
          {galleryItems.map((item, index) => (
            <button
              className="gallery-thumb"
              data-active={index === activeIndex}
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${item.title}`}
            >
              <img src={item.image} alt="" aria-hidden="true" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
