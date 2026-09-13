export default function About() {
  return (
    <section id="about" className="about section-pad">
      <div className="section-head" data-reveal>
        <span className="eyebrow">( 02 — 07 )</span>
        <h2>A little<br /><em>about me</em></h2>
      </div>
      <div className="about-copy" data-reveal>
        <p>I&apos;m a 3rd-year <strong>Computer Science student</strong> at VIT Chennai, class of 2028.</p>
        <p>I like building things that sit at the intersection of a solid product and the intelligence layer underneath it — RAG pipelines, multi-agent systems, full-stack apps people can actually use.</p>
        <p>Outside of code, I spend time exploring UI/UX and video editing. Find me on GitHub as <strong>RaktheshTG</strong>.</p>
      </div>

      <img
        src="https://ghchart.rshah.org/e4362c/RaktheshTG"
        alt="Rakthesh's GitHub contribution graph"
        className="github-graph"
      />
    </section>
    
  )
}