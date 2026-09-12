import { achievements } from '@/lib/data'

export default function Achievements() {
  return (
    <section className="achievements section-pad">
      <div className="section-head" data-reveal>
        <span className="eyebrow">( 06 — 07 )</span>
        <h2>Academic<br /><em>achievements</em></h2>
      </div>
      <div className="achievements-grid" data-reveal>
        {achievements.map((item) => (
          <div className="achievement-item" key={item.label}>
            <span className="achievement-value">{item.value}</span>
            <div>
              <p className="achievement-label">{item.label}</p>
              <p className="achievement-detail">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}