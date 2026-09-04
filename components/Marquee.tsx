import { techList } from '@/lib/data'

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {techList.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  )
}
