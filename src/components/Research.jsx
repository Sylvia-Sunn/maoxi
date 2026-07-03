function Research({ t, areas, projects }) {
  return (
    <section id="research" className="section">
      <h2 className="section-title">{t.researchTitle}</h2>
      <div className="area-grid">
        {areas.map((ar) => (
          <div key={ar.no} className="area-card">
            <div className="area-no">{ar.no}</div>
            <h3 className="area-title">{ar.title}</h3>
            <p className="area-desc">{ar.desc}</p>
          </div>
        ))}
      </div>
      <h3 className="subsection-label">{t.projLabel}</h3>
      {projects.map((pr, i) => (
        <div key={i} className="project-item">
          <div className="project-meta">{pr.meta}</div>
          <h4 className="project-title">{pr.title}</h4>
          <p className="project-desc">{pr.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Research;
