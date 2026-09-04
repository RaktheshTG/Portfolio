import { projects } from '@/lib/data'

export default function Work() {
  return (
    <section id="work" className="work section-pad">
      <div className="section-head" data-reveal>
        <span className="eyebrow">( 02 — 04 )</span>
        <h2>
          Selected
          <br />
          <em>work</em>
        </h2>
        <p>
          Interfaces, systems, and experiments
          <br />
          made with curiosity.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article
            className={`project-card ${project.color}`}
            key={project.number}
            data-reveal
          >
            <div className="project-index">{project.number}</div>
            <div className="project-main">
              <div className="project-visual">
                <span>{project.number}</span>
                <div className="visual-grid" />
              </div>
              <div className="project-info">
                <div>
                  <h3>{project.name}</h3>
                  <p className="project-type">{project.type}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <a
              className="project-arrow"
              href={project.link}
              aria-label={`View ${project.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
