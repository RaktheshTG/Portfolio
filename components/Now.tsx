import { currentlyExploring } from '@/lib/data'

export default function Now() {
  return (
    <section className="now section-pad">
      <div className="section-head" data-reveal>
        <span className="eyebrow">( 05 — 06 )</span>
        <h2>Currently<br /><em>exploring</em></h2>
      </div>
      <div className="now-list" data-reveal>
        {currentlyExploring.map((item) => (
          <div className="now-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}