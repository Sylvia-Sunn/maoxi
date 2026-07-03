function Ventures({ t, ventures }) {
  return (
    <section id="ventures" className="section">
      <h2 className="section-title">{t.venTitle}</h2>
      {ventures.map((vn, i) => (
        <div key={i} className="venture-item">
          <span className="venture-year">{vn.year}</span>
          <div className="venture-body">
            <div className="venture-title">{vn.title}</div>
            {vn.note && <div className="venture-note">{vn.note}</div>}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Ventures;
