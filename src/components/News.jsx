function News({ t, news }) {
  return (
    <section id="news" className="section">
      <h2 className="section-title">{t.newsTitle}</h2>
      <div className="news-list">
        {news.map((nw, i) => (
          <div key={i} className="news-item">
            <span className="news-date">{nw.date}</span>
            <span className="news-text">{nw.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
