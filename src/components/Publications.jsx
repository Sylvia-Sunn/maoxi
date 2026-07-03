function Publications({ t, papers, books, patents }) {
  return (
    <section id="publications" className="section">
      <h2 className="section-title">{t.pubTitle}</h2>

      <h3 className="subsection-label subsection-label--m10">{t.papersLabel}</h3>
      {papers.map((pp, i) => (
        <div key={i} className="paper-item">
          <div className="paper-teaser" style={{ background: pp.teaserBg }}>
            <span className="paper-tag">{pp.tag}</span>
            <span className="paper-year">{pp.year}</span>
          </div>
          <div className="paper-body">
            <div className="paper-title">{pp.title}</div>
            <div className="paper-authors">
              {pp.pre}
              <strong className="paper-self">{pp.self}</strong>
              {pp.post}
            </div>
            <div className="paper-venue">{pp.venue}</div>
            <div className="paper-doi-row">
              <a href={pp.doiUrl} target="_blank" rel="noreferrer" className="pill pill-sm pill-accent">
                DOI · {pp.doi}
              </a>
            </div>
          </div>
        </div>
      ))}
      <p className="core-text">{t.coreText}</p>

      <div className="pub-columns">
        <div>
          <h3 className="subsection-label">{t.booksLabel}</h3>
          {books.map((bk, i) => (
            <div key={i} className="book-item">
              <div className="book-title">{bk.title}</div>
              {bk.note && <div className="book-note">{bk.note}</div>}
            </div>
          ))}
          <div className="columns-block">
            <h3 className="subsection-label subsection-label--m8">{t.columnsLabel}</h3>
            <p className="columns-text">{t.columnsText}</p>
          </div>
        </div>
        <div>
          <h3 className="subsection-label">{t.patentsLabel}</h3>
          {patents.map((pt, i) => (
            <div key={i} className="patent-item">
              <div className="patent-title">{pt.title}</div>
              <div className="patent-meta">
                {pt.role} · {pt.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;
