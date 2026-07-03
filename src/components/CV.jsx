function CV({ t, timeline, appointments }) {
  return (
    <section id="cv" className="section">
      <h2 className="section-title">{t.cvTitle}</h2>
      <div className="cv-columns">
        <div className="timeline">
          {timeline.map((tl, i) => (
            <div key={i} className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-year">{tl.year}</div>
              <div className="timeline-event">{tl.event}</div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="subsection-label subsection-label--m8">{t.apptTitle}</h3>
          {appointments.map((ap, i) => (
            <div key={i} className="appt-item">
              <div className="appt-org">{ap.org}</div>
              <div className="appt-role">{ap.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CV;
