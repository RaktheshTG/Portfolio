export default function Nav() {
  return (
    <nav className="nav">
      <a className="wordmark" href="#top">
        RK<span>.</span>
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a>
      </div>
      <span className="nav-status">
        Available for work <i />
      </span>
    </nav>
  )
}
