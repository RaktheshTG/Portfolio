import { heroLetters, heroLettersLine2 } from '@/lib/data'

export default function Hero() {
  return (
    <section id="top" className="hero section-pad">
      <div className="hero-kicker hero-meta">
        <span>( 01 — 04 )</span>
        <span>Portfolio / 2025</span>
      </div>

      <div className="hero-title">
        <div className="overflow">
          <h1 className="hero-line hero-name" aria-label="RAKTHESH">
            {heroLetters.map((letter, index) => (
              <span key={`${letter}-${index}`}>{letter}</span>
            ))}
          </h1>
        </div>
        <div className="overflow">
          <h1 className="hero-line hero-name" aria-label="T G">
            {heroLettersLine2.map((letter, index) => (
              <span key={`${letter}-${index}`}>{letter}</span>
            ))}
          </h1>
        </div>
      </div>

      <div className="hero-bottom">
        <p className="hero-meta hero-intro">
          Computer Science student
          <br />
          Full-stack &amp; AI engineer in the making.
        </p>
        <a className="scroll-cue hero-meta" href="#work">
          <span>Scroll to explore</span>
          <b>↘</b>
        </a>
        <p className="hero-meta hero-location">Chennai, India</p>
      </div>
    </section>
  )
}
