import profileImage from '../assets/profile.jpeg'

export default function HeroSection({ profile, copy }) {
  return (
    <section id="top" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">{copy.role}</p>
        <h1>{profile.name}</h1>
        <p className="hero-summary">{copy.summary}</p>
        <div className="hero-actions">
          <a className="primary-action" href="#projects">
            View Projects
          </a>
          <a className="secondary-action" href="#contact">
            Contact
          </a>
        </div>
      </div>
      <div className="portrait-frame">
        <img src={profileImage} alt={`${profile.name} portrait`} />
      </div>
    </section>
  )
}
