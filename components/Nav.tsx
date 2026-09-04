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
      </div>
      <span className="nav-status">
        Available for work <i />
      </span>
    </nav>
  )
}
