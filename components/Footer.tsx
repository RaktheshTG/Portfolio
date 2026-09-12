import { socials } from '@/lib/data'

export default function Footer() {
  return (
    <footer id="contact" className="footer section-pad">
      <div className="section-head">
        <span className="eyebrow">( 07 — 07 )</span>
        <h2>
          Let&apos;s make
          <br />
          <em>something.</em>
        </h2>
      </div>
      <div className="footer-bottom">
        <a className="email-link" href={`mailto:${socials.email}`}>
          Email <span>↗</span>
        </a>
        <div className="socials">
          <a href={socials.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
        <span className="copyright">© 2025 RK</span>
      </div>
    </footer>
  )
}
