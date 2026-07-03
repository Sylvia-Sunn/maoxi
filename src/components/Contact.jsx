function Contact({ t }) {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">{t.contactTitle}</h2>
      <div className="contact-grid">
        <a href="mailto:1132719443@qq.com" className="contact-card">
          <div className="contact-label">{t.emailLabel}</div>
          <div className="contact-value">1132719443@qq.com</div>
        </a>
        <a
          href="https://www.design.ecnu.edu.cn/"
          target="_blank"
          rel="noreferrer"
          className="contact-card contact-card-muted"
        >
          <div className="contact-label">{t.affLabel}</div>
          <div className="contact-value">{t.affValue} ↗</div>
        </a>
      </div>
    </section>
  );
}

export default Contact;
