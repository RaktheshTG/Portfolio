import { skills } from '@/lib/data'

const tiers = [
  { label: 'Proficient', items: skills.proficient },
  { label: 'Familiar', items: skills.familiar },
  { label: 'Learning', items: skills.learning },
]

export default function Skills() {
  return (
    <section className="skills section-pad" data-num="03">
      <div className="section-head" data-reveal>
        <span className="eyebrow">( 03 — 07 )</span>
        <h2>What I<br /><em>work with</em></h2>
      </div>
      <div className="skills-grid" data-reveal>
        {tiers.map((tier) => (
          <div className="skill-tier" key={tier.label}>
            <h3>{tier.label}</h3>
            <div className="skill-chips">
              {tier.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}